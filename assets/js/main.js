// // main-container
// const mainContainer = document.createElement('div');
// mainContainer.className = 'container-main';
// // mainContainer.textContent = 'hello';
// document.body.appendChild(mainContainer);

// // p-1
// const page1 = document.createElement('div');
// page1.className = 'p-1';
// mainContainer.appendChild(page1);

// // nav-bar
// const navBar = document.createElement('nav');
// navBar.className = 'nav-bar';
// page1.appendChild(navBar);

// // logo-name
// const logoName = document.createElement('div');
// const logo = document.createElement('div');
// const logoImage = document.createElement('img');
// logoImage.src = './assets/images/logo_p.png';
// const nameL = document.createElement('div');
// const nameText = document.createElement('span');
// const hTitle = document.createElement('h1');
// hTitle.textContent = 'PARINAYAM';
// const pDesc = document.createElement('p');
// pDesc.textContent = 'Arya Vysya Matrimony';

// logoName.className = 'logo-name';
// logo.className = 'logo-p';
// logoImage.className = 'img-p';
// nameL.className = 'name-l';
// nameText.className = 'name-text';
// hTitle.className = 'h-title';
// pDesc.className = 'p-desc';

// navBar.appendChild(logoName);
// logoName.appendChild(logo);
// logo.appendChild(logoImage);
// logoName.appendChild(nameL);
// logo.appendChild(logoImage);
// nameL.appendChild(nameText);
// nameText.appendChild(hTitle);
// nameText.appendChild(pDesc);

// // list
// const list = document.createElement('div');
// const ul = document.createElement('ul');
// const home = document.createElement('li');
// const homeLink = document.createElement('a');
// const membership = document.createElement('li');
// const membershipLink = document.createElement('a');
// const howItWorks = document.createElement('li');
// const howItWorksLink = document.createElement('a');
// const contact = document.createElement('li');
// const contactLink = document.createElement('a');

// list.className = 'list-items';
// ul.className = 'ul-items';

// home.className = 'home';
// homeLink.className = 'home-link';
// homeLink.href = '#';
// homeLink.textContent = 'Home';

// membership.className = 'membership';
// membershipLink.className = 'membership-link';
// membershipLink.href = '#';
// membershipLink.textContent = 'Membership';

// howItWorks.className = 'how-it-works';
// howItWorksLink.className = 'how-link';
// howItWorksLink.href = '#';
// howItWorksLink.textContent = 'How It Works';

// contact.className = 'contact';
// contactLink.className = 'contact-link';
// contactLink.href = '#';
// contactLink.textContent = 'Contact';

// navBar.appendChild(list);
// list.appendChild(ul);
// ul.appendChild(home);
// home.appendChild(homeLink);
// ul.appendChild(membership);
// membership.appendChild(membershipLink);
// ul.appendChild(howItWorks);
// howItWorks.appendChild(howItWorksLink);
// ul.appendChild(contact);
// contact.appendChild(contactLink);

// // hamburger
// const hamburger = document.createElement('div');
// hamburger.className = 'hamburger';
// const hamburgerIcon = document.createElement('span');
// hamburgerIcon.className = 'hamburger-icon';
// const hamburgerImg = document.createElement('img');
// hamburgerImg.src = './assets/images/menu.png';
// hamburgerImg.className = 'menu-icon';

// navBar.appendChild(hamburger);
// hamburger.appendChild(hamburgerIcon);
// hamburgerIcon.appendChild(hamburgerImg);

// // login sigin
// const logInSigin = document.createElement('div');
// const logIn = document.createElement('div');
// const loginText = document.createElement('span');
// loginText.textContent = 'Log In';
// const signin = document.createElement('div');
// const signinText = document.createElement('span');
// signinText.textContent = 'Sign Up';

// logInSigin.className = 'login-signin';
// logInSigin.id = 'buttons';
// logIn.className = 'log-in';
// logIn.id = 'logIn';
// signin.className = 'sign-in';
// signin.id = 'sigin';

// navBar.appendChild(logInSigin);
// logInSigin.appendChild(logIn);
// logIn.appendChild(loginText);
// logInSigin.appendChild(signin);
// signin.appendChild(signinText);

