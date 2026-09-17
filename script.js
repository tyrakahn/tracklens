
const team = [
  { name: "Erdion Lajiq", title: "Project Manager", department: ["Management"], email: "erdla490@student.liu.se", image: "Erdion_Lajiq.jpg" },
  { name: "Ali Azimi", title: "R&D Manager", department: ["Management"], email: "aliaz557@student.liu.se", image: "Ali_Azimi.jpeg" },
  { name: "Victor Kallenberg", title: "P&S Manager", department: ["Management"], email: "vicka991@student.liu.se", image: "Victor_Kallenberg.jpg" },
  { name: "Albin Westerdahl", title: "Process Manager", department: ["Product & Sales"], email: "albwe215@student.liu.se", image: "Albin_Westerdahl.jpg" },
  { name: "Lilly Eriksson", title: "Product Manager", department: ["Product & Sales"], email: "liler063@student.liu.se", image: "lilly_eriksson.png" },
  { name: "Hanna Hennung", title: "Lead Analyst", department: ["Product & Sales"], email: "hanhe442@student.liu.se", image: "Hanna_Hennung.jpeg" },
  { name: "Ture Franzén", title: "Analyst", department: ["Product & Sales"], email: "turfr082@student.liu.se", image: "Ture_Franzen.jpg" },
  { name: "Arvid Kylberg", title: "Analyst", department: ["Product & Sales"], email: "arvky509@student.liu.se", image: "Kylberg_Arvid.jpg" },
  { name: "Melker Kimby", title: "Analyst", department: ["Product & Sales"], email: "melki871@student.liu.se", image: "Melker_Kimby.jpeg" },
  { name: "Linn Aldgård Lindblom", title: "UX Designer", department: ["Product & Sales", "Research & Development"], email: "linal488@student.liu.se", image: "Linn_Aldgard_Lindblom.jpg" },
  { name: "Tyra Kahn", title: "UX Designer", department: ["Product & Sales", "Research & Development"], email: "tyrka731@student.liu.se", image: "Tyra_Kahn.JPG" },
  { name: "Isak Gunnarsson", title: "Technical Writer", department: ["Product & Sales"], email: "isagu342@student.liu.se", image: "isak_gunnarsson.JPG" },
  { name: "Johan Löttinger", title: "Technical Writer", department: ["Product & Sales"], email: "johlo529@student.liu.se", image: "Johan_Löttinger.jpg" },
  { name: "Dzenan Gradisic", title: "QA Lead", department: ["Product & Sales"], email: "dzegr019@student.liu.se", image: "Dzenan_Gradisic.jpg" },
  { name: "Johan Hultgren", title: "Tester", department: ["Product & Sales"], email: "johhu973@student.liu.se", image: "Johan_Hultgren.jpg" },
  { name: "Hugo Waller", title: "Tester", department: ["Product & Sales"], email: "hugwa027@student.liu.se", image: "Hugo_Waller.jpg" },
  { name: "Erik Andreasson", title: "Tester", department: ["Product & Sales"], email: "erand459@student.liu.se", image: "Erik_Andreasson.jpg" },
  { name: "Prithvi Raj Ashokkumar", title: "Architect", department: ["Research & Development"], email: "prias732@student.liu.se", image: "Prithvi_raj_ashokkumar.jpg" },
  { name: "Isak Kälvegren", title: "Config Manager", department: ["Research & Development"], email: "isaka283@student.liu.se", image: "Isak_Kälvegren.jpg" },
  { name: "Isak Mattson", title: "Pipeline & Deployment Manager", department: ["Research & Development"], email: "isama856@student.liu.se", image: "Isak_Mattsson.png" },
  { name: "Kasper Andreasson", title: "Agentic Responsible", department: ["Research & Development"], email: "kasan688@student.liu.se", image: "Kasper_Andreasson.jpg" },
  { name: "Alex Eriksson", title: "Developer", department: ["Research & Development"], email: "aleer595@student.liu.se", image: "Alex_Eriksson.png" },
  { name: "Gustav Kölerud", title: "Developer", department: ["Research & Development"], email: "gusko433@student.liu.se", image: "Gustav_Kölerud.jpeg" },
  { name: "Johan Larsson", title: "Developer", department: ["Research & Development"], email: "johla909@student.liu.se", image: "johan_larsson.jpg" },
  { name: "Jonathan Blomqvist", title: "Developer", department: ["Research & Development"], email: "jonbl638@student.liu.se", image: "Jonathan_Blomqvist.jpg" },
  { name: "Leo Fong", title: "Developer", department: ["Research & Development"], email: "leofo500@student.liu.se", image: "Leo_Fong.JPG" },
  { name: "Ebba Kanon", title: "Developer", department: ["Research & Development"], email: "ebbka919@student.liu.se", image: "Ebba_Kanon.jpg" },
  { name: "Nils von Essen", title: "Developer", department: ["Research & Development"], email: "nilvo233@student.liu.se", image: "Nils_vonEssen.jpeg" },
];


