import React from "react";
import { Button } from "../../ui/button";
import { WandSparklesIcon } from "lucide-react";
import useMagicBackgroundStore from "../../../store/useMagicBackgroundStore";
import { cn } from "../../../lib/utils";

const MagicButton: React.FC = () => {
  const { isBackgroundVisible, toggleBackground } = useMagicBackgroundStore();

  return (
    <Button
      size="lg"
      variant="ghost"
      className="text-gray-400 hover:text-white hover:bg-gray-900 bg-gray-900/50 border backdrop-blur-lg border-gray-800/50 rounded-full items-center gap-2 px-4 hidden lg:flex"
      onClick={toggleBackground}
    >
      <div
        className={cn(
          "rounded-full border -ml-3 border-purple-800 bg-gradient-to-t from-purple-900/50 to-indigo-900/50 p-2",
          !isBackgroundVisible ? "grayscale" : ""
        )}
      >
        <WandSparklesIcon className="h-4 w-4" />
      </div>
      <span className="text-base">Enchant</span>
    </Button>
  );
};

export default MagicButton;
