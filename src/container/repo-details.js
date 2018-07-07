import React, {Component} from 'react';
import {observer} from 'mobx-react';
import NavBar from "../components/navbar";
import profileStore from "../store/profile.store";
import dataService from "../service/dataService";
import repoStore from '../store/repositories.store';
import RepositoryFilesTable from '../components/repositoryFilesTable'

@observer class RepoDetails extends Component {
    componentWillMount(){
        dataService.getProfileData();
        dataService.getSingleRepositoryDetails(this.props.match.params.name);
    }

    render(){
        return(
            <div className="container">
                <NavBar profile={profileStore.getProfileInfo()}/>
                <RepositoryFilesTable singleRepoDetails={repoStore.getSingleRepoData()}/>
            </div>
        )
    }
}

export default RepoDetails;