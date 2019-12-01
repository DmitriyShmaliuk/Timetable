import {CHANGE_TIMETABLE} from '../constants';

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