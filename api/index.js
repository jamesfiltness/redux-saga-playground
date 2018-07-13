export function apiCall() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      return response.json();
    })
}