const departments = [];
for (let i = 0; i < team.length; i++) {
  const memberDepartments = team[i].department;
  for (let j = 0; j < memberDepartments.length; j++) {
    const dep = memberDepartments[j];
    if (!departments.includes(dep)) {
      departments.push(dep);
    }
  }
}

const roles = [];
for (let i = 0; i < team.length; i++) {
  const role = team[i].title;
  if (!roles.includes(role)) {
    roles.push(role);
  }
}


function populateSelect(selectEl, values) {
  const uniqueVal = [];

  for (let i = 0; i< values.length; i++) {
    const val = values[i];
    if (!uniqueVal.includes(val)) {
      uniqueVal.push(val);
    }
  }

  uniqueVal.sort();

  for (let i=0; i<uniqueVal.length; i++) {
    const val = uniqueVal[i];
    const option = document.createElement("option");
    option.val = val;
    option.textContent = val;
    selectEl.appendChild(option);
  }
}

function createCell(member, displayIndex) {
  const li = document.createElement("li");

  const photo = document.createElement("div");
  photo.className = "cell-photo";
  const img = document.createElement("img");
  img.src = member.image;
  img.loading = "lazy";
  photo.appendChild(img);

  const name = document.createElement("p");
  name.className = "cell-name";
  name.textContent = member.name;

  const title = document.createElement("p");
  title.className = "cell-title";
  title.textContent = member.title;

  const tags = document.createElement("p");
  tags.className = "cell-tags";
  tags.textContent = member.department.join(" / ");


  const email = document.createElement("p");
  email.className = "cell-email";
  email.textContent = member.email;

  li.append(photo, name, title, tags, email);
  return li;
}


const teamGrid = document.getElementById("teamGrid");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const roleFilter = document.getElementById("roleFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");


function render(list) { 
  teamGrid.innerHTML = "";

  for (let i=0; i<list.length; i++) {
    const member = list[i];
    const cell = createCell(member, i);
    teamGrid.appendChild(cell);
  }
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const department = departmentFilter.value;
  const role = roleFilter.value;

  const filtered = team.filter(member => {
    const matchesQuery =
      !query || member.name.toLowerCase().includes(query);

    const matchesDepartment =
      !department || member.department.includes(department);

    const matchesRole =
      !role || member.title === role;

    return matchesQuery && matchesDepartment && matchesRole;
  });

  render(filtered);
}

function getRolesForDepartment(department) {
  const filteredTeam = department
    ? team.filter(member => member.department.includes(department))
    : team;

  const availableRoles = [];
  for (let i = 0; i < filteredTeam.length; i++) {
    const role = filteredTeam[i].title;
    if (!availableRoles.includes(role)) {
      availableRoles.push(role);
    }
  }
  return availableRoles;
}

function updateRoleFilter() {
  const department = departmentFilter.value;
  const currentRole = roleFilter.value;
  const availableRoles = getRolesForDepartment(department);

  roleFilter.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "All";
  roleFilter.appendChild(allOption);

  populateSelect(roleFilter, availableRoles);

  // Behåll vald title om den fortfarande är giltig för departmentet, annars återgå till "All"
  roleFilter.value = availableRoles.includes(currentRole) ? currentRole : "";
}


searchInput.addEventListener("input", applyFilters);
departmentFilter.addEventListener("change", () => {
  updateRoleFilter();
  applyFilters();
});
roleFilter.addEventListener("change", applyFilters);

// ---------- Start ----------

populateSelect(departmentFilter, departments);
populateSelect(roleFilter, roles);
render(team);
