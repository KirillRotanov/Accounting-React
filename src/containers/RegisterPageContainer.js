import {bindActionCreators} from "redux";
import {postRegisterAction} from "../actions/registerAction";
import RegisterPage from "../components/RegisterPage";
import {connect} from "react-redux";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        register: postRegisterAction
    }, dispatch);
}

function mapStateToProps(userInfo) {
    return {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        roles: userInfo.roles
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);