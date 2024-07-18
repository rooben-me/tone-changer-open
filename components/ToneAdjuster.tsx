import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash/debounce";
import ScrambleText from "./commons/ScrambleText";
import ToneChangerGrid from "./ToneChangerGrid";
import useApiSettingsStore from "../store/apiSettingsStore";

interface Tone {
  tone: string;
  weight: number;
}

const debouncedApiCall = debounce(
  async (
    text: string,
    tones: Tone[],
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setOutputText: React.Dispatch<React.SetStateAction<string>>,
    apiKey: string,
    apiUrl: string,
    modelName: string
  ) => {
    setIsLoading(true);
    try {
      const systemMessage = `You are a skilled writer tasked with rewriting text to match specific tones. 
      Adjust the input text to reflect the following tones: ${tones
        .map((t) => `${t.tone} (weight: ${t.weight})`)
        .join(" and ")}. 
      Maintain the original meaning and intent of the text while adapting its style and language to match the specified tones.
      JUST REPLY WITH THE CORRECTED TEXT AND DO NOT BE WORDY KEEP IT SHORT AND DONT NOT TELL "Here is the rewrittern sentence text" AND DONT GIVE THE RESPONSE IN A QUOTES`;

      const userMessage = `TEXT : "${text}"
      TONES : ${tones
        .map((t) => `${t.tone} (weight: ${t.weight})`)
        .join(" and ")}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: modelName,
          messages: [
            { role: "system", content: systemMessage },
            { role: "user", content: userMessage },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const data = await response.json();
      setOutputText(
        data.choices[0].message.content.trim() ||
          "Adjusted text will appear here"
      );
    } catch (error) {
      console.error("Error adjusting tone:", error);
      setOutputText("Error adjusting tone");
    } finally {
      setIsLoading(false);
    }
  },
  500
);

const ToneAdjuster: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tones, setTones] = useState<Tone[]>([]);
  const { apiKey, apiUrl, modelName } = useApiSettingsStore();

  console.log(modelName, "modea in home");
  const handleInputChange = useCallback((text: string) => {
    setInputText(text);
  }, []);

  const handleToneChange = useCallback(
    (newTones: Tone[]) => {
      if (JSON.stringify(newTones) !== JSON.stringify(tones)) {
        setTones(newTones);
      }
    },
    [tones]
  );

  useEffect(() => {
    if (inputText.length > 3 && tones.length > 0) {
      debouncedApiCall(
        inputText,
        tones,
        setIsLoading,
        setOutputText,
        apiKey,
        apiUrl,
        modelName
      );
    }
  }, [inputText, tones, apiKey, apiUrl, modelName]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:min-h-[calc(100vh-12rem)]">
      <div className="flex items-center justify-center aspect-square lg:aspect-auto order-2 lg:order-none">
        <ToneChangerGrid onToneChange={handleToneChange} />
      </div>

      <div className="grid grid-rows-[_3fr_4fr] gap-4 h-full">
        <div className="relative flex-grow border border-indigo-700/20 rounded-2xl">
          <textarea
            className="w-full h-full p-6 pt-12 text-lg bg-indigo-950/50 text-indigo-100 rounded-2xl resize-none focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-indigo-300/50"
            placeholder="Enter text to adjust tone..."
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange(e.target.value)
            }
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
  );
};

export default ToneAdjuster;
