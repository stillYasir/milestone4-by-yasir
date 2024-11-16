// for element listinig:
document.getElementById("resume-form")?.addEventListener("submit", function (event) {
    event.preventDefault();



    // type assertion 
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement= document.getElementById("email")as HTMLInputElement;
    const phoneElement = document.getElementById("phone")as HTMLInputElement;
    const educationElement = document.getElementById("education")as HTMLInputElement;
    const skillsElement = document.getElementById("skills")as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;


    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
    


    // for output:
    const resumeOutput = `
    <h2>Resume :</h2>
    <p><strong>NAME :</strong> <span id="edit-name" class="editable"> ${name} </span></p>
    <p><strong>EMAIL :</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
    <p><strong>NUMBER :</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>

    <h3>EDUCATION</h3>
    <p id="edit-education" class="editable">${education}</p>

    <h3>SKILLS</h3>
    <p id="edit-skills" class="editable">${skills}</p>

    <h3>EXPERIENCE</h3>
    <p id="edit-experience" class="editable">${experience}</p>
    `;


    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement){
        resumeOutputElement.innerHTML= resumeOutput;
        makeEditable();
    }else {
        console.error("resume Output element not found");
    } 

    }
    else{
        console.error('one or more elements not found');
    }


})


function makeEditable (){
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener("click", function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";



            // replace element
            if (currentElement.tagName=== "P" || currentElement.tagName=== "SPAN"){
                const input = document.createElement("input")
                input.type = "text"
                input.value = currentValue
                input.classList.add("editable-input")


                input.addEventListener("blur", function () {
                    currentElement.textContent + input.value;
                    currentElement.style.display="inline";
                    input.remove();
                })




                currentElement.style.display= "none"
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
    })
    })
}