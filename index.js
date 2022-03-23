// // var a = 30;
// // // if(a<30){
// // //     console.log(a < 30 ? "Adult" : "Old");
// // // }
// // // else{
// // //     console.log("Old");
// // // }



// // if( a<15 ){
// //     console.log( "Young" );
// // }
// // else if (a>15 && a <30 ){
// //     console.log( "Adult" );
// // }
// // else{
// //     console.log( "Old" );
// // }


// var Day = "monday"

// switch (Day) {
//     case Day==monday:
//         console.log("0");
//         break;
//     case Day==Tuesday:
//         console.log("1");
//         break;
//     case Day==Wensday:
//         console.log("2");
//         break;
//     case Day==thursday:
//         console.log("3");
//         break;
//     case Day == friday:
//         console.log("4");
//         break;
//     case Day==saturday:
//         console.log("5");
//         break;
//     case Day==sunday:
//         console.log("6");
//         break;
//     default:
//         console.log("invalid");
// }


let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}