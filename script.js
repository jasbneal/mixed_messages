/* Mixed Messages is a program that generates a random inspiration message 
for a founder when it runs. */

const messageComponents = {
    'inspo1': ['"Always deliver more than expected." -Larry Page, Google co-founder', 
    '"Stay self-funded as long as possible." -Garrett Camp, Stumbleupon co-founder ',
    '"Ideas are easy. Implementation is hard." -Guy Kawasaki, AllTop co-founder', 
    '"Your most unhappy customers are your greatest source of learning." -Bill Gates, Microsoft co-founer', 
    '"Make mistakes faster." -Andrew Grove, Intel co-founder', 
    '"Stay hungry. And bootstrap." -Rob Kalin, Etsy co-founder',
    '"Learn early. Learn often." -Drew Houston, Dropbox co-founder',
    '"Every day spent not improving your product is a wasted day." -Joel Spolsky, Stack Exchange CEO',
    '"Timing, perseverance, and ten years of trying will eventually make you look like an overnight success." -Biz Stone, Twitter co-founer'],
    'inspo2': [1, 2, 3, 4, 5],
    'inspo3': ['Billionaires Build', 'How to Think for Yourself', 'Early Work', 
    "What Doesn't Seem Like Work?", 'Before the Startup', "Do Things that Don't Scale",
    "The Hardware Renaissance", 'Startup = Growth', 'A Word to be Resourceful',
    'Why Startup Hubs Work', 'Founder Control', 'Keep Your Identity Small', 'Six Principles for Making New Things']
}

const printRandomMessage = obj => {
    let selection1 = Math.floor((Math.random() * obj['inspo1'].length));
    let selection2 = Math.floor((Math.random() * obj['inspo2'].length));
    let selection3 = Math.floor((Math.random() * obj['inspo3'].length));
    console.log(`Remember: ${obj['inspo1'][selection1]}`);
    console.log(obj['inspo2'][selection2]);
    console.log(`For insight read "${obj['inspo3'][selection3]}" by Paul Graham`);
}

printRandomMessage(messageComponents);