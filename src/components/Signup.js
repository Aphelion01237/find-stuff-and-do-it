import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


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
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                  <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                      <Image src='/logo.png' /> Sign-up for your account
                    </Header>
                    <Form size='large'>
                      <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='username' value={this.state.username} onChange={this.handleUserChange}/>
                        <Form.Input
                          fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          type='password'
                          value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
              
                        <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                          Submit
                        </Button>
                      </Segment>
                    </Form>
                    
                  </Grid.Column>
                </Grid>
              )
              
              
        // <form>
        //             <div>
        //                 <label for="username">Pick a username!</label>
        //                 <input                        
        //                     type="text"
        //                     value={this.state.username}
        //                     onChange={this.handleUserChange}
        //                     className="form-control" 
        //                     id="exampleInputEmail1" 
        //                     aria-describedby="emailHelp" 
        //                     placeholder="Enter username" />
        //             </div>
        //             <div>
        //                 <label for="password">Password</label>
        //                 <input                        
        //                     type="text"
        //                     value={this.state.password}
        //                     onChange={this.handlePasswordChange}
        //                     className="form-control" 
        //                     id="exampleInputEmail1" 
        //                     aria-describedby="emailHelp" 
        //                     placeholder="Enter password" />
        //             </div>
        //             <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
        //         </form>
        
    }
}
export default Signup 