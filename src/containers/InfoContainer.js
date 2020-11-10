import {connect} from "react-redux";
import Info from "../components/Info";


function mapStateToProps(state) {
    return {
        firstName: state.userInfo.firstName
    }
}

export default connect(mapStateToProps)(Info);