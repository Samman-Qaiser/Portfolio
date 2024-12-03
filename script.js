

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


function loader(){
    var loader1=document.querySelector(".loader-1")
    var loader2=document.querySelector(".loader-2")
    var name=document.querySelector(".name")
    var front=document.querySelector(".front")
    var I=document.querySelector(".i")
    const text = name.textContent;
    name.innerHTML = '';
    text.split('').forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        name.appendChild(span);
    });
    const text1 = front.textContent;
    front.innerHTML = '';
    text1.split(' ').forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        front.appendChild(span);
    });
    const text2 = I.textContent;
    I.innerHTML = '';
    text2.split('').forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        I.appendChild(span);
    });
    var tl=gsap.timeline()
    tl.to(".loader-wave",{
        display:"none",
        delay:4
    })
    tl.from('.name ',{
        x:500,
        duration:2,
        stagger:0.2,
        opacity:0
    })
    tl.from('.front span ',{
        y:60,
        duration:2,
       
        opacity:0
    })
    tl.to('.name span  ',{
        y:-60,
        duration:2,
     
        opacity:0
    },"animi")
    tl.to('.front span ',{
        y:-60,
        duration:2,
       
        opacity:0
    },"animi")
    tl.to('.i span ',{
        y:-60,
        duration:2,
       
        opacity:0
    },"animi")
    tl.to(loader1,{
        height:0
    },"animi2")
    tl.to(loader2,{
        delay:0.1,
        height:0
    },"animi2")


}
function menu(){
    var nav=document.querySelectorAll(".menu-right a span")
    var about=document.querySelector(".about")
    var close=document.querySelector(".close")
    var social=document.querySelectorAll(".social-icon li i")
    var social_span=document.querySelectorAll(".social-icon li span")
var menupage=document.querySelector(".menu")
var circle=document.querySelector(".menu-circle")
var menu=document.querySelector(".ri-menu-3-line")
var tag=document.querySelector(".menu-left-up")
var tl=gsap.timeline()
menu.addEventListener("click",function(){
    tl.to(menupage,{
        top:"0"
    })
  
})


close.addEventListener("click",function(){
    tl.to(".menu-right a span",{
     y:-100,
       opacity:0
    })
    tl.to(menupage,{
        top:"-150%"
    })
    tl.to(".menu-right a span",{
     
        y:0,
      
        opacity:1
    })
    tl.to(".pg1-text-hover",{
        delay:2,
        width:"100%"
    })
})

menupage.addEventListener("mousemove",function(dets){
 gsap.to(circle,{
    x:dets.x,
    y:dets.y
 })
})
social.forEach(function(icon){
    icon.addEventListener("mousemove",function(){
        gsap.to(circle,{
           scale:0.5,
            border:"1px solid black",
           backgroundColor:"white"
         })
         var span=icon.nextElementSibling
         span.style.opacity=1
    })
  
  
})
social.forEach(function(icon){
    icon.addEventListener("mouseleave",function(){
        gsap.to(circle,{
           scale:1,
            border:"1px solid black",
           backgroundColor:"black"
         })
         var span=icon.nextElementSibling
         span.style.opacity=0
    })
})
nav.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to(circle,{
           scale:1,
             backgroundColor:"black"
         })
          elem.style.fontFamily="gilroy"
    })
})
nav.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(circle,{
           scale:2,
           border:"1px solid black",
           backgroundColor:"white"
         })
        elem.style.fontFamily="maz"
    })
})
nav.forEach(function(elem){
    elem.addEventListener("click",function(){
        gsap.to(menupage,{
         top:"-150%"
         })
      
    })
})

    tag.addEventListener("mouseleave",function(){
        gsap.to(circle,{
           scale:1,
             backgroundColor:"black"
         })
          
    })


    tag.addEventListener("mouseenter",function(){
        gsap.to(circle,{
           scale:2,
           border:"1px solid black",
           backgroundColor:"white"
         })
       
    })
}

