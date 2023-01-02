
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './ListCaptures.css';
export default class SelectPoisson extends Component {
   
    constructor(props) {
        super(props);
        this.handlenomcapture=this.handlenomcapture.bind(this);
    }
    handlenomcapture(){           
        this.props.handlenomcapture();  
        console.log('handle props'+this.props.handlenomcapture());     
      }
    render() {
        let {handlenomcapture}=this.props;
        
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
                return  <option><div key={X.toString()} className="key"></div> {X}</option>;
                
                
            };


        return  <Form.Select aria-label="Default select example" onChange={(e)=>handlenomcapture(e)}>{Data.map(MakeItem)}</Form.Select>;

    }

};