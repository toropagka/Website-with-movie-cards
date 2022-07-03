import {BASE_API_URL} from "./constants"

export async function createMovieRecord(movieRecord) {
    const response = await fetch(`${BASE_API_URL}/movie-records`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(movieRecord)
      });
      return response.json();
  }

export async function updateMovieRecord(id, movieRecord) {
const response = await fetch(`${BASE_API_URL}/movie-records/${ id }`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(movieRecord)
});
return response.json();
}

export function getAllMovieRecords() {
    return fetch(`${BASE_API_URL}/movie-records`)
  };

export function uploadPoster(file) {
    const formData = new FormData();
    formData.append("poster", file);
    
    return fetch(`${ BASE_API_URL }/poster`, {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((posterCreate) => posterCreate.path);
  };

export function deleteMovieRecord(id) {
    return fetch(`${BASE_API_URL}/movie-records/${ id }`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
  })
    .then((response) => response.json());
  
  };