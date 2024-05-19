
function createUserProfiles(originalNames, modifiedNames) {
  if (originalNames.length !== modifiedNames.length) {
    throw new Error("Both arrays must have the same length");
  }

  const userProfiles = [];

  for (let i = 0; i < originalNames.length; i++) {
    const userProfile = {
      originalName: originalNames[i],
      modifiedName: modifiedNames[i],
      id: i + 1 
    };
    userProfiles.push(userProfile);
  }
  

  return userProfiles;
}


const originalNames = ['Junior', 'Andy', 'Eugene', 'Kelvin', 'Joe'];
const modifiedNames = ['junior', 'ANDY', 'eugene', 'KELVIN', 'joe'];

const profiles = createUserProfiles(originalNames, modifiedNames);
console.log(profiles);

