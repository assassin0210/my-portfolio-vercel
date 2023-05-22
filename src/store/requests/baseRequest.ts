import axios from "axios";

export const instance = axios.create({
  baseURL: "https://about.alexsokol.ru",
});
