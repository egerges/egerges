const express = require("express");
const path = require("path");
const next = require("next");

// Environment variables
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Create Express server
app.prepare().then(() => {
  const server = express();

  // Serve static files
  server.use(express.static(path.join(__dirname, "public")));

  // Custom route handler (optional, based on your Next.js setup)
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start server
  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
