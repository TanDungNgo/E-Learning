import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class Editlesson extends Component
{
    state = {
        name: '',
        description: '',
        course_id: '',
        video: '',
        error_list: [],
    }

    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleChange = (e) => {
        this.setState({
            video: e.target.files[0]
        })
    }
    async componentDidMount() {
        const lesson_id = this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-lesson/${lesson_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                name: res.data.lesson.name,
                description: res.data.lesson.description,
                course_id: res.data.lesson.course_id,
                video: 'http://127.0.0.1:8000/Video/' + res.data.lesson.video_link
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
            this.props.history.push('/');
        }
    }
    updateLesson = async (e) => {
        e.preventDefault();
        const lesson_id = this.props.match.params.id;
        const res = await axios.put(`http://127.0.0.1:8000/api/update-lesson/${lesson_id}`, this.state);
        if(res.data.status === 200)
        {
            // console.log(res.data.message);
            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                buttons: "OK!"
            })
            this.props.history.push(`/show-course/${this.state.course_id}`);
        }
        else if (res.data.status === 404)
        {
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                buttons: "OK!"
            });
            this.props.history.push(`/show-course/${this.state.course_id}`);
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
                                <h4>Edit Lesson
                                    <Link to={`/show-course/${this.state.course_id}`} className="btn btn-primary btn-sm float-end"> Back</Link>
                                    <Link to={`/edit-video/${this.props.match.params.id}`} className="btn btn-info btn-sm float-end"> Edit video</Link>                     
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateLesson}>
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
                                        <button type='submit' className='btn btn-primary'>Update Lesson</button>
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
export default Editlesson;