const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PASSWORD = '12345'; // The password to enter the chatbox

// Middleware for parsing incoming requests
app.use(bodyParser.json());

// Serve static files (chatbox)
app.use(express.static('public'));

// Post request to verify password
app.post('/enter', (req, res) => {
  const { password } = req.body;
  if (password === PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Socket.io - Receive and broadcast messages
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for chat messages
  socket.on('chatMessage', (binaryMessage) => {
    console.log('Received binary message:', binaryMessage);
    // Broadcast the binary message to all clients
    io.emit('chatMessage', binaryMessage);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
