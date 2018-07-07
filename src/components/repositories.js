import React from 'react';
import {ListGroup, ListGroupItem, Button, Col, Row} from 'reactstrap';
import _ from 'lodash';

export default (props) => {
    let repos = _.get(props, 'repos.nodes') ? _.get(props, 'repos.nodes') : [];

    console.log('Repo list from Repositories Component', repos);

    return (
        <ListGroup>
            {repos.map((item, i) => <ListGroupItem key={i}>
                <Row>
                    <Col><strong>{item.name}</strong></Col>
                    <Col sm={3}><Button target="blank" color="secondary" href={item.url}><i className="github-icon"/> In GitHub </Button></Col>
                </Row>
            </ListGroupItem>)}
        </ListGroup>
    );
}


/*
import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Button, Col, Row} from 'reactstrap';

export default class Repositories extends Component {
    constructor(props){
        super(props);
        this.repos = [];
    }

    componentDidMount(){
        this.repos = this.props.repos.length ? this.props.repos : [];
        console.log('Repo list from Repositories Component', this.repos);
    }

    render() {
        return (
            <ListGroup>
                {this.repos.map((item, i) => <ListGroupItem key={i}>
                    <Row>
                        <Col><strong>{item.name}</strong></Col>
                        <Col sm={3}><Button target="blank" color="secondary" href={item.url}><i
                            className="github-icon"/> In GitHub </Button></Col>
                    </Row>
                </ListGroupItem>)}
            </ListGroup>
        );
    }
}*/