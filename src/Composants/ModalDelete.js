import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { TbAnchorOff } from "react-icons/tb";
import FishinService from '../Service/FishinService';
import '../ComposantsIcons/ComposantsIcons.css';
function ModalDelete(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const {spot}= props;

    const deleteSpot=()=>{  
        const {getSpots}=props;
        FishinService.deleteSpot(spot).then((response)=>{
            console.log(response.data)        
            getSpots();
  
        });
    }
  
    return (
      <>
               
        <Button  className="square deleteModale rounded-9 ms-3 me-3"  onClick={handleShow}><TbAnchorOff className="margin" size={20}/></Button>
    
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Suppression du spot</Modal.Title>
          </Modal.Header>
       <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button className="bg-gris" onClick={deleteSpot}>
             Oui
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalDelete;