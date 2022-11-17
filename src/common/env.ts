export default {
  APP_NAME: import.meta.env.VITE_APP_NAME || "Chat App",
  SERVER_URL: import.meta.env.VITE_SERVER_URL,
  APP_URL: import.meta.env.VITE_APP_URL,
  MOBILE_WIDTH: parseInt(import.meta.env.VITE_MOBILE_WIDTH),
  VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION as string | undefined,
  DEV_MODE: import.meta.env.VITE_DEV_MODE === "true",
}