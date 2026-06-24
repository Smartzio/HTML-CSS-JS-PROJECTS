//Check local storage and OS preferences immediately
const storedTheme = localStorage.getItem('theme');
const systemPreferDark = window.matchMedia('prefers-color-scheme: dark').matches;

if (storedTheme === 'dark' || (!storedTheme && systemPreferDArk)) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

/** USING TENARY OPERATION RATHER
(storedTheme === 'dark' || (!storedTheme && systemPrefersDark))
    ? document.documentElement.setAttribute('data-theme', 'dark')
    : null;
**/

//Grab elements by Id and grab root element <html>
const toggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Function to update button text on click only based on the current theme
function updateBtnTxt() {
  const currentTheme = rootElement.getAttribute('data-theme');
  toggleBtn.textContent = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}
updateBtnTxt(); // Call the function to set the initial button text

toggleBtn.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme'); //Check the current theme
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; //Determine the new theme
  rootElement.setAttribute('data-theme', newTheme); // Apply the new theme to the HTML element
  localStorage.setItem('theme', newTheme); // Save the user's manual choice to local storage
  updateBtnTxt(); // Update the button UI
});


