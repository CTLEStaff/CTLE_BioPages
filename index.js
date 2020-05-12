'strict'
//for APIs
const apiKey = /*your API key here*/ c6176bc0f63c4c9f95597b26c6624570;

const searchURL = 'https://newsapi.org/v2/everything';

function displayResults(responseJson, maxResults) {
    // if there are previous results, remove them
    console.log(responseJson);
    $('#results-list').empty();
    // iterate through the articles array, stopping at the max number of results
    for (let i = 0; i < responseJson.articles.length && i<maxResults ; i++){
      // for each video object in the articles
      //array, add a list item to the results 
      //list with the article title, source, author,
      //description, and image
      $('#results-list').append(
        `<li><h3><a href="${responseJson.articles[i].url}">${responseJson.articles[i].title}</a></h3>
        <p>${responseJson.articles[i].source.name}</p>
        <p>By ${responseJson.articles[i].author}</p>
        <p>${responseJson.articles[i].description}</p>
        <img src='${responseJson.articles[i].urlToImage}'>
        </li>`
      )};
    //display the results section  
    $('#results').removeClass('hidden');
  };

function formatQueryParams(params) {
    //create an array of the keys in the "params" object
    const queryItems = Object.keys(params)
      //for each of the keys in that array, create a string with the key and the key's value in the "params" object
      .map(key => `${key}=${params[key]}`)
    //return a string of the keys and values, separated by "&"
    return queryItems.join('&');
  }

function getNews(query, maxResults=10) {
    //create the query parameters
    const params = {
      //set the "q" parameter equal to the value the user input
      q: query,
      language: "en",
    };
    //create a string with the original URL and the new parameters
    const queryString = formatQueryParams(params)
    const url = searchURL + '?' + queryString;
  
    console.log(url);
  
    const options = {
      headers: new Headers({
        "X-Api-Key": apiKey})
    };
  
    fetch(url)
      .then(response => {
          if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => console.log(responseJson))
      .then(responseJson => displayResults(responseJson, maxResults))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
  }

//watch for the form submission
function watchForm() {
    $('form').submit(event => {
      //prevent default form behavior
      event.preventDefault();
      //capture the value of the user's input
      const searchTerm = $('#js-search-term').val();
      const maxResults = $('#js-max-results').val();
      getNews(searchTerm, maxResults);
    });
  }

//call DOM functions on load
$(watchForm);