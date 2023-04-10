
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class SelectPalinuridae extends Component {


    render() {

        const data     = ['Bouquet',
            'Crevettes',
            'Homard',
            'Langouste',
            ],
            MakeItem = function(X) {
                return <option key={X.toString()}>{X}</option>;
            };


        return <Form.Select aria-label="Default select example" onChange={(e)=>this.props.handlenomcapture(e)}>{data.map(MakeItem)}</Form.Select>;

    }

};