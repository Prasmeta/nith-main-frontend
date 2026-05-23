'use client';

import React from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function CSEDepartmentPage() {
  const iframeSrc = `/cse-dept/cse.html?api=${encodeURIComponent(API_BASE)}`;

  return (
    <div className="w-full" style={{ height: '100vh' }}>
      <iframe
        src={iframeSrc}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="CSE Department"
      />
    </div>
  );
}
