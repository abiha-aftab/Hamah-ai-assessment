"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, MoreHorizontal, Lightbulb, X } from "lucide-react";
import SectionNavigation from "./SectionNavigation";
import ContentRenderer from "./ContentRenderer";
import PersonaDialog from "./PersonaDialog";
import { Persona } from "@/types";

export default function StrategyApp() {
  const [activeSection, setActiveSection] = useState("campaign-basics");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isPersonaDialogOpen, setIsPersonaDialogOpen] = useState(false);
  const [editingPersona, setEditingPersona] = useState<Persona | null>(null);
  const [showSmartTip, setShowSmartTip] = useState(true);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const getSectionTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      "campaign-basics": "Campaign Basics",
      "market-intelligence": "Market Intelligence",
      "strategic-objectives": "Strategic Objectives",
      "strategy-selection": "Strategy Selection",
      "strategy-customization": "Strategy Customization",
      "strategy-validation": "Strategy Validation",
      "concept-generation": "Concept Generation",
      "concept-refinement": "Concept Refinement",
      "concept-finalization": "Concept Finalization",
      "execution-planning": "Execution Planning",
      "resource-allocation": "Resource Allocation",
      "timeline-management": "Timeline Management",
    };
    return titles[section] || "Section";
  };

  const getSectionDescription = (section: string) => {
    const descriptions: { [key: string]: string } = {
      "campaign-basics":
        "Provide essential info about client, product, and resources.",
      "market-intelligence":
        "Analyze market landscape, competitors, and target audience insights.",
      "strategic-objectives":
        "Define clear objectives, success metrics, and key performance indicators.",
      "strategy-selection":
        "Choose the most effective strategy from our AI-generated recommendations.",
      "strategy-customization":
        "Customize your selected strategy to match your specific requirements.",
      "strategy-validation":
        "Validate and refine your strategy before moving to concept development.",
      "concept-generation":
        "Generate creative concepts based on your validated strategy.",
      "concept-refinement":
        "Refine and improve your concepts through iterative feedback.",
      "concept-finalization":
        "Finalize your concepts and prepare them for execution planning.",
      "execution-planning":
        "Create detailed execution plans for your finalized concepts.",
      "resource-allocation":
        "Allocate resources and assign responsibilities for execution.",
      "timeline-management":
        "Set timelines and milestones for successful project delivery.",
    };
    return descriptions[section] || "Complete this section to move forward.";
  };

  // Define all sections in order
  const allSections = [
    // Step 1 - Brief
    "campaign-basics",
    "market-intelligence",
    "strategic-objectives",
    // Step 2 - Strategy
    "strategy-selection",
    "strategy-customization",
    "strategy-validation",
    // Step 3 - Concept
    "concept-generation",
    "concept-refinement",
    "concept-finalization",
    // Step 4 - Execution
    "execution-planning",
    "resource-allocation",
    "timeline-management",
  ];

  const handleBack = () => {
    const currentIndex = allSections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(allSections[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = allSections.indexOf(activeSection);

    // Mark current section as completed
    if (!completedSections.includes(activeSection)) {
      setCompletedSections([...completedSections, activeSection]);
    }

    // Move to next section
    if (currentIndex < allSections.length - 1) {
      setActiveSection(allSections[currentIndex + 1]);
    }
  };

  const handlePersonaEdit = (persona: Persona) => {
    setEditingPersona(persona);
    setIsPersonaDialogOpen(true);
  };

  const handlePersonaSave = (personaData: Persona) => {
    // Handle saving persona data
    console.log("Saving persona:", personaData);
    setIsPersonaDialogOpen(false);
    setEditingPersona(null);
  };

  const handlePersonaDialogClose = () => {
    setIsPersonaDialogOpen(false);
    setEditingPersona(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <header className="border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Nike Concept 1st Try
            </h1>
            <Badge className="bg-red-500 hover:bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              In Progress
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="brand" className="gap-2 cursor-pointer">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="brandOutline" size="sm" className="cursor-pointer">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-56px)]">
        {/* Left Sidebar */}
        <aside className="w-80 border-r border-gray-200 bg-white p-6">
          <SectionNavigation
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            onBack={handleBack}
            onNext={handleNext}
            completedSections={completedSections}
            variant="sidebar"
          />

          {showSmartTip && (
            <div className="mt-8 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Smart Tip
                    </h4>
                    <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                      Clear objectives make strategy generation more focused and
                      effective.
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSmartTip(false)}
                  className="h-6 w-6 p-0 shrink-0 text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl">
            {/* Section Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {getSectionTitle(activeSection)}
                  </h2>
                  <p className="text-gray-600 mt-2 text-base">
                    {getSectionDescription(activeSection)}
                  </p>
                </div>
                <SectionNavigation
                  activeSection={activeSection}
                  onSectionChange={handleSectionChange}
                  onBack={handleBack}
                  onNext={handleNext}
                  variant="header"
                />
              </div>
            </div>

            {/* Content Cards */}
            <ContentRenderer
              activeSection={activeSection}
              uploadedFiles={uploadedFiles}
              onFilesChange={setUploadedFiles}
              onPersonaEdit={handlePersonaEdit}
            />

            {/* In-panel Bottom Navigation */}
            <div className="mt-8 border-t border-gray-200 pt-4">
              <SectionNavigation
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                onBack={handleBack}
                onNext={handleNext}
                variant="footer"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Persona Dialog */}
      <PersonaDialog
        isOpen={isPersonaDialogOpen}
        onClose={handlePersonaDialogClose}
        persona={editingPersona}
        onSave={handlePersonaSave}
      />
    </div>
  );
}
