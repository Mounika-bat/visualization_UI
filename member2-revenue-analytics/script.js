const filter = document.getElementById("timeFilter");

const totalRevenue = document.getElementById("totalRevenue");
const monthlyRevenue = document.getElementById("monthlyRevenue");

filter.addEventListener("change", function () {

    if (this.value === "month") {

        totalRevenue.textContent = "$245,800";
        monthlyRevenue.textContent = "$42,500";

    }

    if (this.value === "quarter") {

        totalRevenue.textContent = "$685,400";
        monthlyRevenue.textContent = "$228,466";

    }

    if (this.value === "year") {

        totalRevenue.textContent = "$2,845,600";
        monthlyRevenue.textContent = "$237,133";

    }

});