
import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './ListCaptures.css';


  function SelectPoisson (props){
 

     var [change,setStateEnfant] =useState('');
        const data     = ['','Aiglefin',
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
 
                
            };
           
            // change=(e)=>props.handlenomcapture(e);
             
  

        return  <Form.Select aria-label="Default select example"  onChange={setStateEnfant=(change)=>props.handlenomcapture(change)}>{data.map(MakeItem)}</Form.Select> ;
      

};
export default SelectPoisson;