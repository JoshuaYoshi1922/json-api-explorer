const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const fetchButton = document.getElementById("fetchButton");
const formError = document.getElementById("formError");
const formSuccess = document.getElementById("formSuccess");
const error = document.getElementById("error");
const postList = document.getElementById("postList");
const submit = document.getElementById("submit");


// fetching post
fetchButton.addEventListener("click", function () {       
  console.log("click");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        if (response.ok) {
            console.log("YIPPY!")
        } else {
            console.log("darn...")
        }
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      json.forEach((post) => {
        postList.innerHTML += `<ul>
                <li>User: ${post.userId}</li>
                <li>ID: ${post.id}</li>
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
            </ul>`;
      });
    })
    .then(data => {
        alert("Loading....");
        console.log("Server response", data);
    })
    .catch(function (error) {
      console.error("Error fetching the data:", error);
    });
});


postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const body = bodyInput.value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // creates a new post requests, one of many http request
    headers: {
      "Content-type": "application/json", //tells fetch you are passing JSON
    },
    body: JSON.stringify({ //the data being passed, needs to be changed to JSON
      title: title,
      body: body,
    }),
  })
    .then(function (response) {
        if (response.ok){
            console.log("YAY IT WORKS");
        } else {
            console.log("Sad Face")
        }
      return response.json();
    })
    .then(function post() {
      formSuccess.textContent = `Title: ${title} Body: ${body}`;
      console.log(formSuccess.textContent);
    })
    .then(data => {
        alert("THIS WORKED!");
        console.log("Server response", data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
