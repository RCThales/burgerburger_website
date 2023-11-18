"use client";
import { Blinker } from "next/font/google";
import React, { useEffect, useState } from 'react';

const blinker = Blinker({
    subsets: ["latin"],
    weight: ["200", "400", "600", "700"],
  });

  
const AppInstall = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <button  onClick={handleInstallClick} disabled={!deferredPrompt} className={`${blinker.className} cursor-pointer fixed z-[99999999999999999999] shadow-zinc-700 shadow-md hover:scale-[1.02] active:scale-[.9]
     transition-all rounded-2xl bottom-6 right-6 h-auto text-xl font-semibold w-auto p-2 bg-[#D43300]`}>Install our app</button>
  )
}

export default AppInstall