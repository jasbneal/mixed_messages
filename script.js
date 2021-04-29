/* Mixed Messages is a program that generates a random inspiration message 
for a founder when it runs. The message is comprised of a quote, health/wellness 
tip and the title of one of Paul Grahm's startup essays. */

// messageComponents is an obj with 3 properties: inspoQuotes, healthTips and paulGrahmEssays
const messageComponents = {
    // inspoQuotes is a nested array with the source of the quote at i=0 and the quote at i=1
    'inspoQuotes': [
        ['Larry Page, Google co-founder', "Always deliver more than expected."],
        ['Garrett Camp, Stumbleupon co-founder', "Stay self-funded as long as possible."],
        ['Guy Kawasaki, AllTop co-founder', "Ideas are easy. Implementation is hard."],
        ['Bill Gates, Microsoft co-founder', "Your most unhappy customers are your greatest source of learning."],
        ['Andrew Grove, Intel co-founder', "Make mistakes faster."],
        ['Rob Kalin, Etsy co-founder', "Stay hungry. And bootstrap."],
        ['Drew Houston, Dropbox co-founder', "Learn early. Learn often."],
        ['Joel Spolsky, Stack Exchange CEO', "Every day spent not improving your product is a wasted day."],
        ['Biz Stone, Twitter co-founder', "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success."],
        ['Tom Preston-Werner, Github co-founder', "When I'm old and dying, I plan to look back on my life and say 'wow that was an adventure,' not 'wow, I sure felt safe.'"],
        ['Spencer Fry, CarbonMade, co-founder', "No more romanticizing about how cool it is to be an entrepreneur. It's a struggle to save your company's life - and your own skin - every day of the week."],
        ['Marc Benioff, Salesforce CEO', "The secret to successful hiring is this: look for the people who want to change the world."],
        ['Michael Dell, Dell Chairman and CEO', "Data beats emotions."],
        ['Reid Hoffman, LinkedIn co-founder', "If you are not embarassed by the first version of your product, you've launched too late."],
        ['Steve Case, AOL co-founder', "In the end, a vision without the ability to execute it is probably a hallucination"],
        ['Howard Schultz, Starbucks CEO', "Risk more than others think is safe. Dream more than others think is practical."],
        ['Fred Wilson, Union Square Ventures co-founder', "A person who is quietly confident makes the best leader."],
        ['Steve Jobs, Apple Inc. co-founder', "Design is not just what it looks like and feels like. Design is how it works."],
    ],
    //
    'healthTips': ['make sure you drink 2L of water daily', "go for a shoft walk", "get 8 hours of sleep daily", 
        "meditate for 5-10 minutes",],
    'paulGrahamEssays': ['Billionaires Build', 'How to Think for Yourself', 'Early Work', 
        "What Doesn't Seem Like Work?", 'Before the Startup', "Do Things that Don't Scale",
        "The Hardware Renaissance", 'Startup = Growth', 'A Word to be Resourceful',
    '   Why Startup Hubs Work', 'Founder Control', 'Keep Your Identity Small', 'Six Principles for Making New Things']
}

const printRandomMessage = obj => {
    let selection1 = Math.floor((Math.random() * obj['inspoQuotes'].length))
    let selection2 = Math.floor((Math.random() * obj['healthTips'].length));
    let selection3 = Math.floor((Math.random() * obj['paulGrahamEssays'].length));
    return '\nBeing a founder is hard and sometimes a little inspiration goes a long way. \nA helpful quote from ' 
        + obj['inspoQuotes'][selection1][0] + ': ' + '"' +
        obj['inspoQuotes'][selection1][1] + '"\nIf you need more insight, read "' + obj['paulGrahamEssays'][selection3] +
        '" by Paul Graham but remember, building a company is a marathon, not a sprint. So... \n' + obj['healthTips'][selection2] + '.'
}

console.log(printRandomMessage(messageComponents));
