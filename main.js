const theme = ['greytheme', 'bluetheme', 'redtheme'];
const icons = ['<span id="icon" class="material-symbols-outlined">smoke_free</span>', 
'<span id="icon" class="material-symbols-outlined">emoji_food_beverage</span>',
'<span id="icon" class="material-symbols-outlined">robot_2</span>',
'<span id="icon" class="material-symbols-outlined">bomb</span>',
'<span id="icon" class="material-symbols-outlined">microbiology</span>',
'<span id="icon" class="material-symbols-outlined">skull</span>',
'<span id="icon" class="material-symbols-outlined">raven</span>'
];
const titles = ['The page ahead is in a non-smoking area', 
'Are you still here?',
'Could not verify identity',
'Active bomb threat',
'Virus detected',
'You have been cursed',
'This site is under goverment surveillance'
];

const bodys = ['For the safety of the others, we ask that visitors to this site not engage in any smoking or drug related activities.',
"It looks you've been using the internet for a while. It's important to take breaks every few hours. Try going outside or feeding your dog.",
"To continue to this site, you will need to verify that you are human. A verification alert has been sent to your mobile device. Tap 'Confirm' and continue with the following instructions. Please stand in front of your camera, spell out your full name while pretending to jump rope, spin in a circle three times, do the Hokey-Pokey, and then check if the page reloads.",
'The site you are trying to visit is temporarily unavailable due to a potential bomb threat. Please be patient.',
"The site you are trying to visit is currently under quarentine. Please allow 1-2 weeks of isolation before visitng again. We apologies for the inconvenience and thank you for your understanding.",
"You have been visited by the ghost of Rick Ashley. You will die tonight unless you comment the link to Rick Ashley's 'Never Gonna Give You Up' on ten different YouTube videos.",
"for your safety, the site ahead is under active surveillance by the Federal Government. Do not attempt to circumvent this with a vpn or other methods."
];

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function choose() {
  document.documentElement.setAttribute('theme', theme.random());
  var index = Math.floor(Math.random() * (0 - icons.length) +  icons.length);
  document.getElementById('container').innerHTML = icons[index];
  document.getElementById('heading').innerHTML = titles[index];
  document.getElementById('text').innerHTML = bodys[index];
}

document.getElementById('go').addEventListener('click', choose);

choose();