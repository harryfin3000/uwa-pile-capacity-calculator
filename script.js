function openTab(tabName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Open the first tab by default
document.addEventListener('DOMContentLoaded', function() {
    openTab('driven');
});

// Add your calculation functions here for each type of pile
function calculateDrivenPileCapacity() {
    // Implement calculation for driven piles
}

function calculateBoredPileCapacity() {
    // Implement calculation for bored/CFA piles
}

function calculateScrewPileCapacity() {
    // Implement calculation for screw piles
}