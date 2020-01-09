import React, { Component } from 'react';
import classes from './withErrorHandler.css';
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentWillMount() {
      // Clear error if any
      this.requestInterceptor =  axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      // Intercept response and set errors.
      this.responseInterceptor =  axios.interceptors.response.use(res => res, err => {
        this.setState({ error: err });

      });
    }

    componentWillUnmount() {
      axios.interceptors.eject(this.requestInterceptor);
      axios.interceptors.eject(this.responseInterceptor);      
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
