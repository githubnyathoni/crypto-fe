const useLocalStorage = () => {
  const accessToken = localStorage.getItem('access_token');

  const removeLocalStorage = () => {
    localStorage.clear();
  };

  return {
    accessToken,
    removeLocalStorage,
  };
};

export default useLocalStorage;
