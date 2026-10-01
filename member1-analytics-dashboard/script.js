const period = document.getElementById("period");

const revenue = document.getElementById("revenue");
const users = document.getElementById("users");
const orders = document.getElementById("orders");
const conversion = document.getElementById("conversion");

period.addEventListener("change", function () {

    if (this.value === "month") {
        revenue.textContent = "$245,800";
        users.textContent = "18,450";
        orders.textContent = "5,280";
        conversion.textContent = "6.8%";
    }

    if (this.value === "quarter") {
        revenue.textContent = "$685,400";
        users.textContent = "51,200";
        orders.textContent = "15,840";
        conversion.textContent = "7.2%";
    }

    if (this.value === "year") {
        revenue.textContent = "$2,845,600";
        users.textContent = "215,600";
        orders.textContent = "68,400";
        conversion.textContent = "7.6%";
    }
});