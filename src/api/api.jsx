import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    'x-api-key': 'live_FzlCTZnHK2E3BRbLkRF0BfiqV4wGu7g3mqEhlkr3PZl55LXXrQZdkIkXF8gtadfK'
  }
})

export default api