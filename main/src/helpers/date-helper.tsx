export const convertDateToUnixTimestamp = (date:any):any=>{
    return Math.floor(date.getTime() / 1000)
}

export const convertUnixTimestampToDate = (unixTimeStamp:any):any=>{
    const milliseconds = unixTimeStamp*1000;
    return new Date(milliseconds).toLocaleDateString();
}

export const createDate =(date:any, days:any, weeks:any, months:any, years:any):any=>{
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days + 7 * weeks);
    newDate.setMonth(newDate.getMonth() + months);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
}