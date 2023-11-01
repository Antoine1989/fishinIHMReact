import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { TbAnchorOff } from "react-icons/tb";
import { GiSpearfishing } from "react-icons/gi";
import FishinService from '../Service/FishinService';
import '../ComposantsIcons/ComposantsIcons.css';

function ModalDeleteCapture(props) {
    const [show, setShow] = useState(false);

  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const {capture}= props;

    const deleteCapture=()=>{  
        const {getCaptures}=props;
        FishinService.deleteCapture(capture).then((response)=>{
           
            console.log(response.data)
            
            getCaptures();
            handleClose();
        });
    }
  
    return (
      <>
               
        <Button  className="square deleteModale rounded-9 ms-3 me-3 "  onClick={handleShow}><GiSpearfishing size={20} className="iconDelete"/></Button>
    
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Suppression de la capture</Modal.Title>
          </Modal.Header>
          {/*<Form.Body>Etes-vous sûr de vouloir supprimer ce spot? Toutes les captures assoiciées seront perdues</Form.Body>*/}
         
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button className="bg-gris" onClick={deleteCapture} >
             Oui
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalDeleteCapture;