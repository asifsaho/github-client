import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {observer} from 'mobx-react';
import classnames from 'classnames';
import Repositories from '../components/repositories';
import StaredRepo from '../components/staredRepo';
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
        dataService.getStarredRepository();
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
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div className="space"/>
                                <Repositories repos={repoStore.getMyRepos()}/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div className="space"/>
                                <StaredRepo repos={repoStore.getStarredRepos()}/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default ProfileTabs;