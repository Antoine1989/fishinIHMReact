
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class SelectCrab extends Component {

    render() {

        var Data     = ['','Araignée',
            'Etrille',
            'Tourteau',
            
            ],
            MakeItem = function(X) {
                return <option key={X.toString()}>{X}</option>;
            };


        return <Form.Select aria-label="Default select example" onChange={(e)=>this.props.handlenomcapture(e)}>{Data.map(MakeItem)}</Form.Select>;

    }

};