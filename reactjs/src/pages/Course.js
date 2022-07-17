import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
class Course extends Component
{   
    state = {
        courses: [],
        loading: true,
    }

    async componentDidMount() {

        const res = await axios.get('https://benefique-monsieur-33716.herokuapp.com/api/courses');
        if(res.data.status === 200)
        {
            this.setState({
                courses: res.data.courses,
                loading: false,
            })
        }
    }
    deleteCourse = async (e, id) => {
        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Deleting"
        const res = await axios.delete(`https://benefique-monsieur-33716.herokuapp.com/api/delete-course/${id}`);
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

    render() {
        
        var course_HTMLTABLE = "";
        if(this.state.loading)
        {
            course_HTMLTABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            course_HTMLTABLE =
            this.state.courses.map( (item) =>{
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                            <Link to={`show-course/${item.id}`}>{item.name}</Link>
                        </td>
                        <td>{item.description}</td>
                        <td>
                            <img width="400px" height="200px" src={item.banner} />
                        </td>
                        <td>
                            <Link to={`edit-course/${item.id}`} className="btn btn-success btn-sm ">Edit</Link>
                        </td>
                        <td>
                            <button type='button' onClick={(e) => this.deleteCourse(e, item.id)} className='btn btn-danger btn-sm'>Delete</button>
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
                                <h4> Course Data
                                    <Link to={"add-course"} className="btn btn-primary btn-sm float-end"> Add Course</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className = "table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Course name</th>
                                            <th>Description</th>
                                            <th>Banner</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {course_HTMLTABLE}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Course;