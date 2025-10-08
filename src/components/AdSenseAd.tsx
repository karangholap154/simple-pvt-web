import React, { useEffect, useRef } from 'react';

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = ''
}) => {
  const currentAdSlot = useRef<string | null>(null);
  const isAdLoaded = useRef<boolean>(false);

  useEffect(() => {
    // Only load ad if slot has changed or it's the first load for this slot
    if (currentAdSlot.current === adSlot && isAdLoaded.current) {
      return;
    }

    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      currentAdSlot.current = adSlot;
      isAdLoaded.current = true;
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adSlot]);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-5352167059639603"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

export default AdSenseAd;