function dark() {
  
    let darkMode = document.querySelector('.dark');
    if (darkMode.style.backgroundColor === 'black' && darkMode.style.color === 'white') {
      darkMode.style.backgroundColor = 'white';
      darkMode.style.color = 'black';
      alert("light mode")
    } else {
      darkMode.style.backgroundColor = 'black';
      darkMode.style.color = 'white';
      alert("dark mode")
    }
  }