// // p-1 container
// const p1Container = document.createElement('section');
// const leftContainer = document.createElement('div');
// const rightContainer = document.createElement('div');
// p1Container.className = 'p1-container';
// leftContainer.className = 'left-c';
// rightContainer.className = 'right-c';

// page1.appendChild(p1Container);
// p1Container.appendChild(leftContainer);
// p1Container.appendChild(rightContainer);

// // left container
// const partnerTitle = document.createElement('div');
// const partnerTitleH1 = document.createElement('h1');
// partnerTitleH1.className = 'partner-title';
// partnerTitleH1.textContent = 'Find Your Perfect Partner';

// const partnerDesc = document.createElement('div');
// partnerDesc.className = 'partner-desc';
// partnerDesc.textContent = 'A wedding is a civil or religious ceremony which celebrates the beginning of a marriage. Wedding traditions and customs vary greatly between cultures, ethnic groups, religions, countries, and social classes. Wedding is an opportunity to perform a traditional ceremony and celebrate with friends and families.';

// const joinNow = document.createElement('div');
// const joinNowLink = document.createElement('a');
// joinNow.className = 'join-now';
// joinNowLink.className = 'join-p-link';
// joinNowLink.id = 'join-link';
// joinNowLink.href = '#';
// joinNowLink.textContent = 'Join Now';

// leftContainer.appendChild(partnerTitle);
// partnerTitle.appendChild(partnerTitleH1);
// leftContainer.appendChild(partnerDesc);
// leftContainer.appendChild(joinNow);
// joinNow.appendChild(joinNowLink);

// // Right container
// const picPartner = document.createElement('div');
// const imageP = document.createElement('img');

// const topSticker = document.createElement('div');
// const tSticker = document.createElement('img');

// const bottomSticker = document.createElement('div');
// const bStickerImage = document.createElement('img');

// const bottomBox = document.createElement('div');
// const bottomDiv = document.createElement('div');

// picPartner.className = 'partner-pic';
// imageP.className = 'img-partner';
// imageP.src = '/assets/images/2.jpg';

// topSticker.className = 'top-sticker';
// tSticker.className = 't-sticker';
// tSticker.src = '/assets/images/sticker1.jpg';

// bottomBox.className = 'bottom-box';
// bottomDiv.className = 'no-of-partners';
// bottomDiv.textContent = '500+ Members';

// bottomSticker.className = 'bottom-sticker';
// bStickerImage.className = 'b-sticker';
// bStickerImage.src = '/assets/images/hear.gif';

// rightContainer.appendChild(picPartner);
// picPartner.appendChild(imageP);

// rightContainer.appendChild(topSticker);
// topSticker.appendChild(tSticker);

// rightContainer.appendChild(bottomBox);
// bottomBox.appendChild(bottomDiv);

// rightContainer.appendChild(bottomSticker);
// bottomSticker.appendChild(bStickerImage);

// // page-2
// const p2Container = document.createElement('section');
// p2Container.className = 'p2-container';

// const groom = document.createElement('div');
// const groomImage = document.createElement('img');
// groom.className = 'groom';
// groomImage.className = 'img-groom';
// groomImage.src = './assets/images/groom.avif';

// const reviews = document.createElement('div');
// const reviewDesc = document.createElement('h3');
// reviews.className = 'review';
// reviewDesc.className = 'r-desc';
// reviewDesc.textContent = 'We have more than 300+ Five Star Reviews';

// const playButton = document.createElement('div');
// const play = document.createElement('img');
// playButton.className = 'play-button';
// play.className = 'play-img';
// play.src = '/assets/images/play_arrow.png';

// page1.appendChild(p2Container);
// p2Container.appendChild(groom);
// groom.appendChild(groomImage);
// p2Container.appendChild(reviews);
// reviews.appendChild(reviewDesc);
// p2Container.appendChild(playButton);
// playButton.appendChild(play);

// // p3 container
// // container
// const p3Container = document.createElement('section');
// p3Container.className = 'p3-container';
// page1.appendChild(p3Container);

// // title
// const meetYourPatner = document.createElement('div');
// meetYourPatner.className = 'meet-your-partner';
// const meetYourPatnerH1 = document.createElement('h1');
// p3Container.appendChild(meetYourPatner);
// meetYourPatner.appendChild(meetYourPatnerH1);
// meetYourPatnerH1.textContent = 'Meet Your Partner';

