import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'
import Navbar from "../components/navbar";
import ProfileTabs from "../components/profileTabs";
import ProfileCard from '../components/profileCard'

class Profile extends Component {

    render(){
        return (
            <div className="container">
                <Navbar/>
                <br/><br/>
                <Row>
                    <Col sm={4}>
                        <ProfileCard/>
                    </Col>
                    <Col sm={8}>
                        <ProfileTabs/>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Profile;