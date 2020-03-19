import React, { Component, Fragment } from 'react';
import TodoListPresenter from './TodoListPresenter';

import { connect } from 'react-redux';
import { add, remove, see } from '../../store/module/todolist';

export class TodoListContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const action = {
            add: this.props._add,
            remove: this.props._remove,
            see: this.props._see
        };
        return (
            <Fragment>
                <TodoListPresenter
                    todolist={this.props.store}
                    action={action}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        store: state.todolist
    };
};
const mapDispatchToProps = dispatch => {
    return {
        _add: message => dispatch(add(message)),
        _remove: id => dispatch(remove(id)),
        _see: id => dispatch(see(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
