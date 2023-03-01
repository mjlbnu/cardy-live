const io = require("socket.io")(8800, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let activeUsers = [];
let gamerStatements = {};

io.on("connection", (socket) => {
  // add new user
  socket.on("new-user-add", (newUserId) => {
    // if user is not added previously
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({ userId: newUserId, sockeId: socket.id });
      console.log("New user connected", activeUsers);
    }
    // send all active users
    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {
    // remove user from active users
    activeUsers = activeUsers.filter((user) => user.sockeId !== socket.id);
    console.log("User disconected", activeUsers);
    // send all active users
    io.emit("get-users", activeUsers);
  });

  socket.on("send-gamerStatements", ({ data }) => {
    gamerStatements = data;
    io.emit("get-gamerStatements", gamerStatements);
  });

  socket.on("send-setLie", () => {
    io.emit("get-setLie", null);
  });
});
