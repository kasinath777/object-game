Webcam.set({
width: 350,
height: 350,
image_format:"png",
png_quality: 100
})

camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='pic' src='" +data_uri+"'/>"
})
}
