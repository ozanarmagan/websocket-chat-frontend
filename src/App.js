import logo from './logo.svg';
import './App.css';
import Welcomescreen from './components/setnick';
import { connect } from 'react-redux';
import Chat from './components/chat';
import {FaGithub} from "react-icons/fa"
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        { props.isSet ? <Chat/> : <Welcomescreen/>}
      </header>
      <div class="foot" style={{color:"white",height:"5vh"}}>
        <div class="footertext" style={{textAlign:"initial",justifyContent:"space-between",display:"flex"}} ><a href="https://github.com/ozanarmagan" class="bottom" style={{textDecoration:"none",color:"white",paddingLeft:"10px",fontSize:"20px"}}><FaGithub size="25px" style={{marginBottom:"10px"}}/><span class="footertext" style={{fontSize:"24px"}}> OzanArmagan</span></a> </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  nick: state.nickReducer.nick,
  isSet : state.nickReducer.isSet
})

export default connect(mapStateToProps,null)(App);
