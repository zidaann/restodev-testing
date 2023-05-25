const skeletonHandler = () => {
  const skeleton = document.querySelectorAll('.skeleton');
  const TIME_REMOVE_SEKELETON = 2500;
  setTimeout(() => {
    skeleton.forEach((item) => {
      item.classList.remove('skeleton');
    });
  }, TIME_REMOVE_SEKELETON);
};

export default skeletonHandler;
