import React, { Component } from 'react';
import classes from './withErrorHandler.css';
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentDidMount() {
      // Clear error if any
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      // Intercept response and set errors.
      axios.interceptors.response.use(res => res, err => {
        this.setState({ error: err });

      });
    }

    errorConfirmedHandler = () => {
        this.setState({error: null});
    }
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>{this.state.error ? this.state.error.message : null}</Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
