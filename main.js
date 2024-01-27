// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorHTML = document.getElementById("modal");
errorHTML.classList.add("hidden");



document.addEventListener("DOMContentLoaded", function() {
  const likeButtons = document.getElementsByClassName("like-glyph")
  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", function() {
      mimicServerCall()
      .then(function () { 
        if (likeButton.classList.contains("activated-heart")) {
          likeButton.classList.remove("activated-heart");
          likeButton.textContent = EMPTY_HEART;
        }  
        else {   
          likeButton.classList.add("activated-heart");
          likeButton.textContent = FULL_HEART;
        }
      })
      .catch(function (error) {
        errorHTML.className = "";
        const errorMessage = document.getElementById("modal-message");
        errorMessage.textContent = `${error}`;
        console.log(error);
        setTimeout(function()  {
          errorHTML.classList.add("hidden");
        }, 3000);
      });
    });
  }
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
