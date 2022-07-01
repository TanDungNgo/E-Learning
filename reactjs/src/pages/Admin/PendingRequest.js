import React, {Component, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


class PendingRequset extends PureComponent{
    state = {
        request : [],
    }
    acceptRequest = async (e) => {
        e.preventDefault();
        const request_id = e.target.id;
        const res = await axios.put(`http://localhost:8000/api/accept-request/${request_id}`);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                buttons: "Accepted!"
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
        }
    }
}