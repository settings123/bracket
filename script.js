window.setInterval(function () {
  fillOptions();
}, 1000);

particlesJS(
  "particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },


    "color":
      { "value": "#f97611" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#af0200" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 5, "opacity_min": 0.1, "sync": false } }, "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 15, "direction": "top-left", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
  }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
}); var count_particles, stats, update; stats = new Stats(); stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

(function () {
  function f() { TweenMax.staggerTo(".spark", 0, { cycle: { x: function (a) { return a % 3 ? d[1] : d[0]; } }, y: 0, alpha: 1, scale: 1 }, 0); } var g = document.querySelector(".flameContainer"), k = document.querySelector(".sparksContainer"), l = document.querySelector(".flameSVG"), d = [10, -10]; CustomEase.create("return", "M0,0 C0,0 0.162,1 0.4,1 0.918,1 1,0 1,0"); CustomEase.create("sparkFlicker", "M0,0 C0.126,0.382 0.216,0.572 0.414,0.482 0.821,0.296 0.984,0.94 1,1"); CustomEase.create("flameJump", "M0,0 C0.126,0.382 0.256,0.248 0.406,0.23 0.85,0.176 0.984,0.94 1,1");
  TweenMax.set("svg", { visibility: "visible" }); TweenMax.set(".whole", { scale: 1.52, transformOrigin: "50% -500%" }); var e = new TimelineMax({}), h = new TimelineMax({ repeat: 0 }); (function () {
    for (var a = 0; 50 > a; a++) {
      var c = document.querySelector(".flame").cloneNode(!0); g.appendChild(c); TweenMax.set(c, { x: a % 2 ? d[0] : d[1], transformOrigin: "50% 50%", rotation: -45 }); var b = new TimelineMax({ repeat: -1, repeatDelay: 14.66 }); b.to(c, 2, { x: a % 2 ? "-=22" : "+=22", scale: 10, ease: "return" }).to(c, 2, { y: -145, ease: "flameJump" }, "-=2").to(c, 2, {
        fill: "#F73B01",
        ease: Sine.easeOut
      }, "-=2").to(c, 2, { alpha: 0, ease: Expo.easeIn }, "-=2"); h.add(b, .34 * a); c = document.querySelector(".spark").cloneNode(!0); k.appendChild(c); TweenMax.set(c, { x: a % 3 ? d[1] : d[0], transformOrigin: "50% 50%" });
    }
  })(); var b = new TimelineMax({ repeat: -1 }); b.staggerTo(".spark", 2, { cycle: { x: ["-=25", "+=15", 0, "+=23", "-=5", "+=71", "-=54"], scale: function () { return 23 * Math.random(); } }, ease: "return" }, .72).staggerTo(".spark", 3, {
    cycle: {
      ease: [SlowMo.ease.config(.2, .2), "sparkFlicker", SlowMo.ease.config(.42, .52)], y: function () {
        return -(200 *
          Math.random()) - 200;
      }
    }
  }, .72, "-=" + b.duration()).staggerTo(".spark", 3, { cycle: { fill: ["#F36B01", "#FDBB01", "#ededed"] }, ease: Sine.easeIn }, .72, "-=" + b.duration()).staggerTo(".spark", 3, { alpha: 0, ease: Expo.easeIn }, .72, "-=" + b.duration()); b.timeScale(1); e.add(h, 0); e.add(b, 0); e.timeScale(1.2).seek(97); l.onclick = function () {
    f(); var a = new TimelineMax({ onComplete: function () { f(); b.play(99); } }).timeScale(2); a.staggerTo(".logs path", .7, { cycle: { rotation: [3, -3], transformOrigin: ["2% 100%", "98% 100%"] }, ease: "return" }, .02).to(g,
      .7, { scaleY: .8, transformOrigin: "50% 100%", ease: "return" }, "-=" + a.duration()).staggerTo(".spark", 3, { cycle: { x: ["-=25", "+=15", 0, "+=23", "-=5", "+=71", "-=54"], scale: function () { return 30 * Math.random(); } }, ease: "return" }, .07, "-=1.2").staggerTo(".spark", 3, { cycle: { ease: [SlowMo.ease.config(.2, .2), "sparkFlicker", SlowMo.ease.config(.42, .52)], y: function () { return -(200 * Math.random()) - 200; } } }, .07, "-=" + a.duration()).staggerTo(".spark", 3, { cycle: { fill: ["#F36B01", "#FDBB01"] }, ease: Sine.easeIn }, .07, "-=" + a.duration()).staggerTo(".spark",
        3, { alpha: 0, ease: Expo.easeIn }, .07, "-=" + a.duration());
  };
})();
TweenMax.globalTimeScale(0.5);


