import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
const useStyles = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400,
    },
  });

 function OnlineUsersBox(props) {
    const classes = useStyles();
    return(<div class="box" style={{marginLeft:"100px",backgroundColor:"transparent",color:"white"}}>
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
        <TreeItem nodeId="users" label="Online Kullanıcılar">
            {
                props.users.map(user => (
                    <TreeItem nodeId={props.users.indexOf(user)} label={user}></TreeItem>
                ))
            }
        </TreeItem>
    </TreeView>
    </div>);
}

const mapStateToProps = state => ({
    users: state.usersReducer.users,
});

export default connect(mapStateToProps,null)(OnlineUsersBox);
