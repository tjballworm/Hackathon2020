const searchbox = document.getElementById('search-box');


searchbox.addEventListener("keydown", () => {
    data ={expr : searchbox.value};
    console.log(data);

    fetch('./find', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)})
  .then((response) => response.json()).then(data => console.log(data));
})
console.log(searchbox)