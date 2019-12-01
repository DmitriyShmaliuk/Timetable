import {SET_USER} from "../constants";

let USER = {
    user: {type: '', login: '', name: '', password: ''}
};

const user = (state = USER.user, {type, typeName, login, name, password}) => {
    switch(type){
        case SET_USER:
            const newState = state;
            newState.type = typeName;
            newState.login = login;
            newState.name = name;
            newState.password = password;
            return newState;
        default:
            return state;
    }
}

export default user;