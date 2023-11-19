"use client";
import React, { useEffect, useState } from 'react';
import useAppStore from "../../stores/appStore"; // Adjust the path accordingly
  
const AppInstall = () => {
  const {deferredPrompt,  setDeferredPrompt} = useAppStore();

  useEffect(() => {

    const handleBeforeInstallPrompt = (event) => {

      event.preventDefault();
      setDeferredPrompt(event);
    
    };

    window?.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window?.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
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
    
    <>
    {deferredPrompt !== null &&
    <button onClick={handleInstallClick} className="appBtn cursor-pointer pl-3 pr-3 w-[85vw] md:w-auto h-14 md:h-[40px] flex justify-center items-center text-center text-zinc-50 
     rounded-lg hover:bg-orange-600 z-[999999999999999] transition-all bg-[#D43300] uppercase">Install app</button>
    }
    </>

  )
}

export default AppInstall