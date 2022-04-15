import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";

const client = new ApolloClient({
  uri: process.env.BASE_URI,
  cache: new InMemoryCache(),
  headers: { "x-hasura-admin-secret": "x,CDdZ0PC7bKOhYZqD57Fo3@4L=,Cl8S" },
});

const styles = {};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles styles={styles} />
      <CssBaseline />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
