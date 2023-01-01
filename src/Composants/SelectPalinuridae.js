
import React, { Component } from 'react';

export default class SelectPalinuridae extends Component {

    render() {

        var Data     = ['Bouquet',
            'Crevettes',
            'Homard',
            'Langouste',
            ],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


        return <select>{Data.map(MakeItem)}</select>;

    }

};