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
  const { apiKey, apiUrl, setApiKey, setApiUrl } = useApiSettingsStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>API Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="apiKey" className="text-right">
              API Key
            </Label>
            <Input
              id="apiKey"
              value={apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setApiKey(e.target.value)
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="apiUrl" className="text-right">
              API URL
            </Label>
            <Input
              id="apiUrl"
              value={apiUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setApiUrl(e.target.value)
              }
              className="col-span-3"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Setting;
