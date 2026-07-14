function renderProjects() {
  const list = document.getElementById("project-list");

  if (!projects || projects.length === 0) {
    list.innerHTML = '<p class="empty-state">No projects yet.</p>';
    return;
  }

  const sorted = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));

  list.innerHTML = sorted.map(p => `
    <div class="project-card">
      <div class="project-info">
        <h2>${p.title}</h2>
        <p>${p.summary || ""}</p>
      </div>
      <a class="read-btn" href="${p.folder}">Read →</a>
    </div>
  `).join("");
}

renderProjects();