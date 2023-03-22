const profiles = [
  {
    id: 1,
    image: '/assets/images/v.png',
    name: 'Shrivardhan',
    location: 'Hyderabad, Telangana',
  },
  {
    id: 2,
    image: '/assets/images/v.png',
    name: 'Shrivardhan',
    location: 'Hyderabad, Telangana',
  },
  {
    id: 3,
    image: '/assets/images/v.png',
    name: 'Shrivardhan',
    location: 'Hyderabad, Telangana',
  },
  {
    id: 3,
    image: '/assets/images/v.png',
    name: 'Shrivardhan',
    location: 'Hyderabad, Telangana',
  },
];
const jsonProfiles = JSON.stringify(profiles);
console.log(jsonProfiles);

const samplePartners = document.getElementById('profiles');

for (let i = 0; i < profiles.length; i++) {
  const len = profiles.length;

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

  const locationP = document.createElement('h4');
  locationP.className = 'location-p';
  locationP.textContent = len.location;

  profileLocation.appendChild(locationP);

  partnerProfiles.appendChild(profilePic);
  partnerProfiles.appendChild(profileName);
  partnerProfiles.appendChild(profileLocation);

  samplePartners.append(partnerProfiles);
}
