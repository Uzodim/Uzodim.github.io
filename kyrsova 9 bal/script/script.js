const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// свайпер + генерація карточок

const cardData = [
    {
        img: 'img/avatar1.png',
        title: 'МОДЕЛЮВАННЯ',
        description: 'Відкрийте безмежні можливості створення моделей і проєктів у віртуальному просторі з HYDRA VR.',
        buttonText: 'СПРОБУЙТЕ ЗАРАЗ'
    },
    {
        img: 'img/avatar2.png',
        title: 'ДИЗАЙН',
        description: 'Створюйте унікальні дизайнерські рішення у віртуальній реальності для різних проєктів.',
        buttonText: 'СПРОБУЙТЕ ЗАРАЗ'
    },
    {
        img: 'img/avatar3.png',
        title: 'ІНТЕРАКТИВНІСТЬ',
        description: 'Зробіть ваші проєкти живими завдяки інтерактивним елементам у HYDRA VR.',
        buttonText: 'СПРОБУЙТЕ ЗАРАЗ'
    },
    {
        img: 'img/avatar4.png',
        title: 'ТРЕНУВАННЯ',
        description: 'Використовуйте віртуальну реальність для навчання та тренувань без обмежень.',
        buttonText: 'СПРОБУЙТЕ ЗАРАЗ'
    },
    {
        img: 'img/avatar2.png',
        title: 'ДИЗАЙН',
        description: 'Створюйте унікальні дизайнерські рішення у віртуальній реальності для різних проєктів.',
        buttonText: 'СПРОБУЙТЕ ЗАРАЗ'
    },
    {
        img: 'img/avatar3.png',
        title: 'ІНТЕРАКТИВНІСТЬ',
        description: 'Зробіть ваші проєкти живими завдяки інтерактивним елементам у HYDRA VR.',
        buttonText: 'СПРОБУЙТЕ ЗАРАЗ'
    },
    {
        img: 'img/avatar4.png',
        title: 'ТРЕНУВАННЯ',
        description: 'Використовуйте віртуальну реальність для навчання та тренувань без обмежень.',
        buttonText: 'СПРОБУЙТЕ ЗАРАЗ'
    }
];

const cardsContainer = document.getElementById('cardsContainer');

cardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('swiper-slide');
    cardElement.innerHTML = `
            <div class="card">
                <img src="${card.img}" alt="${card.title}">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <a href="#" class="btn-card">${card.buttonText}</a>
            </div>
        `;
    cardsContainer.appendChild(cardElement);
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1040: {
            slidesPerView: 3,
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalForm');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close-btn');

    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
