const showTheme = () => {
  const toggle = document.getElementById("theme-toggle");

  let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  console.log(storedTheme);
  if (storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)


  toggle.onclick = () => {
      let currentTheme = document.documentElement.getAttribute("data-theme");
      let targetTheme = "light";
      
      if (currentTheme === "light") {
          targetTheme = "dark";
      } 
      document.documentElement.setAttribute('data-theme', targetTheme)
      localStorage.setItem('theme', targetTheme);
  }
}

const showContent = () => {
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
}


  // listen to the DOM content loaded or not?
window.addEventListener('DOMContentLoaded', (event) => {
  showTheme();
  showContent();
});



