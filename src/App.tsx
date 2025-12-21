import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Snowfall import
import Snowfall from "react-snowfall";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* 🎄 Global subtle snowfall */}
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 500, 
          }}
          color="#ffffff"
          snowflakeCount={80}
          radius={[1.2, 3.0]}
          speed={[0.5, 1.5]}
          wind={[-0.3, 0.6]}
          opacity={[0.6, 1]}
        />

        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
