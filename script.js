
function speak(){
  var text=document.getElementById("input").value;

  

  var u=new SpeechSynthesisUtterance(text)

  speechSynthesis.speak(u)
}
