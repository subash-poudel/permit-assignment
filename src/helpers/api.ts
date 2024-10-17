import axios, { AxiosResponse } from "axios";
import { Project } from "./models";

const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdvVGhrRlJMbkVTdU5TMzdSNnZLTSJ9.eyJpc3MiOiJodHRwczovL2F1dGgucGVybWl0LmlvLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2NDc3MjkyNjczNTE4OTAxNTc3IiwiYXVkIjpbImh0dHBzOi8vYXBpLnBlcm1pdC5pby92MS8iLCJodHRwczovL3Byb2QtcGVybWl0LWlvLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MjkxNDYzMDksImV4cCI6MTcyOTIzMjcwOSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImF6cCI6IlB0N3JXSjRCWWxwRUxOSWRMZzZDaXo3S1EyQzA2OEMxIn0.AU-p5QVUvm8UZn__HfyXO5MU1QfMzjQEg2eYi7GCV5-G9C40Q7c_eRBkEt3eyVqfQNA9_rZCTrACUHZlLASIBr7qWpbOB5a1H3aubxnolMY03aaoO8L9q2mXZ-6PzD6WtbjREX1b9gSYZu_T6vGvsLw_0yHlOqx5om-6uvsQVHHly7lWoReKnzPj8Jy6RrH3-pbyYYMOXt-9GsLAzMT04rnLW_9E7DrZFEY7Y5oKtjPyVbN18fgDsPXyqJHbKn4lTUwb6Ud0Scha92nUoKU7dDv_TIj8s-ZbDeS9I3PhwceP8B5qx4q5XnDxqUnx9aIeobfGOvALNUvR_1NFKob67Q`;

const AUTHORIZATION = `Bearer ${TOKEN}`;

const axiosConfig = {
  headers: {
    accept: "*/*",
    "accept-language":
      "en-US,en;q=0.9,hi;q=0.8,mt;q=0.7,ms;q=0.6,es;q=0.5,ne;q=0.4,ru;q=0.3",
    "cache-control": "no-cache",
    "content-type": "application/json",
    pragma: "no-cache",
    priority: "u=1, i",
    "sec-ch-ua":
      '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    cookie: `permit_session=permit_session_eyJhbGciOiJSUzI1NiIsImtpZCI6InY4bXNIRkQyK0JXeC9ramZUNFpLY2lQZXJ1bFNabkZhTkhlL3g0VS96Q0k9IiwidHlwIjoiSldUIn0.eyJsb2dpbl9pZCI6IlNsbHVDRWFqSVdDRmNYQlhUV05XU3RTenZMbzM5dkJEMWhUbU91NkdtYzhMOHZXTEk4emRXN3pEdGJrV1phZ3U5Yzh5NDRYcFNiSlRaRXNWSWdSUFZzIiwidHMiOjE3MjkxNTY0OTUyMzgsImFjdGl2ZV9vcmdfaWQiOiIxODk2MDVjYzA0OTU0ZWQyOWIxZTNjMGVmNTEzYzMxYyIsInR0IjoibG9naW4ifQ.gQ1T1Bo1YMLvGwBwo1QsIhV1HEQhOUpUfWoCe7smYVM7ucQuA4ePMczeUSP-YOyjHVvsYRJcgE0jP8U4-wqlJHKrAqUv06D7CMlk7Xve4b18QWgsGyILzcIzywDGGwbOAQOVMW20ISgJtKBvYBWtgkitj1mlGZFYj8Z4Fd8ItalGpVIJxKHAwqJ1zjcdDuPuYdiqFEBvorcnK3gwhLWKTuXbmBt-CVDMao3odYHZd4gJtoVXtXIzSds-omns2oKZuwkrEV2LsjBIKh9pfOerQ1JMvPeI2rLgX6AOoo_kdvSoLZSztojyk3hzjSVS_Tqq0mM_Iwc4fEQXz4wxWS5gwf5HCOOJZDjmMdQ4In9GBBK9dskpi4X7DYoS18PJroj1mb5xzYdHPcaM5941-bT0uHlyxBe6Vymky09qQQp5Ir4cQXsdyByxdA5yN7ypK7fIrfbpezJ1YvSEdy6jAK1zZ5yemHvo0hE03kpHVgKaIsp3AfMu9so09U37do4zrAzKJy2kMvsZKU7MiOUB9K9AN5kSAxwWDBXPdtm0wpXppN2nPfMkRXjea5_IkpOVPpIOayVryA85QolXNUDFIjxKIKFP9aeQfxjELV9dRC6naSRHK2mOJgBPEEkaduz7oeOwn746r0PupjWr0BirmCQ6homDTW7uZ--PmkC5LE6RZwk; _lr_id=eyJlbWFpbCI6Imdvb2dsZS1vYXV0aDJ8MTA2NDc3MjkyNjczNTE4OTAxNTc3IiwiZnVsbE5hbWUiOiJTdWJhc2ggUG91ZGVsIn0=`,
    Authorization: AUTHORIZATION,
  },
};
const BASE_URL = "https://api.permit.io/v2";

const makePostRequest = async () => {
  const url = BASE_URL + "/projects/1f4b840f265b4d2e8a08715487f1834b/envs";

  const postData = {
    key: "cc",
    name: "cc",
  };

  try {
    const response: AxiosResponse<Project> = await axios.post<Project>(
      url,
      postData,
      axiosConfig
    );
    console.log("Response:", response);
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   console.error("Axios error:", error.message);
    // } else {
    //   console.error("Unexpected error:", error);
    // }
    console.error("Unexpected error:", error);
  }
};

makePostRequest();
