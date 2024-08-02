const app = require("./server.js");
const httpsServer = require("./https.js");
// Define the port
const port = 3032;

// Start the server
httpsServer(app).listen(port, () => {
  console.log(`Server is running on https://localhost:${port}/`);
});
