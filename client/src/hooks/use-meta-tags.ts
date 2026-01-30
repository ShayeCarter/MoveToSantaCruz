import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function useMetaTags({ 
  title, 
  description, 
  image = '/images/hero-home.jpg', // Default fallback image
  url = window.location.href,
  type = 'website'
}: MetaTagsProps) {
  useEffect(() => {
    const fullTitle = `${title} | Move to Santa Cruz`;
    const fullImageUrl = image.startsWith('http') ? image : `https://movetosantacruz.com${image}`;

    // Update standard tags
    document.title = fullTitle;
    updateMetaTag('description', description);

    // Update Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', fullImageUrl, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'Move to Santa Cruz', 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);

  }, [title, description, image, url, type]);
}

// Helper to update or create meta tags
function updateMetaTag(nameOrProperty: string, content: string, attrType: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attrType}="${nameOrProperty}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrType, nameOrProperty);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}
