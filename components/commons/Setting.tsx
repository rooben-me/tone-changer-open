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
import {
  Settings,
  RefreshCw,
  Globe,
  Lock,
  Info,
  Eye,
  EyeOff,
} from "lucide-react";
import useApiSettingsStore from "../../store/apiSettingsStore";
import { toast } from "sonner";

const Setting = () => {
  const { apiKey, apiUrl, modelName, setApiKey, setApiUrl, setModelName } =
    useApiSettingsStore();
  const [tempApiKey, setTempApiKey] = useState(apiKey);
  const [tempApiUrl, setTempApiUrl] = useState(apiUrl);
  const [tempModelName, setTempModelName] = useState(modelName);
  const [isChanged, setIsChanged] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

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
      description: "Your model configuration has been updated successfully.",
    });
  };

  const handleReset = () => {
    setTempApiKey(apiKey);
    setTempApiUrl(apiUrl);
    setTempModelName(modelName);
    setIsChanged(false);
  };

  const toggleShowApiKey = () => {
    setShowApiKey(!showApiKey);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-gray-900 bg-gray-900/50 border backdrop-blur-lg border-gray-800/50 rounded-full flex items-center gap-2 px-4"
        >
          <div className="rounded-full border -ml-3 border-indigo-800/50 bg-gradient-to-t from-indigo-900/60 to-indigo-900/20 p-2">
            <Settings className="h-4 w-4" />
          </div>
          <span className="text-base">Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gray-900 border border-gray-800 text-gray-100 overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-indigo-100 flex items-center gap-2">
            <div className="rounded-full border -ml-3 border-indigo-800/50 bg-gradient-to-t from-indigo-900/60 to-indigo-900/20 p-2">
              <Settings className="h-4 w-4" />
            </div>
            Settings
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-6">
          <div>
            <div className="flex items-center mb-2">
              <Label
                htmlFor="API Key"
                className="text-sm font-medium text-gray-300"
              >
                API Key
              </Label>
              {tempApiKey !== apiKey && (
                <div className="w-2 h-2 bg-blue-500 rounded-full ml-2" />
              )}
            </div>
            <div className="relative">
              <Input
                id="API Key"
                type={showApiKey ? "text" : "password"}
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500 pr-10 transition-all duration-300 ease-in-out"
                placeholder={`Enter API Key`}
                style={{
                  opacity: showApiKey ? 1 : 0.5,
                }}
              />
              <button
                type="button"
                onClick={toggleShowApiKey}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
              >
                {showApiKey ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
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
                to get a free API key
              </p>
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Label
                htmlFor="API URL"
                className="text-sm font-medium text-gray-300"
              >
                API URL
              </Label>
              {tempApiUrl !== apiUrl && (
                <div className="w-2 h-2 bg-blue-500 rounded-full ml-2" />
              )}
            </div>
            <Input
              id="API URL"
              value={tempApiUrl}
              onChange={(e) => setTempApiUrl(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
              placeholder={`Enter API URL`}
            />
            <p className="text-xs text-gray-400 mt-2">
              Enter any OpenAI-compatible API URL
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Label
                htmlFor="Model Name"
                className="text-sm font-medium text-gray-300"
              >
                Model Name
              </Label>
              {tempModelName !== modelName && (
                <div className="w-2 h-2 bg-blue-500 rounded-full ml-2" />
              )}
            </div>
            <Input
              id="Model Name"
              value={tempModelName}
              onChange={(e) => setTempModelName(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
              placeholder={`Enter Model Name`}
            />
            <p className="text-xs text-gray-400 mt-2">
              e.g., llama3-8b-8192, llama3-70b-8192, gemma2-9b-it
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4">
          <Button
            onClick={handleReset}
            className="bg-gray-700 hover:bg-gray-600 text-white"
            disabled={!isChanged}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button
            onClick={handleSave}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6"
            disabled={!isChanged}
          >
            Save Changes
          </Button>
        </div>
        <div className="mt-8 flex flex-col gap-4 border border-indigo-900/50 rounded-xl p-4 bg-indigo-900/10">
          <div className="flex items-start gap-3 text-gray-200">
            <Globe className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-medium">Compatible APIs</h4>
              <p className="text-xs mt-1 text-gray-300">
                Use any OpenAI-Compatible API. I recommend{" "}
                <a
                  href="https://console.groq.com/docs/quickstart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Groq
                </a>{" "}
                for free, fast access.
              </p>
            </div>
          </div>
          {/* Seperator */}
          <div className="w-full h-px bg-indigo-900/50"></div>

          <div className="flex items-start gap-3 text-gray-200">
            <Lock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-medium">Your Data Stays Local</h4>
              <p className="text-xs mt-1 text-gray-300">
                All settings are stored in your browser. No data is sent to the
                server.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Setting;
