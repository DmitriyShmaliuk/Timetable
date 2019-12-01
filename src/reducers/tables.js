import {CHANGE_TIMETABLE} from '../constants';
import {load} from 'redux-localstorage-simple';
import BaseData from '../store/base-data';

let TABLES = load({namespace: 'timetable'});
const disciplines = ['first','second','third','fourth','fifth'];


if(!TABLES || !TABLES.tables || !TABLES.tables.length){
     TABLES = {
        tables: [BaseData.electrics, BaseData.agronomy, BaseData.economics, 
            BaseData.agroEngineering, BaseData.buildingEngenering]
     }
};

const tables = (state = TABLES.tables, {type, day, discipline, group, name, teacher, audience, speciality}) => {
    switch(type){
        case CHANGE_TIMETABLE:
            const newState = state;
            const disciplineIndex = disciplines.indexOf(discipline);
            const reccord = newState[speciality][day][disciplineIndex][group];
            reccord.name = name;
            reccord.teacher = teacher;
            reccord.lectureHall = audience;
            return newState;
        default:
            return state;
    }
}

export default tables;