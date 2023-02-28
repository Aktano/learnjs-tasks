function getWeekDay(date) {
    let arr = ['ВС', 'ПН', 'ВТ', 'СР','ЧТ', 'ПТ', 'СБ'];
    return arr[date.getDay() ];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
console.log(getWeekDay(date) ); // ПТ