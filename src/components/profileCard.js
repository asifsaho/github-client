import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default (props) => {
    console.log(props)
    return(
        <div>
            <Card>
                <CardImg top width="100%" src={props.profile.avatarUrl.length ? props.profile.avatarUrl : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97180&w=318&h=300'} alt="" />
                <CardBody>
                    <CardTitle>{props.profile.name}</CardTitle>
                    <CardSubtitle>{props.profile.login}</CardSubtitle>
                    <CardText><i>{props.profile.location}</i></CardText>
                    <CardText><strong>Company:</strong> <i>{props.profile.company}</i></CardText>
                    <CardText>{props.profile.bio}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}