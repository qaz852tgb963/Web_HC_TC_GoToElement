window.onload=function(){
    var test = document.getElementById('test');

    test.onclick=()=>{
        var target = test.getAttribute("data-gte-target");
        var offset = test.getAttribute("data-gte-offset");
    }
};