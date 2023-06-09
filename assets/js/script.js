// Country Phone Code with Flag JavaScript Code

var countryData = window.intlTelInputGlobals.getCountryData(),
input = document.querySelector("#phone"),
addressDropdown = document.querySelector("#address-country");

// init plugin
var iti = window.intlTelInput(input, {
hiddenInput: "full_phone",
utilsScript:
  "https://intl-tel-input.com/node_modules/intl-tel-input/build/js/utils.js?1549804213570",
});

// populate the country dropdown
for (var i = 0; i < countryData.length; i++) {
var country = countryData[i];
var optionNode = document.createElement("option");
optionNode.value = country.iso2;
var textNode = document.createTextNode(country.name);
optionNode.appendChild(textNode);
addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener("countrychange", function (e) {
addressDropdown.value = iti.getSelectedCountryData().iso2;
});

// listen to the address dropdown for changes
addressDropdown.addEventListener("change", function () {
iti.setCountry(this.value);
});
