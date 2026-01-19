const app = require("./app"); // Import the Express application (app.js)

const PORT = 80;

const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

server.on("error", (err) => {
    console.error("Server error:", err.message);
});
