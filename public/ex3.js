const form = document.getElementById("article-form");
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(event.target);
      fetch("http://localhost:3000/articles", {
        method: "POST",
        body: data,
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        form.reset();
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred. Please try again later.");
      });
    });