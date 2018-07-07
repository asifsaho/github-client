import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default (props) => {
    console.log(props)
    return(
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97180&w=318&h=300" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.profile.name}</CardTitle>
                    <CardSubtitle>{props.profile.login}</CardSubtitle> <br/>
                    <CardText>{props.profile.bio}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}