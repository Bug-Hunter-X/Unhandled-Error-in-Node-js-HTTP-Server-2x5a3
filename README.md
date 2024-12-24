# Unhandled Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js: failing to handle unexpected errors in an HTTP server.  The `bug.js` file shows a server that throws an error without proper error handling. The `bugSolution.js` file demonstrates a solution that utilizes error handling and logging.

## Bug

The server in `bug.js` generates an error, but lacks mechanisms to catch, log, or gracefully handle the error. This could lead to the server crashing without informative logs. 

## Solution

`bugSolution.js` shows how to properly handle errors using a `try...catch` block. It gracefully handles errors, providing better resilience and more informative error logs.