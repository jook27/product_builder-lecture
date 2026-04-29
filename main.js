document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const numbersContainer = document.getElementById('lotto-numbers');
  const numberSpans = numbersContainer.querySelectorAll('.number');
  const themeBtn = document.getElementById('theme-btn');
  const body = document.body;

  // Theme logic
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '라이트 모드';
  }

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeBtn.textContent = isDark ? '라이트 모드' : '다크 모드';
  });

  function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b);
  }

  function getColor(num) {
    if (num <= 10) return '#fbc400'; // Yellow
    if (num <= 20) return '#69c8f2'; // Blue
    if (num <= 30) return '#ff7272'; // Red
    if (num <= 40) return '#aaa';    // Grey
    return '#b0d840';                // Green
  }

  generateBtn.addEventListener('click', () => {
    const newNumbers = generateLottoNumbers();
    
    numberSpans.forEach((span, index) => {
      const num = newNumbers[index];
      span.textContent = num;
      span.classList.add('active');
      span.style.backgroundColor = getColor(num);
    });
  });
});
