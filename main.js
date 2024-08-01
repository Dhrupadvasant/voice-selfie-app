var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    

}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML=content;
if (content=="take my selfie")
{
    speak();
}
else{
next();
}
    
}
function next()
{
    var synth=window.speechSynthesis;
speak_data1="did not understand please try again";
var utterthis1=new SpeechSynthesisUtterance(speak_data1);
synth.speak(utterthis1);
}
function speak()
{
var synth=window.speechSynthesis;
speak_data="Taking Your Selfie in five seconds";
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
},5000)
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="si" src="'+data_uri+'">';
})
}
function save()
    {
        link=document.getElementById("link");
        image=document.getElementById("si").src;
        link.href = image;
        link.click();
    }
