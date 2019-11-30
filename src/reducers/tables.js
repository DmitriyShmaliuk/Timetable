import {load} from 'redux-localstorage-simple';
import BaseData from '../store/base-data';

let TABLES = load({namespace: 'timetable'});

if(!TABLES || !TABLES.tables || !TABLES.tables.length){
     TABLES = {
        tables: [{columns: BaseData.columns, data: BaseData.monday},
                {columns: BaseData.columns, data: BaseData.tuesday},
                {columns: BaseData.columns, data: BaseData.wednesday},
                {columns: BaseData.columns, data: BaseData.thursday},
                {columns: BaseData.columns, data: BaseData.friday}]
     }
};

const tables = (state = TABLES.tables, {type, day, position, name, teacher, lectureHall}) => {
    switch(type){
        default:
            return state;
    }
}

export default tables;