const handleValidationError = (error, res) => {
  const errors = {};

  for (let field in error.errors) {
    errors[field] = error.errors[field].message;
  }

  res.status(400).json({ errors });
};

module.exports = {
  handleValidationError,
};
