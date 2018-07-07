import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'
import {observer} from 'mobx-react';
import Navbar from "../components/navbar";
import ProfileTabs from "../components/profileTabs";
import ProfileCard from '../components/profileCard'
import dataService from '../service/dataService';
import profileStore from '../store/profile.store';

@observer class Profile extends Component {
    componentWillMount(){
        dataService.getProfileData()
    }

    render(){
        return (
            <div className="container">
                <Navbar/>
                <br/><br/>
                <Row>
                    <Col sm={4}>
                        <ProfileCard profile={profileStore.getProfileInfo()}/>
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