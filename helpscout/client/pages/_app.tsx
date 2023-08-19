import React from "react";
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import '@/styles/globals.css';
import 'styles/styles.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

