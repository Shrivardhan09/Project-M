// main-container
const mainContainer = document.createElement('div');
mainContainer.className = 'container-main';
// mainContainer.textContent = 'hello';
document.body.appendChild(mainContainer);

// p-1
const page1 = document.createElement('div');
page1.className = 'p-1';
mainContainer.appendChild(page1);

// nav-bar
const navBar = document.createElement('nav');
navBar.className = 'nav-bar';
page1.appendChild(navBar);

// logo-name
const logoName = document.createElement('div');
const logo = document.createElement('div');
const logoImage = document.createElement('img');
logoImage.src = './assets/images/logo_p.png';
const nameL = document.createElement('div');
const nameText = document.createElement('span');
const hTitle = document.createElement('h1');
hTitle.textContent = 'PARINAYAM';
const pDesc = document.createElement('p');
pDesc.textContent = 'Arya Vysya Matrimony';

logoName.className = 'logo-name';
logo.className = 'logo-p';
logoImage.className = 'img-p';
nameL.className = 'name-l';
nameText.className = 'name-text';
hTitle.className = 'h-title';
pDesc.className = 'p-desc';

navBar.appendChild(logoName);
logoName.appendChild(logo);
logo.appendChild(logoImage);
logoName.appendChild(nameL);
logo.appendChild(logoImage);
nameL.appendChild(nameText);
nameText.appendChild(hTitle);
nameText.appendChild(pDesc);

// list
const list = document.createElement('div');
const ul = document.createElement('ul');
const home = document.createElement('li');
const homeLink = document.createElement('a');
const membership = document.createElement('li');
const membershipLink = document.createElement('a');
const howItWorks = document.createElement('li');
const howItWorksLink = document.createElement('a');
const contact = document.createElement('li');
const contactLink = document.createElement('a');

list.className = 'list-items';
ul.className = 'ul-items';

home.className = 'home';
homeLink.className = 'home-link';
homeLink.href = '#';
homeLink.textContent = 'Home';

membership.className = 'membership';
membershipLink.className = 'membership-link';
membershipLink.href = '#';
membershipLink.textContent = 'Membership';

howItWorks.className = 'how-it-works';
howItWorksLink.className = 'how-link';
howItWorksLink.href = '#';
howItWorksLink.textContent = 'How It Works';

contact.className = 'contact';
contactLink.className = 'contact-link';
contactLink.href = '#';
contactLink.textContent = 'Contact';

navBar.appendChild(list);
list.appendChild(ul);
ul.appendChild(home);
home.appendChild(homeLink);
ul.appendChild(membership);
membership.appendChild(membershipLink);
ul.appendChild(howItWorks);
howItWorks.appendChild(howItWorksLink);
ul.appendChild(contact);
contact.appendChild(contactLink);

// login sigin
const logInSigin = document.createElement('div');
const logIn = document.createElement('div');
const loginText = document.createElement('span');
loginText.textContent = 'Log In';
const signin = document.createElement('div');
const signinText = document.createElement('span');
signinText.textContent = 'Sign Up';

logInSigin.className = 'login-signin';
logInSigin.id = 'buttons';
logIn.className = 'log-in';
logIn.id = 'logIn';
signin.className = 'sign-in';
signin.id = 'sigin';

navBar.appendChild(logInSigin);
logInSigin.appendChild(logIn);
logIn.appendChild(loginText);
logInSigin.appendChild(signin);
signin.appendChild(signinText);

// p-1 container
const p1Container = document.createElement('section');
const leftContainer = document.createElement('div');
const rightContainer = document.createElement('div');
p1Container.className = 'p1-container';
leftContainer.className = 'left-c';
rightContainer.className = 'right-c';

page1.appendChild(p1Container);
p1Container.appendChild(leftContainer);
p1Container.appendChild(rightContainer);

// left container
const partnerTitle = document.createElement('div');
const partnerTitleH1 = document.createElement('h1');
partnerTitleH1.className = 'partner-title';
partnerTitleH1.textContent = 'Find Your Perfect Partner';

const partnerDesc = document.createElement('div');
partnerDesc.className = 'partner-desc';
partnerDesc.textContent = 'A wedding is a civil or religious ceremony which celebrates the beginning of a marriage. Wedding traditions and customs vary greatly between cultures, ethnic groups, religions, countries, and social classes. Wedding is an opportunity to perform a traditional ceremony and celebrate with friends and families.';

const joinNow = document.createElement('div');
const joinNowLink = document.createElement('a');
joinNow.className = 'join-now';
joinNowLink.className = 'join-p-link';
joinNowLink.id = 'join-link';
joinNowLink.href = '#';
joinNowLink.textContent = 'Join Now';

leftContainer.appendChild(partnerTitle);
partnerTitle.appendChild(partnerTitleH1);
leftContainer.appendChild(partnerDesc);
leftContainer.appendChild(joinNow);
joinNow.appendChild(joinNowLink);

// Right container
const picPartner = document.createElement('div');
const imageP = document.createElement('img');

const topSticker = document.createElement('div');
const tSticker = document.createElement('img');

const bottomSticker = document.createElement('div');
const bStickerImage = document.createElement('img');

const bottomBox = document.createElement('div');
const bottomDiv = document.createElement('div');

picPartner.className = 'partner-pic';
imageP.className = 'img-partner';
imageP.src = '/assets/images/2.jpg';

topSticker.className = 'top-sticker';
tSticker.className = 't-sticker';
tSticker.src = '/assets/images/sticker1.jpg';

bottomBox.className = 'bottom-box';
bottomDiv.className = 'no-of-partners';
bottomDiv.textContent = '10k+ Members';

bottomSticker.className = 'bottom-sticker';
bStickerImage.className = 'b-sticker';
bStickerImage.src = '/assets/images/1.webp';

rightContainer.appendChild(picPartner);
picPartner.appendChild(imageP);

rightContainer.appendChild(topSticker);
topSticker.appendChild(tSticker);

rightContainer.appendChild(bottomBox);
bottomBox.appendChild(bottomDiv);

rightContainer.appendChild(bottomSticker);
bottomSticker.appendChild(bStickerImage);

// page-2
const p2Container = document.createElement('section');
p2Container.className = 'p2-container';

const groom = document.createElement('div');
const groomImage = document.createElement('img');
groom.className = 'bride';
groomImage.className = 'img-groom';
groomImage.src = '';

const reviews = document.createElement('div');
const reviewDesc = document.createElement('h3');
reviews.className = 'review';
reviewDesc.className = 'r-desc';

const playButton = document.createElement('div');
const play = document.createElement('img');
playButton.className = 'play-button';
play.className = 'play-img';
play.src = '';
