let users = 1248;
let orders = 86;
let revenue = 8420;
let conversion = 6.8;

const liveUsers = document.getElementById("liveUsers");
const liveOrders = document.getElementById("liveOrders");
const liveRevenue = document.getElementById("liveRevenue");
const liveConversion = document.getElementById("liveConversion");

function updateDashboard() {

    users += Math.floor(Math.random() * 21) - 10;

    if (users < 1000) {
        users = 1000;
    }

    orders += Math.floor(Math.random() * 5);

    revenue += Math.floor(Math.random() * 500);

    conversion = (Math.random() * 2 + 5).toFixed(1);

    liveUsers.textContent =
        users.toLocaleString();

    liveOrders.textContent =
        orders.toLocaleString();

    liveRevenue.textContent =
        "$" + revenue.toLocaleString();

    liveConversion.textContent =
        conversion + "%";

}

setInterval(updateDashboard, 3000);