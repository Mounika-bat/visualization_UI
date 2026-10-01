const userFilter = document.getElementById("userFilter");

const totalUsers = document.getElementById("totalUsers");
const newUsers = document.getElementById("newUsers");
const activeUsers = document.getElementById("activeUsers");
const returningUsers = document.getElementById("returningUsers");

userFilter.addEventListener("change", function () {

    if (this.value === "month") {

        totalUsers.textContent = "18,450";
        newUsers.textContent = "3,250";
        activeUsers.textContent = "12,840";
        returningUsers.textContent = "8,420";

    }

    if (this.value === "quarter") {

        totalUsers.textContent = "51,200";
        newUsers.textContent = "9,850";
        activeUsers.textContent = "35,600";
        returningUsers.textContent = "22,400";

    }

    if (this.value === "year") {

        totalUsers.textContent = "215,600";
        newUsers.textContent = "48,500";
        activeUsers.textContent = "145,800";
        returningUsers.textContent = "92,300";

    }

});