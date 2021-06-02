const chatBtn = document.querySelector('.chat-btn');
const dropdownChatBtn = document.querySelector('.dropdown-chat');
const chatWindow = document.querySelector('.page-content');

chatBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('d-none');
});
dropdownChatBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('d-none');
    window.scrollTo(0, document.body.scrollHeight);
});


