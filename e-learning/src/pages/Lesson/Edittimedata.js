import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Button from "../../components/Button/Button";
class Edittimedata extends Component
{
    state = {
        lesson_id: this.props.match.params.id,
        n: '',
        minute: '',
        second: '',
        time: [],
        error_list: [],
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleMinute = (e) => {
        this.setState({
            minute: e.target.value
        })
    }
    handleSecond = (e) => {
        this.setState({
            second: e.target.value
        })
    }
    async componentDidMount() {
        const lesson_id = this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/timedata/${lesson_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                n: res.data.time.length,
                time: res.data.time
            });
        }
        else if (res.data.status === 404)
        {
            this.props.history.push('/');
        }
        else
        {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }
    updateTimedata = async (e,id) => {
        e.preventDefault();
        const res = await axios.put(`http://127.0.0.1:8000/api/update-timedata/${id}`, this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message); 
            window.location.reload();  
            // this.props.history.push(`/`);         
        }
        if(res.data.status === 404)
        {
            console.log(res.data.message);  
            window.location.reload(); 
            // this.props.history.push(`/`);         
        }
        else
        {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }

    render() {
        const table = {
            border: "1px solid black"
        };
        var time_table = "";
        if(this.state.loading)
        {
            time_table = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            time_table = 
            this.state.time.map( (item) =>{
                return (
                    <tr key={item.id}>
                        <td style={table}>{item.id}</td>
                        <td style={table}>{item.minute}:{item.second}</td>
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
                            <Button
                            textContent="Update"
                            className="w-full !rounded-none col-span-1"
                            onClick={(e) => this.updateTimedata(e,item.id)}
                            ></Button>
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
                    </tr>
                </thead>
                    <tbody>
                        {time_table}
                    </tbody>
            </table>
          </div>
        )
    }
}
export default Edittimedata;