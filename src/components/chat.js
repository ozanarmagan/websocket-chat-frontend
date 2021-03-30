import {useState,useEffect, useRef} from "react";
import {connect} from "react-redux";
import { Button, Container, Input } from "reactstrap";
import ChatBox from "./chatbox";
import {newMessage,onlineUsers} from "../redux/actions";
import OnlineUsersBox from "./onlineUsers";
function Chat(props) {
    const [status,setStatus] = useState(false);
    const ws = useRef(null);
    const [users,setUsers] = useState({});
    const [message,setMessage] = useState("");

    useEffect(() => {
        ws.current = new WebSocket("ws://46.31.79.30:80");
        ws.current.onopen = () => {ws.current.send(JSON.stringify({"type":"add_user","content":`${props.nick}`})); };
        ws.current.onmessage = event => {
                let data =  JSON.parse(event.data.replaceAll("'","\""));
                if(data.message_type == "online_users")
                {
                    let temp_users = [];
                    data.users.forEach(user => {
                        temp_users.push(user);
                    });
                    props.onlineUsers(temp_users);
                }
                if(data.message_type == "new_message")
                {
                    if(data.user == props.nick)
                        props.newMessage({type:0,text:data.message,time:data.time});
                    else
                        props.newMessage({type:1,text:data.message,user:data.user,time:data.time});
                }
            }
    },[]);

    const onChangeMessage = event => {
        setMessage(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          sendClick();
        }
      }

    const sendClick = () => {
        ws.current.send(JSON.stringify({"type":"new_message","message":`${message}`}))
        setMessage("");
    }

    return ( 
        <Container style={{width:"1000px",marginTop:"100px"}}>
            <div class="row">
            <ChatBox/>
            <OnlineUsersBox/>
            </div>
            <div class="row" style={{marginTop:"50px",marginLeft:"5px"}}>
            <Input value={message} style={{width:"575px",fontSize:"20px",backgroundColor:"#2e2d29",borderColor:"white",color:"white"}} onKeyDown={handleKeyDown} onChange={onChangeMessage}/>
            <Button class="btn" color="dark" style={{fontSize:"20px",marginLeft:"20px",marginRight:"0px"}} onClick={sendClick}>Gönder</Button>
            </div>
        </Container>
    );


}

const mapStateToProps = state => ({
    nick: state.nickReducer.nickname,
    users: state.usersReducer.users,
})

const mapDispatchToProps = (dispatch) => ({
    newMessage: (data) => dispatch(newMessage(data)),
    onlineUsers: (data) => dispatch(onlineUsers(data)),
});



export default connect(mapStateToProps,mapDispatchToProps)(Chat);