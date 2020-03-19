import React from 'react';
import styled from 'styled-components';

const TodoListPresenter = props => {
    const [inputValue, SetInputValue] = React.useState('');
    const onChangeHandler = e => {
        SetInputValue(e.target.value);
    };
    const todolist = props.todolist.list;
    return (
        <MessageContainer>
            <MessageItem>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={onChangeHandler}
                />
                <button onClick={() => props.action.add(inputValue)}>
                    추가
                </button>
            </MessageItem>
            {Object.keys(todolist).map(key => {
                const todo = todolist[key];
                return (
                    <MessageItem key={key} seen={todo.seen}>
                        <Message>{todo.message}</Message>
                        <button onClick={() => props.action.see(todo.id)}>
                            확인
                        </button>
                        <button onClick={() => props.action.remove(todo.id)}>
                            삭제
                        </button>
                    </MessageItem>
                );
            })}
        </MessageContainer>
    );
};

const MessageContainer = styled.div`
    margin: 20px;
`;
const MessageItem = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    border: 3px solid ${props => (props.seen ? `gray` : `yellow`)};
    border-radius: 30px;
    margin: 10px 0;
    width: 400px;
`;
const Message = styled.p`
    display: block;
    flex: 1;
`;
const Input = styled.input`
    display: block;
    flex: 1;
`;
export default TodoListPresenter;
