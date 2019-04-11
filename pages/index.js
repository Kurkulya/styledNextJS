import Title from 'styled_components/Title';
import { connect } from "react-redux";

import actions from 'redux/actions/userActions'; 
import promiseWrap from 'helpers/redux/actions'; 

import Button from '@material-ui/core/Button';

import styled from 'styled-components';

const AButt = styled(Button)`
  && { background-color: red; }
`;


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
    return <>
        <AButt variant="contained" color="primary">
            Hello World
        </AButt>
        <Title color='green'>Welcome to Next.js!</Title>
        <Title onClick={func} color='green'>Welcome to Next.js!</Title>
    </>;
}
  
export default connect(null, mapDispatchToProps)(Home);