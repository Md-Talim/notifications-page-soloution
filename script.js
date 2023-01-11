const readToggleBtn = document.querySelector(".read-toggle-btn");
const unreadMessages = document.querySelectorAll(".unread-message");
const redIcon = document.querySelectorAll(".unread-icon");

const removeStyle = () => {
  unreadMessages.forEach((message) => {
    message.classList.remove("unread-message");
  });
};

const toggleRead = () => {
  redIcon.forEach((icon) => {
    const isReaded = icon.classList.contains("unread");

    if (isReaded) {
      icon.classList.remove("unread");
      readToggleBtn.setAttribute('aria-disabled', 'true');
      removeStyle();
    }
  });
};

readToggleBtn.addEventListener("click", toggleRead);
console.log(unreadMessages);
