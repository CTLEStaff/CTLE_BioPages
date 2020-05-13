
'strict'
//Professor Shannon Blair –
//“Shannon is dedicated to teaching, learning, assessment and best practices in student learning.  She will be an asset to all that we do here at our college and the Center.  Her positive attitude and caring personality allow her to gain the trust of others and enable her to build community among faculty.” – Faculty colleague
 
//Associate Professor Jennifer Perkins –
//“Jennifer is cordial, intelligent, understanding, and cares deeply about her students and the college. Her students respond to her positively, and she truly creates an atmosphere that fosters learning and bonding. She is dedicated to Central Piedmont and to her faculty colleagues and is a collaborative team member with all areas of the college.” – Faculty colleague
 
//Christopher Goenner –
//“Chris has implemented innovative teaching practices, including hands on skill training as well as virtual and distance learning.  Chris is highly competent, insightful, and can be counted on to complete tasks with enthusiasm and positivity.” – Faculty colleague
 
//Lindy Hues –
//“Lindy is very knowledgeable about the culture of CPCC and its students and is able to adapt and communicate effectively in that realm. Aside from her excellent instructional expertise, she can identify, connect with and foster relationships that make her a valuable asset to any team.” – Faculty colleague

const STORE = [
  {name: 'shannon', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', test: '“Shannon is dedicated to teaching, learning, assessment and best practices in student learning.  She will be an asset to all that we do here at our college and the Center.  Her positive attitude and caring personality allow her to gain the trust of others and enable her to build community among faculty.” – Faculty colleague'},
  {name: 'chris', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', test: '“Chris has implemented innovative teaching practices, including hands on skill training as well as virtual and distance learning.  Chris is highly competent, insightful, and can be counted on to complete tasks with enthusiasm and positivity.” – Faculty colleague'},
  {name: 'jennifer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', test: '“Jennifer is cordial, intelligent, understanding, and cares deeply about her students and the college. Her students respond to her positively, and she truly creates an atmosphere that fosters learning and bonding. She is dedicated to Central Piedmont and to her faculty colleagues and is a collaborative team member with all areas of the college.” – Faculty colleague'},
  {name: 'lindy', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', test: '“Lindy is very knowledgeable about the culture of CPCC and its students and is able to adapt and communicate effectively in that realm. Aside from her excellent instructional expertise, she can identify, connect with and foster relationships that make her a valuable asset to any team.” – Faculty colleague'},
];


function switchHTML(data, currentState, sectionNumber) {
  console.log(`${data}: ${currentState}`);
  let c = 0;
  for(let i = 0; i < STORE.length; i++) {
    let s = STORE[i].name;
    if(s === data) {
       c = i; 
    }
  }
  console.log(c);
  if(currentState === 'Testimonial') {
    //change sections bio text to testimonial text
    $(`#section-${sectionNumber}-p`).text(STORE[c].test);
    //change button text to say biography
    $('#js-section-one-button').text('Biography');
  } else {
    //change section's testimonial text to bio text
    $(`#section-${sectionNumber}-p`).text(STORE[c].bio);
    //change button text to say testimonial
    $('#js-section-one-button').text('Testimonial');
  }
  

  
  /*const params = {
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
      */
}

//watch for the form submission
function watchButton() {
  //check for shannon button  
  $('#js-section-one-button').on('click', event => {
      //prevent default form behavior
      event.preventDefault();
      //console.log($('#js-section-one-button').text());
      switchHTML('shannon', $('#js-section-one-button').text(), 'one');
    });
  }
  
  //check for chris button
  $('#js-section-two-button').on('click', event => {
    //prevent default form behavior
    event.preventDefault();
    //console.log($('#js-section-one-button').text());
    switchHTML('chris', $('#js-section-two-button').text(), 'two');
  });

  //check for lindy button
  $('#js-section-three-button').on('click', event => {
    //prevent default form behavior
    event.preventDefault();
    //console.log($('#js-section-one-button').text());
    switchHTML('lindy', $('#js-section-three-button').text(), 'three');
  });

  //check for jennifer button
  $('#js-section-four-button').on('click', event => {
    //prevent default form behavior
    event.preventDefault();
    //console.log($('#js-section-one-button').text());
    switchHTML('jennifer', $('#js-section-four-button').text(), 'four');
  });

//call DOM functions on load
$(watchButton);