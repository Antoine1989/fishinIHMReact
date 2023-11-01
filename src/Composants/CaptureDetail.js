import Table from 'react-bootstrap/Table';
import { FaRegEye } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import React, {Component,useState,useEffect} from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function CaptureDetail(props) {

   /* const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);*/
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
      Voir les détails
      </Tooltip>
    );
   //const {capture}= props;


    return (
        <>
       
          {/*<FaRegEye Click={handleShow} />*/}
                     
         
  {/*<div  key={props.key}>*/}
    <Modal show={props.show} /*capture={props.capture}*/ onHide={props.handleClose} animation={false} capture={props.capture} >  
    
    <Modal.Header closeButton>
            <Modal.Title>Détails de la capture</Modal.Title>
     </Modal.Header>   
    <Table striped bordered hover key={props.capture}>
          <thead className="thead">
            <tr>
              <th>Nom</th>
              <th>Date de la pêche</th>
              <th>Quantité</th>
              <th>Poids (kg)</th>
              <th>Longueur (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>{props.nom?props.nom:"N/A"}</td>
              <td>{props.date?props.date:"N/A"}</td>
              <td>{props.quantite?props.quantite:"N/A"}</td>
              <td>{props.poids?props.poids:"N/A"}</td>
              <td>{props.longueur?props.longueur:"N/A"}</td>
            </tr>
         </tbody>
        <br></br>
         <thead className="thead">
            <tr>
              <th>Spot</th>
              <th>Technique de pêche</th>
              <th>Embarcation</th>
              <th>Marée</th>
              <th>Coefficient de marée</th>
            </tr>
          </thead >
          <tbody>
            <tr>
              <td>{props.spot}</td>
              <td>{props.technique?props.technique:"N/A"}</td>
              <td>{props.embarcation?props.embarcation:"N/A"}</td>
              <td>{props.maree?props.maree:"N/A"}</td>
              <td>{props.coef?props.coef:"N/A"}</td>
            </tr>
         </tbody>
         <br></br>
         <thead className="thead">
            <tr>
              <th>Commentaires</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">{props.commentaires?props.commentaires:"N/A"}</td>
              <td>{props.capture?props.capture:"N/A"}</td>
            </tr>
         </tbody>
         </Table>

         <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Fermer
          </Button>
          <Button className="bg-gris" onClick={props.handleClose} /*type='submit'*/ >
            OK
          </Button>
        </Modal.Footer>
       
         </Modal> 
        {/* </div>*/}
         </>
         );
}

export default CaptureDetail;
