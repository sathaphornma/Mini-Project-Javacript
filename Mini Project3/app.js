let score = prompt("กรุณากรอกคะแนนของคุณ");

if (score >= 80 && score <= 100) {
  document.getElementById("result").innerHTML = "คุณได้เกรด A";
} else if (score >= 70 && score < 80) {
  document.getElementById("result").innerHTML = "คุณได้เกรด B";
} else if (score >= 60 && score < 70) {
  document.getElementById("result").innerHTML = "คุณได้เกรด C";
} else if (score >= 50 && score < 60) {
  document.getElementById("result").innerHTML = "คุณได้เกรด D";
} else if (score >= 0 && score < 50 && score != null) {
  document.getElementById("result").innerHTML = "คุณได้เกรด F";
} else {
  document.getElementById("result").innerHTML = "กรุณาป้อนข้อมูลที่ถูกต้อง";
}

console.log(score)