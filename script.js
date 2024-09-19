// var theStatus = document.querySelector("h5");

// var /*addFriend*/btn = document.querySelector("#add");

// // var removeFriend = document.querySelector("#remove");

// var check = 0;

// /*addFriend*/btn.addEventListener("click",function(){
//     if(check == 0){
//         theStatus.innerHTML = "FRIENDS😊"
//         theStatus.style.color = "green"
//         /*addFriend*/btn.innerHTML = "Remove"
//         /*addFriend*/btn.style.backgroundColor = "rgb(162, 162, 162)"
//         /*addFriend*/btn.style.color = "black"
//         check = 1
//     }else{
//         theStatus.innerHTML = "STRANGER🤔"
//         theStatus.style.color = "red"
//         /*addFriend*/btn.innerHTML = "Add Friend"
//         /*addFriend*/btn.style.backgroundColor = "#225AA7"
//         /*addFriend*/btn.style.color = "hsl(0, 0%, 100%)"
//         check = 0
//     }
    
// })


// // removeFriend.addEventListener("click",function(){
// //     theStatus.innerHTML = "STRANGER🤔"
// //     theStatus.style.color = "red"
// // })













// MY revision one ,

var addRm = document.getElementById("add");
var sta = document.querySelector("h5");
var val = 0;
addRm.addEventListener("click",function(){
    if(val == 0){
        sta.innerHTML = "FRIENDS😊"
        sta.style.color = "green"
        addRm.innerHTML = "Friends"
        addRm.style.backgroundColor = "gray"
        val = 1;
    }else{
        sta.innerHTML = "STRANGER🤔"
        sta.style.color = "red"
        addRm.innerHTML = "Add Friend"
        addRm.style.backgroundColor = "#225AA7"
        val = 0;
    }
})