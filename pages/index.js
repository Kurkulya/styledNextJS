import Title from 'styled_components/Title';
import { connect } from "react-redux";

import actions from 'redux/actions/userActions'; 
import promiseWrap from 'helpers/redux/actions'; 

import { Button, Segment } from 'semantic-ui-react';

import styled from 'styled-components';

const RedSegment = styled(Segment)`
  background-color: red;
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
    <RedSegment>
        <Button color='blue' icon='save'>ASd</Button>
        <Title color='green'>Welcome to Next.js!</Title>
        <Title onClick={func} color='green'>Welcome to Next.js!</Title>
    </RedSegment>
    </>;
}
  
export default connect(null, mapDispatchToProps)(Home);