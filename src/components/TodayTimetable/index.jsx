import React, {Fragment,useState} from 'react';
import {Table, Breadcrumb} from 'antd';
import {connect} from 'react-redux';

function TodayTimetable ({tables}){
    const [day] = useState(new Date().getDay());
    const days = ['sunday' ,'monday','tuesday', 'wednesday','thursday', "friday", 'sunday'];
    const [tableIndex, setTableIndex] = useState(0);

    tables.forEach(el=>el.columns.forEach(el=>el.render = text => <Fragment><p>{text.name}</p>
        <span>{text.teacher}</span><span className = "lecture-hall">{text.lectureHall}</span></Fragment>));

    return(
        <div className="content">
            {
                (day>0&&day<6) ? (
                <Fragment>
                    <Breadcrumb mode="horizontal">
                        <Breadcrumb.Item className="item" onClick={()=>setTableIndex(0)}>Електрифікація та інформаційні системи</Breadcrumb.Item>
                        <Breadcrumb.Item className="item" onClick={()=>setTableIndex(1)}>Агрономія</Breadcrumb.Item>
                        <Breadcrumb.Item className="item" onClick={()=>setTableIndex(2)}>Агроінженерія</Breadcrumb.Item>
                        <Breadcrumb.Item className="item" onClick={()=>setTableIndex(3)}>Будівництво та цивільна інженерія</Breadcrumb.Item>
                        <Breadcrumb.Item className="item" onClick={()=>setTableIndex(4)}>Економічне</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="time-table">
                        <Table columns={tables[tableIndex].columns} 
                            dataSource={tables[tableIndex][days[day]]} datakey={tableIndex} pagination = {false} bordered/>
                    </div>
                </Fragment>):
                <h2>Сьогодні навчання не проходить!</h2>
            }
        </div>
    );
}
export default connect (state =>({
    tables: state.tables
}),{})(TodayTimetable);