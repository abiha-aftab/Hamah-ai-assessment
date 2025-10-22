"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, ChevronDown, Plus } from "lucide-react";
import { Persona } from "@/types";

interface PersonaItem {
  id: string;
  name: string;
  category: string;
  selected: boolean;
}

interface TargetAudienceDropdownProps {
  onPersonaEdit: (persona: Persona | null) => void;
}

export default function TargetAudienceDropdown({
  onPersonaEdit,
}: TargetAudienceDropdownProps) {
  const [personas, setPersonas] = useState<PersonaItem[]>([
    { id: "1", name: "Solo Living", category: "Solo Living", selected: false },
    {
      id: "2",
      name: "Entrepreneur",
      category: "Entrepreneur",
      selected: false,
    },
    { id: "3", name: "Designer", category: "Designer", selected: false },
    { id: "4", name: "Developer", category: "Developer", selected: false },
    { id: "5", name: "Marketer", category: "Marketer", selected: false },
  ]);

  const handlePersonaToggle = (personaId: string) => {
    setPersonas((prev) =>
      prev.map((persona) =>
        persona.id === personaId
          ? { ...persona, selected: !persona.selected }
          : persona
      )
    );
  };

  const handleEditPersona = (persona: PersonaItem) => {
    // Convert PersonaItem to Persona for editing
    const personaForEdit: Persona = {
      id: persona.id,
      name: persona.name,
      category: persona.category,
      demographic: "",
      lifestyles: "",
      behavioral: "",
      psychographic: "",
      personaPrompt: "",
      quote: "",
      age: "",
      gender: "",
      location: "",
      relationshipStatus: "",
      title: "",
      education: "",
      description: "",
      goals: [],
      motivations: [],
      documents: [],
    };
    onPersonaEdit(personaForEdit);
  };

  const handleCreateNew = () => {
    onPersonaEdit(null);
  };

  const selectedCount = personas.filter((p) => p.selected).length;

  return (
    <div className="space-y-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between gap-2 text-gray-700 border-gray-300 h-12 cursor-pointer"
          >
            {selectedCount > 0
              ? `${selectedCount} audience${
                  selectedCount > 1 ? "s" : ""
                } selected`
              : "Select Target Audience"}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)]"
          align="start"
          sideOffset={4}
        >
          <DropdownMenuItem
            onClick={handleCreateNew}
            className="flex items-center gap-2  font-medium"
          >
            <Plus className="h-4 w-4" />
            Create New Audience
          </DropdownMenuItem>
          <div className="border-t border-gray-200 my-2"></div>
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="flex items-center justify-between px-3 py-2 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  id={persona.id}
                  checked={persona.selected}
                  onCheckedChange={() => handlePersonaToggle(persona.id)}
                />
                <label
                  htmlFor={persona.id}
                  className="text-sm font-medium text-gray-900 cursor-pointer"
                >
                  {persona.name}
                </label>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleEditPersona(persona)}
                className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <Edit className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Selected Audiences Display */}
      {selectedCount > 0 && (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {personas
              .filter((p) => p.selected)
              .map((persona) => (
                <div
                  key={persona.id}
                  className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {persona.name}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePersonaToggle(persona.id)}
                    className="h-4 w-4 p-0 text-blue-500 hover:text-blue-700 cursor-pointer"
                  >
                    ×
                  </Button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
