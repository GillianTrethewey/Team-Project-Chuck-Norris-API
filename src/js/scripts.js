let state = {
  apiGifData: [{}],
  jokeData: {},
};

const displayOutput = () => {
  let output = document.querySelector("#output");
  output.innerHTML = "";
  for (let gifInfo of state.apiGifData.data) {
    let image = document.createElement("img");
    let gifURL = gifInfo.images.preview_gif.url;
    image.src = gifURL;
    output.appendChild(image);
    image.onclick = () => alert(`Title: ${gifInfo.title}`);
  }
};

const displayOutput1 = () => {
  let output = document.querySelector("#output");
  output.innerHTML = "";
  output.innerHTML = `<p>${state.jokeData.value}</p>`;
};

const doFetch = () => {
  let input = document.querySelector("#search1");
  const query = input.value;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=4Qrqh60DtAYy2uStSn8Tdhk9HFVHirhf&q=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      state.apiGifData = data;
      displayOutput();
    });
};

const doFetch1 = () => {
  let url = `https://api.chucknorris.io/jokes/random`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      state.jokeData = data;
      displayOutput1();
    });
};

doFetch();
doFetch1();
