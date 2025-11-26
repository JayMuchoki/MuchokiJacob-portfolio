import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "JavaScript", icon: javascript },
  { title: "Python", icon: python },
  { title: "HTML 5", icon: html },
  { title: "CSS 3", icon: css },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Future Interns",
    icon: eduskill,
    iconBg: "#161329",
    date: "Oct 2025 - Nov 2025",
    points: [
      "Worked on project-based analytics tasks, focusing on data cleaning, preprocessing, and dashboard creation for real-world datasets.",
"Processed and structured over 50,000+ data records, improving data accuracy and readiness for analysis.",
"Designed interactive dashboards that visualized performance metrics and trends for better decision making.",
"Delivered data-driven recommendations that improved reporting efficiency and insight clarity by 30%.",
"Strengthened practical experience in Python, Power BI, and statistical analysis, contributing to end-to-end data workflows."
    ],
  },
  {
    title: "Loans and Credit Intern",
    company_name: "Consolidated Bank",
    icon: mathwork,
    iconBg: "#161329",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Attended to clients at the front office, advising 15–25 customers daily on credit products and banking services.",
"Assisted in preparing reference letters, opinion letters, bid bonds, and performance bond proposals, ensuring accuracy and timely processing.",
"Supported credit analysis by reviewing client account turnovers and compiling summaries for loan assessments.",
"Organized and maintained a systematic filing system for over 200 client records, improving accessibility and efficiency.",
"Managed daily communication by making and receiving client calls, handling inquiries, and coordinating with internal departments."
    ],
  },
  {
    title: "IT Support Attachee",
    company_name: "Kenya Forestry Research Institute (KEFRI)",
    icon: edunet,
    iconBg: "#161329",
    date: "July 2023 - Sep 2023",
    points: [
    "Supported staff members by troubleshooting hardware, software, and network issues to ensure smooth operations.",
"Configured and maintained 50+ computer systems and LAN setups, minimizing system downtime by 25%.",
"Collaborated with the IT team to execute daily maintenance and system upgrades, enhancing operational reliability.",
"Ensured stable email and internet connectivity, improving communication flow across departments.",
"Contributed to network uptime of over 98%, strengthening overall IT infrastructure performance."
    ],
  },
];

export const projects = [
  {
    name: "Nairobi Traffic- Ticket prediction",
    description:
     "This project analyzes passenger traffic patterns from Western regions into Nairobi and predicts the expected number of passengers per ride. Using Random Forest and other machine learning models, it forecasts demand to optimize vehicle type, departure times, and schedules. A Streamlit app provides real-time predictions to help transport operators reduce congestion and improve occupancy.",
    tags: [
         { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/JayMuchoki/nairobi-traffic-ticket-prediction",
  },
  {
    name: "Air BnB Pricing ",
    description:
     "This project analyzes employee-related factors at INX Future Inc. to identify key drivers of performance and predict future productivity using machine learning models like Random Forest and XGBoost. It helps HR teams make data-driven hiring, retention, and engagement decisions. Insights from the analysis guide better workforce management and improve overall organizational performance.",
      tags: [
         { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Classification Algorithms", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/JayMuchoki/airbnb-pricing-app",
  },
  {
    name: "Employee Performance Prediction",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/JayMuchoki/Employee-performance-analysis-Perfomance-prediction",
  },
  {
    name: "Business Sale & Performance Analysis",
    description:
      "This project analyzes UK-based online retail sales data (2009–2011) to uncover best-selling products, sales trends, and top-performing regions. Using Excel, SQL, and Power BI, the data was cleaned, merged, and visualized through interactive dashboards to support business decisions. Key insights include peak sales months, top products, and regional performance, informing strategies to boost revenue and customer engagement.",
    tags: [
      { name: "Power Bi", color: "blue-text-gradient" },
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Excel", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/JayMuchoki/PowerBI-Business-Performance-Analysis",
  },
  {
    name: "Loan Analysis",
    description:
      "This project analyzes bank loan application data using Power BI to identify factors influencing loan approvals and denials. Interactive dashboards visualize credit scores, home ownership, bankruptcies, and other financial metrics to uncover patterns affecting lending decisions. Insights help financial institutions assess risk, optimize approval strategies, and make data-driven decisions.",
    tags: [
       { name: "Power Bi", color: "blue-text-gradient" },
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Excel", color: "blue-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/JayMuchoki/Loan_Analysis",
  },
  {
    name: "Social health authority (Sha) Analysis ",
    description:
      "This project evaluates the effectiveness of the Social Health Insurance Fund (SHIF) and Social Health Authority (SHA) using SQL and data analysis. Key areas analyzed include member demographics, contributions, healthcare utilization, provider performance, claims, and legal risks. Insights were visualized through Power BI, Excel, and Tableau dashboards to support policy evaluation and actionable decision-making.",
    tags: [
       { name: "Tableau", color: "blue-text-gradient" },
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Excel", color: "blue-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/JayMuchoki/SHA_SHIF_Analysis_Reports",
  },
];
