let age = prompt("กรุณากรอกอายุของคุณ")

if(age > 13){
    document.getElementById("text-headder").innerHTML = "ยินดีต้อนรับเข้าสู่เว็บไซต์"
    document.getElementById("content").innerHTML = '<center><iframe width="560" height="315" src="https://www.youtube.com/embed/PGZ7QiKdumo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>'

}else{
    document   .getElementById("text-headder").innerHTML = "เว็บไซต์นี้มีเนื้อหาที่รุนแรง เหมาะสำหรับผู้ที่มีอายุมากกว่า 13 ปี"
}