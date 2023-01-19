export const swapPhoto = (images: string[], activeImage: string, overImage: string) =>
  images.map(image => {
    if (image === overImage) {
      return activeImage;
    }

    if (image === activeImage) {
      return overImage;
    }

    return image;
  });
