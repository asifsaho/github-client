import {action, observable, toJS} from 'mobx';

class Repositories {
    @observable repositories = [];

    @action setRepoData(data){
        this.repositories = data.repositories;
    }

    @action getRepoData(){
        return toJS(this.repositories);
    }
}

export default new Repositories();