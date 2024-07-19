import React from "react";
import { Button } from "../ui/button";
import { WandSparklesIcon } from "lucide-react";

const MagicButton = () => {
  return (
    <Button
      size="lg"
      variant="ghost"
      className="text-gray-400 hover:text-white hover:bg-gray-900 bg-gray-900/50 border backdrop-blur-lg border-gray-800/50 rounded-full flex items-center gap-2 px-4"
    >
      <div className="rounded-full  border -ml-3  border-purple-800 bg-gradient-to-t from-purple-900/50 to-indigo-900/50 p-2">
        <WandSparklesIcon className="h-4 w-4" />
      </div>
      <span className="text-base">Enchant</span>
    </Button>
  );
};

export default MagicButton;
