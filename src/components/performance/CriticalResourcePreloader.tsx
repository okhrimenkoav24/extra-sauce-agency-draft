import { useEffect } from 'react';
import { publicAsset } from '@/lib/assetPath';

const CriticalResourcePreloader = () => {
  useEffect(() => {
    // Preload critical images after initial render
    const criticalImages = [
      publicAsset('/sauce.png'),
      publicAsset('/chili.png')
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Optimize font loading
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('700 1em Inter'),
        document.fonts.load('800 1em Inter'),
      ]).catch(console.error);
    }
  }, []);

  return null;
};

export default CriticalResourcePreloader;