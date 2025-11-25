"use client";
import { useEffect, useState } from "react";
import ImageDropzone from "@/components/ImageDropzone";
import { uploadImageForSearch } from "@/lib/api";
import ResultGrid from "@/components/ResultGrid";
import { useMutation } from "@tanstack/react-query";

import FuturisticLoader from "@/components/Loading";

import AnimatedHeader from "@/components/AnimatedHeader";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";


export default function SearchPage() {
  const [file, setFile] = useState<File | null>(null);
  const [results, setResults] = useState<any[]>([]);

  const [display, setDisplay] = useState(false);

  const [gridDisplay, setGridDisplay] = useState(false);

  const [isLoading, setIsLoading] = useState(true);


  const [showGrid, setShowGrid] = useState(false);

  const [inpFile, setInpFile] = useState<string[]>([]);


  const [showOverlay, setShowOverlay] = useState(false);

  const [headerOverlay, setHeaderOverlay] = useState(false);

  
  const triggerOverlay = () => {
    setShowOverlay(true);

    setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
  };


  const triggerHOverlay = () => {
    setHeaderOverlay(true);

    setTimeout(() => {
      setHeaderOverlay(false);
    }, 1000);
  };



  const resetDivs = async () => {
    console.log("Resetting divs...");

    await new Promise(resolve => setTimeout(resolve, 3000));
    setDisplay(false);
    setGridDisplay(true);
    setIsLoading(false);


  };



  const mutation = useMutation<any[], unknown, File>({

    onMutate: () => {
      // show overlay when mutation starts
      triggerOverlay();
      triggerHOverlay();
      setDisplay(false)
    },
    
    mutationFn: async (file: File) => {
      
      await resetDivs();
      const res = await uploadImageForSearch(file);
      return res;
    },
    onSuccess: (data) => {
      
      setResults(data ?? [])
    },
  });


  


  const [isSearching, setIsSearching] = useState(false);
  

  const onFile = (f: File) => {
    console.log("File received in page:");
    
    setInpFile([f.name]);

    setFile(f);
    mutation.mutate(f);
  };
  


  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 py-10">

      <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center text-center mb-6"
    >
      <h1 className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent text-4xl font-extrabold">
        Start Your Visual Search
      </h1>
      <p className="text-gray-400 mt-2 text-sm md:text-base ">
        Drop an image below and let our AI find your closest matches
      </p>
      <div className="mt-4 animate-bounce text-blue-400 text-sm">↓ Drop your image here ↓</div>
    </motion.div>

     

      <div className="w-full">
        <div className="md:col-span-1" style={{paddingBottom : "16px"}}>
            <ImageDropzone onFile={onFile} />
            
          </div>

          <div className="md:col-span-2">
            
            {showOverlay && (
              <FuturisticLoader />
            )}
            
            {isLoading ? (

              ''
              
            ) : (
              gridDisplay ? (
                
                <div>
                  {!showOverlay && (
                    <div>
                      {!headerOverlay && (<AnimatedHeader onLineComplete={() => setShowGrid(true)} />)}


                      <ResultGrid items={results} visible={showGrid} />
                    </div>
                  )}
                  

                </div>
            ) : '')}
          </div>
      </div>
      <Footer />

    </div>
  );
}
