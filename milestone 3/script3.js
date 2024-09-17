"use strict";
//get references to the form and display area
const form = document.getElementById("Resumeform");
const resumedisplayElement = document.getElementById("resume-display");
//handle form submision
form.addEventListener("submit", (event) => {
    event.preventDefault(); //prevent page reload
    //get form data,cllect input values
    const formData = new FormData(form);
    const name = document.getElementById("name").value;
    const Phone = document.getElementById("phone").value;
    const EmailAddress = document.getElementById("email").value;
    const education = document.getElementById("educ").value;
    const experience = document.getElementById("exp").value;
    const Skills = document.getElementById("skill").value;
    //generate resume dynamically
    const resumeHTML = `
    <h2><b>RESUME</b></h2>    
   <h3><b>Personal information</b></h3>
   <p><b>Name:</b> ${name}</p>
   <p><b>Phone:</b> ${Phone}</p>
   <p><b>Email:</b> ${EmailAddress}</p>

   <h3><b>Education</b></h3>
   <p>${education}</p>

   <h3><b>Experience</b></h3>
   <p>${experience}</p>

   <h3><b>Skills</b></h3>
   <p>${Skills}</p>
   `;
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("resume display element not found");
    }
});
