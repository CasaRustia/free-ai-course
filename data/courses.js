// Team Casa Rustia Training Hub course data
// General business module version with unique lessons and unique multiple-choice quiz questions.
window.TCR_COURSES = [
  {
    "id": "operations-management",
    "title": "Business Operations Management",
    "role": "For supervisors, team leads, small business owners, and operations staff",
    "description": "A practical 14-module course for managing daily business operations, service quality, issues, resources, vendors, reporting, and continuous improvement using AI safely.",
    "outcomes": [
      "Diagnose daily business problems and decide what needs action first",
      "Create practical checklists, SOPs, handovers, trackers, and escalation messages",
      "Coordinate people, suppliers, customer issues, stock, and service recovery without overpromising",
      "Use evidence, risk, and human judgment before finalising any AI-assisted decision"
    ],
    "days": [
      {
        "day": 1,
        "title": "Start-of-Day Business Control",
        "objective": "Build a daily control routine that catches problems early.",
        "content": [
          "Real-life business problem: You start the day with unread emails, delayed orders, a staff absence, low stock, and one customer complaint. Without a control routine, small problems become urgent by afternoon.",
          "This topic teaches you how to handle start-of-day business control in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List all open items from messages, email, trackers, and yesterday’s handover.",
          "Separate items into customer-impact, deadline-impact, cost-impact, and internal admin.",
          "Assign an owner and next action for each item.",
          "Check what needs proof, such as photos, screenshots, stock counts, or supplier confirmation.",
          "Send a short team update before work becomes reactive."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with start-of-day business control. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about start-of-day business control. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for start-of-day business control. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Start-of-Day Business Control.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a start-of-day control checklist for a small business team with at least six checks, owners, and escalation rules.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 1: In the 'Start-of-Day Business Control' module, what should the learner do first?",
            "options": [
              "Rush to answer all emails before reading them",
              "Assign tasks to the team without checking what is pending",
              "Ignore yesterday's handover and start fresh",
              "Review open items, absences, and priorities before acting"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 1: Which multiple-choice answer best shows correct handling of 'Start-of-Day Business Control'?",
            "options": [
              "A written priority list with owner, action, and follow-up for each item",
              "A quick verbal update to the first staff member you see",
              "Waiting until lunch to check what is urgent",
              "Forwarding all emails to your manager without reading them"
            ],
            "answer": 0
          },
          {
            "q": "Business Operations Management Module 1: In the 'Start-of-Day Business Control' scenario, what is the safest way to use AI?",
            "options": [
              "Paste confidential staff details into a public AI tool",
              "Use AI to organise today's open items into a priority list, then verify each fact yourself before acting",
              "Use AI only to write a longer version of your checklist",
              "Let AI send the morning team update without your review"
            ],
            "answer": 1
          }
        ],
        "module": "Module 01"
      },
      {
        "day": 2,
        "title": "Prioritising Urgent Business Issues",
        "objective": "Rank work based on risk, customer impact, money impact, and deadlines.",
        "content": [
          "Real-life business problem: A customer order is delayed, the website contact form is broken, a supplier invoice is overdue, and social media content is pending. Everything feels urgent, but not everything has the same risk.",
          "This topic teaches you how to handle prioritising urgent business issues in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Write down each issue in one sentence.",
          "Rate each issue by customer impact, revenue impact, operational risk, and deadline.",
          "Handle safety, access, payment, customer, and compliance risks first.",
          "Defer low-impact tasks with a clear new deadline.",
          "Explain priorities to the team so everyone understands the order of work."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with prioritising urgent business issues. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about prioritising urgent business issues. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for prioritising urgent business issues. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Prioritising Urgent Business Issues.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Rank five mixed business issues from critical to low priority and explain why.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 2: In the 'Prioritising Urgent Business Issues' module, what should the learner do first?",
            "options": [
              "Ask a colleague to prioritise for you without explaining the issues",
              "Identify each issue's customer impact, revenue risk, and deadline before deciding order",
              "Tackle the easiest task first to build momentum",
              "Handle all tasks in the order they arrived"
            ],
            "answer": 1
          },
          {
            "q": "Business Operations Management Module 2: Which multiple-choice answer best shows correct handling of 'Prioritising Urgent Business Issues'?",
            "options": [
              "A mental note of which task feels most urgent",
              "Sending a bulk message to the team saying everything is urgent",
              "Completing low-priority admin before checking customer-facing issues",
              "A ranked issue list with impact rating, owner, and deferred tasks given new deadlines"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 2: In the 'Prioritising Urgent Business Issues' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to close low-priority tickets automatically",
              "Use AI to rate each issue by impact and urgency, then confirm the ranking matches real business facts before acting",
              "Share customer account details with AI to let it decide priority",
              "Use AI to delay all non-urgent tasks indefinitely"
            ],
            "answer": 1
          }
        ],
        "module": "Module 02"
      },
      {
        "day": 3,
        "title": "Handling a Customer Complaint",
        "objective": "Respond professionally, verify facts, solve the issue, and prevent repeat complaints.",
        "content": [
          "Real-life business problem: A customer says their order or service was handled poorly and is asking for a refund. They are upset, but the team does not yet know exactly what happened.",
          "This topic teaches you how to handle handling a customer complaint in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Acknowledge the concern without blaming anyone.",
          "Ask for the order/reference number and any evidence needed.",
          "Check internal records, messages, delivery status, and staff notes.",
          "Offer the correct next step only after confirming facts.",
          "Document the complaint, action taken, and prevention measure."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with handling a customer complaint. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about handling a customer complaint. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for handling a customer complaint. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Handling a Customer Complaint.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a customer reply, internal investigation message, incident note, and prevention action for a complaint about poor service.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 3: In the 'Handling a Customer Complaint' module, what should the learner do first?",
            "options": [
              "Dismiss the complaint if the customer seems emotional",
              "Apologise immediately and promise a full refund before investigating",
              "Forward the complaint to another department without responding",
              "Listen to the complaint fully, confirm the facts, and acknowledge the customer before acting"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 3: Which multiple-choice answer best shows correct handling of 'Handling a Customer Complaint'?",
            "options": [
              "A written complaint record with the issue, what was confirmed, the action taken, and the follow-up date",
              "A verbal promise with no documentation",
              "A brief apology with no follow-up action",
              "Closing the complaint without notifying the customer of the outcome"
            ],
            "answer": 0
          },
          {
            "q": "Business Operations Management Module 3: In the 'Handling a Customer Complaint' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to generate a generic apology without acknowledging the real issue",
              "Let AI send the complaint resolution directly to the customer",
              "Use AI to draft a professional response, then verify the facts and tone are accurate before sending to the customer",
              "Paste the customer's personal details into a public AI chatbot"
            ],
            "answer": 2
          }
        ],
        "module": "Module 03"
      },
      {
        "day": 4,
        "title": "Shift or Daily Handover",
        "objective": "Create handovers that the next person can act on immediately.",
        "content": [
          "Real-life business problem: One team member finishes work with three unresolved tasks, one supplier follow-up, and one customer waiting for an update. If the handover is vague, the next person wastes time asking questions.",
          "This topic teaches you how to handle shift or daily handover in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Start with the most urgent unresolved items.",
          "Include what happened, what was done, and what is still pending.",
          "Name the owner, deadline, and required proof.",
          "Add links or references where needed.",
          "End with risks that need monitoring."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with shift or daily handover. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about shift or daily handover. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for shift or daily handover. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Shift or Daily Handover.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Turn messy end-of-day notes into a clear business handover.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 4: In the 'Shift or Daily Handover' module, what should the learner do first?",
            "options": [
              "Hand over only the most serious issues and skip minor ones",
              "Leave a verbal note with the next shift and go home",
              "Ask the incoming shift to read through all emails themselves",
              "Confirm all open tasks, pending issues, and critical updates are documented before the shift ends"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 4: Which multiple-choice answer best shows correct handling of 'Shift or Daily Handover'?",
            "options": [
              "A handover only covering stock levels and ignoring service issues",
              "An email listing only completed tasks with no pending items mentioned",
              "A quick chat in the corridor about what happened",
              "A written handover with open tasks, status, owner, urgent items, and the next required action"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 4: In the 'Shift or Daily Handover' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to shorten the handover to one sentence per shift",
              "Use AI to format the handover notes clearly, then confirm all facts are accurate before the incoming shift relies on them",
              "Allow AI to generate the handover without input from the outgoing staff",
              "Share customer account numbers in AI to create a faster handover"
            ],
            "answer": 1
          }
        ],
        "module": "Module 04"
      },
      {
        "day": 5,
        "title": "Incident Documentation",
        "objective": "Turn incomplete or emotional notes into factual records.",
        "content": [
          "Real-life business problem: A payment error, delivery mistake, staff conflict, or customer incident happens. Different people give different versions and management needs a clear factual record.",
          "This topic teaches you how to handle incident documentation in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Record the date, time, people involved, and business area affected.",
          "Separate confirmed facts from opinions or assumptions.",
          "Attach evidence such as emails, receipts, system logs, or screenshots.",
          "Write the immediate action taken and who was notified.",
          "Add follow-up action and prevention step."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with incident documentation. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about incident documentation. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for incident documentation. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Incident Documentation.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a factual incident report for a business error using confirmed facts only.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 5: In the 'Incident Documentation' module, what should the learner do first?",
            "options": [
              "Document only incidents that resulted in a formal complaint",
              "Wait until the end of the week to document all incidents together",
              "Record the incident immediately using confirmed facts, time, location, people involved, and what happened",
              "Ask the person involved to document it themselves without your involvement"
            ],
            "answer": 2
          },
          {
            "q": "Business Operations Management Module 5: Which multiple-choice answer best shows correct handling of 'Incident Documentation'?",
            "options": [
              "A note saying 'incident occurred, resolved'",
              "A timestamped incident record with confirmed facts, witness details, actions taken, and prevention notes",
              "An email to the team warning them about the incident with no formal record",
              "A verbal report to the manager with no written follow-up"
            ],
            "answer": 1
          },
          {
            "q": "Business Operations Management Module 5: In the 'Incident Documentation' scenario, what is the safest way to use AI?",
            "options": [
              "Paste injured staff member details into a public AI tool to generate the report",
              "Use AI to structure the incident report format, then fill it with verified facts and have the responsible person review it before filing",
              "Allow AI to determine the cause of the incident from a brief description",
              "Use AI to decide whether an incident is serious enough to document"
            ],
            "answer": 1
          }
        ],
        "module": "Module 05"
      },
      {
        "day": 6,
        "title": "Supplier and Vendor Follow-Up",
        "objective": "Get clear answers from vendors without creating confusion.",
        "content": [
          "Real-life business problem: A supplier has not confirmed delivery, pricing, or availability. Your team needs the answer today before making commitments to customers.",
          "This topic teaches you how to handle supplier and vendor follow-up in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Identify exactly what information is missing.",
          "Prepare a short message with reference number, deadline, and required answer.",
          "Ask for written confirmation, not verbal promises only.",
          "Update your internal tracker after the vendor replies.",
          "Escalate if the delay affects customers, revenue, or compliance."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with supplier and vendor follow-up. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about supplier and vendor follow-up. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for supplier and vendor follow-up. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Supplier and Vendor Follow-Up.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Draft a vendor follow-up email and a supplier comparison tracker.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 6: In the 'Supplier and Vendor Follow-Up' module, what should the learner do first?",
            "options": [
              "Review the original order, delivery terms, and past messages before contacting the supplier",
              "Escalate to management immediately without attempting contact",
              "Chase the supplier by phone without checking your previous messages first",
              "Assume the supplier will follow up on their own if the order is late"
            ],
            "answer": 0
          },
          {
            "q": "Business Operations Management Module 6: Which multiple-choice answer best shows correct handling of 'Supplier and Vendor Follow-Up'?",
            "options": [
              "Cancelling the order without confirmation of the delivery status",
              "Forwarding the supplier's contact to your manager without following up yourself",
              "A written follow-up referencing the order number, agreed delivery date, current status, and required response deadline",
              "A text saying 'where is the order?'"
            ],
            "answer": 2
          },
          {
            "q": "Business Operations Management Module 6: In the 'Supplier and Vendor Follow-Up' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to select a new supplier without checking existing contracts",
              "Use AI to draft the follow-up message with order details, then verify tone, facts, and deadlines are correct before sending",
              "Let AI send supplier follow-ups automatically based on due dates",
              "Share supplier payment terms and contract details in a public AI tool"
            ],
            "answer": 1
          }
        ],
        "module": "Module 06"
      },
      {
        "day": 7,
        "title": "Stock and Resource Monitoring",
        "objective": "Prevent running out of supplies, tools, or materials.",
        "content": [
          "Real-life business problem: The team keeps discovering missing materials only when they are already needed. This causes delays, rushed purchases, and extra costs.",
          "This topic teaches you how to handle stock and resource monitoring in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List critical stock, tools, files, or resources needed for daily work.",
          "Set minimum levels or reorder triggers.",
          "Assign a person to count and update each item.",
          "Record usage, restock dates, supplier, and cost.",
          "Review repeated shortages and adjust the minimum level."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with stock and resource monitoring. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about stock and resource monitoring. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for stock and resource monitoring. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Stock and Resource Monitoring.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a stock/resource tracker for a general business team.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 7: In the 'Stock and Resource Monitoring' module, what should the learner do first?",
            "options": [
              "Reorder stock whenever it runs out completely",
              "Check current stock levels against minimum thresholds and confirm what triggered the shortage before reordering",
              "Order maximum quantities to avoid running out again",
              "Ask a team member to check the stock when they have time"
            ],
            "answer": 1
          },
          {
            "q": "Business Operations Management Module 7: Which multiple-choice answer best shows correct handling of 'Stock and Resource Monitoring'?",
            "options": [
              "A verbal instruction to order more of everything",
              "A stock check record showing current levels, minimum required, reorder quantity, owner, and expected delivery date",
              "Marking items as adequate without physically checking the stock",
              "Sending a bulk reorder without checking what is already on order"
            ],
            "answer": 1
          },
          {
            "q": "Business Operations Management Module 7: In the 'Stock and Resource Monitoring' scenario, what is the safest way to use AI?",
            "options": [
              "Paste supplier pricing agreements into a public AI tool for comparison",
              "Use AI to reduce all stock orders by 20% to cut costs",
              "Use AI to generate a reorder summary from stock data, then confirm quantities and supplier details are accurate before placing orders",
              "Allow AI to place stock orders automatically based on usage patterns"
            ],
            "answer": 2
          }
        ],
        "module": "Module 07"
      },
      {
        "day": 8,
        "title": "Quality Control Before Delivery",
        "objective": "Catch mistakes before customers see them.",
        "content": [
          "Real-life business problem: A product, report, service, or order is almost ready, but mistakes often appear after delivery. Rework wastes time and damages trust.",
          "This topic teaches you how to handle quality control before delivery in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Define what finished quality looks like.",
          "Create a pre-delivery checklist.",
          "Check accuracy, completeness, presentation, and customer requirements.",
          "Ask for proof of completion before marking done.",
          "Record defects so repeated errors can be fixed."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with quality control before delivery. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about quality control before delivery. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for quality control before delivery. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Quality Control Before Delivery.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a quality-control checklist before sending work to a customer or manager.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 8: In the 'Quality Control Before Delivery' module, what should the learner do first?",
            "options": [
              "Deliver the product first and deal with quality issues if the customer complains",
              "Delegate quality checks to the newest team member to save time",
              "Assume quality is acceptable because the last batch was fine",
              "Check the product or service against the agreed quality standard before it leaves the building"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 8: Which multiple-choice answer best shows correct handling of 'Quality Control Before Delivery'?",
            "options": [
              "A quick visual check and approval with no record",
              "A completed quality checklist confirming each standard was met, signed by the checker, with any defects noted and resolved",
              "Sending the delivery with a note saying quality is 'approximately correct'",
              "Logging quality checks only for orders from important customers"
            ],
            "answer": 1
          },
          {
            "q": "Business Operations Management Module 8: In the 'Quality Control Before Delivery' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to skip quality checks for repeat orders to speed up delivery",
              "Share customer quality requirements in a public AI tool to generate a compliance certificate",
              "Use AI to draft the quality checklist based on your product standards, then have a qualified person complete and verify each check",
              "Allow AI to approve product quality from a description without physical inspection"
            ],
            "answer": 2
          }
        ],
        "module": "Module 08"
      },
      {
        "day": 9,
        "title": "SOP Creation for Repeated Tasks",
        "objective": "Turn repeated work into clear step-by-step instructions.",
        "content": [
          "Real-life business problem: A common task is done differently by every team member. This causes inconsistent results and training problems.",
          "This topic teaches you how to handle sop creation for repeated tasks in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Choose one repeated task with clear start and end points.",
          "Write the purpose, tools needed, and responsible role.",
          "List each step in the exact order.",
          "Add quality checks and common mistakes.",
          "Add escalation instructions for unusual cases."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with sop creation for repeated tasks. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about sop creation for repeated tasks. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for sop creation for repeated tasks. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for SOP Creation for Repeated Tasks.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a simple SOP for a repeated business task such as order checking, onboarding, reporting, or file processing.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 9: In the 'SOP Creation for Repeated Tasks' module, what should the learner do first?",
            "options": [
              "Write the SOP from memory without checking how the task is actually done",
              "Write the SOP only after the task causes a problem",
              "Copy an SOP from another company and use it as-is",
              "Observe the current process, confirm the correct steps with the person doing the task, and identify any gaps before writing"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 9: Which multiple-choice answer best shows correct handling of 'SOP Creation for Repeated Tasks'?",
            "options": [
              "A paragraph describing the task in general terms",
              "An SOP written by management without input from the staff doing the task",
              "A numbered SOP with purpose, scope, each step in order, required tools, common errors, and a review date",
              "A checklist with no context on why each step matters"
            ],
            "answer": 2
          },
          {
            "q": "Business Operations Management Module 9: In the 'SOP Creation for Repeated Tasks' scenario, what is the safest way to use AI?",
            "options": [
              "Paste confidential process data into a public AI tool to create the SOP",
              "Use AI to structure and format the SOP from your confirmed process notes, then have the task owner review every step before publishing",
              "Use AI to replace the SOP with a chatbot that answers process questions",
              "Allow AI to write the full SOP from a one-line task description without review"
            ],
            "answer": 1
          }
        ],
        "module": "Module 09"
      },
      {
        "day": 10,
        "title": "Performance and Accountability Tracking",
        "objective": "Follow up missed work fairly and clearly.",
        "content": [
          "Real-life business problem: A staff member says a task is done, but proof is missing. Another task is late for the third time. The business needs accountability without unfair accusations.",
          "This topic teaches you how to handle performance and accountability tracking in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Record the task, owner, deadline, and expected proof.",
          "Ask for an update using neutral language.",
          "Separate one-time blockers from repeated missed expectations.",
          "Document impact on customers, money, or team workload.",
          "Set the next deadline and escalation path."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with performance and accountability tracking. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about performance and accountability tracking. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for performance and accountability tracking. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Performance and Accountability Tracking.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create an accountability tracker and a professional follow-up message for a missed deadline.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 10: In the 'Performance and Accountability Tracking' module, what should the learner do first?",
            "options": [
              "Assume low performance is a personal issue and avoid raising it",
              "Wait for the annual review to address performance gaps",
              "Identify the specific performance gap, confirm the facts, and discuss it with the individual before taking action",
              "Share performance concerns with the wider team before speaking to the individual"
            ],
            "answer": 2
          },
          {
            "q": "Business Operations Management Module 10: Which multiple-choice answer best shows correct handling of 'Performance and Accountability Tracking'?",
            "options": [
              "Documenting performance only when formal action is being taken",
              "A written performance note with the observed behaviour, the expected standard, the agreed action, and a review date",
              "A warning letter without a prior conversation",
              "A general comment in a team meeting that standards are dropping"
            ],
            "answer": 1
          },
          {
            "q": "Business Operations Management Module 10: In the 'Performance and Accountability Tracking' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to send automated performance warnings to staff",
              "Use AI to structure performance notes and suggested talking points, then confirm accuracy and fairness before any conversation",
              "Use AI to rate staff performance automatically from attendance data alone",
              "Share individual staff performance records in a public AI tool"
            ],
            "answer": 1
          }
        ],
        "module": "Module 10"
      },
      {
        "day": 11,
        "title": "Risk Escalation",
        "objective": "Know when to escalate instead of trying to solve everything alone.",
        "content": [
          "Real-life business problem: A problem may affect customers, money, legal compliance, safety, or company reputation. Waiting too long can make it worse.",
          "This topic teaches you how to handle risk escalation in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Identify the risk category: customer, financial, legal, safety, system, or reputation.",
          "Check how urgent and how severe the risk is.",
          "Gather evidence before escalating.",
          "Send a short escalation with facts, impact, options, and recommendation.",
          "Continue monitoring until a decision is made."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with risk escalation. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about risk escalation. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for risk escalation. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Risk Escalation.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write an escalation message for a business issue that may affect customers or revenue.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 11: In the 'Risk Escalation' module, what should the learner do first?",
            "options": [
              "Escalate every minor issue to senior management to avoid responsibility",
              "Wait to see if the risk resolves itself before telling anyone",
              "Mention the risk casually in a general team chat",
              "Identify the risk clearly, assess its urgency and impact, and escalate through the correct channel immediately"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 11: Which multiple-choice answer best shows correct handling of 'Risk Escalation'?",
            "options": [
              "A verbal heads-up to a nearby colleague with no follow-up",
              "A risk escalation after the incident has already happened",
              "An email marked low priority containing urgent safety information",
              "A written escalation with the risk identified, evidence, potential impact, recommended action, and the person responsible for deciding"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 11: In the 'Risk Escalation' scenario, what is the safest way to use AI?",
            "options": [
              "Share internal risk records in a public AI tool for analysis",
              "Allow AI to decide whether an issue needs to be escalated",
              "Use AI to delay escalations until enough data is available",
              "Use AI to draft the escalation message clearly and concisely, then verify all facts and urgency level before sending to the right person"
            ],
            "answer": 3
          }
        ],
        "module": "Module 11"
      },
      {
        "day": 12,
        "title": "Weekly Operations Report",
        "objective": "Summarise business performance in a useful way.",
        "content": [
          "Real-life business problem: Management asks what happened this week, but updates are scattered across chats, emails, spreadsheets, and staff notes.",
          "This topic teaches you how to handle weekly operations report in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Collect wins, issues, numbers, complaints, delays, and pending risks.",
          "Group updates by theme instead of dumping every detail.",
          "Show what was completed, what is blocked, and what needs a decision.",
          "Use numbers where possible.",
          "End with next week’s priorities."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with weekly operations report. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about weekly operations report. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for weekly operations report. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Weekly Operations Report.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a weekly operations report with completed items, open risks, metrics, and next actions.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 12: In the 'Weekly Operations Report' module, what should the learner do first?",
            "options": [
              "Copy last week's report and change the dates",
              "Submit the report without checking it against source records",
              "Write the report from memory without checking the actual data",
              "Gather confirmed data from trackers, logs, and team updates before drafting the report"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 12: Which multiple-choice answer best shows correct handling of 'Weekly Operations Report'?",
            "options": [
              "A report submitted the day after the deadline with no explanation",
              "A lengthy report covering everything equally with no prioritisation",
              "A structured report with key metrics, what changed from last week, issues, actions taken, and next steps",
              "A bullet-point email with no structure or conclusions"
            ],
            "answer": 2
          },
          {
            "q": "Business Operations Management Module 12: In the 'Weekly Operations Report' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to fill in missing data points with estimated figures",
              "Use AI to format and summarise the report from your confirmed data, then review each figure and conclusion before sending",
              "Paste confidential financial data into a public AI tool to create the report",
              "Allow AI to pull data from live systems and submit the report automatically"
            ],
            "answer": 1
          }
        ],
        "module": "Module 12"
      },
      {
        "day": 13,
        "title": "Continuous Improvement",
        "objective": "Fix the root cause, not just the latest mistake.",
        "content": [
          "Real-life business problem: The same type of complaint or delay keeps happening. The team solves each case individually but never removes the cause.",
          "This topic teaches you how to handle continuous improvement in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Identify the repeated issue and how often it happens.",
          "Map the process where the mistake occurs.",
          "Find whether the cause is training, unclear SOP, missing tool, workload, or supplier delay.",
          "Create one small improvement and assign an owner.",
          "Review results after one week or one cycle."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with continuous improvement. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about continuous improvement. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for continuous improvement. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Continuous Improvement.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a root-cause and improvement plan for a repeated business issue.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 13: In the 'Continuous Improvement' module, what should the learner do first?",
            "options": [
              "Suggest improvements without measuring the current process first",
              "Wait for a formal review cycle before suggesting any improvements",
              "Implement a new process without informing the team",
              "Identify the specific process causing the problem, confirm the root cause with the team, and propose a testable improvement"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 13: Which multiple-choice answer best shows correct handling of 'Continuous Improvement'?",
            "options": [
              "Presenting an improvement idea without evidence of the current problem",
              "Changing the process immediately without a trial period",
              "A suggestion dropped in a team chat with no follow-up",
              "A documented improvement proposal with the problem, current process, proposed change, expected benefit, and review timeline"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 13: In the 'Continuous Improvement' scenario, what is the safest way to use AI?",
            "options": [
              "Share staff productivity data in a public AI tool for benchmarking",
              "Use AI to replace the current process immediately without a pilot test",
              "Allow AI to redesign the process automatically based on efficiency metrics",
              "Use AI to analyse the current process and suggest improvements, then test the suggestions against real data and get team input before implementing"
            ],
            "answer": 3
          }
        ],
        "module": "Module 13"
      },
      {
        "day": 14,
        "title": "AI-Assisted Operations Safely",
        "objective": "Use AI to organise operations work without letting it invent facts.",
        "content": [
          "Real-life business problem: You want AI to help write reports, messages, checklists, and plans, but business decisions still need human judgment and verified facts.",
          "This topic teaches you how to handle ai-assisted operations safely in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Remove private or unnecessary sensitive details before using AI.",
          "Give AI the role, context, audience, and output format.",
          "Ask AI not to invent facts.",
          "Check every name, number, date, rule, and decision.",
          "Edit the final output before sending or saving."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with ai-assisted operations safely. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about ai-assisted operations safely. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for ai-assisted operations safely. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for AI-Assisted Operations Safely.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Use AI to turn messy business notes into a verified action plan, then write what you checked before using it.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Operations Management Module 14: In the 'AI-Assisted Operations Safely' module, what should the learner do first?",
            "options": [
              "Use any AI tool that produces the fastest result regardless of data security",
              "Allow AI to make operational decisions without human review",
              "Identify the task, confirm what data can be safely shared, and choose an approved AI tool before using it",
              "Share the full operations manual with AI to get a complete process redesign"
            ],
            "answer": 2
          },
          {
            "q": "Business Operations Management Module 14: Which multiple-choice answer best shows correct handling of 'AI-Assisted Operations Safely'?",
            "options": [
              "Sharing AI-generated decisions with customers as if they were confirmed facts",
              "Using AI to replace all manual checks in a high-risk process",
              "Copying AI output directly into official records without review",
              "A clear AI use log showing the tool used, input provided, output received, and the human verification completed before the output was used"
            ],
            "answer": 3
          },
          {
            "q": "Business Operations Management Module 14: In the 'AI-Assisted Operations Safely' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft, organise, and summarise operational content, then verify accuracy, privacy, and appropriateness before using the output",
              "Paste personal customer or staff data into a public AI tool to save time",
              "Allow AI to access live operational systems and make changes automatically",
              "Use AI to replace the final human decision on all operational matters"
            ],
            "answer": 0
          }
        ],
        "module": "Module 14"
      }
    ]
  },
  {
    "id": "project-management",
    "title": "Business Project Management",
    "role": "For business owners, project managers, team leads, and project decision-makers",
    "description": "A practical 14-module course for planning, leading, monitoring, and closing general business projects using structured decision-making and AI support.",
    "outcomes": [
      "Define a project goal, scope, success measures, and risks clearly",
      "Build realistic timelines, responsibilities, updates, and decision logs",
      "Handle scope changes, blockers, stakeholder updates, and project closeout",
      "Use AI to organise project work while keeping business decisions human-led"
    ],
    "days": [
      {
        "day": 1,
        "title": "Project Goal and Scope",
        "objective": "Define what the project will and will not include.",
        "content": [
          "Real-life business problem: A business wants to launch a new process, product, campaign, or system, but everyone has a different idea of what success means.",
          "This topic teaches you how to handle project goal and scope in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Write the business problem the project solves.",
          "Define the final deliverable in plain language.",
          "List what is included and excluded.",
          "Agree on success measures, deadline, and decision-maker.",
          "Confirm scope before work begins."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with project goal and scope. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about project goal and scope. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for project goal and scope. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Project Goal and Scope.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a project scope statement for a business improvement project.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 1: In the 'Project Goal and Scope' module, what should the learner do first?",
            "options": [
              "Set a broad scope to allow flexibility throughout the project",
              "Confirm the project goal, define what is in and out of scope, and get stakeholder sign-off before any work begins",
              "Start with the tasks and define the goal later once the team is active",
              "Begin the project before the goal is agreed upon by all stakeholders"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 1: Which multiple-choice answer best shows correct handling of 'Project Goal and Scope'?",
            "options": [
              "A scope document written by one person without stakeholder input",
              "An email to the team saying the project is approved",
              "A project plan without a defined goal, relying on the team to decide as they go",
              "A project brief with a confirmed goal, defined scope boundaries, stakeholder agreement, and a clear out-of-scope section"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Management Module 1: In the 'Project Goal and Scope' scenario, what is the safest way to use AI?",
            "options": [
              "Paste client contract details into a public AI tool to extract the project scope",
              "Use AI to draft the project brief and scope document, then confirm with all stakeholders that the goal, scope, and boundaries are accurate before finalising",
              "Use AI to approve the project scope without stakeholder review",
              "Allow AI to define the project scope based on the project title alone"
            ],
            "answer": 1
          }
        ],
        "module": "Module 01"
      },
      {
        "day": 2,
        "title": "Stakeholder Mapping",
        "objective": "Know who needs updates, input, approval, or training.",
        "content": [
          "Real-life business problem: A project gets delayed because the right people were not consulted early enough.",
          "This topic teaches you how to handle stakeholder mapping in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List everyone affected by the project.",
          "Mark who decides, who contributes, who uses the output, and who only needs updates.",
          "Choose the update frequency for each group.",
          "Identify possible objections early.",
          "Create a communication plan."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with stakeholder mapping. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about stakeholder mapping. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for stakeholder mapping. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Stakeholder Mapping.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a stakeholder map and update plan.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 2: In the 'Stakeholder Mapping' module, what should the learner do first?",
            "options": [
              "Create the stakeholder map after the project has started to save time",
              "Assume the project team members are the only stakeholders",
              "Identify only the most senior stakeholders and ignore others",
              "List all people and groups affected by the project, confirm their level of influence and interest, and identify who needs what communication"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Management Module 2: Which multiple-choice answer best shows correct handling of 'Stakeholder Mapping'?",
            "options": [
              "A list of names with no roles, influence ratings, or communication needs",
              "A stakeholder register with each person's role, level of influence, interest in the project, and required communication frequency",
              "Sending the same update to all stakeholders regardless of their involvement",
              "A map created by the project manager alone without input from the team"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 2: In the 'Stakeholder Mapping' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to identify all stakeholders from the project brief automatically",
              "Use AI to decide who is a key stakeholder without consulting the project team",
              "Share confidential stakeholder contact details in a public AI tool",
              "Use AI to draft the initial stakeholder list and communication matrix, then validate each entry with the project sponsor before using it"
            ],
            "answer": 3
          }
        ],
        "module": "Module 02"
      },
      {
        "day": 3,
        "title": "Work Breakdown",
        "objective": "Break a large project into manageable tasks.",
        "content": [
          "Real-life business problem: The project feels too big because the team only has a general target, not clear work packages.",
          "This topic teaches you how to handle work breakdown in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Start with the final deliverable.",
          "Break it into phases.",
          "Break each phase into tasks with owners.",
          "Identify dependencies between tasks.",
          "Add estimated dates and proof of completion."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with work breakdown. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about work breakdown. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for work breakdown. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Work Breakdown.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a work breakdown for a business launch or improvement project.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 3: In the 'Work Breakdown' module, what should the learner do first?",
            "options": [
              "Estimate task durations before breaking down the project into components",
              "Decompose the project into deliverables, then break each deliverable into tasks small enough to assign and track",
              "Assign work to the team and let them define their own tasks",
              "Create a work breakdown after the project timeline has been set"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 3: Which multiple-choice answer best shows correct handling of 'Work Breakdown'?",
            "options": [
              "A task list created by one person without input from the people doing the work",
              "A list of activities with no connection to deliverables or owners",
              "A work breakdown structure with deliverables, sub-tasks, assigned owners, estimated effort, and dependencies identified",
              "A breakdown that combines all tasks under a single deliverable"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Management Module 3: In the 'Work Breakdown' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to assign tasks to team members based on their job titles",
              "Share confidential project contracts in a public AI tool to generate the work breakdown",
              "Use AI to estimate all task durations without team input",
              "Use AI to structure the work breakdown from your confirmed deliverables list, then have the team validate each task, owner, and estimate"
            ],
            "answer": 3
          }
        ],
        "module": "Module 03"
      },
      {
        "day": 4,
        "title": "Timeline Planning",
        "objective": "Build a realistic schedule instead of hopeful dates.",
        "content": [
          "Real-life business problem: Management wants the project finished quickly, but approvals, suppliers, testing, and training all take time.",
          "This topic teaches you how to handle timeline planning in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List all tasks and dependencies.",
          "Estimate realistic duration with buffer.",
          "Mark approval points and external dependencies.",
          "Create milestones.",
          "Communicate risks in the timeline early."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with timeline planning. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about timeline planning. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for timeline planning. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Timeline Planning.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Build a milestone timeline with risks and dependencies.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 4: In the 'Timeline Planning' module, what should the learner do first?",
            "options": [
              "Build the timeline based on the best-case scenario for all tasks",
              "Set the project deadline first and work backwards without checking capacity",
              "Confirm all tasks, their dependencies, and team capacity before building the timeline",
              "Copy the timeline from a previous similar project without reviewing it"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Management Module 4: Which multiple-choice answer best shows correct handling of 'Timeline Planning'?",
            "options": [
              "A timeline set by management without input from the people doing the work",
              "A project timeline with tasks, dependencies, milestones, assigned owners, buffer time, and a baseline for tracking changes",
              "A single-date Gantt chart with all tasks listed as parallel",
              "A calendar with start and end dates but no task dependencies or milestones"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 4: In the 'Timeline Planning' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to set the project timeline automatically based on the scope document",
              "Use AI to draft the timeline from your task list and dependencies, then have the team confirm durations and flag any conflicts before finalising",
              "Use AI to compress the timeline by removing buffer time to meet an earlier deadline",
              "Paste team member availability data into a public AI tool for scheduling"
            ],
            "answer": 1
          }
        ],
        "module": "Module 04"
      },
      {
        "day": 5,
        "title": "Project Risk Register",
        "objective": "Identify risks before they become emergencies.",
        "content": [
          "Real-life business problem: A supplier delay, unclear requirement, staff availability issue, or technical problem could stop the project.",
          "This topic teaches you how to handle project risk register in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List possible risks.",
          "Rate likelihood and impact.",
          "Create prevention and response actions.",
          "Assign each risk owner.",
          "Review the risk register weekly."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with project risk register. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about project risk register. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for project risk register. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Project Risk Register.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a risk register for a general business project.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 5: In the 'Project Risk Register' module, what should the learner do first?",
            "options": [
              "Log risks only after they have become issues",
              "Create the risk register at the end of the project as a lessons-learned exercise",
              "Identify potential risks early, assess their likelihood and impact, and assign a mitigation owner for each before work begins",
              "List only the risks that are most likely to happen"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Management Module 5: Which multiple-choice answer best shows correct handling of 'Project Risk Register'?",
            "options": [
              "A general note that risks exist and will be managed",
              "A risk register with each risk described, likelihood rated, impact rated, mitigation action confirmed, owner assigned, and review date set",
              "A risk list created by the project manager alone without team input",
              "A register with risks listed but no mitigation actions or owners"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 5: In the 'Project Risk Register' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to remove risks from the register that have not occurred yet",
              "Allow AI to automatically update the risk register as the project progresses",
              "Share project financial data in a public AI tool to identify budget risks",
              "Use AI to identify common risks for this type of project and draft the register format, then have the team validate each risk and confirm mitigations"
            ],
            "answer": 3
          }
        ],
        "module": "Module 05"
      },
      {
        "day": 6,
        "title": "Budget and Resource Planning",
        "objective": "Check money, people, tools, and time before work starts.",
        "content": [
          "Real-life business problem: The project begins but later discovers there is no budget for software, contractor time, materials, or training.",
          "This topic teaches you how to handle budget and resource planning in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List required people, tools, materials, subscriptions, and approvals.",
          "Estimate cost and time for each resource.",
          "Check what is already available.",
          "Identify gaps and request approval.",
          "Track actual cost against planned cost."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with budget and resource planning. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about budget and resource planning. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for budget and resource planning. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Budget and Resource Planning.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a simple project resource and budget plan.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 6: In the 'Budget and Resource Planning' module, what should the learner do first?",
            "options": [
              "Begin the project and track costs as they happen without an upfront budget",
              "Confirm the project scope, list all required resources, get actual cost estimates, and build contingency before presenting the budget",
              "Set the budget as low as possible to get project approval, then request more later",
              "Allocate budget based on last year's spending without reviewing the new project scope"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 6: Which multiple-choice answer best shows correct handling of 'Budget and Resource Planning'?",
            "options": [
              "A budget with each resource listed, unit cost confirmed, quantity required, contingency included, and approval obtained before spending",
              "A budget set by finance without input from the project team",
              "A rough estimate submitted without a breakdown",
              "A budget covering only direct costs and ignoring staff time and overheads"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Management Module 6: In the 'Budget and Resource Planning' scenario, what is the safest way to use AI?",
            "options": [
              "Paste supplier pricing agreements into a public AI tool to compare options",
              "Use AI to reduce the budget estimate by a percentage to stay within the target",
              "Allow AI to calculate the project budget from the scope document automatically",
              "Use AI to format the budget template and check for missing cost categories, then verify each figure against real supplier quotes and resource rates"
            ],
            "answer": 3
          }
        ],
        "module": "Module 06"
      },
      {
        "day": 7,
        "title": "Status Reporting",
        "objective": "Write project updates that help managers decide.",
        "content": [
          "Real-life business problem: A project update says 'in progress' but does not show blockers, decisions needed, or deadline risk.",
          "This topic teaches you how to handle status reporting in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Start with overall status: on track, at risk, or blocked.",
          "List completed work since last update.",
          "List blockers and decision needed.",
          "Show next steps and due dates.",
          "Keep it short and evidence-based."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with status reporting. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about status reporting. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for status reporting. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Status Reporting.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a weekly project status report.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 7: In the 'Status Reporting' module, what should the learner do first?",
            "options": [
              "Wait until the next milestone is reached before sending any update",
              "Confirm current progress against the plan, identify any issues, and report an accurate status before communicating to stakeholders",
              "Report only completed milestones and omit work in progress",
              "Send a positive status update to keep stakeholders calm even if the project is behind"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 7: Which multiple-choice answer best shows correct handling of 'Status Reporting'?",
            "options": [
              "An email saying 'project is going well'",
              "A status report written by a team member without the project manager's review",
              "A dashboard that shows all tasks as green regardless of actual progress",
              "A status report with progress against milestones, issues raised, decisions needed, risks updated, and next actions confirmed"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Management Module 7: In the 'Status Reporting' scenario, what is the safest way to use AI?",
            "options": [
              "Share stakeholder names and communication preferences in a public AI tool",
              "Use AI to rewrite the status report to make the project appear on track when it is not",
              "Allow AI to generate status reports automatically from project management tool data without review",
              "Use AI to draft the status report from your confirmed project data, then verify each metric and issue is accurately represented before distributing"
            ],
            "answer": 3
          }
        ],
        "module": "Module 07"
      },
      {
        "day": 8,
        "title": "Managing Blockers",
        "objective": "Unblock work systematically.",
        "content": [
          "Real-life business problem: A task is stuck because someone has not approved, supplied, clarified, or completed something.",
          "This topic teaches you how to handle managing blockers in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Name the blocker exactly.",
          "Identify who can remove it.",
          "Explain impact if it remains blocked.",
          "Give a clear deadline for response.",
          "Escalate only with facts and options."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with managing blockers. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about managing blockers. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for managing blockers. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Managing Blockers.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a blocker escalation with impact and recommended action.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 8: In the 'Managing Blockers' module, what should the learner do first?",
            "options": [
              "Remove the blocker yourself without informing the project owner",
              "Identify what is blocking progress, confirm who owns the blocker, and escalate with a clear impact statement if it cannot be resolved quickly",
              "Log the blocker without any escalation or action",
              "Continue working on other tasks and hope the blocker resolves itself"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 8: Which multiple-choice answer best shows correct handling of 'Managing Blockers'?",
            "options": [
              "A message in the team chat saying 'stuck on something'",
              "Reassigning blocked tasks to another person without informing the original owner",
              "A blocker log entry with the issue described, impact on the timeline confirmed, owner identified, escalation path clear, and resolution tracked",
              "Waiting for the next project meeting to raise a blocker that is causing immediate delay"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Management Module 8: In the 'Managing Blockers' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to resolve the blocker by suggesting the most common solution for that type of issue",
              "Use AI to help draft a clear blocker escalation message with impact and resolution options, then verify facts and urgency before sending",
              "Use AI to automatically reassign tasks when a blocker is detected",
              "Share confidential project contracts in a public AI tool to identify who is responsible for the blocker"
            ],
            "answer": 1
          }
        ],
        "module": "Module 08"
      },
      {
        "day": 9,
        "title": "Scope Change Control",
        "objective": "Handle new requests without damaging the project.",
        "content": [
          "Real-life business problem: A stakeholder asks to add extra features or tasks halfway through the project.",
          "This topic teaches you how to handle scope change control in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Write the requested change clearly.",
          "Check impact on time, cost, quality, and resources.",
          "Decide whether to approve, defer, or reject.",
          "Update the project plan if approved.",
          "Record the decision in a change log."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with scope change control. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about scope change control. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for scope change control. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Scope Change Control.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a change request assessment.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 9: In the 'Scope Change Control' module, what should the learner do first?",
            "options": [
              "Accept scope changes verbally and update the work immediately",
              "Reject all scope changes to avoid disrupting the project",
              "Implement small scope changes without formal approval to save time",
              "Document the change request, assess its impact on timeline, budget, and resources, and get approval before any work changes"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Management Module 9: Which multiple-choice answer best shows correct handling of 'Scope Change Control'?",
            "options": [
              "A change request form with the change described, impact on scope, timeline, and budget assessed, and approval obtained before implementation",
              "Updating the project plan to reflect the change before approval is received",
              "An email chain discussing the change but no formal decision recorded",
              "An informal agreement between the project manager and the requester"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Management Module 9: In the 'Scope Change Control' scenario, what is the safest way to use AI?",
            "options": [
              "Share client contract terms in a public AI tool to check if the change is billable",
              "Use AI to draft the change request document and impact assessment, then verify the analysis with the project team and sponsor before presenting for approval",
              "Use AI to implement scope changes automatically once they are requested",
              "Allow AI to approve scope changes that fall below a set cost threshold"
            ],
            "answer": 1
          }
        ],
        "module": "Module 09"
      },
      {
        "day": 10,
        "title": "Meeting and Decision Management",
        "objective": "Make project meetings produce decisions, not just discussion.",
        "content": [
          "Real-life business problem: The team meets often but decisions are forgotten and actions are unclear.",
          "This topic teaches you how to handle meeting and decision management in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Set the meeting purpose before it starts.",
          "Prepare agenda items tied to decisions or blockers.",
          "Record decisions, owners, and deadlines.",
          "Send minutes quickly after the meeting.",
          "Track actions before the next meeting."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with meeting and decision management. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about meeting and decision management. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for meeting and decision management. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Meeting and Decision Management.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write meeting minutes with decisions and actions.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 10: In the 'Meeting and Decision Management' module, what should the learner do first?",
            "options": [
              "Invite all available team members to every meeting regardless of relevance",
              "Start the meeting and let the agenda form during the discussion",
              "Distribute a confirmed agenda with objectives and pre-reading before the meeting, and start with the most important decision",
              "Reschedule the meeting repeatedly until all stakeholders can attend in person"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Management Module 10: Which multiple-choice answer best shows correct handling of 'Meeting and Decision Management'?",
            "options": [
              "A meeting with no agenda, no minutes, and no follow-up actions",
              "A meeting with a confirmed agenda, decisions recorded, action owners assigned, and minutes distributed within 24 hours",
              "A meeting that discusses all agenda items but defers all decisions",
              "Minutes written two weeks after the meeting from memory"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 10: In the 'Meeting and Decision Management' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft the agenda and action items format, then confirm all decisions and owners are accurately captured before distributing minutes",
              "Use AI to decide which agenda items are important enough to discuss",
              "Share confidential board meeting notes in a public AI tool for summarisation",
              "Allow AI to summarise meeting recordings and send minutes automatically"
            ],
            "answer": 0
          }
        ],
        "module": "Module 10"
      },
      {
        "day": 11,
        "title": "Testing and Acceptance",
        "objective": "Check if the project output is ready to use.",
        "content": [
          "Real-life business problem: The project deliverable is finished, but users find errors after launch because no acceptance checklist was used.",
          "This topic teaches you how to handle testing and acceptance in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Define acceptance criteria early.",
          "Test the output against real use cases.",
          "Record defects and fixes.",
          "Get sign-off from the right person.",
          "Do not launch until critical issues are resolved."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with testing and acceptance. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about testing and acceptance. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for testing and acceptance. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Testing and Acceptance.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create an acceptance checklist for a business project.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 11: In the 'Testing and Acceptance' module, what should the learner do first?",
            "options": [
              "Confirm the acceptance criteria, create a test plan, and ensure the correct people are available to test before testing begins",
              "Skip testing for minor features to save time before the launch deadline",
              "Begin user acceptance testing without a defined test plan",
              "Test only the features that are most likely to work correctly"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Management Module 11: Which multiple-choice answer best shows correct handling of 'Testing and Acceptance'?",
            "options": [
              "A completed test plan with each acceptance criterion tested, results recorded, defects logged, and sign-off obtained before launch",
              "Handing testing to end users without a defined acceptance criteria",
              "A verbal confirmation that the product feels right",
              "A test report showing only passed tests with failed tests excluded"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Management Module 11: In the 'Testing and Acceptance' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to run automated acceptance tests and mark the product as ready for launch",
              "Use AI to generate test scenarios from the acceptance criteria, then have the testing team verify each scenario is realistic and complete before executing",
              "Share user account details in a public AI tool to generate test data",
              "Use AI to remove failed tests from the report to meet the launch deadline"
            ],
            "answer": 1
          }
        ],
        "module": "Module 11"
      },
      {
        "day": 12,
        "title": "Launch Planning",
        "objective": "Prepare people, process, communication, and backup plan.",
        "content": [
          "Real-life business problem: A new process or tool launches but users are confused, support is not ready, and old files are still being used.",
          "This topic teaches you how to handle launch planning in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Confirm the launch date and responsible owner.",
          "Prepare user instructions and training.",
          "Prepare support contact and issue tracker.",
          "Communicate what changes and when.",
          "Keep a fallback plan for serious problems."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with launch planning. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about launch planning. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for launch planning. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Launch Planning.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a launch plan for a new business process or tool.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 12: In the 'Launch Planning' module, what should the learner do first?",
            "options": [
              "Confirm all launch criteria are met, run a final readiness check, and have a rollback plan before going live",
              "Delegate the launch decision to a team member without a signed-off launch plan",
              "Launch the product on the agreed date regardless of readiness",
              "Launch quietly without communicating to customers and wait for feedback"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Management Module 12: Which multiple-choice answer best shows correct handling of 'Launch Planning'?",
            "options": [
              "An informal decision to go live made the morning of the launch",
              "A launch plan with readiness criteria confirmed, communication drafted, support team briefed, rollback plan documented, and a launch owner identified",
              "Going live without a confirmed rollback plan in case the launch fails",
              "A launch with no customer communication until after go-live"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Management Module 12: In the 'Launch Planning' scenario, what is the safest way to use AI?",
            "options": [
              "Share customer database details in a public AI tool to personalise launch messages",
              "Use AI to draft launch communications and the readiness checklist, then confirm all facts, dates, and contacts are correct before distributing",
              "Allow AI to trigger the launch automatically once readiness criteria scores reach a threshold",
              "Use AI to decide whether the product is ready to launch based on a checklist score"
            ],
            "answer": 1
          }
        ],
        "module": "Module 12"
      },
      {
        "day": 13,
        "title": "Project Closeout",
        "objective": "Close the project properly and capture lessons learned.",
        "content": [
          "Real-life business problem: The project ends, but files, decisions, lessons, and ownership are not handed over.",
          "This topic teaches you how to handle project closeout in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Confirm final deliverables and acceptance.",
          "Document what changed.",
          "Transfer ownership to operations or the next team.",
          "Record lessons learned.",
          "Archive important files and close open actions."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with project closeout. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about project closeout. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for project closeout. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Project Closeout.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a project closeout report.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 13: In the 'Project Closeout' module, what should the learner do first?",
            "options": [
              "Archive all project files without reviewing them for completeness",
              "Close the project as soon as the final deliverable is accepted",
              "Close the project budget without reconciling actual costs against the plan",
              "Confirm all deliverables are accepted, outstanding actions are resolved, documentation is complete, and lessons are captured before formally closing"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Management Module 13: Which multiple-choice answer best shows correct handling of 'Project Closeout'?",
            "options": [
              "A closeout completed by the project manager alone without team input on lessons learned",
              "Archiving project files before all invoices and contracts are resolved",
              "An email to the team saying the project is finished",
              "A closeout report with final deliverables confirmed, budget reconciled, lessons learned documented, and formal stakeholder sign-off obtained"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Management Module 13: In the 'Project Closeout' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft the lessons learned summary and closeout checklist, then validate each point with the project team before publishing",
              "Allow AI to generate the project closeout report from the project management tool data",
              "Share client feedback and personal names in a public AI tool for lessons learned analysis",
              "Use AI to complete the budget reconciliation without reviewing actual invoices"
            ],
            "answer": 0
          }
        ],
        "module": "Module 13"
      },
      {
        "day": 14,
        "title": "AI for Project Managers",
        "objective": "Use AI to structure project work while checking facts.",
        "content": [
          "Real-life business problem: AI can help produce plans and reports, but it does not know the real approvals, constraints, or politics unless you provide them.",
          "This topic teaches you how to handle ai for project managers in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Give AI the project goal, scope, audience, and known constraints.",
          "Ask for a structured plan or risk list.",
          "Review all assumptions.",
          "Edit dates, owners, costs, and decisions.",
          "Use AI as drafting support, not as the project authority."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with ai for project managers. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about ai for project managers. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for ai for project managers. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for AI for Project Managers.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Use AI to draft a project plan and list what a human must verify.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Management Module 14: In the 'AI for Project Managers' module, what should the learner do first?",
            "options": [
              "Identify which project task needs support, confirm what data is safe to share, and choose the right AI tool for the job",
              "Use AI to make project decisions to remove personal bias",
              "Rely on AI suggestions for scope, timeline, and budget without validating against project constraints",
              "Share the full project plan with any public AI tool for a comprehensive review"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Management Module 14: Which multiple-choice answer best shows correct handling of 'AI for Project Managers'?",
            "options": [
              "Using AI output as the final version of official project documents without review",
              "Allowing AI to update the project schedule automatically without PM review",
              "A clear AI use record showing the prompt, tool used, output received, and the human verification step completed before the output was used in the project",
              "Using AI to replace stakeholder consultations for scope and requirements"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Management Module 14: In the 'AI for Project Managers' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft project documents and generate scenarios, then verify all outputs against project facts and stakeholder agreements before using",
              "Use AI to approve project milestones without a human sign-off process",
              "Allow AI to manage the project autonomously once the plan is approved",
              "Paste contract terms and client personal details into a public AI tool for analysis"
            ],
            "answer": 0
          }
        ],
        "module": "Module 14"
      }
    ]
  },
  {
    "id": "project-coordination",
    "title": "Business Project Coordination",
    "role": "For coordinators, assistants, administrators, and support staff who keep projects moving",
    "description": "A practical 14-module course for tracking tasks, follow-ups, meetings, documents, dependencies, and stakeholder updates in general business projects.",
    "outcomes": [
      "Maintain organised task trackers, document lists, meeting notes, and follow-up logs",
      "Coordinate updates across teams without losing details",
      "Spot blockers, missing information, and dependency risks early",
      "Use AI to clean up project notes, messages, and trackers safely"
    ],
    "days": [
      {
        "day": 1,
        "title": "Coordinator Role Clarity",
        "objective": "Understand what a coordinator owns and what needs manager decision.",
        "content": [
          "Real-life business problem: You are asked to chase updates, organise files, and remind people, but some issues require a manager’s decision.",
          "This topic teaches you how to handle coordinator role clarity in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List tasks you can complete independently.",
          "List decisions that require approval.",
          "Create a daily follow-up rhythm.",
          "Keep evidence of updates and blockers.",
          "Escalate decision items clearly."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with coordinator role clarity. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about coordinator role clarity. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for coordinator role clarity. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Coordinator Role Clarity.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a coordinator responsibility map.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 1: In the 'Coordinator Role Clarity' module, what should the learner do first?",
            "options": [
              "Confirm the coordinator's responsibilities, decision boundaries, and escalation path before taking on any coordination tasks",
              "Assume the coordinator role includes authority to approve decisions",
              "Start coordinating tasks before understanding who owns what decisions",
              "Accept coordination tasks without checking whether the required resources are available"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 1: Which multiple-choice answer best shows correct handling of 'Coordinator Role Clarity'?",
            "options": [
              "Coordinating work without a task tracker or any written record of status",
              "Making decisions that fall outside the coordinator's authority to keep things moving",
              "A written role clarity document with the coordinator's responsibilities, decision authority, escalation path, and handover process confirmed with the manager",
              "Coordinating tasks without a clear record of who is responsible for what"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Coordination Module 1: In the 'Coordinator Role Clarity' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft a role clarity summary from the job description, then confirm the boundaries and escalation path with your manager before starting",
              "Allow AI to decide which tasks fall within the coordinator's authority",
              "Share the full team structure and reporting lines in a public AI tool",
              "Use AI to approve work on the coordinator's behalf when they are unavailable"
            ],
            "answer": 0
          }
        ],
        "module": "Module 01"
      },
      {
        "day": 2,
        "title": "Task Tracker Setup",
        "objective": "Build a tracker that actually gets used.",
        "content": [
          "Real-life business problem: Tasks are spread across chat, email, and meetings. People forget owners and deadlines.",
          "This topic teaches you how to handle task tracker setup in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Create columns for task, owner, due date, status, blocker, proof, and next follow-up.",
          "Use simple statuses everyone understands.",
          "Update the tracker after every meeting or message.",
          "Highlight overdue and blocked items.",
          "Archive completed items only after proof is attached."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with task tracker setup. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about task tracker setup. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for task tracker setup. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Task Tracker Setup.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Build a project task tracker template.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 2: In the 'Task Tracker Setup' module, what should the learner do first?",
            "options": [
              "Set up the tracker with columns and start adding tasks before the team agrees on the process",
              "Copy a tracker template from the internet without adjusting it for the team's workflow",
              "Confirm what tasks need tracking, how status will be updated, and who is responsible before building the tracker",
              "Build the tracker as complex as possible to cover every possible scenario"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Coordination Module 2: Which multiple-choice answer best shows correct handling of 'Task Tracker Setup'?",
            "options": [
              "A tracker built and managed by one person with no other team member having access",
              "A tracker updated only when tasks are fully complete, leaving in-progress work invisible",
              "A tracker with task name, owner, due date, status, priority, and dependencies clearly defined and agreed by the team",
              "A spreadsheet with task names and no owners, due dates, or status fields"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Coordination Module 2: In the 'Task Tracker Setup' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to replace the task tracker with an AI-driven project assistant",
              "Use AI to suggest tracker columns and workflow structure, then validate the design with the team before building and asking them to use it",
              "Allow AI to automatically update task statuses from email and calendar data",
              "Share all task details and staff names in a public AI tool to generate the tracker structure"
            ],
            "answer": 1
          }
        ],
        "module": "Module 02"
      },
      {
        "day": 3,
        "title": "Follow-Up Messages",
        "objective": "Ask for updates professionally without sounding rude.",
        "content": [
          "Real-life business problem: A team member has not replied about a task due today. You need an update without creating conflict.",
          "This topic teaches you how to handle follow-up messages in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Mention the task and original deadline.",
          "Ask for current status and blocker.",
          "State why the update is needed.",
          "Give a clear reply deadline.",
          "Escalate only if repeated or high impact."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with follow-up messages. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about follow-up messages. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for follow-up messages. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Follow-Up Messages.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write three follow-up messages: gentle, urgent, and escalation-ready.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 3: In the 'Follow-Up Messages' module, what should the learner do first?",
            "options": [
              "Check the original request, confirm it has not been answered or actioned, and identify the right person to follow up with before sending",
              "Send a follow-up to multiple people at once to increase the chance of a response",
              "Escalate to a manager without attempting a direct follow-up first",
              "Send a follow-up immediately after the first message without waiting"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 3: Which multiple-choice answer best shows correct handling of 'Follow-Up Messages'?",
            "options": [
              "A follow-up that repeats the entire original message without summarising what is needed",
              "A message saying 'just checking in' with no context or deadline",
              "A follow-up referencing the original request, what is still outstanding, the impact of the delay, and the deadline for a response",
              "A follow-up sent to the wrong person because the original request was not reviewed"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Coordination Module 3: In the 'Follow-Up Messages' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft the follow-up message with clear context and a polite but firm deadline, then confirm the tone and facts are appropriate before sending",
              "Allow AI to send follow-up messages automatically after a set number of days",
              "Use AI to escalate all unanswered follow-ups automatically after 24 hours",
              "Share confidential correspondence with a supplier in a public AI tool to draft the follow-up"
            ],
            "answer": 0
          }
        ],
        "module": "Module 03"
      },
      {
        "day": 4,
        "title": "Meeting Preparation",
        "objective": "Prepare meetings so time is not wasted.",
        "content": [
          "Real-life business problem: A meeting is scheduled, but nobody knows what needs to be decided.",
          "This topic teaches you how to handle meeting preparation in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Confirm the meeting purpose.",
          "Collect updates before the meeting.",
          "Prepare agenda items by priority.",
          "Identify decisions needed.",
          "Send the agenda in advance."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with meeting preparation. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about meeting preparation. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for meeting preparation. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Meeting Preparation.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a meeting agenda for a project check-in.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 4: In the 'Meeting Preparation' module, what should the learner do first?",
            "options": [
              "Read the agenda, confirm your role in the meeting, review any relevant documents, and prepare your input before the meeting starts",
              "Attend the meeting and review the purpose once everyone is seated",
              "Prepare extensively for all agenda items even those that do not require your input",
              "Ask a colleague to brief you during the meeting rather than preparing beforehand"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 4: Which multiple-choice answer best shows correct handling of 'Meeting Preparation'?",
            "options": [
              "Arriving at the meeting and asking what it is about",
              "Preparing only for your own agenda item and ignoring the rest",
              "Preparing a long presentation for every meeting regardless of format",
              "A pre-meeting preparation including agenda reviewed, relevant data gathered, key questions prepared, and any required decisions identified in advance"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Coordination Module 4: In the 'Meeting Preparation' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to summarise the briefing documents and draft questions relevant to your agenda items, then verify the summary is accurate before the meeting",
              "Use AI to generate all talking points so no personal preparation is required",
              "Allow AI to attend the meeting on your behalf using a recorded summary",
              "Paste confidential board papers into a public AI tool to prepare your position"
            ],
            "answer": 0
          }
        ],
        "module": "Module 04"
      },
      {
        "day": 5,
        "title": "Meeting Minutes",
        "objective": "Record minutes that lead to action.",
        "content": [
          "Real-life business problem: After a meeting, people disagree about what was decided and who owns each task.",
          "This topic teaches you how to handle meeting minutes in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Capture only key discussion, decisions, actions, owners, and due dates.",
          "Separate decisions from discussion notes.",
          "Send minutes soon after the meeting.",
          "Ask for corrections by a deadline.",
          "Update the task tracker immediately."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with meeting minutes. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about meeting minutes. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for meeting minutes. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Meeting Minutes.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write meeting minutes from messy notes.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 5: In the 'Meeting Minutes' module, what should the learner do first?",
            "options": [
              "Take structured notes during the meeting, capturing decisions, actions, and owners as they happen, then format them immediately afterwards",
              "Write minutes only for formal board meetings and not for operational discussions",
              "Assign minute-taking to the most junior person in the meeting",
              "Rely on your memory to write minutes after the meeting"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 5: Which multiple-choice answer best shows correct handling of 'Meeting Minutes'?",
            "options": [
              "Minutes that include only positive outcomes and omit disagreements or unresolved issues",
              "A summary sent a week later from memory with no action items",
              "A word-for-word transcript of the meeting with no summary or action list",
              "Minutes distributed within 24 hours with decisions confirmed, actions listed with owners and deadlines, and unresolved items flagged"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Coordination Module 5: In the 'Meeting Minutes' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to generate meeting minutes from a recording without human review",
              "Use AI to help format and structure the raw notes into clear minutes, then verify every decision, action, and owner is accurately captured before distributing",
              "Share meeting recordings containing confidential staff discussions in a public AI tool",
              "Use AI to edit out disagreements from the minutes to present a cleaner outcome"
            ],
            "answer": 1
          }
        ],
        "module": "Module 05"
      },
      {
        "day": 6,
        "title": "Document Control",
        "objective": "Keep files easy to find and version-safe.",
        "content": [
          "Real-life business problem: The team is using old file versions because documents are saved in different folders.",
          "This topic teaches you how to handle document control in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Create a naming rule.",
          "Keep one main source of truth folder.",
          "Track document owner, version, and status.",
          "Remove or archive outdated copies.",
          "Link final files in the tracker."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with document control. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about document control. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for document control. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Document Control.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a document register for a project.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 6: In the 'Document Control' module, what should the learner do first?",
            "options": [
              "Confirm the document naming convention, version control process, and storage location before creating or updating any official document",
              "Keep multiple versions of a document open and work across them simultaneously",
              "Delete old document versions to keep the folder tidy",
              "Save documents wherever is most convenient without a naming convention"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 6: Which multiple-choice answer best shows correct handling of 'Document Control'?",
            "options": [
              "Updating documents without notifying the people who depend on them",
              "Sharing documents by email without version control, resulting in multiple teams working on different drafts",
              "A document register with naming conventions applied, version numbers tracked, change history logged, and the current approved version clearly identified",
              "A folder with files named 'final', 'final2', and 'final_use_this'"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Coordination Module 6: In the 'Document Control' scenario, what is the safest way to use AI?",
            "options": [
              "Share all document templates in a public AI tool to create a standardised library",
              "Allow AI to automatically version and archive documents based on edit history",
              "Use AI to generate a document naming template and version control guide, then have the team agree on it and apply it consistently to all new documents",
              "Use AI to merge multiple document versions automatically without human review"
            ],
            "answer": 2
          }
        ],
        "module": "Module 06"
      },
      {
        "day": 7,
        "title": "Dependency Tracking",
        "objective": "Notice when one late task delays another.",
        "content": [
          "Real-life business problem: One person cannot start because another person has not finished their part.",
          "This topic teaches you how to handle dependency tracking in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List tasks that depend on other tasks.",
          "Mark predecessor and successor tasks.",
          "Track due dates together.",
          "Warn the next owner if a dependency is at risk.",
          "Escalate when a delay affects the project milestone."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with dependency tracking. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about dependency tracking. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for dependency tracking. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Dependency Tracking.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a dependency map for five project tasks.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 7: In the 'Dependency Tracking' module, what should the learner do first?",
            "options": [
              "Map all task dependencies at the start of the project, confirm which tasks block others, and update the map whenever the plan changes",
              "Wait for a team member to flag a dependency problem before documenting it",
              "Track only external dependencies and assume internal ones will self-manage",
              "Assume tasks are independent until a delay proves otherwise"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 7: Which multiple-choice answer best shows correct handling of 'Dependency Tracking'?",
            "options": [
              "Tracking dependencies only between teams and not within the same team",
              "A dependency map created once and never updated as the project changes",
              "A dependency log with each task linked to what it needs before it can start, a confirmed owner for each dependency, and an alert when a predecessor is at risk",
              "A Gantt chart with no dependency links shown"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Coordination Module 7: In the 'Dependency Tracking' scenario, what is the safest way to use AI?",
            "options": [
              "Share the full project schedule in a public AI tool to find hidden dependencies",
              "Use AI to identify likely dependencies from the task list and draft a dependency matrix, then validate each link with the team before tracking it",
              "Use AI to remove dependencies from the plan to allow tasks to run in parallel",
              "Allow AI to automatically detect and resolve task dependencies in the project management tool"
            ],
            "answer": 1
          }
        ],
        "module": "Module 07"
      },
      {
        "day": 8,
        "title": "Issue Log Management",
        "objective": "Keep project issues visible until resolved.",
        "content": [
          "Real-life business problem: Issues are mentioned in meetings but disappear from view afterward.",
          "This topic teaches you how to handle issue log management in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Record issue, date raised, impact, owner, action, due date, and status.",
          "Separate issues from normal tasks.",
          "Review open issues regularly.",
          "Close issues only when resolved and confirmed.",
          "Report high-impact issues to the manager."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with issue log management. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about issue log management. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for issue log management. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Issue Log Management.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create an issue log and sample update.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 8: In the 'Issue Log Management' module, what should the learner do first?",
            "options": [
              "Log every issue as soon as it is identified, assign an owner, and confirm the priority and resolution deadline before moving on",
              "Log only issues that have already caused a delay or cost overrun",
              "Ask the person who raised the issue to log it themselves",
              "Address issues verbally as they arise and log them when you have time"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 8: Which multiple-choice answer best shows correct handling of 'Issue Log Management'?",
            "options": [
              "A chat message mentioning there is an issue to sort out",
              "An issue log reviewed only at the end of each project phase",
              "Closing issues in the log before they are fully resolved",
              "An issue log entry with the issue described, impact confirmed, priority assigned, owner identified, resolution action agreed, and status updated at each review"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Coordination Module 8: In the 'Issue Log Management' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to close issues automatically once a resolution has been suggested",
              "Allow AI to categorise and prioritise issues automatically from a brief description",
              "Share customer complaint details in a public AI tool to generate resolution steps",
              "Use AI to draft the issue description and suggested resolution options, then confirm the priority, impact, and owner with the project manager before logging"
            ],
            "answer": 3
          }
        ],
        "module": "Module 08"
      },
      {
        "day": 9,
        "title": "Stakeholder Update Coordination",
        "objective": "Send updates that match what each person needs.",
        "content": [
          "Real-life business problem: A senior manager wants a quick summary, while the working team needs detailed tasks.",
          "This topic teaches you how to handle stakeholder update coordination in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Identify each audience.",
          "Decide what level of detail they need.",
          "Write a short management update and a detailed team update.",
          "Avoid sharing irrelevant noise.",
          "Keep wording factual and action-focused."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with stakeholder update coordination. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about stakeholder update coordination. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for stakeholder update coordination. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Stakeholder Update Coordination.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write two versions of the same update: management and team.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 9: In the 'Stakeholder Update Coordination' module, what should the learner do first?",
            "options": [
              "Identify what each stakeholder group needs to know, confirm the right level of detail and timing for each, and coordinate updates accordingly",
              "Send the same update to all stakeholders at the same time",
              "Delegate all stakeholder communication to a team member without agreeing on the message",
              "Wait for stakeholders to ask for updates rather than proactively communicating"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 9: Which multiple-choice answer best shows correct handling of 'Stakeholder Update Coordination'?",
            "options": [
              "A stakeholder communication plan with each group's information needs defined, update frequency confirmed, format agreed, and a coordinator responsible for each channel",
              "One generic update email sent to everyone on the project distribution list",
              "Updating stakeholders only at formal milestone reviews regardless of significant changes in between",
              "Updates that focus only on positive news and omit risks or delays"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 9: In the 'Stakeholder Update Coordination' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to decide which stakeholders need to be informed about a project risk",
              "Allow AI to send automated stakeholder updates based on project dashboard data",
              "Use AI to draft tailored update messages for each stakeholder group, then review the content for accuracy and appropriateness before sending",
              "Share individual stakeholder contact preferences and personal details in a public AI tool"
            ],
            "answer": 2
          }
        ],
        "module": "Module 09"
      },
      {
        "day": 10,
        "title": "Deadline Monitoring",
        "objective": "Prevent surprises before due dates arrive.",
        "content": [
          "Real-life business problem: A task becomes overdue because nobody checked progress until the due date.",
          "This topic teaches you how to handle deadline monitoring in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Check deadlines at the start of the day.",
          "Follow up before the deadline, not after.",
          "Ask for blocker or confirmation.",
          "Flag at-risk tasks early.",
          "Update the tracker immediately."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with deadline monitoring. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about deadline monitoring. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for deadline monitoring. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Deadline Monitoring.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a deadline monitoring routine.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 10: In the 'Deadline Monitoring' module, what should the learner do first?",
            "options": [
              "Assume all deadlines will be met unless a team member raises a concern",
              "Check deadlines only on the day they are due",
              "Move deadlines when tasks fall behind without informing stakeholders",
              "Review all upcoming deadlines weekly, identify which are at risk, confirm current progress, and act early to prevent missed dates"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Coordination Module 10: Which multiple-choice answer best shows correct handling of 'Deadline Monitoring'?",
            "options": [
              "A deadline tracker showing each milestone, the current completion status, days remaining, risk level, owner, and any recovery action in progress",
              "A calendar reminder set for the deadline date with no progress monitoring",
              "Reporting deadlines as on track until the day before they are missed",
              "Tracking deadlines only for tasks assigned to other people, not your own"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 10: In the 'Deadline Monitoring' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to generate a deadline risk summary from the tracker data, then confirm each at-risk item with the relevant owner before escalating",
              "Use AI to mark overdue tasks as complete to keep the tracker clean",
              "Allow AI to automatically reschedule tasks when a deadline is at risk",
              "Share the full project schedule in a public AI tool for deadline analysis"
            ],
            "answer": 0
          }
        ],
        "module": "Module 10"
      },
      {
        "day": 11,
        "title": "Proof of Completion",
        "objective": "Know what evidence is needed before marking done.",
        "content": [
          "Real-life business problem: Someone says a task is finished, but there is no file, screenshot, approval, or confirmation.",
          "This topic teaches you how to handle proof of completion in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Define completion proof for each task.",
          "Ask for the exact proof needed.",
          "Attach proof to the tracker.",
          "Check that the proof matches the requirement.",
          "Only mark complete after verification."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with proof of completion. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about proof of completion. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for proof of completion. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Proof of Completion.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create proof requirements for different project task types.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 11: In the 'Proof of Completion' module, what should the learner do first?",
            "options": [
              "Mark tasks as complete as soon as the deadline passes",
              "Assume a task is complete when the team member says it is done",
              "Require proof only for tasks that will be reviewed by senior management",
              "Confirm what evidence of completion is required, check the evidence against the acceptance criteria, and log it before marking the task as done"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Coordination Module 11: Which multiple-choice answer best shows correct handling of 'Proof of Completion'?",
            "options": [
              "A verbal confirmation from the task owner that the work is finished",
              "A completion report written by the person who did the work with no independent check",
              "A completion record with the deliverable described, acceptance criteria confirmed as met, evidence attached, and the approver identified and signed off",
              "Logging completion without reviewing whether the output meets the agreed standard"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Coordination Module 11: In the 'Proof of Completion' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft the completion summary and checklist of evidence required, then have the approver verify each item before marking the task as done",
              "Allow AI to review submitted deliverables and mark tasks as complete automatically",
              "Share client acceptance documents in a public AI tool to generate a proof of completion",
              "Use AI to reduce the evidence requirements for tasks that are unlikely to be reviewed"
            ],
            "answer": 0
          }
        ],
        "module": "Module 11"
      },
      {
        "day": 12,
        "title": "Escalation Support",
        "objective": "Prepare facts so managers can make decisions quickly.",
        "content": [
          "Real-life business problem: A blocker needs manager input, but the manager does not have enough context.",
          "This topic teaches you how to handle escalation support in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Summarise the issue in one sentence.",
          "State impact on deadline, cost, quality, or customer.",
          "Show options and recommendation.",
          "Attach evidence.",
          "Ask for a specific decision by a specific time."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with escalation support. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about escalation support. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for escalation support. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Escalation Support.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write an escalation brief for a blocked project task.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 12: In the 'Escalation Support' module, what should the learner do first?",
            "options": [
              "Escalate only after the issue has caused a visible problem",
              "Confirm the issue, determine what decision or resource is needed, and escalate to the lowest level of authority who can resolve it effectively",
              "Escalate issues to the highest level of management immediately",
              "Handle all issues yourself to avoid being seen as unable to cope"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Coordination Module 12: Which multiple-choice answer best shows correct handling of 'Escalation Support'?",
            "options": [
              "An escalation email saying 'this is urgent, please advise'",
              "A clear escalation message with the issue summarised, evidence provided, decision needed specified, timeline confirmed, and the requested response or action stated",
              "An escalation raised verbally in a corridor with no written follow-up",
              "An escalation that bypasses the direct line manager and goes straight to the CEO"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Coordination Module 12: In the 'Escalation Support' scenario, what is the safest way to use AI?",
            "options": [
              "Share confidential HR or financial data in a public AI tool to support the escalation case",
              "Use AI to structure the escalation message clearly and concisely, then verify all facts and choose the correct escalation level before sending",
              "Allow AI to route escalations automatically to the appropriate person based on the issue type",
              "Use AI to decide whether an issue is serious enough to escalate"
            ],
            "answer": 1
          }
        ],
        "module": "Module 12"
      },
      {
        "day": 13,
        "title": "Coordinator Daily Summary",
        "objective": "Send a daily project summary that keeps everyone aligned.",
        "content": [
          "Real-life business problem: By end of day, many small updates happened and the team needs one clear summary.",
          "This topic teaches you how to handle coordinator daily summary in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "List completed items.",
          "List blocked or at-risk items.",
          "List decisions needed.",
          "List tomorrow’s priorities.",
          "Keep the update short and structured."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with coordinator daily summary. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about coordinator daily summary. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for coordinator daily summary. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Coordinator Daily Summary.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a daily project coordination summary.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 13: In the 'Coordinator Daily Summary' module, what should the learner do first?",
            "options": [
              "Send the daily summary without checking it against the issue log and tracker",
              "Write the daily summary at the end of the day from memory",
              "Collect confirmed updates from all tracked tasks and owners throughout the day, then compile the summary before distributing",
              "Write one summary for all teams and audiences without tailoring the content"
            ],
            "answer": 2
          },
          {
            "q": "Business Project Coordination Module 13: Which multiple-choice answer best shows correct handling of 'Coordinator Daily Summary'?",
            "options": [
              "A brief message saying 'all good today, see you tomorrow'",
              "A summary that repeats yesterday's content with minor date changes",
              "A summary sent only on days when something significant happened",
              "A daily summary covering completed tasks, outstanding items, blockers raised, decisions made, and actions required tomorrow, distributed before close of business"
            ],
            "answer": 3
          },
          {
            "q": "Business Project Coordination Module 13: In the 'Coordinator Daily Summary' scenario, what is the safest way to use AI?",
            "options": [
              "Share team member performance details in a public AI tool to generate a summary",
              "Use AI to format and organise the raw daily update notes into a clear summary, then verify accuracy and completeness before distributing",
              "Allow AI to generate the daily summary automatically from project tool activity logs",
              "Use AI to remove negative items from the summary to maintain team morale"
            ],
            "answer": 1
          }
        ],
        "module": "Module 13"
      },
      {
        "day": 14,
        "title": "AI for Coordinators",
        "objective": "Use AI to clean up project notes without losing accuracy.",
        "content": [
          "Real-life business problem: You have rough meeting notes, chat updates, and task lists. AI can organise them, but it may assume missing details.",
          "This topic teaches you how to handle ai for coordinators in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Paste only the information needed.",
          "Ask AI to organise, not invent.",
          "Request tables for tasks, owners, deadlines, and blockers.",
          "Check every name, date, and status.",
          "Edit before sending."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with ai for coordinators. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about ai for coordinators. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for ai for coordinators. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for AI for Coordinators.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Use AI to convert messy notes into a tracker and list what you verified.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Project Coordination Module 14: In the 'AI for Coordinators' module, what should the learner do first?",
            "options": [
              "Use AI to communicate decisions to stakeholders without coordinator review",
              "Identify the specific coordination task, confirm what information is safe to include, and use AI only to assist with drafting or organising",
              "Use AI to manage all coordinator tasks without human oversight",
              "Share all project documents with AI to get a full project status analysis"
            ],
            "answer": 1
          },
          {
            "q": "Business Project Coordination Module 14: Which multiple-choice answer best shows correct handling of 'AI for Coordinators'?",
            "options": [
              "A log of each AI-assisted coordination task showing the prompt used, output reviewed, and human verification completed before the output was acted on",
              "Using AI to replace all human coordination judgement in high-stakes communications",
              "Allowing AI to update the issue log and task tracker automatically without coordinator review",
              "Sending AI-generated messages to stakeholders without reading them first"
            ],
            "answer": 0
          },
          {
            "q": "Business Project Coordination Module 14: In the 'AI for Coordinators' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft coordination documents and messages, then verify all content for accuracy, tone, and appropriateness before using",
              "Allow AI to manage the project coordination process end-to-end once briefed",
              "Paste confidential stakeholder data into a public AI tool to improve communication efficiency",
              "Use AI to make coordination decisions when the coordinator is unavailable"
            ],
            "answer": 0
          }
        ],
        "module": "Module 14"
      }
    ]
  },
  {
    "id": "hr",
    "title": "People and HR Management",
    "role": "For HR assistants, recruiters, team leads, and small business managers",
    "description": "A practical 14-module course for recruitment, onboarding, performance documentation, training, scheduling, policy communication, and employee support in general business settings.",
    "outcomes": [
      "Run fair and organised recruitment and onboarding workflows",
      "Document performance, attendance, training, and staff concerns professionally",
      "Communicate workplace expectations clearly and respectfully",
      "Use AI to draft HR documents while protecting privacy and fairness"
    ],
    "days": [
      {
        "day": 1,
        "title": "Job Requirement Clarification",
        "objective": "Define the role before posting or screening.",
        "content": [
          "Real-life business problem: A manager says 'hire someone good' but has not defined tasks, skills, schedule, or success measures.",
          "This topic teaches you how to handle job requirement clarification in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Ask what problem the role solves.",
          "List daily tasks and required skills.",
          "Separate must-have from nice-to-have.",
          "Confirm schedule, pay range, and reporting line.",
          "Create clear screening criteria before advertising."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with job requirement clarification. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about job requirement clarification. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for job requirement clarification. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Job Requirement Clarification.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a role requirement checklist.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 1: In the 'Job Requirement Clarification' module, what should the learner do first?",
            "options": [
              "Write the job advertisement before understanding the full role requirements",
              "Assume requirements based on the role title and department",
              "Meet with the hiring manager to confirm responsibilities, required skills, team fit, and employment conditions before drafting any job materials",
              "Use a job description from a previous similar role without reviewing its current accuracy"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 1: Which multiple-choice answer best shows correct handling of 'Job Requirement Clarification'?",
            "options": [
              "Requirements gathered from one person without checking whether others in the team have different needs",
              "A job brief created by HR alone without input from the hiring manager",
              "A vague brief saying the team needs someone good with people",
              "A written job requirements summary with confirmed responsibilities, essential and desirable skills, reporting line, and employment conditions agreed with the hiring manager"
            ],
            "answer": 3
          },
          {
            "q": "People and HR Management Module 1: In the 'Job Requirement Clarification' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to generate the job requirements from the job title and department",
              "Use AI to decide which skills are essential versus desirable for the role",
              "Use AI to draft a structured requirements questionnaire for the hiring manager, then review and confirm the answers before writing any job materials",
              "Share confidential salary band information in a public AI tool to compare market rates"
            ],
            "answer": 2
          }
        ],
        "module": "Module 01"
      },
      {
        "day": 2,
        "title": "Job Advertisement Writing",
        "objective": "Write a clear and attractive job post.",
        "content": [
          "Real-life business problem: Applicants are applying without understanding the role because the job post is vague.",
          "This topic teaches you how to handle job advertisement writing in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Start with the role purpose.",
          "List responsibilities in plain language.",
          "Add must-have requirements and work schedule.",
          "Explain benefits or growth honestly.",
          "Include clear application instructions."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with job advertisement writing. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about job advertisement writing. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for job advertisement writing. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Job Advertisement Writing.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a job post for a general business role.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 2: In the 'Job Advertisement Writing' module, what should the learner do first?",
            "options": [
              "Write the job ad from the job title alone without reviewing the actual role requirements",
              "Confirm the role responsibilities, required skills, reporting line, and employment conditions before drafting the advertisement",
              "Copy a previous job ad and update only the title",
              "Post the job ad without having it reviewed by the hiring manager or HR"
            ],
            "answer": 1
          },
          {
            "q": "People and HR Management Module 2: Which multiple-choice answer best shows correct handling of 'Job Advertisement Writing'?",
            "options": [
              "A job ad approved by one person without a check against the actual role description",
              "An ad that lists every possible desirable skill to attract the widest pool",
              "A job advertisement with a clear role summary, specific responsibilities, required and preferred skills, reporting structure, and how to apply",
              "A job post with only the job title and a generic 'apply now' instruction"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 2: In the 'Job Advertisement Writing' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to filter which job boards to post to based on the job title alone",
              "Allow AI to write and post the job advertisement automatically based on the job title",
              "Share candidate salary expectations and personal details in a public AI tool",
              "Use AI to draft the job advertisement from the confirmed role brief, then review it for accuracy, inclusivity, and compliance before posting"
            ],
            "answer": 3
          }
        ],
        "module": "Module 02"
      },
      {
        "day": 3,
        "title": "Candidate Screening",
        "objective": "Screen applicants fairly and consistently.",
        "content": [
          "Real-life business problem: There are many applications, but no consistent way to decide who should move forward.",
          "This topic teaches you how to handle candidate screening in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Create criteria before reviewing candidates.",
          "Score must-have requirements first.",
          "Check experience evidence, not just keywords.",
          "Shortlist with notes.",
          "Avoid unfair or irrelevant factors."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with candidate screening. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about candidate screening. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for candidate screening. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Candidate Screening.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a candidate screening scorecard.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 3: In the 'Candidate Screening' module, what should the learner do first?",
            "options": [
              "Ask a team member to screen CVs without giving them the selection criteria",
              "Screen out candidates whose names are unfamiliar to save time",
              "Confirm the selection criteria before screening, apply them consistently to each application, and document the reason for each screening decision",
              "Shortlist candidates based on the most impressive-sounding CV"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 3: Which multiple-choice answer best shows correct handling of 'Candidate Screening'?",
            "options": [
              "A shortlist created by choosing the first five applications received",
              "Screening candidates without keeping records, relying on memory for later decisions",
              "A screening record showing each candidate assessed against the same criteria, with notes on why each was shortlisted or rejected",
              "A shortlist based on personal gut feeling about the candidates"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 3: In the 'Candidate Screening' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to help organise and summarise application data against the criteria, then have a human reviewer make each shortlisting decision and document the reason",
              "Allow AI to make shortlisting decisions automatically based on keyword matching",
              "Paste candidate CVs with personal contact details into a public AI tool for analysis",
              "Use AI to rank candidates and accept its top choice without human review"
            ],
            "answer": 0
          }
        ],
        "module": "Module 03"
      },
      {
        "day": 4,
        "title": "Interview Questions",
        "objective": "Ask questions that reveal real skills.",
        "content": [
          "Real-life business problem: Candidates give generic answers and the interviewer cannot tell who can actually do the work.",
          "This topic teaches you how to handle interview questions in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Ask about real situations, not only opinions.",
          "Use open-ended questions.",
          "Ask for examples, decisions, and outcomes.",
          "Score answers against the role requirements.",
          "Take notes immediately."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with interview questions. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about interview questions. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for interview questions. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Interview Questions.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create specialised interview questions for a business support role.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 4: In the 'Interview Questions' module, what should the learner do first?",
            "options": [
              "Ask questions that come to mind during the interview",
              "Use the same questions from a previous interview without checking their relevance to the new role",
              "Prepare a structured question set before the interview that covers the key competencies for the role and is consistent across all candidates",
              "Ask candidates about their personal background and family situation to assess culture fit"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 4: Which multiple-choice answer best shows correct handling of 'Interview Questions'?",
            "options": [
              "A set of questions that changes between candidates based on how the conversation flows",
              "A structured interview guide with competency-based questions, a consistent scoring guide, and space to note evidence from each candidate's answers",
              "Questions focused only on technical skills with no assessment of behaviours or working style",
              "Interview questions that lead the candidate toward the desired answer"
            ],
            "answer": 1
          },
          {
            "q": "People and HR Management Module 4: In the 'Interview Questions' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft structured competency-based interview questions from the role description, then have HR and the hiring manager review and approve them before use",
              "Use AI to select the best candidate from interview notes without human deliberation",
              "Allow AI to conduct the interview and score candidates automatically",
              "Share previous candidates' interview responses in a public AI tool to benchmark new candidates"
            ],
            "answer": 0
          }
        ],
        "module": "Module 04"
      },
      {
        "day": 5,
        "title": "Reference and Background Checks",
        "objective": "Verify important information professionally.",
        "content": [
          "Real-life business problem: A candidate looks suitable but some key details need confirmation before hiring.",
          "This topic teaches you how to handle reference and background checks in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Ask permission where required.",
          "Prepare job-relevant questions.",
          "Confirm dates, responsibilities, strengths, and concerns.",
          "Document responses neutrally.",
          "Do not ask irrelevant personal questions."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with reference and background checks. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about reference and background checks. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for reference and background checks. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Reference and Background Checks.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a reference check template.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 5: In the 'Reference and Background Checks' module, what should the learner do first?",
            "options": [
              "Ask the candidate to provide a reference summary rather than contacting referees directly",
              "Confirm what checks are legally required for the role, obtain the candidate's consent, and conduct checks consistently for all shortlisted candidates",
              "Skip reference checks for candidates who presented very well in interview",
              "Contact referees without telling the candidate"
            ],
            "answer": 1
          },
          {
            "q": "People and HR Management Module 5: Which multiple-choice answer best shows correct handling of 'Reference and Background Checks'?",
            "options": [
              "A background check completed only for the preferred candidate after the offer is made",
              "Using public social media profiles as the sole basis for a background check",
              "A reference check conducted with a structured set of questions, the outcome documented, and any concerns noted and discussed with the hiring decision-maker",
              "A verbal reference taken informally from someone who knows the candidate"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 5: In the 'Reference and Background Checks' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to conduct reference checks by email automatically",
              "Use AI to assess candidate suitability from publicly available social media data",
              "Paste candidate personal details into a public AI tool to generate a background report",
              "Use AI to draft reference check questions from the role requirements, then have HR conduct and document the actual reference calls"
            ],
            "answer": 3
          }
        ],
        "module": "Module 05"
      },
      {
        "day": 6,
        "title": "Offer and Acceptance Process",
        "objective": "Communicate offers clearly.",
        "content": [
          "Real-life business problem: A candidate accepts verbally but later disputes schedule, pay, start date, or conditions.",
          "This topic teaches you how to handle offer and acceptance process in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Prepare written offer details.",
          "Include role, pay, schedule, start date, reporting line, and conditions.",
          "Ask for written confirmation.",
          "Save acceptance records.",
          "Prepare onboarding tasks."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with offer and acceptance process. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about offer and acceptance process. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for offer and acceptance process. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Offer and Acceptance Process.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Draft an offer confirmation email.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 6: In the 'Offer and Acceptance Process' module, what should the learner do first?",
            "options": [
              "Make a verbal offer and confirm the details later",
              "Send the formal offer letter before the salary has been approved internally",
              "Let the candidate negotiate all terms directly with the manager without HR involvement",
              "Confirm the approved salary, conditions, and start date with the hiring manager before making any offer to the candidate"
            ],
            "answer": 3
          },
          {
            "q": "People and HR Management Module 6: Which multiple-choice answer best shows correct handling of 'Offer and Acceptance Process'?",
            "options": [
              "A formal offer letter with role, salary, start date, conditions of employment, and an acceptance deadline, sent after internal approval and reviewed before issuing",
              "An offer letter that omits the probationary period and notice period terms",
              "A text message telling the candidate they have the job",
              "An offer made verbally and followed up with a letter weeks later"
            ],
            "answer": 0
          },
          {
            "q": "People and HR Management Module 6: In the 'Offer and Acceptance Process' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to decide the final salary offer based on the candidate's previous pay history",
              "Share candidate salary negotiations in a public AI tool to prepare a counter-offer",
              "Use AI to draft the offer letter from the approved terms, then have HR review the final letter for accuracy and compliance before sending to the candidate",
              "Allow AI to generate and send offer letters automatically once a candidate is selected"
            ],
            "answer": 2
          }
        ],
        "module": "Module 06"
      },
      {
        "day": 7,
        "title": "Onboarding Plan",
        "objective": "Help new staff start with clarity.",
        "content": [
          "Real-life business problem: A new employee starts but does not know tools, expectations, tasks, or who to ask for help.",
          "This topic teaches you how to handle onboarding plan in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Prepare access, documents, and training materials before day one.",
          "Create a first-day checklist.",
          "Explain role expectations and communication channels.",
          "Assign a buddy or contact person.",
          "Check progress after the first week."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with onboarding plan. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about onboarding plan. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for onboarding plan. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Onboarding Plan.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a 7-day onboarding plan.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 7: In the 'Onboarding Plan' module, what should the learner do first?",
            "options": [
              "Introduce the new staff member to the team and let them figure out the rest",
              "Confirm what the new staff member needs to know and do in their first week, assign a buddy or supervisor, and prepare their workstation and access before day one",
              "Complete the induction in a single day regardless of the complexity of the role",
              "Wait for the new staff member to ask questions before providing any information"
            ],
            "answer": 1
          },
          {
            "q": "People and HR Management Module 7: Which multiple-choice answer best shows correct handling of 'Onboarding Plan'?",
            "options": [
              "A structured onboarding plan with a day-by-day schedule for the first two weeks, key contacts listed, systems access confirmed, and check-in meetings scheduled",
              "A verbal welcome and a stack of documents to read independently",
              "An onboarding plan created by HR that is never shared with the hiring manager or team",
              "An onboarding that focuses only on policy documents and skips practical task training"
            ],
            "answer": 0
          },
          {
            "q": "People and HR Management Module 7: In the 'Onboarding Plan' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft the onboarding checklist and first-week schedule from the role description, then have the manager and HR validate it before sharing with the new staff member",
              "Share the new staff member's personal details in a public AI tool to generate an onboarding profile",
              "Allow AI to create a personalised onboarding plan automatically from the candidate's CV",
              "Use AI to replace the in-person onboarding with an AI-guided digital induction only"
            ],
            "answer": 0
          }
        ],
        "module": "Module 07"
      },
      {
        "day": 8,
        "title": "Training and Assessment",
        "objective": "Check that staff understand the work before assigning full responsibility.",
        "content": [
          "Real-life business problem: A new staff member watched training but has not proven they can apply it.",
          "This topic teaches you how to handle training and assessment in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Define the skill being assessed.",
          "Create practical tasks based on real work.",
          "Set passing criteria.",
          "Give feedback and retraining if needed.",
          "Record completion and next steps."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with training and assessment. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about training and assessment. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for training and assessment. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Training and Assessment.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a practical training assessment.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 8: In the 'Training and Assessment' module, what should the learner do first?",
            "options": [
              "Mark staff as trained once they have attended, regardless of demonstrated competence",
              "Confirm the learning objectives, check understanding after training, and assess competence through observation or a practical task before signing off",
              "Assume staff know how to do their job once they have attended the training session",
              "Conduct training without pre-assessing what knowledge gaps exist"
            ],
            "answer": 1
          },
          {
            "q": "People and HR Management Module 8: Which multiple-choice answer best shows correct handling of 'Training and Assessment'?",
            "options": [
              "A training record showing the topic covered, assessment method used, result achieved, any gaps identified, and next steps for the staff member",
              "A pass/fail test with no coaching for staff who did not meet the required standard",
              "A training session with no assessment, follow-up, or record",
              "Training completed on paper only with no practical demonstration of the skill"
            ],
            "answer": 0
          },
          {
            "q": "People and HR Management Module 8: In the 'Training and Assessment' scenario, what is the safest way to use AI?",
            "options": [
              "Share staff learning records and test scores in a public AI tool for training design",
              "Use AI to help design training content and assessment questions from the competency requirements, then have a qualified trainer review and deliver the training",
              "Allow AI to conduct and score training assessments automatically without a human facilitator",
              "Use AI to waive training requirements for experienced staff without any assessment"
            ],
            "answer": 1
          }
        ],
        "module": "Module 08"
      },
      {
        "day": 9,
        "title": "Attendance and Schedule Issues",
        "objective": "Handle lateness or absence professionally.",
        "content": [
          "Real-life business problem: A staff member is repeatedly late or unavailable, affecting business coverage.",
          "This topic teaches you how to handle attendance and schedule issues in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Record dates, times, and impact.",
          "Ask for explanation using neutral wording.",
          "Remind them of the schedule expectation.",
          "Offer support if appropriate.",
          "Document next steps and follow-up."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with attendance and schedule issues. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about attendance and schedule issues. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for attendance and schedule issues. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Attendance and Schedule Issues.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write an attendance concern message and record note.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 9: In the 'Attendance and Schedule Issues' module, what should the learner do first?",
            "options": [
              "Handle attendance issues informally and avoid documenting them",
              "Assume a pattern of absence is personal and not a workplace concern",
              "Confirm the attendance facts from records, speak privately with the staff member, and document the conversation before taking any further action",
              "Share the staff member's attendance record with the team without their knowledge"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 9: Which multiple-choice answer best shows correct handling of 'Attendance and Schedule Issues'?",
            "options": [
              "A comment in a team meeting that attendance has been poor recently",
              "Adjusting the schedule without discussing it with the affected staff member",
              "A private, documented attendance discussion with the facts confirmed, the impact on the team noted, support offered, and a clear expectation set and agreed",
              "A formal warning issued without a prior informal conversation"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 9: In the 'Attendance and Schedule Issues' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to automatically flag staff for formal action when absence thresholds are exceeded",
              "Use AI to draft talking points for the attendance conversation, then have HR review the approach and confirm the facts before meeting with the staff member",
              "Use AI to decide whether to approve or reject a leave request without manager input",
              "Share individual staff medical or absence records in a public AI tool for analysis"
            ],
            "answer": 1
          }
        ],
        "module": "Module 09"
      },
      {
        "day": 10,
        "title": "Performance Notes",
        "objective": "Document performance fairly and factually.",
        "content": [
          "Real-life business problem: A manager is frustrated with someone’s work, but the notes are emotional and unclear.",
          "This topic teaches you how to handle performance notes in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Write observable facts.",
          "Explain business impact.",
          "State the expected standard.",
          "Agree on support and improvement deadline.",
          "Schedule follow-up."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with performance notes. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about performance notes. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for performance notes. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Performance Notes.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a neutral performance note.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 10: In the 'Performance Notes' module, what should the learner do first?",
            "options": [
              "Wait until a performance issue is serious before documenting anything",
              "Record each performance observation as it occurs using specific, factual, observable language, and store it securely in the staff file",
              "Rely on memory to recall performance details during a formal review",
              "Write performance notes in shared team documents accessible to other staff members"
            ],
            "answer": 1
          },
          {
            "q": "People and HR Management Module 10: Which multiple-choice answer best shows correct handling of 'Performance Notes'?",
            "options": [
              "Performance notes written only when the outcome will be disciplinary",
              "A vague note saying a staff member 'needs to improve'",
              "A performance note with the date, the specific behaviour observed, the expected standard, the impact confirmed, and any support or feedback already given",
              "A note that includes the manager's opinion of the staff member's attitude without factual observations"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 10: In the 'Performance Notes' scenario, what is the safest way to use AI?",
            "options": [
              "Share individual staff performance records in a public AI tool for benchmarking",
              "Allow AI to generate performance notes automatically from attendance and output data",
              "Use AI to help structure and phrase the performance note clearly and objectively, then confirm the note accurately reflects the observed behaviour before saving to the staff record",
              "Use AI to determine whether a performance issue warrants formal action"
            ],
            "answer": 2
          }
        ],
        "module": "Module 10"
      },
      {
        "day": 11,
        "title": "Feedback Conversations",
        "objective": "Give feedback without attacking the person.",
        "content": [
          "Real-life business problem: An employee made mistakes and needs correction, but the conversation must stay professional.",
          "This topic teaches you how to handle feedback conversations in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Prepare facts and examples.",
          "Start with the issue, not personal judgment.",
          "Ask for their perspective.",
          "Agree on the expected change.",
          "Confirm next steps in writing."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with feedback conversations. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about feedback conversations. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for feedback conversations. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Feedback Conversations.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Prepare a feedback conversation script.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 11: In the 'Feedback Conversations' module, what should the learner do first?",
            "options": [
              "Save all feedback for the formal annual review to avoid uncomfortable conversations",
              "Deliver feedback in a group setting to demonstrate the standard expected of the whole team",
              "Frame all feedback as positive to preserve the relationship",
              "Prepare specific examples, choose a private setting, and focus on observable behaviour and its impact before delivering the feedback"
            ],
            "answer": 3
          },
          {
            "q": "People and HR Management Module 11: Which multiple-choice answer best shows correct handling of 'Feedback Conversations'?",
            "options": [
              "Feedback delivered by email to give the staff member time to respond in writing",
              "A feedback conversation that focuses on the staff member's personality rather than their actions",
              "A general comment that the staff member could 'do better'",
              "A structured feedback conversation with a specific behaviour described, its impact explained, the expected standard confirmed, and a follow-up check-in scheduled"
            ],
            "answer": 3
          },
          {
            "q": "People and HR Management Module 11: In the 'Feedback Conversations' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft structured feedback talking points from specific examples, then review them for fairness and accuracy before the conversation",
              "Share personal performance records with a staff member's name in a public AI tool",
              "Allow AI to conduct the feedback conversation by generating a script and reading it automatically",
              "Use AI to decide whether feedback is warranted based on a description of the situation"
            ],
            "answer": 0
          }
        ],
        "module": "Module 11"
      },
      {
        "day": 12,
        "title": "Policy Communication",
        "objective": "Explain workplace rules clearly.",
        "content": [
          "Real-life business problem: A new policy is being misunderstood because the announcement is too long or unclear.",
          "This topic teaches you how to handle policy communication in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "State the policy change simply.",
          "Explain who it applies to and when it starts.",
          "Give the reason if appropriate.",
          "Explain what staff need to do.",
          "Add where to ask questions."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with policy communication. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about policy communication. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for policy communication. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Policy Communication.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a workplace policy announcement.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 12: In the 'Policy Communication' module, what should the learner do first?",
            "options": [
              "Communicate the policy only to managers and rely on them to pass it on",
              "Assume staff have read and understood the policy once it has been published",
              "Confirm the policy is finalised, identify which staff are affected, and plan how you will communicate it before sending it out",
              "Email the policy to all staff and close the item"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 12: Which multiple-choice answer best shows correct handling of 'Policy Communication'?",
            "options": [
              "A policy communicated only when staff breach it",
              "A policy update sent only to new staff, assuming existing staff are already aware",
              "A policy communication with a plain-language summary of key points, who it affects, what changes from today, when it takes effect, and how to ask questions",
              "A policy email with an attachment and no explanation"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 12: In the 'Policy Communication' scenario, what is the safest way to use AI?",
            "options": [
              "Share confidential internal policy drafts in a public AI tool for a clarity review",
              "Use AI to decide which staff need to be informed about a policy change",
              "Allow AI to update policy documents automatically when legislation changes",
              "Use AI to draft a plain-language summary of the policy for staff, then have HR or the policy owner review it for accuracy before distributing"
            ],
            "answer": 3
          }
        ],
        "module": "Module 12"
      },
      {
        "day": 13,
        "title": "Staff Concern Handling",
        "objective": "Receive complaints or concerns respectfully.",
        "content": [
          "Real-life business problem: An employee reports a workplace concern and needs to be heard without assumptions or gossip.",
          "This topic teaches you how to handle staff concern handling in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Acknowledge the concern.",
          "Ask for facts, dates, and evidence if available.",
          "Explain the next process without promising outcomes.",
          "Keep information confidential where appropriate.",
          "Document actions taken."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with staff concern handling. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about staff concern handling. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for staff concern handling. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Staff Concern Handling.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create an intake note for an employee concern.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 13: In the 'Staff Concern Handling' module, what should the learner do first?",
            "options": [
              "Resolve the concern verbally with no written record in case it escalates",
              "Dismiss the concern if it seems minor or based on a personality conflict",
              "Listen to the concern fully, confirm the facts, treat it confidentially, and document it before deciding the next step",
              "Share the concern with the wider team to gauge whether others feel the same"
            ],
            "answer": 2
          },
          {
            "q": "People and HR Management Module 13: Which multiple-choice answer best shows correct handling of 'Staff Concern Handling'?",
            "options": [
              "Telling the staff member their concern is not a serious matter",
              "A documented concern record with the issue described, the staff member's preferred outcome noted, the action taken, and a follow-up date confirmed",
              "Marking the concern as resolved without confirming with the staff member whether they are satisfied",
              "Raising the concern with the manager of the person it is about without telling the staff member"
            ],
            "answer": 1
          },
          {
            "q": "People and HR Management Module 13: In the 'Staff Concern Handling' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to help draft a response or action plan for the concern, then have HR review the approach and confirm it is appropriate and fair before responding",
              "Allow AI to assess the seriousness of a staff concern and recommend a resolution automatically",
              "Use AI to decide whether a concern meets the threshold for a formal investigation",
              "Share details of the staff concern including personal names in a public AI tool"
            ],
            "answer": 0
          }
        ],
        "module": "Module 13"
      },
      {
        "day": 14,
        "title": "AI in HR Safely",
        "objective": "Use AI for drafting while protecting privacy and fairness.",
        "content": [
          "Real-life business problem: AI can help draft HR emails, job posts, and notes, but HR data is sensitive and decisions must be fair.",
          "This topic teaches you how to handle ai in hr safely in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Remove unnecessary personal details before using AI.",
          "Do not let AI make hiring or disciplinary decisions alone.",
          "Check for biased or unfair wording.",
          "Verify all facts, pay, dates, and policy references.",
          "Keep final decision-making with the responsible person."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with ai in hr safely. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about ai in hr safely. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for ai in hr safely. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for AI in HR Safely.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Use AI to draft an HR message and list privacy/fairness checks.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "People and HR Management Module 14: In the 'AI in HR Safely' module, what should the learner do first?",
            "options": [
              "Confirm what personal data is involved, check what the organisation's AI use policy permits, and use only approved tools before proceeding",
              "Allow AI to make hiring and performance decisions to remove human bias",
              "Use any AI tool to process staff data if it produces faster results",
              "Share complete staff records with AI for a comprehensive HR analysis"
            ],
            "answer": 0
          },
          {
            "q": "People and HR Management Module 14: Which multiple-choice answer best shows correct handling of 'AI in HR Safely'?",
            "options": [
              "A documented HR AI use log showing the task, tool approved, data shared confirmed as non-personal, output reviewed, and human HR decision made before any action",
              "Allowing AI to update staff records automatically based on absence or output data",
              "Using AI to replace all HR manager judgement in sensitive staff situations",
              "Using AI to generate formal warning letters without HR review"
            ],
            "answer": 0
          },
          {
            "q": "People and HR Management Module 14: In the 'AI in HR Safely' scenario, what is the safest way to use AI?",
            "options": [
              "Paste individual staff records including names and salaries into a public AI tool for analysis",
              "Allow AI to manage the full HR workflow from recruitment to offboarding",
              "Use AI to make termination or promotion recommendations without HR or manager review",
              "Use AI to assist with drafting HR documents and analysing anonymised data, then verify all outputs with HR before using them in any staff matter"
            ],
            "answer": 3
          }
        ],
        "module": "Module 14"
      }
    ]
  },
  {
    "id": "admin-positions",
    "title": "Business Administration",
    "role": "For admin assistants, virtual assistants, office staff, and business support roles",
    "description": "A practical 14-module course for managing email, calendars, records, reports, data entry, customer support, document control, and admin workflows in general business settings.",
    "outcomes": [
      "Organise daily admin work with clear priorities and records",
      "Handle emails, calendars, documents, data, and reports accurately",
      "Support customers and internal teams with professional communication",
      "Use AI to draft and organise admin work while checking details carefully"
    ],
    "days": [
      {
        "day": 1,
        "title": "Admin Daily Priorities",
        "objective": "Start the day with a clear admin plan.",
        "content": [
          "Real-life business problem: Emails, calendar tasks, data entry, calls, and document requests arrive at the same time.",
          "This topic teaches you how to handle admin daily priorities in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Check deadlines and urgent messages first.",
          "Separate quick tasks from deep-focus tasks.",
          "Group similar tasks together.",
          "Confirm unclear requests before acting.",
          "Send a short update on high-priority items."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with admin daily priorities. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about admin daily priorities. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for admin daily priorities. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Admin Daily Priorities.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a daily admin priority checklist.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 1: In the 'Admin Daily Priorities' module, what should the learner do first?",
            "options": [
              "Review all pending tasks, deadlines, and incoming requests before deciding which admin work to start first",
              "Start the day by handling the most recent email first",
              "Begin with the longest task to ensure the most important work is done",
              "Accept every new task request as it arrives and handle them in order"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 1: Which multiple-choice answer best shows correct handling of 'Admin Daily Priorities'?",
            "options": [
              "Starting the day with personal admin before checking business-critical items",
              "A written daily priority list with tasks ranked by deadline and impact, urgent items flagged, owner confirmed, and a check completed at end of day",
              "A mental list of things to do with no written plan",
              "A daily plan created once and never updated when new priorities arrive"
            ],
            "answer": 1
          },
          {
            "q": "Business Administration Module 1: In the 'Admin Daily Priorities' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to decide which admin tasks can be skipped to save time",
              "Share all incoming task requests in a public AI tool to generate a daily schedule",
              "Allow AI to respond to incoming requests on your behalf throughout the day",
              "Use AI to help organise and prioritise the day's tasks from your inbox and tracker, then confirm the order reflects real deadlines and impact before starting"
            ],
            "answer": 3
          }
        ],
        "module": "Module 01"
      },
      {
        "day": 2,
        "title": "Professional Email Handling",
        "objective": "Reply clearly, politely, and with the right information.",
        "content": [
          "Real-life business problem: An email asks for information, but the request is unclear and the answer needs records checked first.",
          "This topic teaches you how to handle professional email handling in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Read the full email and identify the request.",
          "Check records before replying.",
          "Use a clear subject and polite tone.",
          "Answer in bullets if there are multiple points.",
          "State next steps or expected timing."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with professional email handling. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about professional email handling. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for professional email handling. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Professional Email Handling.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a professional reply to an unclear business email.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 2: In the 'Professional Email Handling' module, what should the learner do first?",
            "options": [
              "Forward every email to your manager before responding",
              "Reply to all emails immediately as they arrive to clear the inbox",
              "Archive emails without responding if the required action is unclear",
              "Read the email fully, confirm what action is needed, identify the right person to respond, and reply within the agreed service standard"
            ],
            "answer": 3
          },
          {
            "q": "Business Administration Module 2: Which multiple-choice answer best shows correct handling of 'Professional Email Handling'?",
            "options": [
              "A reply that copies in the entire team on a simple operational matter",
              "Responding to a complaint email with a defensive explanation before acknowledging the customer's concern",
              "A professional reply that addresses the request clearly, confirms any action taken or next steps, uses a polite tone, and is proofread before sending",
              "A one-word reply or an emoji reaction to a formal business email"
            ],
            "answer": 2
          },
          {
            "q": "Business Administration Module 2: In the 'Professional Email Handling' scenario, what is the safest way to use AI?",
            "options": [
              "Paste the full email thread including client names and account details into a public AI tool",
              "Use AI to draft a professional response to a complex email, then review the tone, accuracy, and completeness before sending",
              "Use AI to sort and delete emails it determines are low priority without your review",
              "Allow AI to send replies automatically to all incoming emails within five minutes"
            ],
            "answer": 1
          }
        ],
        "module": "Module 02"
      },
      {
        "day": 3,
        "title": "Calendar and Scheduling",
        "objective": "Schedule meetings without avoidable confusion.",
        "content": [
          "Real-life business problem: Several people need to meet, but availability, time zones, agenda, and location are not confirmed.",
          "This topic teaches you how to handle calendar and scheduling in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Confirm purpose, duration, attendees, and urgency.",
          "Check availability and time zone.",
          "Send invite with agenda and links/location.",
          "Add reminders if needed.",
          "Update attendees if anything changes."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with calendar and scheduling. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about calendar and scheduling. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for calendar and scheduling. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Calendar and Scheduling.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a meeting scheduling checklist and invite text.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 3: In the 'Calendar and Scheduling' module, what should the learner do first?",
            "options": [
              "Book a recurring meeting for the maximum time slot available to avoid rebooking",
              "Book meetings without checking the availability of all required attendees",
              "Confirm attendees, check their availability, agree on a duration, and send a clear invite with an agenda before booking the meeting",
              "Schedule meetings back-to-back with no transition time"
            ],
            "answer": 2
          },
          {
            "q": "Business Administration Module 3: Which multiple-choice answer best shows correct handling of 'Calendar and Scheduling'?",
            "options": [
              "Booking a meeting room for a full day to guarantee availability for a one-hour meeting",
              "A calendar invite with no agenda, no location, and no pre-reading attached",
              "Sending a meeting invite without confirming the date with the most senior attendee first",
              "A meeting invite with the purpose confirmed, agenda attached, required attendees identified, location or video link included, and duration appropriate to the agenda"
            ],
            "answer": 3
          },
          {
            "q": "Business Administration Module 3: In the 'Calendar and Scheduling' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft the meeting agenda and scheduling message, then confirm the time, attendees, and purpose are correct before sending the invite",
              "Share calendar access and all attendee availability data with a public AI tool for scheduling",
              "Allow AI to book meetings automatically based on attendee calendar data",
              "Use AI to cancel and reschedule meetings based on attendance patterns"
            ],
            "answer": 0
          }
        ],
        "module": "Module 03"
      },
      {
        "day": 4,
        "title": "Data Entry Accuracy",
        "objective": "Avoid mistakes in business records.",
        "content": [
          "Real-life business problem: A small typo in a customer, invoice, or order record can cause delays or wrong communication.",
          "This topic teaches you how to handle data entry accuracy in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Check the source document first.",
          "Enter data slowly and consistently.",
          "Use validation rules where possible.",
          "Review high-risk fields like names, dates, amounts, and email addresses.",
          "Keep a correction log."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with data entry accuracy. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about data entry accuracy. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for data entry accuracy. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Data Entry Accuracy.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a data-entry quality checklist.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 4: In the 'Data Entry Accuracy' module, what should the learner do first?",
            "options": [
              "Enter data quickly and correct errors if someone else spots them",
              "Review the source document before entering data, enter carefully, and cross-check the entry against the source before saving or submitting",
              "Enter data in bulk at the end of the day to save time",
              "Enter data directly from memory when the source document is not immediately available"
            ],
            "answer": 1
          },
          {
            "q": "Business Administration Module 4: Which multiple-choice answer best shows correct handling of 'Data Entry Accuracy'?",
            "options": [
              "A data entry completed quickly with no review",
              "Bulk data entry completed by copying from a previous record and updating only the name",
              "A data entry where the format is correct but the values have not been verified against the source",
              "A data entry completed from the confirmed source, cross-checked field by field before saving, with any discrepancies flagged and resolved before the record is closed"
            ],
            "answer": 3
          },
          {
            "q": "Business Administration Module 4: In the 'Data Entry Accuracy' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to fill in missing data fields with the most likely value based on other records",
              "Use AI to help format and structure data entry templates, then verify each entry against the source document before saving to the system",
              "Paste confidential customer data into a public AI tool to clean and format it",
              "Allow AI to complete data entry automatically from scanned documents without human review"
            ],
            "answer": 1
          }
        ],
        "module": "Module 04"
      },
      {
        "day": 5,
        "title": "File and Folder Organisation",
        "objective": "Make documents easy to find.",
        "content": [
          "Real-life business problem: Files are saved with random names in different folders, causing wasted time and duplicate work.",
          "This topic teaches you how to handle file and folder organisation in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Create a folder structure by business area or project.",
          "Use a standard naming convention.",
          "Mark final versions clearly.",
          "Archive outdated files.",
          "Keep a document index for important files."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with file and folder organisation. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about file and folder organisation. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for file and folder organisation. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for File and Folder Organisation.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Design a file naming and folder system.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 5: In the 'File and Folder Organisation' module, what should the learner do first?",
            "options": [
              "Save files wherever is quickest and organise later when you have time",
              "Confirm the agreed folder structure and naming convention before saving any new file",
              "Save all files in one root folder to avoid confusion about where things are",
              "Create new folders as needed without checking whether an existing folder already covers the purpose"
            ],
            "answer": 1
          },
          {
            "q": "Business Administration Module 5: Which multiple-choice answer best shows correct handling of 'File and Folder Organisation'?",
            "options": [
              "Organising files by date received rather than by topic or project",
              "A desktop full of files named 'document' and 'new folder'",
              "A folder structure with clear categories, consistent file naming conventions applied, old versions archived separately, and shared access confirmed for all relevant team members",
              "Saving working drafts and final versions in the same folder with the same name"
            ],
            "answer": 2
          },
          {
            "q": "Business Administration Module 5: In the 'File and Folder Organisation' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to reorganise all shared drive files automatically based on file type and date",
              "Use AI to delete duplicate files from the shared drive automatically",
              "Share the entire file directory with a public AI tool to get a structure recommendation",
              "Use AI to suggest a folder naming structure and convention, then have the team agree on it and apply it consistently to all new and existing files"
            ],
            "answer": 3
          }
        ],
        "module": "Module 05"
      },
      {
        "day": 6,
        "title": "Customer Support Admin",
        "objective": "Give helpful support without overpromising.",
        "content": [
          "Real-life business problem: A customer asks for an update on an order, account, refund, or service request.",
          "This topic teaches you how to handle customer support admin in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Acknowledge the request.",
          "Check the relevant system or tracker.",
          "Give confirmed information only.",
          "Explain the next step and who is handling it.",
          "Record the interaction."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with customer support admin. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about customer support admin. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for customer support admin. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Customer Support Admin.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a customer support reply and internal note.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 6: In the 'Customer Support Admin' module, what should the learner do first?",
            "options": [
              "Respond to customer support requests in the order they arrived",
              "Check whether the request requires urgent action, confirm the correct team or person to handle it, and log it before responding",
              "Close support tickets once the customer has received an initial reply",
              "Escalate all customer support requests to a manager to avoid making errors"
            ],
            "answer": 1
          },
          {
            "q": "Business Administration Module 6: Which multiple-choice answer best shows correct handling of 'Customer Support Admin'?",
            "options": [
              "A support log entry with the customer issue recorded, priority assigned, owner confirmed, action taken documented, and resolution or next step communicated to the customer",
              "A reply telling the customer their request is noted with no further action",
              "Closing a ticket before confirming the customer's issue has been resolved",
              "A support response sent without checking whether the same customer raised a previous issue"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 6: In the 'Customer Support Admin' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to draft the customer response from the confirmed issue details, then review it for accuracy, tone, and completeness before sending",
              "Use AI to determine whether a customer complaint should be escalated without a human review",
              "Paste customer account details and personal contact information into a public AI tool",
              "Allow AI to close customer support tickets automatically once a response has been sent"
            ],
            "answer": 0
          }
        ],
        "module": "Module 06"
      },
      {
        "day": 7,
        "title": "Basic Report Preparation",
        "objective": "Turn raw updates into a useful report.",
        "content": [
          "Real-life business problem: A manager asks for a weekly summary but the information is scattered across files and messages.",
          "This topic teaches you how to handle basic report preparation in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Collect the required data.",
          "Group information by topic.",
          "Show numbers where available.",
          "Highlight incomplete or risky items.",
          "End with next actions."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with basic report preparation. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about basic report preparation. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for basic report preparation. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Basic Report Preparation.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a weekly admin report.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 7: In the 'Basic Report Preparation' module, what should the learner do first?",
            "options": [
              "Write the report from memory and include data you believe is approximately correct",
              "Copy the format from a previous report and update the numbers without checking the data",
              "Submit the report without checking that the conclusion matches the data",
              "Gather all confirmed data from source records, verify its accuracy, and outline the report structure before writing"
            ],
            "answer": 3
          },
          {
            "q": "Business Administration Module 7: Which multiple-choice answer best shows correct handling of 'Basic Report Preparation'?",
            "options": [
              "A report submitted on time but containing data from the wrong reporting period",
              "A report that presents all data equally without highlighting what is significant",
              "A report with a conclusion that does not connect to the data presented",
              "A report with confirmed data, a clear structure, a summary of key findings, specific conclusions supported by the evidence, and a final review completed before submission"
            ],
            "answer": 3
          },
          {
            "q": "Business Administration Module 7: In the 'Basic Report Preparation' scenario, what is the safest way to use AI?",
            "options": [
              "Allow AI to pull data from live systems and generate the report automatically for submission",
              "Use AI to adjust the data presentation to make the results appear more favourable",
              "Share confidential financial data in a public AI tool to create the report",
              "Use AI to structure the report and draft the narrative from your confirmed data, then verify each figure, conclusion, and recommendation before submitting"
            ],
            "answer": 3
          }
        ],
        "module": "Module 07"
      },
      {
        "day": 8,
        "title": "Expense and Invoice Admin",
        "objective": "Process financial documents carefully.",
        "content": [
          "Real-life business problem: Invoices and receipts arrive by email and chat, but some are missing details or approvals.",
          "This topic teaches you how to handle expense and invoice admin in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Check supplier name, amount, date, due date, and reference.",
          "Match the invoice to the request or purchase.",
          "Confirm approval before processing.",
          "Record payment status.",
          "Follow up missing information."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with expense and invoice admin. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about expense and invoice admin. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for expense and invoice admin. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Expense and Invoice Admin.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create an invoice processing checklist.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 8: In the 'Expense and Invoice Admin' module, what should the learner do first?",
            "options": [
              "Check the invoice against the purchase order, confirm the work was completed, verify the amounts, and obtain the required approval before processing payment",
              "Process all invoices on the day they arrive to avoid late payment penalties",
              "Approve an invoice because it looks correct based on the job description",
              "Forward all invoices to your manager without reviewing them first"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 8: Which multiple-choice answer best shows correct handling of 'Expense and Invoice Admin'?",
            "options": [
              "Processing an invoice without checking whether it duplicates a previous payment",
              "Approving an expense claim without checking the receipts match the claimed amounts",
              "An invoice processed after the purchase order is confirmed, the delivery is verified, the amounts are checked, the approval is obtained, and the payment is recorded with a reference number",
              "Approving an invoice from memory without checking supporting documents"
            ],
            "answer": 2
          },
          {
            "q": "Business Administration Module 8: In the 'Expense and Invoice Admin' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to help structure an expense report or invoice log, then verify each entry against source receipts and invoices before submitting for approval",
              "Use AI to match invoices to purchase orders automatically without human review before payment",
              "Share supplier payment details and bank account numbers in a public AI tool for processing",
              "Allow AI to approve invoices automatically below a set dollar threshold"
            ],
            "answer": 0
          }
        ],
        "module": "Module 08"
      },
      {
        "day": 9,
        "title": "CRM or Tracker Updates",
        "objective": "Keep business systems current.",
        "content": [
          "Real-life business problem: Customer or lead updates are not entered into the tracker, so the team loses follow-up opportunities.",
          "This topic teaches you how to handle crm or tracker updates in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Record every important interaction.",
          "Use consistent statuses.",
          "Add next follow-up date and owner.",
          "Attach notes or links.",
          "Review overdue follow-ups daily."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with crm or tracker updates. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about crm or tracker updates. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for crm or tracker updates. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for CRM or Tracker Updates.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a CRM/tracker update routine.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 9: In the 'CRM or Tracker Updates' module, what should the learner do first?",
            "options": [
              "Update the record immediately after each customer interaction using confirmed facts from the conversation or transaction",
              "Update the CRM or tracker at the end of the week from memory",
              "Update only the fields required by your manager and leave others blank",
              "Copy previous record entries and update the date to save time"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 9: Which multiple-choice answer best shows correct handling of 'CRM or Tracker Updates'?",
            "options": [
              "A CRM record updated with vague notes and no next action",
              "A tracker updated only when a sale or formal agreement is reached",
              "CRM records updated by a team member based on secondhand information",
              "A CRM entry updated with the interaction date, summary of what was discussed, outcome confirmed, next action logged, and owner identified"
            ],
            "answer": 3
          },
          {
            "q": "Business Administration Module 9: In the 'CRM or Tracker Updates' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to merge duplicate CRM records automatically without human review",
              "Allow AI to update CRM records automatically from emails and call transcripts",
              "Use AI to suggest a consistent CRM update format from a conversation summary, then verify accuracy and completeness before saving to the customer record",
              "Share full customer account histories including personal details in a public AI tool"
            ],
            "answer": 2
          }
        ],
        "module": "Module 09"
      },
      {
        "day": 10,
        "title": "Phone and Message Notes",
        "objective": "Capture calls and chats accurately.",
        "content": [
          "Real-life business problem: A call or chat contains important information, but nobody records the details clearly.",
          "This topic teaches you how to handle phone and message notes in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Record who contacted you and when.",
          "Write the request or issue clearly.",
          "Note any promise, deadline, or next step.",
          "Send confirmation if needed.",
          "Add it to the correct tracker."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with phone and message notes. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about phone and message notes. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for phone and message notes. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Phone and Message Notes.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write a call note and follow-up message.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 10: In the 'Phone and Message Notes' module, what should the learner do first?",
            "options": [
              "Write down key details during the call and complete the note immediately after hanging up, while the information is still accurate",
              "Ask the caller to email a summary so you do not have to take notes",
              "Take notes only for calls with customers, not for internal or supplier calls",
              "Rely on memory to recall phone call details until the end of the day"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 10: Which multiple-choice answer best shows correct handling of 'Phone and Message Notes'?",
            "options": [
              "A call note with the caller's name, date and time, purpose of the call, key information shared, action required, owner, and follow-up deadline",
              "A long word-for-word transcript of the call with no summary or action items",
              "A note saying 'called back, sorted'",
              "A note stored in a personal document not accessible to the team when needed"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 10: In the 'Phone and Message Notes' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to decide which calls are important enough to log",
              "Allow AI to transcribe and file all phone calls automatically without your review",
              "Use AI to help format a call note template, then fill it with confirmed details from the call before saving or forwarding",
              "Share call recordings containing personal customer information in a public AI tool"
            ],
            "answer": 2
          }
        ],
        "module": "Module 10"
      },
      {
        "day": 11,
        "title": "Task Request Clarification",
        "objective": "Ask the right questions before doing admin work.",
        "content": [
          "Real-life business problem: Someone says 'please handle this' but does not provide deadline, file, context, or expected output.",
          "This topic teaches you how to handle task request clarification in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Clarify the goal.",
          "Ask for deadline and priority.",
          "Ask for source files or references.",
          "Confirm the required format.",
          "Repeat back the task before starting."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with task request clarification. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about task request clarification. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for task request clarification. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Task Request Clarification.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Write clarification questions for an incomplete task request.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 11: In the 'Task Request Clarification' module, what should the learner do first?",
            "options": [
              "Start the task based on your best guess of what is needed",
              "Ask for clarification in a group meeting and make notes from the general discussion",
              "Identify what is unclear, ask specific questions to confirm the requirement, and document the agreed scope before starting the task",
              "Complete the task as you understand it and wait for feedback to confirm whether it was correct"
            ],
            "answer": 2
          },
          {
            "q": "Business Administration Module 11: Which multiple-choice answer best shows correct handling of 'Task Request Clarification'?",
            "options": [
              "A task started without any clarification and submitted hoping it is correct",
              "A clarification email copied to everyone on the original task request",
              "A clarification message that lists the specific gaps in the original request, the assumptions being considered, and the confirmation needed before work begins",
              "A clarification request that asks for a full briefing meeting when a short message would be sufficient"
            ],
            "answer": 2
          },
          {
            "q": "Business Administration Module 11: In the 'Task Request Clarification' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to help draft the clarification questions clearly and concisely, then review them to confirm they cover all gaps before sending",
              "Share the original task request including confidential context in a public AI tool",
              "Use AI to complete the task and ask for clarification only if the output is rejected",
              "Allow AI to interpret the original task request and begin work without human clarification"
            ],
            "answer": 0
          }
        ],
        "module": "Module 11"
      },
      {
        "day": 12,
        "title": "Confidential Information Handling",
        "objective": "Protect business and personal information.",
        "content": [
          "Real-life business problem: You handle customer, staff, supplier, or financial information and must avoid careless sharing.",
          "This topic teaches you how to handle confidential information handling in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Identify confidential information.",
          "Share only with people who need it.",
          "Use approved storage and communication channels.",
          "Avoid copying sensitive data into unapproved tools.",
          "Report mistakes quickly."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with confidential information handling. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about confidential information handling. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for confidential information handling. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Confidential Information Handling.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a confidentiality checklist for admin work.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 12: In the 'Confidential Information Handling' module, what should the learner do first?",
            "options": [
              "Confirm what information is classified as confidential, check who is authorised to access it, and handle it only within approved systems and channels",
              "Share confidential information with colleagues who seem trustworthy",
              "Send confidential information by personal email when work systems are unavailable",
              "Print confidential documents for easier reading and dispose of them in the general bin"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 12: Which multiple-choice answer best shows correct handling of 'Confidential Information Handling'?",
            "options": [
              "Storing confidential documents in a shared folder accessible to the entire organisation",
              "Verbal discussion of confidential staff matters in a shared office space",
              "A confidential information record showing who accessed it, when, for what purpose, and confirmation that it was stored, transmitted, and disposed of according to policy",
              "A confidential document emailed to the wrong person with a correction sent after"
            ],
            "answer": 2
          },
          {
            "q": "Business Administration Module 12: In the 'Confidential Information Handling' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to decide what information should be classified as confidential",
              "Allow AI to handle confidential data if the tool has a privacy policy",
              "Use AI only with anonymised or non-sensitive data for tasks involving confidential information, and confirm with your manager before using any AI tool for sensitive material",
              "Paste staff salary information, medical records, or client contracts into a public AI tool for formatting"
            ],
            "answer": 2
          }
        ],
        "module": "Module 12"
      },
      {
        "day": 13,
        "title": "Admin Process Improvement",
        "objective": "Make repeated admin work faster and more reliable.",
        "content": [
          "Real-life business problem: The same admin task takes too long every week because there is no template or checklist.",
          "This topic teaches you how to handle admin process improvement in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Identify the repeated task.",
          "Map the steps.",
          "Find where delays or mistakes happen.",
          "Create a template, checklist, or automation idea.",
          "Test and improve the new process."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with admin process improvement. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about admin process improvement. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for admin process improvement. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for Admin Process Improvement.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Create a process improvement plan for a repeated admin task.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 13: In the 'Admin Process Improvement' module, what should the learner do first?",
            "options": [
              "Confirm the current process is documented, identify the root cause of the inefficiency, and test a proposed improvement before changing the process for everyone",
              "Suggest improvements without measuring how much time or errors the current process produces",
              "Change the admin process immediately when you identify an inefficiency",
              "Skip the improvement process and work around the inefficiency instead"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 13: Which multiple-choice answer best shows correct handling of 'Admin Process Improvement'?",
            "options": [
              "An informal change made to a process without informing the team",
              "Improving a process without involving the people who use it daily",
              "A process change implemented by one person and communicated to the team after it is in place",
              "A documented process improvement proposal with the current problem described, the proposed change explained, the expected benefit measured, a trial plan outlined, and a review date set"
            ],
            "answer": 3
          },
          {
            "q": "Business Administration Module 13: In the 'Admin Process Improvement' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to automate all admin tasks immediately based on its suggestions",
              "Allow AI to redesign the admin process automatically based on efficiency data",
              "Share all admin process documentation in a public AI tool for a full review",
              "Use AI to analyse the current process steps and suggest improvements, then pilot the best suggestion with the team and confirm results before rolling it out fully"
            ],
            "answer": 3
          }
        ],
        "module": "Module 13"
      },
      {
        "day": 14,
        "title": "AI for Admin Work",
        "objective": "Use AI to draft, summarise, and organise without losing accuracy.",
        "content": [
          "Real-life business problem: AI can help with emails, reports, summaries, and checklists, but admin work often includes sensitive and exact details.",
          "This topic teaches you how to handle ai for admin work in a practical workplace setting.",
          "The goal is to move from confusion to a clear decision, action plan, communication, and follow-up record.",
          "AI can help organise the work, but a person must verify facts, protect privacy, and make the final decision."
        ],
        "howTo": [
          "Open the relevant records first: email, chat, tracker, file, calendar, customer record, supplier note, or team update.",
          "Write the situation in plain language using only confirmed facts.",
          "Use AI only to organise, rewrite, summarise, or create a checklist; do not allow it to invent details.",
          "Check the output against the real records before sending, saving, or acting on it."
        ],
        "steps": [
          "Remove unnecessary sensitive details.",
          "Give AI the audience, tone, and format.",
          "Ask it to structure or rewrite, not invent.",
          "Check all names, dates, amounts, links, and facts.",
          "Edit before sending."
        ],
        "prompts": [
          "Act as a practical business assistant. Help me with ai for admin work. Context: [paste confirmed facts]. Create a step-by-step action plan with owner, deadline, risk, communication, and follow-up. Do not invent facts.",
          "Rewrite this workplace message about ai for admin work. Make it clear, polite, professional, and action-focused. Text: [paste draft].",
          "Create a checklist for ai for admin work. Include what to check, what evidence is needed, common mistakes, escalation points, and final confirmation."
        ],
        "example": {
          "context": "Example for AI for Admin Work.",
          "before": "The update is messy, several people are waiting, and the next action is unclear.",
          "after": "The issue is rewritten into confirmed facts, priority, owner, deadline, evidence needed, message to send, and follow-up action."
        },
        "tools": [
          "ChatGPT",
          "Google Docs",
          "Google Sheets",
          "Email",
          "Calendar",
          "Task tracker"
        ],
        "practice": "Use AI to rewrite an admin email and list what must be checked before sending.",
        "practiceGuide": [
          "State the business problem clearly.",
          "List confirmed facts and missing information.",
          "Create step-by-step actions with owner and deadline.",
          "Write the customer/team/manager message if communication is needed.",
          "Add a prevention, follow-up, or escalation step."
        ],
        "quiz": [
          {
            "q": "Business Administration Module 14: In the 'AI for Admin Work' module, what should the learner do first?",
            "options": [
              "Confirm the task, check what data can safely be included, and use only an approved AI tool before starting any AI-assisted admin work",
              "Allow AI to complete and submit admin work without reviewing the output",
              "Share all admin files with AI to get a full audit of inefficiencies",
              "Use any AI tool for admin tasks because AI tools are generally safe"
            ],
            "answer": 0
          },
          {
            "q": "Business Administration Module 14: Which multiple-choice answer best shows correct handling of 'AI for Admin Work'?",
            "options": [
              "Allowing AI to send admin communications to external parties without admin staff review",
              "Copying AI-generated admin content directly into official records without checking it",
              "An AI admin use record showing the task, tool used, data included confirmed as appropriate, output reviewed for accuracy, and human sign-off completed before filing",
              "Using AI to complete confidential HR admin tasks using public AI tools"
            ],
            "answer": 2
          },
          {
            "q": "Business Administration Module 14: In the 'AI for Admin Work' scenario, what is the safest way to use AI?",
            "options": [
              "Use AI to decide which admin tasks require human review and which can be auto-approved",
              "Paste staff personal data, invoices, and contracts into a public AI tool to speed up admin processing",
              "Use AI to draft, format, and organise admin outputs, then verify each output for accuracy, completeness, and confidentiality before using",
              "Allow AI to complete all routine admin tasks autonomously once initial instructions are set"
            ],
            "answer": 2
          }
        ],
        "module": "Module 14"
      }
    ]
  }
];
