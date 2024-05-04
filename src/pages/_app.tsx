import { AppProps } from "next/app";
import { globalStyles } from "@/design/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
