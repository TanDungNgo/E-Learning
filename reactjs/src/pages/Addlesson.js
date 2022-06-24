import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class Addlesson extends Component
{
    state = {
        name: '',
        description: '',
        course_id: this.props.match.params.id,
        error_list: [],
    }
    file = {
        link_video: null,
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onFileChange = (e) => {
        this.file.link_video = e.target.files[0];
    }

    saveLesson = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        formData.append('course_id', this.state.course_id);
        formData.append('video', this.file.link_video);

        const res = await axios.post('http://127.0.0.1:8000/api/add-lesson', formData);
        if(res.data.status === 200)
        {
            // console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                buttons: "OK!"
              });
            
            this.props.history.push(`/show-course/${this.state.course_id}`);
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
        // e.preventDefault();
        // const url = "http://127.0.0.1:8000/api/add-lesson";
        // const data = new FormData();
        // data.append('video', this.state.link_video);
        // data.append('name', this.state.name);
        // data.append('description', this.state.description);
        // data.append('course_id', this.state.course_id);
        // axios.post(url, data).then(res => {
        //     if(res.data.status === 200)
        //     {
        //         // console.log(res.data.message);
        //         swal({
        //             title: "Success!",
        //             text: res.data.message,
        //             icon: "success",
        //             buttons: "OK!"
        //         });
                
        //         this.props.history.push(`/show-course/${this.state.course_id}`);
        //         this.setState({
        //             name: '',
        //             description: '',
        //         });
        //     }
        //     else
        //     {
        //         this.setState({
        //             error_list: res.data.validate_err,
        //         });
        //     }
        // })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Lesson
                                    <Link to={`/show-course/${this.state.course_id}`} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveLesson}>
                                <input type='hidden' name='course_id' onChange={this.handleInput} value={this.state.course_id} className='form-control'/>
                                    <div className='form-group mb-3'>
                                        <label> Lesson Name</label>
                                        <input type='text' name='name' onChange={this.handleInput} value={this.state.name} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.name}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> Description </label>
                                        <textarea name='description' onChange={this.handleInput} value={this.state.description} className='form-control'></textarea>
                                        <span className='text-danger'>{this.state.error_list.description}</span>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <input accept='video/*' type='file' name='video' onChange={this.onFileChange} className='form-control'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Save Lesson</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Addlesson;