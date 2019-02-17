var APIKEY = 'f3b3bdfd43bd5d108dc761b82aac3bcf';
var my_json = '';
// document.getElementById("weatherSubmit").addEventListener("click", function(event) {
//   event.preventDefault();
//   const value = document.getElementById("weatherInput").value;
//   if (value === "")
//     return;
//   console.log(value);
//   const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + `&APPID=${APIKEY}`;
//   const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ",US&units=imperial" + `&APPID=${APIKEY}`;
//   console.log(url);
//   let forecast = "";
//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     }).then(function(json) {
//       // console.log(json);
//       // let forcast = "";
//       forecast += "<div class='col-md-2'>"
//       forecast += '<h2>Currently: </h2>';
//       for (let i = 0; i < json.weather.length; i++) {
//         forecast += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
//       }
//       forecast += '<h2>' + json.main.temp + " &deg;F</h2>"
//       forecast += "<p>"
//       for (let i = 0; i < json.weather.length; i++) {
//         forecast += json.weather[i].description
//         if (i !== json.weather.length - 1)
//           forecast += ", "
//       }
//       forecast += "</p></div>";
//     });
//   fetch(url2)
//     .then(function(response) {
//       return response.json();
//     }).then(function(json) {
//       my_json = json
//       let colDivider = '';
//       for (let i = 0; i < json.list.length; i++) {
//         if (colDivider != json.list[i].dt_txt.substr(0,json.list[i].dt_txt.indexOf(' '))) {
//           if (colDivider != '') forecast += "</div>"
//           forecast += "<div class='col-md-2'>"
//           forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMM Do') + "</h2>";
//           colDivider = json.list[i].dt_txt.substr(0,json.list[i].dt_txt.indexOf(' '))
//         }
//         forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
//         json.list[i].dt_txt.substr(json.list[i].dt_txt.indexOf(' ')+1);
//         forecast += `<h6>${moment(json.list[i].dt_txt).format('h:mm a')} </h6>`
//         forecast += `<p>Expect: ${titleize(json.list[i].weather[0].description)}`
//         forecast += `<br>Temperature: ${Math.round(json.list[i].main.temp)}&deg;F`;
//         forecast += `<br>Wind Speed: ${Math.round(json.list[i].wind.speed)} mph`;
//         forecast += "</p>";
//       }
//       forecast += "</div>";
//       document.getElementById("forecastResults").innerHTML = forecast;
//     })
// });

function titleize(sentence) {
    if(!sentence.split) return sentence;
    var _titleizeWord = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        },
        result = [];
    sentence.split(" ").forEach(function(w) {
        result.push(_titleizeWord(w));
    });
    return result.join(" ");
}




var zipUrl = 'http://whoismyrepresentative.com/getall_mems.php?zip='
var repByNameUrl = 'http://whoismyrepresentative.com/getall_reps_byname.php?name='
var repByStateUrl = 'http://whoismyrepresentative.com/getall_reps_bystate.php?state='
var senByNameUrl = 'http://whoismyrepresentative.com/getall_sens_byname.php?name='
var senByStateUrl = 'http://whoismyrepresentative.com/getall_sens_bystate.php?state='
var output = '&output=json'
var cors = { mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}}

var newsUrl = 'https://newsapi.org/v2/everything?q='
var articles = ''

document.getElementById("allSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("allInput").value;
  let url = `${newsUrl}${value}`;
  console.log(url);
  let newsArticles = '';
  fetch(url, {headers: {'x-api-key':'15527ca8a4d74c4a8a678c8a6643a7c0'}})
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      articles = json.articles;
      for (let i = 0; i < articles.length; i++) {
        article = json.articles[i]
        newsArticles += "<div class='card col-md-4'>"
        newsArticles += `<a href="${article.url}" target="_blank">`
        newsArticles += `<img src="${article.urlToImage}">`
        newsArticles += '</a>'
        newsArticles += `<div class="date"> ${moment(article.publishedAt).format('MMM Do, YYYY')} </div>`
        newsArticles += `<div class="title"> Title: </div>`
        newsArticles += `<div> ${article.title} </div>`
        newsArticles += `<div class="title"> By: </div>`
        newsArticles += `<div> ${article.author} </div>`
        newsArticles += `<div class="title"> Source: </div>`
        newsArticles += `<div> ${article.source.name} </div>`
        newsArticles += `<br>`
        newsArticles += `<br>`
        newsArticles += `<div> ${article.description} </div>`
        newsArticles += "</div>"
      }
      document.getElementById("allResults").innerHTML = newsArticles;
    })
});
