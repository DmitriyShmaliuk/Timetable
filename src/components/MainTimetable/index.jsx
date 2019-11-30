import React from 'react';
import { Table, Button, Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import "./style.css";

function MainTimetable({tables}){
    return(
        <div className="content">
            <Breadcrumb mode="horizontal">
                <Breadcrumb.Item><Link>Агрономія</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link>Економічне</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link>Агроінженерія</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link>Будівництво та цивільна інженерія</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link>Електрифікація та інформаційні системи</Link></Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="time-table">
                <Table columns={tables[0].columns} dataSource = {tables[0].data} pagination = {false} bordered/>
                <Table columns={tables[1].columns} dataSource = {tables[1].data} pagination = {false} bordered/>
                <Table columns={tables[2].columns} dataSource = {tables[2].data} pagination = {false} bordered/>
                <Table columns={tables[3].columns} dataSource = {tables[3].data} pagination = {false} bordered/>
                <Table columns={tables[4].columns} dataSource = {tables[4].data} pagination = {false} bordered/>
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