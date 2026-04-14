"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export type SelectorChipsProps = {
  options: { id: string; label: string }[];
  onChange?: (selected: string[]) => void;
  value?: string[];
  className?: string;
};

const SelectorChips: React.FC<SelectorChipsProps> = ({ 
  options, 
  onChange,
  value = [],
  className 
}) => {
  const toggleChip = (optionId: string) => {
    const updated = value.includes(optionId)
      ? value.filter((o) => o !== optionId)
      : [...value, optionId];
    onChange?.(updated);
  };

  return (
    <div className={cn(
      "flex flex-wrap gap-3 w-full",
      className
    )}>
      {options.map((option) => {
        const isSelected = value.includes(option.id);
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => toggleChip(option.id)}
            className={cn(
              "flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer",
              isSelected 
                ? "bg-copper border-copper text-black" 
                : "bg-transparent border-border text-foreground hover:border-copper/50"
            )}
          >
            <span>{option.label}</span>
            {isSelected && (
              <span className="flex items-center animate-in zoom-in-50 duration-200">
                <Check className="w-4 h-4" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export { SelectorChips };
