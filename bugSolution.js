const http = require('http');

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });

    // Simulate an error
    const errorMessage = 'Something went wrong!';
    //Throw the error to be caught in the catch block
    throw new Error(errorMessage);
  } catch (error) {
    console.error('Error occurred:', error);
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});