import { config } from "dotenv"
import envar from 'env-var';

const { get } = envar;

config()

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}
