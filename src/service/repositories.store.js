import {action, observable} from 'mobx-react';

class Repositories {
    @observable profileInfo = [];


    @action setProfileInfo(repos){
        // let organizedRepos;
        //
        // organizedRepos = repos.map(() => {
        //
        // });
        //
        // this.profileInfo = organizedRepos;
    }
}

export default Repositories();