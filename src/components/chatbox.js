import { useState } from "react";
import { connect } from "react-redux";
import MessageBubble from "./message"

function ChatBox(props) {
    const [lastsender,setLast] = useState("");
    console.log(props.messages);
    return(
    <div class="chat column" style={{height:"700px",overflowY:"scroll",width:"700px",backgroundColor:"transparent",borderRadius:"2%",borderColor:"white",border:"1px solid"}}>
        {
            props.messages.map( message => {
                return(
                <MessageBubble message={message} id={props.messages.indexOf(message)} />
               );
            })
        }
    </div>
    );
}

const mapStateToProps = state => ({
    messages: state.chatReducer.messages
})

export default connect(mapStateToProps,null)(ChatBox);