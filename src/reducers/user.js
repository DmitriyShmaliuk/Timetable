let USER = {
    user: {type: '', login: '', name: '', password: ''}
};

const user = (state = USER.user, {type, typeName, login, name, password}) => {
    switch(type){
        default:
            return state;
    }
}

export default user;