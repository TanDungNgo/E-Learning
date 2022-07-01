//become teacher
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class Becometeacher extends Component {
    state = {
        user_id : null,
        video_link : '',
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    createRequest = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/request-to-become-teacher', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                buttons: "OK!"
            });
            
            this.props.history.push('/');
            this.setState({
                user_id: '',
                video_link: '',
            });
        }
        // else
        // {
        //     this.setState({
        //         error_list: res.data.validate_err,
        //     });
        // }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Become a teacher</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.createRequest}>
                                    <div className="form-group">
                                        <label>User ID</label>
                                        <input type="text" className="form-control" name="user_id" value={this.state.user_id} onChange={this.handleInput} />
                                    </div>
                                    <div className="form-group">
                                        <label>Video Link</label>
                                        <input type="text" className="form-control" name="video_link" value={this.state.video_link} onChange={this.handleInput} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Becometeacher;