import {action, observable, toJS} from 'mobx';

class Profile {
    @observable profileInfo = {
        login: '',
        name: '',
        bio: ''
    };

    getProfileInfo(){
        return toJS(this.profileInfo)
    }

    @action setProfileInfo(data){
        this.profileInfo = data;
    }
}

export default new Profile();