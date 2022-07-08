import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
export default class AddTimedata extends Component {
    props = {
        user_id: null,
        video_link: 'https://www.youtube.com/watch?v=71iD9V0ZzYA&list=PLKF0qvryQa5hCr4a1HiR_DB0z6pl4mbnf&index=7',
        index: 0,
    }
    addButton = async (e) => {
        const minute = document.createElement('input');
        minute.setAttribute('type', 'number');
        minute.setAttribute('placeholder', 'Minute');
        minute.setAttribute('name', 'minute');
        minute.setAttribute('id', 'minute');
        minute.setAttribute('class', 'form-control');
        minute.setAttribute('required', 'true');
        minute.setAttribute('min', '0');
        minute.setAttribute('max', '59');
        const second = document.createElement('input');
        second.setAttribute('type', 'number');
        second.setAttribute('placeholder', 'Second');
        second.setAttribute('name', 'second');
        second.setAttribute('id', 'second');
        second.setAttribute('class', 'form-control');
        second.setAttribute('required', 'true');
        second.setAttribute('min', '0');
        second.setAttribute('max', '59');
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/api/timedata';
        form.appendChild(minute);
        form.appendChild(second);
        document.body.appendChild(form);
    }

    render() {
        return (
            <html>
                <head>
                    <title>Add Timedata</title>
                    </head>
            <div>
                <button onClick={this.addButton}>
                    Add Timedata
                </button>
                </div>
            </html>

        );
    }

}
