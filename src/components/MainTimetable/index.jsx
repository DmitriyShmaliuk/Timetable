import React from 'react';
import { Table, Button} from 'antd';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import "./style.css";

const data = [
    {
      key: '1',
      p21: {name: 'ТОЕ', lectureHall: '310', teacher: 'Антипчук Б.О.'},
      p22: {name: 'Вступ до фаху', lectureHall: '101', teacher: 'Данильченко'},
      p31: {name: '', lectureHall: '', teacher: ''},
      p32: {name: 'Математична логіка', lectureHall: '16', teacher: 'Пустовіт Л.В.'},
      p41: {name: 'Економіка IT', lectureHall: '419а', teacher: 'Габрійчук Н.І.'},
      p42: {name: 'ММДО', lectureHall: '21', teacher: 'Можаровський С.В.'}
    },
    {
        key: '2',
        p21: {name: 'Іноземна мова', lectureHall: '4', teacher: 'Коновалова В.А.'},
        p22: {name: 'Вища математика', lectureHall: '15', teacher: 'Головач О.П.'},
        p31:  {name: 'Математична логіка', lectureHall: '16', teacher: 'Пустовіт Л.В.'},
        p32: {name: 'ТСПП', lectureHall: '18', teacher: 'Устименко Я.І'},
        p41: {name: 'ММДО', lectureHall: '21', teacher: 'Можаровський С.В.'},
        p42: {name: 'Економіка IT', lectureHall: '419а', teacher: 'Габрійчук Н.І.'}
    },
    {
        key: '3',
        p21: {name: 'Вступ до фаху', lectureHall: '101', teacher: 'Данильченко'},
        p22: {name: 'Фізичне виховання', lectureHall: '', teacher: 'Єль'},
        p31: {name: 'ТСПП', lectureHall: '18', teacher: 'Устименко Я.І'},
        p32: {name: 'Чисельні методи', lectureHall: '21', teacher: 'Можаровський С.В.'},
        p41: {name: 'Фізичне виховання', lectureHall: '', teacher: 'Свірідов'},
        p42: {name: '', lectureHall: '', teacher: ''}
    },
    {
        key: '4',
        p21: {name: 'Укр.мова (факультатив)', lectureHall: '420', teacher: 'Семенюк В.М.'},
        p22: {name: 'Укр.мова (факультатив)', lectureHall: '305', teacher: 'Емець Л.В.'},
        p31: {name: 'Чисельні методи', lectureHall: '21', teacher: 'Можаровський С.В.'},
        p32: {name: '', lectureHall: '', teacher: ''},
        p41: {name: '', lectureHall: '', teacher: ''},
        p42: {name: '', lectureHall: '', teacher: ''}
    },
    {
        key: '5',
        p21: {name: '', lectureHall: '', teacher: ''},
        p22: {name: '', lectureHall: '', teacher: ''},
        p31: {name: '', lectureHall: '', teacher: ''},
        p32: {name: '', lectureHall: '', teacher: ''},
        p41: {name: '', lectureHall: '', teacher: ''},
        p42: {name: '', lectureHall: '', teacher: ''}
    }
];

function MainTimetable({tables}){
    return(
        <div className="content"> 
            <div className="time-table">
                <Table columns={tables[0].columns} dataSource = {data} pagination = {false} bordered/>
                <Table columns={tables[1].columns} dataSource = {data} pagination = {false} bordered/>
                <Table columns={tables[2].columns} dataSource = {data} pagination = {false} bordered/>
                <Table columns={tables[3].columns} dataSource = {data} pagination = {false} bordered/>
                <Table columns={tables[4].columns} dataSource = {data} pagination = {false} bordered/>
            </div>

            <div id="changeBtn">
                <Button id="changeBtn" size="large" type="danger" ghost>Змінити розклад</Button>
            </div>
        </div>
    );
}

export default connect (state =>({
    tables: state.tables
}),{})(MainTimetable);