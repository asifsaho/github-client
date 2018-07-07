import {action, observable, toJS} from 'mobx';

class Repositories {
    @observable repositories = [];
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

    @action setRepoData(data) {
        this.repositories = data.repositories;
    }

    getRepoData() {
        return toJS(this.repositories);
    }

    @action setSingleRepoData(data) {
        this.singleRepoData = data;
    }

    getSingleRepoData() {
        return toJS(this.singleRepoData);
    }
}

export default new Repositories();