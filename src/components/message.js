

export default function MessageBubble(props) {
        return(
                <div>
                <div class={props.message.type == 0 ? "balon1 p-2 m-0 position-relative" : "balon2 p-2 m-0 position-relative"} style={{fontSize:"15px"}} data-is={props.message.type == 0 ? (`${props.message.time}`) : (`${props.message.user} -  ${props.message.time}`) }>
                        <a class={ props.message.type == 0 ? "float-right" : "float-left"}> {props.message.text} </a>
                        
                </div>
                <br/>
                </div>
        );
}