import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import {default as storage} from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
class Addlesson extends Component
{
    state = {
        name: '',
        description: '',
        course_id: this.props.match.params.id,
        video: '',
        url: '',
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
    handleUpload = () => {
 
        const storageRef = ref(storage, `/videos/${this.state.video.name}`);
        const uploadTask = uploadBytesResumable(storageRef, this.state.video);
 
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
 
                // update progress
                this.setState({
                    percent: percent
                })
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    this.setState({
                        url: url
                    });
                    console.log(this.state.url);
                });
            }
        );
    };
    saveLesson = async (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('name', this.state.name)
        data.append('description', this.state.description)
        data.append('course_id', this.state.course_id)
        data.append('url', this.state.url)
        const res = await axios.post('https://benefique-monsieur-33716.herokuapp.com/api/add-lesson', data);
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
                                <h4>Add Lesson
                                    <Link to={`/show-course/${this.state.course_id}`} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                    <p>{this.state.percent} "% done"</p>
                                    <button onClick={this.handleUpload}>Upload to Firebase</button>
                                <form onSubmit={this.saveLesson}>
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
                                        <input type='file' name='video'
                                         onChange={this.handleVideo} 
                                            className='form-control'/>
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
    }
}
export default Addlesson;