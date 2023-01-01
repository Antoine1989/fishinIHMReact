
import React, { Component } from 'react';

export default class SelectCephalopode extends Component {

    render() {

        var Data     = ['Calmar',
            'Seiche',
            'Poulpe',
            
            ],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


        return <select>{Data.map(MakeItem)}</select>;

    }

};