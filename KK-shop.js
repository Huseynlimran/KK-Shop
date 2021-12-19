const tl = gsap.timeline({ default: { ease: "power1.out" } });


tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

const bh = gsap.timeline({ defaults: { delay: .3, duration: 1 } });

bh.from(".home", { x: "-100%", duration: 2, ease: "slow" });
bh.from(".info", { x: "+100%", duration: 2, ease: "slow" }, 0.5);
