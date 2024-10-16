'use client';
import { Toaster } from 'react-hot-toast';

export const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          fontSize: '14px',
          fontWeight: 600,
        },
      }}
    />
  );
};
