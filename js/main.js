    var pro0=document.getElementById("progress0");
    var pro1=document.getElementById("progress1");
    var pro2=document.getElementById("progress2");
    var pr0=document.getElementById("pro_text-0");
    var pr1=document.getElementById("pro_text-1");
    var pr2=document.getElementById("pro_text-2");


   document.getElementById("ski").onclick=()=>{
       
           for(let i=1;i<97;i++){
            setInterval(()=>{
    if(i<91) {      
    pro0.style.width=i +'%';
    pr0.innerText=i+'%';
    }
    if(i<97){
    pr1.innerText=i+'%';
    pro1.style.width=i+'%'
    
    }
    if(i<91){
        pr2.innerText=i+'%';
        pro2.style.width=i+'%'
        }
    if(i==96)
    clearInterval();
    
           
       } ,100);
       if(i>=96)
       break;
    }
   };
   
   var  loder=document.getElementById("loder");
    var link=document.getElementsByTagName("a");
    link.onclick=function(){
        loding();
    }
    function loading(){
        setTimeout(
            ()=>{
                loder.style.width="100vw";
                loder.style.height="100vh";

            },3000
        );
        loder.style.width="0px";
        loder.style.height="0px";
    }