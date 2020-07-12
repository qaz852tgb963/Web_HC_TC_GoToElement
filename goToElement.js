window.onload=function(){
    //var test = document.getElementById('test');

    var AllElements=document.getElementsByTagName("*");

    for (let index = 0; index < AllElements.length; index++) {
        const e = AllElements[index];
        e.onclick=()=>{
            var target = e.getAttribute("data-gte-target");
            var offset = e.getAttribute("data-gte-offset");
            if(target){
                var ThisElement=document.getElementById(target);
        
                window.scrollTo({
                    top:ThisElement.offsetTop-offset,
                    behavior:"smooth"
                });
            }
        }        
    } 
};