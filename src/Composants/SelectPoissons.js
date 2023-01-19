
import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './ListCaptures.css';

//export default class SelectPoisson extends Component {
  function SelectPoisson (props){
   // constructor(props) {
        //super(props);
       // this.handlenomcapture=this.handlenomcapture.bind(this);
   // }
   /* handlenomcapture(){           
       this.props.handlenomcapture();  
        console.log('handle props'+this.props.handlenomcapture());     
      }*/
    //render() {
      // let handlenomcapture={(e)=>this.props.handlenomcapture(e)};
      // console.log('props selectPoisson'+this.props.handlenomcapture())
      //let {childToParent}=childToParent;
      const stateEnfant =useState();

        const data     = ['Aiglefin',
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
                return  <option key={X.toString()}> {X}</option>;
                //<div key={X.toString()} className="key"></div>
                
            };
            const change=(e)=>props.handlenomcapture(e);
            const click1=()=>props.click(stateEnfant);
               

        return  <Form.Select aria-label="Default select example"  onClick={click1} onChange={change}>{data.map(MakeItem)}</Form.Select> ;

        //onChange={(e)=>props.handlenomcapture(e)}>{data.map(MakeItem)}</Form.Select>;

    //}

};
export default SelectPoisson;