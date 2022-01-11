function scuberGreetingForFeet(someAmount) {
  // Write your code here!

  if (someAmount <= 400) {
    return 'This one is on me!'
  } else if (someAmount > 2000 && someAmount < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (someAmount > 2500) {
    return 'No can do.'
  }

}

function ternaryCheckCity(someCity) {
  // Write your code here!
  return someCity === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(someTip) {
  // Write your code here!
  switch (someTip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}