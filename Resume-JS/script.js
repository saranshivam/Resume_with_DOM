const body = document.body;

const div_1 = document.createElement("div");
div_1.id = 'header';

const img = document.createElement("img");
img.id = 'brain_image';
img.src = 'https://sammy-39.github.io/resume-react/images/propic.png'
// img.setAttribute("src", "images/1.jpg")

const head1 = document.createElement("div")
head1.id = 'image'

const head2 =document.createElement("div")
head2.id = 'NameBox'

const Name = document.createElement("div")
Name.id = 'Name'
var h1_Name = document.createElement("h1")
h1_Name.innerText = "BRAIN DUDEY"
h1_Name.id = 'brain'

const navbar = document.createElement("div")
navbar.id = 'navbar'
navbar.innerText = "N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com"

const div_2 = document.createElement("div")
div_2.id = 'content'


const left = document.createElement("div")
left.id = 'left'

const profile = document.createElement("div")
profile.id = 'profile'
const profiletitle = document.createElement("div")
profiletitle.className = 'profiletitle'
const profilelogo = document.createElement("div")
profilelogo.className = 'profilelogo'
profilelogo.innerHTML = '<i class="fas fa-user-circle user"></i>'
const profileName = document.createElement("div")
profileName.className = 'profileName'
profileName.innerHTML = "<h1>Profile</h1>"
const firstcontent = document.createElement("div")
firstcontent.className = 'firstcontent'
firstcontent.innerHTML = "Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated and an alliteration advocate."

const skills = document.createElement("div")
skills.id = 'skills'
const skillstitle = document.createElement("div")
skillstitle.className = 'profiletitle'
const skillslogo = document.createElement("div")
skillslogo.className = 'profilelogo'
skillslogo.innerHTML = '<i class="fas fa-check-circle user"></i>'
const skillsName = document.createElement("div")
skillsName.className = 'profileName'
skillsName.innerHTML = "<h1>Skills</h1>"
const techskills = document.createElement("div")
techskills.id = 'techskills'
const techname = document.createElement("h2")
techname.className = 'techname'
techname.innerHTML = "Technical Skills"
const techdiv =document.createElement("div")
techdiv.classList = 'techdiv'
const jsdiv = document.createElement("div")
jsdiv.className = 'jsdiv'
var js =document.createElement("p")
js.innerHTML = "Javascript"
var jsrange = document.createElement("p")
jsrange.className = 'range'
jsrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'
const cssdiv = document.createElement("div")
cssdiv.className = 'jsdiv'
var css =document.createElement("p")
css.innerHTML = "CSS"
var cssrange = document.createElement("p")
cssrange.className = 'range'
cssrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'
const HTMLdiv = document.createElement("div")
HTMLdiv.className = 'jsdiv'
var HTML =document.createElement("p")
HTML.innerHTML = "HTML"
var HTMLrange = document.createElement("p")
HTMLrange.className = 'range'
HTMLrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="65">'
const Reactdiv = document.createElement("div")
Reactdiv.className = 'jsdiv'
var React =document.createElement("p")
React.innerHTML = "React"
var Reactrange = document.createElement("p")
Reactrange.className = 'range'
Reactrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="65">'
const Reduxdiv = document.createElement("div")
Reduxdiv.className = 'jsdiv'
var Redux =document.createElement("p")
Redux.innerHTML = "Redux"
var Reduxrange = document.createElement("p")
Reduxrange.className = 'range'
Reduxrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'
const Mongodiv = document.createElement("div")
Mongodiv.className = 'jsdiv'
var Mongo =document.createElement("p")
Mongo.innerHTML = "Mongo"
var Mongorange = document.createElement("p")
Mongorange.className = 'range'
Mongorange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'
const Deploymentdiv = document.createElement("div")
Deploymentdiv.className = 'jsdiv'
var Deployment =document.createElement("p")
Deployment.innerHTML = "Deployment"
var Deploymentrange = document.createElement("p")
Deploymentrange.className = 'range'
Deploymentrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="100">'
const addskills = document.createElement("div")
addskills.id = 'addskills'
const addname = document.createElement("h2")
addname.className = 'addname'
addname.innerHTML = "Additional Skills"
const adddiv = document.createElement("div")
adddiv.classList = 'adddiv'
const PMdiv = document.createElement("div")
PMdiv.className = 'jsdiv'
var PM =document.createElement("p")
PM.innerHTML = "Project Management"
var PMrange = document.createElement("p")
PMrange.className = 'range'
PMrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'
const RCdiv = document.createElement("div")
RCdiv.className = 'jsdiv'
var RC =document.createElement("p")
RC.innerHTML = "Recruitment"
var RCrange = document.createElement("p")
RCrange.className = 'range'
RCrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'
const BDdiv = document.createElement("div")
BDdiv.className = 'jsdiv'
var BD =document.createElement("p")
BD.innerHTML = "Business Development"
var BDrange = document.createElement("p")
BDrange.className = 'range'
BDrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'
const Editingdiv = document.createElement("div")
Editingdiv.className = 'jsdiv'
var Editing =document.createElement("p")
Editing.innerHTML = "Editing"
var Editingrange = document.createElement("p")
Editingrange.className = 'range'
Editingrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'
const FRdiv = document.createElement("div")
FRdiv.className = 'jsdiv'
var FR =document.createElement("p")
FR.innerHTML = "Fund Rising"
var FRrange = document.createElement("p")
FRrange.className = 'range'
FRrange.innerHTML = '<input type="range" disabled style="width: 15em;" value="80">'

