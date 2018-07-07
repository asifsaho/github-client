import {action, observable, toJS} from 'mobx';

class Profile {
    getProfileInfo(){
        return toJS(this.profileInfo)
    }

    @observable profileInfo = {
        login: '',
        name: '',
        avatarUrl: '',
        bio: '',
        url: '',
        company: '',
        location: ''
    };

    @action setProfileInfo(data){
        this.profileInfo = data;
    }
}

export default new Profile();