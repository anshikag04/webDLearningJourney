setInterval(() => {
    let date = new Date() 
    document.getElementById("hour").innerHTML = date.getHours() 
    document.getElementById("minute").innerHTML = date.getMinutes() 
    document.getElementById("second").innerHTML = date.getSeconds()
}, 1000);