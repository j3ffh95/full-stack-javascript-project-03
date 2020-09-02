const nameInput = document.getElementById("name");
const colorField = document.querySelector("#color");
const designSelectElement = document.querySelector("#design");
const activitiesFieldset = document.querySelector(".activities");
const colorLabelField = document.querySelector("#shirt-colors label");
const shirtColorOptions = document.querySelectorAll("#color option");
const otherInputField = document.querySelector("#other-title");
const selectOption = document.querySelector("#design option");
const colorOptionElements = document.querySelectorAll("#color option");
const shirtOptionElements = document.querySelectorAll("#design option");
const activityCheckboxes = document.querySelectorAll(".activities input");
// Focus to the name input on load
nameInput.focus();

// Hide the 'select theme' option
selectOption.hidden = true;

// Change the color label and hide the selected options
colorLabelField.innerText = "Please select a T-shirt theme";
colorField.hidden = true;

//Hide "job_role_other"
otherInputField.style.display = "none";

/***************************************************************************
 ******                      T-shirt Section                          ******
 ****************************************************************************/
const getTshirtSelection = (e) => {
  let value = e.target.value;
  // Change the color label to 'Color'
  colorLabelField.innerText = "Color:";
  // show the colorField
  colorField.hidden = false;
  //If user selects Puns then the heart options are hidden
  if (value === "js puns") {
    colorField.selectedIndex = "0";
    // loop through color and hide options whose text contains '♥'
    for (let i = 0; i < color.length; i++) {
      if (colorField.options[i].text.includes("♥")) {
        colorField.options[i].hidden = true;
      } else {
        colorField.options[i].hidden = false;
      }
    }
  }
  //If user selects the heart then the Puns options are hidden
  if (value === "heart js") {
    //since the value is heart js the we going to set the colorField to the 3rd index
    colorField.selectedIndex = "3";
    // loop through color and hide options whose text contains puns
    for (let i = 0; i < color.length; i++) {
      if (colorField.options[i].text.includes("Puns")) {
        colorField.options[i].hidden = true;
      } else {
        colorField.options[i].hidden = false;
      }
    }
  }
};

// Add event listener to the design select element
designSelectElement.addEventListener("change", getTshirtSelection);

/***************************************************************************
 ******                      Activity Section                          ******
 ****************************************************************************/

// Create a variable to store our newly created paragraph
const priceParagraph = document.createElement("p");
// Also a variable to store the total cost, we started with 0
let totalCost = 0;
// Appende the paragraph element to the activities fieldset element
activitiesFieldset.appendChild(priceParagraph);

// Add event listener to the activities fieldset
activitiesFieldset.addEventListener("change", (e) => {
  // A variable to set the target
  const clicked = e.target;
  // A time variable to store the current target date and time
  const time = clicked.getAttribute("data-day-and-time");
  // Another variable to store the cost of the target
  const cost = parseInt(clicked.getAttribute("data-cost"));

  // If the clicked checkbox is checked then add the cost to the totalCost subtract otherwise
  if (clicked.checked) {
    totalCost += cost;
  } else {
    totalCost -= cost;
  }
  // We iterate through the activity checkboxes to add some logic for disabling the checkboxes
  for (let i = 0; i < activityCheckboxes.length; i++) {
    // If the clicked time is the same as the current checkbox time and the current checkbox is not the one who got clicked,
    // then we go in another if statement to check if the current checkbox is checked or not, if it is then we disabled.
    if (
      time === activityCheckboxes[i].getAttribute("data-day-and-time") &&
      activityCheckboxes[i] !== clicked
    ) {
      if (clicked.checked) {
        activityCheckboxes[i].disabled = true;
      } else {
        activityCheckboxes[i].disabled = false;
      }
    }
  }
  // Finally we add the textContent to the price paragraph
  priceParagraph.textContent = `Total: $${totalCost}`;
});
// console.log(totalCost);
