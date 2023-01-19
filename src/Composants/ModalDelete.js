import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { TbAnchorOff } from "react-icons/tb";
import FishinService from '../Service/FishinService';

function ModalDelete(props) {
    const [show, setShow] = useState(false);

    /*useEffect(()=>{
        getSpots()    
       deleteSpot()
    }, [])*/

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const {spot}= props;

    const deleteSpot=()=>{  
        const {getSpots}=props;
        FishinService.deleteSpot(spot).then((response)=>{
            //setSpots(spots.filter(spot =>{return spot.id !== id;}))
            console.log(response.data)
            
            getSpots();
  
        });
    }
  
    return (
      <>
               
        <Button  className="square bg-gris rounded-9 ms-3 me-3"  onClick={handleShow}><TbAnchorOff/></Button>
    
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Suppression</Modal.Title>
          </Modal.Header>
          {/*<Form.Body>Etes-vous sûr de vouloir supprimer ce spot? Toutes les captures assoiciées seront perdues</Form.Body>*/}
         
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