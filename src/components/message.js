

export default function MessageBubble(props) {
        return(
            <div>
            <div class={props.message.type == 0 ? "me" : "you"} style={{marginTop:`${props.id*20}px`,fontSize:"15px"}}>
                    { props.message.type == 1 ? <div style={{float:"left",fontSize:"14px"}}><b>{props.message.user}</b>
                    <br/></div> : null}
                    <div>{props.message.text} </div>
            </div>
            <br/>
            </div>
        );
}