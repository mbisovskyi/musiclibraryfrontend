export const URL_HOST =
  process.env.NODE_ENV === "production"
    ? "https://cors-anywhere.herokuapp.com/http://musiclibrarydatabase.cdg4nlqfn4tx.us-east-2.rds.amazonaws.com"
    : "http://127.0.0.1:8000";
