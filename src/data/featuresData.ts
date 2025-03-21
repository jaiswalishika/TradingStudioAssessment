
export const featuresData = [
    { title: "Advanced Analytics", description: "Real-time market analysis and predictive modeling.", icon: "📊" },
    { title: "Educational Resources", description: "Comprehensive trading guides and tutorials.", icon: "📖" },
    { title: "Community Support", description: "Connect with experienced traders.", icon: "🤝" }
];

export const slides = [
    { title: "Screening Rules", description: "Apply various screening filters to refine your trading strategies." },
    { title: "Portfolio Management", description: "Manage and optimize your investment portfolio effectively." },
    { title: "Buy Criteria", description: "N-DAY Moving Avg. > Last Open\nTop X, N-DAY Top Gainers\nLast-Close > N-DAY High" },
    { title: "Sell Criteria", description: "Target Profit: X%\nStop Loss: Y%" }
  ];

export const marketSlides = [
    ["NYSE", "NASDAQ", "MSE", "JPX"],
    ["HKSE", "EURONEXT", "SIX", "TSX"],
    ["LSE", "BSE", "CSE", "ASX"]
  ];

export const features = [
    "Screening Rules",
    "Portfolio Management",
    "Buy Trigger Rules",
    "Sell Trigger Rules",
    "Simulate",
    "Subscribe For Future Triggers"
  ];


export const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: ["Basic analytics", "Up to 5 projects", "Community support"],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$29",
      description: "For growing businesses",
      features: ["Advanced analytics", "Up to 20 projects", "Priority support", "Custom domains"],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "$99",
      description: "For larger teams",
      features: ["Enterprise analytics", "Unlimited projects", "24/7 phone support", "Custom integrations", "SLA guarantee"],
      buttonText: "Contact Sales",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations",
      features: ["Custom solutions", "Dedicated support team", "Custom contracts", "On-premise options", "Advanced security"],
      buttonText: "Talk to Sales",
    },
  ];
  