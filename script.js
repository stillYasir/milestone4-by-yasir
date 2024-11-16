var _a;
// for element listinig:
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion 
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        // for output:
        var resumeOutput = "\n    <h2>Resume :</h2>\n    <p><strong>NAME :</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span></p>\n    <p><strong>EMAIL :</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>NUMBER :</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n\n    <h3>EDUCATION</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>SKILLS</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n    <h3>EXPERIENCE</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("resume Output element not found");
        }
    }
    else {
        console.error('one or more elements not found');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace element
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editable-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent + input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
