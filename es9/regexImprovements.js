/**
 *  Finally implementation, in promesis.
 * 
 */

 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const match = regexData.exec('2018-04-20');
 const year = match[1];
 const month = match[2];
 const day = match[3];

 // Match
 const regexDataTwo = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const dateStubTwo = '2018-04-20';
 const answerRegex = dateStubTwo.match(regexDataTwo);
 console.log(answerRegex);

 // Test
 const regexDataThree = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const dateStubThree = '2018-04-20';
 const answerRegexThree = regexDataThree.test(dateStubThree);
 console.log(answerRegexThree);


 console.log(match);
 console.log(year, month, day);