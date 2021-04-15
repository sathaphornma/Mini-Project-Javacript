// var Name = "saifah";

// console.log("hello " + Name);
// //alert("Hello World")

// var FirstName = "SATHAPHORN";
// var LastName = "MANEEBOON";
// var FullName = FirstName + " " + LastName;
// console.log("Type is : " + typeof FullName);
// console.log("My name is : " + FullName);
// //alert("My name is : " + FirstName + " " + LastName)

// var LuckyNumber = 8;
// console.log("Type is : " + typeof LuckyNumber); // ตรวจสอบชนิดข้อมูล
// console.log("Luckynumber : " + LuckyNumber);

// var OrderOfOperations = 4 + ((2 * 2) / 2) * 2 + 4 + 1 - 5 + 19 + 91;
// console.log("Answer : " + OrderOfOperations);

// var x = 118

// {
//     var x = 20
//     let y = 15
//     alert(y)
// }

// EP.10
// let FullName  = prompt("Please enter you fullname.") // สิ่งที่รับมาเป็นชนิดข้อมูลแบบ String
// console.log(typeof(FullName))
// console.log("Fullname is : " + FullName)

// EP.11
let LottoNumber = prompt("ป้อนเลขท้าย 3 ตัว : ")
document.getElementById("buy").innerHTML = LottoNumber

//console.log(LottoNumber)
let RandomNumber = Math.floor(Math.random()*1000)
//console.log(RandomNumber)
document.getElementById("result").innerHTML = RandomNumber

if(LottoNumber == RandomNumber){
    document.getElementById("msg").innerHTML = "ยินดีด้วยคุณถูกรางวัล !!"

}else{
    document.getElementById("msg").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล"
}



