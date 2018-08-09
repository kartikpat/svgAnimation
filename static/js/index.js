var dottedPath = document.querySelector('#dottedPath')
var length = dottedPath.getTotalLength();

var solidPath = document.querySelector('#solidPath')
solidPath.style.strokeDasharray = length;
solidPath.style.strokeDashoffset = length - 50;

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var draw = length * scrollPercentage;
    var circleStartingPoint = solidPath.getPointAtLength(draw + 50);
    var circlesToHighlight = Math.floor(((circleStartingPoint.y + 35) - 225)/500);
    var circles;
    if(circlesToHighlight + 1) {
        circles = $(".circle").slice(0, circlesToHighlight+1);
        $.each(circles,function(index, aCircle){
            aCircle.style.fill = "#b8d9ff"
        })
    }
    circles = $(".circle").slice(circlesToHighlight+1, $(".circle").length)
    $.each(circles,function(index, aCircle){
        aCircle.style.fill = "#fff"
    })
    solidPath.style.strokeDashoffset = (length - (draw + 50));
}
