
import React, { Component,useState } from 'react';
import Form from 'react-bootstrap/Form';
import './ListCaptures.css';


function SelectTechnique (props){
    var [change,setStateEnfant] =useState('');

        const Data     = ["","Arbalète : Chasse à trou",
            "Arbalète : Chasse à l' indienne",
            "Arbalète : Chasse à la coulée",
            "Arbalète : Chasse à l’agachon",
            "Epuisette",
            "Surfcasting",
            "Pêche au bouchon",
            "Pêche au leurre",
            "Pêche à l’appât (ver..)",
            "Pêche à l’appât (crevette grise)",
            "Pêche à l’appât (crabe mou)",           
            "Pêche à la Turlutte",
            "Pêche au fond",
            "pêche à la traine",
            "pêche à soutenir",
            "Mitraillette",
            "Casier",
            "Filet",
            "Carrelet",
            "Palangre"
                        
            ],
            MakeItem = function(X) {
                return <option key={X.toString()}>{X}</option>;
            };


        return  <Form.Select aria-label="Default select example" onChange={setStateEnfant=(change)=>props.handletechnique(change)}>{Data.map(MakeItem)}</Form.Select>;

    };
    export default SelectTechnique