import gsap from 'gsap';

export const rotateText = () => {
  gsap.to(".rotating-text", {
    rotation: 360,
    transformOrigin: "center center",
    duration: 10,
    repeat: -1,
    ease: "linear"
  });
};

export const toolsDiv = ()=>{
  gsap.to('.right-child-div',{
    translateX:-10,
    duration:5,
    delay:2
  })
} 