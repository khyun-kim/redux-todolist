import React from 'react';
import styled from 'styled-components';

function App(props) {
    return (
        <Flex column>
            <Number>{props.count !== undefined ? props.count : '값'}</Number>
            <Flex>
                <Button onClick={props.action.decrement}>-</Button>
                <Button onClick={props.action.increment} color="blue">
                    +
                </Button>
            </Flex>
        </Flex>
    );
}
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => (props.column ? `column` : `row`)};
`;
const Number = styled.h1`
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.28);
    text-align: center;
    line-height: 150px;
`;
const Button = styled.button`
    background-color: ${props => (props.color ? props.color : '#ef4562')};
    color: #fff;
    font-size: 2rem;
    width: 50px;
`;
export default App;
