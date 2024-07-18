import React from "react";
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
import { Settings } from "lucide-react";
import useApiSettingsStore from "../../store/apiSettingsStore";

const Setting = () => {
  const { apiKey, apiUrl, modelName, setModelName, setApiKey, setApiUrl } =
    useApiSettingsStore();

  console.log("nodemname", modelName);

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
          <DialogTitle className="text-xl font-semibold text-white">
            API Settings
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label
              htmlFor="apiKey"
              className="text-sm font-medium text-gray-300"
            >
              API Key
            </Label>
            <Input
              id="apiKey"
              value={apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setApiKey(e.target.value)
              }
              className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter your API key"
            />
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="apiUrl"
              className="text-sm font-medium text-gray-300"
            >
              API URL
            </Label>
            <Input
              id="apiUrl"
              value={apiUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setApiUrl(e.target.value)
              }
              className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter API URL"
            />
          </div>

          <div className="grid gap-2">
            <Label
              htmlFor="modelName"
              className="text-sm font-medium text-gray-300"
            >
              Model Name
            </Label>
            <Input
              id="modelName"
              value={modelName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setModelName(e.target.value)
              }
              className="bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter Model name"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            type="submit"
            className="bg-gradient-to-b from-purple-600 to-purple-700 text-white"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Setting;
