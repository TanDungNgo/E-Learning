import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import ReactPlayer from 'react-player';
import {default as storage} from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
class Showlesson extends Component
{
    state = {
        lesson: '',
        record: '',
        lesson_id: this.props.match.params.id,
        path: '',
        records: [],
        url: '',
        loading: true,
    }
    handleRecord = (e) => {
        this.setState({
            record: e.target.files[0]
        })
    }
    handleUpload = () => {
 
        const storageRef = ref(storage, `/records/${this.state.record.name}`);
        const uploadTask = uploadBytesResumable(storageRef, this.state.record);
 
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
    async componentDidMount() {
        const lesson_id = this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/records/${lesson_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                path: res.data.lesson.video_link,
                records: res.data.records,
                loading: false,
            })
        }
    }
    refresh = () => {
        window.location.reload();
    }
    saveRecord = async (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('lesson_id', this.state.lesson_id)
        data.append('url', this.state.url)
        const res = await axios.post('http://127.0.0.1:8000/api/save-record', data);
        if(res.data.status === 200)
        {
            // console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                buttons: "OK!"
              });
            this.refresh();
        }
        else
        {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }
    render() {
        var record_HTMLTABLE = "";
        if(this.state.loading)
        {
            record_HTMLTABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            record_HTMLTABLE = 
            this.state.records.map( (item) =>{
                return (
                    <tr key={item.id}>
                        <td>
                        <audio controls>
                            <source src={item.path} type="audio/mpeg"/>
                        </audio>
                        </td>
                        <td>
                            <Link to={`/feedback/${item.id}`} className="btn btn-success btn-sm ">Feedback</Link>
                        </td>
                    </tr>
                );
            });
        }
        return (
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Record
                                <Link  className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                            <table className = "table table-bordered table-striped">
                                <td>
                                    <div className='form-group mb-3'>
                                    <video src={this.state.path} width="500" height="300" controls>
                                    </video>
                                </div>
                                </td>
                                <td>{record_HTMLTABLE}</td>
                            </table>
                                <div className='form-group mb-3'>
                                </div>
                                <div className='form-group mb-3'>
                                    <input type='file' name='record' onChange={this.handleRecord} className='form-control'/>
                                </div>

                                <div className='form-group mb-3'>
                                    <p>{this.state.percent} "% done"</p>
                                </div>
                                <div className='form-group mb-3'>
                                    <button onClick={this.handleUpload} className='btn btn-primary'>Upload to Firebase</button>
                                </div>
                                <div className='form-group mb-3'>
                                    <button onClick={this.saveRecord} className='btn btn-primary'>Save Record</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
            
    }
}
export default Showlesson;