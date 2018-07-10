import React from 'react';
import {Table, Button, Row, Col, FormGroup, Input} from 'reactstrap';
import _ from 'lodash';
import classNames from 'classnames';

class RepositoryFilesTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            descriptionField: '',
            descriptionEditMood: false
        }
    }

    descriptionEditMoodOn = () => {
        this.setState({
            descriptionField: this.props.singleRepoDetails.description,
            descriptionEditMood: true
        })
    }

    descriptionEditUpdate = () => {
        this.setState({
            descriptionEditMood: false
        })
    }

    render() {
        return (
            <div>
                <div className="space"/>
                <div className="space"/>

                <Row>
                    <Col>
                        <h3>{this.props.singleRepoDetails.nameWithOwner}</h3>

                        <p className={classNames({hide: this.state.descriptionEditMood})}>
                            Description: {this.props.singleRepoDetails.description}
                            <a onClick={this.descriptionEditMoodOn} className="edit cursor-pointer">Edit</a>
                        </p>
                        <FormGroup className={classNames({hide: !this.state.descriptionEditMood})}>
                            <Input type="textarea" value={this.state.descriptionField}
                                   onChange={(event) => this.setState({descriptionField: event.target.value})}
                                   placeholder="Repo Description Goes Here"/>
                            <div className="space"/>
                            <Button onClick={this.descriptionEditUpdate}>Update Description</Button>
                        </FormGroup>

                        <div className="space"/>

                        <p>Updated at: {this.props.singleRepoDetails.updatedAt}</p>
                    </Col>
                </Row>

                <div className="space"/>

                <div className="space"/>

                <Table>
                    <thead>
                    <tr>
                        <th>Files and Folders</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(_.get(this.props, 'singleRepoDetails.defaultBranchRef.target.tree.entries')) ?
                        <FilesRow files={this.props.singleRepoDetails.defaultBranchRef.target.tree.entries}/> : <tr/>}
                    </tbody>
                </Table>

                <h4>{_.get(this.props.singleRepoDetails, 'readMe.text') ? "readme.md" : ""}</h4>
                <p>{_.get(this.props, 'singleRepoDetails.readMe.text')}</p>
            </div>
        )
    }
}

export default RepositoryFilesTable;


const FilesRow = (props) => {
    return(
        props.files.map((file, index) => (
            <tr key={index}>
                <td>{file.name}</td>
            </tr>
        ))
    )
}