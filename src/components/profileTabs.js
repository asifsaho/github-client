import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {observer} from 'mobx-react';
import classnames from 'classnames';
import Repositories from '../components/repositories';
import StaredRepo from '../components/staredRepo';
import FollowingRepo from '../components/followingRepo';
import Followers from '../components/followers';
import repoStore from '../store/repositories.store';
import dataService from '../service/dataService';

@observer class ProfileTabs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    componentWillMount(){
        dataService.getRepositories();
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                            Repositories
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            Stars
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}>
                            Following
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}>
                            Followers
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div className="space"/>
                                <Repositories repos={repoStore.getRepoData()}/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div className="space"/>
                                <StaredRepo/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <div className="space"/>
                                <FollowingRepo/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">
                                <div className="space"/>
                                <Followers/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default ProfileTabs;