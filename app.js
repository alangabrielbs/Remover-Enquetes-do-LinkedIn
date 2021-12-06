(() => {
  const getPolls = () => {
    const polls = [...document.querySelectorAll(".feed-shared-poll")];
    return polls;
  };

  const removePolls = () => {
    const polls = getPolls();

    polls.forEach((poll) => {
      const title = poll.offsetParent.querySelector(
        ".feed-shared-poll__header .feed-shared-inline-show-more-text.m0"
      ).innerText;
      console.log(`Removendo a enquete: ${title}`);
      poll.offsetParent.remove();
    });
  };

  window.setInterval(function () {
    removePolls();
  }, 3000);
})();
