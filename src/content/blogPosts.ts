export type BlogPost = {
  slug: string;
  title: string;
  topic: string;
  description: string;
  introduction: string[];
  sections: { id: string; title: string; paragraphs: string[]; checklist?: string[] }[];
  contactPrompt: string;
};

export const businessEmail = "info@thesoftwareconsulting.com";

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-for-business-decisions",
    title: "AI for business decisions: from promising idea to useful workflow",
    topic: "AI & automation",
    description: "A practical guide to choosing an AI use case, preparing your data, evaluating results, and introducing automation with human oversight.",
    introduction: [
      "A convincing AI demonstration can make a difficult business problem look solved. A document goes in, a fluent answer comes out, and the possibilities seem obvious. The harder question is what happens on an ordinary working day: when information is missing, a customer asks an unusual question, or an employee needs to explain why a decision was made. That is where a useful AI initiative begins.",
      "For a business considering AI, the starting point should be a specific workflow and an observable outcome. Faster access to internal knowledge, less repetitive document review, and better preparation for customer conversations are concrete goals. This guide sets out a way to move from an attractive idea to a controlled pilot without confusing a polished answer with reliable business performance.",
    ],
    sections: [
      { id: "choose-a-workflow", title: "1. Choose a workflow with a clear owner", paragraphs: [
        "Start by watching how a task is completed today. Who requests the work? Which systems contain the necessary information? Where does someone copy data, search for context, or wait for an approval? Write down the steps and identify the person accountable for the outcome. A narrowly defined task is easier to evaluate than a broad ambition such as making the company more intelligent.",
        "Consider an illustrative support workflow. Before replying to a customer, an agent searches product documentation, checks account context, and drafts an explanation. An assistant could prepare a draft with links to relevant documents while the agent remains responsible for sending it. The initial goal is to reduce preparation effort while preserving answer quality. It is not necessary to automate the entire customer relationship to learn whether this step is useful.",
      ] },
      { id: "prepare-information", title: "2. Establish what information the system may use", paragraphs: [
        "Inventory the information needed for the chosen task. Identify its owner, how frequently it changes, and which employees are allowed to access it. A collection of outdated documents can produce a confident explanation of a policy that no longer exists. Before adding sophisticated automation, remove duplicates, mark authoritative sources, and define a process for retiring old material.",
        "Access boundaries also belong in the workflow design. An assistant should not reveal a restricted document simply because it can find it. Carry the user's permissions through retrieval and any connected tools. Decide what information may be sent to an external service and review the applicable service terms with the people responsible for your data. Keep the first pilot limited to information that the organization has explicitly approved for that use.",
      ] },
      { id: "evaluate-results", title: "3. Test usefulness with realistic examples", paragraphs: [
        "Build a small evaluation set from representative tasks, with sensitive details removed or handled under the organization's approved process. Include ordinary questions, ambiguous requests, outdated references, and cases where the correct response is to ask for more information. Have the workflow owner describe what a good result looks like before the team starts optimizing prompts or selecting components.",
        "Measure the complete task rather than the generation step alone. If a draft takes seconds to produce but several minutes to correct, the apparent speed improvement may disappear. Track reviewer time, factual errors, missing context, and whether cited sources actually support the answer. Compare the assisted workflow with the current process using similar tasks. Treat any claimed benefit as a hypothesis until your own evaluation supports it.",
      ] },
      { id: "design-oversight", title: "4. Make review and failure part of the experience", paragraphs: [
        "A reviewer needs enough context to make a decision. Show the proposed output alongside its sources, make edits straightforward, and provide a clear way to reject an answer. When the system cannot find supporting information, it should say so and route the task back to a person. A fabricated response is not a useful substitute for an honest gap in knowledge.",
        "Separate preparing a recommendation from taking an action. Drafting a message and sending it are different permissions; suggesting an account update and changing a record are different operations. Define explicit approval points for consequential actions. Where tools are connected, restrict the available operations and record what was requested, approved, and executed so that the team can investigate unexpected behavior.",
      ] },
      { id: "run-a-pilot", title: "5. Launch a bounded pilot and decide what comes next", paragraphs: [
        "Choose a small group of users who regularly perform the task and can explain where the assistant helps or creates work. Give them a short guide covering intended use, limitations, and escalation. Assign someone to review feedback, update source material, and pause the pilot if quality drops. Include operating cost and support effort in the assessment, alongside time saved and task quality.",
        "At the end of the pilot, make an explicit decision: expand, revise, or stop. Expansion should follow evidence that the workflow is useful and manageable. A pilot that reveals poor source data or an unclear business process can still be valuable because it identifies the next investment. The deliverable is a better operating decision, even when the answer is to improve the foundations before adding more AI.",
      ], checklist: ["One named workflow owner and a measurable outcome", "Approved information sources and permission boundaries", "Representative evaluation tasks and a manual comparison", "Human review, escalation, and a way to pause the pilot", "An operating budget and a documented expansion decision"] },
    ],
    contactPrompt: "Considering an AI assistant or document workflow? Tell us which task your team wants to improve, where the information lives, and what a useful result would look like.",
  },
  {
    slug: "cloud-modernization-roadmap",
    title: "A practical cloud modernization roadmap for growing businesses",
    topic: "Cloud & engineering",
    description: "Plan a modernization around business needs, system boundaries, reliable releases, recovery, and operating costs.",
    introduction: [
      "Modernization often begins with a symptom: releases feel risky, infrastructure is difficult to maintain, or a growing customer base exposes weaknesses in an application. Moving that application to a different hosting environment may help with some constraints, but it does not automatically improve the way the software is built or operated. A useful roadmap connects technical changes to the problem the business actually needs to solve.",
      "The goal is to make a system easier to change and dependable enough for its purpose. That could mean improving deployment automation, separating a troublesome integration, or replacing an unsupported component. It does not always require a rewrite. The following approach helps a business choose a manageable starting point and preserve service while the application evolves.",
    ],
    sections: [
      { id: "define-the-problem", title: "1. Describe the business constraint before the architecture", paragraphs: [
        "Document the moments when the existing system prevents useful work. Perhaps a pricing change requires a coordinated weekend release, or a reporting job slows customer transactions. Record who is affected, how often the problem occurs, and what the team currently does to work around it. These observations become the basis for deciding whether a proposed technical change deserves priority.",
        "Agree on a small set of outcomes. Examples include releasing a routine change during working hours, restoring service through a documented procedure, or keeping a background task from interrupting interactive requests. Avoid setting an ambitious availability or scale target without understanding its cost and business value. The roadmap should make the tradeoffs visible to the people funding and operating the system.",
      ] },
      { id: "map-the-system", title: "2. Map dependencies and identify a safe first slice", paragraphs: [
        "Create a plain-language map of the application, databases, scheduled jobs, external services, and deployment process. Include the less visible dependencies: a shared file location, an email integration, or a script that only one employee understands. For each component, record ownership and what would happen if it became unavailable. This often uncovers risks that are more urgent than the hosting arrangement itself.",
        "Choose a first slice with a clear boundary and a reversible release. An internal reporting task or a self-contained service may be easier to change than the central transaction path. Preserve existing interfaces where practical so that users do not need to adopt every change at once. A successful first slice should teach the team how to build, deploy, observe, and recover the new setup before it carries broader responsibility.",
      ] },
      { id: "simplify-delivery", title: "3. Make delivery repeatable", paragraphs: [
        "A modern environment is difficult to operate when deployments still depend on undocumented manual steps. Define the build process, keep configuration separate from code, and make environment setup reproducible. Identify which checks must pass before release and who owns a failed deployment. Make the path for an ordinary change simple enough that the team can follow it consistently.",
        "Design a rollback or forward-recovery procedure for each release. Database changes deserve particular attention because restoring old application code may not reverse a data migration. Introduce compatible schema changes before removing old fields or behavior, and verify the transition with representative data. Rehearse the recovery procedure outside production so that the first attempt does not happen during an incident.",
      ] },
      { id: "operate-reliably", title: "4. Design for observation and recovery", paragraphs: [
        "Decide what the team must see to distinguish a healthy system from a failing one. User-facing error rates, request latency, and the age of queued work can be more informative than a large collection of infrastructure charts. Connect alerts to actions a person can take. Each important alert should have an owner and a short explanation of how to investigate it.",
        "Treat backups and restoration as separate responsibilities. A completed backup job does not establish that the application can be restored within an acceptable period. Test recovery, identify the information that might be lost between backups, and involve business owners in choosing acceptable recovery expectations. Also consider external dependencies: an application may be running while its payment, email, or identity service is unavailable.",
      ] },
      { id: "control-cost", title: "5. Review cost and complexity as the system grows", paragraphs: [
        "Estimate the operating cost of the proposed design using the workload you actually expect. Include storage, network transfer, backups, monitoring, support, and the engineering effort needed to maintain it. A service with a low entry cost may become expensive under a different usage pattern. Document assumptions and revisit them once the first slice is running with real traffic.",
        "Give every component a reason to exist. Splitting an application into many services can introduce coordination, deployment, and troubleshooting work that a small team cannot easily absorb. A modular application with clear internal boundaries may be sufficient. Expand architectural complexity when evidence shows that independent scaling, ownership, or release needs justify the additional operating burden.",
      ], checklist: ["A business problem and observable improvement criteria", "A dependency map with clear component owners", "A reversible first migration slice", "Repeatable deployments and a rehearsed recovery procedure", "A cost estimate that includes ongoing engineering effort"] },
    ],
    contactPrompt: "Planning a cloud migration or untangling a difficult application? Share your current setup, the operational problem, and any timing constraints so we can discuss a practical starting point.",
  },
  {
    slug: "human-centered-product-design",
    title: "Human-centered product design: turn customer friction into a clearer experience",
    topic: "Product & UX",
    description: "Learn how research, focused user journeys, accessible forms, and small usability studies can guide better product decisions.",
    introduction: [
      "A website or application can look polished and still make an ordinary task difficult. A customer may be unsure which service to choose, unable to understand a form error, or reluctant to continue because the next step is unclear. These problems are easy to overlook when a team already knows how its product works. Human-centered design starts with the experience of the person trying to get something done.",
      "For a growing business, the practical goal is to remove uncertainty from the journeys that matter most. That might be booking an appointment, requesting a quote, or setting up an account. This guide describes a repeatable way to learn where people struggle, choose changes with a clear purpose, and verify that the resulting experience helps them complete their task.",
    ],
    sections: [
      { id: "understand-the-task", title: "1. Understand the customer's task and context", paragraphs: [
        "Begin with a task, not a screen. Ask what someone is trying to accomplish, what prompted the visit, and what information they need before acting. A customer comparing service providers may care about scope, availability, and how to ask a question. An existing customer returning to reschedule an appointment has a different goal. Combining these needs into one generic audience can obscure the choices each journey requires.",
        "Speak with people who resemble your intended customers and ask them to describe recent experiences. Specific stories are more useful than broad preferences about colors or layout. Listen for the work they did outside the product: calling for clarification, collecting documents, or keeping notes elsewhere. These details reveal gaps in the service experience that a visual redesign alone might not address.",
      ] },
      { id: "map-the-journey", title: "2. Map one important journey from entry to completion", paragraphs: [
        "Write down the steps from a realistic entry point to a successful outcome. Someone might arrive through an article, explore a related service, and send an inquiry. At each step, note the question the person needs answered. Does the article explain who the service is for? Does the service page describe what happens after an inquiry? Does the form confirm that the message was received?",
        "Look for interruptions in that sequence. A navigation label may use internal terminology, an important contact option may be hidden, or a required field may ask for information the customer does not have. Prioritize issues that block the task or undermine confidence. A short, understandable journey is often more valuable than adding another section of promotional copy or a complex interaction.",
      ] },
      { id: "prototype-the-decisions", title: "3. Prototype the decisions before polishing the interface", paragraphs: [
        "A prototype can be a set of simple screens with representative words and realistic content. Its purpose is to test whether people understand the sequence and can make the necessary decisions. Use meaningful service names, plausible form fields, and a clear final state. Placeholder copy can hide comprehension problems because it prevents participants from judging what the product is actually asking them to do.",
        "Give a participant a realistic task and observe without explaining the interface. Ask them to say what they expect to happen, then watch where they hesitate. Avoid directing them to the correct button or asking whether they like the design. Record the specific obstacle and its effect on completion. A few focused sessions can identify useful issues, while broader claims about an entire audience require more evidence.",
      ] },
      { id: "design-for-real-use", title: "4. Make forms and content work in real conditions", paragraphs: [
        "People use products on small screens, with a keyboard, while distracted, or with assistive technology. Make essential actions available without hover, provide visible focus states, and use clear headings and descriptive links. Give inputs persistent labels so that their meaning remains visible after typing. These are practical design considerations that belong in the initial implementation and review process.",
        "Treat error handling as part of the core journey. When a form cannot be submitted, explain which field needs attention and how to fix it. Preserve entered information where possible, and provide an understandable response when a service is unavailable. If email or another contact method is offered as a fallback, keep it easy to find. A user should not need to restart the entire journey because of a recoverable problem.",
      ] },
      { id: "measure-and-improve", title: "5. Evaluate outcomes after release", paragraphs: [
        "Choose a measurement that reflects the intended task. For an inquiry flow, that could include successful submissions, validation failures, and the quality of information received by the team. Page views alone cannot tell you whether a customer understood an offer. Combine appropriate product analytics with support questions and direct observation to understand why a journey succeeds or breaks down.",
        "Review the experience after the change has been used in normal conditions. A shorter form may attract more inquiries while leaving the business without enough context to respond. An additional explanation may help some visitors and distract others. Use these findings to refine the next iteration. Human-centered design is an ongoing habit of checking assumptions against actual use, with a clear owner for acting on what the team learns.",
      ], checklist: ["A defined audience, task, and successful outcome", "Research based on recent customer experiences", "A journey map with unanswered questions and blockers", "A realistic prototype tested without coaching", "Keyboard, mobile, error-state, and post-release reviews"] },
    ],
    contactPrompt: "Are customers dropping out of a signup, booking, or inquiry flow? Tell us which journey needs attention and what you have observed so we can discuss research and design support.",
  },
  {
    slug: "business-intelligence-data-foundations",
    title: "Better business intelligence starts with trustworthy data foundations",
    topic: "Data & analytics",
    description: "Build a practical analytics foundation with shared metric definitions, owned data sources, quality checks, and decision-focused dashboards.",
    introduction: [
      "When two dashboards give different answers to the same question, the problem is rarely solved by adding a third dashboard. A sales team may count a customer at contract signature while finance waits for a first payment. Both numbers can be internally consistent and still create confusion in a planning meeting. Before a business invests in more reporting, it needs shared definitions and a clear path from source information to a decision.",
      "Data foundations are the agreements, responsibilities, and technical processes that make reporting understandable. They include who owns a source, how changes are handled, and what happens when information is incomplete. This guide outlines a focused approach for businesses that want useful analytics without turning the first reporting project into an open-ended infrastructure program.",
    ],
    sections: [
      { id: "start-with-decisions", title: "1. Start with a decision the business needs to make", paragraphs: [
        "Choose one recurring decision and identify the person responsible for it. An operations manager may need to understand why orders are delayed; a service owner may need to compare capacity with incoming demand. Ask what action would follow from each possible answer. If no one can describe a decision that a report will change, the team should clarify the requirement before building a data pipeline.",
        "Write down the minimum information needed to support that decision. For delivery performance, the team may need order creation time, promised delivery time, actual completion time, and a reason for exceptions. Decide how current the information must be. A weekly planning discussion may not require a live streaming platform. Matching freshness to the decision helps keep the first implementation proportionate and easier to operate.",
      ] },
      { id: "define-metrics", title: "2. Agree on definitions before comparing numbers", paragraphs: [
        "Create a short definition for every important metric. Include the calculation, source, time period, exclusions, and owner. For an active-customer measure, specify what activity counts and how the time window works. For an order metric, clarify whether canceled, refunded, or test orders are included. Make these definitions visible near the report rather than leaving them in a private conversation or an analyst's memory.",
        "Resolve differences with the people who use the numbers. Sometimes two definitions serve different purposes and both should remain, with distinct names. A financial measure and an operational measure need not be identical. The requirement is that readers understand what each represents. Record definition changes so that a sudden movement in a chart can be distinguished from a change in the underlying business.",
      ] },
      { id: "choose-data-storage", title: "3. Choose storage around the workload and ownership", paragraphs: [
        "Inventory the source systems, expected data volume, access patterns, and existing team skills. Structured operational reporting may fit a curated analytical store. Raw files, documents, or information needed for several future purposes may require a different storage layer. Terms such as warehouse and lake describe useful approaches, but choosing a label is less important than explaining how the proposed arrangement supports the first reporting need.",
        "Keep raw source information distinguishable from cleaned and business-ready datasets. This makes it easier to investigate discrepancies and repeat transformations when a rule changes. Define retention, permissions, and an owner for each layer. Avoid collecting information simply because storage is available: every additional source creates work around access, quality, interpretation, and eventual removal.",
      ] },
      { id: "check-quality", title: "4. Make quality and freshness visible", paragraphs: [
        "Add checks that reflect actual failure modes. Look for missing identifiers, duplicate events, unexpected changes in row counts, and records with impossible time sequences. Reconcile important totals with the source system using comparable definitions. A successful pipeline run only shows that the process completed; it does not prove that the incoming data was complete or that the transformation expressed the correct business rule.",
        "Show when a dataset was last updated and what readers should do if it is stale. Assign someone to investigate failed checks and define whether an affected report should display a warning or stop updating. Silent gaps can be misleading because an ordinary-looking chart encourages readers to trust it. Make exceptions visible enough that the business can decide whether it has sufficient information to act.",
      ] },
      { id: "deliver-useful-reporting", title: "5. Deliver a small report and review its use", paragraphs: [
        "Build the first report around the decision identified at the start. Provide a summary, enough detail to investigate a change, and clear definitions. A manager should be able to answer what changed, where to look next, and whether the information is current. Resist filling the page with every available metric; visual density can make the important question harder to answer.",
        "Sit with the report owner during a real review meeting. Notice which questions the report answers and where participants return to spreadsheets or manual checks. Those gaps guide the next iteration. Track the work required to maintain the report as well as its use. A modest, trusted dataset that supports a recurring decision provides a stronger foundation for expansion than a large collection of dashboards without accountable owners.",
      ], checklist: ["A recurring decision and a named report owner", "Written metric definitions with explicit exclusions", "Traceable sources and understandable transformation steps", "Quality checks, freshness indicators, and an escalation owner", "A report reviewed during an actual business discussion"] },
    ],
    contactPrompt: "Working with conflicting dashboards or manual spreadsheet reports? Describe the decisions you need to support and the systems holding your data so we can discuss a focused analytics foundation.",
  },
  {
    slug: "security-in-software-delivery",
    title: "Build security into everyday software delivery",
    topic: "Security & delivery",
    description: "A practical approach to access control, secrets, data handling, release review, and incident preparation for software teams.",
    introduction: [
      "Security work becomes difficult to sustain when it exists only as a review immediately before launch. By that point, decisions about access, data storage, and third-party integrations may already be embedded throughout the application. Addressing those decisions during normal planning and delivery gives a team more room to make thoughtful changes and understand the operational consequences.",
      "For a growing business, the goal is a set of practices that people can actually follow. The right starting point depends on the information the system handles, the actions it permits, and the consequences of misuse or downtime. This article outlines general engineering practices for making security an ongoing responsibility. Industry-specific obligations and assurance requirements need their own assessment for the particular business.",
    ],
    sections: [
      { id: "understand-exposure", title: "1. Understand what the application needs to protect", paragraphs: [
        "List the important information and operations in the product. Customer contact details, internal documents, billing changes, and administrative actions create different concerns. Draw a simple map showing where information enters, where it is stored, and which systems receive it. Include exports, background jobs, and support tools. The application interface is only one part of the path that information takes through a business.",
        "Discuss plausible failure scenarios with product and engineering owners. Could one customer access another customer's records? Could a former employee still use an administrative account? Could a leaked credential permit changes in production? Rank the scenarios by their likely impact and the existing controls. This creates a reasoned backlog instead of a collection of unrelated tools and settings that no one has time to maintain.",
      ] },
      { id: "control-access", title: "2. Make access decisions explicit", paragraphs: [
        "Define which roles may perform each important operation and enforce those rules where requests are processed. Hiding a button does not prevent someone from sending the same request directly. Check both the action and the resource: a person allowed to read an invoice should still be restricted to the invoices they are entitled to see. Review these boundaries whenever new workflows or integrations are introduced.",
        "Give staff and services the access they need for their current responsibilities. Use individual accounts where practical so that access can be reviewed and removed without disrupting unrelated users. Apply stronger authentication to sensitive administration, and include account removal in the employee departure process. Review long-lived service access as well; automated integrations can be forgotten because they do not appear in ordinary staff account lists.",
      ] },
      { id: "handle-secrets-and-data", title: "3. Handle credentials and customer information deliberately", paragraphs: [
        "Keep production credentials out of source code, shared documents, and casual chat messages. Use the deployment environment's approved secret handling process, separate access between environments, and define how a credential will be replaced if it is exposed. Removing a secret from the latest code revision is not a substitute for replacing it when it may remain in history or another person's copy.",
        "Collect only the information needed for the product's purpose and define how long it should remain. Review logs, error reports, and analytics events because sensitive information can spread into those systems unintentionally. Use representative test data instead of copying live customer records into development without an approved process. Document which integrations receive information and give someone responsibility for reviewing that inventory when the product changes.",
      ] },
      { id: "review-delivery", title: "4. Put meaningful checks into the release process", paragraphs: [
        "Review changes to authentication, permissions, uploads, and external requests with particular care. Use automated checks to identify known dependency issues and accidental credential exposure, then assign someone to assess and resolve findings. A long list of unreviewed alerts does little to improve the product. Make the handling process clear enough that an engineer knows when a finding blocks release and when it needs further investigation.",
        "Test the security boundaries that matter to the application. For example, verify that a user cannot access another account's records by changing an identifier, and that an expired session cannot complete a privileged action. Include rejected requests and error paths alongside successful ones. These checks are most useful when they reflect the product's actual risks and remain understandable to the team maintaining them.",
      ] },
      { id: "prepare-response", title: "5. Prepare for incidents and practice recovery", paragraphs: [
        "Write a short response guide before an incident occurs. Identify who coordinates the response, how to disable affected access, and where the team can find relevant logs. Keep a communication path available if the primary service is down. Record which business owners need to be involved so that technical containment and customer communication can be coordinated with the necessary context.",
        "Practice a realistic scenario such as an exposed integration credential or an unavailable database. Check that the team can find the right owner, replace access, and restore required information through a tested procedure. Review what was confusing and update the guide. Security becomes more sustainable when each release and exercise improves a small set of well-owned practices instead of relying on a single expert to remember every step.",
      ], checklist: ["An inventory of important data, actions, and integrations", "Server-enforced permissions for each sensitive operation", "A defined process for storing and replacing credentials", "Risk-focused review and actionable automated findings", "Named incident owners and a practiced recovery procedure"] },
    ],
    contactPrompt: "Preparing a product launch or reviewing an existing application's security practices? Tell us about the product, its users, and the areas you want to assess so we can discuss engineering support.",
  },
];

export const getReadingMinutes = (post: BlogPost) => {
  const words = [
    ...post.introduction,
    ...post.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.checklist ?? [])]),
  ].join(" ").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};
