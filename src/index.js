// By importing p5 we make all the global p5 functions available
import 'p5'

const container = document.createElement("main");
container.setAttribute("id", "main");
document.body.prepend(container);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = './script.js';
document.body.prepend(script);
