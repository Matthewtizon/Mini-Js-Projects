

const maskEmail = (email) => {
  // Find where the @ starts
  const atIndex = email.indexOf("@");

  // Extract username and domain
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  // Build masked username: first char + stars + last char
  const masked =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];

  return masked + domain;
};

// Example usage
const email = "apple.pie@example.com";
console.log(maskEmail(email)); 
// "a*******e@example.com"




