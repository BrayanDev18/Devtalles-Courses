
import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

const main = () => {
  startServer(envs)
}

(() => {
  main()
})()