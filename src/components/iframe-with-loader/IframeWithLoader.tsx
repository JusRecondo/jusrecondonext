'use client';

import { HTMLAttributeReferrerPolicy, useState } from 'react';
import { Oval } from 'react-loader-spinner';

type Props = {
  src: string;
  title: string;
  className?: string;
  allow?: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  allowFullScreen?: boolean;
};

export default function IframeWithLoader({
  src,
  title,
  className,
  allow,
  referrerPolicy,
  allowFullScreen,
}: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: 'relative' }} className={className}>
      {loading && (
         <Oval
        visible={loading}
        height="80"
        width="80"
        color="#ffffff"
        secondaryColor="#000000"
        ariaLabel="oval-loading"
        wrapperStyle={{position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(4px)'}}
        />
      )}

      <iframe
        src={src}
        title={title}
        onLoad={() => setLoading(false)}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allow={allow}
        referrerPolicy={referrerPolicy}
        allowFullScreen={allowFullScreen}
      />
    </div>
  );
}
