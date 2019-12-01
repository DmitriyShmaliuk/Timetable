import React, {useState} from 'react';
import { Table, Button, Breadcrumb} from 'antd';
import {connect} from 'react-redux';
import ChangeForm from '../ChangeForm/index';
import 'antd/dist/antd.css';
import "./style.css";

function MainTimetable({tables}){
    const [tableIndex, setTableIndex] = useState(0);
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
                <Button id="changeBtn" size="large" type="danger" ghost>Змінити розклад</Button>
            </div>

            <ChangeForm groups={tables[tableIndex].columns}/>
        </div>
    );
}

export default connect (state =>({
    tables: state.tables
}),{})(MainTimetable);