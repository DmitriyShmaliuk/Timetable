import React from 'react';
import { Table, Button} from 'antd';
import 'antd/dist/antd.css';
import "./style.css";

const columns=[
    {
        title: 'П-21',
        dataIndex: 'p21',
        key: 'p21',
        render: text => <p>{text}</p>,
    },
    {
        title: 'П-22',
        dataIndex: 'p22',
        key: 'p22',
        render: text => <p>{text}</p>,
    },
    {
        title: 'П-31',
        dataIndex: 'p31',
        key: 'p31',
        render: text => <p>{text}</p>,
    },
    {
        title: 'П-32',
        dataIndex: 'p32',
        key: 'p32',
        render: text => <p>{text}</p>,
    },
    {
        title: 'П-41',
        dataIndex: 'p41',
        key: 'p41',
        render: text => <p>{text}</p>,
    },
    {
        title: 'П-42',
        dataIndex: 'p42',
        key: 'p42',
        render: text => <p>{text}</p>,
    },

];

const data = [
    {
      key: '1',
      p21: 'ТОЕ',
      p22: 'Вступ до фаху',
      p31: '',
      p32: 'Математична логіка',
      p41: 'Економіка IT',
      p42: 'ММДО'
    },
    {
        key: '2',
        p21: 'Іноземна мова',
        p22: 'Вища математика',
        p31: 'Математична логіка',
        p32: 'ТСПП',
        p41: 'ММДО',
        p42: 'Економіка IT'
    },
    {
        key: '3',
        p21: 'Вступ до фаху',
        p22: 'Фіз.вих',
        p31: 'ТСПП',
        p32: 'Чисельні методи',
        p41: 'Фіз.вих',
        p42: ''
    },
    {
        key: '4',
        p21: 'Укр.мова (факультатив)',
        p22: 'Укр.мова (факультатив)',
        p31: '',
        p32: '',
        p41: '',
        p42: ''
    },
];

function MainTimetable(){
    return(
        <div className="content"> 
            <div className="time-table">
                <Table columns={columns} dataSource = {data} pagination = {false} bordered getPopupContainer = {()=>'Here is popup'}/>
                <Table columns={columns} dataSource = {data} pagination = {false} bordered/>
                <Table columns={columns} dataSource = {data} pagination = {false} bordered/>
                <Table columns={columns} dataSource = {data} pagination = {false} bordered/>
                <Table columns={columns} dataSource = {data} pagination = {false} bordered/>
            </div>

            <div id="changeBtn">
                <Button id="changeBtn" size="large" type="danger" ghost>Змінити розклад</Button>
            </div>
        </div>
    );
}

export default MainTimetable;