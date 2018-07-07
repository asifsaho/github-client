import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default (props) => {
    return(
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97180&w=318&h=300" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Asif Nawaz</CardTitle>
                    <CardSubtitle>asifsaho</CardSubtitle> <br/>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
        </div>
    )
}