import {connect} from "react-redux";
import ProfilePage from "../components/ProfilePage";
import {bindActionCreators} from "redux";
import {postRegisterAction} from "../actions/registerAction";
import {postProfileAction} from "../actions/profileActions";


function mapStateToProps(userInfo) {
    console.log(userInfo);
    return {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        roles: userInfo.roles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: postProfileAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
