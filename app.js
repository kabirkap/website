var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: [""]
});

typewriter
  .pauseFor(3000)
  .typeString("Hi, I'm Kabir.")
  .pauseFor(3000)
  .deleteAll(1)
  .pauseFor(3500)
  .typeString("I'm currently a student pursuing Computer Science at the University of Waterloo (More like the degree is pursuing me).")
  .pauseFor(2000)
  .deleteAll(1)
  .pauseFor(3000)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  .typeString('<a href="">Blog</a> <br />')
  .typeString('<a href="">Resume</a> <br />')
  .typeString('<a href="">LinkedIn</a> <br />')
  .typeString('<a href="">Twitter</a> <br />')
  .typeString('<a href="">CodePen</a> <br />')
  .typeString('<a href="https://github.com/kabirkap" target="_blank" rel="noopener noreferrer">GitHub</a> <br />')
