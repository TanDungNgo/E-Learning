import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import ReactPlayer from 'react-player';
class Register extends Component
{
    state = {
        name: '',
        display_name: '',
        email: '',
        password: '',
        passwordAgain: '',
        error_list: [],
    }

    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    Register = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/users/register', this.state);
        if(res.data.status === 200)
        {
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                buttons: "OK!"
              });
            
            this.props.history.push('/');
            this.setState({
                email: '',
                password: '',
            });
        }
        else if(res.data.status === 401)
        {
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                buttons: "OK!"
              });
            
            this.props.history.push('/');
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
                                <h4>Register
                                <Link to={"/"} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.Register}>
                                    <div className='form-group mb-3'>
                                        <label> Name</label>
                                        <input type='text' name='name' onChange={this.handleInput} value={this.state.name} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.name}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> Displayname</label>
                                        <input type='text' name='display_name' onChange={this.handleInput} value={this.state.display_name} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.display_name}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> Email</label>
                                        <input type='text' name='email' onChange={this.handleInput} value={this.state.email} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.email}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> Password </label>
                                        <input type='password' name='password' onChange={this.handleInput} value={this.state.password} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.password}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> Password Again </label>
                                        <input type='password' name='passwordAgain' onChange={this.handleInput} value={this.state.passwordAgain} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.passwordAgain}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Register</button>
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
export default Register;