import {action, observable} from 'mobx-react';

class Profile {
    @observable profileInfo = {
        name: '',
        username: '',
        bio: '',
        avatar: ''
    }


    @action setProfileInfo(){
        this.profileInfo = {};
    }
}

export default Profile();