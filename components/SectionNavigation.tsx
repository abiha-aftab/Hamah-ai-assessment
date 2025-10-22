"use client";

import { Button } from "@/components/ui/button";
import {
  Download,
  Check,
  FileText,
  Target,
  Lightbulb,
  Rocket,
} from "lucide-react";

interface SectionNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onBack: () => void;
  onNext: () => void;
  completedSections?: string[];
  variant?: "sidebar" | "header" | "footer";
}

export default function SectionNavigation({
  activeSection,
  onSectionChange,
  onBack,
  onNext,
  completedSections = [],
  variant = "sidebar",
}: SectionNavigationProps) {
  if (variant === "sidebar") {
    const primaryColor = "#0B2242";

    // Define all steps with their sub-items
    const steps = [
      {
        id: 1,
        title: "Brief",
        icon: FileText,
        description:
          "The more details you provide, the more accurate your generated strategy will be.",
        subItems: [
          { key: "campaign-basics", label: "Campaign Basics" },
          { key: "market-intelligence", label: "Market Intelligence" },
          { key: "strategic-objectives", label: "Strategic Objectives" },
        ],
      },
      {
        id: 2,
        title: "Strategy",
        icon: Target,
        description:
          "We've designed strategies aligned with your objectives. Pick the one that feels right.",
        subItems: [
          { key: "strategy-selection", label: "Strategy Selection" },
          { key: "strategy-customization", label: "Strategy Customization" },
          { key: "strategy-validation", label: "Strategy Validation" },
        ],
      },
      {
        id: 3,
        title: "Concept",
        icon: Lightbulb,
        description: "Concepts for your selected strategy",
        subItems: [
          { key: "concept-generation", label: "Concept Generation" },
          { key: "concept-refinement", label: "Concept Refinement" },
          { key: "concept-finalization", label: "Concept Finalization" },
        ],
      },
      {
        id: 4,
        title: "Execution",
        icon: Rocket,
        description:
          "Bring your strategy to life with detailed execution plans",
        subItems: [
          { key: "execution-planning", label: "Execution Planning" },
          { key: "resource-allocation", label: "Resource Allocation" },
          { key: "timeline-management", label: "Timeline Management" },
        ],
      },
    ];

    // Determine current step directly from the active section (so Back works predictably)
    const step1Keys = steps[0].subItems.map((s) => s.key);
    const step2Keys = steps[1].subItems.map((s) => s.key);
    const step3Keys = steps[2].subItems.map((s) => s.key);
    const step4Keys = steps[3].subItems.map((s) => s.key);

    const getStepFromSection = (section: string) => {
      if (step1Keys.includes(section)) return 1;
      if (step2Keys.includes(section)) return 2;
      if (step3Keys.includes(section)) return 3;
      if (step4Keys.includes(section)) return 4;
      return 1;
    };

    const currentStep = getStepFromSection(activeSection);
    const totalSubItems = steps.reduce(
      (sum, step) => sum + step.subItems.length,
      0
    );
    const progressPercent = (completedSections.length / totalSubItems) * 100;

    // Generate preview content for completed steps
    const getStepPreview = (stepId: number) => {
      switch (stepId) {
        case 1: // Brief
          return (
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-gray-500">Client</div>
                  <div className="text-sm font-semibold text-gray-900">
                    National Bank of Saudi Arabia
                  </div>
                </div>
                <div className="text-xs text-gray-500">Budget</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-gray-500">Audience</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Saudi nationals aged 25-40, tech-savvy, urban
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-900">$2M</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Timeline</div>
                <div className="text-sm font-semibold text-gray-900">
                  12 weeks
                </div>
              </div>
            </div>
          );
        case 2: // Strategy
          return (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  Selected Strategy
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Cultural Authenticity with Mo...
                </div>
                <div className="text-xs text-gray-500">
                  Position NBSA&apos;s digital platform as the perfect harmony
                  betwe...
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-purple-600 cursor-pointer">
                  Change Strategy
                </span>
              </div>
            </div>
          );
        case 3: // Concept
          return (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  Selected Concept
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Heritage Digital Club
                </div>
                <div className="text-xs text-gray-500">
                  Dynamic banner series showcasing NBSA&apos;s mobile ap...
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-purple-600 cursor-pointer">
                  Change Concept
                </span>
              </div>
            </div>
          );
        case 4: // Execution
          return (
            <div>
              <div className="text-xs text-gray-500">
                Your selected concept, now broken down into creative executions
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="relative pl-6">
        {/* Vertical track */}
        <div className="absolute left-2 top-0 bottom-0 w-[3px] bg-gray-200 rounded-full"></div>
        {/* Progress fill */}
        <div
          className="absolute left-2 top-0 w-[3px] rounded-full"
          style={{
            height: `${progressPercent}%`,
            backgroundColor: primaryColor,
          }}
        ></div>

        <div className="space-y-8">
          {steps.map((step) => {
            const isCurrentStep = step.id === currentStep;
            const isCompleted =
              step.id < currentStep ||
              (step.id === 4 && completedSections.length === totalSubItems);
            const IconComponent = step.icon;

            return (
              <div key={step.id}>
                {/* Step Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="h-12 w-12 rounded-2xl border-2 flex items-center justify-center"
                    style={{
                      borderColor: primaryColor,
                      backgroundColor:
                        isCurrentStep || isCompleted
                          ? primaryColor
                          : "transparent",
                    }}
                  >
                    {isCompleted ? (
                      <Check className="h-5 w-5 text-white" />
                    ) : (
                      <IconComponent
                        className={`h-5 w-5 ${
                          isCurrentStep ? "text-white" : "text-gray-700"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Step {step.id}</div>
                    <div className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </div>
                  </div>
                </div>

                {/* Step Description and Sub-items (current step) or Preview (completed steps) */}
                {isCurrentStep ? (
                  <>
                    <p className="text-gray-500 text-sm ml-15 mb-4">
                      {step.description}
                    </p>

                    <div className="ml-5 space-y-3">
                      {step.subItems.map((item) => {
                        const isActive = activeSection === item.key;
                        const isCompleted = completedSections.includes(
                          item.key
                        );
                        return (
                          <div
                            key={item.key}
                            className={`flex items-center justify-between rounded-2xl px-4 py-3 cursor-pointer transition-colors ${
                              isActive
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                            onClick={() => onSectionChange(item.key)}
                          >
                            <span className="text-lg font-semibold">
                              {item.label}
                            </span>
                            {isCompleted && (
                              <span className="text-green-600">
                                <Check className="h-5 w-5" />
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : isCompleted ? (
                  <div className="ml-5">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
                      {getStepPreview(step.id)}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm ml-15 mb-4">
                    {step.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === "header") {
    return (
      <>
        {activeSection === "campaign-basics" && (
          <Button variant="brandOutline" className="gap-2 cursor-pointer">
            <Download className="h-4 w-4" />
            Import Brief
          </Button>
        )}
      </>
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex items-center justify-between">
        <Button
          variant="brandOutline"
          className="cursor-pointer"
          onClick={onBack}
        >
          Back
        </Button>
        <Button variant="brand" className="cursor-pointer" onClick={onNext}>
          Next
        </Button>
      </div>
    );
  }

  return null;
}
