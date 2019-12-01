import React, {Fragment, useState} from 'react';
import { Table, Button, Breadcrumb, Select, Input, Icon, Form, Alert} from 'antd';
import {changeTimetable} from '../../actions/actionCreator';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import "./style.css";

const {Option} = Select;

const day = [{
    key: "monday",
    value: "Понеділок",
},
{
    key: "tuesday",
    value: "Вівторок",
},
{
    key: "wedndesday",
    value: "Середа",
},
{
    key: "thursday",
    value: "Четвер",
},
{
    key: "friday",
    value: "П'ятниця",
}];

const disciplines =[{
    key: "first",
    value: "Перша",
},
{
    key: "second",
    value: "Друга",
},
{
    key: "third",
    value: "Третя",
},
{
    key: "fourth",
    value: "Четверта",
},
{
    key: "fifth",
    value: "П'ята",
}];

function MainTimetable(props){
    const [tableIndex, setTableIndex] = useState(0);
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const [data, setData] = useState({day: '', group: '', disciplines: '',
        name: '', teacher: '', audience: ''});

    props.tables.forEach(el=>el.columns.forEach(el=>el.render = text => <Fragment><p>{text.name}</p>
        <span>{text.teacher}</span><span className = "lecture-hall">{text.lectureHall}</span></Fragment>));

    const closeForm = function(){
        setIsDisplayForm(false);
    }

    const changeTimetable = function (){
        if(data.day==='' || data.group==='' || data.disciplines===''){
            setIsErrorMessage(true);
            setTimeout(setIsErrorMessage, 4000, false);
            return;
        }

        const {changeTimetable} = props;

        changeTimetable(data.day,data.disciplines,data.group,data.name,data.teacher,data.audience,tableIndex);
        closeForm();
    }

    const handlerChangeDay = function (value){
        const newData = data;
        newData.day = value;
        setData(newData);
    }

    const handlerChangeGroup = function (value){
        const newData = data;
        newData.group = value;
        setData(newData);
    }

    const handlerChangeDisciplines = function (value){
        const newData = data;
        newData.disciplines = value;
        setData(newData);
    }

    const handlerChangeName = function (event){
        const newData = data;
        newData.name = event.target.value;
        setData(newData);
    }

    const handlerChangeTeacher = function (event){
        const newData = data;
        newData.teacher = event.target.value;
        setData(newData);
    }

    const handlerChangeAudience = function (event){
        const newData = data;
        newData.audience = event.target.value;
        setData(newData);
    }

    return(
        <div className="content">
            <div id="errorMessage" style={{display: isErrorMessage?"block":"none"}}>
                <Alert message="Помилка" description="Заповніть поля: 'День', 'Група', 'Пара'"
                    type="error" showIcon/>
            </div>

            <Breadcrumb mode="horizontal">
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(0)}>Електрифікація та інформаційні системи</Breadcrumb.Item>
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(1)}>Агрономія</Breadcrumb.Item>
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(2)}>Агроінженерія</Breadcrumb.Item>
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(3)}>Будівництво та цивільна інженерія</Breadcrumb.Item>
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(4)}>Економічне</Breadcrumb.Item>
            </Breadcrumb>

            <div className="time-table">
                <Table columns={props.tables[tableIndex].columns} dataSource={props.tables[tableIndex].monday} pagination = {false} bordered/>
                <Table columns={props.tables[tableIndex].columns} dataSource={props.tables[tableIndex].tuesday} pagination = {false} bordered/>
                <Table columns={props.tables[tableIndex].columns} dataSource={props.tables[tableIndex].wednesday} pagination = {false} bordered/>
                <Table columns={props.tables[tableIndex].columns} dataSource={props.tables[tableIndex].thursday} pagination = {false} bordered/>
                <Table columns={props.tables[tableIndex].columns} dataSource={props.tables[tableIndex].friday} pagination = {false} bordered/>
            </div>

            {props.user.type === 'administrator' && <div id="changeBtn">
                <Button id="changeBtn" size="large" type="danger" ghost onClick={()=>setIsDisplayForm(true)}>Змінити розклад</Button>
            </div>}

            <Form className="change-form" style={{display: isDisplayForm?"block":"none"}}>
                <header>
                    <h2>Змінити розклад</h2>
                    <Icon id="closeIcon" type="close" onClick={closeForm}/>
                </header>

                <section id="mainData">
                    <Select id="day" placeholder="Оберіть день" size="large" onChange={handlerChangeDay}>
                        {day.map(el => <Option value={el.key} key={el.key}>{el.value}</Option>)}
                    </Select>

                    <Select id="group" placeholder="Оберіть групу" size="large" onChange={handlerChangeGroup}>
                        {props.tables[tableIndex].columns.map(el => <Option value={el.key} key={el.key}>{el.title}</Option>)}
                    </Select>

                    <Select id="disciplines" placeholder="Оберіть пару" size="large" 
                        onChange={handlerChangeDisciplines}>
                            {disciplines.map(el => <Option value={el.key} key={el.key}>{el.value}</Option>)}
                    </Select>
                </section>

                <section>
                    <header>
                        <h3>Інформація про пару</h3>
                    </header>

                    <Input name="name" placeholder="Назва предмету" size="large" onChange={handlerChangeName} 
                        autoComplete="off" allowClear/>
                    <Input name="teacher" placeholder="Ім'я викладача" size="large" onChange={handlerChangeTeacher} 
                        autoComplete="off" allowClear/>
                    <Input name="audience" placeholder="Номер аудиторії" size="large" onChange={handlerChangeAudience}
                        autoComplete="off" allowClear/>
                </section>

                <section id="submitBtn">
                    <Button type="primary" size="large" style={{width: '125px'}}ghost
                        onClick={changeTimetable}>Змінити</Button>
                </section>
            </Form>
        </div>
    );
}

export default connect (state =>({
    tables: state.tables,
    user: state.user
}),{changeTimetable})(MainTimetable);