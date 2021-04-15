let LottoNumber = null
let RandomNumber = null
let n = null

do{
    LottoNumber = prompt("ป้อนเลขท้าย 3 ตัว : ")
    n = LottoNumber.length
    console.log(n)
    
}while(n != 3){
    document.getElementById("buy").innerHTML = LottoNumber
    //console.log(LottoNumber)
    RandomNumber = Math.floor(Math.random()*1000)
    //console.log(RandomNumber)
    document.getElementById("result").innerHTML = RandomNumber
    
    if(LottoNumber == RandomNumber){
        document.getElementById("msg").innerHTML = "ยินดีด้วยคุณถูกรางวัล !!"
    
    }else{
        document.getElementById("msg").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล"
    }
    
}




