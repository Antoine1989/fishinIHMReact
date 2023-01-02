import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaFish} from "react-icons/fa";
import '../ComposantsIcons/ComposantsIcons.css';
import './SelectPoissons';
import SelectTechnique from './SelectTechnique';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectPoisson from './SelectPoissons';
import SelectMaree from './SelectMaree';
import '../ComposantsIcons/ComposantsIcons.css';
import FishinService from '../Service/FishinService';

function ModalCapture(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un nouveau poisson
    </Tooltip>
  );

  const[message,setMessage]=useState('');
  const[type,setType]=useState('');
  const[nomcapture,setNomcapture]=useState('');
  const[technique,setTechnique]=useState('');
  const[quantite,setQuantite]=useState('');
  const[poids,setPoids]=useState('');
  const[longueur,setLongueur]=useState('');
  const[datepeche,setDatepeche]=useState('');
  const[maree,setMaree]=useState('');
  const[coef,setCoef]=useState('');
  const[commentaires,setCommentaires]=useState('');
  const[photo,setPhoto]=useState('');

  const handletype=(event)=>{
    const type=event.target.value;
    console.log(type);
    setType(type);
  }
  const handlenomcapture=(event)=>{
    const nom_capture=event.target.value;
    console.log('nom capture'+nom_capture);
    setNomcapture(nom_capture);
  }

  const handletechnique=(event)=>{
    const technique=event.target.value;
    setTechnique(technique);
  }

  const handlequantite=(event)=>{
    const quantite=event.target.value;
    setQuantite(quantite);
  }
  const handlepoids=(event)=>{
    const poids=event.target.value;
    setPoids(poids);
  }

  const handlelongueur=(event)=>{
    const longueur=event.target.value;
    setLongueur(longueur);
  }
  const handledatepeche=(event)=>{
    const date=event.target.value;
    console.log(date);
    setDatepeche(date);
  }

  const handlemaree=(event)=>{
    const maree=event.target.value;
    setMaree(maree);
  }

  const handlecoef=(event)=>{
    const coef=event.target.value;
    setCoef(coef);
  }
  const handlecommentaires=(event)=>{
    const commentaires=event.target.value;
    setCommentaires(commentaires);
  }

  const handlephoto=(event)=>{
    const photo=event.target.value;
    setPhoto(photo);
  }

  const {spot}= props;
  console.log('spot id capture' + spot);
  const addCapture=(e)=>{
    e.preventDefault();
    const capturedata={type:type,nom_capture:nomcapture, technique:technique,quantite:quantite,poids:poids,longueur:longueur,date:datepeche,maree:maree,coef:coef,commentaires:commentaires,photo:photo}
    FishinService.postCapture(spot,capturedata).then((result)=>{
     setMessage(result.data)
      console.log(result.data);
      handleClose();
  });
  }
  const today = new Date();
  


  return (
    <>
      
      <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
         <Button  className="square bg-gris rounded-9 ms-3 me-3" onClick={handleShow} ><FaFish/></Button>
    </OverlayTrigger>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout d'un nouveau poisson</Modal.Title>
        </Modal.Header>
        <Form.Label style={{textAlign: "center"}}>Type</Form.Label>
        <Form.Control name="type" defaultValue="POISSON" onChange={(e)=>handletype(e)} disabled/>
        <Form.Label style={{textAlign: "center"}}>Nom</Form.Label>
        <SelectPoisson name="nom_capture" handlenomcapture={handlenomcapture} defaultValue=''/>
        <Form.Label style={{textAlign: "center"}}>Technique de pêche</Form.Label>
        <SelectTechnique name="technique" onChange={(e)=>handletechnique(e)}/>
        <Form.Label style={{textAlign: "center"}}>Quantité</Form.Label>
        <Form.Control name="quantite" onChange={(e)=>handlequantite(e)}/>
        <Form.Label style={{textAlign: "center"}}>Poids (kg)</Form.Label>
        <Form.Control name="poids" onChange={(e)=>handlepoids(e)}/>
        <Form.Label style={{textAlign: "center"}}>Longueur (cm)</Form.Label>
        <Form.Control name="longueur" onChange={(e)=>handlelongueur(e)}/>
        <Form.Label style={{textAlign: "center"}}>Date de la pêche </Form.Label>
        <DatePicker  className="form-control"  name="date"
        minDate={today} onChange={(e)=>handledatepeche(e)}/>
         <Form.Label style={{textAlign: "center"}}>Marée</Form.Label>
         <SelectMaree name="maree" onChange={(e)=>handlemaree(e)}/>
         <Form.Label style={{textAlign: "center"}}>Coefficient</Form.Label>
         <Form.Control name="coef" onChange={(e)=>handlecoef(e)}/>
         <Form.Label style={{textAlign: "center"}}>Commentaires</Form.Label>
        <Form.Control name="commentaires" onChange={(e)=>handlecommentaires(e)}/>
        <Form.Label style={{textAlign: "center"}}>Photo</Form.Label>
        <Form.Control name="photo" onChange={(e)=>handlephoto(e)}/>
        {/*<Form.Label style={{textAlign: "center"}}>Nom du spot</Form.Label>
        <Form.Control type="spot" defaultValue={spot} disabled/> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button className="bg-gris" onClick={addCapture}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default ModalCapture;