import React, {useState} from 'react';
import {Input, Icon, Button, Alert} from 'antd';
import './style.css';

function AutorizationForm (){
    const [data, setData] = useState({name: '', password: ''});
    const [isErrorMessage, setIsErrorMessage] = useState(false);
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

        console.log(data.name, data.password);
    }

    return(
        <div className="content">
             <div id="errorMessage" style={{display: isErrorMessage?"block":"none"}}>
                <Alert message="Помилка" description={errorMessage}
                    type="error" showIcon/>
            </div>

            <form id="autorization">
                <h2>Вхід</h2>

                <Input
                    prefix={<Icon type="user" size="large" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username" onChange={handlerChangeUser} autocomplete="off" allowClear
                />
                <Input
                    prefix={<Icon type="lock" size="large" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password" onChange={handlerChangePassword} placeholder="Password" autocomplete="off" allowClear
                />

                <Button type="primary" style={{width: "100%"}} onClick={autorization}>
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default AutorizationForm;

