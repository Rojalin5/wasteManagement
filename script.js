const statesGuidelines = [
    { state: "Maharashtra", guidelines: "Guidelines for proper segregation and disposal of waste...", link: "https://www.mpcb.gov.in/waste-management/municipal-solid-waste" },
    { state: "Kerala", guidelines: "Steps for composting organic waste and recycling...", link: "https://lsgkerala.gov.in/en/waste-management" },
    { state: "Tamil Nadu", guidelines: "Details on e-waste disposal and recycling wastes...", link: "http://tnenvis.nic.in/Database/Waste_1169.aspx" },
    { state: "Punjab", guidelines: "Instructions for agricultural and plastic waste management...", link: "https://ppcb.punjab.gov.in/en/waste-management" },
    { state: "Gujarat", guidelines: "Guidelines for industrial and household waste management...", link: "https://sbm-urban.gujarat.gov.in/Projects/solid-waste-management-program-4" },
    { state: "Rajasthan", guidelines: "Steps for managing water and biodegradable waste...", link: "https://environment.rajasthan.gov.in/content/environment/en/rajasthan-state-pollution-control-board/information/WasteManagement.html" },
    { state: "West Bengal", guidelines: "Information on solid waste management programs...", link: "https://www.wbwml.com/" },
    { state: "Uttar Pradesh", guidelines: "Details on recycling initiatives and hazardous waste disposal...", link: "https://urbandevelopment.up.nic.in/data/GO-2017/SWM-Policy-Eng.pdf" },
    { state: "Assam", guidelines: "Waste segregation and community waste management guidelines...", link: "https://pcb.assam.gov.in/portlets/waste-management" },
    { state: "Bihar", guidelines: "Guidelines on plastic waste minimization and recycling...", link: "https://vigyanvarta.in/adminpanel/upload_doc/VV_0524_20-.pdf" },
    { state: "Karnataka", guidelines: "Steps for municipal waste management and composting...", link: "https://kspcb.karnataka.gov.in/waste-management/municipal-solid-waste" },
    { state: "Odisha", guidelines: "Details on hazardous waste disposal and awareness programs...", link: "https://urban.odisha.gov.in/sites/default/files/2023-09/Decentralisedsolidwastemanagement.pdf" }
];

const statesContainer = document.getElementById("states-guidelines");
const showMoreContainer = document.getElementById("show-more-container");

let visibleStates = 6; // Show first 6 states initially

function displayGuidelines() {
    statesContainer.innerHTML = ""; // Clear previous content

    statesGuidelines.slice(0, visibleStates).forEach(({ state, guidelines, link }) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${state}</h2>
            <p>${guidelines}</p>
            <a href="${link}" target="_blank" class="learn-more">Learn More</a>
        `;
        statesContainer.appendChild(card);
    });

    // Add Show More button if there are more states to show
    if (visibleStates < statesGuidelines.length) {
        const showMoreBtn = document.createElement("button");
        showMoreBtn.textContent = "Show More";
        showMoreBtn.className = "show-more";
        showMoreBtn.addEventListener("click", () => {
            visibleStates += 6; // Show 6 more states
            displayGuidelines();
        });
        showMoreContainer.innerHTML = ""; // Clear existing Show More button
        showMoreContainer.appendChild(showMoreBtn);
    } else {
        showMoreContainer.innerHTML = ""; // Hide Show More button if all states are shown
    }
}

// Function to filter states based on user input
function filterStates() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    statesContainer.innerHTML = ""; // Clear previous results

    const filteredStates = statesGuidelines.filter(({ state }) =>
        state.toLowerCase().includes(searchInput)
    );

    filteredStates.forEach(({ state, guidelines, link }) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${state}</h2>
            <p>${guidelines}</p>
            <a href="${link}" target="_blank" class="learn-more">Learn More</a>
        `;
        statesContainer.appendChild(card);
    });

    showMoreContainer.innerHTML = ""; // Hide "Show More" when filtering
}

// Load states' guidelines on page load
window.onload = displayGuidelines;
