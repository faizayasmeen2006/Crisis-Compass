// === LOGIN / REGISTER SYSTEM ===
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value.trim();

        if (username && password) {
            if (localStorage.getItem(username)) {
                alert('Username already exists. Please choose another.');
            } else {
                localStorage.setItem(username, password);
                alert('Registration successful! Please login.');
                window.location.href = 'login.html';
            }
        } else {
            alert('Please fill all fields.');
        }
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        const storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            alert('Login successful!');
            sessionStorage.setItem('loggedInUser', username);
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials!');
        }
    });
}

function logout() {
    sessionStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    window.location.href = 'index.html';
}

// === DISASTER POPUP SYSTEM ===
function showGuidelines(disaster) {
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const popup = document.getElementById('guideline-popup');

    if (!popupTitle || !popupText || !popup) return;

    const guidelines = {
        earthquake: `
            - Drop to the ground.<br>
            - Take cover under sturdy furniture.<br>
            - Stay indoors until shaking stops.<br>
            - Stay away from windows.<br>
            - If outside, move to an open area.<br>
            - Expect aftershocks.
        `,
        flood: `
            - Move to higher ground immediately.<br>
            - Avoid walking or driving through floodwaters.<br>
            - Stay informed via alerts.<br>
            - Disconnect electrical appliances.<br>
            - Do not touch electrical equipment if wet.
        `,
        wildfire: `
            - Follow evacuation orders.<br>
            - Cover nose and mouth to avoid smoke.<br>
            - Prepare emergency supplies.<br>
            - Remove flammable materials around your house.<br>
            - Stay tuned to emergency updates.
        `,
        cyclone: `
            - Secure loose outdoor objects.<br>
            - Stay indoors away from windows.<br>
            - Stock emergency supplies.<br>
            - Listen to local authorities for updates.<br>
            - Evacuate if instructed.
        `,
        tsunami: `
            - Move inland or to higher ground immediately.<br>
            - Stay away from the beach.<br>
            - Do not wait for official warnings.<br>
            - Stay tuned for tsunami alerts.<br>
            - Be prepared for multiple waves.
        `,
        drought: `
            - Fix leaks and use water-saving devices.<br>
            - Avoid washing cars and use brooms instead of hoses.<br>
            - Follow local water restrictions.<br>
            - Drink water regularly during hot weather.
        `,
        pandemic: `
            - Wear a mask that covers your nose and mouth.<br>
            - Wash hands frequently.<br>
            - Avoid large gatherings.<br>
            - Stay informed about local restrictions.
        `,
        landslide: `
            - Stay alert during heavy rainfall.<br>
            - Move away from steep slopes.<br>
            - Listen to local authorities.<br>
            - Be prepared to evacuate immediately.
        `,
        tornado: `
            - Go to a basement or interior room without windows.<br>
            - Protect your head and neck.<br>
            - Stay away from doors and outside walls.<br>
            - Listen to weather alerts.
        `,
        famine: `
            - Store non-perishable foods and clean water.<br>
            - Ration supplies wisely.<br>
            - Support and stay informed through relief agencies.<br>
            - Grow small-scale crops if possible.<br>
            - Stay connected with community support systems.
        `
    };

    popupTitle.innerText = disaster.charAt(0).toUpperCase() + disaster.slice(1) + ' Safety Tips';
    popupText.innerHTML = guidelines[disaster] || 'No guidelines available.';
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('guideline-popup');
    if (popup) popup.style.display = 'none';
}

// === SLIDER SYSTEM (CARD CONTAINER) ===
const container = document.querySelector('.card-container');
let index = 0;
let intervalId;

function showCards() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    if (totalCards === 0) return;

    if (index >= totalCards) {
        index = 0;
    } else if (index < 0) {
        index = totalCards - 1;
    }

    const cardStyle = window.getComputedStyle(cards[0]);
    const cardMargin = parseInt(cardStyle.marginRight) || 20;
    const cardWidth = cards[0].offsetWidth + cardMargin;

    container.style.transform = `translateX(${-index * cardWidth}px)`;
    container.style.transition = 'transform 0.5s ease';
}

function startAutoSlide() {
    intervalId = setInterval(() => {
        index++;
        showCards();
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

// Manual next and previous buttons
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        index++;
        showCards();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        index--;
        showCards();
    });
}

// Pause on hover
if (container) {
    container.addEventListener('mouseover', stopAutoSlide);
    container.addEventListener('mouseout', startAutoSlide);
}

// Initialize
window.addEventListener('load', () => {
    showCards();
    startAutoSlide();
});