const workexp1 = document.createElement("div")
workexp1.id = 'workexp1'
const workexptitle1 = document.createElement("div")
workexptitle1.className = 'profiletitle'
const workexplogo1 = document.createElement("div")
workexplogo1.className = 'profilelogo'
workexplogo1.innerHTML = '<i class="fas fa-clock user"></i>'
const workexpName1 = document.createElement("div")
workexpName1.className = 'profileName'
workexpName1.innerHTML = "<h1>Work Experience</h1>"
const subheading1 = document.createElement("div")
subheading1.className = 'subheading'
const pointone1 = document.createElement("p")
pointone1.innerHTML ="<strong><h3>Event Manager</h3></strong>"
const pointtwo1 = document.createElement("p")
pointtwo1.innerHTML = "03/2014 - 02/2017"
const pointthree1 = document.createElement("p")
pointthree1.className = 'pointthree'
pointthree1.innerHTML = "<p>C3 Presents, Washington DC</p>"
const pointfour1 = document.createElement("ul")
pointfour1.className = 'list'
pointfour1.innerHTML = '<li>Lead and execute all phases of event planning and production spanning committe recruitment, training, vendor relationships and on-site facilitation.</li> <li>Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women.</li> <li>Exercise fiscal control over budget creation, tracking and reporting.Collaborate with employees at all organization levels to advance cohesive operations.</li>'


const right = document.createElement("div")
right.id = 'right'
const workexp = document.createElement("div")
workexp.id = 'workexp'
const workexptitle = document.createElement("div")
workexptitle.className = 'profiletitle'
const workexplogo = document.createElement("div")
workexplogo.className = 'profilelogo'
workexplogo.innerHTML = '<i class="fas fa-clock user"></i>'
const workexpName = document.createElement("div")
workexpName.className = 'profileName'
workexpName.innerHTML = "<h1>Work Experience</h1>"
const subheading = document.createElement("div")
subheading.className = 'subheading'
const pointone = document.createElement("p")
pointone.innerHTML ="<strong><h3>Community Relations</h3></strong>"
const pointtwo = document.createElement("p")
pointtwo.innerHTML = "06/2011 - 01/2014"
const pointthree = document.createElement("p")
pointthree.className = 'pointthree'
pointthree.innerHTML = "<strong><h3>Manager</h3></strong>"
const pointfour = document.createElement("p")
pointfour.className = 'firstcontent'
pointfour.innerHTML = "Gay & Lesbian Elder Housing, Los Angeles"
const pointfive = document.createElement("ul")
pointfive.className = 'list'
pointfive.innerHTML = '<li>Arranging presentations and pitch deck.</li> <li>Designing a PR plan and establishing important focus points.</li><li>Designing, creating and managing content across multiple communication platforms.</li><li>Building relationships with key media players.</li>'

