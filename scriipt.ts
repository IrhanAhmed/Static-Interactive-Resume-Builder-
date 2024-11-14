const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('Skill') as HTMLElement;

// Initially hide the skills section
skills.style.display = 'none';

toggleButton.addEventListener('click', () => {
  if (skills.style.display === 'none' || skills.style.display === '') {
    skills.style.display = 'block';
  } else {
    skills.style.display = 'none';
  }
});
