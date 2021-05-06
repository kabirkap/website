var app = document.getElementById('app2');

var typewriter = new Typewriter(app2, {
  loop: false,
  delay: 40,
  autoStart: true,
  cursor: '█',
  strings: [""]
});

typewriter
  .changeDeleteSpeed(1)
  .typeString("cat firstIntro.txt")
  .pauseFor(5500)
  .deleteAll(1)
  .pauseFor(1000)
  .typeString("cat secondIntro.txt")
  .pauseFor(9500)
  .deleteAll(1)
  .pauseFor(2000)
  .typeString("cat links.txt")
