import React, {Fragment} from 'react';

export default {
    electrics: {
        columns: [{
            title: "П-21",
            dataIndex: "p21",
            key: "p21",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "П-22",
            dataIndex: "p22",
            key: "p22",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "П-31",
            dataIndex: "p31",
            key: "p31",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "П-32",
            dataIndex: "p32",
            key: "p32",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "П-41",
            dataIndex: "p41",
            key: "p41",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "П-42",
            dataIndex: "p42",
            key: "p42",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        }],
        monday: [{
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
        ],
        tuesday: [
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
        ],
        wednesday: [
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
        ],
        thursday:[
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
        ],
        friday: [
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
        ]
    },
    agronomy:{
        columns: [{
            title: "А-21",
            dataIndex: "a21",
            key: "a21",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "А-22",
            dataIndex: "a22",
            key: "a22",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "А-31",
            dataIndex: "a31",
            key: "a31",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "А-32",
            dataIndex: "a32",
            key: "a32",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "А-41",
            dataIndex: "a41",
            key: "a41",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "А-42",
            dataIndex: "a42",
            key: "a42",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        }],
        monday: [{
            key: '1',
            a21: {name: '', lectureHall: '', teacher: ''},
            a22: {name: '', lectureHall: '', teacher: ''},
            a31: {name: '', lectureHall: '', teacher: ''},
            a32: {name: '', lectureHall: '', teacher: ''},
            a41: {name: '', lectureHall: '', teacher: ''},
            a42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '2',
            a21: {name: '', lectureHall: '', teacher: ''},
            a22: {name: '', lectureHall: '', teacher: ''},
            a31: {name: '', lectureHall: '', teacher: ''},
            a32: {name: '', lectureHall: '', teacher: ''},
            a41: {name: '', lectureHall: '', teacher: ''},
            a42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '3',
            a21: {name: '', lectureHall: '', teacher: ''},
            a22: {name: '', lectureHall: '', teacher: ''},
            a31: {name: '', lectureHall: '', teacher: ''},
            a32: {name: '', lectureHall: '', teacher: ''},
            a41: {name: '', lectureHall: '', teacher: ''},
            a42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '4',
            a21: {name: '', lectureHall: '', teacher: ''},
            a22: {name: '', lectureHall: '', teacher: ''},
            a31: {name: '', lectureHall: '', teacher: ''},
            a32: {name: '', lectureHall: '', teacher: ''},
            a41: {name: '', lectureHall: '', teacher: ''},
            a42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '5',
            a21: {name: '', lectureHall: '', teacher: ''},
            a22: {name: '', lectureHall: '', teacher: ''},
            a31: {name: '', lectureHall: '', teacher: ''},
            a32: {name: '', lectureHall: '', teacher: ''},
            a41: {name: '', lectureHall: '', teacher: ''},
            a42: {name: '', lectureHall: '', teacher: ''}
          }
        ],
        tuesday: [
            {
                key: '1',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        wednesday: [
            {
                key: '1',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        thursday:[
            {
                key: '1',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        friday: [
            {
                key: '1',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                a21: {name: '', lectureHall: '', teacher: ''},
                a22: {name: '', lectureHall: '', teacher: ''},
                a31: {name: '', lectureHall: '', teacher: ''},
                a32: {name: '', lectureHall: '', teacher: ''},
                a41: {name: '', lectureHall: '', teacher: ''},
                a42: {name: '', lectureHall: '', teacher: ''}
              }
        ]
    },
    economics: {
        columns: [{
            title: "Е-21",
            dataIndex: "e21",
            key: "e21",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "Е-22",
            dataIndex: "e22",
            key: "e22",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "Е-31",
            dataIndex: "e31",
            key: "e31",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "Е-32",
            dataIndex: "e32",
            key: "e32",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        }],
        monday: [{
            key: '1',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '2',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '3',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '4',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '5',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            }],
        tuesday: [{
            key: '1',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '2',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '3',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '4',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '5',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            }],
        wednesday: [{
            key: '1',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '2',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '3',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '4',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '5',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            }],
        thursday:[{
            key: '1',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '2',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '3',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '4',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '5',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            }],
        friday: [{
            key: '1',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '2',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '3',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '4',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            },
            {
            key: '5',
                e21: {name: '', lectureHall: '', teacher: ''},
                e22: {name: '', lectureHall: '', teacher: ''},
                e31: {name: '', lectureHall: '', teacher: ''},
                e32: {name: '', lectureHall: '', teacher: ''},
            }]
    },
    agroEngineering: {
        columns: [{
            title: "Аі-21",
            dataIndex: "ai21",
            key: "ai21",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "Аі-22",
            dataIndex: "ai22",
            key: "ai22",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "Аі-31",
            dataIndex: "ai31",
            key: "ai31",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "Аі-32",
            dataIndex: "ai32",
            key: "ai32",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "Аі-41",
            dataIndex: "ai41",
            key: "a41",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "Аі-42",
            dataIndex: "ai42",
            key: "ai42",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        }],
        monday: [{
            key: '1',
            ai21: {name: '', lectureHall: '', teacher: ''},
            ai22: {name: '', lectureHall: '', teacher: ''},
            ai31: {name: '', lectureHall: '', teacher: ''},
            ai32: {name: '', lectureHall: '', teacher: ''},
            ai41: {name: '', lectureHall: '', teacher: ''},
            ai42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '2',
            ai21: {name: '', lectureHall: '', teacher: ''},
            ai22: {name: '', lectureHall: '', teacher: ''},
            ai31: {name: '', lectureHall: '', teacher: ''},
            ai32: {name: '', lectureHall: '', teacher: ''},
            ai41: {name: '', lectureHall: '', teacher: ''},
            ai42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '3',
            ai21: {name: '', lectureHall: '', teacher: ''},
            ai22: {name: '', lectureHall: '', teacher: ''},
            ai31: {name: '', lectureHall: '', teacher: ''},
            ai32: {name: '', lectureHall: '', teacher: ''},
            ai41: {name: '', lectureHall: '', teacher: ''},
            ai42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '4',
            ai21: {name: '', lectureHall: '', teacher: ''},
            ai22: {name: '', lectureHall: '', teacher: ''},
            ai31: {name: '', lectureHall: '', teacher: ''},
            ai32: {name: '', lectureHall: '', teacher: ''},
            ai41: {name: '', lectureHall: '', teacher: ''},
            ai42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '5',
            ai21: {name: '', lectureHall: '', teacher: ''},
            ai22: {name: '', lectureHall: '', teacher: ''},
            ai31: {name: '', lectureHall: '', teacher: ''},
            ai32: {name: '', lectureHall: '', teacher: ''},
            ai41: {name: '', lectureHall: '', teacher: ''},
            ai42: {name: '', lectureHall: '', teacher: ''}
          }
        ],
        tuesday: [
            {
                key: '1',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        wednesday: [
            {
                key: '1',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        thursday:[
            {
                key: '1',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        friday: [
            {
                key: '1',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                ai21: {name: '', lectureHall: '', teacher: ''},
                ai22: {name: '', lectureHall: '', teacher: ''},
                ai31: {name: '', lectureHall: '', teacher: ''},
                ai32: {name: '', lectureHall: '', teacher: ''},
                ai41: {name: '', lectureHall: '', teacher: ''},
                ai42: {name: '', lectureHall: '', teacher: ''}
              }
        ]
    },
    buildingEngenering: {
        columns: [{
            title: "БЦІ-21",
            dataIndex: "bci21",
            key: "bci21",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "БЦІ-22",
            datbcindex: "bci22",
            key: "bci22",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "БЦІ-31",
            datbcindex: "bci31",
            key: "bci31",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "БЦІ-32",
            datbcindex: "bci32",
            key: "bci32",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "БЦІ-41",
            datbcindex: "bci41",
            key: "a41",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        },
        {
            title: "БЦІ-42",
            datbcindex: "bci42",
            key: "bci42",
            render: text => <Fragment><p>{text.name}</p><span>{text.teacher}</span>
                <span className = "lecture-hall">{text.lectureHall}</span></Fragment>,
        }],
        monday: [{
            key: '1',
            bci21: {name: '', lectureHall: '', teacher: ''},
            bci22: {name: '', lectureHall: '', teacher: ''},
            bci31: {name: '', lectureHall: '', teacher: ''},
            bci32: {name: '', lectureHall: '', teacher: ''},
            bci41: {name: '', lectureHall: '', teacher: ''},
            bci42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '2',
            bci21: {name: '', lectureHall: '', teacher: ''},
            bci22: {name: '', lectureHall: '', teacher: ''},
            bci31: {name: '', lectureHall: '', teacher: ''},
            bci32: {name: '', lectureHall: '', teacher: ''},
            bci41: {name: '', lectureHall: '', teacher: ''},
            bci42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '3',
            bci21: {name: '', lectureHall: '', teacher: ''},
            bci22: {name: '', lectureHall: '', teacher: ''},
            bci31: {name: '', lectureHall: '', teacher: ''},
            bci32: {name: '', lectureHall: '', teacher: ''},
            bci41: {name: '', lectureHall: '', teacher: ''},
            bci42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '4',
            bci21: {name: '', lectureHall: '', teacher: ''},
            bci22: {name: '', lectureHall: '', teacher: ''},
            bci31: {name: '', lectureHall: '', teacher: ''},
            bci32: {name: '', lectureHall: '', teacher: ''},
            bci41: {name: '', lectureHall: '', teacher: ''},
            bci42: {name: '', lectureHall: '', teacher: ''}
          },
          {
            key: '5',
            bci21: {name: '', lectureHall: '', teacher: ''},
            bci22: {name: '', lectureHall: '', teacher: ''},
            bci31: {name: '', lectureHall: '', teacher: ''},
            bci32: {name: '', lectureHall: '', teacher: ''},
            bci41: {name: '', lectureHall: '', teacher: ''},
            bci42: {name: '', lectureHall: '', teacher: ''}
          }
        ],
        tuesday: [
            {
                key: '1',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        wednesday: [
            {
                key: '1',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        thursday:[
            {
                key: '1',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              }
        ],
        friday: [
            {
                key: '1',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '2',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '3',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '4',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              },
              {
                key: '5',
                bci21: {name: '', lectureHall: '', teacher: ''},
                bci22: {name: '', lectureHall: '', teacher: ''},
                bci31: {name: '', lectureHall: '', teacher: ''},
                bci32: {name: '', lectureHall: '', teacher: ''},
                bci41: {name: '', lectureHall: '', teacher: ''},
                bci42: {name: '', lectureHall: '', teacher: ''}
              }
        ]
    }
}