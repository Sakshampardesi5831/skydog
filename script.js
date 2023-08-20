
gsap.set(".background video", { filter: "blur(8px)" });
gsap.from(".logo,.nav_btn,.hamburger",{
   y:-50,
   duration:1,
   opacity:0,
   ease:Expo.easeInOut,
   stagger:"0.5"
});

gsap.from("#heading,#commonpara",{
  y:50,
  opacity:0,
  duration:1,
  delay:1,
  ease:Expo.easeInOut,
  stagger:"0.5"
});
gsap.to('.background video',{
 filter: "blur(0px)",
 scrollTrigger:{
    trigger: ".leftsides",
    start: "top center",
    end: "top top",
    scrub: true,
  }
});
gsap.from(".leftsides",{
  x:-100,
  opacity:0,
  duration:2,
  ease:Expo.easeInOut,
  scrollTrigger:{
    trigger:".leftsides",
    start: "top center",
    end: "top top",
    scrub: true,
  }
});
gsap.from(".rightsides",{
    x:100,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
    scrollTrigger:{
      trigger:".rightsides",
      start: "top center",
      end: "top top",
      scrub: true,
    }
  });
gsap.from("#cards1",{
  y:100,
  opacity:0,
  duration:2,
  ease:Expo.easeInOut,
  scrollTrigger:{
    trigger:".third_section",
    start: "top center",
    end: "top top",
    scrub: true,
  }
});
gsap.from("#cards2",{
    y:100,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
    scrollTrigger:{
      trigger:"#cards1",
      start: "top top",
      end: "top top",
      scrub: true,
    }
});
gsap.from(".leftsides_1",{
    x:-100,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
    scrollTrigger:{
      trigger:".leftsides_1",
      start: "top center",
      end: "top top",
      scrub: true,
    }
});

gsap.from(".rightsides_1",{
    scale:0,
    opacity:0,
    duration:1,
    ease:Expo.easeInOut,
    scrollTrigger:{
      trigger:".rightsides_1",
      start: "top bottom",
      end: "top top",
      scrub: true,
    }
});

gsap.from(".fouth_section",{
    y:100,
    opacity:0,
    duration:1,
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:".fouth_section",
        start: "top center",
        end: "top top",
        scrub: true,
    }
});
 gsap.from(".heading_5,.common_para5",{
   x:-100,
   opacity:0,
   duraton:1,
   delay:1,
   ease:Expo.easeInOut,
   scrollTrigger:{
    trigger:".fifth_section",
    start: "top bottom",
    end: "top top",
    scrub: true,
  }  
 });
 gsap.from(".mysterybox_images",{
    scale:0,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut,
    scrollTrigger:{
     trigger:".common_para5",
     start: "top center",
     end: "top top",
     scrub: true,
   }  
  });
 gsap.from(".six_section",{
    y:100,
        opacity:0,
        duration:1,
        ease:Expo.easeInOut,
        scrollTrigger:{
            trigger:".six_section",
            start: "top center",
            end: "top top",
            scrub: true,
        }
 });