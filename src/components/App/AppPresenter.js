import React from 'react';
import styled from 'styled-components';
import Counter from '../Counter';
import TodoList from '../TodoList';

const AppPresenter = () => {
    return (
        <Container>
            <Counter />
            <TodoList />
        </Container>
    );
};

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => (props.column ? `column` : `row`)};
`;
const Container = styled(Flex)`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export default AppPresenter;
