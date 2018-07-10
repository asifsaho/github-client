import React from 'react';
import {ListGroup, ListGroupItem, Row, Col, Button} from 'reactstrap';
import helpers from '../helpers';

const StarredRepo = (props) => {
    return (
        <ListGroup>
            {props.repos.map((repo, index) =>
                <ListGroupItem key={index}>
                    <Row>
                        <Col><strong>{repo.node.name}</strong></Col>
                        <Col><small className="float-right">Created On: {helpers.formatDate(repo.node.createdAt)}</small></Col>
                        <Col sm={3}>
                            <Button href={repo.node.url} target="_blank" color="secondary float-right height-34 margin-right-15">
                                <i className="github-icon"/>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <small className="content" dangerouslySetInnerHTML={{__html: repo.node.descriptionHTML}}/>
                        </Col>
                    </Row>
                </ListGroupItem>
            )}
        </ListGroup>
    );
}


export default StarredRepo;