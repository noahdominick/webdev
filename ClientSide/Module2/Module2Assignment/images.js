function showImage(image){
    var largeImg = document.getElementById('images');
    largeImg.src=image;

    var text=document.getElementById('text')
    text.src=t

    if (t.includes('circle'))
    {
        document.getElementById('text').innerHTML="picture of a circle";
    }  
    if (t.includes('long'))
    {
        document.getElementById('text').innerHTML="long building";
    }  
    if (t.includes('tall'))
    {
        document.getElementById('text').innerHTML="tall building";
    }  
}