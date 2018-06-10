import React from 'react';
import {Form, Button } from 'semantic-ui-react';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };
  onChange = e => 
  this.setState({
     data: { ...this.state.data, [e.target.name]: e.target.value} });


  render() {
    const { data } = this.state;

    return(
      <Form>
        <Form.Field>
          <label htmlFor="email"> Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="YourEmail@example.com"
          value={this.state.data.email}
          onChange={this.onChange}
        
        />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password"> Password</label>
          <input 
          type="password" 
          id="password" 
          name="password"
          placeholder="Enter Password"
          value={this.state.data.password}
          onChange={this.onChange}
        
        />
        </Form.Field>
        <Button primary>Login</Button> 
        <Button primary>Login</Button> 
        </Form>
    );
  }
}

export default LoginForm;