# Mixed Messages Project

## 👋🏾 Introduction

Being a founder is hard and sometimes you need inspiration. The Mixed Messages project generates random
inspirational messages to help generate motivation throughout the startup journey. The message is displayed in the terminal and is comprised of: 
+ a quote from a notable founder or CEO
+ a health/wellness tip
+ a recommended reading taken from Paul Graham's startup/founder focused essays

![image](https://github.com/jasbneal/mixed_messages/blob/main/Screen%20Shot%202021-04-29%20at%208.43.00%20PM.png?raw=true)

--------------------------
## 🛠 Functionality

The message components are stored in the `messageComponents` object. The keys refer to arrays or nested arrays as values.

```javascript
const messageComponents = {
    'inspoQuotes': [
        ['Larry Page, Google co-founder', "Always deliver more than expected."], cont.
    ]
    'healthTips': ['make sure you drink 2L of water daily', cont.],
    'paulGrahamEssays': ['Billionaires Build', cont.]

```

The random index of the array = Math.floor method * length of array then rounded down to the nearest whole number.

`let selection1 = Math.floor((Math.random() * obj['inspoQuotes'].length))`

`A helpful quote from ' + obj['inspoQuotes'][selection1][0] + ': ' + '"' +
obj['inspoQuotes'][selection1][1]`

-----------------------

## 💻 Technologies
+ git version 2.24.3
+ node version 14.16.1


-----------------------

## 🍾 Launch
+ Clone the repo. In the terminal enter `$ git clone https://github.com/jasbneal/mixed_messages.git` and press Enter to create your local clone.
+ Use the `$ node script.js` command in the terminal/command line to run the program 