import { useState } from "react";
import { Alert, Button, Container, FormGroup, Input, Label } from "reactstrap";
import {setNick,isSet} from "../redux/actions";
import {connect} from "react-redux";

function Welcomescreen(props) {
    const [nick,setCurrNick] = useState(null);
    const [visible, setVisible] = useState(false);

    const onDismiss = () => setVisible(false);

    const onChangeText = event => {
        setCurrNick(event.target.value);
    }

    const onClickButton = () => {
        if(nick != null)
        {
            props.setNick(nick);
            props.isSet(true);
        }
        else
            setVisible(true);
    };

    return (
        <Container style={{width:"600px"}}>
             <Alert color="danger" isOpen={visible} toggle={onDismiss}>Lütfen geçerli bir nick girin</Alert>
            <FormGroup>
            <Label style={{fontSize:"22px",color:"white"}}>Lütfen Nickinizi Girin</Label>
            <Input value={nick} style={{width:"600px",fontSize:"20px",backgroundColor:"#1f3122",borderColor:"white",color:"white"}} onChange={onChangeText}/>
            </FormGroup>
            <Button class="btn" color="success" style={{fontSize:"20px"}} onClick={onClickButton}>Tamam</Button>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setNick: (data) => dispatch(setNick(data)),
    isSet: (data) => dispatch(isSet(data)),
});

export default connect(null,mapDispatchToProps)(Welcomescreen);