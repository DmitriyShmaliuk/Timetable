import {defaultUsers} from '../store/base-data';

let USERS = {
    users: defaultUsers
};

const users = (state = USERS.users, {type, typeName, login, name, password}) => {
    switch(type){
        default:
            return state;
    }
}

export default users;