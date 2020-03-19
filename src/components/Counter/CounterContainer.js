import React, { Component } from 'react';
import CounterPresenter from './CounterPresenter';

import { connect } from 'react-redux';
import { increment, decrement } from '../../store/module/counter';

export class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.action = {
            increment: this.props._increment,
            decrement: this.props._decrement
        };
    }
    render() {
        return (
            <CounterPresenter count={this.props.value} action={this.action} />
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.counter.value
    };
};
const mapDispatchToProps = dispatch => ({
    _increment: () => dispatch(increment()),
    _decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
