// Shared content data, transcribed from the Claude Design prototype sources
// (LifeSG-Homepage.dc.html, MyLifeSG-Dashboard.dc.html,
//  MyLifeSG-your-mails.dc.html, MyLifeSG-applications.dc.html).

export const langLabels = ["English", "中文", "Melayu", "தமிழ்"];

export const chipDefs = [
  { label: "Large Families Scheme" },
  { label: "Baby Bonus Scheme" },
  { label: "Child LifeSG Credits" },
  { label: "Budget 2026", isNew: true },
  { label: "myACP: Prepare an Advance Care Plan Online", isNew: true },
  { label: "Lasting Power of Attorney" },
];

export const popular = [
  "View your benefits statement",
  "Register your child's birth",
  "Search for a preschool",
  "Manage Shared Parental Leave (SPL) sharing arrangement",
  "Apply for Baby Bonus",
  "Report an issue in your neighbourhood",
  "Help neighbour",
  "Book public facilities and spaces",
];

export const moments = [
  { icon: "baby", color: "#C0397B", title: "When your baby is born", desc: "What you must do after giving birth, and other resources to support you and your newborn." },
  { icon: "flower-2", color: "#7A5BA8", title: "When you lose a loved one", desc: "Find out more about what to do after the immediate passing of a loved one, explore other topics related to death." },
  { icon: "heart-handshake", color: "#BF3431", title: "Becoming a caregiver", desc: "Learn how to care for a loved one, access caregiver support, training, and financial schemes." },
  { icon: "briefcase", color: "#1768BE", title: "Starting work", desc: "Understand your employment rights, CPF, and the support available as you begin your career." },
  { icon: "house", color: "#257645", title: "Buying a home", desc: "Plan your HDB or resale purchase, grants, and the steps to owning your first home." },
  { icon: "graduation-cap", color: "#5B62A7", title: "Going to school", desc: "Register for a preschool or primary school and find education support for your child." },
  { icon: "heart", color: "#C0397B", title: "Getting married", desc: "Register your marriage, plan your ceremony, and access schemes for newlyweds." },
  { icon: "palmtree", color: "#98590C", title: "Planning for retirement", desc: "Make sense of CPF payouts, healthcare, and how to prepare for your golden years." },
];

export const topics = [
  { title: "Care and support services", desc: "Access disability, eldercare, mental health, and caregiver support services." },
  { title: "Death and bereavement", desc: "Get guidance on death registration, funeral arrangements, and bereavement support." },
  { title: "Family and parenting", desc: "Access parenting resources, childcare support, and family benefits." },
  { title: "Civic duties and National Service", desc: "Find information on NS enlistment, deferment, and support for NSmen." },
  { title: "End-of-life and estate planning", desc: "Plan ahead for care decisions, wills, and estate matters." },
];

export const lifeMenu = ["When your baby is born", "When you lose a loved one", "Becoming a caregiver", "Starting work", "Buying a home", "Getting married"];
export const topicsMenu = topics.map((t) => t.title);

export const tasks = [
  { due: "Due in 3 days", tagColor: "red", title: "Lasting power of attorney", detail: "Draft expires on 23 August 2026" },
  { due: "Due in 5 days", tagColor: "red", title: "Advance Care Planning", detail: "Draft expires on 25 August 2026" },
  { due: "Due soon", tagColor: "yellow", title: "Parking fines", detail: "Deadline on 23 September 2026" },
];

const interactionDefs = [
  { title: "Updated personal profile", date: "31 May 2026" },
  { title: "Paid parking fines", date: "21 May 2026" },
  { title: "Continue with ACP draft", date: "21 May 2026" },
  { title: "Completed wills learning", date: "21 May 2026" },
  { title: "Started ACP form", date: "21 April 2026" },
];
export const interactions = interactionDefs.map((it, i) => ({ ...it, hasLine: i < interactionDefs.length - 1 }));

