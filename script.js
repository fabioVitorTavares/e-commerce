const buttonSearch = document.querySelector("#buttonSearch");

const url = "http://127.0.0.1:4002";

console.log("qui");

const update = {
    title: 'A blog post by Kingsley',
    body: 'Brilliant post on fetch API',
    userId: 1,
    };
    
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    };

fetch('https://127.0.0.1:4002/', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
    
      }).catch(e => {
      console.log(e);
      });
      