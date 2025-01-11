let card1 = document.querySelector("button")
card1.id = "card1"
function d() {
    card1.style.backgroundColor = "orange"
    card1.style.display = "inline-block"
    card1.innerHTML = `<img src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg" width="340"/>
    <img src="https://img.freepik.com/free-photo/books-with-graduation-cap-digital-art-style-education-day_23-2151164325.jpg" width="340" />
        <p>This  book is for education</p>
        <h5>Book</h5>
        <button>BuyNow</button>`
}
const newCard = document.createElement("div")
newCard.style.border = "2px solid black"
newCard.style.display = "inline-block"
newCard.style.gap = "10px"
newCard.innerHTML = `<img src="https://static.vecteezy.com/system/resources/thumbnails/007/126/175/small/glowing-lightbulb-with-virtual-brain-on-open-book-and-connection-line-for-reading-and-education-make-smart-or-creative-thinking-idea-concept-photo.jpg" width="330"/>
    <p>Importance of education for professional growth</p>
    <button>Read more</button>
`
document.body.appendChild(newCard)

const newCard1 = document.createElement("div")
newCard1.style.border = "2px solid black"
newCard1.style.display = "inline-block"
newCard1.style.padding = "10px"
newCard1.style.marginLeft = "15px"
newCard1.innerHTML = `<img src="https://www.ecoleglobale.com/blog/wp-content/uploads/2022/08/importance-of-education-for-professional-growth.png" width="330"/>
<p>The world theory</p>
<button>Buy now</button>`
document.body.appendChild(newCard1)