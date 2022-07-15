import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {default as storage} from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Create from './Create';
class Addtimedata extends Component
{
    state = {
        lesson_id: this.props.match.params.id,
        n: '',
        minute: [],
        second: [],
        table: '',
        error_list: [],
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveTimedata = async (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('second', this.state.second)
        data.append('minute', this.state.minute)
        const res = await axios.post('http://127.0.0.1:8000/api/save-timedata', data);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            // swal({
            //     title: "Success!",
            //     text: res.data.message,
            //     icon: "success",
            //     buttons: "OK!"
            // });
            
        }
        else
        {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }
    generate_table = () => {
        // creates a <table> element and a <tbody> element
         const tbl = document.createElement("table");
         const tblBody = document.createElement("tbody");
       
         // creating all cells
         for (let i = 0; i < this.state.n; i++) {
           // creates a table row
           const row = document.createElement("tr");
       
           for (let j = 0; j < 2; j++) {
             // Create a <td> element and a text node, make the text
             // node the contents of the <td>, and put the <td> at
             // the end of the table row
             const cell = document.createElement("td");
             const cellText = document.createElement("INPUT");
             cell.appendChild(cellText);
             row.appendChild(cell);
           }
       
           // add the row to the end of the table body
           tblBody.appendChild(row);
         }
       
         // put the <tbody> in the <table>
         tbl.appendChild(tblBody);
         
         // appends <table> into <body>
         document.body.appendChild(tbl);
         // sets the border attribute of tbl to '2'
         tbl.setAttribute("border", "2")
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add timedata for video
                                    <Link to={``} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className='form-group mb-3'>
                                    <label>Input n </label>
                                    <input type='text' name='n' onChange={this.handleInput} value={this.state.n} className='form-control'/>
                                </div>
                                <div className='form-group mb-3'>
                                    <button onClick={this.generate_table} className='btn btn-primary'>Continute</button>
                                </div>
                                {/* <Create/> */}
                                {/* <div className='form-group mb-3'>
                                    <label> Minute </label>
                                    <input type='text' name='minute' onChange={this.handleInput} value={this.state.minute}  className='form-control'/>
                                </div>
                                    <div className='form-group mb-3'>
                                    <label> Second </label>
                                    <input type='text' name='second' onChange={this.handleInput} value={this.state.second}  className='form-control'/>
                                </div>
                               <div className='form-group mb-3'>
                                    <button onClick={this.saveTimedata} className='btn btn-primary'>Save</button>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
export default Addtimedata;