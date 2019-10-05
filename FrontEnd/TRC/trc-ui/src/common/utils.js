function getRandomNumber(){
    let randomNumberLessThan10 = Math.floor(Math.random() * 10);
    return Number(randomNumberLessThan10) > 0 ? randomNumberLessThan10 : 0 - randomNumberLessThan10;
}

export default getRandomNumber;