function numGenerator() {
    let randomNum = '';
    while (randomNum.length < 4) {
      const digit = Math.floor(Math.random() * 10);
      if (!randomNum.includes(digit)) {
        randomNum += digit;
      }
    }
    return randomNum;
  }
  export default numGenerator