function move(){
 var tl=gsap.timeline()
 tl.to(".r1",{
    xPercent: -100, 
    duration: 5,
    ease: "none",  
    repeat: -1 ,
 
  
 },'a')
 tl.to(".r2 ",{
    x: "100%",
    duration: 5,
    ease: "none",  
    repeat: -1 
  
 },'a')
 tl.to(".r2", {
    xPercent: 0,  
    duration: 0,
    ease: "none"
});
 tl.to(".r3",{
    xPercent: -100, 
    duration: 5,
    ease: "none",  
    repeat: -1 
  
 },'a')
}
function page2(){
    var p=document.querySelectorAll(".page2 p")
    var img=document.querySelector(".page2 img")
    p.forEach(function(dets){
        const text = dets.textContent; 
    dets.innerHTML = ''; 

    text.split(' ').forEach((letter) => {
        const span = document.createElement('span'); 
        span.textContent = letter;
        dets.appendChild(span); 
    });
    })
 
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
         
            scrub:true,
            start:"top 50%",
            end:"top 0%"
        }
    })
    tl.to(".page2 .round",{
        borderRadius:"0%"
    })
    tl.from(".page2 p span",{
        y:40,opacity:0,
        duration:2,
        delay:2
    })
}
function page1(){
var page1=document.querySelector(".page1")
var left=document.querySelector(".page1-left")
var right=document.querySelector(".page1-right")
var top=document.querySelector(".c-one")
var bottom=document.querySelector(".c-two")
var left=document.querySelector(".page1-left")
var five=document.querySelector("#five")
var six=document.querySelector("#six")
var seven=document.querySelector("#seven")
var eight=document.querySelector("#eight")
page1.addEventListener("mousemove",function(dets){
    gsap.to(".page1-circle",{
        left:dets.x,
        top:dets.y
    })
})
left.addEventListener("mouseenter",function(){
 
top.style.height="100vh"
document.querySelector(".page1-left button").classList.add("shrink");
document.querySelector(".page1-left button").style.color="white";
document.querySelector("#one").style.opacity = "1"

document.querySelector("#two").style.opacity = "0.7"


document.querySelector("#three").style.opacity = "0.5"


document.querySelector("#four").style.opacity = "0.3"

})
left.addEventListener("mouseleave",function(){
    document.querySelector(".page1-left button").classList.remove("shrink");
    top.style.height="0vh" 
    document.querySelector(".page1-left button").style.color="black";
    document.querySelector("#one").style.opacity = "0"
    document.querySelector("#two").style.opacity = 0
    document.querySelector("#four").style.opacity = "0"
    document.querySelector("#three").style.opacity = "0"
})
right.addEventListener("mouseenter",function(){
    top.style.height="100vh"
    document.querySelector(".page1-right button").classList.add("shrink");
    document.querySelector(".page1-right button").style.color="white";
    document.querySelector("#five").style.opacity = "1"
    
    document.querySelector("#six").style.opacity = "1"
    
    
    document.querySelector("#seven").style.opacity = "1"
    
    
    document.querySelector("#eight").style.opacity = "1"
    
    })
    right.addEventListener("mouseleave",function(){
        top.style.height="0vh" 
        document.querySelector(".page1-right button").style.color="black";
        document.querySelector(".page1-right button").classList.remove("shrink");
        document.querySelector("#five").style.opacity = "0"
        document.querySelector("#six").style.opacity = 0
        document.querySelector("#seven").style.opacity = "0"
        document.querySelector("#eight").style.opacity = "0"
    })
    var images=document.querySelectorAll(".img-all")
    document.addEventListener("mousemove",function(dets){
    images.forEach(function(img){
        const position=img.getAttribute("val")
        var x=(window.innerWidth-dets.clientX*position)/50
        var y=(window.innerHeight-dets.clientY*position)/50
        img.style.transform = `translateX(${x}px) translateY(${y}px)`;
       
    })
})



}
function page3(){
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scrub:true,
        start:"50% 50%",
        end: "150% 50%",
       
        pin:true
}
   
})
tl.to('.our-services',{
    height:"70vh"
},"animi")
tl.to('.services-offer-outer',{
    height:"70vh"
},"animi")
tl.to('.services',{
   
        left:"0%",
        transform: "translate(-20%, -90%)"
},"animi")
tl.to('.offer',{

        right:"0%",
},"animi")
tl.to(".services-wrapper",{
    height:"200%"
})
tl.to(".ser-1",{
   marginTop:"-230%"
})
}
function page4(){
    var tl4=gsap.timeline({
        scrollTrigger:{
            trigger:".main .page4",
            start:"50% 50%",
            end:"300% 50%",
            
            pin:true,
            scrub:true,
          
        
        }
    })
    tl4.to(".page4-wrapper",{
        scale:0.8,
        rotate:"-15deg",
       
    },"animi1")
    tl4.to(".cl1",{
    transform:"translateX(-70%) translateY(-90%)"
    },"animi1")
    tl4.to(".cl2",{
     transform:"translateX(-70%) translateY(-70%)"
    },"animi1")
    tl4.to(".cl3",{
    transform:"translateX(-70%) translateY(-60%)"
    },"animi1")
    tl4.to(".cl4",{
     transform:"translateX(-70%) translateY(-50%)"
    },"animi1")
    tl4.to(".cl5",{
        transform:"translateX(-70%) translateY(-100%)"
    },"animi1")
    tl4.to(".pg4-overlay",{
     
       backgroundColor: "rgba(0, 0, 0, 0.479)"
    },"animi1")
    tl4.from(".pg4-overlay button",{
       y:400
    })
}function page5(){
var page5=document.querySelector(".page5")
var image=document.querySelector(".mov-img")
var rows=document.querySelectorAll(".pg5-rows")
rows.forEach(function(div) {
   div.addEventListener("mouseenter", function(dets) {
      var img = div.getAttribute("img-src");
      image.style.backgroundImage = `url(${img})`;
         console.log(img)
    
    });
});

page5.addEventListener("mouseleave",function(){
    gsap.to(image,{
     scale:0
    })
  })
page5.addEventListener("mousemove",function(dets){
  gsap.to(image,{
    x:dets.x,
    y:dets.y
  })
})
page5.addEventListener("mouseenter",function(){
    gsap.to(image,{
     scale:1
    })
  })
 

}
function page6(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".page6",
           
            start:"40% 50%",
            end:"100% 50%",
            scrub:true,
            pin:true
        }
    })
    tl.to(".text-over",{
        width:"100%",
     
    })
    tl.to(".pg6-text",{
       top:"-17%"
    },'a')
    tl.to(".pg6-c-1",{
        top: "20%",
    },'a')
    .to(".pg6-c-2",{
        top: "130%"
    },"a")
    tl.to(".pg6-c-1",{
        width:"65vw",
        height:"65vh"
      },"b")
    .to(".pg6-c-2",{
        top: "20%"
    },"b")
    .to(".pg6-c-1",{
        top: "15%"
    },"b")
    .to(".pg6-c-3",{
        top: "130%"
    },"b")
    tl.to(".pg6-c-1",{
      width:"60vw",
      height:"60vh"
    },"c")
    tl.to(".pg6-c-3",{
      top:"34%"
      },"c")
      tl.to(".pg6-c-2",{
        width:"65vw",
        height:"65vh"
      },"c")
    
   
}
function resume(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".page7",
       
            start:"50% 50%",
            end:"100% 50%",
            scrub:true,
            pin:true
        }
    })
    tl.to(".resume-two",{
        rotateX: "0deg",
    })
    tl.to(".resume-three",{
        rotateX: "0deg",
    })
    tl.to(".resume-four",{
        rotateX: "0deg",
    })
    tl.to(".resume-con",{
       scale:0.5
    },"a")
    tl.to(".rs",{
        filter: "grayscale(1)",
     },"a")
     tl.to(".pg4-overlay",{
       backgroundColor: "rgba(0, 0, 0, 0.479)"
     },"a")
     tl.from(".pg4-overlay button",{
        opacity:0,
        y:500
     },"a")
     tl.to(".pg4-overlay button",{
     
        y:100
})
}
resume()
function footer(){
    var circle=document.querySelector(".f-circle")
    var footer=document.querySelector("footer")
    footer.addEventListener("mousemove",function(dets){
        var footerRect = footer.getBoundingClientRect();
        gsap.to(circle,{
            x: dets.clientX - footerRect.left,
            y: dets.clientY - footerRect.top
        })
    })
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:"footer",
       
            start:"430% 50%",
            end:"440% 50%",
            scrub:true,
         
        }
    })
    tl.to(".pp",{
        borderRadius:0
    })
}
footer()

page6()
page5()
page4()
page3()
page1()
menu()
page2()
loader()
move()