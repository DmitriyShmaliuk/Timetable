import React, {useState} from 'react';
import {Input, Icon, Button, Alert} from 'antd';
import {setCurrentUser} from '../../actions/actionCreator';
import {connect} from 'react-redux';
import './style.css';

function AutorizationForm (props){
    const [data, setData] = useState({name: '', password: ''});
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const [isAutorization, setIsAutorization] = useState((props.user.login!=='') ? true : false);
    const [errorMessage, setErrorMessage] = useState('');

    const handlerChangeUser = function(event){
        const newData = data
        newData.name = event.target.value;
        setData(newData);
    }
 
    const handlerChangePassword = function(event){
        const newData = data;
        newData.password = event.target.value;
        setData(newData);
    }

    const autorization = function (){
        if (data.name === ''||data.password ===''){
            setErrorMessage("Заповніть поля: 'User', 'Password'");
            setIsErrorMessage(true);
            setTimeout(setIsErrorMessage, 4000, false);
            return;
        }

        const user = props.users.find((el)=> el.login === data.name);
        
        if (!user){
            setErrorMessage("Користувача не знайдено");
            setIsErrorMessage(true);
            setTimeout(setIsErrorMessage, 4000, false);
            return;
        }

       if (user.password !== data.password){
            setErrorMessage("Не вірний пароль");
            setIsErrorMessage(true);
            setTimeout(setIsErrorMessage, 4000, false);
            return;
       }

       props.setCurrentUser(user.type,user.login,user.name,user.password);
       setIsAutorization(true);
    }

    const logout = function (){
        props.setCurrentUser('','','','');
        setIsAutorization(false);
    }

    return(
        <div className="content">
             <div id="errorMessage" style={{display: isErrorMessage?"block":"none"}}>
                <Alert message="Помилка" description={errorMessage}
                    type="error" showIcon/>
            </div>

            {
                (!isAutorization)?
                <form id="autorization">
                    <h2>Вхід</h2>

                    <Input
                        prefix={<Icon type="user" size="large" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username" onChange={handlerChangeUser} autoComplete="off" allowClear
                    />
                    <Input
                        prefix={<Icon type="lock" size="large" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password" onChange={handlerChangePassword} placeholder="Password" autoComplete="off" allowClear
                    />

                    <Button type="primary" style={{width: "100%"}} onClick={autorization}>
                        Log in
                    </Button>
                </form>:
                <div id="userInformation">
                    <h2>Інормація про користувача</h2>
                    <p><b>Тип:</b> {props.user.type}</p>
                    <p><b>Ім'я:</b> {props.user.name}</p>
                    <p><b>Логін:</b> {props.user.login}</p>
                    <Button type="primary" style={{width: "100%"}} onClick={logout}>
                        Вихід
                    </Button>
                </div>
            }
        </div>
    );
}


export default connect (state =>({
    users: state.users,
    user: state.user,
}),{setCurrentUser})(AutorizationForm);

