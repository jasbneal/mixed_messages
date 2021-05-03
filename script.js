/* Mixed Messages is a program that generates a random inspiration message 
for a founder when it runs. The message is comprised of a quote, health/wellness 
tip and the title of one of Paul Graham's startup essays. */

// messageComponents is an obj with 3 properties: inspoQuotes, healthTips and paulGrahamEssays
const messageComponents = {
    // inspoQuotes is a nested array with the source of the quote at i=0 and the quote at i=1
    'inspoQuotes': [
        {
            'name': 'Larry Page',
            'title': 'Google co-founder', 
            'quote': "Always deliver more than expected."
        },
        {
            'name':'Garrett Camp',
            'title': 'Stumbleupon co-founder',
            'quote':"Stay self-funded as long as possible."
        },
        {
            'name': 'Guy Kawasaki',
            'title': 'AllTop co-founder',
            'quote': "Ideas are easy. Implementation is hard."
        },
        {
            'name': 'Bill Gates',
            'title': 'Microsoft co-founder',
            'quote': "Your most unhappy customers are your greatest source of learning."
        },
        {
            'name': 'Andrew Grove',
            'title': 'Intel co-founder',
            'quote': "Make mistakes faster."
        },
        {
            'name': 'Rob Kalin',
            'title': 'Etsy co-founder',
            'quote': "Stay hungry. And bootstrap."
        },
        {
            'name': 'Drew Houston',
            'title': 'Dropbox co-founder',
            'quote': "Learn early. Learn often."
        },
        {
            'name': 'Joel Spolsky',
            'title': 'Stack Exchange CEO',
            'quote': "Every day spent not improving your product is a wasted day."
        },
        {
            'name': 'Biz Stone',
            'title': 'Twitter co-founder',
            'quote': "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success."
        },
        {
            'name': 'Tom Preston-Werner',
            'title': 'Github co-founder',
            'quote': "When I'm old and dying, I plan to look back on my life and say 'wow that was an adventure,' not 'wow, I sure felt safe.'"
        },
        {
            'name': 'Spencer Fry',
            'title': 'CarbonMade, co-founder',
            'quote': "No more romanticizing about how cool it is to be an entrepreneur. It's a struggle to save your company's life - and your own skin - every day of the week."
        },
        {
            'name': 'Marc Benioff',
            'title': 'Salesforce CEO',
            'quote': "The secret to successful hiring is this: look for the people who want to change the world."
        },
        {
            'name': 'Michael Dell',
            'title': 'Dell Chairman and CEO',
            'quote': "Data beats emotions."
        },
        {
            'name': 'Reid Hoffman',
            'title': 'LinkedIn co-founder',
            'quote': "If you are not embarassed by the first version of your product, you've launched too late."
        },
        {
            'name': 'Steve Case',
            'title': 'AOL co-founder',
            'quote': "In the end, a vision without the ability to execute it is probably a hallucination."
        },
        {
            'name': 'Howard Schultz',
            'title': 'Starbucks CEO',
            'quote': "Risk more than others think is safe. Dream more than others think is practical."
        },
        {
            'name': 'Fred Wilson',
            'title': 'Union Square Ventures co-founder',
            'quote': "A person who is quietly confident makes the best leader."
        },
        {
            'name': 'Steve Jobs',
            'title': 'Apple Inc. co-founder',
            'quote': "Design is not just what it looks like and feels like. Design is how it works."
        }
    ],
    // healthTips is an array of strings re: general health reminders
    'healthTips': ['make sure you drink 2L of water daily', "go for a shoft walk", "get 8 hours of sleep daily", 
        "meditate for 5-10 minutes",],
    // paulGrahamEssays is an array of essay titles re: startups and building
    'paulGrahamEssays': ['Billionaires Build', 'How to Think for Yourself', 'Early Work', 
        "What Doesn't Seem Like Work?", 'Before the Startup', "Do Things that Don't Scale",
        "The Hardware Renaissance", 'Startup = Growth', 'A Word to be Resourceful',
    '   Why Startup Hubs Work', 'Founder Control', 'Keep Your Identity Small', 'Six Principles for Making New Things']
}

// function that takes in an obj as an arg, creates random selections indexes for the arrays and uses
// the indexes to generate a random message
const printRandomMessage = obj => {
    let selection1 = Math.floor((Math.random() * obj['inspoQuotes'].length))
    let selection2 = Math.floor((Math.random() * obj['healthTips'].length));
    let selection3 = Math.floor((Math.random() * obj['paulGrahamEssays'].length));
    return `\n\nBeing a founder is hard and sometimes a little inspiration goes a long way.` + 
    `\n\nA helpful quote from  ${obj['inspoQuotes'][selection1]['name']}, ${obj['inspoQuotes'][selection1]['title']}:
"${obj['inspoQuotes'][selection1]['quote']}" \n\nIf you need more insight,` + 
` read "${obj['paulGrahamEssays'][selection3]}" by Paul Graham but remember, 
building a company is a marathon, not a sprint. So... ${obj['healthTips'][selection2]}.`
}

console.log(printRandomMessage(messageComponents))
