// Sidebar section switching
function showSection(sectionId, color){
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');

  if(sectionId !== 'home'){
    document.querySelectorAll('.progress').forEach(p => p.style.width='0');
    let progress = document.getElementById('progress-'+sectionId);
    if(progress){
      progress.style.background=color;
      let width=0;
      let interval=setInterval(()=> {
        if(width>=100){ clearInterval(interval);}
        else { width++; progress.style.width=width+'%'; }
      },5);
    }
  }
}

// Light/Dark Mode for sidebar & cards
const modeBtn = document.getElementById("modeToggle");
const body = document.body;
let darkMode = false;

modeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if(darkMode){
    body.classList.add("dark-mode");
    modeBtn.textContent = "☀️ Light Mode";
  } else {
    body.classList.remove("dark-mode");
    modeBtn.textContent = "🌙 Dark Mode";
  }
});

// See more toggle
function toggleSeeMore(section){
  const aboutText = document.getElementById("about-text");
  const more = aboutText.querySelector(".more-text");
  const btn = aboutText.nextElementSibling;
  if(more.style.display === "none"){
    more.style.display = "inline";
    btn.textContent = "See Less";
  } else {
    more.style.display = "none";
    btn.textContent = "See More";
  }
}


function toggleSeeMore(id, btn) {
    const desc = document.getElementById(id);
    const moreText = desc.querySelector(".more-text");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; // or "block" if you want it on a new line
        btn.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "See More";
    }
}

