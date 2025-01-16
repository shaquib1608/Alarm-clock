setInterval(()=>{
    const d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime=d.getSeconds();
    let ddate=d.getDate();
    let dday=d.getDay();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    document.getElementById("ddate").innerHTML=ddate;
    // // ddate.getDate();
    // document.getElementById("month").innerHTML=d.getMonth()+1;
    // document.getElementById("year").innerHTML=d.getFullYear();
    document.getElementById("dday").innerHTML=d.getDay();

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    
    


},1000);