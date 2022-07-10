import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Addtimedata extends Component {
  state = {
    lesson_id: this.props.match.params.id,
    n: "",
    minute: "",
    second: "",
    time: [],
    error_list: [],
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveTimedata = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("lesson_id", this.state.lesson_id);
    data.append("second", this.state.second);
    data.append("minute", this.state.minute);
    const res = await axios.post(
      "http://127.0.0.1:8000/api/save-timedata",
      data
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.props.history.push(`/`);
    } else {
      this.setState({
        error_list: res.data.validate_err,
      });
    }
  };
  addRow = () => {
    var time = [];
    for (var i = 0; i < this.state.n; i++) {
      time.push({});
    }
    this.setState({
      time: time,
    });
    console.log(this.state.time.length);
  };

  generate_table = () => {
    const tbl = document.createElement("table");
    tbl.style.width = "200px";
    tbl.style.border = "1px solid black";
    const tblHead = document.createElement("thead");
    let row_1 = document.createElement("tr");
    let heading_2 = document.createElement("th");
    heading_2.innerHTML = "Minute";
    let heading_3 = document.createElement("th");
    heading_3.innerHTML = "Second";

    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    tblHead.appendChild(row_1);
    const tblBody = document.createElement("tbody");
    for (let i = 0; i < this.state.n; i++) {
      const row = document.createElement("tr");
      row.style.width = "200px";
      row.style.border = "1px solid black";
      for (let j = 0; j < 2; j++) {
        const cell = document.createElement("td");
        cell.style.width = "200px";
        cell.style.border = "1px solid black";
        const cellText = document.createElement("Input");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }

    tbl.appendChild(tblHead);
    tbl.appendChild(tblBody);

    var button = document.createElement("button");
    button.style.background = "salmon";
    button.style.height = "30px";
    button.style.width = "80px";
    button.innerHTML = "Save";
    document.body.appendChild(tbl);
    document.body.appendChild(button);
    button.addEventListener("click", function () {
      // var text = document.element.getElementsByTagName("Input");
      for (let i = 1; i < tbl.rows.length; i++) {
        for (let j = 1; j < tbl.rows[i].cells.length; j++) {
          console.log(
            tbl.rows[i].cells[j].document.getElementsByTagName("Input")
          );
        }
      }
    });
  };

  saveArrdata =  async (e) => {
    for (var i = 0; i < this.state.time.length; i++) {
      const minute = document.getElementsByName("minute")[i].value;
      const second = document.getElementsByName("second")[i].value;
      console.log(minute + second);
      e.preventDefault();
      const data = new FormData();
      data.append("lesson_id", this.state.lesson_id);
      data.append("second", second);
      data.append("minute", minute);
      const res = await axios.post(
        "http://127.0.0.1:8000/api/save-timedata",
        data
      );
      if (res.data.status === 200) {
        console.log(res.data.message);
        // this.props.history.push(`/`);
      } else {
        this.setState({
          error_list: res.data.validate_err,
        });
      }
    }
  };
  render() {
    const table = {
      border: "1px solid black",
    };
    var time_table = this.state.time.map(() => {
      return (
        <tr>
          <td style={table}>
            <input
              type="text"
              name="minute"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </td>
          <td style={table}>
            <input
              type="text"
              name="second"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </td>
        </tr>
      );
    });
    return (
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <h1 className="  text-black text-center text-2xl font-bold">
          Add timedata for video
        </h1>
        {/* <form onSubmit={this.saveTimedata}>
              <div className="mb-6 form-group">
                <label className="form-check-label inline-block text-xl  text-black">
                  Minute
                </label>
                <input
                  type="text"
                  name="minute"
                  onChange={this.handleInput}
                  className="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div className="mb-6">
              <label className="form-check-label inline-block text-xl  text-black">
                  Second
                </label>
                <input
                  type="text"
                  name="second"
                  onChange={this.handleInput}
                  className="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out hover:scale-95"
              >
                Save
              </button>
              </form> */}

        <div className="card-body">
          <div className="form-group mb-3">
            <label className="form-check-label inline-block text-xl  text-black">
              Input n{" "}
            </label>
            <input
              type="text"
              name="n"
              onChange={this.handleInput}
              className="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="form-group mb-3">
            <button
              onClick={this.addRow}
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out hover:scale-95"
            >
              Continute
            </button>
          </div>
          <table style={table} id="table">
            <thead>
              <tr>
                <th style={table}>Minute</th>
                <th style={table}>Second</th>
              </tr>
            </thead>
            <tbody>{time_table}</tbody>
          </table>
          <button
            onClick={this.saveArrdata}
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out hover:scale-95"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
export default Addtimedata;
