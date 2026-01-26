import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function Search() {
  useEffect(() => {
    // This script handles the dynamic resizing of the iframe sent from the Lofty widget
    const handleMessage = (e: MessageEvent) => {
      try {
        // Ensure we're only processing messages that are strings (JSON)
        if (typeof e.data !== 'string') return;
        
        const data = JSON.parse(e.data);
        const chimeWidget = document.getElementById('chimeWidget');
        
        if (chimeWidget && data.from === 'chimeSite' && data.event === 'updateBodyRect') {
          chimeWidget.style.height = data.data.height + 'px';
        }
      } catch (error) {
        // Silent catch for non-JSON messages that might come from other sources
        // console.log(error); 
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <Layout>
      <div className="bg-background min-h-screen pt-4 pb-10 md:pt-10 md:pb-20">
        <div className="container px-0 md:px-4">
          <div className="text-center mb-6 md:mb-10 px-4">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm">Find Your Dream Home</span>
            <h1 className="font-serif text-2xl md:text-5xl font-bold text-primary mt-2 md:mt-4">Search Santa Cruz Real Estate</h1>
          </div>
          
          <div className="w-full bg-white md:rounded-xl shadow-sm border-y md:border border-border overflow-hidden min-h-[600px] md:min-h-[800px]">
            <iframe 
              src="https://movetosantacruz.com/api-site/widget/78723" 
              id="chimeWidget" 
              frameBorder="0" 
              style={{ width: '100%', height: '100%', minHeight: '600px' }}
              title="Santa Cruz Property Search"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
