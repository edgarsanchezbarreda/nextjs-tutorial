import { Roboto, Open_Sans } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const openSans = Open_Sans({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
});
