var imageContainers=document.getElementsByClassName("image-container");
for (var i = 0; i < imageContainers.length; i++) {
   var imgNo=(Math.floor(Math.random() * 9) + 1);
   imageContainers[i].style.backgroundImage=`url('./images/Empty%20Pdf-0${imgNo}.png')`;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (parseInt(max) - parseInt(min)) ) + parseInt(min);
}

function changeFont(){
    var minFont=document.getElementsByClassName("font-size-min")[0].value;
    var maxFont=document.getElementsByClassName("font-size-max")[0].value;
    
    var minLetterSpace=document.getElementsByClassName("letter-spacing-min")[0].value;
    var maxLetterSpace=document.getElementsByClassName("letter-spacing-max")[0].value;
    
    var minWordSpace=document.getElementsByClassName("word-spacing-min")[0].value;
    var maxWordSpace=document.getElementsByClassName("word-spacing-max")[0].value;
    var textBoxs=document.getElementsByClassName("input-form");
    for (var i = 0; i < textBoxs.length; i++) {
        
        var font=getRndInteger(minFont,maxFont);
        var letterSpace=getRndInteger(minLetterSpace,maxLetterSpace);
        var wordSpace=getRndInteger(minWordSpace,maxWordSpace);
        
    console.log(font+" "+minFont + " " + maxFont);
        textBoxs[i].style.fontSize=font+"px";
        textBoxs[i].style.letterSpacing=letterSpace+"px";
        textBoxs[i].style.wordSpacing=wordSpace+"px";
    }    
}
async function takeshot() { 
    document 
    .getElementById('output').innerHTML=`<a href="#">Close &times;</a>`;
    var imageContainers=document.getElementsByClassName("image-container");
    for (var i = 0; i < imageContainers.length; i++) {
        let div=imageContainers[i];
        var resolved=await html2canvas(div, {
                allowTaint: true,
                useCORS: true
            }).then( 
            function (canvas) { 
                document 
                .getElementById('output') 
                .appendChild(canvas); 
            })
        
        setTimeout((resolved)=>{},1000);
        
    }
} 




var currentSlide = 0,
    $slideContainer = $('.slide-container'),
    $slide = $('.slide'),
    slideCount = $slide.length,
    animationTime = 300;

function setSlideDimensions () {
  var windowWidth = $(window).width();
  $slideContainer.width(windowWidth * slideCount);
  $slide.width(windowWidth);
}

function generatePagination () {
  var $pagination = $('.pagination');
  for(var i = 0; i < slideCount; i ++){
    var $indicator = $('<div>').addClass('indicator'),
        $progressBarContainer = $('<div>').addClass('progress-bar-container'),
        $progressBar = $('<div>').addClass('progress-bar'),
        indicatorTagText = $slide.eq(i).attr('data-tag'),
        $tag = $('<div>').addClass('tag').text(indicatorTagText);
    $indicator.append($tag);
    $progressBarContainer.append($progressBar);
    $pagination.append($indicator).append($progressBarContainer);
  }
  $pagination.find('.indicator').eq(0).addClass('active');
}

function goToNextSlide () {
  if(currentSlide >= slideCount - 1) {currentSlide=0; $(".controls").toggle();}
  var windowWidth = $(window).width();
  currentSlide++;
  $slideContainer.animate({
    left: -(windowWidth * currentSlide)
  });
  setActiveIndicator();
  $('.progress-bar').eq(currentSlide - 1).animate({
    width: '100%'
  }, animationTime);
}

function goToPreviousSlide () {
  if(currentSlide <= 0) return; 
  var windowWidth = $(window).width();
  currentSlide--;
  $slideContainer.animate({
    left: -(windowWidth * currentSlide)
  }, animationTime);
  setActiveIndicator();
  $('.progress-bar').eq(currentSlide).animate({
    width: '0%'
  }, animationTime);
}

function postitionSlides () {
  var windowWidth = $(window).width();
  setSlideDimensions();
  $slideContainer.css({
    left: -(windowWidth * currentSlide)
  }, animationTime);
}

function setActiveIndicator () {
  var $indicator = $('.indicator');
  $indicator.removeClass('active').removeClass('complete');
  $indicator.eq(currentSlide).addClass('active');
  for(var i = 0; i < currentSlide; i++){
    $indicator.eq(i).addClass('complete');
  }
}

setSlideDimensions();
generatePagination();
$(window).resize(postitionSlides);
$('.next').on('click', goToNextSlide);
$('.previous').on('click', goToPreviousSlide);

$("#toggle-controls").click(function(){
  $(".controls").toggle();
});
/*
document.getElementById("sub").addEventListener("click", function(event){
  event.preventDefault();
    var text=document.getElementById("write").value;
    console.log(text);
    var new_text_div=document.createElement("div");
    new_text_div.style.width="500px";
    var temp="";
    for(var i=0;i<text.length;i++){
            temp+=text[i];
        if(text[i]==' '){
            var new_element=document.createElement("h1");
            new_element.innerHTML=temp;
            new_element.style.letterSpacing=getRndInteger(-2,-4)+'px';
            new_element.style.display='inline';
            new_element.style.wordSpacing=getRndInteger(10,15)+'px';
            new_element.style.marginLeft=getRndInteger(2,5)+'px';
            new_element.style.marginTop=getRndInteger(20,30)+'px';
            new_element.style.fontSize=getRndInteger(25,30)+'px';
            new_element.style.fontFamily='oswald';
            new_text_div.appendChild(new_element);
            temp="";
        }
    }
    var new_element=document.createElement("h1");
    new_element.innerHTML=temp;
    new_element.style.letterSpacing=getRndInteger(-2,-4)+'px';
    new_element.style.display='inline';
    new_element.style.wordSpacing=getRndInteger(10,15)+'px';
    new_element.style.marginLeft=getRndInteger(2,5)+'px';
    new_element.style.marginTop=getRndInteger(20,30)+'px';
    new_element.style.fontSize=getRndInteger(25,30)+'px';
    new_element.style.fontFamily='oswald';
    new_text_div.appendChild(new_element);
    temp="";
    document.getElementById("answers").appendChild(new_text_div);
    $(document).ready(function() {
        new_text_div.classList.add("draggable");
        $(".draggable").draggable().resizable();
    });
    document.getElementById("write").value="";
});
$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
         event.preventDefault(); 
        $("#myForm").fadeToggle();
    }
});
*/