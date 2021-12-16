import * as dotenv from "dotenv";
dotenv.config();

import Server from "./Server";
const PORT = process.env.PORT;

Server.listen(PORT, () => console.log(`Running on ${PORT}`));
