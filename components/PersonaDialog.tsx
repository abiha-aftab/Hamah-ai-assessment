"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Calendar,
  MapPin,
  Link,
  Briefcase,
  BookOpen,
  Target,
  Rocket,
} from "lucide-react";
import FileUpload from "./FileUpload";
import { Persona, PersonaDialogProps } from "@/types";

const defaultPersona: Persona = {
  name: "",
  category: "",
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

const defaultGoals = [
  "Expand professional network",
  "Stay updated with latest trends",
  "Achieve career growth and leadership roles",
  "Develop new skills and expertise",
];

const defaultMotivations = [
  "Growing career and achieving recognition",
  "Building strong professional connections",
  "Staying ahead of industry trends",
  "Personal development and self-improvement",
];

export default function PersonaDialog({
  isOpen,
  onClose,
  persona,
  onSave,
}: PersonaDialogProps) {
  // Use a key to force remount when persona changes
  const personaKey = persona ? persona.name || "edit" : "new";

  // Compute initial form data based on persona
  const initialFormData = useMemo(() => {
    return persona ? { ...persona } : { ...defaultPersona };
  }, [persona]);

  const [formData, setFormData] = useState<Persona>(initialFormData);
  const [activeTab, setActiveTab] = useState<"detail" | "chat">("detail");

  // Update form data when persona changes (using key to avoid cascading renders)
  useEffect(() => {
    setFormData(initialFormData);
  }, [initialFormData]);

  const handleInputChange = (field: keyof Persona, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleMotivationToggle = (motivation: string) => {
    setFormData((prev) => ({
      ...prev,
      motivations: prev.motivations.includes(motivation)
        ? prev.motivations.filter((m) => m !== motivation)
        : [...prev.motivations, motivation],
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleDocumentsChange = (files: File[]) => {
    setFormData((prev) => ({ ...prev, documents: files }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} key={personaKey}>
      <DialogContent className="w-[98vw] max-w-[98vw]! max-h-[95vh] overflow-y-auto p-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {persona ? "Edit Persona" : "Create New Audience"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form Fields */}
          <div className="space-y-6">
            {/* Demographic */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Demographic
              </label>
              <Textarea
                value={formData.demographic}
                onChange={(e) =>
                  handleInputChange("demographic", e.target.value)
                }
                placeholder="Age: 34, Gender: Female, Marital status: Single, Occupation: Marketing Manager, Location: Urban city"
                className="min-h-[80px]"
              />
            </div>

            {/* Lifestyles */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Lifestyles
              </label>
              <Textarea
                value={formData.lifestyles}
                onChange={(e) =>
                  handleInputChange("lifestyles", e.target.value)
                }
                placeholder="Enjoys attending networking events, often socializes with colleagues after work..."
                className="min-h-[80px]"
              />
            </div>

            {/* Behavioral */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Behavioral
              </label>
              <Textarea
                value={formData.behavioral}
                onChange={(e) =>
                  handleInputChange("behavioral", e.target.value)
                }
                placeholder="Frequently engages with digital marketing platforms, actively experiments with new campaign tools..."
                className="min-h-[80px]"
              />
            </div>

            {/* Psychographic & Attitudinal */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Psychographic & Attitudinal
              </label>
              <Textarea
                value={formData.psychographic}
                onChange={(e) =>
                  handleInputChange("psychographic", e.target.value)
                }
                placeholder="Believes in the power of creativity and collaboration, values strong professional connections..."
                className="min-h-[80px]"
              />
            </div>

            {/* Persona Prompt */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Persona Prompt
              </label>
              <Textarea
                value={formData.personaPrompt}
                onChange={(e) =>
                  handleInputChange("personaPrompt", e.target.value)
                }
                placeholder="A 34-year-old extroverted woman living in the city, working as a marketing manager..."
                className="min-h-[60px]"
              />
            </div>

            {/* Upload Documents */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Upload Documents
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Upload interview notes, audience docs, or research (optional)
              </p>
              <FileUpload
                uploadedFiles={formData.documents}
                onFilesChange={handleDocumentsChange}
              />
            </div>

            {/* Remove Button */}
            {persona && (
              <Button
                variant="outline"
                className="text-red-600 border-red-300 cursor-pointer"
              >
                Remove
              </Button>
            )}
          </div>

          {/* Right Column - Persona Summary */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "detail"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("detail")}
              >
                Persona Detail
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "chat"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("chat")}
              >
                Live Chat
              </button>
            </div>

            {/* Persona Header */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8 text-gray-400" />
              </div>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Persona Name"
                className="text-center text-xl font-semibold border-none shadow-none"
              />
              <Textarea
                value={formData.quote}
                onChange={(e) => handleInputChange("quote", e.target.value)}
                placeholder="I thrive on connecting with people and staying ahead of new ideas."
                className="text-center text-gray-600 italic border-none shadow-none resize-none"
                rows={2}
              />
            </div>

            {/* Key Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Key Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-gray-400" />
                  <Input
                    value={formData.gender}
                    onChange={(e) =>
                      handleInputChange("gender", e.target.value)
                    }
                    placeholder="Gender"
                    className="border-none shadow-none p-0"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <Input
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    placeholder="Age"
                    className="border-none shadow-none p-0"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <Input
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    placeholder="Location"
                    className="border-none shadow-none p-0"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Link className="h-4 w-4 text-gray-400" />
                  <Input
                    value={formData.relationshipStatus}
                    onChange={(e) =>
                      handleInputChange("relationshipStatus", e.target.value)
                    }
                    placeholder="Relationship Status"
                    className="border-none shadow-none p-0"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-gray-400" />
                  <Input
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Title"
                    className="border-none shadow-none p-0"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4 text-gray-400" />
                  <Input
                    value={formData.education}
                    onChange={(e) =>
                      handleInputChange("education", e.target.value)
                    }
                    placeholder="Education"
                    className="border-none shadow-none p-0"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Detailed description of the persona..."
                className="min-h-[120px]"
              />
            </div>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {defaultGoals.map((goal) => (
                  <div key={goal} className="flex items-center space-x-2">
                    <Checkbox
                      id={goal}
                      checked={formData.goals.includes(goal)}
                      onCheckedChange={() => handleGoalToggle(goal)}
                    />
                    <label
                      htmlFor={goal}
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      {goal}
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Motivations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Motivations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {defaultMotivations.map((motivation) => (
                  <div key={motivation} className="flex items-center space-x-2">
                    <Checkbox
                      id={motivation}
                      checked={formData.motivations.includes(motivation)}
                      onCheckedChange={() => handleMotivationToggle(motivation)}
                    />
                    <label
                      htmlFor={motivation}
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      {motivation}
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Save Button */}
            <Button
              onClick={handleSave}
              variant="brand"
              className="w-full cursor-pointer"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
