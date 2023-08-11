// Modulo, retourne le reste de la division

const peopleParty = 10
const pizzaAtParty = 3
const sliceLeftOver = peopleParty % pizzaAtParty

console.log('Il reste ', sliceLeftOver, 'part(s) de pizza' )

// How to add one at the number
let currentWebsiteViews =  1000
currentWebsiteViews += 1
console.log('currentWebsite views est égal à 1001 -> ', currentWebsiteViews)
currentWebsiteViews ++
console.log('currentWebsite views est égal à 1002 -> ', currentWebsiteViews)

// I have 12 cookies, I break each by 3, how muck cookie piece I have ?
let cookieInJar = 12
cookieInJar *= 3
console.log("J'ai actuellement", cookieInJar, "dans ma boîte")

// I have one book with 200 pages, I would like to read this book in 5 days, how much need to read pages by days ?
let pageNeedToRead = 200
pageNeedToRead /= 5
console.log('Je dois lire', pageNeedToRead, 'pages par jour')

// I Have 25 tickets, I would like distribute this tickets between 4 friends. How much tickets can-t give ?
let concertTickets = 25
concertTickets %= 4
console.log('Il me sera impossible de donner', concertTickets, "ticket(s) de concert")

let baseNumber = 2
baseNumber **= 4 // 2 x 2 x 2 x 2
console.log("Mon résultat final est de", baseNumber)