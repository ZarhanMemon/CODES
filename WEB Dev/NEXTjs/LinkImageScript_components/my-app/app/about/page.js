import React from 'react';
import Script from 'next/script';

function page() {
  return (
    <div>
      about

      <Script>
        {`alert('Hello, I am Script component in Next.js')`}
      </Script>
    </div>
  );
}

export default page;
