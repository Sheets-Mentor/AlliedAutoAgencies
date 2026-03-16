function calculateYears() {
    let current = parseFloat(document.getElementById("currentSalary").value);
    let hike = parseFloat(document.getElementById("hikePercent").value);
    let desired = parseFloat(document.getElementById("desiredSalary").value);

    if (!current || !hike || !desired || current <= 0 || desired <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    let growthFactor = 1 + (hike / 100);
    let years = Math.log(desired / current) / Math.log(growthFactor);
    let roundedYears = years.toFixed(2);

    document.getElementById("result").innerHTML =
        "Years Required: <b>" + roundedYears + "</b>";
}