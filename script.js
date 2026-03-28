// Dark Mode
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Typing Effect
const text = ["Mehrin Mim 👩‍💻", "CS Student", "Future Developer"];
let i = 0, j = 0, isDeleting = false;

function type() {
  let current = text[i];

  document.getElementById("typing").innerHTML =
    current.substring(0, j);

  if (!isDeleting) j++; else j--;

  if (j === current.length) isDeleting = true;
  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// GitHub Projects
fetch("https://api.github.com/users/YOUR_USERNAME/repos")
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("projects-container");

    data.slice(0, 6).forEach(repo => {
      container.innerHTML += `
        <div class="card">
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description"}</p>
          <a href="${repo.html_url}" target="_blank">
            <button>View</button>
          </a>
        </div>
      `;
    });
  });