const chatBtn = document.querySelector('.chat-btn');
const chatWindow = document.querySelector('.page-content');

chatBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('d-none');
});
