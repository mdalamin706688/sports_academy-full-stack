const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = require('../config/config');
const User = require('../models/User');
const Instructor = require('../models/Instructor');
const Admin = require('../models/Admin');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GitHubStrategy = require('passport-github').Strategy;

// Step 14: User Social Login with Facebook
const loginWithFacebook = (req, res, role) => {
  passport.authenticate('facebook', { scope: ['email'], state: role })(req, res);
};

passport.use(
    new FacebookStrategy(
        {
          clientID: '218542920683125',
          clientSecret: 'ac007a7d066d703de7acd6de62479159',
          callbackURL: '/auth/facebook/callback',
          profileFields: ['id', 'displayName', 'email'],
        },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const role = profile._json.role; // Assuming the role is provided in the user's Facebook profile

        const user = await handleSocialLogin(profile._json.email, role, profile._json.name);
        const token = generateToken(user._id, role);
        return done(null, { user, token });
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Step 15: User Social Login with Google
const loginWithGoogle = (req, res, role) => {
  passport.authenticate('google', { scope: ['profile', 'email'], state: role })(req, res);
};

passport.use(
    new GoogleStrategy(
        {
          clientID: '424713104398-ii53gqttqkrh827s3qdqhq34ok84o462.apps.googleusercontent.com',
          clientSecret: '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',
          callbackURL: '/auth/google/callback',
        },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const role = profile._json.role; // Assuming the role is provided in the user's Google profile

        const user = await handleSocialLogin(profile._json.email, role, profile._json.name);
        const token = generateToken(user._id, role);
        return done(null, { user, token });
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Step 16: User Social Login with GitHub
const loginWithGitHub = (req, res, role) => {
  passport.authenticate('github', { state: role })(req, res);
};

passport.use(
    new GitHubStrategy(
        {
          clientID: '2ed29872be1f5f340dec',
          clientSecret: '49812c18fe022d1ba6ff9cc70ef32bc34de2a35e',
          callbackURL: '/auth/github/callback',
        },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const role = profile._json.role; // Assuming the role is provided in the user's GitHub profile

        const user = await handleSocialLogin(profile._json.email, role, profile._json.name);
        const token = generateToken(user._id, role);
        return done(null, { user, token });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Step 17: User Signup
const signup = async (req, res, role) => {
  try {
    const { name, email, password } = req.body;

    // Check if the provided role is valid
    if (!['admin', 'user', 'instructor'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    // Select the appropriate model based on the role
    let UserModel;
    if (role === 'admin') {
      UserModel = Admin;
    } else if (role === 'user') {
      UserModel = User;
    } else if (role === 'instructor') {
      UserModel = Instructor;
    }

    // Check if the email is already registered
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user/instructor/admin
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = generateToken(newUser._id, role);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Step 18: User Login
const login = async (req, res, role) => {
  try {
    const { email, password } = req.body;

    // Check if the provided role is valid
    if (!['admin', 'user', 'instructor'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    // Select the appropriate model based on the role
    let UserModel;
    if (role === 'admin') {
      UserModel = Admin;
    } else if (role === 'user') {
      UserModel = User;
    } else if (role === 'instructor') {
      UserModel = Instructor;
    }

    // Check if the user/instructor/admin exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: `${role} not found` });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate JWT token
    const token = generateToken(user._id, role);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Helper function to handle social login
const handleSocialLogin = async (email, role, name) => {
  let UserModel;
  if (role === 'admin') {
    UserModel = Admin;
  } else if (role === 'user') {
    UserModel = User;
  } else if (role === 'instructor') {
    UserModel = Instructor;
  }

  let user = await UserModel.findOne({ email });

  if (!user) {
    const newUser = new UserModel({ name, email, password: '' });
    user = await newUser.save();
  }

  return user;
};

// Helper function to generate JWT token
const generateToken = (userId, role) => {
  return jwt.sign({ userId, role }, JWT_SECRET);
};

module.exports = { loginWithFacebook, loginWithGoogle, loginWithGitHub, signup, login };
