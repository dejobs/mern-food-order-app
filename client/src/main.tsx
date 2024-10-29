import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./index.css";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigate>
          <AppRoutes />
        </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