// // bar
// const findPartnerBar = document.createElement('div');
// findPartnerBar.className = 'find-partner-bar';
// // search
// const searchId = document.createElement('div');
// searchId.className = 'search-bar';

// const searchIcon = document.createElement('span');
// searchIcon.className = 'search-span';
// const searchIconImg = document.createElement('img');
// searchIcon.class = 'search-icon';
// searchIconImg.src = '/assets/images/person_search.png';

// const searchInput = document.createElement('span');
// searchInput.className = 'search-input-span';
// const searchInputBox = document.createElement('input');
// searchInputBox.className = 'search-input';
// searchInputBox.type = 'number';
// searchInputBox.name = 'number';
// searchInputBox.placeholder = 'SearchID';

// const sdropDown = document.createElement('span');
// sdropDown.className = 'drop-down';
// const sdropDownImg = document.createElement('img');
// sdropDownImg.className = 'drop-down-icon';
// sdropDownImg.src = './assets/images/dropdwn.png';

// p3Container.appendChild(findPartnerBar);
// findPartnerBar.appendChild(searchId);
// searchId.appendChild(searchIcon);
// searchIcon.appendChild(searchIconImg);
// searchId.appendChild(searchInput);
// searchInput.appendChild(searchInputBox);
// searchId.appendChild(sdropDown);
// sdropDown.appendChild(sdropDownImg);

// // age
// const age = document.createElement('div');
// age.className = 'age';

// const ageIcon = document.createElement('span');
// ageIcon.className = 'age-span';
// const ageIconImg = document.createElement('img');
// ageIcon.class = 'age-icon';
// ageIconImg.src = '/assets/images/person.png';

// const ageInput = document.createElement('span');
// ageInput.className = 'age-input-span';
// const ageInputBox = document.createElement('input');
// ageInputBox.className = 'age-input';
// ageInputBox.type = 'text';
// ageInputBox.name = 'Age';
// ageInputBox.placeholder = 'Age';

// const adropDown = document.createElement('span');
// adropDown.className = 'drop-down';
// const adropDownImg = document.createElement('img');
// adropDownImg.className = 'drop-down-icon';
// adropDownImg.src = './assets/images/dropdwn.png';

// findPartnerBar.appendChild(age);
// age.appendChild(ageIcon);
// ageIcon.appendChild(ageIconImg);
// age.appendChild(ageInput);
// ageInput.appendChild(ageInputBox);
// age.appendChild(adropDown);
// adropDown.appendChild(adropDownImg);

// // Gender
// const gender = document.createElement('div');
// gender.className = 'gender';

// const genderIcon = document.createElement('span');
// genderIcon.className = 'gender-icon-span';
// const genderIconImg = document.createElement('img');
// genderIcon.class = 'gender-icon';
// genderIconImg.src = '/assets/images/gender-symbol.png';

// const genderInput = document.createElement('span');
// genderInput.className = 'gender-input-span';
// const genderInputBox = document.createElement('input');
// genderInputBox.className = 'gender-input';
// genderInputBox.type = 'text';
// genderInputBox.name = 'Gender';
// genderInputBox.placeholder = 'Gender';

// const gdropDown = document.createElement('span');
// gdropDown.className = 'drop-down';
// const gdropDownImg = document.createElement('img');
// gdropDownImg.className = 'drop-down-icon';
// gdropDownImg.src = './assets/images/dropdwn.png';

// findPartnerBar.appendChild(gender);
// gender.appendChild(genderIcon);
// genderIcon.appendChild(genderIconImg);
// gender.appendChild(genderInput);
// genderInput.appendChild(genderInputBox);
// gender.appendChild(gdropDown);
// gdropDown.appendChild(gdropDownImg);

// // search button
// const partnerSearch = document.createElement('div');
// const partnerSearchButton = document.createElement('button');

// partnerSearch.className = 'partner-search';
// partnerSearchButton.className = 'search-partner-button';
// partnerSearchButton.textContent = 'Search';

// findPartnerBar.appendChild(partnerSearch);
// partnerSearch.appendChild(partnerSearchButton);

// // partner bar
// const samplePartner = document.createElement('div');
// samplePartner.className = 'sample-partner';
