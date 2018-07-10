import {action, observable, toJS} from 'mobx';

class Repositories {
    @observable repositories = [];
    @observable starredRepos = [];
    @observable singleRepoData = {
        name: "",
        nameWithOwner: "",
        description: "",
        createdAt: "",
        updatedAt: "",
        defaultBranchRef: {
            "target": {
                "tree": {
                    "entries": [{name: ""}]
                }
            }
        },
        readMe: {
            text: ''
        }
    };

    getMyRepos() {
        return toJS(this.repositories);
    }

    getSingleRepoData() {
        return toJS(this.singleRepoData);
    }

    getStarredRepos() {
        return toJS(this.starredRepos);
    }

    @action setRepoData(data) {
        this.repositories = data.repositories;
    }

    @action setStarredRepo(data) {
        this.starredRepos = data;
    }

    @action setSingleRepoData(data) {
        this.singleRepoData = data;
    }
}

export default new Repositories();