export const credits = [
  { label: "SG Culture pass", amount: "100", note: "Expiring 31 Dec 2025" },
  { label: "Skillsfuture credits", amount: "4,500", note: "Some credits expires on 30 Jun 2026" },
  { label: "CDC vouchers", amount: "500", note: "Jan 2025 CDC payout expires 31 Dec 2026" },
];

const journeyDefs = [
  { icon: "house", title: "Navigating home ownership", desc: "Explore your grant eligibility and property financing options with our guided first-home acquisition pathway.", badgeType: "primary" },
  { icon: "flower-2", title: "Start legacy planning", desc: "Start Legacy planning to put your mind at ease when difficult situation happens, such as death and when you lose mental capacity.", badgeType: "primary" },
  { icon: "briefcase", title: "Wealth initiatives", desc: "Build your financial security through CPF and other initiatives designed to accumulate long-term wealth.", badgeType: "primary" },
  { icon: "graduation-cap", title: "Learning and upskilling", desc: "Find courses that explore your personal interest or consider upskill to pivot your professional career.", badgeType: "warning" },
];
const recReasons = [
  "Recent HFE application",
  "Recently started on LPA form",
  "Popular in your bracket",
  "Skillsfuture credits expiring",
];
const badgeStyles = {
  primary: { color: "var(--text-primary)", bg: "var(--bg-primary-subtlest)" },
  warning: { color: "var(--text-warning)", bg: "var(--bg-warning-subtle)" },
};
export const journeys = journeyDefs.map((j, i) => ({
  ...j,
  color: "#1768BE",
  badgeColor: badgeStyles[j.badgeType].color,
  badgeBg: badgeStyles[j.badgeType].bg,
  reason: recReasons[i],
}));

export const mailDefs = [
  { agency: "IRAS", subject: "Your Notice of Assessment for YA2026 is ready", preview: "View your tax payable and instalment plan options.", date: "2 Jul 2026", unread: true, pending: false, body: "Your Notice of Assessment (NOA) for the Year of Assessment 2026 is now available. Your assessed tax payable is $2,480. You may pay in full by 30 Jul 2026, or opt for the 12-month interest-free GIRO instalment plan. Please review your assessment and raise any objections within 30 days from the date of this notice." },
  { agency: "HDB", subject: "Action required: Confirm your HFE letter details", preview: "Please verify your household income declaration by 15 Jul.", date: "28 Jun 2026", unread: true, pending: true, body: "We are processing your HDB Flat Eligibility (HFE) letter application. To proceed, please confirm your household income declaration and the list of occupiers. This step must be completed by 15 Jul 2026, failing which your application will lapse and you will need to reapply." },
  { agency: "MOH", subject: "Your Healthier SG enrolment is confirmed", preview: "You're now enrolled with Dr Tan at Yishun Polyclinic.", date: "24 Jun 2026", unread: true, pending: false, body: "Thank you for enrolling in Healthier SG. You are now enrolled with Dr Tan Wei Ming at Yishun Polyclinic. Your first health plan consultation is complimentary. Book an appointment through the HealthHub app to develop your personalised health plan." },
  { agency: "CPF Board", subject: "Contribution statement for June 2026", preview: "Your monthly statement is now available to view.", date: "20 Jun 2026", unread: true, pending: false, body: "Your CPF contribution statement for June 2026 is now available. A total of $1,850 was credited across your Ordinary, Special and MediSave accounts. Log in to my cpf to view the full breakdown and your latest account balances." },
  { agency: "ICA", subject: "Passport renewal reminder", preview: "Your passport expires on 12 Dec 2026. Renew early.", date: "18 Jun 2026", unread: true, pending: false, body: "Your Singapore passport will expire on 12 Dec 2026. We recommend renewing at least 6 months before expiry, especially if you have upcoming travel. You can renew online via the ICA e-Service; your new passport will be delivered to your registered address." },
  { agency: "LTA", subject: "Season parking renewal confirmation", preview: "Your season parking has been renewed until Dec 2026.", date: "12 Jun 2026", unread: true, pending: false, body: "Your season parking has been successfully renewed and is valid until 31 Dec 2026. A payment of $110 was charged to your registered payment method. No further action is required." },
  { agency: "CDC", subject: "Your CDC vouchers have been claimed", preview: "$300 in vouchers credited on 3 May 2026.", date: "3 May 2026", unread: false, pending: false, body: "You have successfully claimed $300 in CDC vouchers. These may be used at participating heartland merchants and supermarkets until 31 Dec 2026. Visit the CDC Vouchers site to view your balance and find participating shops near you." },
  { agency: "SupportGoWhere", subject: "Assistance scheme results", preview: "Based on your profile, you may qualify for 2 schemes.", date: "28 Apr 2026", unread: false, pending: false, body: "Based on the details you provided, you may be eligible for 2 assistance schemes: the Assurance Package Cash and the GST Voucher. Visit SupportGoWhere to view the full eligibility criteria and apply directly online.", attachment: "Assistance-scheme-results.pdf" },
];

