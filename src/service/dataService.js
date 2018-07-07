import { GraphQLClient } from 'graphql-request';
import profileStore from '../store/profile.store';
import repositoriesStore from '../store/repositories.store';
import appConfig from '../appConfig';
import authService from "./authService";

class DataService {
    constructor(){
        if(authService.getAccessToken()) {
            this.client = new GraphQLClient(appConfig.dataEndpoint, {
                headers: {
                    "Authorization": "bearer " + authService.getAccessToken().split('=')[1].split('&')[0],
                }
            });
        }
    }

    getProfileData(){
        const proFileDataQuery = `
            query { 
              viewer {
                login
                name
                avatarUrl
                bio
                url
                company
                location
              }
            }
        `;

        // blog
        // following
        // followers

        this.client.request(proFileDataQuery)
            .then((data) => {
                console.log("User Information", data.viewer);
                profileStore.setProfileInfo(data.viewer);
            })
            .catch(err => console.log(err.response.errors))
    }

    getRepositories(){
        const repoDataQuery = `
            query { 
              viewer {
                repositories(last: 100) {
                   nodes {
                     name
                     url
                   }
                 }
              }
            }
        `;

        this.client.request(repoDataQuery)
            .then((data) => {
                console.log("Repositories", data.viewer);
                repositoriesStore.setRepoData(data.viewer);
            })
            .catch(err => console.log(err))
    }
}


export default new DataService();