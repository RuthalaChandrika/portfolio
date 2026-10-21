export const projectsData = [
  {
    id: "ecommerce-revenue-leakage",
    title: "E-Commerce Revenue Leakage Analysis",
    subtitle: "Operational Inefficiency & Margin Protection across 128K+ Transactions",
    category: "Business Intelligence & SQL Analytics",
    highlightMetric: "8.80%",
    highlightLabel: "Identified Revenue Leakage Rate",
    summary: "Comprehensive multi-dimensional analysis uncovering revenue leakage and operational bottlenecks across orders, cancellations, fulfillment routes, product portfolios, and regional deliveries.",
    technologies: ["Excel", "Power Query", "MySQL", "Power BI", "DAX"],
    githubUrl: "https://github.com/RuthalaChandrika/ecommerce-revenue-leakage-analysis",
    dashboardImg: "/dash-ecommerce.png",
    dashboardPdf: "/dash-ecommerce.pdf",
    dashboardType: "Power BI 3-Page Executive Dashboard",
    verifiedMetrics: [
      { label: "Transactions Analyzed", value: "128,000+" },
      { label: "Cancellation Rate", value: "14.21%" },
      { label: "Identified Revenue Leakage", value: "8.80%" },
      { label: "Business KPIs Built", value: "9+ Custom DAX KPIs" }
    ],
    sections: {
      businessProblem: "Rapid transaction growth across decentralized logistics and merchant partners led to undetected margin erosion. The business lacked single-pane visibility into operational breakdowns causing post-order cancellations, delayed dispatches, unrecovered shipping charges, and promotional discount stacking.",
      dataPreparation: "Consolidated fragmented transactional logs into a structured relational schema. Utilized Power Query for automated type enforcement, anomaly filtering, timestamp normalization, and currency uniformity. Cleaned and deduplicated 128,000+ purchase rows before warehouse ingestion.",
      sqlAnalysis: "Authored parameterized MySQL queries utilizing Common Table Expressions (CTEs), window functions (ROW_NUMBER, DENSE_RANK), and conditional aggregation to trace cancellation velocity by fulfillment hub, compute refund turnaround lags, and isolate high-return SKU categories.",
      kpiDevelopment: "Engineered 9+ standardized DAX KPI measures within a star-schema Power BI semantic model, including Gross Merchandise Value (GMV), Net Realized Margin, Cancellation Rate %, Leakage Rate %, Average Fulfillment Lag (Days), and Carrier On-Time Dispatch %.",
      dashboardDesign: "Architected an interactive, 3-page executive Power BI dashboard: Page 1 provides Executive Overview & Financial Health; Page 2 dives into Logistics & Fulfillment Funnels; Page 3 isolates Product & Category Margin Drag with cross-filtering slicers for geography and sales channels.",
      keyFindings: [
        "Analyzed 128K+ e-commerce transactions across diverse geographic regions.",
        "Identified an aggregate 14.21% cancellation rate occurring primarily during delayed pre-dispatch stages.",
        "Isolated an 8.80% overall revenue leakage resulting from fulfillment inefficiencies and uncollected return logistics overhead.",
        "Highlighted specific geographic segments and product categories that demonstrated disproportionate delivery failures despite strong gross sales."
      ],
      businessRecommendations: [
        "Fulfillment Protocol: Establish a 24-hour mandatory dispatch SLA with automated merchant alerts to curtail pre-transit buyer cancellations.",
        "Shipping & Carrier SLAs: Re-negotiate carrier contracts in lagging transit routes with dynamic routing based on historical delivery reliability.",
        "Product Portfolio Realignment: Re-evaluate low-margin SKUs with high return incidence and discontinue unviable bundled promotions.",
        "Promotions & Discount Governance: Implement strict threshold checks on discount stacking during peak promotional windows.",
        "Market Capitalization: Allocate focused marketing spend toward top-performing geographic clusters exhibiting high fulfillment success and low dispute ratios."
      ]
    }
  },
  {
    id: "telecom-customer-churn",
    title: "Telecom Customer Churn Prediction",
    subtitle: "Machine Learning Pipeline & Retention Intelligence for 7,043 Subscribers",
    category: "Machine Learning & Predictive Analytics",
    highlightMetric: "26.54%",
    highlightLabel: "Baseline Churn Rate Identified",
    summary: "End-to-end predictive analytics framework utilizing Random Forest classification with SMOTE oversampling to forecast at-risk subscriber churn and empower targeted customer success campaigns.",
    technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Scikit-learn", "Power BI", "Streamlit"],
    githubUrl: "https://github.com/RuthalaChandrika/Customer-Churn-Analytics-project",
    dashboardImg: "/dash-churn.png",
    dashboardPdf: "/dash-churn.pdf",
    dashboardType: "Power BI & Streamlit Analytics App",
    verifiedMetrics: [
      { label: "Subscriber Records", value: "7,043" },
      { label: "Baseline Churn Rate", value: "26.54%" },
      { label: "Balancing Technique", value: "SMOTE Oversampling" },
      { label: "Deployment Stack", value: "Streamlit Web App" }
    ],
    sections: {
      businessProblem: "Customer acquisition costs in telecommunications significantly exceed retention expenses. With an escalating subscriber churn rate, the customer retention team required an early-warning predictive system to identify high-probability churn accounts prior to contract termination.",
      dataPreparation: "Ingested 7,043 customer accounts containing demographic indicators, subscribed services (streaming, tech support, online security), billing methodologies, monthly charges, and tenure. Handled missing total charge entries, converted categorical indicators via one-hot encoding, and standardized numerical attributes using StandardScaler.",
      edaFindings: "Exploratory data analysis revealed that contract duration, billing method (specifically electronic checks), fiber optic internet service, and absence of add-on support services strongly correlated with heightened churn tendencies. Subscribers on short-tenure, month-to-month contracts exhibited peak vulnerability.",
      modelPipeline: "Formulated a modular Scikit-learn predictive pipeline. Implemented Synthetic Minority Over-sampling Technique (SMOTE) to effectively balance the minority churn class. Trained and tuned a Random Forest Classifier with cross-validation to optimize decision boundaries and feature importance rankings.",
      evaluationMetrics: "Rigorously evaluated model discrimination using comprehensive classification metrics: F1-score, Area Under the ROC Curve (ROC-AUC), Precision, Recall, and Confusion Matrix analysis, prioritizing recall to minimize costly false-negative churn predictions.",
      dashboardAndApp: "Created an interactive Power BI dashboard tracking monthly churn trends, tenure cohorts, and revenue-at-risk. Packaged the trained ML pipeline into an intuitive Streamlit web application, enabling retention specialists to simulate individual customer profiles and obtain real-time churn likelihood scores.",
      customerRetentionActions: [
        "Contract Migration Incentives: Introduce proactive discounted upgrades or bonus data for month-to-month subscribers approaching the 6-month tenure threshold to encourage annual commitments.",
        "Automated Payment Transition: Offer one-time bill credits for customers switching from manual electronic checks to automated credit card/ACH debits.",
        "Bundled Technical Support: Package complimentary premium tech support and online security during the initial 90 days for fiber optic subscribers.",
        "Predictive Intervention Queue: Route high-risk accounts identified by the Streamlit application directly to specialized customer loyalty agents with pre-approved retention offers."
      ]
    }
  },
  {
    id: "bank-loan-risk",
    title: "Bank Loan Risk & Portfolio Performance",
    subtitle: "Credit Risk Segmentation & Default Driver Analysis across 255K+ Loans",
    category: "Financial Analytics & Risk Modeling",
    highlightMetric: "21.96%",
    highlightLabel: "Default Rate in Very Low Income Cohort",
    summary: "Institutional portfolio analysis monitoring lending exposure, default behavior, debt-to-income stress, and credit scoring across 255,000+ borrower profiles to optimize risk-adjusted lending.",
    technologies: ["Excel", "MySQL", "Power BI", "DAX"],
    githubUrl: "https://github.com/RuthalaChandrika/Bank-Loan-Risk-Portfolio-Analysis",
    dashboardImg: "/dash-loan.png",
    dashboardPdf: null,
    dashboardType: "Power BI Portfolio Risk Dashboard",
    verifiedMetrics: [
      { label: "Loan Records Analyzed", value: "255,000+" },
      { label: "Highest Risk Segment", value: "Very Low Income" },
      { label: "Peak Cohort Default Rate", value: "21.96%" },
      { label: "Risk KPI Models", value: "Portfolio Exposure DAX" }
    ],
    sections: {
      businessProblem: "Credit risk managers needed granular visibility into underlying default drivers across diverse lending products. Unbalanced exposure toward vulnerable demographic and credit tiers elevated non-performing loan ratios, requiring data-driven underwriting calibration.",
      dataPreparation: "Audited and transformed over 255,000 retail loan records. Built automated data validation rules in MySQL to eliminate anomalies in debt-to-income (DTI) calculations, standardize credit rating bands, categorize loan purpose classifications (debt consolidation, small business, home improvement), and verify repayment histories.",
      kpiDevelopment: "Engineered robust DAX measures to track Total Portfolio Exposure, Non-Performing Loan (NPL) Volume, Default Rate %, Capital at Risk, Average DTI Ratio, and Segment-Specific Loss Rates.",
      dashboardDesign: "Structured a high-impact Power BI executive dashboard incorporating dynamic risk matrix slicers, borrower credit score distributions, term duration comparisons, and visual heatmaps linking DTI vs. Employment Length to default propensities.",
      keyFindings: [
        "Analyzed 255K+ loan records spanning multi-tier credit ratings, loan amounts, and maturity schedules.",
        "Systematically evaluated default drivers across borrower income, employment tenure, credit score, DTI ratio, educational attainment, and loan intent.",
        "Uncovered that the 'Very Low Income' borrower segment exhibited the highest default incidence at 21.96%, strongly exacerbated when paired with elevated DTI ratios.",
        "Identified debt consolidation loans as comprising substantial portfolio volume with sensitivity to macroeconomic interest rate adjustments."
      ],
      businessRecommendations: [
        "Stricter Income & DTI Screening: Impose tighter maximum DTI thresholds for loan applicants categorized in low or volatile income brackets.",
        "Risk-Based Dynamic Pricing: Implement tiered interest rate structures that appropriately price credit risk for marginal-qualification borrower tiers.",
        "Collateral & Co-Signer Requirements: Require partial security, co-signers, or shorter repayment durations for high-risk credit tranches.",
        "Early Delinquency Tracking: Establish automated alerts triggered at the first 15-day missed payment to initiate preventative restructuring before charge-off status."
      ]
    }
  },
  {
    id: "healthcare-insurance-analytics",
    title: "Healthcare Insurance Analytics",
    subtitle: "Statistical Hypothesis Testing with Z-Test & ANOVA on Insurance Charges",
    category: "Statistical Analytics & Hypothesis Testing",
    highlightMetric: "Z-Test & ANOVA",
    highlightLabel: "Statistical Tests Conducted",
    summary: "Applied inferential statistical testing and regression diagnostics to analyze medical claim drivers, statistically validating the impact of smoking, BMI, and age on insurance charges.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Statsmodels"],
    githubUrl: "https://github.com/RuthalaChandrika/Healthcare-Insurance-Analytics-using-Z-Test-and-ANOVA",
    dashboardImg: "/dash-healthcare.png",
    dashboardPdf: null,
    dashboardType: "Statistical EDA & Hypothesis Dashboard",
    verifiedMetrics: [
      { label: "Statistical Framework", value: "Z-Test & One-Way ANOVA" },
      { label: "Key Cost Driver", value: "Smoking Habit (p < 0.05)" },
      { label: "BMI Segmentation", value: "Obese vs Non-Obese" },
      { label: "Significance Level", value: "α = 0.05 Confidence" }
    ],
    sections: {
      businessProblem: "Actuarial and underwriting teams need empirical, statistically defensible validation to price healthcare insurance premiums accurately. Without rigorous hypothesis testing, underwriting risk multipliers risk underpricing high-claim cohorts or unfairly penalizing low-risk demographic segments.",
      dataPreparation: "Ingested healthcare insurance claims across age, sex, BMI, children, smoking status, region, and charges. Verified complete data integrity (zero nulls, handled duplicates). Binned BMI into clinical brackets: Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), and Obese (30+).",
      sqlAnalysis: "Performed parametric and non-parametric statistical testing in Python. Executed two-sample Z-Tests comparing charges between smokers and non-smokers, followed by One-Way ANOVA (f_oneway) to evaluate variance across regional healthcare markets and BMI tiers.",
      kpiDevelopment: "Quantified Mean Cost Differentials, Variance Inflation Factors (VIF), F-Statistics, and P-Values for each risk factor to provide evidence-based tier pricing.",
      dashboardDesign: "Generated statistical distribution charts, box-plot cost comparisons, and multi-factor scatter plots visualizing interaction effects between BMI, smoking habits, and charges.",
      keyFindings: [
        "Smoking status is the single most statistically significant driver of medical charges with extreme statistical significance (p < 0.001).",
        "Obese smokers experience compounded claim charges compared to obese non-smokers, demonstrating strong non-linear interaction effects.",
        "ANOVA testing across geographic regions indicated marginal statistical variance, suggesting lifestyle and health indicators vastly outweigh geography in claim severity.",
        "Underwriting models should treat BMI and smoking as coupled risk multipliers rather than independent additive terms."
      ],
      businessRecommendations: [
        "Actuarial Surcharges: Maintain rigorous smoker premium surcharges backed by statistically validated cost ratios.",
        "Wellness & Preventive Incentives: Offer structured smoking cessation and BMI management programs with premium rebates to reduce aggregate claims.",
        "Tiered Deductibles: Introduce tiered deductible plans based on verified preventive health checkups to incentivize low-risk health maintenance."
      ]
    }
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation Analytics",
    subtitle: "K-Means Clustering & RFM Behavioral Segmentation with Power BI Dashboard",
    category: "Unsupervised ML & Business Intelligence",
    highlightMetric: "K-Means",
    highlightLabel: "Clustering & RFM Architecture",
    summary: "Customer value segmentation utilizing Recency, Frequency, and Monetary (RFM) modeling combined with K-Means clustering to distinguish high-value champions from at-risk accounts.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Power BI", "DAX", "Excel"],
    githubUrl: "https://github.com/RuthalaChandrika/Customer_Segmentation_Dashboard",
    dashboardImg: "/dash-segmentation.png",
    dashboardPdf: "/dash-segmentation.pdf",
    dashboardType: "Power BI Customer Segmentation Dashboard",
    verifiedMetrics: [
      { label: "Segmentation Engine", value: "K-Means Clustering + RFM" },
      { label: "Optimal Clusters", value: "Elbow Method Calibrated" },
      { label: "Business View", value: "Executive Power BI" },
      { label: "Core Dimensions", value: "Recency, Frequency, Monetary" }
    ],
    sections: {
      businessProblem: "Retailers with broad customer bases often treat all customers uniformly, causing inefficient marketing budget allocation and missed retention windows for high-lifetime-value buyers.",
      dataPreparation: "Cleaned and processed 500K+ online retail transactional logs. Removed cancelled invoices, handled credit transactions, and extracted unique customer buying profiles over a 12-month lifecycle.",
      sqlAnalysis: "Engineered RFM scores: Recency (days since last purchase), Frequency (total unique orders), and Monetary (cumulative expenditure). Scaled distributions using StandardScaler and evaluated optimal cluster counts using the Elbow Method and Silhouette Analysis.",
      kpiDevelopment: "Built DAX measures for Segment Revenue Contribution %, Average Order Value (AOV) per Cluster, Recency Velocity, and Cohort Churn Risk.",
      dashboardDesign: "Created a full-featured Power BI dashboard with cluster distribution visualizers, segment-level revenue contribution bar charts, country-level slicers, and customer lookup tables.",
      keyFindings: [
        "Identified top-tier 'Champion' customers who generate over 60% of total revenue despite making up a small fraction of the total customer count.",
        "Isolated an 'At-Risk' segment of previously frequent buyers who had not purchased in 90+ days, representing immediate re-activation potential.",
        "Uncovered distinct seasonal purchasing spikes in specific international retail clusters."
      ],
      businessRecommendations: [
        "VIP Retention Programs: Dedicate exclusive early access and loyalty tiers for Champion segments.",
        "Automated Win-Back Triggers: Set automated promotional emails when a customer enters the At-Risk recency threshold.",
        "Product Cross-Selling: Target Frequent-Low-Monetary customers with bundled product promotions to elevate Average Order Value."
      ]
    }
  },
  {
    id: "customer-360-analytics",
    title: "Customer 360 Analytics",
    subtitle: "Bank Branch Performance, Investment Behavior & Customer Value Dashboard",
    category: "Business Intelligence & Customer Analytics",
    highlightMetric: "360° View",
    highlightLabel: "Integrated Multi-Source Model",
    summary: "Holistic banking intelligence platform synthesizing branch operations, customer demographic profiles, and multi-product investment transactions into executive Power BI dashboards.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "DAX"],
    githubUrl: "https://github.com/RuthalaChandrika/Customer-360-Analytics",
    dashboardImg: "/dash-customer360.png",
    dashboardPdf: "/dash-customer360.pdf",
    dashboardType: "Power BI Customer 360 Dashboard",
    verifiedMetrics: [
      { label: "Data Pipeline", value: "3 Relational Banking Datasets" },
      { label: "Analysis Scope", value: "Branch, Customer & Investments" },
      { label: "Intelligence Type", value: "360° Performance Analytics" },
      { label: "Dashboard Stack", value: "Power BI Multi-Page Model" }
    ],
    sections: {
      businessProblem: "Bank leadership lacked unified visibility connecting customer demographics, investment product adoption, and physical branch profitability, leading to fragmented marketing campaigns and unoptimized branch resource allocations.",
      dataPreparation: "Consolidated three core schemas: Branch financial records (Branch ID, City, Region, Firm Revenue, Expenses, Profit Margin), Customer profiles (Customer ID, Age, Customer Type, Bank Name), and Transaction records (Account Type, Balance, Investment Amount, Investment Type).",
      sqlAnalysis: "Mapped cross-entity relationships, audited missing customer data, normalized financial figures, and evaluated investment product uptake across demographic brackets using Python and Pandas.",
      kpiDevelopment: "Formulated enterprise DAX KPIs: Total Invested Assets, Net Profit Margin per Branch, Investment Penetration Rate, Average Balance by Customer Segment, and Cost-to-Income Ratio.",
      dashboardDesign: "Architected a comprehensive Power BI dashboard featuring interactive regional heatmaps, investment product breakdown donuts, branch performance scorecards, and customer lifetime value rankings.",
      keyFindings: [
        "Urban branches demonstrated higher overall deposit volumes, while suburban branches drove significantly higher penetration in long-term mutual fund products.",
        "Identified senior and professional customer segments as the primary drivers of high-margin wealth management products.",
        "Pinpointed specific branches operating with negative profit margins due to outsized operational expenses relative to deposit generation."
      ],
      businessRecommendations: [
        "Targeted Wealth Advisory: Deploy dedicated investment advisory specialists to top-performing suburban branches exhibiting high mutual fund interest.",
        "Cost Rationalization: Re-structure branch operations and administrative overhead in branches operating with low profit margins.",
        "Digital Product Upselling: Introduce mobile-first investment micro-products targeted at younger demographic cohorts to build long-term retention."
      ]
    }
  }
];
