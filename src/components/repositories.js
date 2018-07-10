import React from 'react';
import {ListGroup, ListGroupItem, Button, Col, Row} from 'reactstrap';
import _ from 'lodash';
import {Link} from 'react-router-dom'

export default (props) => {
    let repos = _.get(props, 'repos.nodes') ? _.get(props, 'repos.nodes') : [];

    console.log('Repo list from Repositories Component', repos);

    return (
        <ListGroup>
            {repos.map((item, i) => <ListGroupItem key={i}>
                <Row>
                    <Col>
                        <Link to={"/repo/" + item.name}><strong>{item.name}</strong></Link>
                    </Col>
                    <Col sm={4}>
                        <Button target="blank" color="secondary float-right" href={item.url}>
                            <i className="github-icon"/>
                        </Button>
                        <Button target="_blank" color="secondary float-right height-34 margin-right-15">
                            <Link to={"/repo/" + item.name}><i className="details-icon"/></Link>
                        </Button>
                    </Col>
                </Row>
            </ListGroupItem>)}
        </ListGroup>
    );
}