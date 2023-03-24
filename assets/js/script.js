const loginClick = document.querySelector('#login');
const hideL = document.querySelector('.login-page');

loginClick.addEventListener('click', () => {
  hideL.classList.toggle('click');
});

const signupClick = document.querySelector('#signin-click');
const hideS = document.querySelector('.signup-page');

signupClick.addEventListener('click', () => {
  hideS.classList.toggle('sclick');
});

const profiles = [
  {
    id: 1,
    image: 'https://github.com/Shrivardhan09/Project-M/blob/main/assets/images/v.png?raw=true',
    name: 'Shrivardhan',
    location: 'Hyderabad, Telangana',
  },
  {
    id: 2,
    image: 'https://github.com/Shrivardhan09/Project-M/blob/main/assets/images/v.png?raw=true',
    name: 'Shrivardhan',
    location: 'Hyderabad, Telangana',
  },
  {
    id: 3,
    image: 'https://github.com/Shrivardhan09/Project-M/blob/main/assets/images/v.png?raw=true',
    name: 'Shrivardhan',
    location: 'Hyderabad, Telangana',
  },
  {
    id: 4,
    image: 'https://github.com/Shrivardhan09/Project-M/blob/main/assets/images/v.png?raw=true',
    name: 'Shrivardhan',
    location: 'Hyderabad, Telangana',
  },
];

// eslint-disable-next-line no-unused-vars
const jsonProfiles = JSON.stringify(profiles);

const samplePartners = document.getElementById('profiles');

for (let i = 0; i < profiles.length; i++) {
  const len = profiles[i];

  const partnerProfiles = document.createElement('div');
  partnerProfiles.className = 'partner-profile';
  partnerProfiles.id = 'partner-profiles';

  const profilePic = document.createElement('div');
  profilePic.className = 'profile-pic';

  const picP = document.createElement('img');
  picP.className = 'profile-img';
  picP.src = len.image;
  profilePic.appendChild(picP);

  const profileName = document.createElement('div');
  profileName.className = 'profile-name';

  const nameP = document.createElement('h3');
  nameP.className = 'name-p';
  nameP.textContent = len.name;

  profileName.appendChild(nameP);

  const profileLocation = document.createElement('div');
  profileLocation.className = 'profile-location';

  const locationP = document.createElement('p');
  locationP.className = 'location-p';
  locationP.textContent = len.location;
  profileLocation.appendChild(locationP);
  partnerProfiles.appendChild(profilePic);
  partnerProfiles.appendChild(profileName);
  profileName.appendChild(profileLocation);

  samplePartners.append(partnerProfiles);
}
