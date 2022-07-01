import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class Feedback extends Component
{
    state = {
        path: '',
        body: '',
        error_list: [],
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    async componentDidMount() {
        const record_id = this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/feedback/${record_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                path: res.data.record.record_file,
            })
        }
    }
    saveFeedback = async (e) => {
        e.preventDefault();
        const data = new FormData()
        const record_id = this.props.match.params.id;
        data.append('record_id', record_id)
        data.append('body', this.state.body)
        const res = await axios.post('http://127.0.0.1:8000/api/save-feedback', data);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            // swal({
            //     title: "Success!",
            //     text: res.data.message,
            //     icon: "success",
            //     buttons: "OK!"
            //   });
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
                                <h4>Feedback
                                    <Link className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className='form-group mb-3'>
                                    <audio src={this.state.path} controls>
                                    </audio>
                                </div>
                                <form onSubmit={this.saveFeedback}>
                                    <div className='form-group mb-3'>
                                        <textarea name='body' onChange={this.handleInput} value={this.state.body} className='form-control' rows="10"></textarea>
                                        <span className='text-danger'>{this.state.error_list.body}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Feedback</button>
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
export default Feedback;