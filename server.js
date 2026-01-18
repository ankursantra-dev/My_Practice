const app = require("./app");

const PORT = 80;

const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

server.on("error", (err) => {
    console.error("Server error:", err.message);
});
