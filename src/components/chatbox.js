import { useState } from "react";
import { connect } from "react-redux";
import Scrollbar from "react-scrollbars-custom";
import MessageBubble from "./message"

function ChatBox(props) {
    const [lastsender,setLast] = useState("");
    console.log(props.messages);
    return(
    <div class="card bg-sohbet border-0 m-0 p-0" style={{height:"700px",width:"700px",backgroundColor:"transparent",borderRadius:"2%",borderColor:"white",border:"1px solid",overflowY:"auto"}}>
    <div id="sohbet" class="card border-0 m-0 p-0 position-relative bg-transparent" >
        <Scrollbar autoHide autoHideTimeout={500} autoHideDuration={200} style={{width:"700px",height:"700px"}}>
        {
            props.messages.map( message => {
                return(
                <MessageBubble message={message} id={props.messages.indexOf(message)} />
               );
            })
        }
        </Scrollbar>
    </div>
    </div>
    );
}

const mapStateToProps = state => ({
    messages: state.chatReducer.messages
})

export default connect(mapStateToProps,null)(ChatBox);