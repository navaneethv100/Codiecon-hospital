import React from 'reactn';
import './SignIn.css';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
            remember:true,
            failed:false
        }
    }

    handleSignIn(){
        let userObj= {
            email:this.state.email,
            password:this.state.password
        }
        this.global.ws.send(JSON.stringify(userObj));
        console.log(this.props.history);
        this.setGlobal({history:this.props.history});
    }
    render() {
        return (
            <Container fluid={true} className='signin-container '>
                <Row>
                    <Col sm='9' md='7' lg='4' className="mx-auto my-4 ">
                        <Card className="card-signin my-5 ">
                            <Card.Body className='py-5'>
                                <Card.Title className="text-center boi">Sign In</Card.Title>

                                <div className="form-label-group my-4">
                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address" required autoFocus
                                           value={this.state.email}
                                           onChange={ (event) => {this.setState({email: event.target.value}) }}
                                    />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group my-4">
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Password" required
                                           value={this.state.password}
                                           onChange={ (event) => {this.setState({password: event.target.value}) }}
                                    />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"
                                           checked={this.state.remember}
                                           onChange={ (event) => {
                                               this.setState({remember: !this.state.remember})
                                           }}
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember
                                        Me</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block mt-5 mb-3" onClick={() =>  this.handleSignIn() }>Sign
                                    In
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default SignIn;