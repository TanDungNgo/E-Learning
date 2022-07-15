import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class Editvideo extends Component
{
    state = {
        course_id: '',
        video: '',
        error_list: [],
    }

    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleVideo = (e) => {
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
                course_id: res.data.lesson.course_id,
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
    Updatevideo = async (e) => {
        e.preventDefault();
        const lesson_id = this.props.match.params.id;
        const data = new FormData()
        data.append('lesson_id', lesson_id)
        data.append('video', this.state.video)
        const res = await axios.post(`http://127.0.0.1:8000/api/update-video/${lesson_id}`, data);
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
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit video
                                    <Link to={`/edit-lesson/${this.props.match.params.id}`} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.Updatevideo}>
                                    <div className='form-group mb-3'>
                                        <input type='file' name='video'
                                         onChange={this.handleVideo} 
                                            className='form-control'/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Update Video</button>
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
export default Editvideo;