import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaFish} from "react-icons/fa";
import { GiCrab} from "react-icons/gi";
import { GiShrimp} from "react-icons/gi";
import { GiSquid} from "react-icons/gi";
import '../ComposantsIcons/ComposantsIcons.css';
import './SelectPoissons';
import SelectTechnique from './SelectTechnique';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectPoisson from './SelectPoissons';
import SelectCrab from './SelectCrab';
import SelectPalinuridae from './SelectPalinuridae';
import SelectCephalopode from './SelectCephalopode';
import SelectMaree from './SelectMaree';
import '../ComposantsIcons/ComposantsIcons.css';
import FishinService from '../Service/FishinService';
import ListCaptures from './ListCaptures';
import {GiCanoe} from "react-icons/gi";
import {GiBoatFishing} from "react-icons/gi";
import {GiFishingPole} from "react-icons/gi";
import { Row,Container,Col } from 'react-bootstrap';
import SelectEmbarcation from './SelectEmbarcation';



function ModalCapture(props) {
  

  const[message,setMessage]=useState('');
  const[nomCapture,setNomcapture]=useState('');
  const[technique,setTechnique]=useState('');
  const[quantite,setQuantite]=useState('');
  const[poids,setPoids]=useState('');
  const[longueur,setLongueur]=useState('');
  const[date_peche,setDatepeche]=useState();
  const[maree,setMaree]=useState('');
  const[coef,setCoef]=useState('');
  const[commentaires,setCommentaires]=useState('');
  const[photo,setPhoto]=useState('');
  const[embarcation,setEmbarcation]=useState('');


 

  const [data, setData] = useState('');

const [captures, setCaptures]=useState([])

useEffect(()=>{
    getCaptures()
    
}, [])

const {spot}= props;

  const [enfant, setEnfant] = useState([])
  const click = (stateEnfant) => {
    const enfant=stateEnfant;
    setEnfant(enfant)
     
  }

  const handlenomcapture=(event)=>{
    const nomCapture=event.target.value;
    console.log('nom capture'+nomCapture);
    setNomcapture(nomCapture);
  }

  const handletechnique=(event)=>{
    const technique=event.target.value;
    console.log('nom capture'+technique);
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

  const handleembarcation=(event)=>{
    const embarcation=event.target.value;
    setPhoto(embarcation);
  }
  
const {getSpots}=props;

  console.log('spot id capture' + spot);
  const {getCaptures}=props;

  const addCapture=(e)=>{
    e.preventDefault();
    const type=getCategory();
    const capturedata={type:type,nomCapture:nomCapture, technique:technique,quantite:quantite,poids:poids,longueur:longueur,date_peche:date_peche,maree:maree,coef:coef,commentaires:commentaires,photo:photo,embarcation:embarcation}
    FishinService.postCapture(spot,capturedata).then((result)=>{
     setMessage(result.data)
      console.log(result.data);
      handleClose();
      getCaptures();
      reInit(nomCapture,technique,quantite,poids,longueur,date_peche,maree,coef,commentaires,photo);
  });
  }
  const today = new Date().getDate;
  const {capture}=props;

  console.log('type capture props'+capture);

  function getIcon(){
    if(capture==="POISSON"){
      return <FaFish/>
    }
    else if(capture==="CRAB"){
      return <GiCrab/>
    }
    else if (capture==="PALIN"){
      return <GiShrimp/>
    }
    else if (capture==="CEPHALOPODE")
    return <GiSquid/>
    else return ''
  }

  function textTool(){
    if(capture==="POISSON"){
      return "Ajouter un nouveau poisson"
    }
    else if(capture==="CRAB"){
      return " Ajouter un crustacé de type crabe"
    }
    else if (capture==="PALIN"){
      return "Ajouter un crustacé de type crevettes, homard ou langouste"
    }
    else if (capture==="CEPHALOPODE")
    return " Ajouter un céphalopode de type poulpe, calmar ou seiche"
    else return ''
  }

  function getCategory(){
    if(capture==="POISSON"){
      return "POISSON"
    }
    else if(capture==="CRAB"){
      return "CRUSTACE"
    }
    else if (capture==="PALIN"){
      return "PALINURIDAE"
    }
    else if (capture==="CEPHALOPODE")
    return "CEPHALOPODE"
    else return ''
  
  }

  function getSelect(){
    if(capture==="POISSON"){
      return  <SelectPoisson name="nom_capture" handlenomcapture={handlenomcapture}  click={click} defaultValue='Lol'/>
    }
    else if(capture==="CRAB"){
      return <SelectCrab name="nom_capture" handlenomcapture={handlenomcapture} defaultValue=''/>
    }
    else if (capture==="PALIN"){
      return <SelectPalinuridae name="nom_capture" handlenomcapture={handlenomcapture} defaultValue=''/>
    }
    else if (capture==="CEPHALOPODE")
    return <SelectCephalopode name="nom_capture" handlenomcapture={handlenomcapture} defaultValue=''/>
    else return ''

  }

  function reInit(nomCapture,technique,quantite,poids,longueur,date_peche,maree,coef,commentaires,photo){
    nomCapture=setNomcapture(null);
    technique=setTechnique(null);
    quantite=setQuantite(null);
    poids=setPoids(null);
    longueur=setLongueur(null);
    date_peche=setDatepeche(null);
    maree=setMaree(null);
    coef=setCoef(null);
    commentaires=setCommentaires(null);
    photo=setPhoto(null);

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     {textTool()}
    </Tooltip>
  );

  return (
    <>
      
      <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
         <Button  className="square bg-gris rounded-9 ms-3 me-3" onClick={handleShow} >
           {getIcon()}           
           </Button>
    </OverlayTrigger>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>AJOUT D'UN NOUVEAU {getCategory()}</Modal.Title>
        </Modal.Header>
        <Form.Label style={{textAlign: "center"}}>Type</Form.Label>
        <Form.Control name="type" defaultValue={getCategory()}  disabled/>
        <Form.Label style={{textAlign: "center"}}>Nom</Form.Label>
       {getSelect()}
        <Form.Label style={{textAlign: "center"}}>Technique de pêche</Form.Label>
        <SelectTechnique name="technique" handletechnique={handletechnique}/>
        <Form.Label style={{textAlign: "center"}}>Quantité</Form.Label>
        <Form.Control name="quantite" onChange={(e)=>handlequantite(e)}/>
        <Form.Label style={{textAlign: "center"}}>Poids (kg)</Form.Label>
        <Form.Control name="poids" onChange={(e)=>handlepoids(e)}/>
        <Form.Label style={{textAlign: "center"}}>Longueur (cm)</Form.Label>
        <Form.Control name="longueur" onChange={(e)=>handlelongueur(e)}/>
        <Form.Label style={{textAlign: "center"}}>Date de la pêche </Form.Label>
        <DatePicker  className="form-control"  name="date" selected={date_peche}
        minDate={today} onChange={date=>setDatepeche(date)/*(e)=>handledatepeche(e)*/} dateFormat="dd-MM-yyyy"/>
         <Form.Label style={{textAlign: "center"}}>Marée</Form.Label>
         <SelectMaree name="maree" onChange={(e)=>handlemaree(e)}/>
         <Form.Label style={{textAlign: "center"}}>Coefficient</Form.Label>
         <Form.Control name="coef" onChange={(e)=>handlecoef(e)}/>
         <Form.Label style={{textAlign: "center"}}>Commentaires</Form.Label>
        <Form.Control name="commentaires" onChange={(e)=>handlecommentaires(e)}/>
        <Form.Label style={{textAlign: "center"}}>Embarcation</Form.Label>
       {/* <Container fluid="md">
           <Row>
              <Col><GiFishingPole/><Form.Check aria-label="option 1" /><GiCanoe/><Form.Check aria-label="option 1" /><GiBoatFishing/><Form.Check aria-label="option 1"/></Col>
           </Row>
  </Container>*/}
        <SelectEmbarcation/>
        <Form.Label style={{textAlign: "center"}}>Photo</Form.Label>
        <Form.Control name="photo" onChange={(e)=>handlephoto(e)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button className="bg-gris" type='submit' onClick={addCapture} disabled={!nomCapture||!poids||!longueur||!date_peche}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default ModalCapture;