import {useState,useEffect, useRef} from "react";
import {connect} from "react-redux";
import { Button, Container, Input } from "reactstrap";
import ChatBox from "./chatbox";
import {newMessage} from "../redux/actions";
function Chat(props) {
    const [status,setStatus] = useState(false);
    const ws = useRef(null);
    const [users,setUsers] = useState({});
    const [message,setMessage] = useState("");

    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:8000");
        ws.current.onopen = () => {ws.current.send(JSON.stringify({"type":"add_user","content":`${props.nick}`})); };
        ws.current.onmessage = event => {
                let data =  JSON.parse(event.data.replaceAll("'","\""));
                if(data.message_type == "online_users")
                {
                    let temp_users = [];
                    data.users.forEach(user => {
                        temp_users.push(user);
                    });
                    setUsers(temp_users);
                }
                if(data.message_type == "new_message")
                {
                    if(data.user == props.nick)
                        props.newMessage({type:0,text:data.message});
                    else
                        props.newMessage({type:1,text:data.message,user:data.user});
                }
            }
    },[]);

    const onChangeMessage = event => {
        setMessage(event.target.value);
    }

    const sendClick = () => {
        ws.current.send(JSON.stringify({"type":"new_message","message":`${message}`}))
    }

    return ( 
        <Container style={{width:"700px"}}>
            <ChatBox/>
            <br/>
            <div class="row">
            <Input value={message} style={{width:"575px",fontSize:"20px",backgroundColor:"#1f3122",borderColor:"white",color:"white"}} onChange={onChangeMessage}/>
            <Button class="btn" color="success" style={{fontSize:"20px",marginLeft:"20px",marginRight:"0px"}} onClick={sendClick}>Gönder</Button>
            </div>
        </Container>
    );


}

const mapStateToProps = state => ({
    nick: state.nickReducer.nickname
})

const mapDispatchToProps = (dispatch) => ({
    newMessage: (data) => dispatch(newMessage(data)),
});



export default connect(mapStateToProps,mapDispatchToProps)(Chat);