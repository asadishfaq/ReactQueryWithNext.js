import '../styles/globals.css'
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'

function MyApp({ Component, pageProps }) {
  const queryClient = React.useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
