// JavaScript to add more education entries
document.getElementById("addEducation").addEventListener("click", function() {
  const educationForm = document.getElementById("educationForm");
  const educationEntryTemplate = document.querySelector(".education-entry");

  // Clone the template
  const newEducationEntry = educationEntryTemplate.cloneNode(true);

  // Insert the new entry above the footer buttons
  educationForm.insertBefore(newEducationEntry, educationForm.lastElementChild);

  // Clear input fields in the cloned entry
  newEducationEntry.querySelectorAll("input").forEach(input => {
    input.value = "";
  });
});

//=== ADD MORE SKILLS
document.getElementById("addSkill").addEventListener("click", function() {
  const skillEntryTemplate = document.querySelector(".skill-entry");
  const skillForm = document.getElementById("skillForm");

  // Clone the template and append it to the skills container
  const newSkillEntry = skillEntryTemplate.cloneNode(true);

  skillForm.insertBefore(newSkillEntry, skillForm.lastElementChild);

  // Clear input fields in the cloned entry
  newSkillEntry.querySelectorAll("input").forEach(input => {
    input.value = "";
  });
});
