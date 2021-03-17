fetch("nowPlaying.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    appendData(data);
  })
  .catch(function(err) {
    console.log(err);
  });

function appendData(data) {
  const mainContainer = document.getElementById("movieData");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h4");

    title.innerText = data[i].Movie.Title;
    img.src = data[i].Movie.Media[0].Url;

    mainContainer.appendChild(div);
    div.appendChild(img);
    div.appendChild(title);
  }
}

$(document).ready(function() {
  $(function() {
    $("div").show(); // select the first ten
    $("#load").click(function(e) {
      $("div:hidden").show();
    });
  });
});
