import Title from 'styled_components/Title';
import { connect } from "react-redux";

import actions from 'redux/actions/userActions'; 
import promiseWrap from 'helpers/redux/actions'; 

function mapDispatchToProps(dispatch) {
    return {
        doSmth: promiseWrap.client(dispatch, actions.do),
    };
}

const Home = ({ doSmth }) => {
    const func = () => {
        doSmth({ a: 'a' }).then((response) => {
            console.log(response);
        })
    }
    return <><Title color='green'>Welcome to Next.js!</Title><Title onClick={func} color='green'>Welcome to Next.js!</Title></>;
}
  
export default connect(null, mapDispatchToProps)(Home);