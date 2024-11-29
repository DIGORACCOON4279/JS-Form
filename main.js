
// // 1.Setup Lo da LeWagon

// // 2. Define variables

// // const numberOfDays = 0;
// const numberOfDays = inputDays.value;
// console.log(numberOfDays);

// const  pricePerDay = 15;
// console.log(pricePerDay);

// // const total = numberOfDays * pricePerDay;
// console.log(total);

// // 3. Conditional

// const withAccess = checkboxAccess.checked;
// let total = 0;

// if (withAccess) {
//     total = numberOfDays * (pricePerDay * 10)
//     console.log(total);
// }
// else {
//     total = numberOfDays * pricePerDay;
//     console.log(total);
// }

// // 4. DOM Interaction

// const inputDays = document.querySelector("#days");   // another way is with .form-control
// const checkboxAccess = document.querySelector("#meetingRooms");
// const elementTotal = document.querySelector("#total-price");

// // 5. Listeners

// inputDays.addEvenListener('change', () => {
//     alert('This will run only once.');
// });
// checkboxAccess.addEvenListener('change', () => {
//     alert('This will run only once.');
// });

// // Es lo mismo

// inputDays.addEventListener("change", () => console.log("I updated the form"));
// checkboxAccess.addEventListener("change", () =>	console.log("I updated the form"));

const inputDays = document.querySelector("#days");   // another way is with .form-control
const checkboxAccess = document.querySelector("#meetingRooms");
const elementTotal = document.querySelector("#total-price");

const calculateTotal = () => {
    let total = 0;
    const pricePerDay = 15;
    const priceFixedMeetingRoom = 10;

    const numberOfDays = inputDays.value;
    const withAccess = checkboxAccess.checked;

    if (withAccess) {
        total = numberOfDays * (pricePerDay + priceFixedMeetingRoom);
        console.log(total); // Testing
    } else {
        total = numberOfDays * pricePerDay;
        console.log(total); // Testing
    }

    // Changing DOM
    elementTotal.innerText = `${total}€`;
    elementTotal.style.color = "black";
}

// inputDays.addEventListener("change", () => {
//     calculateTotal()
// });
// checkboxAccess.addEventListener("change", () => {
//     calculateTotal()
// });

// elementTotal.addEventListener("click", () => {
//     calculateTotal()
// });

// Arrow function using onchange
inputDays.onchange = (e) => {
    calculateTotal(e)
};
checkboxAccess.onchange = (e) => {
    calculateTotal(e)
};
