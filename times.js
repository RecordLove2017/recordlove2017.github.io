﻿function setTime(){currentTime=secondToDate(((Math.round((new Date().getTime()+8*60*60*1000)/1000)-Math.round(new Date(Date.UTC(2017,1,28,0,0,0)).getTime()/1000))));currentTimeHtml="We Love "+currentTime[0]+" Years "+currentTime[1]+" Days "+currentTime[2]+" Hours "+currentTime[3]+" Mins "+currentTime[4]+" Secs ";document.getElementById("love_time").innerHTML=currentTimeHtml}function show_date_time(){var Config={"siteStartTime":"2019-11-11","version":"1.0.0"};var StartTime=Config.siteStartTime;var date=new Date(StartTime.replace(/-/g,"/"));var today=new Date();var timeold=(today.getTime()-date.getTime());var msPerDay=24*60*60*1000;var e_daysold=timeold/msPerDay;var daysold=Math.floor(e_daysold);var e_hrsold=(e_daysold-daysold)*24;var hrsold=Math.floor(e_hrsold);var e_minsold=(e_hrsold-hrsold)*60;var minsold=Math.floor((e_hrsold-hrsold)*60);var seconds=Math.floor((e_minsold-minsold)*60);currentTimeHtml=daysold+" 天 "+hrsold+" 时 "+minsold+" 分 "+seconds+" 秒 ";document.getElementById("bulid_time").innerHTML=currentTimeHtml}setInterval(setTime,1000);setInterval(show_date_time,1000);function secondToDate(second){if(!second){return 0}var time=new Array(0,0,0,0,0);if(second>=365*24*3600){time[0]=parseInt(second/(365*24*3600));second%=365*24*3600}if(second>=24*3600){time[1]=parseInt(second/(24*3600));second%=24*3600}if(second>=3600){time[2]=parseInt(second/3600);second%=3600}if(second>=60){time[3]=parseInt(second/60);second%=60}if(second>0){time[4]=second}return time};