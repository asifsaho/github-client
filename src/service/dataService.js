import {GraphQLClient} from 'graphql-request';
import profileStore from '../store/profile.store';
import repositoriesStore from '../store/repositories.store';
import appConfig from '../appConfig';
import authService from "./authService";

class DataService {
    constructor() {
        if (authService.getAccessToken()) {
            this.client = new GraphQLClient(appConfig.dataEndpoint, {
                headers: {
                    "Authorization": "bearer " + authService.getAccessToken().split('=')[1].split('&')[0],
                }
            });
        }
    }

    logout() {
        localStorage.clear();
        window.location = '/'
    }

    getProfileData() {
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
            .catch(err => {
                if (err.response.status === 401) {
                    this.logout();
                }
                console.log(err.response.errors)
            })
    }

    getRepositories() {
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
            .catch(err => {
                console.log(err);

                if (err.response.status === 401) {
                    this.logout();
                }
            })
    }


    getSingleRepositoryDetails(repoName) {
        const singleRepoDataQuery = `
            query { 
              viewer {
               repository(name: "${repoName}") {
                 name
                 nameWithOwner
                 description
                 createdAt
                 updatedAt
                 defaultBranchRef {
                   target {
                     ... on Commit {
                       tree {
                         entries {
                           name
                         }
                       }
                     }
                   }
                 },
                 readMe: object(expression: "master:README.md") {
                      ... on Blob{
                      text
                    }
                  }
                }
              }
            }`;

        this.client.request(singleRepoDataQuery)
            .then((data) => {
                console.log("Single Repo Data Loaded", data.viewer.repository);
                repositoriesStore.setSingleRepoData(data.viewer.repository);
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                    this.logout();
                }
            })
    }


    getStarredRepository() {
        const updateDescriptionQuery = `
            query { 
              viewer { 
                starredRepositories(first: 20) {
                  edges {
                    node {
                      name
                      createdAt
                      descriptionHTML
                      url
                    }
                  }
                }
              }
            }`;

        this.client.request(updateDescriptionQuery)
            .then((data) => {
                console.log("Starred Repos", data.viewer.starredRepositories.edges);
                repositoriesStore.setStarredRepo(data.viewer.starredRepositories.edges);
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 401) {
                    this.logout();
                }
            })
    }
}


export default new DataService();