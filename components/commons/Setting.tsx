import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Settings, RefreshCw } from "lucide-react";
import useApiSettingsStore from "../../store/apiSettingsStore";
import { toast } from "sonner";

const Setting = () => {
  const { apiKey, apiUrl, modelName, setApiKey, setApiUrl, setModelName } =
    useApiSettingsStore();
  const [tempApiKey, setTempApiKey] = useState(apiKey);
  const [tempApiUrl, setTempApiUrl] = useState(apiUrl);
  const [tempModelName, setTempModelName] = useState(modelName);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(
      tempApiKey !== apiKey ||
        tempApiUrl !== apiUrl ||
        tempModelName !== modelName
    );
  }, [tempApiKey, tempApiUrl, tempModelName, apiKey, apiUrl, modelName]);

  const handleSave = () => {
    setApiKey(tempApiKey);
    setApiUrl(tempApiUrl);
    setModelName(tempModelName);
    setIsChanged(false);
    toast.success("Settings saved", {
      description: "Your API settings have been updated successfully.",
      className: "bg-purple-700 text-white border border-purple-500",
    });
  };

  const handleReset = () => {
    setTempApiKey(apiKey);
    setTempApiUrl(apiUrl);
    setTempModelName(modelName);
    setIsChanged(false);
  };

  const InputWithLabel = ({ label, value, onChange, info, isChanged }) => (
    <div className="space-y-2">
      <div className="flex items-center">
        <Label htmlFor={label} className="text-sm font-medium text-gray-300">
          {label}
        </Label>
        {isChanged && <div className="w-2 h-2 bg-blue-500 rounded-full ml-2" />}
      </div>
      <Input
        id={label}
        value={value}
        onChange={onChange}
        className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
        placeholder={`Enter ${label}`}
      />
      <p className="text-xs text-gray-400">{info}</p>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
          size="icon"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border border-gray-800 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-indigo-100 flex items-center gap-2">
            <div className="rounded-md border border-indigo-800 bg-indigo-900/50 p-1">
              <Settings className="h-4 w-4" />
            </div>
            API Settings
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-6">
          <InputWithLabel
            label="API Key"
            value={tempApiKey}
            onChange={(e) => setTempApiKey(e.target.value)}
            info="Enter your Groq API key"
            isChanged={tempApiKey !== apiKey}
          />
          <InputWithLabel
            label="API URL"
            value={tempApiUrl}
            onChange={(e) => setTempApiUrl(e.target.value)}
            info="Default: https://api.groq.com/openai/v1/chat/completions"
            isChanged={tempApiUrl !== apiUrl}
          />
          <InputWithLabel
            label="Model Name"
            value={tempModelName}
            onChange={(e) => setTempModelName(e.target.value)}
            info="e.g., llama3-8b-8192, llama3-70b-8192, gemma2-9b-it"
            isChanged={tempModelName !== modelName}
          />
        </div>
        <div className="flex justify-end items-center gap-4">
          <Button
            onClick={handleReset}
            className="bg-gray-700 hover:bg-gray-600 text-white"
            disabled={!isChanged}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset Changes
          </Button>
          <Button
            onClick={handleSave}
            className="bg-purple-600 hover:bg-purple-700 text-white flex-1"
            disabled={!isChanged}
          >
            Save Changes
          </Button>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          <p>
            Need an API key? Visit{" "}
            <a
              href="https://console.groq.com/docs/quickstart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Groq Console
            </a>{" "}
            to get a free API key and choose your preferred model.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Setting;
