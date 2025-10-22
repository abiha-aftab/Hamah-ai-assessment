import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FileUpload from "./FileUpload";
import TargetAudienceDropdown from "./TargetAudienceDropdown";
import { Persona } from "@/types";

interface ContentRendererProps {
  activeSection: string;
  uploadedFiles: File[];
  onFilesChange: (files: File[]) => void;
  onPersonaEdit: (persona: Persona) => void;
}

export default function ContentRenderer({
  activeSection,
  uploadedFiles,
  onFilesChange,
  onPersonaEdit,
}: ContentRendererProps) {
  switch (activeSection) {
    // Step 2 - Strategy sections
    case "strategy-selection":
      return (
        <div className="space-y-4">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                AI-Generated Strategy Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-3">
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Cultural Authenticity Strategy
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Position your brand as the perfect harmony between tradition
                    and innovation...
                  </p>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Digital-First Approach
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Leverage digital platforms to reach tech-savvy audiences...
                  </p>
                </div>
                <div className="p-4 border border-gray-200 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Community-Driven Growth
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Build authentic connections through community engagement...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );

    case "strategy-customization":
      return (
        <div className="space-y-4">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Strategy Customization
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                Customize your selected strategy by adjusting key parameters,
                target audience segments, messaging tone, and campaign
                objectives to align with your specific business goals.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    case "strategy-validation":
      return (
        <div className="space-y-4">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Strategy Validation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                Validate your strategy through stakeholder review, market
                testing, and feasibility analysis to ensure it meets all
                requirements before proceeding to concept development.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    // Step 3 - Concept sections
    case "concept-generation":
      return (
        <div className="space-y-4">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Concept Generation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                Generate creative concepts based on your validated strategy. Our
                AI will create multiple concept variations for you to review and
                select from.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    case "concept-refinement":
      return (
        <div className="space-y-4">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Concept Refinement
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                Refine and improve your selected concepts through iterative
                feedback, stakeholder input, and creative optimization to ensure
                they meet your brand standards.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    case "concept-finalization":
      return (
        <div className="space-y-4">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Concept Finalization
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                Finalize your concepts and prepare them for execution planning.
                Ensure all creative elements are approved and ready for
                implementation.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    // Step 4 - Execution sections
    case "execution-planning":
      return (
        <div className="space-y-4">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Execution Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                Create detailed execution plans for your finalized concepts,
                including timelines, deliverables, and success metrics to ensure
                successful implementation.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    case "resource-allocation":
      return (
        <div className="space-y-4">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Resource Allocation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                Allocate resources and assign responsibilities for execution,
                including budget distribution, team assignments, and vendor
                management.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    case "timeline-management":
      return (
        <div className="space-y-6">
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Timeline Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed text-sm">
                Set timelines and milestones for successful project delivery,
                including key checkpoints, review cycles, and launch dates.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    case "strategic-objectives":
      return (
        <div className="space-y-6">
          {/* Primary Objectives */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Primary Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Increase Brand Awareness
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Achieve 40% increase in brand recognition among target
                      audience within 6 months through strategic content
                      marketing and digital advertising.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Drive Lead Generation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Generate 500 qualified leads per month through targeted
                      campaigns and conversion-optimized landing pages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Improve Market Position
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Establish thought leadership in AI automation space and
                      differentiate from competitors through unique value
                      proposition.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Metrics */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Success Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Brand Awareness</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Brand recall: 40% increase</li>
                    <li>• Social media mentions: +60%</li>
                    <li>• Website traffic: +50%</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Lead Generation</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Qualified leads: 500/month</li>
                    <li>• Conversion rate: 15%</li>
                    <li>• Cost per lead: &lt;$50</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Engagement</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Email open rate: 25%</li>
                    <li>• Content engagement: +80%</li>
                    <li>• Demo requests: 100/month</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Revenue Impact</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pipeline value: $2M+</li>
                    <li>• Sales cycle: -20%</li>
                    <li>• Customer acquisition cost: -30%</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Performance Indicators */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Key Performance Indicators (KPIs)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-900">
                    Website Traffic Growth
                  </span>
                  <span className="text-blue-600 font-semibold">+50%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-900">
                    Lead Conversion Rate
                  </span>
                  <span className="text-blue-600 font-semibold">15%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-900">
                    Social Media Engagement
                  </span>
                  <span className="text-blue-600 font-semibold">+80%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-900">
                    Email Open Rate
                  </span>
                  <span className="text-blue-600 font-semibold">25%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-900">
                    Cost Per Acquisition
                  </span>
                  <span className="text-blue-600 font-semibold">$45</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );

    case "market-intelligence":
      return (
        <div className="space-y-4">
          {/* Market & Product Background */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Market & Product Background
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                The AI workflow automation market is experiencing rapid growth,
                with a projected CAGR of 23.5% through 2028. Key drivers include
                digital transformation initiatives, remote work trends, and
                increasing demand for operational efficiency. NovaFlow positions
                itself in the mid-market segment, competing against established
                players like UiPath and Automation Anywhere.
              </p>
            </CardContent>
          </Card>

          {/* Competitors */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Competitors
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>UiPath:</strong> Market leader with 30% market share,
                strong enterprise focus, complex implementation.
                <br />
                <strong>Automation Anywhere:</strong> Cloud-native platform,
                good for SMBs, limited AI capabilities.
                <br />
                <strong>Microsoft Power Automate:</strong> Office 365
                integration, basic automation, limited enterprise features.
                <br />
                <strong>Zapier:</strong> Simple workflow automation, limited
                enterprise security, no AI features.
              </p>
            </CardContent>
          </Card>

          {/* Target Audience */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="py-2">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Target Audience
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <TargetAudienceDropdown
                onPersonaEdit={(persona) => onPersonaEdit(persona!)}
              />
            </CardContent>
          </Card>

          {/* Previous Campaigns & Learnings */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Previous Campaigns & Learnings
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>Q3 2023 Campaign:</strong> &quot;Automate in 30
                Days&quot; - Generated 15% increase in trial signups but low
                conversion due to complexity messaging.
                <br />
                <strong>Key Learnings:</strong> Technical audiences prefer
                ROI-focused messaging over feature lists. Case studies with
                specific metrics perform 3x better than generic testimonials.
                Video demos increase conversion by 40%.
              </p>
            </CardContent>
          </Card>
        </div>
      );

    default:
      return (
        <div className="space-y-2">
          {/* Client Details */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Client Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed text-sm">
                TechNova Inc. - a global SaaS company specializing in AI-driven
                business solutions. Founded in 2018, they have grown to serve
                over 10,000 enterprise clients worldwide. Their mission is to
                democratize AI technology for businesses of all sizes through
                intuitive, scalable platforms.
              </p>
            </CardContent>
          </Card>

          {/* Product/Service */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Product/Service
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed text-sm">
                The focus of this campaign is NovaFlow, TechNova&apos;s new
                AI-powered workflow automation product. NovaFlow helps
                businesses streamline their operations by automatically
                identifying bottlenecks, suggesting optimizations, and
                implementing process improvements. It integrates seamlessly with
                existing enterprise systems and requires minimal technical
                expertise.
              </p>
            </CardContent>
          </Card>

          {/* Mandatory Requirements */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardHeader className="">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Mandatory Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed text-sm">
                All materials must include TechNova&apos;s official logo and
                tagline &quot;Intelligence Simplified&quot;. Campaign must align
                with brand palette (navy blue #1e3a8a, teal #0d9488, white).
                Avoid direct competitor comparisons. Ensure GDPR compliance for
                all data collection. Target audience: C-level executives and IT
                decision makers in mid to large enterprises.
              </p>
            </CardContent>
          </Card>

          {/* File Upload Component */}
          <FileUpload
            uploadedFiles={uploadedFiles}
            onFilesChange={onFilesChange}
          />
        </div>
      );
  }
}
