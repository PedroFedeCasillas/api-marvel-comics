export const checkPage = (e: any, currentPage: number) => {
  if (e.currentTarget.textContent) {
    return parseInt(e.currentTarget.textContent);
  }
  if (e.currentTarget.getAttribute('aria-label') === 'Go to next page') {
    return currentPage + 1;
  } else {
    return currentPage - 1;
  }
};
