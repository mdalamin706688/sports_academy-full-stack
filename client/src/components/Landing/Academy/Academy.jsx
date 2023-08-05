import React, { Component } from "react";
import Title from "../../common/Title/Title";
import "./Academy.css"

export default class Academy extends Component {
  render() {
    return (
      <div className="">
        <div className="oveflow-x-auto bg-base-300 h-[70vh] flex flex-col justify-center rounded-md">
          <div className="w-[80%] mx-auto text-center">
            <Title
              title="ACADEMY PROGRAM"
              subtitle="Find Your Game With The Halland Football Academy"
            />
          </div>
          <div className="">
            <table className="table mx-auto mt-7">
              <tbody className="mx-auto">
                {/* row 1 */}
                <tr>
                  <th className="text-center">1</th>
                  <td className="text-lg font-bold">
                    Know and Understand player identity
                  </td>
                  <td className="text-end" style={{ padding: "0px 10px" }}>
                    Lorem ipsum dolor consectetur adipiscing tempor labore
                    dolore lorem ipsum dolor mediocritatem tempor
                  </td>
                  <td className="flex justify-center">
                    <img className="w-[7%]" src="./right-arrow.png" alt="" />
                  </td>
                </tr>
                {/* row 2 */}
                <tr className="">
                  <th className="text-center">2</th>
                  <td className=" text-lg font-bold">
                    Identity player role models
                  </td>
                  <td className="text-end" style={{ padding: "0 10px" }}>
                    Lorem ipsum dolor consectetur adipiscing tempor labore
                    dolore lorem ipsum dolor mediocritatem tempor
                  </td>
                  <td className="flex justify-center">
                    <img className="w-[7%]" src="./right-arrow.png" alt="" />
                  </td>
                </tr>
                {/* row 3 */}
                <tr className="">
                  <th className="text-center">3</th>
                  <td className=" text-lg font-bold">
                    Develop 360-degree player plan
                  </td>
                  <td className="text-end" style={{ padding: "0 10px" }}>
                    Lorem ipsum dolor consectetur adipiscing tempor labore
                    dolore lorem ipsum dolor mediocritatem tempor
                  </td>
                  <td className="flex justify-center">
                    <img className="w-[7%]" src="./right-arrow.png" alt="" />
                  </td>
                </tr>
                {/* row 4 */}
                <tr className="">
                  <th className="text-center">4</th>
                  <td className=" text-lg font-bold">
                    Establish daily habits on and off the field
                  </td>
                  <td className="text-end" style={{ padding: "0 10px" }}>
                    Lorem ipsum dolor consectetur adipiscing tempor labore
                    dolore lorem ipsum dolor mediocritatem tempor
                  </td>
                  <td className="flex justify-center">
                    <img className="w-[7%]" src="./right-arrow.png" alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
