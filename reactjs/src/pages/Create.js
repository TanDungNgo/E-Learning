import React, { useEffect, useState } from "react";
import axios from 'axios';


function Create() 
{
    const [second, setSecond] = useState("");
    const [minute, setMinute] = useState("");
    // function saveTimedata()
    // {
    //     const data = new FormData()
    //     data.append('second', second)
    //     data.append('minute', minute)
    //     console.log(second);
    //     console.log(minute);
    //     const res = await axios.post('http://127.0.0.1:8000/api/save-timedata', data);
    //     if(res.data.status === 200)
    //     {
    //         console.log(res.data.message);
    //         // swal({
    //         //     title: "Success!",
    //         //     text: res.data.message,
    //         //     icon: "success",
    //         //     buttons: "OK!"
    //         //   });
            
    //         // this.props.history.push(`/show-course/${this.state.course_id}`);
    //         // this.setState({
    //         //     name: '',
    //         //     description: '',
    //         // });
    //     }
    //     else
    //     {
    //         this.setState({
    //             error_list: res.data.validate_err,
    //         });
    //     }
    // }

    return (
        <div className="card-body">
            <div className='form-group mb-3'>
            <label> Minute </label>
            <input type='text' name='minute' value={minute} onChange={(e)=>setMinute(e.target.value)} className='form-control'/>
            </div>
            <div className='form-group mb-3'>
            <label> Second </label>
            <input type='text' name='second' value={second} onChange={(e)=>setSecond(e.target.value)} className='form-control'/>
            </div>
            <div className='form-group mb-3'>
                <button  className='btn btn-primary'>Save</button>
            </div>
        </div>
    );
}

export default Create;