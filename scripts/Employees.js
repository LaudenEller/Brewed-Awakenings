import { getEmployees, getOrders } from "./database.js"
import { Orders } from "./Orders.js"

const employees = getEmployees()
const orders = getOrders()


const employeeOrders = (employee) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            fulfilledOrders++
        }
    }
return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(employee)

                    window.alert(` ${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)

// // add event listener to document
// document.addEventListener(
//     // specify what event to listen for
//     "click",
//     // declare a function that accepts the new event as input
//     (clickEvent) => {
//         // store the event in a new variable
//         const itemClicked = clickEvent.target
//         // else the thing clicked on is "celebrity"
//         if (itemClicked.id.startsWith("employee")) {
//             const [, employeeId] = itemClicked.id.split("--")
//             // iterate through the walkers array from line 29
//             for (const employee of employees) {
//                 if (employeeId === employee.id)
//                     // add a conditional that looks for a match between the integer ids on walkers to the walker id on array from line 15
//                     for (const order of orders) {
//                         let numOfOrders = null
//                         if (order.employeeId === employee.id) {
//                             numOfOrders += 1
//                         }
//                         window.alert(`${employee.name} sold ${numOfOrders}`)
//                     }
//             }
//         }
//     }
// )

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

