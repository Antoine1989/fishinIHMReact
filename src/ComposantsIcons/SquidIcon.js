import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { GiSquid} from "react-icons/gi";
import './ComposantsIcons.css'

function SquidIcon() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un céphalopode de type poulpe, calmar ou seiche
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button className="square bg-gris rounded-9 ms-3 me-3"><GiSquid/></Button>
    </OverlayTrigger>
  );
}

export default SquidIcon;