// MARK: SHIT CODE
function fillOptions() {

  // East Games
  var baltTenWinner = document.getElementById("baltTen").value
  var pittsClevWinner = document.getElementById("pittsClev").value
  var buffColtWinner = document.getElementById("buffCrap").value

  if (buffColtWinner == "7. Colts") {
    document.getElementById("div").options[1].text = buffColtWinner;
    document.getElementById("div2").options[0].text = baltTenWinner;
  }

  if (buffColtWinner == "2. Bills") {
    document.getElementById("div2").options[0].text = "2. Bills";
  }

  if (pittsClevWinner !== "6. Brown diarrhea" && buffColtWinner !== "7. Colts") {
    document.getElementById("div").options[1].text = baltTenWinner;
  }

  if (pittsClevWinner == "6. Browns" && buffColtWinner !== "7. Colts") {
    document.getElementById("div").options[1].text = "6. Browns";
    document.getElementById("div2").options[1].text = baltTenWinner;
  }

  if (pittsClevWinner == "3. Steelers") {
    document.getElementById("div2").options[1].text = "3. Steelers";
  }

  if (pittsClevWinner !== "3. Steelers" && buffColtWinner == "7. Colts") {
    document.getElementById("div2").options[1].text = "6. Brown diarrhea";
  }


  // West Games
  var tampaWashWinner = document.getElementById("tampaWash").value
  var seaLosWinner = document.getElementById("seaLos").value
  var nOChiWinner = document.getElementById("nOChi").value

  if (nOChiWinner == "7. Bears") {
    document.getElementById("div01").options[1].text = nOChiWinner;
    document.getElementById("div02").options[0].text = tampaWashWinner;
  }

  if (nOChiWinner == "2. Saints") {
    document.getElementById("div02").options[0].text = "2. Saints";
  }

  if (seaLosWinner !== "6. Rams" && nOChiWinner !== "7. Bears") {
    document.getElementById("div01").options[1].text = tampaWashWinner;
  }

  if (seaLosWinner == "6. Rams" && nOChiWinner !== "7. Bears") {
    document.getElementById("div01").options[1].text = "6. Rams";
    document.getElementById("div02").options[1].text = tampaWashWinner;
  }

  if (seaLosWinner == "3. Seahawks") {
    document.getElementById("div02").options[1].text = "3. Seahawks";
  }

  if (seaLosWinner !== "3. Seahawks" && nOChiWinner == "7. Bears") {
    document.getElementById("div02").options[1].text = "6. Rams";
  }

  // Conf games
  var div1Winner = document.getElementById("div").value
  var div2Winner = document.getElementById("div2").value
  var div1WinnerEast = document.getElementById("div01").value
  var div2WinnerEast = document.getElementById("div02").value
  document.getElementById("conf1").options[0].text = div1Winner;
  document.getElementById("conf1").options[1].text = div2Winner;
  document.getElementById("conf2").options[0].text = div1WinnerEast;
  document.getElementById("conf2").options[1].text = div2WinnerEast;

  //finals
  var conf1Winner = document.getElementById("conf1").value
  var conf2Winner = document.getElementById("conf2").value
  document.getElementById("final").options[0].text = conf1Winner;
  document.getElementById("final").options[1].text = conf2Winner;
}

function grabValues() {

  //First Round
  var tampaWashWinner = document.getElementById("tampaWash").value;
  var seaLosWinner = document.getElementById("seaLos").value;
  var nOChiWinner = document.getElementById("nOChi").value;
  var baltTenWinner = document.getElementById("baltTen").value;
  var pittsClevWinner = document.getElementById("pittsClev").value;
  var buffColtWinner = document.getElementById("buffCrap").value;

  //Second Round
  var div1Winner = document.getElementById("div").value
  var div2Winner = document.getElementById("div2").value
  var div1WinnerEast = document.getElementById("div01").value
  var div2WinnerEast = document.getElementById("div02").value

  //Conference Round
  var conf1Winner = document.getElementById("conf1").value
  var conf2Winner = document.getElementById("conf2").value

  //Finals
  var final = document.getElementById("final").value

  //Username
  var username = document.getElementById("username").value


  var picks = (`
  Name = ${username}

  -------------First Round----------------

  Pittsburgh vs Cleveland = ${pittsClevWinner}
  Batltimore vs. Tennesee = ${baltTenWinner}
  Buffalo vs. Indy = ${buffColtWinner}

  Tampa vs Washington = ${tampaWashWinner}
  Seattle vs Los Angelas = ${seaLosWinner}
  New Orleans vs. Chicago = ${nOChiWinner}

  
  -------------Second Round----------------
  East Winner = ${div1WinnerEast}
  East Winner 2 = ${div2WinnerEast}
  West Winner = ${div1Winner}
  West Winner 2 = ${div2Winner}
  

  -------------Conf. Round----------------
  East Winner = ${conf1Winner}
  West Winner = ${conf2Winner}


  -------------Superbowl Winner----------------
  Superbowl Winner = ${final}
`);

  //send email
  var link = "mailto:"
    + "&subject=" + encodeURIComponent(username + "'s picks | NFL Bracket Challenge")
    + "&body=" + encodeURIComponent(picks)
    ;

  window.location.href = link;
}
