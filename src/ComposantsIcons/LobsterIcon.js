import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { GiShrimp} from "react-icons/gi";
import './ComposantsIcons.css'

function LobsterIcon() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un crustacé de type crevettes, homard ou langouste
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button className="square bg-gris rounded-9 ms-3 me-3"><GiShrimp/></Button>
    </OverlayTrigger>
  );
}

export default LobsterIcon;