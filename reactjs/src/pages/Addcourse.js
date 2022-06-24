import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class Addcourse extends Component
{
    state = {
        name: '',
        description: '',
        error_list: [],
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveCourse = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/add-course', this.state);
        if(res.data.status === 200)
        {
            // console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                buttons: "OK!"
              });
            
            this.props.history.push('/');
            this.setState({
                name: '',
                description: '',
            });
        }
        else
        {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Course
                                    <Link to={"/"} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveCourse}>
                                    <div className='form-group mb-3'>
                                        <label> Course Name</label>
                                        <input type='text' name='name' onChange={this.handleInput} value={this.state.name} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.name}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> Description </label>
                                        {/* <input type='text' name='description' onChange={this.handleInput} value={this.state.description} className='form-control'/> */}
                                        <textarea name='description' onChange={this.handleInput} value={this.state.description} className='form-control'></textarea>
                                        <span className='text-danger'>{this.state.error_list.description}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Save Course</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Addcourse;