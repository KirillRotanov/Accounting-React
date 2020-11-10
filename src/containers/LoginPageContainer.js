import {postLoginAction} from "../actions/loginAction";
import {bindActionCreators} from "redux";
import LoginPage from "../components/LoginPage";
import {connect} from "react-redux";


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: postLoginAction
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPage);