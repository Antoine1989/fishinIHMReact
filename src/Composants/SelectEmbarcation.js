import {GiCanoe} from "react-icons/gi";
import {GiBoatFishing} from "react-icons/gi";
import {GiFishingPole} from "react-icons/gi";
import { Row,Container,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

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


return <Form className="text-center">{
    <div  className="mb-3">
     <Form.Check
        inline
        disabled
        label={<GiFishingPole/>}
        name="group1"      
      />
      <Form.Check
        inline
        label={<GiCanoe/>}
        name="group1"
        />
      <Form.Check
        inline
        label={<GiBoatFishing/>}            
      />
      
       
    </div>
   
  }
  </Form>

  }
  export default SelectEmbarcation;