const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about') {
    res.end('This is the About Page.');
  } else if (req.url === '/contact') {
    res.end('Contact us at contact@example.com');
  } else {
    res.writeHead(404);
    res.end('404 Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
