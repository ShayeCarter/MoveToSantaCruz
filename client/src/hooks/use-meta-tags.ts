import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
}

export function useMetaTags({ title, description }: MetaTagsProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | Move to Santa Cruz`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Cleanup function to reset title/description when component unmounts (optional)
    // For a SPA, usually the next page will overwrite these, so strict cleanup might not be needed
    // but it's good practice if we want to revert to a default.
  }, [title, description]);
}
