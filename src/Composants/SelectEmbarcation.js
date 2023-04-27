import {GiCanoe} from "react-icons/gi";
import {GiBoatFishing} from "react-icons/gi";
import {GiFishingPole} from "react-icons/gi";
import { Row,Container,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../ComposantsIcons/ComposantsIcons.css';
import React, { Component, useState } from 'react';

  function SelectEmbarcation (props){

//// Test state checkbox
    /*const [embarcation, setEmbarcation] = useState({ chosenValue: "", another: "another" });
    const { chosenValue } = embarcation;

    
    const handleEmbarcation = e => {
        e.persist();
        console.log(e.target.value);
    
        setEmbarcation(prevState => ({
          ...prevState,
          chosenValue: e.target.value
        }));
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        alert(`${chosenValue}`);
      };*/
    
///////////

function msgIcon(typeEmbarcation){
   
    let result="";
    if(typeEmbarcation==="Aucune"){
       result= "Pêche du bord";
    }
    else if(typeEmbarcation==="Canoë"){
        result= "Canoë";
    }
    else result= "Bateau";
    return result;

}

const none="Aucune";
const canoe="Canoë";
const boat="Bateau";

/*const renderTooltip = (props,typeEmbarcation) => (
    <Tooltip id="button-tooltip" {...props}>
     {msgIcon(typeEmbarcation)}
    </Tooltip>
  );*/
  function renderTooltip(typeEmbarcation,props){

   return <Tooltip id="button-tooltip" {...props}>
            {msgIcon(typeEmbarcation)}
        </Tooltip>
  }



return <Form className="text-center" /*onSubmit={handleSubmit}*/>{
    <div  className="mb-3">
    <Form.Group controlId="chosenValue">
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(none)}>
     <Form.Check
        inline
       className="formcheck"
        //disabled
        value="Aucune"
        label={<GiFishingPole size={28}/>}
        name="group1"     
        onChange={props.handleEmbarcation} 
        checked={props.chosenValue === "Aucune"}
      />
      </OverlayTrigger>

      <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(canoe)}>
      <Form.Check
        inline
        className="formcheck"
        value="Canoë"
        label={<GiCanoe size={28}/>}
        name="group1"
        onChange={props.handleEmbarcation}
        checked={props.chosenValue === "Canoë"}
        />
      </OverlayTrigger>

      <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(boat)}>
      <Form.Check
        inline
        className="formcheck"
        value="Bateau"
        label={<GiBoatFishing size={28}/>}  
        onChange={props.handleEmbarcation} 
        checked={props.chosenValue === "Bateau"}         
      />
      </OverlayTrigger>
      </Form.Group>  
    </div>
   
  }
  </Form>

  }
  export default SelectEmbarcation;