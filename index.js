const server = require("./src/server");
const PORT = 3000;
server.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
