import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Neighborhoods from "./pages/Neighborhoods";
import LiveOak from "./pages/LiveOak";
import Capitola from "./pages/Capitola";
import Aptos from "./pages/Aptos";
import Buyers from "./pages/Buyers";
import Sellers from "./pages/Sellers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Search from "./pages/Search";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/neighborhoods" component={Neighborhoods} />
      <Route path={"/live-oak"} component={LiveOak} />
      <Route path={"/capitola"} component={Capitola} />
      <Route path={"/aptos"} component={Aptos} />     <Route path="/buyers" component={Buyers} />
      <Route path="/sellers" component={Sellers} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/search" component={Search} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
