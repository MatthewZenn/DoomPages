const theme = ['greytheme', 'bluetheme', 'redtheme'];
const icons = ['<span class="material-symbols-outlined" style="font-size: 70px;">smoke_free</span>', 
'<span class="material-symbols-outlined" style="font-size: 70px;">weekend</span>',
'<span class="material-symbols-outlined" style="font-size: 70px;">robot_2</span>',
'<span class="material-symbols-outlined" style="font-size: 70px;">bomb</span>'
];
const titles = ['The page ahead is in a non-smoking area', 
'Are you still here?',
'Could not verify identity',
'Active bomb threat'
];

const bodys = ['For the safety of the others, we ask that visitors to this site not engage in any smoking or drug related activities.',
"It looks you've been using the internet for a while. It's important to take breaks every few hours. Try going outside or feeding your dog.",
"To continue to this site, you will need to verify that you are human. A verification alert has been sent to your mobile device. Tap 'Confirm' and continue with the following instructions. Please stand in front of your camera, spell out your full name while pretending to jump rope, spin in a circle three times, do the Hokey-Pokey, and then check if the page reloads.",
'The site you are trying to visit is temporarily unavailable due to a potential bomb threat. Please be patient.'
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