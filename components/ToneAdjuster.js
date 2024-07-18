import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash/debounce";
import ScrambleText from "./commons/ScrambleText";
import ToneChangerGrid from "./ToneChangerGrid";
import Header from "./commons/Header";
import Footer from "./commons/Footer";

const debouncedApiCall = debounce(
  async (text, tones, setIsLoading, setOutputText) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/adjust-tone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texts: [{ id: "1", text }], tones }),
      });

      const data = await response.json();
      setOutputText(data.adjustedText || "Adjusted text will appear here");
    } catch (error) {
      console.error("Error adjusting tone:", error);
      setOutputText("Error adjusting tone");
    } finally {
      setIsLoading(false);
    }
  },
  500
);

const ToneAdjuster = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tones, setTones] = useState([]);

  const handleInputChange = useCallback((text) => {
    setInputText(text);
  }, []);

  const handleToneChange = useCallback(
    (newTones) => {
      if (JSON.stringify(newTones) !== JSON.stringify(tones)) {
        setTones(newTones);
      }
    },
    [tones]
  );

  useEffect(() => {
    if (inputText.length > 3 && tones.length > 0) {
      debouncedApiCall(inputText, tones, setIsLoading, setOutputText);
    }
  }, [inputText, tones]);

  return (
    <div className="w-full max-w-7xl mx-auto p-2 lg:p-8">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:min-h-[calc(100vh-12rem)]">
        <div className="flex items-center justify-center aspect-square lg:aspect-auto order-2 lg:order-none">
          <ToneChangerGrid onToneChange={handleToneChange} />
        </div>

        <div className="grid grid-rows-[_3fr_4fr] gap-4 h-full">
          <div className="relative flex-grow border border-indigo-700/20 rounded-2xl">
            <textarea
              className="w-full h-full p-6 pt-12 text-lg bg-indigo-950/50 text-indigo-100 rounded-2xl resize-none focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-indigo-300/50"
              placeholder="Enter text to adjust tone..."
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <label className="absolute top-4 left-6 text-sm font-semibold text-indigo-300">
              Input Text
            </label>
          </div>

          <div className="relative flex-grow rounded-2xl border-4 border-transparent bg-violet-950/50">
            <div className="w-full h-full p-6 pt-12 text-lg rounded-2xl overflow-auto text-violet-100 font-medium">
              <ScrambleText text={outputText} />
            </div>
            <label className="absolute top-4 left-6 text-sm font-semibold text-violet-300">
              Adjusted Text
            </label>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ToneAdjuster;
