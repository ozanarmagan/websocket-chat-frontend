import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {FaUser} from "react-icons/fa"
const useStyles = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400,
    },
  });

 function OnlineUsersBox(props) {
    const classes = useStyles();
    return(<article class="panel"  style={{marginLeft:"100px",width:"200px"}}>
    <p class="panel-heading" style={{backgroundColor:"#275a53",color:"white"}}>
        Online
    </p>
        {
                props.users.map(user => (
                    <a class="panel-block is-active" style={{borderBottom:"none"}}>
                        <span class="panel-icon">
                            <FaUser color="#275a53"/>
                        </span>
                        {user}
                    </a>
                ))
        }
    </article>);
}

const mapStateToProps = state => ({
    users: state.usersReducer.users,
});

export default connect(mapStateToProps,null)(OnlineUsersBox);
