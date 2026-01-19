const app = require("./app"); // Import the Express application (app.js)

const PORT = 80;
// assign port and start server
// Tells Node.js to listen for incoming requests on port 80
const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

// Listens for server errors
server.on("error", (err) => {
    console.error("Server error:", err.message);
});
