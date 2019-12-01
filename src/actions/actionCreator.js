import {CHANGE_TIMETABLE, SET_USER} from '../constants';

export const changeTimetable = (day, discipline, group, name, teacher, audience, speciality)=>({
    type:CHANGE_TIMETABLE,
    day,
    discipline,
    group,
    name,
    teacher,
    audience,
    speciality
});

export const setCurrentUser = (typeName, login, name, password) =>({
    type: SET_USER,
    typeName,
    login,
    name,
    password
});