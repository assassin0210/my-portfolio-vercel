const mediaAlias = [
  "mobileSmall",
  "mobile",
  "laptop",
  "desktop",
  "largeDesktop",
  "extraDesktop",
] as const;

export type IMediaType = typeof mediaAlias[number];

export const mediaSize: Record<IMediaType, number> = {
  mobileSmall: 320,
  mobile: 576,
  laptop: 768,
  desktop: 992,
  largeDesktop: 1200,
  extraDesktop: 1400,
};

export const getMediaShort = (value: number) => {
  return `(min-width: ${value}px)`;
};

export const getMediaShortBefore = (value: number) => {
  return `(max-width: ${value - 1}px)`;
};

export const getMedia = (value: number) => {
  return `@media screen and ${getMediaShort(value)}`;
};

export const getMediaBefore = (value: number) => {
  return `@media screen and ${getMediaShortBefore(value)}`;
};

export const media = {
  mobileSmallBefore: getMediaBefore(mediaSize.mobileSmall),
  mobileSmall: getMedia(mediaSize.mobileSmall),
  mobileBefore: getMediaBefore(mediaSize.mobile),
  mobile: getMedia(mediaSize.mobile),
  laptopBefore: getMediaBefore(mediaSize.laptop),
  laptop: getMedia(mediaSize.laptop),
  desktopBefore: getMediaBefore(mediaSize.desktop),
  desktop: getMedia(mediaSize.desktop),
  largeDesktopBefore: getMediaBefore(mediaSize.largeDesktop),
  largeDesktop: getMedia(mediaSize.largeDesktop),
  extraDesktopBefore: getMediaBefore(mediaSize.extraDesktop),
  extraDesktop: getMedia(mediaSize.extraDesktop),
};

export const mediaShort = {
  mobileSmallBefore: getMediaShortBefore(mediaSize.mobileSmall),
  mobileSmall: getMediaShort(mediaSize.mobileSmall),
  mobileBefore: getMediaShortBefore(mediaSize.mobile),
  mobile: getMediaShort(mediaSize.mobile),
  laptopBefore: getMediaShortBefore(mediaSize.laptop),
  laptop: getMediaShort(mediaSize.laptop),
  desktopBefore: getMediaShortBefore(mediaSize.desktop),
  desktop: getMediaShort(mediaSize.desktop),
  largeDesktopBefore: getMediaShortBefore(mediaSize.largeDesktop),
  largeDesktop: getMediaShort(mediaSize.largeDesktop),
  extraDesktopBefore: getMediaShortBefore(mediaSize.extraDesktop),
  extraDesktop: getMediaShort(mediaSize.extraDesktop),
};
