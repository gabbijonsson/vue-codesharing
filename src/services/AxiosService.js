import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://forverkliga.se/JavaScript/api/api-snippets.php`,
  withCredentials: false
})

export default {
  addSnippet(title, content) {
    return apiClient.post(`?add&title=${title}&content=${content}`)
  },
  removeSnippet(id) {
    return apiClient.post(`?delete&id=${id}`)
  },
  latestSnippets() {
    return apiClient.get(`?latest`)
  },
  bestSnippets() {
    return apiClient.get(`?best`)
  }
}
