
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class SelectPoisson extends Component {

    render() {

        var Data     = ['Aiglefin',
            'Anguille',
            'Baliste cabri',
            'Bar',
            'Barbue',
            'Baudroie',
            'Bonite',
            'Chinchard',
            'Congre',
            'Cabillaud',
            'Daurade royale',
            'Dorade grise',       
            'Éperlan d"Europe',
            'Flet',
            'Flétan',
            'Grondin',
            'Lançon',
            'Liche',
            'Lieu jaune',
            'Lieu noir',
            'Limande',
            'Lingue',
            'Maquereau',
            'Merlan',
            'Merlu',
            'Mulet',
            'Orphie/Aiguillette',
            'Plie',
            'Raie',
            'Rouget',
            'Saint-pierre',
            'Sar commun',
            'Sardine',
            'Sole commune',
            'Tacaud',
            'Thon',
            'Turbot',
            'Vieille'
            
            ],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


        return  <Form.Select aria-label="Default select example">{Data.map(MakeItem)}</Form.Select>;

    }

};