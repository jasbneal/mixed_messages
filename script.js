/* Mixed Messages is a program that generates a random inspiration message 
for a founder when it runs. */

const inspo1 = ['A', 'B', 'C', 'D', 'E'];
const inspo2 = [1, 2, 3, 4, 5];
const inspo3 = ['@', '$', '#', '^', '+'];

const printRandomMessage = (list1, list2, list3) => {
    let selection1 = Math.floor((Math.random() * list1.length));
    let selection2 = Math.floor((Math.random() * list2.length));
    let selection3 = Math.floor((Math.random() * list3.length));
    console.log(list1[selection1]);
    console.log(list2[selection2]);
    console.log(list3[selection3]);
}

printRandomMessage(inspo1, inspo2, inspo3);