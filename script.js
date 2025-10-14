document.addEventListener('DOMContentLoaded', function () {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  themeToggleBtn.addEventListener('click', function () {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
      themeIcon.src = 'icons/dark-theme-icon.svg';
      themeIcon.alt = 'dark theme';
    } else {
      themeIcon.src = 'icons/light-theme-icon.svg';
      themeIcon.alt = 'light theme';
    }
  });
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

const form = document.querySelector('.footer-form');
const username = form.querySelector('#username');
const email = form.querySelector('#email');
const message = form.querySelector('#text');

function isValidEmail(emailValue) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailValue);
}

function isValidName(nameValue) {
  const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s]{2,30}$/;
  return namePattern.test(nameValue.trim());
}

function validateField(field) {
  const value = field.value.trim();

  if (!value) {
    field.style.borderColor = 'red';
    return false;
  }

  if (field.id === 'email' && !isValidEmail(value)) {
    field.style.borderColor = 'red';
    return false;
  }

  if (field.id === 'username' && !isValidName(value)) {
    field.style.borderColor = 'red';
    return false;
  }

  field.style.borderColor = '';
  return true;
}

[username, email, message].forEach(field => {
  field.addEventListener('input', () => validateField(field));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isUsernameValid = validateField(username);
  const isEmailValid = validateField(email);
  const isMessageValid = validateField(message);

  if (isUsernameValid && isEmailValid && isMessageValid) {
    alert('Form submitted successfully!');
    form.reset();
  } else {
    alert('Please fill all fields correctly.');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#service');

  const customSelect = document.createElement('div');
  customSelect.className = 'custom-select';
  customSelect.textContent = select.options[0].text;

  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'custom-options';

  Array.from(select.options).forEach(option => {
    const opt = document.createElement('div');
    opt.className = 'custom-option';
    opt.textContent = option.text;
    opt.dataset.value = option.value;

    opt.addEventListener('click', () => {
      customSelect.textContent = option.text;
      select.value = option.value;
      optionsContainer.style.display = 'none';
      customSelect.classList.remove('active');
    });

    optionsContainer.appendChild(opt);
  });

  customSelect.addEventListener('click', () => {
    const isOpen = optionsContainer.style.display === 'block';
    document.querySelectorAll('.custom-options').forEach(o => o.style.display = 'none');
    if (!isOpen) {
      optionsContainer.style.display = 'block';
      customSelect.classList.add('active');
    } else {
      optionsContainer.style.display = 'none';
      customSelect.classList.remove('active');
    }
  });

  select.parentNode.insertBefore(customSelect, select);
  select.parentNode.insertBefore(optionsContainer, select);
});

const contactBtnHeader = document.querySelector('.contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeModalBtn = document.querySelector('.close-modal');

contactBtnHeader.addEventListener('click', () => {
  contactModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  contactModal.classList.remove('active');
});

contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) contactModal.classList.remove('active');
});

const contactBtnIntro = document.querySelector('.intro-contact-btn');
const footerForm = document.querySelector('.footer-form');

contactBtnIntro.addEventListener('click', () => {
  footerForm.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.querySelector('.download-btn');

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'resume/Bakaev_Beksultan_resume.docx';
    link.download = 'Beksss_Resume.docx';
    link.click();
  });
});

const categoryButtons = document.querySelectorAll('.category-btn');
const projectCards = document.querySelectorAll('.project-card');

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.textContent.trim().toLowerCase();

    projectCards.forEach(card => {
      const name = card.querySelector('.project-name').textContent.toLowerCase();
      card.style.display = name.includes(category) ? 'block' : 'none';
    });
  });
});

const serviceModal = document.getElementById('service-modal');
const serviceTitle = document.getElementById('service-modal-title');
const serviceText = document.getElementById('service-modal-text');
const closeServiceModal = document.querySelector('.close-service-modal');

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.service-name').textContent;
    const text = card.querySelector('.service-text').textContent;

    serviceTitle.textContent = title;
    serviceText.textContent = text;
    serviceModal.classList.add('active');
  });
});

closeServiceModal.addEventListener('click', () => {
  serviceModal.classList.remove('active');
});

serviceModal.addEventListener('click', e => {
  if (e.target === serviceModal) serviceModal.classList.remove('active');
})
