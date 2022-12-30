const palindromeChecker = (str) => {
  let temp = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    temp += str[i];
  }
  for (let i = 0; i < temp.length / 2; i++) {
    if (temp[i] != temp[temp.length - 1 - i]) return false;
  }
  return true;
};

module.exports = palindromeChecker;