const education = document.createElement("div")
education.id = 'education'
const educationtitle = document.createElement("div")
educationtitle.className = 'profiletitle'
const educationlogo = document.createElement("div")
educationlogo.className = 'profilelogo'
educationlogo.innerHTML = '<i class="fas fa-compact-disc user"></i>'
const educationName = document.createElement("div")
educationName.className = 'profileName'
educationName.innerHTML = "<h1>Education</h1>"
const subheading2 = document.createElement("div")
subheading2.className = 'subheading'
const pointone2 = document.createElement("p")
pointone2.innerHTML ="<strong><h3>Engineering Imersion</h3></strong>"
const pointtwo2 = document.createElement("p")
pointtwo2.innerHTML = "11/2018 - 06/2018"
const pointthree2 = document.createElement("p")
pointthree2.className = 'pointthree'
pointthree2.innerHTML = "<strong><h3>Program</h3></strong>"
const pointfour2 = document.createElement("p")
pointfour2.className = 'firstcontent'
pointfour2.innerHTML = "Thinkful, Chicago, IL"
const pointfive1 = document.createElement("p")
pointfive1.className = 'pointfive1'
pointfive1.innerHTML = 'Project-focused intensive program with emphasis on mongo, Express, React, and JavaScript (MERN) technical stack.'
const pointsix = document.createElement("ul")
pointsix.className = 'list'
pointsix.innerHTML = '<li>Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of meditation.Users progress is stored on a backend created using Node and MongoDB.</li> <li>Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.</li> <li>Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.</li>'
const pointsevendiv = document.createElement("div")
pointsevendiv.id = "sevendiv"
const pointseven = document.createElement("p")
pointseven.innerHTML = '<strong><h3>BA, English</h3></strong>'
const pointseven1 = document.createElement("p")
pointseven1.innerHTML = "09/2001 - 09/2005"
const pointseven2 = document.createElement("p")
pointseven2.className = 'pointseven2'
pointseven2.innerHTML = "University of California, Los Angles"

div_2.append(left);
div_2.append(right);
right.append(workexp, education);
left.append(profile, skills, workexp1);
profile.append(profiletitle);
profiletitle.append(profilelogo);
profiletitle.append(profileName);
profile.append(firstcontent);
skills.append(skillstitle, techskills, addskills)
skillstitle.append(skillslogo)
skillstitle.append(skillsName)
techskills.append(techname, techdiv)
techdiv.append(jsdiv, cssdiv, HTMLdiv, Reactdiv, Reduxdiv, Mongodiv, Deploymentdiv)
jsdiv.append(js, jsrange)
cssdiv.append(css, cssrange)
HTMLdiv.append(HTML, HTMLrange)
Reactdiv.append(React, Reactrange)
Reduxdiv.append(Redux, Reduxrange)
Mongodiv.append(Mongo, Mongorange)
Deploymentdiv.append(Deployment, Deploymentrange)
addskills.append(addname, adddiv)
adddiv.append(PMdiv, RCdiv, BDdiv, Editingdiv, FRdiv)
PMdiv.append(PM, PMrange)
RCdiv.append(RC, RCrange)
BDdiv.append(BD, BDrange)
Editingdiv.append(Editing, Editingrange)
FRdiv.append(FR, FRrange)
workexp1.append(workexptitle1, subheading1, pointthree1, pointfour1);
workexptitle1.append(workexplogo1);
workexptitle1.append(workexpName1);
subheading1.append(pointone1, pointtwo1)

education.append(educationtitle, subheading2, pointthree2, pointfour2, pointfive1, pointsix, pointsevendiv, pointseven2);
educationtitle.append(educationlogo);
educationtitle.append(educationName);
subheading2.append(pointone2, pointtwo2)
pointsevendiv.append(pointseven, pointseven1)

workexp.append(workexptitle, subheading, pointthree, pointfour, pointfive);
workexptitle.append(workexplogo);
workexptitle.append(workexpName);
subheading.append(pointone, pointtwo)

Name.append(h1_Name);
head2.append(Name);
head1.append(img);
div_1.append(head1, head2);

document.body.append(div_1,navbar,div_2);