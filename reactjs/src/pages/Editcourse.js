import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class Editcourse extends Component
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

    async componentDidMount() {
        const course_id = this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-course/${course_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                name: res.data.course.name,
                description: res.data.course.description,
            });
        }
        else if (res.data.status === 404)
        {
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                buttons: "OK!"
            });
            this.props.history.push('/course');
        }
    }

    updateCourse = async (e) => {
        e.preventDefault();
        // document.getElementById('updatebtn').disabled = true;
        // document.getElementById('updatebtn').innerText = "Updating";
        const course_id = this.props.match.params.id;
        const res = await axios.put(`http://127.0.0.1:8000/api/update-course/${course_id}`, this.state);
        if(res.data.status === 200)
        {
            // console.log(res.data.message);
            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                buttons: "OK!"
            })
            this.props.history.push('/course');
            // document.getElementById('updatebtn').disabled = false;
            // document.getElementById('updatebtn').innerText = "Update Student";
        }
        else if (res.data.status === 404)
        {
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                buttons: "OK!"
            });
            this.props.history.push('/course');
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
                                <h4>Edit Course
                                    <Link to={"/course"} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateCourse}>
                                    <div className='form-group mb-3'>
                                        <label> Course Name</label>
                                        <input type='text' name='name' onChange={this.handleInput} value={this.state.name} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.name}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> Description</label>
                                        <input type='text' name='description' onChange={this.handleInput} value={this.state.description} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.description}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' id='updatebtn' className='btn btn-primary'>Update Course</button>
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
export default Editcourse;