import logo from './logo.svg';
import './App.css';
import Welcomescreen from './components/setnick';
import { connect } from 'react-redux';
import Chat from './components/chat';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        { props.isSet ? <Chat/> : <Welcomescreen/>}
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  nick: state.nickReducer.nick,
  isSet : state.nickReducer.isSet
})

export default connect(mapStateToProps,null)(App);
