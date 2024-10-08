const audio=document.querySelector('#audio')
const Answer=document.querySelector('#Answer')
const ignore=document.querySelector('#ignore')
const firstPage=document.querySelector('#firstPage')
const secondPage=document.querySelector('#secondPage')
const ThirdPage=document.querySelector('#ThirdPage')
console.log(secondPage)
// Function to play the audio and unmute it
const texts = [
  "I Love You So much Sonia More then U Can Imagine Or think Your Everything I have",
  "I Will Always Love You For Ever And Endless Unconditional Love",
  "I Will Stuck with You In Your 19 20 21 22..... FOR INFINITY",
  "You Will Always Have Me By Your Side No Matter What Happened To Me Or To You Or To Us",
  "I Will Never Give Op On You And Nothing Can Separate Us",
  "Rabbi Yahavdek Liya w Yedjma3na Fel Hlal In Shaa Lah",
  "You Will be Always My babe Girl And Even When We Get Married Ull Still",
  "I Promise That I will Never Change And I Promise U That I Will Do The Impossible To Marry You",
  "We Will Get Married Soon Enough Don't Worry Kamel About That I Will Always Mention You In My Prayers",
  "I Love You So Much Babe , My Wife , My Future Wife , My Wife Fel Djenah And My Everything Happy Birthday 39ouba l Tol l3mor M3aya W Alot Of Success And Just Peace And Hapinness And  With Me OFC  "
];
let index = 0;
const textContainer = document.getElementById('textContainer');
function changeText() {
  // Fade out
  textContainer.style.opacity = 0;
  
  setTimeout(() => {
      // Change text after fade out
      textContainer.textContent = texts[index];
      index = (index + 1) % texts.length; // Loop back to the start
      // Fade in
      textContainer.style.opacity = 1;
  }, 1000); // Match this timeout with the CSS transition duration
}
setInterval(changeText, 3000);
document.addEventListener('click', () => {
  // Play audio only the first time a click happens
  if (audio.paused) {
      playAudio();
  }
});

// Optionally hide the first page when the button is clicked
Answer.addEventListener('click', () => {
  audio.muted = false; // Unmute the audio
  audio.play().catch(error => {
      console.error('Error playing audio:', error);
  });
  firstPage.style.display = 'none'; 
  secondPage.classList.add("show")
});
ignore.addEventListener('click',()=>{
  ThirdPage.classList.add("show")
  firstPage.style.display = 'none'; 
  secondPage.style.display = 'none'; 
})