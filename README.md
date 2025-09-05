# Secure Binary ChatBox

A password-protected, encrypted chat application where all messages are automatically converted to binary format. This makes the chat hard to read for anyone without access, providing a cool layer of security and obfuscation.

---

##  About the Project

This project is built to demonstrate a secure and private chatroom using:

- **Password Authentication**
- **Binary Message Conversion**
- **Socket.io Real-Time Communication**

When a user enters the correct password, they can access the chat interface. All messages typed are converted into binary (ASCII → Binary) and then broadcast in real-time using WebSockets.

---

## Features

-  Password-protected entry
-  Real-time chat using Socket.io
-  Automatic conversion of text to binary
-  Client-side message obfuscation
-  Dark hacker-style UI (green-on-black theme)
-  Basic server-side authentication
-  Built with HTML, CSS, JavaScript, Node.js, and Express

---

## Project Structure

project-root

│

│── index.html

├── server.js

├── package.json

└── README.md

# Install Dependencies
npm init -y

npm install express socket.io body-parser

# How to start server

Step 1: Start the Server

by writing node server.js in your terminal


Server will run at: http://localhost:3000

Step 2: Open the Chat

Enter the password: 12345 (or whatever you set in server.js)

Start chatting! Messages will be shown in binary.

# How It Works

The client sends a password to /enter via a POST request.

If the password is valid, the chatbox is displayed.

Every message typed is converted to binary on the client-side.

Binary message is sent via Socket.io to all connected clients.

# Example

Input: Hello
Binary Output: 01001000 01100101 01101100 01101100 01101111

# Contributions

Feel free to contribute and make this better!
Pull requests and suggestions are always welcome.
