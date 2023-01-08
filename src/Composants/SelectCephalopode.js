
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
export default class SelectCephalopode extends Component {

    render() {

        var Data     = ['Calmar',
            'Seiche',
            'Poulpe',
            
            ],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


        return <Form.Select aria-label="Default select example">{Data.map(MakeItem)}</Form.Select>;

    }

};