export const useUrlValidation = (url: string) => {
  const isValidYoutubeUrl = () => {
    const regex = /^(https?:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/;
    return regex.test(url);
  };

  return isValidYoutubeUrl();
};
