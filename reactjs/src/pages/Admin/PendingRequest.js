import React, {Component, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


class PendingRequset extends PureComponent{
    state = {
        request : [],
    }
    allRequest = () => {
        axios.get('http://localhost:8000/admin/all-request-become-teacher')
        .then(res => {
            this.setState({
                request : res.data
            })
        }).catch(err => {
            console.log(err);
        }
        )
    }
}