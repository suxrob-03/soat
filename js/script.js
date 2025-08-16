let h1 = document.getElementById("h1");

Update();

setInterval(Update, 1000);

function Update() {
  let catchDate = new Date();

  h1.innerHTML= formatTime(catchDate)

  


 

  function formatTime(catchDate) {
    let hours = catchDate.getHours();
    let minutes = catchDate.getMinutes();
    let seconds = catchDate.getSeconds();

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours} : ${minutes} : ${seconds} <span >${hours >= 12 ?  "pm" : "am"} </span>`

    

  }
  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}

// return `${hours} : ${minutes} : ${seconds} . ${hours >= 12 ?  "pm" : "am"}`;
