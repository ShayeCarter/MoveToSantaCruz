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
      <div className="bg-background min-h-screen pt-10 pb-20">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Find Your Dream Home</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mt-4">Search Santa Cruz Real Estate</h1>
          </div>
          
          <div className="w-full bg-white rounded-xl shadow-sm border border-border overflow-hidden min-h-[800px]">
            <iframe 
              src="https://movetosantacruz.com/api-site/widget/78524" 
              id="chimeWidget" 
              frameBorder="0" 
              style={{ width: '100%', height: '100%', minHeight: '800px' }}
              title="Santa Cruz Property Search"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
