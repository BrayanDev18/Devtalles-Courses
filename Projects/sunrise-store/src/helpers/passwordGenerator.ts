type PasswordOptions = {
  length?: number;
  includeUppercase?: boolean;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
};

export const generatePassword = ({
  length = 13,
  includeUppercase = true,
  includeNumbers = true,
  includeSymbols = true,
}: PasswordOptions = {}): string => {

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = includeUppercase ? lowercaseChars.toUpperCase() : "";
  const numbers = includeNumbers ? "0123456789" : "";
  const symbols = includeSymbols ? "!@#$%^&*()_+-=[]{}|;':\"\\,.<>/?`~" : "";
  const allChars = lowercaseChars + uppercaseChars + numbers + symbols;

  if (allChars.length === 0) {
    throw new Error("At least one character type must be selected.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
};
