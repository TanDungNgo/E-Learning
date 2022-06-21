import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import ReactPlayer from 'react-player';
class Editcourse extends Component
{
    state = {
        name: '',
        description: '',
        error_list: [],
        lessons: [],
        loading: true,
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const course_id = this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/lessons/${course_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                name: res.data.course.name,
                description: res.data.course.description,
                lessons: res.data.lessons,
                loading: false,
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

    render() {
        const course_id = this.props.match.params.id;
        var lesson_HTMLTABLE = "";
        if(this.state.loading)
        {
            lesson_HTMLTABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            lesson_HTMLTABLE = 
            this.state.lessons.map( (item) =>{
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td> {item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.course_id}</td>
                        <td>
                            <ReactPlayer url='https://www.youtube.com/watch?v=oUFJJNQGwhk' width="400px" height="200px"/>
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
                                <h4>Show Course
                                    <Link to={"/"} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className='form-group mb-3'>
                                        <label> {this.state.name}</label>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label> {this.state.description}</label>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <Link to={`/add-lesson/${course_id}`} className="btn btn-primary btn-sm float-end"> Add Lesson</Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <table className = "table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Lesson name</th>
                                            <th>Description</th>
                                            <th>ID Course</th>
                                            <th>Video_link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lesson_HTMLTABLE}
                                    </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
export default Editcourse;