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

    deleteLesson = async (e, id) => {
        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Deleting"
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-lesson/${id}`);
        if(res.data.status === 200)
        {
            thidClickedFunda.closest("tr").remove();
            // console.log(res.data.message);
            swal({
                title: "Deleted!",
                text: res.data.message,
                icon: "success",
                buttons: "OK!"
              })
        }
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
    // openInNewTab = async(e, url) => {
    //     const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    //     if (newWindow) newWindow.opener = null
    // }

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
                        <td> <Link to={`/show-lesson/${item.id}`}>{item.name}</Link></td>
                        <td>{item.description}</td>
                        <td>{item.course_id}</td>
                        <td>
                            <video width="400px" height="200px" controls>
                                <source src={item.video_link} type="video/mp4"/>
                            </video>
                        </td>
                        <td>
                            <Link to={`/edit-lesson/${item.id}`} className="btn btn-success btn-sm ">Edit</Link>
                        </td>
                        <td>
                            <button type='button' onClick={(e) => this.deleteLesson(e, item.id)} className='btn btn-danger btn-sm'>Delete</button>
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
                                    <Link to={"/course"} className="btn btn-primary btn-sm float-end"> Back</Link>
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
                                            <th>Edit</th>
                                            <th>Delete</th>
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