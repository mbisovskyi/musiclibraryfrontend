export const URL_HOST =
  process.env.NODE_ENV === "production"
    ? "https://cors-anywhere.herokuapp.com/http://mlbackend-env.eba-x4jcnfu2.us-east-1.elasticbeanstalk.com"
    : "http://127.0.0.1:8000";
