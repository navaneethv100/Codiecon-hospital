import React from 'react';
import './Home.css';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class  Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            UserReceived:{},
            login: false,
        };

        var ws = new WebSocket('ws://express-man-server-rh.1d35.starter-us-east-1.openshiftapps.com/hospital');

        setTimeout(()=>{
            ws.send("lmao");
        },1000);

        ws.onmessage = (message) =>{


                let obj = JSON.parse(message.data);
                console.log(obj);
                if(obj.action === 'success')
                    console.log('connected');
                else if(obj.action === 'distress'){
                    console.log("received ", obj.user);
                    this.setState({login:true});
                    this.setState(Object.assign(this.state.UserReceived, obj.user))
                }

        };
        let userObj= {
            email:'silicon',
            password:'123'
        }
        ws.onopen = function(event) {
            ws.send(JSON.stringify(userObj));
        };
    }

  

    render(){
    return (
        <div>
            <section id="title" className='py-4 text-center '>
                <Container>
                    <Row>
                        <Col >
                            <h1 className='section-title-light text-primary text-center pb-3'>Welcome Quadrilateral Hospital</h1>
                        </Col>
                    </Row>
                    {
                        !this.state.login &&
                            <div className="py-5 my-5">
                        <ul className="list-group list-group-dark-custom text-center py-5 my-5">

                            <li className="list-group-item my-1 ">

                                <span className='user-properties '> Nothing to show </span>

                            </li>
                        </ul>
                            </div>
                    }
                    {
                        this.state.login  &&
                        <ul className="list-group list-group-dark-custom">
                            <li className="list-group-item my-1 ">
                                Name:
                                <span className='user-properties '>{ this.state.UserReceived.username || ''} </span>

                            </li>

                            <li className="list-group-item my-1">
                                Age:
                                <span className='user-properties'> {this.state.UserReceived.age || ''} </span>

                            </li>

                            <li className="list-group-item my-1">
                                Sex:
                                <span className='user-properties'>{ this.state.UserReceived.sex || ''}</span>

                            </li>

                            <li className="list-group-item my-1 mb-4">
                                Phone:
                                <span className='user-properties'> {this.state.UserReceived.phone || '' }</span>

                            </li>
                            <li className="list-group-item my-1 mb-4">
                                Medical Conditions:
                                <span className='user-properties'> {this.state.UserReceived.medcondition || ''}</span>

                            </li>
                            <li className="list-group-item my-1 mb-4">
                                Illnesses:
                                <span className='user-properties'> {this.state.UserReceived.illnesses || ''}  </span>

                            </li>
                            <li className="list-group-item my-1 mb-4">
                                Address:
                                <span className='user-properties'> {this.state.UserReceived.address || ''} </span>

                            </li>
                            <li className="list-group-item my-1 mb-4">
                                Emergency Contact :
                                <span className='user-properties'> {this.state.UserReceived.phonemergency || ''} </span>

                            </li>
                            <li className="list-group-item my-1 mb-4">
                                Blood Group:
                                <span className='user-properties'> {this.state.UserReceived.bloodgroup || '' }</span>

                            </li>
                            <li className="list-group-item my-1 mb-4">
                                Medicine Intolerances:
                                <span className='user-properties'> {this.state.UserReceived.medicineintolerance || ''}</span>

                            </li>
                            <li className="list-group-item my-1 mb-4">
                                Current Medications:
                                <span className='user-properties'> {this.state.UserReceived.medication || ''} </span>

                            </li>
                            <li className="list-group-item my-1 mb-4">
                                Special care:
                                <span className='user-properties'> {this.state.UserReceived.special || ''} </span>

                            </li>

                        </ul>
                    }








                </Container>
            </section>
        </div>
    );
    }
};

export default Home;