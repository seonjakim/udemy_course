import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@styles/theme";
import { styles } from "@styles/globalStyle";

export const client = new ApolloClient({
  uri: process.env.BASE_URI,
  cache: new InMemoryCache(),
  headers: { "x-hasura-admin-secret": "x,CDdZ0PC7bKOhYZqD57Fo3@4L=,Cl8S" },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={styles} />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
