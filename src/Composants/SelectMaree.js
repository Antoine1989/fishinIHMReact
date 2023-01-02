
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class SelectMaree extends Component {

    render() {

        var Data     = ["Montante (flot)",
        "Descendante(jusant)","Pleine mer","Basse mer","Etal de pleine mer","Etal de basse mer"
                                
            ],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


        return  <Form.Select aria-label="Default select example" defaultValue="">{Data.map(MakeItem)}</Form.Select>;

    }

};