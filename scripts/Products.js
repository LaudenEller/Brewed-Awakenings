import { getProducts } from "./database.js"

const products = getProducts()

// add event listener to document
document.addEventListener(
    // specify what event to listen for
    "click",
    // declare a function that accepts the new event as input
    (clickEvent) => {
        // store the event in a new variable
        const itemClicked = clickEvent.target
        // add conditional if the thing clicked on is "child"
        if (itemClicked.id.startsWith("product")) {
            // create an array to store the walker id of the item clicked
            const [, productId] = itemClicked.id.split("--")
            // iterate through the walkers array from line 29
            for (const product of products) {
                // add a conditional that looks for a match between the integer ids on walkers to the walker id on array from line 15
                if (product.id === parseInt(productId)) {
                    // click event creates new window that displays the walker's name and names of the cities they walk in
                    window.alert(`${product.name} cost ${product.price}`)
                }
            }
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}