const hourEl=document.getElementById("hour");
const minuteEl =document.getElementById("minutes");
const secondEl =document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");


function updateClock(){
  //  let to =new Date();
 //  let h= to.getHours();
   // let m=to.getMinutes();
  //  let s=to.getSeconds();
  let to =new Date();
   let h= to.getHours();
    let m=to.getMinutes();
    let s=to.getSeconds();
   

    
    let ampm="PM"
    if(h>12){
        h=h- 12
        ampm="PM"
    }
    h= h<10? "0"+h :h;
    m= m<10? "0"+m :m;

    s= s<10? "0"+s :s;

    hourEl.innerText =h;
    minuteEl.innerHTML=m;
    secondEl.innerText=s;
    ampmEl,(innerText=ampm);
    setTimeout(()=>{updateClock()

    },1000)
  

}
updateClock();