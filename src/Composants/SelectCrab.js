
import React, { Component } from 'react';

export default class SelectCrab extends Component {

    render() {

        var Data     = ['Araignée',
            'Etrille',
            'Tourteau',
            
            ],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


        return <select>{Data.map(MakeItem)}</select>;

    }

};