export const URL_HOST =
  process.env.NODE_ENV === "production"
    ? "https://cors-anywhere.herokuapp.com/http://musiclibrarybackend-env.eba-tpnswx43.us-east-2.elasticbeanstalk.com"
    : "http://127.0.0.1:8000";
