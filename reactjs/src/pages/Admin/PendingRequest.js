import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import ReactPlayer from 'react-player';
import { connectStorageEmulator } from 'firebase/storage';


class PendingRequset extends Component{
    state = {
        request : [],
    }
    async componentDidMount () {
        const res = await axios.get('http://localhost:8000/api/admin/all-request-become-teacher')
        if(res.data.status === 200)
        {
            this.setState({
                request: res.data.requests
            })
        }
    }
    handleApprove = async (e, id) => {
        const res = await axios.put(`http://localhost:8000/api/admin/approve-request-become-teacher/${id}`)
        if(res.data.status === 200)
        {
            swal("Approved!", "The request has been approved!", "success");
            this.componentDidMount();
        }
    }
    handleReject = async (e,id) => {
        const res = await axios.put(`http://localhost:8000/api/admin/reject-request-become-teacher/${id}`)
        if(res.data.status === 200)
        {
            swal("Rejected!", "The request has been rejected!", "success");
            this.componentDidMount();
        }
    }

    render () {
        var requset_HTML = this.state.request.map((request, index) => {
            if(request.status === 'pending')
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{request.user_id}</td>
                    <td>
                    <iframe width="450" height="252" src="https://www.youtube.com/embed/PC49th-Jf0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </td>
                    <td>{request.status}</td>
                    <td>
                            <button className="btn btn-success" onClick={(e)=>this.handleApprove(e, request.id)}>Approve</button>
                            <button className="btn btn-danger" onClick={(e)=>this.handleReject(e, request.id)} >Reject</button>
                    </td>
                </tr>
            )})
        return (
            <div className="container">
                <h2>Pending Request</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User ID</th>
                            <th>Video Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requset_HTML}
                    </tbody>
                </table>
            </div>
        )
        }
}


export default PendingRequset;