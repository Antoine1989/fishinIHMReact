import {GiCanoe} from "react-icons/gi";
import {GiBoatFishing} from "react-icons/gi";
import {GiFishingPole} from "react-icons/gi";
import { Row,Container,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

  function SelectEmbarcation (props){


    function embarcationIcon(){
        if (props.embarcation==="Aucune"){
            return <GiFishingPole/>
        }
        else if (props.embarcation==="Canoe"){
            return <GiCanoe/>
        }
        else return <GiBoatFishing/>

    }

  {/* return  <Container fluid="md">
           <Row>
              <Col>{embarcationIcon()}</Col>
              <Col> <Form.Check aria-label="option 1" /></Col>
           </Row>
</Container>*/}

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



return <Form className="text-center">{
    <div  className="mb-3">
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(none)}>
     <Form.Check
        inline
        //disabled
        label={<GiFishingPole size={28}/>}
        name="group1"      
      />
      </OverlayTrigger>

      <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(canoe)}>
      <Form.Check
        inline
        label={<GiCanoe size={28}/>}
        name="group1"
        />
      </OverlayTrigger>

      <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(boat)}>
      <Form.Check
        inline
        label={<GiBoatFishing size={28}/>}            
      />
      </OverlayTrigger>
       
    </div>
   
  }
  </Form>

  }
  export default SelectEmbarcation;