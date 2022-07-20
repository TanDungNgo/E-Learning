import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
class Edittimedata extends Component {
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
  handleMinute = (e) => {
    this.setState({
      minute: e.target.value,
    });
  };
  handleSecond = (e) => {
    this.setState({
      second: e.target.value,
    });
  };
  async componentDidMount() {
    const lesson_id = this.props.match.params.id;
    const res = await axios.get(
      `https://benefique-monsieur-33716.herokuapp.com/api/timedata/${lesson_id}`
    );
    if (res.data.status === 200) {
      this.setState({
        n: res.data.time.length,
        time: res.data.time,
      });
    } else if (res.data.status === 404) {
      this.props.history.push("/");
    } else {
      this.setState({
        error_list: res.data.validate_err,
      });
    }
  }
  updateTimedata = async (e, id) => {
    e.preventDefault();
    const res = await axios.put(
      `http://127.0.0.1:8000/api/update-timedata/${id}`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      alert(res.data.message);
      window.location.reload();
      // this.props.history.push(`/`);
    }
    if (res.data.status === 404) {
      console.log(res.data.message);
      window.location.reload();
      // this.props.history.push(`/`);
    } else {
      this.setState({
        error_list: res.data.validate_err,
      });
    }
  };
  deleteTimedata = async (e, id) => {
    const thidClickedFunda = e.currentTarget;
    thidClickedFunda.innerText = "Deleting";
    const res = await axios.delete(`https://benefique-monsieur-33716.herokuapp.com/api/delete-timedata/${id}`);
    if (res.data.status === 200) {
      thidClickedFunda.closest("tr").remove();
      // console.log(res.data.message);
      alert(res.data.message);
      window.location.reload();
    }
  };

  render() {
    const table = {
      border: "1px solid black",
    };
    var time_table = "";
    if (this.state.loading) {
      time_table = (
        <tr>
          <td colSpan="7">
            <h2>Loading...</h2>
          </td>
        </tr>
      );
    } else {
      time_table = this.state.time.map((item) => {
        return (
          <tr key={item.id}>
            <td style={table}>{item.id}</td>
            <td style={table}>
              {item.minute}:{item.second}
            </td>
            <td style={table}>
              <input
                type="text"
                name="minute"
                onChange={this.handleMinute}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </td>
            <td style={table}>
              <input
                type="text"
                name="second"
                onChange={this.handleSecond}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </td>
            <td style={table}>
              <button
                onClick={(e) => this.updateTimedata(e, item.id)}
                className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-500 ease-in-out hover:scale-95"
              >
                Update
              </button>
            </td>
            <td style={table}>
              <button
                onClick={(e) => this.deleteTimedata(e, item.id)}
                className="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-500 ease-in-out hover:scale-95"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
    return (
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <h1 className="  text-black text-center text-2xl font-bold">
          Edit timedata for video
        </h1>
        <table style={table}>
          <thead>
            <tr>
              <th style={table}>Id</th>
              <th style={table}>Value</th>
              <th style={table}>Minute</th>
              <th style={table}>Second</th>
              <th style={table}>Update</th>
              <th style={table}>Delete</th>
            </tr>
          </thead>
          <tbody>{time_table}</tbody>
        </table>
      </div>
    );
  }
}
export default Edittimedata;
