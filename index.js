// Your code goes here
// DOMContentLoaded

document.addEventListener("DOMContentLoaded", function() {
    let txt = document.getElementById("text");
     let modify =txt.innerHTML="This is really cool!"

    // console.log( txt.innerText("hello world"));
    return modify;
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );