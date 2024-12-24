const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // Simulate an error
  const errorMessage = 'Something went wrong!';
  res.end(errorMessage);

  // Forgot to handle the error
  // throw new Error('Something went wrong!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});