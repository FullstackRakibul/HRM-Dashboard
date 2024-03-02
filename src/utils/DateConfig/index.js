
// For convert date string from database date string
export const convertActualtDateString=(myDate)=>{
    let str="";
    var newDate = new Date(myDate);
    str=checkDayIsSingleNumber(newDate.getDate())+'-'+getMonthWithMonthId(parseInt(newDate.getMonth()+1))+'-'+newDate.getFullYear();

    return str;
}

export const convertActualtDateTime=(myDate)=>{
    //console.log(myDate)
    let str="";
    let d = new Date(myDate);
    //var d = new Date();
    //const utcDate=new Date(new Date(myDate).toLocaleString('en', {timeZone: 'America/New_York'}))
    //var utcDate = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()));
    
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let newDate = new Date(utc + (3600000 * 0));
    //console.log("UU",newDate)
    //console.log(newDate.getMonth())
    str=checkDayIsSingleNumber(newDate.getDate())+'-'+getMonthWithMonthId(parseInt(newDate.getMonth()+1))+'-'+newDate.getFullYear();
    let flag="AM";
    let hours=newDate.getHours();
    const minutes=newDate.getMinutes();
   //console.log(newDate)
    if(hours>12){
        hours=hours-12;
        flag="PM"
    }
    str+=` ${hours>=10?hours:'0'+hours}:${minutes>=10?minutes:'0'+minutes} ${flag}`;

    return str;
}

export const convertActualtDateString2=(myDate)=>{
    let str="";
    var newDate = new Date(myDate);
    str=checkDayIsSingleNumber(newDate.getDate())+','+getMonthWithMonthId(parseInt(newDate.getMonth()+1));

    return str;
}


// Convert Month Id To Short Name
export const getMonthWithMonthId=(monthId)=>{
    let month="";

    switch(monthId){
        case 1:
            month="Jan";
            break;
        case 2:
            month="Feb";
            break;
        case 3:
            month="Mar";
            break;
        case 4:
            month="Apr";
            break;
        case 5:
            month="May";
            break;
        case 6:
            month="Jun";
            break;
        case 7:
            month="Jul";
            break;
        case 8:
            month="Aug";
            break;
        case 9:
            month="Sep";
            break;
        case 10:
            month="Oct";
            break;
        case 11:
            month="Nov";
            break;
        case 12:
            month="Dec";
            break;
        default:
            month="Invalid Month Id";
            break;
    }

    return month;
}

// Check Day Is Single . If Single Then Added 0 before Day.
export const checkDayIsSingleNumber=(day)=>{
    let myDay='';
    if(day<10){
        myDay='0'+day
    }else{
        myDay=day
    }

    return myDay;
}


// Format From Date String For Initial Value
export const DatePickerFromFormat=(getDate)=>{
    let dateStr='';

    dateStr='01-'+getMonthFullNameWithId(parseInt(getDate.getMonth()+1))+'-'+getDate.getFullYear();

    return dateStr;
}

// Format To Date String For initial Value
export const DatePickerToFormat=(getDate)=>{
    let dateStr='';
    let isleapYear=(getDate.getFullYear());
    let monthTotalDays=getMonthDayWithId(parseInt(getDate.getMonth()+1));

    if(isleapYear && getDate.getMonth()===1){
        monthTotalDays=parseInt(monthTotalDays)+1;
    }

    dateStr=monthTotalDays+'-'+getMonthFullNameWithId(parseInt(getDate.getMonth()+1))+'-'+getDate.getFullYear();

    return dateStr;
}


// Check Year Is Leap Year Or Not
export const checkLeapYear=(getYear)=>{
    if(parseInt(getYear)%4===0){
        return true;
    }
    return false;
}


// Convert Month Id To Month Total Days
export const getMonthDayWithId=(Id)=>{
    let days=0;

    switch(Id){
        case 1:
            days=31;
            break;
        case 2:
            days=28;
            break;
        case 3:
            days=31;
            break;
        case 4:
            days=30;
            break;
        case 5:
            days=31;
            break;
        case 6:
            days=30;
            break;
        case 7:
            days=31;
            break;
        case 8:
            days=31;
            break;
        case 9:
            days=30;
            break;
        case 10:
            days=31;
            break;
        case 11:
            days=30;
            break;
        case 12:
            days=31;
            break;
        default:
            days=0;
            break;
    }    

    return days;
}


// Convert Month Id To Full Name
export const getMonthFullNameWithId=(monthNumber)=>{
    let month='';

    switch(monthNumber){
        case 1:
            month="January";
            break;
        case 2:
            month="February";
            break;
        case 3:
            month="March";
            break;
        case 4:
            month="April";
            break;
        case 5:
            month="May";
            break;
        case 6:
            month="June";
            break;
        case 7:
            month="July";
            break;
        case 8:
            month="August";
            break;
        case 9:
            month="September";
            break;
        case 10:
            month="October";
            break;
        case 11:
            month="November";
            break;
        case 12:
            month="December";
            break;
        default:
            month="Invalid Month Id";
            break;
    }    

    return month;
}


// Convert Month Name To Id
export const getMonthNumberWithName=(monthName)=>{
    let month='';

    switch(monthName){
        case "January":
            month='01';
            break;
        case 'February':
            month="02";
            break;
        case 'March':
            month="03";
            break;
        case 'April':
            month="04";
            break;
        case 'April':
            month="05";
            break;
        case 'June':
            month="06";
            break;
        case 'July':
            month="07";
            break;
        case 'August':
            month="08";
            break;
        case 'September':
            month="09";
            break;
        case 'October':
            month="10";
            break;
        case 'November':
            month="11";
            break;
        case 'December':
            month="12";
            break;
        default:
            month="Invalid Month Name";
            break;
    }    

    return month;
}