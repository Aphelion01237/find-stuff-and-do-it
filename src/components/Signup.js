import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


class Signup extends Component {
    state= {
        username : '',
        password : ''
    }
    handleUserChange = event => {
        const { value } = event.target;
        this.setState({ username: value });
    }
    handlePasswordChange = event => {
        const {value} = event.target;
        this.setState({ password: value})
    }
    handleSubmit = async event => {
        event.preventDefault();        
        const { username: comment } = this.state;
        try {
            const response = await axios.post(`/api/blogs/${this.props.match.params.id}`, { comment });                        
            
        } catch(e) {
            console.log(e);
        }        
    }
    render() {
        return(
        <form>
                    <div>
                        <label for="username">Pick a username!</label>
                        <input                        
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUserChange}
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input                        
                            type="text"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" />
                    </div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
        )
    }
}
export default Signup