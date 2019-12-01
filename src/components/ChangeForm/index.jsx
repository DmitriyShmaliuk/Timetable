import React from 'react';
import { Select, Input, Icon, Button} from 'antd';
import './style.css';

const { Option } = Select;

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
    value: "Чтевер",
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

export default function ChangeForm ({groups}){
    return (
        <form className="change-form">
            <header>
                <h2>Змінити розклад</h2>
                <Icon id="closeIcon" type="close"/>
            </header>

            <section id="mainData">
                <Select placeholder="Оберіть день" size="large">
                    {day.map(el => <Option value={el.key} key={el.key}>{el.value}</Option>)}
                </Select>

                <Select placeholder="Оберіть групу" size="large">
                    {groups.map(el => <Option value={el.key} key={el.key}>{el.title}</Option>)}
                </Select>

                <Select placeholder="Оберіть пару" size="large">
                    {disciplines.map(el => <Option value={el.key} key={el.key}>{el.value}</Option>)}
                </Select>
            </section>

            <section>
                <header>
                    <h3>Інформація про пару</h3>
                </header>

                <Input placeholder="Назва предмету" size="large"/>
                <Input placeholder="Ім'я викладача" size="large"/>
                <Input placeholder="Номер аудиторії" size="large"/>
            </section>

            <section id="submitBtn">
                <Button type="primary" size="large" style={{width: '125px'}}ghost>Змінити</Button>
            </section>
        </form>
    )
}