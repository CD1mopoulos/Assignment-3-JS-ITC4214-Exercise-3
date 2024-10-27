let names = [];

function addName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    
    if (name) {
        names.push(name);
        names.sort(); // Sort the names in ascending order
        updateNameList();
        nameInput.value = ""; // Clear input field
    }
}

// Update displayed name list
function updateNameList() {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = ""; // Clear the list

    // Display each name in the sorted order
    names.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
}

// Add "Enter" key event listener
document.getElementById("nameInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        addName();              // Call the function to add name
    }
});
