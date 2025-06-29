import { createApi } from 'unsplash-js';

console.log("Unsplash Access Key:", import.meta.env.VITE_ACCESS_KEY);

export const unsplash = createApi({ accessKey: import.meta.env.VITE_ACCESS_KEY });