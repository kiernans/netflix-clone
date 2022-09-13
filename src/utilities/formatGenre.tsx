export const formatGenre = (genres: string[]): string => {
  return genres
    .map((genre) => genre.charAt(0).toLocaleUpperCase() + genre.substring(1))
    .join(", ");
};
