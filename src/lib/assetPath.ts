export const publicAsset = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const baseUrl = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

  return `${baseUrl}${normalizedPath}`;
};