function step(label, date, state) { return { label, date, state }; }

export const appDefs = [
  {
    agency: "HDB", title: "HDB Flat Eligibility (HFE) letter", ref: "HFE-2026-004821", dateLabel: "Updated 28 Jun 2026",
    status: "In-progress", group: "active", actionable: true, cta: "Continue with draft",
    due: "Due in 5 days", expires: "Expires on 15 Jul 2026", mode: "progress", progressFilled: 4,
    body: "Your HFE application is almost complete. We need you to confirm your household income declaration and occupier list before we can issue your eligibility letter.",
    steps: [step("Application started", "26 Jun 2026", "done"), step("Documents submitted", "27 Jun 2026", "done"), step("Confirm income declaration", "Awaiting your action", "current"), step("HFE letter issued", "Pending", "todo")],
  },
  {
    agency: "MOH", title: "Advance Care Planning", ref: "ACP-2026-118203", dateLabel: "Updated 25 Jun 2026",
    status: "In-progress", group: "active", actionable: false, cta: "View details",
    due: "Due in 3 days", expires: "Expires on 23 August 2026", mode: "body",
    body: "Your ACP is pending review by a healthcare spokesperson. Get your acknowledgement before your draft expires.",
    steps: [step("Draft submitted", "22 Jun 2026", "done"), step("Under review", "In progress", "current"), step("Acknowledgement issued", "Pending", "todo")],
  },
  {
    agency: "ICA", title: "Passport renewal application", ref: "PPT-2026-559012", dateLabel: "Updated 20 Jun 2026",
    status: "In-progress", group: "active", actionable: false, cta: "View details",
    expires: "Estimated ready by 30 Jun 2026", mode: "progress", progressFilled: 6,
    body: "Your passport application has been received and payment confirmed. Your new passport is being produced and will be delivered to your registered address.",
    steps: [step("Application submitted", "18 Jun 2026", "done"), step("Payment confirmed", "18 Jun 2026", "done"), step("Passport in production", "In progress", "current"), step("Ready for delivery", "Pending", "todo")],
  },
  {
    agency: "MinLaw", title: "Lasting Power of Attorney", ref: "LPA-2026-330298", dateLabel: "Draft saved 8 May 2026",
    status: "Draft", group: "active", actionable: true, cta: "Continue with draft",
    due: "Due in 12 days", expires: "Draft expires on 20 Jul 2026", mode: "progress", progressFilled: 1,
    body: "You have a saved draft for your Lasting Power of Attorney. Continue where you left off to appoint your donee and submit for registration.",
    steps: [step("Draft started", "8 May 2026", "current"), step("Submitted for registration", "Not started", "todo"), step("LPA registered", "Pending", "todo")],
  },
];

export const SEG_TOTAL = 8;
export const statusTone = {
  "In-progress": { border: "#A9C9EA" },
  "Completed": { border: "#A6D3B7" },
  "Draft": { border: "var(--border)" },
};
