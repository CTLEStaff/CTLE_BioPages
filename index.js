
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
  {name: 'shannon', bio: 'English Professor Shannon Blair began her Central Piedmont career in 2006 as adjunct faculty. She is thrilled to now work with the college as a CTLE Faculty Fellow. While working alongside her colleagues, she hopes to be a force of constant, creative support in an ever-changing higher ed landscape. Shannon has two children who keep her laughing (and crying). She is also a writer at pinkpenwriting.com and a lifelong learner who enjoys discovering how little she knows in the kitchen, garden, and classroom. Please reach out! She’d love to hear your ideas and further your teaching goals—big or small. ​', test: '“Shannon is dedicated to teaching, learning, assessment and best practices in student learning.  She will be an asset to all that we do here at our college and the Center.  Her positive attitude and caring personality allow her to gain the trust of others and enable her to build community among faculty.” – Faculty colleague'},
  {name: 'chris', bio: 'Chris has dedicated his life as a public servant for 28 years.  He has served as a police officer, firefighter, and paramedic.  He came to CPCC in spring 2014 as faculty in the Emergency Medical Sciences Program and was then assigned the Program Chair role six months later.  He has an Associates Degree in EMS from Lenoir CC, a BS Degree in Emergency Management and a Masters Degree in Health Sciences from WCU.  He will begin his Educational Doctorate Degree in Educational Leadership next year also at WCU.  He has been married for 26 years to Jodi and has two sons, Devin and Brenton.​', test: '“Chris has implemented innovative teaching practices, including hands on skill training as well as virtual and distance learning. Chris is highly competent, insightful, and can be counted on to complete tasks with enthusiasm and positivity.” – Faculty colleague'},
  {name: 'lindy', bio: 'Lindy Hues has been teaching full time the Advertising + Graphic Design program since 2015, but her career with CP started in the Fall of 2011. Lindy has also served as an Adjunct Instructor in the IT Division and as the Web Designer for the College. With a background in design, architecture, music, and web development, Lindy brings a multidisciplinary approach to her teaching that balances pragmatism with idealism. She loves to learn new things and is looking forward to serving as a Faculty Fellow, where she hopes to continue developing her teaching skills while helping her peers to do the same. ', test: '“Lindy is very knowledgeable about the culture of CPCC and its students and is able to adapt and communicate effectively in that realm. Aside from her excellent instructional expertise, she can identify, connect with and foster relationships that make her a valuable asset to any team.” – Faculty colleague'},
  {name: 'jennifer', bio: 'Born a Gen Xer, Jennifer Perkins was born outside Philadelphia and received a solid educational foundation which led her to college in Charlotte at UNCC. She fell in love with the south and her husband, settling in Union County where they raised three sons. She earned her master’s in education at Queen’s and started her career in the elementary school. Passionate for teaching and inspiring others to be their best brought her to CPCC.  In 2004, as a part-timer, she began teaching in Developmental English and then ACA; she has been full-time with ACA since 2010. She has served as College Senate President and worked as Peer Developer. Primarily, she is a faculty member and always will be a teacher at heart.', test: '“Jennifer is cordial, intelligent, understanding, and cares deeply about her students and the college. Her students respond to her positively, and she truly creates an atmosphere that fosters learning and bonding. She is dedicated to Central Piedmont and to her faculty colleagues and is a collaborative team member with all areas of the college.” – Faculty colleague'},
];

let state = true;


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
    $(`#js-section-${sectionNumber}-button`).text('Biography');
    $(`#js-section-${sectionNumber}-button`).css({"background-color":"white", "color":"black"});
    //animateButton(`#js-section-${sectionNumber}-button`);
    
  } else {
    //change section's testimonial text to bio text
    $(`#section-${sectionNumber}-p`).text(STORE[c].bio);
    //change button text to say testimonial
    $(`#js-section-${sectionNumber}-button`).text('Testimonial');
    $(`#js-section-${sectionNumber}-button`).css({"background-color":"#862633", "color":"white"});
    //animateButton(`#js-section-${sectionNumber}-button`);
  }
}

function animateColor(button) {
  if (state) {
    $(button).animate({
      backgroundColor: "white",
      color: "black",
    }, 1000 );
  } else {
    $(button).animate({
      backgroundColor: "black",
      color: "white",
    }, 1000 );
  }
  state = !state;
};

//watch for the form submission
function watchButton() {
  //check for shannon button  
  $('#js-section-one-button').on('click', event => {
      //prevent default form behavior
      event.preventDefault();
      //console.log($('#js-section-one-button').text());
      switchHTML('shannon', $('#js-section-one-button').text(), 'one');
  });
  
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
}

function renderPage() {
  watchButton();
}

//call DOM functions on load
$(renderPage);