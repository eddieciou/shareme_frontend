export const fetchUser = () =>
  localStorage.getItem('user') !== null
    ? JSON.parse(localStorage.getItem('user') || '')
    : localStorage.clear();
