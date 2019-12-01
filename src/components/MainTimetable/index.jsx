import React, {useState} from 'react';
import { Table, Button, Breadcrumb, Select, Input, Icon} from 'antd';
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

function MainTimetable({tables}){
    const [tableIndex, setTableIndex] = useState(0);
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const [data, setData] = useState({day: '', group: '', disciplines: '',
        name: '', teacher: '', audience: ''});

    const changeTimetable = function (){
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
            <Breadcrumb mode="horizontal">
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(0)}>Електрифікація та інформаційні системи</Breadcrumb.Item>
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(1)}>Агрономія</Breadcrumb.Item>
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(2)}>Економічне</Breadcrumb.Item>
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(3)}>Агроінженерія</Breadcrumb.Item>
                <Breadcrumb.Item className="item" onClick={()=>setTableIndex(4)}>Будівництво та цивільна інженерія</Breadcrumb.Item>
            </Breadcrumb>

            <div className="time-table">
                <Table columns={tables[tableIndex].columns} dataSource = {tables[tableIndex].monday} pagination = {false} bordered/>
                <Table columns={tables[tableIndex].columns} dataSource = {tables[tableIndex].tuesday} pagination = {false} bordered/>
                <Table columns={tables[tableIndex].columns} dataSource = {tables[tableIndex].wednesday} pagination = {false} bordered/>
                <Table columns={tables[tableIndex].columns} dataSource = {tables[tableIndex].thursday} pagination = {false} bordered/>
                <Table columns={tables[tableIndex].columns} dataSource = {tables[tableIndex].friday} pagination = {false} bordered/>
            </div>

            <div id="changeBtn">
                <Button id="changeBtn" size="large" type="danger" ghost onClick={()=>setIsDisplayForm(true)}>Змінити розклад</Button>
            </div>

            <form className="change-form" style={{display: isDisplayForm?"block":"none"}}>
                <header>
                    <h2>Змінити розклад</h2>
                    <Icon id="closeIcon" type="close" onClick={()=>setIsDisplayForm(false)}/>
                </header>

                <section id="mainData">
                    <Select id="day" placeholder="Оберіть день" size="large" onChange={handlerChangeDay}>
                        {day.map(el => <Option value={el.key} key={el.key}>{el.value}</Option>)}
                    </Select>

                    <Select id="group" placeholder="Оберіть групу" size="large" onChange={handlerChangeGroup}>
                        {tables[tableIndex].columns.map(el => <Option value={el.key} key={el.key}>{el.title}</Option>)}
                    </Select>

                    <Select id="disciplines" placeholder="Оберіть пару" size="large" onChange={handlerChangeDisciplines}>
                        {disciplines.map(el => <Option value={el.key} key={el.key}>{el.value}</Option>)}
                    </Select>
                </section>

                <section>
                    <header>
                        <h3>Інформація про пару</h3>
                    </header>

                    <Input name="name" placeholder="Назва предмету" size="large" onChange={handlerChangeName}/>
                    <Input name="teacher" placeholder="Ім'я викладача" size="large" onChange={handlerChangeTeacher}/>
                    <Input name="audience" placeholder="Номер аудиторії" size="large" onChange={handlerChangeAudience}/>
                </section>

                <section id="submitBtn">
                    <Button type="primary" size="large" style={{width: '125px'}}ghost
                        onClick={changeTimetable}>Змінити</Button>
                </section>
            </form>
        </div>
    );
}

export default connect (state =>({
    tables: state.tables
}),{})(MainTimetable);