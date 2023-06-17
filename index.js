
const fullName = (firstName, lastName, age) => {
    if (firstName.length > 20) {
      console.log("სახელი დასაშვებზე მეტია");
    }
  
    if (lastName.length > 40) {
      console.log("გვარი დასაშვებზე მეტია");
    }
  
    if (age > 18) {
      const completeName = firstName + " " + lastName;
      console.log("გამარჯობა " + completeName);
    }
  };
  
  const firstName = "niko";
  const lastName = "bedineisvili";
  const age = 88;
  
  fullName(firstName, lastName, age);
  