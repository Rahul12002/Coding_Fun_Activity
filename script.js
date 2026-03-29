
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
  
  // For mobile touch
  moveRandom.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Prevent default touch behavior
    moveRandomEl(e.target);
  });
}

// Typing effect
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

const typeH1 = document.getElementById('type-h1');
if (typeH1) {
  typeWriter(typeH1, typeH1.dataset.text);
}

// Falling hearts and stars
function createFallingElements() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 10 + 's';
    document.body.appendChild(heart);
  }
  for (let i = 0; i < 10; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = '⭐';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 10 + 's';
    document.body.appendChild(star);
  }
}

createFallingElements();

// Modal functions
function showModal(message) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
      <p>${message}</p>
    </div>
  `;
  document.body.appendChild(modal);
  modal.style.display = 'flex';
  setTimeout(() => modal.style.display = 'none', 5000); // Auto close after 5s
}