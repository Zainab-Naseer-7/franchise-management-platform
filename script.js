/**
 * ==========================================================================
 * FRANCHISEFLOW ENTERPRISE - JAVASCRIPT APPLICATION CORE
 * Features: Complete State Management, LocalStorage Persistence,
 * Offline-friendly SVG Charts, Interactive Modals, Live Search,
 * Role Switching, CSV Exports, Print Engine, and Kanban Directives.
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Initial Enterprise Baseline Seed Data
// --------------------------------------------------------------------------
const INITIAL_DATA = {
  settings: {
    companyName: "FranchiseFlow Global Brands Inc.",
    defaultRoyalty: 6.0,
    adFundRate: 2.0,
    royaltyCycle: "Weekly ACH",
    currency: "USD",
    lowStockThreshold: 20,
    activeRole: "Super Admin",
    theme: "dark"
  },
  franchises: [
    {
      id: "FR-TX01",
      name: "FranchiseFlow Austin Flagship",
      city: "Austin, TX",
      address: "1140 Congress Ave, Suite 200, Austin, TX 78701",
      manager: "Marcus Vance",
      phone: "(512) 555-0192",
      email: "m.vance@franchiseflow.io",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      revenue: 148200,
      employees: 16,
      score: 98.5,
      status: "Active",
      openedDate: "2024-03-15"
    },
    {
      id: "FR-WA04",
      name: "FranchiseFlow Seattle Hub",
      city: "Seattle, WA",
      address: "400 Pine Street, 4th Floor, Seattle, WA 98101",
      manager: "Elena Rostova",
      phone: "(206) 555-0144",
      email: "e.rostova@franchiseflow.io",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
      revenue: 124550,
      employees: 14,
      score: 97.2,
      status: "Active",
      openedDate: "2024-06-20"
    },
    {
      id: "FR-FL08",
      name: "FranchiseFlow Miami Downtown",
      city: "Miami, FL",
      address: "900 Biscayne Blvd, Suite 12B, Miami, FL 33132",
      manager: "Carlos Mendez",
      phone: "(305) 555-0188",
      email: "c.mendez@franchiseflow.io",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      revenue: 112900,
      employees: 12,
      score: 95.8,
      status: "Active",
      openedDate: "2024-09-10"
    },
    {
      id: "FR-IL03",
      name: "FranchiseFlow Chicago Central",
      city: "Chicago, IL",
      address: "233 S Wacker Dr, Floor 18, Chicago, IL 60606",
      manager: "Derrick Vance",
      phone: "(312) 555-0155",
      email: "d.vance@franchiseflow.io",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      revenue: 118400,
      employees: 13,
      score: 96.0,
      status: "Active",
      openedDate: "2024-11-01"
    },
    {
      id: "FR-NY02",
      name: "FranchiseFlow New York Metro",
      city: "New York, NY",
      address: "575 5th Ave, 14th Floor, New York, NY 10017",
      manager: "Samantha Wu",
      phone: "(212) 555-0122",
      email: "s.wu@franchiseflow.io",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
      revenue: 116200,
      employees: 11,
      score: 94.2,
      status: "Under Review",
      openedDate: "2025-01-15"
    },
    {
      id: "FR-CO02",
      name: "FranchiseFlow Denver West",
      city: "Denver, CO",
      address: "1600 California St, Suite 500, Denver, CO 80202",
      manager: "Liam Gallagher",
      phone: "(303) 555-0166",
      email: "l.gallagher@franchiseflow.io",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
      revenue: 98400,
      employees: 8,
      score: 96.8,
      status: "Active",
      openedDate: "2025-04-10"
    }
  ],
  employees: [
    { id: "EMP-01", name: "Marcus Vance", email: "m.vance@franchiseflow.io", phone: "(512) 555-0192", location: "FranchiseFlow Austin Flagship", role: "General Manager", salary: 78000, score: 4.9, status: "Active", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-02", name: "Elena Rostova", email: "e.rostova@franchiseflow.io", phone: "(206) 555-0144", location: "FranchiseFlow Seattle Hub", role: "General Manager", salary: 82000, score: 4.8, status: "Active", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-03", name: "Carlos Mendez", email: "c.mendez@franchiseflow.io", phone: "(305) 555-0188", location: "FranchiseFlow Miami Downtown", role: "General Manager", salary: 74000, score: 4.7, status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-04", name: "Derrick Vance", email: "d.vance@franchiseflow.io", phone: "(312) 555-0155", location: "FranchiseFlow Chicago Central", role: "General Manager", salary: 76000, score: 4.8, status: "Active", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-05", name: "Samantha Wu", email: "s.wu@franchiseflow.io", phone: "(212) 555-0122", location: "FranchiseFlow New York Metro", role: "General Manager", salary: 85000, score: 4.6, status: "Active", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-06", name: "Liam Gallagher", email: "l.gallagher@franchiseflow.io", phone: "(303) 555-0166", location: "FranchiseFlow Denver West", role: "General Manager", salary: 70000, score: 4.8, status: "Active", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-07", name: "Tasha Sterling", email: "t.sterling@franchiseflow.io", phone: "(512) 555-0811", location: "FranchiseFlow Austin Flagship", role: "Shift Supervisor", salary: 48000, score: 4.7, status: "Active", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-08", name: "Julian Thorne", email: "j.thorne@franchiseflow.io", phone: "(206) 555-0922", location: "FranchiseFlow Seattle Hub", role: "Kitchen / Culinary Lead", salary: 52000, score: 4.9, status: "Active", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-09", name: "Maya Patel", email: "m.patel@franchiseflow.io", phone: "(312) 555-0377", location: "FranchiseFlow Chicago Central", role: "Front Team / Cashier", salary: 36000, score: 4.6, status: "Active", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
    { id: "EMP-10", name: "Devon Reed", email: "d.reed@franchiseflow.io", phone: "(305) 555-0488", location: "FranchiseFlow Miami Downtown", role: "Operations Specialist", salary: 56000, score: 4.8, status: "Active", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80" }
  ],
  inventory: [
    { id: "PRD-01", name: "Signature Espresso Blend (5lb Case)", sku: "SKU-ESP-01", category: "Beverage Supply", location: "Central Commissary", price: 48.50, stock: 180, minStock: 25 },
    { id: "PRD-02", name: "Organic Oat Milk Barista Edition (12pk)", sku: "SKU-MLK-04", category: "Food Ingredients", location: "Central Commissary", price: 34.00, stock: 18, minStock: 25 },
    { id: "PRD-03", name: "Compostable Cups 16oz (Case of 1,000)", sku: "SKU-CUP-16", category: "Packaging & Cups", location: "FranchiseFlow Austin Flagship", price: 62.00, stock: 12, minStock: 20 },
    { id: "PRD-04", name: "Compostable Lids 16oz (Case of 1,000)", sku: "SKU-LID-16", category: "Packaging & Cups", location: "Central Commissary", price: 29.50, stock: 95, minStock: 20 },
    { id: "PRD-05", name: "Artisan Match Green Tea Powder (1kg)", sku: "SKU-TEA-02", category: "Beverage Supply", location: "FranchiseFlow Seattle Hub", price: 54.00, stock: 45, minStock: 15 },
    { id: "PRD-06", name: "Cold Brew Filter Bags (50pk)", sku: "SKU-FLT-08", category: "Packaging & Cups", location: "FranchiseFlow Miami Downtown", price: 22.00, stock: 8, minStock: 15 },
    { id: "PRD-07", name: "Branded Retail Ceramic Mugs (24pk)", sku: "SKU-MUG-01", category: "Merchandise", location: "Central Commissary", price: 84.00, stock: 110, minStock: 20 },
    { id: "PRD-08", name: "Food Grade Sanitizer Tablets (100pk)", sku: "SKU-SAN-01", category: "Cleaning & Sanitation", location: "Central Commissary", price: 18.00, stock: 65, minStock: 15 },
    { id: "PRD-09", name: "Madagascar Bourbon Vanilla Syrup (6pk)", sku: "SKU-SYR-03", category: "Food Ingredients", location: "FranchiseFlow Chicago Central", price: 42.00, stock: 52, minStock: 20 },
    { id: "PRD-10", name: "Dark Chocolate Artisan Sauce (4x64oz)", sku: "SKU-SAU-02", category: "Food Ingredients", location: "FranchiseFlow Denver West", price: 49.00, stock: 38, minStock: 15 },
    { id: "PRD-11", name: "Heavy Duty Espresso Machine Cleaner (1kg)", sku: "SKU-CLN-05", category: "Cleaning & Sanitation", location: "Central Commissary", price: 24.50, stock: 78, minStock: 20 },
    { id: "PRD-12", name: "Staff Aprons with Embroidered Logo (10pk)", sku: "SKU-APR-01", category: "Merchandise", location: "Central Commissary", price: 95.00, stock: 50, minStock: 10 },
    { id: "PRD-13", name: "Chai Tea Concentrate Case (6x32oz)", sku: "SKU-CHA-01", category: "Beverage Supply", location: "FranchiseFlow New York Metro", price: 38.00, stock: 42, minStock: 15 },
    { id: "PRD-14", name: "Biodegradable Straws (Case of 2,000)", sku: "SKU-STR-01", category: "Packaging & Cups", location: "Central Commissary", price: 26.00, stock: 130, minStock: 25 },
    { id: "PRD-15", name: "French Caramel Drizzle Sauce (4pk)", sku: "SKU-CAR-01", category: "Food Ingredients", location: "Central Commissary", price: 44.00, stock: 60, minStock: 15 },
    { id: "PRD-16", name: "Pastry Display Showcase Glass Wipes", sku: "SKU-WIP-02", category: "Cleaning & Sanitation", location: "Central Commissary", price: 16.00, stock: 90, minStock: 20 }
  ],
  tasks: [
    { id: "TSK-101", title: "Submit Q3 Municipal Fire & Safety Certificate", desc: "Upload approved city inspection report and renewed extinguisher certification tags.", location: "FranchiseFlow Austin Flagship", assignee: "Marcus Vance", priority: "Urgent", status: "In Progress", deadline: "2026-09-18" },
    { id: "TSK-102", title: "Conduct Bi-Weekly Food Safety & Temp Audit", desc: "Log refrigerator baseline temps and sanitize ice line according to brand SOP v4.2.", location: "FranchiseFlow Seattle Hub", assignee: "Elena Rostova", priority: "High", status: "To Do", deadline: "2026-09-20" },
    { id: "TSK-103", title: "Quarterly Grease Trap & Plumbing Maintenance", desc: "Contracted technician clearance verification form required for territorial health compliance.", location: "FranchiseFlow Miami Downtown", assignee: "Carlos Mendez", priority: "Medium", status: "Review", deadline: "2026-09-22" },
    { id: "TSK-104", title: "Deploy Autumn Seasonal Beverage Menu POS Buttons", desc: "Configure promotional pricing keys across registers and train front staff.", location: "FranchiseFlow Chicago Central", assignee: "Derrick Vance", priority: "High", status: "Completed", deadline: "2026-09-12" },
    { id: "TSK-105", title: "Resolve Health Inspector Minor Note on Hand Sink", desc: "Mount new touchless soap dispenser in staff rear corridor.", location: "FranchiseFlow New York Metro", assignee: "Samantha Wu", priority: "Urgent", status: "In Progress", deadline: "2026-09-16" },
    { id: "TSK-106", title: "Staff Shift Compliance & Overtime Review", desc: "Audit timecards and confirm certified first-aid officer presence on all weekend schedules.", location: "FranchiseFlow Denver West", assignee: "Liam Gallagher", priority: "Medium", status: "To Do", deadline: "2026-09-25" },
    { id: "TSK-107", title: "Territorial Lease Escalation Document Verification", desc: "Provide signed 3-year extension rider to corporate legal counsel.", location: "FranchiseFlow Austin Flagship", assignee: "Marcus Vance", priority: "Low", status: "Review", deadline: "2026-09-30" },
    { id: "TSK-108", title: "Water Filtration Cartridge Scheduled Replacement", desc: "Replace dual reverse osmosis membranes and record TDS water purity PPM.", location: "FranchiseFlow Seattle Hub", assignee: "Julian Thorne", priority: "Medium", status: "Completed", deadline: "2026-09-08" }
  ],
  transactions: [
    { id: "TX-9841", location: "FranchiseFlow Austin Flagship", customer: "POS Register Daily Batch #881", category: "POS Register Sales", amount: 5240.00, royalty: 314.40, status: "Completed", time: "Today, 14:32" },
    { id: "TX-9840", location: "FranchiseFlow Seattle Hub", customer: "POS Register Daily Batch #642", category: "POS Register Sales", amount: 4890.00, royalty: 293.40, status: "Completed", time: "Today, 13:45" },
    { id: "TX-9839", location: "FranchiseFlow Miami Downtown", customer: "Corporate Catering Invoice #412", category: "POS Register Sales", amount: 1650.00, royalty: 99.00, status: "Completed", time: "Today, 11:20" },
    { id: "TX-9838", location: "FranchiseFlow Chicago Central", customer: "Commissary Supply Order #509", category: "Commissary Supply Order", amount: 3200.00, royalty: 0.00, status: "Completed", time: "Yesterday, 18:15" },
    { id: "TX-9837", location: "FranchiseFlow New York Metro", customer: "Weekly Point-of-Sale Settle #109", category: "POS Register Sales", amount: 4120.00, royalty: 247.20, status: "Completed", time: "Yesterday, 17:02" },
    { id: "TX-9836", location: "FranchiseFlow Denver West", customer: "National Ad Fund Fee Settlement", category: "National Ad Fund Fee", amount: 820.00, royalty: 0.00, status: "Completed", time: "Yesterday, 12:40" },
    { id: "TX-9835", location: "FranchiseFlow Austin Flagship", customer: "Royalty Direct ACH Settlement #209", category: "Royalty Payment", amount: 8892.00, royalty: 8892.00, status: "Completed", time: "Sep 09, 09:30" }
  ],
  royalties: [
    { franchiseId: "FR-TX01", franchiseName: "FranchiseFlow Austin Flagship", location: "Austin, TX", revenue: 148200, royaltyPct: 6.0, royaltyAmount: 8892, adFundAmount: 2964, dueDate: "2026-09-25", status: "Paid" },
    { franchiseId: "FR-WA04", franchiseName: "FranchiseFlow Seattle Hub", location: "Seattle, WA", revenue: 124550, royaltyPct: 6.0, royaltyAmount: 7473, adFundAmount: 2491, dueDate: "2026-09-25", status: "Paid" },
    { franchiseId: "FR-FL08", franchiseName: "FranchiseFlow Miami Downtown", location: "Miami, FL", revenue: 112900, royaltyPct: 6.0, royaltyAmount: 6774, adFundAmount: 2258, dueDate: "2026-09-25", status: "Pending" },
    { franchiseId: "FR-IL03", franchiseName: "FranchiseFlow Chicago Central", location: "Chicago, IL", revenue: 118400, royaltyPct: 6.0, royaltyAmount: 7104, adFundAmount: 2368, dueDate: "2026-09-25", status: "Paid" },
    { franchiseId: "FR-NY02", franchiseName: "FranchiseFlow New York Metro", location: "New York, NY", revenue: 116200, royaltyPct: 6.0, royaltyAmount: 6972, adFundAmount: 2324, dueDate: "2026-09-20", status: "Pending" },
    { franchiseId: "FR-CO02", franchiseName: "FranchiseFlow Denver West", location: "Denver, CO", revenue: 98400, royaltyPct: 6.0, royaltyAmount: 5904, adFundAmount: 1968, dueDate: "2026-09-25", status: "Paid" }
  ],
  documents: [
    { id: "DOC-01", title: "2026 Franchise Disclosure Document (FDD)", category: "Franchise Agreements", location: "All Locations", size: "4.8 MB", date: "2026-01-10", version: "v4.2" },
    { id: "DOC-02", title: "Master Territory Development Contract", category: "Legal & Compliance", location: "FranchiseFlow Austin Flagship", size: "2.1 MB", date: "2024-03-12", version: "v2.0" },
    { id: "DOC-03", title: "Standard Operating Procedures (SOP) Manual", category: "Operational Manuals", location: "All Locations", size: "12.4 MB", date: "2026-05-01", version: "v5.1" },
    { id: "DOC-04", title: "Food Safety, HACCP & Sanitation Protocol", category: "Training & Safety", location: "All Locations", size: "3.5 MB", date: "2026-06-15", version: "v3.8" },
    { id: "DOC-05", title: "Q2 2026 Independent CPA Network Audit", category: "Financial Audits", location: "All Locations", size: "1.9 MB", date: "2026-07-20", version: "v1.0" },
    { id: "DOC-06", title: "Autumn 2026 Regional Brand Marketing Kit", category: "Marketing Assets", location: "All Locations", size: "18.2 MB", date: "2026-08-30", version: "v1.2" }
  ],
  campaigns: [
    { id: "CMP-01", name: "Autumn Artisan Roast Regional Blitz", territory: "Network-Wide", budget: 15000, spent: 11400, reach: "480,000 Impressions", conversions: "14.2%", status: "Active" },
    { id: "CMP-02", name: "Cold Brew Loyalty App Double-Points", territory: "FranchiseFlow Austin Flagship", budget: 6000, spent: 4800, reach: "125,000 App Users", conversions: "19.8%", status: "Active" },
    { id: "CMP-03", name: "Metro Commuter Mobile Geofence Promo", territory: "FranchiseFlow New York Metro", budget: 10000, spent: 9200, reach: "350,000 Impressions", conversions: "11.4%", status: "Active" },
    { id: "CMP-04", name: "Grand Opening Community Welcome Kit", territory: "FranchiseFlow Denver West", budget: 7200, spent: 7200, reach: "95,000 Mailers", conversions: "22.5%", status: "Completed" }
  ],
  messages: {
    activeChannel: "FR-TX01",
    channels: [
      { id: "FR-TX01", name: "# Austin Flagship - Operations", manager: "Marcus Vance", unread: 0, lastMsg: "Territory audit packet has been reviewed and filed." },
      { id: "FR-WA04", name: "# Seattle Hub - Management", manager: "Elena Rostova", unread: 1, lastMsg: "Commissary shipment for oat milk received safely." },
      { id: "FR-FL08", name: "# Miami Downtown - Support", manager: "Carlos Mendez", unread: 0, lastMsg: "ACH direct verification confirmed for this Friday." },
      { id: "FR-NY02", name: "# New York Metro - Quality", manager: "Samantha Wu", unread: 1, lastMsg: "Hand sink dispenser installed, awaiting final reinspection." }
    ],
    threads: {
      "FR-TX01": [
        { sender: "Marcus Vance", type: "inbound", text: "Morning HQ. The weekend volume exceeded our projection by 14%. Espresso beans supply is holding strong.", time: "09:14 AM" },
        { sender: "Alexandria Hayes", type: "outbound", text: "Outstanding performance Marcus. Your territory is currently #1 network-wide in customer ticket average.", time: "09:30 AM" },
        { sender: "Marcus Vance", type: "inbound", text: "Territory audit packet has been reviewed and filed. All licenses are current.", time: "11:05 AM" }
      ],
      "FR-WA04": [
        { sender: "Elena Rostova", type: "inbound", text: "Hello HQ. Commissary shipment for oat milk received safely. Inventory logged into system.", time: "Yesterday" }
      ],
      "FR-FL08": [
        { sender: "Carlos Mendez", type: "inbound", text: "ACH direct verification confirmed for this Friday.", time: "Sep 09" }
      ],
      "FR-NY02": [
        { sender: "Samantha Wu", type: "inbound", text: "Hand sink dispenser installed, awaiting final reinspection from city.", time: "Yesterday" }
      ]
    }
  },
  notifications: [
    { id: "NT-01", title: "Low Stock Alert: Organic Oat Milk", text: "Commissary inventory has dropped to 18 units (Safety threshold: 25).", time: "12m ago", unread: true },
    { id: "NT-02", title: "Royalty Payment Due Notice", text: "Miami Downtown & New York Metro ACH settlements scheduled for this cycle.", time: "1h ago", unread: true },
    { id: "NT-03", title: "Municipal Audit Passed", text: "Denver West achieved 96.8% score on regional health inspection.", time: "3h ago", unread: true },
    { id: "NT-04", title: "New Employee Onboarded", text: "Julian Thorne registered as Kitchen / Culinary Lead in Seattle Hub.", time: "1d ago", unread: false }
  ]
};

// --------------------------------------------------------------------------
// 2. Global State & LocalStorage Manager
// --------------------------------------------------------------------------
let appState = {};

function initAppState() {
  const saved = localStorage.getItem("franchiseflow_state");
  if (saved) {
    try {
      appState = JSON.parse(saved);
      // Ensure any missing root collections exist
      Object.keys(INITIAL_DATA).forEach(key => {
        if (!appState[key]) appState[key] = INITIAL_DATA[key];
      });
    } catch (e) {
      console.error("Failed to parse saved state, seeding defaults", e);
      appState = JSON.parse(JSON.stringify(INITIAL_DATA));
      saveAppState();
    }
  } else {
    appState = JSON.parse(JSON.stringify(INITIAL_DATA));
    saveAppState();
  }
}

function saveAppState() {
  localStorage.setItem("franchiseflow_state", JSON.stringify(appState));
}

function resetDemoData() {
  openConfirmModal(
    "Reset All Platform Data?",
    "This will reset all franchises, inventory stock, staff, tasks, and financials back to initial enterprise default seed data.",
    () => {
      appState = JSON.parse(JSON.stringify(INITIAL_DATA));
      saveAppState();
      renderAllViews();
      showToast("Platform data restored to default enterprise state.", "success");
    }
  );
}

// --------------------------------------------------------------------------
// 3. Main View Routing (Landing vs Platform & View Navigation)
// --------------------------------------------------------------------------
let currentMainView = "landing";
let currentAppView = "overview";

function switchMainView(target) {
  currentMainView = target;
  const landing = document.getElementById("landing-page");
  const platform = document.getElementById("dashboard-platform");

  if (target === "landing") {
    landing.classList.add("active-view-section");
    platform.classList.remove("active-view-section");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    landing.classList.remove("active-view-section");
    platform.classList.add("active-view-section");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function launchPlatform(subView = "overview") {
  switchMainView("platform");
  navigateToView(subView);
}

function navigateToView(viewId) {
  currentAppView = viewId;
  const views = document.querySelectorAll(".app-view");
  views.forEach(v => v.classList.remove("active"));

  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.add("active");
  }

  // Update sidebar active state
  const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
  navItems.forEach(item => {
    if (item.getAttribute("data-view") === viewId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // If mobile sidebar was open, close it
  const sidebar = document.getElementById("app-sidebar");
  if (sidebar && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }

  // Render content specific to the selected view
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCurrentView() {
  switch (currentAppView) {
    case "overview":
      renderOverviewView();
      break;
    case "locations":
      filterLocations();
      break;
    case "performance":
      renderPerformanceView();
      break;
    case "sales":
      populateSalesLocationsFilter();
      filterSales();
      break;
    case "finance":
      renderFinanceView();
      break;
    case "employees":
      populateEmployeeLocationsFilter();
      filterEmployees();
      break;
    case "inventory":
      filterInventory();
      break;
    case "tasks":
      filterTasks();
      break;
    case "documents":
      filterDocuments();
      break;
    case "marketing":
      renderMarketingView();
      break;
    case "messages":
      renderMessagingView();
      break;
    case "reports":
      populateReportsLocationFilter();
      generateDynamicReport();
      break;
    case "settings":
      loadSettingsToInputs();
      break;
  }
}

function renderAllViews() {
  updateHeaderAndSidebarBadges();
  renderCurrentView();
}

// --------------------------------------------------------------------------
// 4. Live Session Clock & Theme Toggle
// --------------------------------------------------------------------------
function initLiveClock() {
  const clockEl = document.getElementById("live-time-display");
  function updateTime() {
    if (!clockEl) return;
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) + " UTC-5";
  }
  updateTime();
  setInterval(updateTime, 1000);
}

function initTheme() {
  const theme = appState.settings.theme || "dark";
  document.documentElement.setAttribute("data-theme", theme);

  const landingToggle = document.getElementById("landing-theme-toggle");
  const dashToggle = document.getElementById("dash-theme-toggle");

  if (landingToggle) landingToggle.addEventListener("click", toggleTheme);
  if (dashToggle) dashToggle.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  appState.settings.theme = next;
  saveAppState();
  showToast(`Theme switched to ${next.toUpperCase()} mode`, "info");
}

// --------------------------------------------------------------------------
// 5. Toast Notification System
// --------------------------------------------------------------------------
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "danger") {
    iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#f43f5e" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  } else if (type === "warning") {
    iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#f59e0b" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
  } else {
    iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#00e5ff" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// --------------------------------------------------------------------------
// 6. Header Actions & Dropdowns
// --------------------------------------------------------------------------
function toggleQuickAddMenu() {
  const menu = document.getElementById("quick-add-menu");
  if (menu) menu.classList.toggle("hidden");
}

function toggleNotificationsPanel() {
  const panel = document.getElementById("notif-panel");
  if (!panel) return;
  panel.classList.toggle("hidden");
  if (!panel.classList.contains("hidden")) {
    renderNotificationsList();
  }
}

function toggleProfileDropdown() {
  const panel = document.getElementById("profile-dropdown");
  if (panel) panel.classList.toggle("hidden");
}

function markAllNotificationsRead() {
  appState.notifications.forEach(n => n.unread = false);
  saveAppState();
  renderNotificationsList();
  updateHeaderAndSidebarBadges();
  showToast("All system notifications marked as read", "success");
}

function clearAllNotifications() {
  appState.notifications = [];
  saveAppState();
  renderNotificationsList();
  updateHeaderAndSidebarBadges();
  showToast("Notifications cleared", "info");
}

function renderNotificationsList() {
  const container = document.getElementById("notif-list-container");
  if (!container) return;

  if (appState.notifications.length === 0) {
    container.innerHTML = `<div class="p-3 text-center text-muted text-xs">No active notifications</div>`;
    return;
  }

  container.innerHTML = appState.notifications.map(n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="markSingleNotifRead('${n.id}')">
      <div class="notif-title-row">
        <span>${n.title}</span>
        <span class="notif-time">${n.time}</span>
      </div>
      <p class="text-xs text-muted">${n.text}</p>
    </div>
  `).join('');
}

function markSingleNotifRead(id) {
  const item = appState.notifications.find(n => n.id === id);
  if (item) item.unread = false;
  saveAppState();
  renderNotificationsList();
  updateHeaderAndSidebarBadges();
}

function changeUserRole(role) {
  appState.settings.activeRole = role;
  saveAppState();
  const roleBadge = document.getElementById("current-user-role");
  if (roleBadge) roleBadge.textContent = role;
  showToast(`Security Context switched to: ${role}`, "info");
}

function logoutUser() {
  showToast("Session terminated securely. Returning to portal.", "info");
  setTimeout(() => {
    switchMainView("landing");
  }, 600);
}

// --------------------------------------------------------------------------
// 7. Global Search Engine (Shortcut: '/')
// --------------------------------------------------------------------------
function initGlobalSearch() {
  const searchInput = document.getElementById("global-search-input");
  const dropdown = document.getElementById("search-results-dropdown");

  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput && !e.target.matches("input, textarea, select")) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      dropdown.classList.add("hidden");
      dropdown.innerHTML = "";
      return;
    }

    const matchedFranchises = appState.franchises.filter(f => f.name.toLowerCase().includes(q) || f.city.toLowerCase().includes(q));
    const matchedEmployees = appState.employees.filter(emp => emp.name.toLowerCase().includes(q) || emp.role.toLowerCase().includes(q));
    const matchedProducts = appState.inventory.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
    const matchedTasks = appState.tasks.filter(t => t.title.toLowerCase().includes(q));
    const matchedDocs = appState.documents.filter(d => d.title.toLowerCase().includes(q));

    let html = "";

    if (matchedFranchises.length > 0) {
      html += `<div class="search-category-group"><div class="search-category-title">Franchise Hubs</div>`;
      matchedFranchises.forEach(f => {
        html += `<div class="search-result-item" onclick="openFranchiseProfile('${f.id}')"><span>🏢 ${f.name}</span><span class="text-xs text-muted">${f.city}</span></div>`;
      });
      html += `</div>`;
    }

    if (matchedEmployees.length > 0) {
      html += `<div class="search-category-group"><div class="search-category-title">Staff Members</div>`;
      matchedEmployees.forEach(emp => {
        html += `<div class="search-result-item" onclick="navigateToView('employees')"><span>👤 ${emp.name}</span><span class="text-xs text-muted">${emp.role}</span></div>`;
      });
      html += `</div>`;
    }

    if (matchedProducts.length > 0) {
      html += `<div class="search-category-group"><div class="search-category-title">Inventory SKUs</div>`;
      matchedProducts.forEach(p => {
        html += `<div class="search-result-item" onclick="navigateToView('inventory')"><span>📦 ${p.name}</span><span class="text-xs text-muted">${p.sku}</span></div>`;
      });
      html += `</div>`;
    }

    if (matchedTasks.length > 0) {
      html += `<div class="search-category-group"><div class="search-category-title">Tasks & Directives</div>`;
      matchedTasks.forEach(t => {
        html += `<div class="search-result-item" onclick="navigateToView('tasks')"><span>✅ ${t.title}</span><span class="text-xs text-muted">${t.priority}</span></div>`;
      });
      html += `</div>`;
    }

    if (!html) {
      html = `<div class="p-3 text-center text-muted text-xs">No matching enterprise entities found for "${q}"</div>`;
    }

    dropdown.innerHTML = html;
    dropdown.classList.remove("hidden");
  });

  // Close search dropdown on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".global-search-wrap")) {
      dropdown.classList.add("hidden");
    }
  });
}

// --------------------------------------------------------------------------
// 8. Badge & Indicator Counters
// --------------------------------------------------------------------------
function updateHeaderAndSidebarBadges() {
  const unreadNotifs = appState.notifications.filter(n => n.unread).length;
  const notifBadge = document.getElementById("notif-badge-count");
  if (notifBadge) {
    notifBadge.textContent = unreadNotifs;
    notifBadge.style.display = unreadNotifs > 0 ? "inline-block" : "none";
  }

  // Sidebar counts
  const locCount = document.getElementById("sidebar-locations-count");
  if (locCount) locCount.textContent = appState.franchises.length;

  const empCount = document.getElementById("sidebar-employees-count");
  if (empCount) empCount.textContent = appState.employees.length;

  const lowStockItems = appState.inventory.filter(p => p.stock < p.minStock).length;
  const lowStockBadge = document.getElementById("sidebar-lowstock-count");
  if (lowStockBadge) lowStockBadge.textContent = `${lowStockItems} Low`;

  const pendingRoyalties = appState.royalties.filter(r => r.status === "Pending").length;
  const royBadge = document.getElementById("sidebar-royalty-pending");
  if (royBadge) royBadge.textContent = `${pendingRoyalties} Due`;

  const pendingTasks = appState.tasks.filter(t => t.status !== "Completed").length;
  const taskBadge = document.getElementById("sidebar-tasks-count");
  if (taskBadge) taskBadge.textContent = pendingTasks;
}

// --------------------------------------------------------------------------
// 9. Interactive Landing Page Royalty Calculator
// --------------------------------------------------------------------------
function initRoyaltyCalculator() {
  const unitsSlider = document.getElementById("calc-units");
  const revSlider = document.getElementById("calc-rev");
  const roySlider = document.getElementById("calc-royalty");
  const adSlider = document.getElementById("calc-adfund");

  if (!unitsSlider) return;

  function calculate() {
    const units = parseInt(unitsSlider.value);
    const avgRev = parseInt(revSlider.value);
    const royPct = parseFloat(roySlider.value);
    const adPct = parseFloat(adSlider.value);

    // Display badges
    document.getElementById("calc-units-val").textContent = `${units} Units`;
    document.getElementById("calc-rev-val").textContent = `$${avgRev.toLocaleString()}`;
    document.getElementById("calc-royalty-val").textContent = `${royPct.toFixed(1)}%`;
    document.getElementById("calc-adfund-val").textContent = `${adPct.toFixed(1)}%`;

    const monthlyGross = units * avgRev;
    const monthlyRoyalties = monthlyGross * (royPct / 100);
    const monthlyAdFund = monthlyGross * (adPct / 100);
    const annualCashflow = (monthlyRoyalties + monthlyAdFund) * 12;

    document.getElementById("res-gross-sales").textContent = `$${monthlyGross.toLocaleString()}`;
    document.getElementById("res-royalties").textContent = `$${Math.round(monthlyRoyalties).toLocaleString()}`;
    document.getElementById("res-adfund").textContent = `$${Math.round(monthlyAdFund).toLocaleString()}`;
    document.getElementById("res-annual-flow").textContent = `$${Math.round(annualCashflow).toLocaleString()}`;
  }

  unitsSlider.addEventListener("input", calculate);
  revSlider.addEventListener("input", calculate);
  roySlider.addEventListener("input", calculate);
  adSlider.addEventListener("input", calculate);
  calculate();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// --------------------------------------------------------------------------
// 10. Pure SVG Charts Engine (High-Resolution, Zero Dependencies)
// --------------------------------------------------------------------------
let overviewChartPeriod = "30D";

function updateOverviewChart(period) {
  overviewChartPeriod = period;
  const buttons = document.querySelectorAll("#overview-chart-filters .filter-pill");
  buttons.forEach(b => {
    b.classList.toggle("active", b.textContent.includes(period));
  });
  renderOverviewRevenueChart();
}

function renderOverviewRevenueChart() {
  const container = document.getElementById("overview-revenue-chart");
  if (!container) return;

  let points = [];
  let labels = [];

  if (overviewChartPeriod === "30D") {
    labels = ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"];
    points = [580000, 610000, 635000, 670000, 690000, 705000, 718650];
  } else if (overviewChartPeriod === "3M") {
    labels = ["Jul 2026", "Aug 2026", "Sep 2026"];
    points = [590000, 650000, 718650];
  } else if (overviewChartPeriod === "6M") {
    labels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
    points = [510000, 545000, 580000, 620000, 665000, 718650];
  } else {
    labels = ["Q4 '25", "Q1 '26", "Q2 '26", "Q3 '26"];
    points = [420000, 510000, 610000, 718650];
  }

  const maxVal = Math.max(...points) * 1.15;
  const minVal = Math.min(...points) * 0.85;

  const w = 680;
  const h = 240;
  const paddingX = 50;
  const paddingY = 30;

  // Calculate coordinates
  const stepX = (w - paddingX * 2) / (points.length - 1);
  const coords = points.map((val, idx) => {
    const x = paddingX + idx * stepX;
    const y = h - paddingY - ((val - minVal) / (maxVal - minVal)) * (h - paddingY * 2);
    return { x, y, val };
  });

  // Polyline points
  const pointsStr = coords.map(c => `${c.x},${c.y}`).join(" ");
  const areaPoints = `${coords[0].x},${h - paddingY} ` + pointsStr + ` ${coords[coords.length - 1].x},${h - paddingY}`;

  // Build SVG
  let svg = `
    <svg class="chart-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradCyan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00e5ff" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#00e5ff" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      <!-- Grid lines -->
      <line x1="${paddingX}" y1="${paddingY}" x2="${w - paddingX}" y2="${paddingY}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
      <line x1="${paddingX}" y1="${h/2}" x2="${w - paddingX}" y2="${h/2}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
      <line x1="${paddingX}" y1="${h - paddingY}" x2="${w - paddingX}" y2="${h - paddingY}" stroke="rgba(255,255,255,0.1)"/>

      <!-- Area fill -->
      <polygon points="${areaPoints}" fill="url(#gradCyan)"/>

      <!-- Spline Stroke -->
      <polyline points="${pointsStr}" fill="none" stroke="#00e5ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Data Nodes -->
      ${coords.map(c => `
        <circle cx="${c.x}" cy="${c.y}" r="5" fill="#080e1a" stroke="#00e5ff" stroke-width="2.5"/>
        <text x="${c.x}" y="${c.y - 10}" fill="#f8fafc" font-size="10" font-family="'JetBrains Mono', monospace" font-weight="600" text-anchor="middle">$${(c.val/1000).toFixed(0)}k</text>
      `).join('')}

      <!-- Bottom Labels -->
      ${coords.map((c, i) => `
        <text x="${c.x}" y="${h - 10}" fill="#94a3b8" font-size="10" font-family="'Plus Jakarta Sans', sans-serif" text-anchor="middle">${labels[i]}</text>
      `).join('')}
    </svg>
  `;

  container.innerHTML = svg;
}

// --------------------------------------------------------------------------
// 11. VIEW 1: OVERVIEW RENDERING
// --------------------------------------------------------------------------
function renderOverviewView() {
  const totalRev = appState.franchises.reduce((acc, f) => acc + f.revenue, 0);
  const totalRoyalties = appState.royalties.reduce((acc, r) => acc + r.royaltyAmount, 0);
  const lowStock = appState.inventory.filter(p => p.stock < p.minStock).length;
  const pendingTasks = appState.tasks.filter(t => t.status !== "Completed").length;

  document.getElementById("kpi-total-locations").textContent = appState.franchises.length;
  document.getElementById("kpi-active-locations").textContent = appState.franchises.filter(f => f.status === "Active").length;
  document.getElementById("kpi-monthly-revenue").textContent = `$${totalRev.toLocaleString()}`;
  document.getElementById("kpi-accrued-royalties").textContent = `$${totalRoyalties.toLocaleString()}`;
  document.getElementById("kpi-total-staff").textContent = appState.employees.length;
  document.getElementById("kpi-low-stock").textContent = `${lowStock} SKUs`;
  document.getElementById("kpi-pending-tasks").textContent = `${pendingTasks} Tasks`;

  // Render SVG charts
  renderOverviewRevenueChart();

  // Top Franchise Territory Contribution Rankings
  const rankingsContainer = document.getElementById("overview-franchise-rankings");
  if (rankingsContainer) {
    const sorted = [...appState.franchises].sort((a, b) => b.revenue - a.revenue);
    rankingsContainer.innerHTML = sorted.slice(0, 5).map((f, i) => `
      <div class="mini-ranking-row" onclick="openFranchiseProfile('${f.id}')">
        <span class="rank-num">#${i + 1}</span>
        <div class="rank-info">
          <div class="rank-name">${f.name}</div>
          <div class="rank-sub">${f.city} • GM: ${f.manager}</div>
        </div>
        <div class="rank-val">$${f.revenue.toLocaleString()}</div>
      </div>
    `).join('');
  }

  // Recent Transactions Table in Overview
  const txTbody = document.getElementById("overview-transactions-tbody");
  if (txTbody) {
    txTbody.innerHTML = appState.transactions.slice(0, 5).map(tx => `
      <tr>
        <td><span class="num-mono text-cyan">${tx.id}</span></td>
        <td><strong>${tx.location}</strong></td>
        <td>${tx.customer}</td>
        <td><span class="num-mono">$${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span></td>
        <td><span class="num-mono text-green">$${tx.royalty.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span></td>
        <td><span class="status-chip live">${tx.status}</span></td>
        <td class="text-xs text-muted">${tx.time}</td>
      </tr>
    `).join('');
  }

  // Operational Attention Required Alerts
  const alertsContainer = document.getElementById("overview-alerts-stack");
  if (alertsContainer) {
    alertsContainer.innerHTML = `
      <div class="alert-item danger">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f43f5e" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <div class="alert-content">
          <strong>3 Inventory SKUs Below Safety Threshold</strong>
          <p class="text-xs text-muted">Austin & Seattle commissary orders require immediate approval.</p>
        </div>
        <button class="btn btn-sm btn-outline" onclick="navigateToView('inventory')">Inspect</button>
      </div>

      <div class="alert-item warning">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
        <div class="alert-content">
          <strong>2 Royalty ACH Debits Pending Settlement</strong>
          <p class="text-xs text-muted">Miami Downtown ($6,774) and New York Metro ($6,972) due this week.</p>
        </div>
        <button class="btn btn-sm btn-outline" onclick="navigateToView('finance')">Review</button>
      </div>

      <div class="alert-item info">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00e5ff" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
        <div class="alert-content">
          <strong>Territory Lease Renewal Verification Due</strong>
          <p class="text-xs text-muted">Austin Flagship 3-year extension rider pending corporate review.</p>
        </div>
        <button class="btn btn-sm btn-outline" onclick="navigateToView('tasks')">View Task</button>
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 12. VIEW 2: FRANCHISE LOCATIONS MANAGEMENT (Cards & Table View)
// --------------------------------------------------------------------------
let locationsLayout = "grid"; // 'grid' or 'table'

function setLocationsLayout(layout) {
  locationsLayout = layout;
  document.getElementById("btn-loc-cards").classList.toggle("active", layout === "grid");
  document.getElementById("btn-loc-table").classList.toggle("active", layout === "table");

  document.getElementById("locations-cards-container").classList.toggle("hidden", layout !== "grid");
  document.getElementById("locations-table-container").classList.toggle("hidden", layout !== "table");
  filterLocations();
}

function filterLocations() {
  const q = (document.getElementById("locations-search-input")?.value || "").toLowerCase();
  const statusFilter = document.getElementById("locations-status-filter")?.value || "ALL";
  const sortFilter = document.getElementById("locations-sort-filter")?.value || "revenue-desc";

  let list = appState.franchises.filter(f => {
    const matchesQ = f.name.toLowerCase().includes(q) || f.city.toLowerCase().includes(q) || f.manager.toLowerCase().includes(q);
    const matchesStatus = statusFilter === "ALL" || f.status === statusFilter;
    return matchesQ && matchesStatus;
  });

  // Sort
  if (sortFilter === "revenue-desc") list.sort((a, b) => b.revenue - a.revenue);
  else if (sortFilter === "revenue-asc") list.sort((a, b) => a.revenue - b.revenue);
  else if (sortFilter === "score-desc") list.sort((a, b) => b.score - a.score);
  else if (sortFilter === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));

  // Render Grid Cards
  const cardsContainer = document.getElementById("locations-cards-container");
  if (cardsContainer) {
    if (list.length === 0) {
      cardsContainer.innerHTML = `<div class="card w-100 text-center text-muted p-4">No franchise locations found matching your criteria.</div>`;
    } else {
      cardsContainer.innerHTML = list.map(f => `
        <div class="location-card">
          <div>
            <div class="loc-card-header">
              <div>
                <h3 class="loc-entity-name">${f.name}</h3>
                <span class="loc-city">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  ${f.city}
                </span>
              </div>
              <span class="status-chip ${f.status === 'Active' ? 'live' : f.status === 'Under Review' ? 'warning' : 'neutral'}">${f.status}</span>
            </div>

            <div class="loc-manager-row">
              <img src="${f.avatar}" alt="${f.manager}" class="loc-manager-avatar">
              <div class="loc-manager-info">
                <span class="title">General Manager</span>
                <div class="name">${f.manager}</div>
              </div>
            </div>

            <div class="loc-metrics-grid">
              <div class="loc-metric">
                <span class="lbl">Monthly Rev</span>
                <span class="val text-cyan">$${(f.revenue/1000).toFixed(1)}k</span>
              </div>
              <div class="loc-metric">
                <span class="lbl">Staff</span>
                <span class="val">${f.employees}</span>
              </div>
              <div class="loc-metric">
                <span class="lbl">Audit Score</span>
                <span class="val text-green">${f.score}%</span>
              </div>
            </div>
          </div>

          <div class="loc-card-actions">
            <button class="btn btn-outline btn-sm" onclick="openFranchiseProfile('${f.id}')">View Dossier</button>
            <div class="dropdown-actions">
              <button class="btn btn-sm btn-glass" onclick="openEditFranchiseModal('${f.id}')" title="Edit Parameters">Edit</button>
              <button class="btn btn-sm btn-outline text-danger" onclick="deleteFranchise('${f.id}')" title="Delete Location">Delete</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Render Table
  const tableTbody = document.getElementById("locations-table-tbody");
  if (tableTbody) {
    tableTbody.innerHTML = list.map(f => `
      <tr>
        <td><strong>${f.name}</strong><br><span class="text-xs text-muted">ID: ${f.id}</span></td>
        <td>${f.city}</td>
        <td>${f.manager}</td>
        <td><span class="num-mono">$${f.revenue.toLocaleString()}</span></td>
        <td>${f.employees} on shift</td>
        <td><span class="num-mono text-green">${f.score}%</span></td>
        <td><span class="status-chip ${f.status === 'Active' ? 'live' : 'warning'}">${f.status}</span></td>
        <td>
          <button class="text-btn" onclick="openFranchiseProfile('${f.id}')">Profile</button>
          <button class="text-btn" onclick="openEditFranchiseModal('${f.id}')">Edit</button>
          <button class="text-btn text-danger" onclick="deleteFranchise('${f.id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  }
}

// --------------------------------------------------------------------------
// 13. FRANCHISE PROFILE DOSSIER MODAL
// --------------------------------------------------------------------------
let activeProfileFranchiseId = null;

function openFranchiseProfile(id) {
  const f = appState.franchises.find(item => item.id === id);
  if (!f) return;

  activeProfileFranchiseId = id;

  document.getElementById("profile-modal-name").textContent = f.name;
  document.getElementById("profile-modal-status").textContent = f.status;
  document.getElementById("profile-stat-city").textContent = f.city;
  document.getElementById("profile-stat-manager").textContent = f.manager;
  document.getElementById("profile-stat-rev").textContent = `$${f.revenue.toLocaleString()}`;
  document.getElementById("profile-stat-score").textContent = `${f.score}%`;
  document.getElementById("profile-stat-staff").textContent = `${f.employees} Active`;

  document.getElementById("profile-det-address").textContent = f.address || `${f.city} Metro Hub`;
  document.getElementById("profile-det-phone").textContent = f.phone || "(555) 019-2830";
  document.getElementById("profile-det-email").textContent = f.email || "manager@franchiseflow.io";

  // Recent Sales tab
  const salesTbody = document.getElementById("profile-sales-tbody");
  if (salesTbody) {
    const locSales = appState.transactions.filter(t => t.location.includes(f.city) || t.location === f.name);
    salesTbody.innerHTML = (locSales.length > 0 ? locSales : appState.transactions.slice(0, 3)).map(s => `
      <tr>
        <td><span class="num-mono">${s.id}</span></td>
        <td>${s.customer}</td>
        <td><span class="num-mono">$${s.amount.toLocaleString()}</span></td>
        <td><span class="num-mono text-green">$${s.royalty.toLocaleString()}</span></td>
        <td class="text-xs text-muted">${s.time}</td>
      </tr>
    `).join('');
  }

  // Assigned Staff tab
  const staffTbody = document.getElementById("profile-staff-tbody");
  if (staffTbody) {
    const locStaff = appState.employees.filter(emp => emp.location === f.name || emp.location.includes(f.city));
    staffTbody.innerHTML = (locStaff.length > 0 ? locStaff : appState.employees.slice(0, 3)).map(emp => `
      <tr>
        <td><strong>${emp.name}</strong></td>
        <td>${emp.role}</td>
        <td>${emp.email}</td>
        <td><span class="text-cyan">${emp.score} ★</span></td>
        <td><span class="status-chip live">${emp.status}</span></td>
      </tr>
    `).join('');
  }

  // Local Inventory tab
  const invTbody = document.getElementById("profile-inventory-tbody");
  if (invTbody) {
    invTbody.innerHTML = appState.inventory.slice(0, 5).map(p => `
      <tr>
        <td><span class="num-mono">${p.sku}</span></td>
        <td>${p.name}</td>
        <td><span class="num-mono">${p.stock}</span></td>
        <td>${p.minStock}</td>
        <td><span class="status-chip ${p.stock < p.minStock ? 'danger' : 'live'}">${p.stock < p.minStock ? 'Low Stock' : 'Optimal'}</span></td>
      </tr>
    `).join('');
  }

  // Royalty History tab
  const royTbody = document.getElementById("profile-royalties-tbody");
  if (royTbody) {
    const r = appState.royalties.find(item => item.franchiseId === f.id) || appState.royalties[0];
    royTbody.innerHTML = `
      <tr>
        <td>Current Cycle (Sep 2026)</td>
        <td>$${f.revenue.toLocaleString()}</td>
        <td><strong class="text-cyan">$${(f.revenue * 0.06).toLocaleString()}</strong></td>
        <td>$${(f.revenue * 0.02).toLocaleString()}</td>
        <td><span class="status-chip ${r.status === 'Paid' ? 'live' : 'warning'}">${r.status}</span></td>
      </tr>
    `;
  }

  switchProfileTab('tab-prof-overview');
  openModal("modal-franchise-profile");
}

function switchProfileTab(tabId) {
  const buttons = document.querySelectorAll(".profile-tab-btn");
  buttons.forEach(b => b.classList.remove("active"));
  const panes = document.querySelectorAll(".profile-tab-pane");
  panes.forEach(p => p.classList.remove("active"));

  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add("active");

  const activeBtn = Array.from(buttons).find(b => b.getAttribute("onclick")?.includes(tabId));
  if (activeBtn) activeBtn.classList.add("active");
}

function editFranchiseFromProfile() {
  closeModal("modal-franchise-profile");
  if (activeProfileFranchiseId) {
    openEditFranchiseModal(activeProfileFranchiseId);
  }
}

// --------------------------------------------------------------------------
// 14. CRUD: FRANCHISE LOCATIONS
// --------------------------------------------------------------------------
function openAddFranchiseModal() {
  document.getElementById("modal-franchise-title").textContent = "Register New Franchise Location";
  document.getElementById("form-franchise").reset();
  document.getElementById("franchise-id").value = "";
  openModal("modal-franchise");
}

function openEditFranchiseModal(id) {
  const f = appState.franchises.find(item => item.id === id);
  if (!f) return;

  document.getElementById("modal-franchise-title").textContent = "Edit Franchise Parameters";
  document.getElementById("franchise-id").value = f.id;
  document.getElementById("franchise-name").value = f.name;
  document.getElementById("franchise-city").value = f.city;
  document.getElementById("franchise-manager").value = f.manager;
  document.getElementById("franchise-phone").value = f.phone || "";
  document.getElementById("franchise-email").value = f.email || "";
  document.getElementById("franchise-status").value = f.status;
  document.getElementById("franchise-revenue").value = f.revenue;
  document.getElementById("franchise-employees").value = f.employees;
  document.getElementById("franchise-score").value = f.score;

  openModal("modal-franchise");
}

function handleFranchiseSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("franchise-id").value;
  const name = document.getElementById("franchise-name").value.trim();
  const city = document.getElementById("franchise-city").value.trim();
  const manager = document.getElementById("franchise-manager").value.trim();
  const phone = document.getElementById("franchise-phone").value.trim();
  const email = document.getElementById("franchise-email").value.trim();
  const status = document.getElementById("franchise-status").value;
  const revenue = parseFloat(document.getElementById("franchise-revenue").value) || 0;
  const employees = parseInt(document.getElementById("franchise-employees").value) || 1;
  const score = parseFloat(document.getElementById("franchise-score").value) || 95.0;

  if (id) {
    // Edit existing
    const f = appState.franchises.find(item => item.id === id);
    if (f) {
      f.name = name;
      f.city = city;
      f.manager = manager;
      f.phone = phone;
      f.email = email;
      f.status = status;
      f.revenue = revenue;
      f.employees = employees;
      f.score = score;
      showToast(`Franchise ${name} updated successfully`, "success");
    }
  } else {
    // Create new
    const newId = `FR-${city.slice(0, 2).toUpperCase()}${Math.floor(10 + Math.random() * 89)}`;
    const newFranchise = {
      id: newId,
      name,
      city,
      address: `${city} Metropolitan Territory`,
      manager,
      phone,
      email,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      revenue,
      employees,
      score,
      status,
      openedDate: new Date().toISOString().split("T")[0]
    };
    appState.franchises.push(newFranchise);

    // Also push a corresponding royalty record
    appState.royalties.push({
      franchiseId: newId,
      franchiseName: name,
      location: city,
      revenue,
      royaltyPct: 6.0,
      royaltyAmount: Math.round(revenue * 0.06),
      adFundAmount: Math.round(revenue * 0.02),
      dueDate: "2026-09-30",
      status: "Pending"
    });

    showToast(`New franchise branch ${name} established!`, "success");
  }

  saveAppState();
  closeModal("modal-franchise");
  renderAllViews();
}

function deleteFranchise(id) {
  const f = appState.franchises.find(item => item.id === id);
  if (!f) return;

  openConfirmModal(
    `Decommission ${f.name}?`,
    `Are you certain you wish to terminate and remove ${f.name} from the active network ledger? All associated telemetry will be archived.`,
    () => {
      appState.franchises = appState.franchises.filter(item => item.id !== id);
      appState.royalties = appState.royalties.filter(item => item.franchiseId !== id);
      saveAppState();
      renderAllViews();
      showToast(`Franchise ${f.name} removed from network.`, "info");
    }
  );
}

// --------------------------------------------------------------------------
// 15. VIEW 3: PERFORMANCE ANALYTICS
// --------------------------------------------------------------------------
let analyticsRange = "30D";

function setAnalyticsRange(range) {
  analyticsRange = range;
  const buttons = document.querySelectorAll("#analytics-timerange-group .filter-pill");
  buttons.forEach(b => b.classList.toggle("active", b.textContent.includes(range)));
  renderPerformanceView();
  showToast(`Performance range adjusted to: ${range}`, "info");
}

function renderPerformanceView() {
  // 1. Growth Trajectory Chart
  const growthContainer = document.getElementById("analytics-growth-chart");
  if (growthContainer) {
    const w = 620;
    const h = 240;
    const paddingX = 45;
    const paddingY = 25;

    const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
    const revPoints = [160000, 178000, 185000, 195650];
    const expPoints = [98000, 102000, 108000, 114000];

    const max = 220000;
    const min = 80000;

    const stepX = (w - paddingX * 2) / 3;
    const revCoords = revPoints.map((v, i) => ({ x: paddingX + i * stepX, y: h - paddingY - ((v - min) / (max - min)) * (h - paddingY * 2), v }));
    const expCoords = expPoints.map((v, i) => ({ x: paddingX + i * stepX, y: h - paddingY - ((v - min) / (max - min)) * (h - paddingY * 2), v }));

    growthContainer.innerHTML = `
      <svg class="chart-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
        <line x1="${paddingX}" y1="${h/2}" x2="${w - paddingX}" y2="${h/2}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
        <!-- Rev Line -->
        <polyline points="${revCoords.map(c => `${c.x},${c.y}`).join(' ')}" fill="none" stroke="#00e5ff" stroke-width="3" stroke-linecap="round"/>
        <!-- Exp Line -->
        <polyline points="${expCoords.map(c => `${c.x},${c.y}`).join(' ')}" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
        ${revCoords.map(c => `<circle cx="${c.x}" cy="${c.y}" r="4" fill="#00e5ff"/>`).join('')}
        ${expCoords.map(c => `<circle cx="${c.x}" cy="${c.y}" r="4" fill="#f43f5e"/>`).join('')}
        ${revCoords.map((c, i) => `<text x="${c.x}" y="${h - 6}" fill="#94a3b8" font-size="10" text-anchor="middle">${labels[i]}</text>`).join('')}
      </svg>
      <div class="chart-legend">
        <span class="legend-item"><span class="legend-dot cyan"></span> Gross Revenue ($)</span>
        <span class="legend-item"><span class="legend-dot red" style="background-color: #f43f5e"></span> Network Expenses ($)</span>
      </div>
    `;
  }

  // 2. Territory Bar Chart
  const barContainer = document.getElementById("analytics-bar-chart");
  if (barContainer) {
    const w = 400;
    const h = 240;
    const paddingX = 40;
    const paddingY = 30;

    const data = appState.franchises.map(f => ({ name: f.city.split(',')[0], val: f.revenue }));
    const max = Math.max(...data.map(d => d.val)) * 1.15;
    const barWidth = 36;
    const stepX = (w - paddingX * 2) / data.length;

    barContainer.innerHTML = `
      <svg class="chart-svg" viewBox="0 0 ${w} ${h}">
        ${data.map((d, i) => {
          const x = paddingX + i * stepX + (stepX - barWidth) / 2;
          const barH = (d.val / max) * (h - paddingY * 2);
          const y = h - paddingY - barH;
          return `
            <rect x="${x}" y="${y}" width="${barWidth}" height="${barH}" rx="4" fill="url(#gradBar)" />
            <text x="${x + barWidth/2}" y="${y - 6}" fill="#00e5ff" font-size="9" font-family="'JetBrains Mono', monospace" text-anchor="middle">$${(d.val/1000).toFixed(0)}k</text>
            <text x="${x + barWidth/2}" y="${h - 10}" fill="#94a3b8" font-size="9" text-anchor="middle">${d.name}</text>
          `;
        }).join('')}
        <defs>
          <linearGradient id="gradBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#00e5ff"/>
            <stop offset="100%" stop-color="#3b82f6"/>
          </linearGradient>
        </defs>
      </svg>
    `;
  }

  // 3. Cost Breakdown Progress Bars
  const distContainer = document.getElementById("analytics-distribution-bars");
  if (distContainer) {
    distContainer.innerHTML = `
      <div class="mb-3">
        <div class="d-flex justify-content-between text-xs mb-1"><span>Cost of Goods Sold (COGS)</span><strong>31.8% ($228,500)</strong></div>
        <div class="sync-progress-bar"><div class="fill" style="width: 31.8%; background-color: #3b82f6;"></div></div>
      </div>
      <div class="mb-3">
        <div class="d-flex justify-content-between text-xs mb-1"><span>Direct Store Labor</span><strong>28.4% ($204,100)</strong></div>
        <div class="sync-progress-bar"><div class="fill" style="width: 28.4%; background-color: #8b5cf6;"></div></div>
      </div>
      <div class="mb-3">
        <div class="d-flex justify-content-between text-xs mb-1"><span>Franchisor Royalties</span><strong>6.0% ($43,119)</strong></div>
        <div class="sync-progress-bar"><div class="fill" style="width: 6.0%; background-color: #00e5ff;"></div></div>
      </div>
      <div class="mb-3">
        <div class="d-flex justify-content-between text-xs mb-1"><span>National Ad Fund Pool</span><strong>2.0% ($14,373)</strong></div>
        <div class="sync-progress-bar"><div class="fill" style="width: 2.0%; background-color: #10b981;"></div></div>
      </div>
      <div>
        <div class="d-flex justify-content-between text-xs mb-1"><span>Franchisee Net Operating Margin</span><strong>31.8% ($228,558)</strong></div>
        <div class="sync-progress-bar"><div class="fill" style="width: 31.8%; background-color: #10b981;"></div></div>
      </div>
    `;
  }

  // 4. CSAT Matrix
  const csatContainer = document.getElementById("analytics-csat-display");
  if (csatContainer) {
    csatContainer.innerHTML = appState.franchises.map(f => `
      <div class="mini-ranking-row mb-2">
        <span class="rank-num">★</span>
        <div class="rank-info">
          <div class="rank-name">${f.city}</div>
          <div class="rank-sub">Territory Net Promoter Score</div>
        </div>
        <div class="rank-val text-green">${f.score}%</div>
      </div>
    `).join('');
  }
}

// --------------------------------------------------------------------------
// 16. VIEW 4: SALES MANAGEMENT
// --------------------------------------------------------------------------
function populateSalesLocationsFilter() {
  const select = document.getElementById("sales-location-filter");
  if (!select) return;
  select.innerHTML = `<option value="ALL">All Franchise Branches</option>` +
    appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');
}

function filterSales() {
  const q = (document.getElementById("sales-search-input")?.value || "").toLowerCase();
  const locFilter = document.getElementById("sales-location-filter")?.value || "ALL";
  const statusFilter = document.getElementById("sales-status-filter")?.value || "ALL";

  const list = appState.transactions.filter(t => {
    const matchesQ = t.id.toLowerCase().includes(q) || t.customer.toLowerCase().includes(q) || t.location.toLowerCase().includes(q);
    const matchesLoc = locFilter === "ALL" || t.location === locFilter;
    const matchesStatus = statusFilter === "ALL" || t.status === statusFilter;
    return matchesQ && matchesLoc && matchesStatus;
  });

  const tbody = document.getElementById("sales-table-tbody");
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center text-muted p-4">No matching point-of-sale transactions found.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(tx => `
    <tr>
      <td><span class="num-mono text-cyan">${tx.id}</span></td>
      <td><strong>${tx.location}</strong></td>
      <td>${tx.customer}</td>
      <td><span class="badge-pill sm gray">${tx.category}</span></td>
      <td><span class="num-mono font-weight-bold">$${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span></td>
      <td><span class="num-mono text-green">$${tx.royalty.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span></td>
      <td><span class="status-chip live">${tx.status}</span></td>
      <td class="text-xs text-muted">${tx.time}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="printReceipt('${tx.id}')">Receipt</button>
      </td>
    </tr>
  `).join('');
}

function printReceipt(txId) {
  const tx = appState.transactions.find(t => t.id === txId) || appState.transactions[0];
  showToast(`Printing receipt docket for order ${tx.id}...`, "info");
  window.print();
}

// --------------------------------------------------------------------------
// 17. VIEW 5: FINANCES & ROYALTIES
// --------------------------------------------------------------------------
function renderFinanceView() {
  const totalGross = appState.royalties.reduce((acc, r) => acc + r.revenue, 0);
  const collected = appState.royalties.filter(r => r.status === "Paid").reduce((acc, r) => acc + r.royaltyAmount, 0);
  const pending = appState.royalties.filter(r => r.status === "Pending").reduce((acc, r) => acc + r.royaltyAmount, 0);
  const adFund = Math.round(totalGross * 0.02);

  document.getElementById("fin-gross-vol").textContent = `$${totalGross.toLocaleString()}`;
  document.getElementById("fin-collected-royalty").textContent = `$${collected.toLocaleString()}`;
  document.getElementById("fin-pending-royalty").textContent = `$${pending.toLocaleString()}`;
  document.getElementById("fin-adfund-pool").textContent = `$${adFund.toLocaleString()}`;

  // Royalty Schedule Table
  const royTbody = document.getElementById("royalty-schedule-tbody");
  if (royTbody) {
    royTbody.innerHTML = appState.royalties.map(r => `
      <tr>
        <td><strong>${r.franchiseName}</strong></td>
        <td>${r.location}</td>
        <td><span class="num-mono">$${r.revenue.toLocaleString()}</span></td>
        <td><span class="num-mono">${r.royaltyPct.toFixed(1)}%</span></td>
        <td><span class="num-mono text-cyan">$${r.royaltyAmount.toLocaleString()}</span></td>
        <td><span class="num-mono text-green">$${r.adFundAmount.toLocaleString()}</span></td>
        <td class="text-xs text-muted">${r.dueDate}</td>
        <td><span class="status-chip ${r.status === 'Paid' ? 'live' : 'warning'}">${r.status}</span></td>
        <td>
          ${r.status === 'Pending' ? `
            <button class="btn btn-sm btn-primary" onclick="settleRoyalty('${r.franchiseId}')">Settle ACH</button>
          ` : `
            <span class="text-xs text-green">✓ Cleared</span>
          `}
        </td>
      </tr>
    `).join('');
  }

  // Financial Ledger Table
  const legTbody = document.getElementById("finance-ledger-tbody");
  if (legTbody) {
    legTbody.innerHTML = appState.transactions.map(tx => `
      <tr>
        <td class="text-xs text-muted">${tx.time}</td>
        <td><span class="num-mono text-cyan">${tx.id}</span></td>
        <td><strong>${tx.location}</strong></td>
        <td>${tx.customer}</td>
        <td><span class="badge-pill sm blue">${tx.category}</span></td>
        <td><span class="num-mono ${tx.category === 'Royalty Payment' ? 'text-green' : ''}">$${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span></td>
        <td><span class="status-chip live">${tx.status}</span></td>
      </tr>
    `).join('');
  }
}

function settleRoyalty(franchiseId) {
  const r = appState.royalties.find(item => item.franchiseId === franchiseId);
  if (!r) return;

  r.status = "Paid";
  // Add to transactions ledger
  appState.transactions.unshift({
    id: `TX-${Math.floor(1000 + Math.random() * 8999)}`,
    location: r.franchiseName,
    customer: "Automated ACH Royalty Debit Clearance",
    category: "Royalty Payment",
    amount: r.royaltyAmount,
    royalty: r.royaltyAmount,
    status: "Completed",
    time: "Just now"
  });

  saveAppState();
  renderFinanceView();
  updateHeaderAndSidebarBadges();
  showToast(`Automated ACH Settlement of $${r.royaltyAmount.toLocaleString()} cleared for ${r.franchiseName}!`, "success");
}

function triggerBatchRoyaltyCollection() {
  const pendings = appState.royalties.filter(r => r.status === "Pending");
  if (pendings.length === 0) {
    showToast("All network royalties are currently settled.", "info");
    return;
  }

  pendings.forEach(r => {
    r.status = "Paid";
    appState.transactions.unshift({
      id: `TX-${Math.floor(1000 + Math.random() * 8999)}`,
      location: r.franchiseName,
      customer: "Batch ACH Direct Settlement",
      category: "Royalty Payment",
      amount: r.royaltyAmount,
      royalty: r.royaltyAmount,
      status: "Completed",
      time: "Just now"
    });
  });

  saveAppState();
  renderFinanceView();
  updateHeaderAndSidebarBadges();
  showToast(`Batch ACH successfully debited ${pendings.length} pending locations!`, "success");
}

// --------------------------------------------------------------------------
// 18. VIEW 6: EMPLOYEES / STAFF
// --------------------------------------------------------------------------
function populateEmployeeLocationsFilter() {
  const select = document.getElementById("employee-loc-filter");
  if (!select) return;
  select.innerHTML = `<option value="ALL">All Franchise Branches</option>` +
    appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');

  const modalSelect = document.getElementById("emp-location");
  if (modalSelect) {
    modalSelect.innerHTML = appState.franchises.map(f => `<option value="${f.name}">${f.name} (${f.city})</option>`).join('');
  }
}

function filterEmployees() {
  const q = (document.getElementById("employee-search-input")?.value || "").toLowerCase();
  const locFilter = document.getElementById("employee-loc-filter")?.value || "ALL";
  const roleFilter = document.getElementById("employee-role-filter")?.value || "ALL";

  const list = appState.employees.filter(emp => {
    const matchesQ = emp.name.toLowerCase().includes(q) || emp.email.toLowerCase().includes(q) || emp.role.toLowerCase().includes(q);
    const matchesLoc = locFilter === "ALL" || emp.location === locFilter;
    const matchesRole = roleFilter === "ALL" || emp.role === roleFilter;
    return matchesQ && matchesLoc && matchesRole;
  });

  const container = document.getElementById("employees-cards-container");
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="card w-100 text-center text-muted p-4">No employees found matching criteria.</div>`;
    return;
  }

  container.innerHTML = list.map(emp => `
    <div class="employee-card">
      <img src="${emp.avatar}" alt="${emp.name}" class="emp-avatar-lg">
      <h4 class="emp-card-name">${emp.name}</h4>
      <span class="emp-card-role">${emp.role}</span>
      <span class="emp-card-location">${emp.location}</span>

      <div class="emp-card-meta">
        <div><span>Score:</span> <strong class="text-cyan">${emp.score} ★</strong></div>
        <div><span>Salary:</span> <strong>$${(emp.salary/1000).toFixed(0)}k</strong></div>
        <div><span>Status:</span> <strong class="text-green">${emp.status}</strong></div>
      </div>

      <div class="emp-card-actions">
        <button class="btn btn-sm btn-outline" onclick="openEditEmployeeModal('${emp.id}')">Edit</button>
        <button class="btn btn-sm btn-outline text-danger" onclick="deleteEmployee('${emp.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function openAddEmployeeModal() {
  populateEmployeeLocationsFilter();
  document.getElementById("modal-employee-title").textContent = "Add Staff Member";
  document.getElementById("form-employee").reset();
  document.getElementById("employee-id").value = "";
  openModal("modal-employee");
}

function openEditEmployeeModal(id) {
  const emp = appState.employees.find(item => item.id === id);
  if (!emp) return;

  populateEmployeeLocationsFilter();
  document.getElementById("modal-employee-title").textContent = "Edit Staff Member";
  document.getElementById("employee-id").value = emp.id;
  document.getElementById("emp-name").value = emp.name;
  document.getElementById("emp-email").value = emp.email;
  document.getElementById("emp-phone").value = emp.phone;
  document.getElementById("emp-location").value = emp.location;
  document.getElementById("emp-role").value = emp.role;
  document.getElementById("emp-salary").value = emp.salary;
  document.getElementById("emp-score").value = emp.score;
  document.getElementById("emp-status").value = emp.status;

  openModal("modal-employee");
}

function handleEmployeeSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("employee-id").value;
  const name = document.getElementById("emp-name").value.trim();
  const email = document.getElementById("emp-email").value.trim();
  const phone = document.getElementById("emp-phone").value.trim();
  const location = document.getElementById("emp-location").value;
  const role = document.getElementById("emp-role").value;
  const salary = parseFloat(document.getElementById("emp-salary").value) || 45000;
  const score = parseFloat(document.getElementById("emp-score").value) || 4.8;
  const status = document.getElementById("emp-status").value;

  if (id) {
    const emp = appState.employees.find(item => item.id === id);
    if (emp) {
      emp.name = name;
      emp.email = email;
      emp.phone = phone;
      emp.location = location;
      emp.role = role;
      emp.salary = salary;
      emp.score = score;
      emp.status = status;
      showToast(`Employee ${name} updated`, "success");
    }
  } else {
    const newEmp = {
      id: `EMP-${Math.floor(10 + Math.random() * 89)}`,
      name,
      email,
      phone,
      location,
      role,
      salary,
      score,
      status,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
    };
    appState.employees.push(newEmp);
    showToast(`Staff member ${name} registered`, "success");
  }

  saveAppState();
  closeModal("modal-employee");
  renderAllViews();
}

function deleteEmployee(id) {
  const emp = appState.employees.find(item => item.id === id);
  if (!emp) return;

  openConfirmModal(
    `Remove ${emp.name}?`,
    `Are you sure you wish to remove ${emp.name} from the active staff directory?`,
    () => {
      appState.employees = appState.employees.filter(item => item.id !== id);
      saveAppState();
      renderAllViews();
      showToast(`Employee ${emp.name} removed`, "info");
    }
  );
}

// --------------------------------------------------------------------------
// 19. VIEW 7: INVENTORY MANAGEMENT
// --------------------------------------------------------------------------
function filterInventory() {
  const q = (document.getElementById("inventory-search-input")?.value || "").toLowerCase();
  const catFilter = document.getElementById("inventory-category-filter")?.value || "ALL";
  const stockFilter = document.getElementById("inventory-stock-filter")?.value || "ALL";

  const totalSKUs = appState.inventory.length;
  const healthySKUs = appState.inventory.filter(p => p.stock >= p.minStock).length;
  const lowSKUs = appState.inventory.filter(p => p.stock < p.minStock).length;
  const totalVal = appState.inventory.reduce((acc, p) => acc + (p.price * p.stock), 0);

  document.getElementById("inv-total-skus").textContent = totalSKUs;
  document.getElementById("inv-healthy-skus").textContent = healthySKUs;
  document.getElementById("inv-low-skus").textContent = `${lowSKUs} SKUs`;
  document.getElementById("inv-valuation").textContent = `$${Math.round(totalVal).toLocaleString()}`;

  const list = appState.inventory.filter(p => {
    const matchesQ = p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    const matchesCat = catFilter === "ALL" || p.category === catFilter;
    let matchesStock = true;
    if (stockFilter === "In Stock") matchesStock = p.stock >= p.minStock;
    else if (stockFilter === "Low Stock") matchesStock = p.stock < p.minStock && p.stock > 0;
    else if (stockFilter === "Out of Stock") matchesStock = p.stock === 0;
    return matchesQ && matchesCat && matchesStock;
  });

  const tbody = document.getElementById("inventory-table-tbody");
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted p-4">No inventory catalog items found.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(p => {
    const isLow = p.stock < p.minStock;
    return `
      <tr>
        <td>
          <strong>${p.name}</strong><br>
          <span class="num-mono text-cyan">${p.sku}</span>
        </td>
        <td><span class="badge-pill sm gray">${p.category}</span></td>
        <td>${p.location}</td>
        <td><span class="num-mono">$${p.price.toFixed(2)}</span></td>
        <td>
          <span class="num-mono ${isLow ? 'text-danger font-weight-bold' : ''}">${p.stock} units</span>
          <span class="text-xs text-muted"> (Min: ${p.minStock})</span>
        </td>
        <td>
          <span class="status-chip ${isLow ? 'danger' : 'live'}">${isLow ? 'Low Stock' : 'Optimal'}</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-sm btn-outline" onclick="adjustStock('${p.id}', -5)" title="Deduct 5">-5</button>
            <button class="btn btn-sm btn-outline" onclick="adjustStock('${p.id}', 10)" title="Add 10">+10</button>
            <button class="btn btn-sm btn-outline" onclick="adjustStock('${p.id}', 50)" title="Restock 50">+50</button>
          </div>
        </td>
        <td>
          <button class="text-btn" onclick="openEditProductModal('${p.id}')">Edit</button>
          <button class="text-btn text-danger" onclick="deleteProduct('${p.id}')">Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

function adjustStock(id, delta) {
  const p = appState.inventory.find(item => item.id === id);
  if (!p) return;
  p.stock = Math.max(0, p.stock + delta);
  saveAppState();
  filterInventory();
  updateHeaderAndSidebarBadges();
  showToast(`Adjusted ${p.name} stock to ${p.stock} units`, "info");
}

function openAddProductModal() {
  document.getElementById("modal-product-title").textContent = "Add Inventory SKU";
  document.getElementById("form-product").reset();
  document.getElementById("product-id").value = "";

  const locSelect = document.getElementById("prod-location");
  if (locSelect) {
    locSelect.innerHTML = `<option value="Central Commissary">Central Commissary (All Units)</option>` +
      appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');
  }

  openModal("modal-product");
}

function openEditProductModal(id) {
  const p = appState.inventory.find(item => item.id === id);
  if (!p) return;

  document.getElementById("modal-product-title").textContent = "Edit Inventory SKU";
  document.getElementById("product-id").value = p.id;
  document.getElementById("prod-name").value = p.name;
  document.getElementById("prod-sku").value = p.sku;
  document.getElementById("prod-category").value = p.category;

  const locSelect = document.getElementById("prod-location");
  if (locSelect) {
    locSelect.innerHTML = `<option value="Central Commissary">Central Commissary (All Units)</option>` +
      appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');
    locSelect.value = p.location;
  }

  document.getElementById("prod-price").value = p.price;
  document.getElementById("prod-stock").value = p.stock;
  document.getElementById("prod-min").value = p.minStock;

  openModal("modal-product");
}

function handleProductSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("product-id").value;
  const name = document.getElementById("prod-name").value.trim();
  const sku = document.getElementById("prod-sku").value.trim();
  const category = document.getElementById("prod-category").value;
  const location = document.getElementById("prod-location").value;
  const price = parseFloat(document.getElementById("prod-price").value) || 0;
  const stock = parseInt(document.getElementById("prod-stock").value) || 0;
  const minStock = parseInt(document.getElementById("prod-min").value) || 20;

  if (id) {
    const p = appState.inventory.find(item => item.id === id);
    if (p) {
      p.name = name;
      p.sku = sku;
      p.category = category;
      p.location = location;
      p.price = price;
      p.stock = stock;
      p.minStock = minStock;
      showToast(`SKU ${sku} updated`, "success");
    }
  } else {
    const newProduct = {
      id: `PRD-${Math.floor(10 + Math.random() * 89)}`,
      name,
      sku,
      category,
      location,
      price,
      stock,
      minStock
    };
    appState.inventory.push(newProduct);
    showToast(`New SKU ${sku} added to catalog`, "success");
  }

  saveAppState();
  closeModal("modal-product");
  renderAllViews();
}

function deleteProduct(id) {
  const p = appState.inventory.find(item => item.id === id);
  if (!p) return;

  openConfirmModal(
    `Delete ${p.sku}?`,
    `Are you sure you wish to delete "${p.name}" from the inventory database?`,
    () => {
      appState.inventory = appState.inventory.filter(item => item.id !== id);
      saveAppState();
      renderAllViews();
      showToast(`SKU ${p.sku} deleted`, "info");
    }
  );
}

// --------------------------------------------------------------------------
// 20. VIEW 8: TASKS & KANBAN MANAGEMENT
// --------------------------------------------------------------------------
let tasksViewMode = "kanban"; // 'kanban' or 'list'

function setTasksViewMode(mode) {
  tasksViewMode = mode;
  document.getElementById("btn-task-kanban").classList.toggle("active", mode === "kanban");
  document.getElementById("btn-task-list").classList.toggle("active", mode === "list");

  document.getElementById("tasks-kanban-view").classList.toggle("hidden", mode !== "kanban");
  document.getElementById("tasks-list-view").classList.toggle("hidden", mode !== "list");
  filterTasks();
}

function filterTasks() {
  const q = (document.getElementById("task-search-input")?.value || "").toLowerCase();
  const priorityFilter = document.getElementById("task-priority-filter")?.value || "ALL";

  const list = appState.tasks.filter(t => {
    const matchesQ = t.title.toLowerCase().includes(q) || t.location.toLowerCase().includes(q) || t.assignee.toLowerCase().includes(q);
    const matchesPriority = priorityFilter === "ALL" || t.priority === priorityFilter;
    return matchesQ && matchesPriority;
  });

  // Count by status
  const todo = list.filter(t => t.status === "To Do");
  const inprogress = list.filter(t => t.status === "In Progress");
  const review = list.filter(t => t.status === "Review");
  const completed = list.filter(t => t.status === "Completed");

  document.getElementById("count-todo").textContent = todo.length;
  document.getElementById("count-inprogress").textContent = inprogress.length;
  document.getElementById("count-review").textContent = review.length;
  document.getElementById("count-completed").textContent = completed.length;

  function renderKanbanStack(tasks) {
    if (tasks.length === 0) return `<div class="p-3 text-center text-muted text-xs">No tasks in column</div>`;
    return tasks.map(t => {
      const priorityClass = t.priority === "Urgent" ? "red" : t.priority === "High" ? "amber" : t.priority === "Medium" ? "blue" : "gray";
      return `
        <div class="kanban-card" onclick="openEditTaskModal('${t.id}')">
          <div class="kanban-card-top">
            <span class="badge-pill sm ${priorityClass}">${t.priority}</span>
            <span class="text-xs text-muted">${t.deadline}</span>
          </div>
          <div class="kanban-task-title">${t.title}</div>
          <div class="kanban-card-loc">${t.location}</div>
          <div class="kanban-card-footer">
            <div class="kanban-assignee">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              ${t.assignee}
            </div>
            <button class="text-btn text-xs" onclick="event.stopPropagation(); advanceTaskStatus('${t.id}')">Advance &rarr;</button>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById("kanban-stack-todo").innerHTML = renderKanbanStack(todo);
  document.getElementById("kanban-stack-inprogress").innerHTML = renderKanbanStack(inprogress);
  document.getElementById("kanban-stack-review").innerHTML = renderKanbanStack(review);
  document.getElementById("kanban-stack-completed").innerHTML = renderKanbanStack(completed);

  // List View Table
  const tbody = document.getElementById("tasks-table-tbody");
  if (tbody) {
    tbody.innerHTML = list.map(t => `
      <tr>
        <td><strong>${t.title}</strong></td>
        <td>${t.location}</td>
        <td><span class="badge-pill sm ${t.priority === 'Urgent' ? 'red' : 'blue'}">${t.priority}</span></td>
        <td>${t.assignee}</td>
        <td class="text-xs text-muted">${t.deadline}</td>
        <td><span class="status-chip ${t.status === 'Completed' ? 'live' : 'warning'}">${t.status}</span></td>
        <td>
          <button class="text-btn" onclick="openEditTaskModal('${t.id}')">Edit</button>
          <button class="text-btn text-danger" onclick="deleteTask('${t.id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  }
}

function advanceTaskStatus(id) {
  const t = appState.tasks.find(item => item.id === id);
  if (!t) return;

  if (t.status === "To Do") t.status = "In Progress";
  else if (t.status === "In Progress") t.status = "Review";
  else if (t.status === "Review") t.status = "Completed";
  else if (t.status === "Completed") t.status = "To Do";

  saveAppState();
  filterTasks();
  updateHeaderAndSidebarBadges();
  showToast(`Task "${t.title}" moved to ${t.status}`, "info");
}

function openAddTaskModal() {
  document.getElementById("modal-task-title").textContent = "Create Operational Task";
  document.getElementById("form-task").reset();
  document.getElementById("task-id").value = "";

  const locSelect = document.getElementById("task-location");
  if (locSelect) {
    locSelect.innerHTML = appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');
  }

  document.getElementById("task-deadline").value = new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0];
  openModal("modal-task");
}

function openEditTaskModal(id) {
  const t = appState.tasks.find(item => item.id === id);
  if (!t) return;

  document.getElementById("modal-task-title").textContent = "Edit Operational Task";
  document.getElementById("task-id").value = t.id;
  document.getElementById("task-title").value = t.title;
  document.getElementById("task-desc").value = t.desc || "";

  const locSelect = document.getElementById("task-location");
  if (locSelect) {
    locSelect.innerHTML = appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');
    locSelect.value = t.location;
  }

  document.getElementById("task-assignee").value = t.assignee;
  document.getElementById("task-priority").value = t.priority;
  document.getElementById("task-status").value = t.status;
  document.getElementById("task-deadline").value = t.deadline;

  openModal("modal-task");
}

function handleTaskSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("task-id").value;
  const title = document.getElementById("task-title").value.trim();
  const desc = document.getElementById("task-desc").value.trim();
  const location = document.getElementById("task-location").value;
  const assignee = document.getElementById("task-assignee").value.trim();
  const priority = document.getElementById("task-priority").value;
  const status = document.getElementById("task-status").value;
  const deadline = document.getElementById("task-deadline").value;

  if (id) {
    const t = appState.tasks.find(item => item.id === id);
    if (t) {
      t.title = title;
      t.desc = desc;
      t.location = location;
      t.assignee = assignee;
      t.priority = priority;
      t.status = status;
      t.deadline = deadline;
      showToast(`Task directive updated`, "success");
    }
  } else {
    const newTask = {
      id: `TSK-${Math.floor(100 + Math.random() * 899)}`,
      title,
      desc,
      location,
      assignee,
      priority,
      status,
      deadline
    };
    appState.tasks.unshift(newTask);
    showToast(`Task directive created`, "success");
  }

  saveAppState();
  closeModal("modal-task");
  renderAllViews();
}

function deleteTask(id) {
  const t = appState.tasks.find(item => item.id === id);
  if (!t) return;

  openConfirmModal(
    `Delete task "${t.title}"?`,
    `Are you sure you wish to cancel and delete this operational directive?`,
    () => {
      appState.tasks = appState.tasks.filter(item => item.id !== id);
      saveAppState();
      renderAllViews();
      showToast(`Task deleted`, "info");
    }
  );
}

// --------------------------------------------------------------------------
// 21. VIEW 9: DOCUMENTS VAULT
// --------------------------------------------------------------------------
function filterDocuments() {
  const q = (document.getElementById("doc-search-input")?.value || "").toLowerCase();
  const catFilter = document.getElementById("doc-category-filter")?.value || "ALL";

  const list = appState.documents.filter(d => {
    const matchesQ = d.title.toLowerCase().includes(q) || d.category.toLowerCase().includes(q) || d.location.toLowerCase().includes(q);
    const matchesCat = catFilter === "ALL" || d.category === catFilter;
    return matchesQ && matchesCat;
  });

  const container = document.getElementById("documents-container");
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="card w-100 text-center text-muted p-4">No documents found in vault.</div>`;
    return;
  }

  container.innerHTML = list.map(d => `
    <div class="document-card">
      <div>
        <div class="doc-card-top">
          <div class="doc-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
          </div>
          <div class="doc-info">
            <h4>${d.title}</h4>
            <p>${d.category} • ${d.location}</p>
          </div>
        </div>

        <div class="doc-meta-row">
          <span>Version: <strong>${d.version}</strong></span>
          <span>Size: ${d.size}</span>
          <span>${d.date}</span>
        </div>
      </div>

      <div class="doc-actions">
        <button class="btn btn-outline btn-sm" onclick="downloadDemoDocument('${d.title}')">Download</button>
        <button class="btn btn-sm btn-glass text-danger" onclick="deleteDocument('${d.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function downloadDemoDocument(title) {
  showToast(`Initiating secure vault download: "${title}"`, "info");
  const blob = new Blob([`FranchiseFlow Document Vault\nDocument: ${title}\nEncrypted SHA-256 Verified\nDate: ${new Date().toISOString()}`], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function openUploadDocModal() {
  document.getElementById("form-document").reset();
  const locSelect = document.getElementById("doc-location");
  if (locSelect) {
    locSelect.innerHTML = `<option value="All Locations">All Locations (Network-Wide)</option>` +
      appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');
  }
  openModal("modal-document");
}

function handleDocumentSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("doc-title").value.trim();
  const category = document.getElementById("doc-category").value;
  const location = document.getElementById("doc-location").value;
  const version = document.getElementById("doc-version").value.trim() || "v1.0";

  const newDoc = {
    id: `DOC-${Math.floor(10 + Math.random() * 89)}`,
    title,
    category,
    location,
    size: "3.2 MB",
    date: new Date().toISOString().split("T")[0],
    version
  };

  appState.documents.unshift(newDoc);
  saveAppState();
  closeModal("modal-document");
  renderAllViews();
  showToast(`Document "${title}" encrypted and committed to vault.`, "success");
}

function deleteDocument(id) {
  const d = appState.documents.find(item => item.id === id);
  if (!d) return;

  openConfirmModal(
    `Delete ${d.title}?`,
    `Are you certain you wish to delete this document from the centralized vault?`,
    () => {
      appState.documents = appState.documents.filter(item => item.id !== id);
      saveAppState();
      renderAllViews();
      showToast(`Document deleted`, "info");
    }
  );
}

// --------------------------------------------------------------------------
// 22. VIEW 10: MARKETING CENTER
// --------------------------------------------------------------------------
function renderMarketingView() {
  const container = document.getElementById("campaigns-container");
  if (!container) return;

  container.innerHTML = appState.campaigns.map(c => `
    <div class="campaign-card">
      <div class="camp-header">
        <div>
          <h3 class="camp-title">${c.name}</h3>
          <span class="camp-territory">${c.territory}</span>
        </div>
        <span class="status-chip ${c.status === 'Active' ? 'live' : 'neutral'}">${c.status}</span>
      </div>

      <div class="camp-metrics">
        <div class="loc-metric">
          <span class="lbl">Budget</span>
          <span class="val text-cyan">$${c.budget.toLocaleString()}</span>
        </div>
        <div class="loc-metric">
          <span class="lbl">Spent</span>
          <span class="val text-green">$${c.spent.toLocaleString()}</span>
        </div>
        <div class="loc-metric">
          <span class="lbl">Conversions</span>
          <span class="val text-purple">${c.conversions}</span>
        </div>
      </div>

      <div class="d-flex justify-content-between text-xs text-muted mb-2">
        <span>Campaign Reach</span>
        <strong>${c.reach}</strong>
      </div>
      <div class="sync-progress-bar">
        <div class="fill" style="width: ${(c.spent / c.budget * 100)}%"></div>
      </div>
    </div>
  `).join('');
}

function openAddCampaignModal() {
  document.getElementById("form-campaign").reset();
  const terrSelect = document.getElementById("camp-territory");
  if (terrSelect) {
    terrSelect.innerHTML = `<option value="Network-Wide">Network-Wide (All Units)</option>` +
      appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');
  }
  openModal("modal-campaign");
}

function handleCampaignSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("camp-name").value.trim();
  const budget = parseFloat(document.getElementById("camp-budget").value) || 5000;
  const territory = document.getElementById("camp-territory").value;
  const reach = document.getElementById("camp-reach").value.trim() || "250,000 Impressions";
  const status = document.getElementById("camp-status").value;

  const newCamp = {
    id: `CMP-${Math.floor(10 + Math.random() * 89)}`,
    name,
    territory,
    budget,
    spent: Math.round(budget * 0.25),
    reach,
    conversions: "12.5%",
    status
  };

  appState.campaigns.unshift(newCamp);
  saveAppState();
  closeModal("modal-campaign");
  renderMarketingView();
  showToast(`Campaign "${name}" launched successfully`, "success");
}

// --------------------------------------------------------------------------
// 23. VIEW 11: BRANCH MESSAGING & COMMUNICATIONS
// --------------------------------------------------------------------------
function renderMessagingView() {
  const channelListEl = document.getElementById("messaging-channels-container");
  if (!channelListEl) return;

  const activeChannelId = appState.messages.activeChannel;

  channelListEl.innerHTML = appState.messages.channels.map(c => `
    <div class="channel-item ${c.id === activeChannelId ? 'active' : ''}" onclick="selectChatChannel('${c.id}')">
      <div class="channel-info">
        <div class="channel-name">${c.name}</div>
        <div class="channel-preview">${c.lastMsg}</div>
      </div>
    </div>
  `).join('');

  renderActiveChatThread();
}

function selectChatChannel(channelId) {
  appState.messages.activeChannel = channelId;
  const ch = appState.messages.channels.find(c => c.id === channelId);
  if (ch) ch.unread = 0;
  saveAppState();
  renderMessagingView();
}

function renderActiveChatThread() {
  const activeChannelId = appState.messages.activeChannel;
  const channel = appState.messages.channels.find(c => c.id === activeChannelId) || appState.messages.channels[0];
  const threadMessages = appState.messages.threads[activeChannelId] || [];

  const titleEl = document.getElementById("active-thread-title");
  if (titleEl) titleEl.textContent = channel.name;

  const bodyEl = document.getElementById("thread-messages-body");
  if (!bodyEl) return;

  bodyEl.innerHTML = threadMessages.map(msg => `
    <div class="chat-bubble ${msg.type}">
      <strong>${msg.sender}</strong>
      <p>${msg.text}</p>
      <span class="chat-time">${msg.time}</span>
    </div>
  `).join('');

  bodyEl.scrollTop = bodyEl.scrollHeight;
}

function handleChatInput(e) {
  if (e.key === "Enter") {
    sendActiveMessage();
  }
}

function sendActiveMessage() {
  const input = document.getElementById("chat-input-field");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const activeChannelId = appState.messages.activeChannel;
  if (!appState.messages.threads[activeChannelId]) {
    appState.messages.threads[activeChannelId] = [];
  }

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  appState.messages.threads[activeChannelId].push({
    sender: "Alexandria Hayes (HQ)",
    type: "outbound",
    text,
    time: timeStr
  });

  // Update last message preview
  const ch = appState.messages.channels.find(c => c.id === activeChannelId);
  if (ch) ch.lastMsg = text;

  input.value = "";
  saveAppState();
  renderActiveChatThread();
  renderMessagingView();
  showToast("Directive dispatched to branch", "info");
}

function filterChannels() {
  const q = (document.getElementById("message-channel-search")?.value || "").toLowerCase();
  const items = document.querySelectorAll(".channel-item");
  items.forEach(it => {
    const text = it.textContent.toLowerCase();
    it.style.display = text.includes(q) ? "flex" : "none";
  });
}

// --------------------------------------------------------------------------
// 24. VIEW 12: EXECUTIVE REPORTS & AUDIT ENGINE
// --------------------------------------------------------------------------
function populateReportsLocationFilter() {
  const select = document.getElementById("report-location-select");
  if (!select) return;
  select.innerHTML = `<option value="ALL">All Network Locations (Consolidated)</option>` +
    appState.franchises.map(f => `<option value="${f.id}">${f.name} (${f.city})</option>`).join('');
}

function generateDynamicReport() {
  const type = document.getElementById("report-type-select")?.value || "network-performance";
  const locId = document.getElementById("report-location-select")?.value || "ALL";
  const cycle = document.getElementById("report-cycle-select")?.value || "30D";

  const thead = document.getElementById("report-preview-thead");
  const tbody = document.getElementById("report-preview-tbody");
  const meta = document.getElementById("report-preview-meta");

  if (!thead || !tbody) return;

  meta.textContent = `Generated for ${locId === 'ALL' ? 'All Franchise Branches' : 'Selected Entity'} • Cycle Range: ${cycle} • Generated: ${new Date().toLocaleDateString()}`;

  if (type === "network-performance") {
    document.getElementById("report-preview-title").textContent = "Franchise Network Comprehensive Performance Dossier";
    thead.innerHTML = `
      <tr>
        <th>Franchise Entity</th>
        <th>City Territory</th>
        <th>Gross Revenue</th>
        <th>Royalty Fee (6%)</th>
        <th>Ad Fund (2%)</th>
        <th>Quality Audit</th>
        <th>Staff Count</th>
      </tr>
    `;
    let items = locId === "ALL" ? appState.franchises : appState.franchises.filter(f => f.id === locId);
    tbody.innerHTML = items.map(f => `
      <tr>
        <td><strong>${f.name}</strong></td>
        <td>${f.city}</td>
        <td><span class="num-mono">$${f.revenue.toLocaleString()}</span></td>
        <td><span class="num-mono text-cyan">$${(f.revenue * 0.06).toLocaleString()}</span></td>
        <td><span class="num-mono text-green">$${(f.revenue * 0.02).toLocaleString()}</span></td>
        <td><span class="num-mono">${f.score}%</span></td>
        <td>${f.employees}</td>
      </tr>
    `).join('');
  } else if (type === "royalty-reconciliation") {
    document.getElementById("report-preview-title").textContent = "Royalty Collections & ACH Audit Report";
    thead.innerHTML = `
      <tr><th>Franchise Location</th><th>Base Revenue</th><th>Royalty %</th><th>Due Amount</th><th>Due Date</th><th>Status</th></tr>
    `;
    tbody.innerHTML = appState.royalties.map(r => `
      <tr>
        <td><strong>${r.franchiseName}</strong></td>
        <td><span class="num-mono">$${r.revenue.toLocaleString()}</span></td>
        <td>${r.royaltyPct}%</td>
        <td><span class="num-mono text-cyan">$${r.royaltyAmount.toLocaleString()}</span></td>
        <td>${r.dueDate}</td>
        <td><span class="status-chip ${r.status === 'Paid' ? 'live' : 'warning'}">${r.status}</span></td>
      </tr>
    `).join('');
  } else {
    document.getElementById("report-preview-title").textContent = "Point-of-Sale Register Audit Trail";
    thead.innerHTML = `
      <tr><th>Order Reference</th><th>Branch Location</th><th>Order Line</th><th>Amount</th><th>Royalty Deducted</th><th>Timestamp</th></tr>
    `;
    tbody.innerHTML = appState.transactions.map(tx => `
      <tr>
        <td><span class="num-mono text-cyan">${tx.id}</span></td>
        <td>${tx.location}</td>
        <td>${tx.customer}</td>
        <td><span class="num-mono">$${tx.amount.toLocaleString()}</span></td>
        <td><span class="num-mono text-green">$${tx.royalty.toLocaleString()}</span></td>
        <td class="text-xs text-muted">${tx.time}</td>
      </tr>
    `).join('');
  }
}

// --------------------------------------------------------------------------
// 25. VIEW 13: SETTINGS & POLICIES
// --------------------------------------------------------------------------
function switchSettingsTab(tab) {
  const buttons = document.querySelectorAll(".settings-nav-btn");
  buttons.forEach(b => b.classList.remove("active"));
  const panels = document.querySelectorAll(".settings-tab-panel");
  panels.forEach(p => p.classList.remove("active"));

  const targetPanel = document.getElementById(`tab-settings-${tab}`);
  if (targetPanel) targetPanel.classList.add("active");

  const activeBtn = Array.from(buttons).find(b => b.getAttribute("onclick")?.includes(tab));
  if (activeBtn) activeBtn.classList.add("active");
}

function loadSettingsToInputs() {
  const s = appState.settings;
  if (document.getElementById("set-company-name")) document.getElementById("set-company-name").value = s.companyName;
  if (document.getElementById("set-default-royalty")) document.getElementById("set-default-royalty").value = s.defaultRoyalty;
  if (document.getElementById("set-adfund-rate")) document.getElementById("set-adfund-rate").value = s.adFundRate;
  if (document.getElementById("set-royalty-cycle")) document.getElementById("set-royalty-cycle").value = s.royaltyCycle;
  if (document.getElementById("set-currency")) document.getElementById("set-currency").value = s.currency;
  if (document.getElementById("set-lowstock-threshold")) document.getElementById("set-lowstock-threshold").value = s.lowStockThreshold;
}

function saveSystemSettings() {
  appState.settings.companyName = document.getElementById("set-company-name").value.trim();
  appState.settings.defaultRoyalty = parseFloat(document.getElementById("set-default-royalty").value) || 6.0;
  appState.settings.adFundRate = parseFloat(document.getElementById("set-adfund-rate").value) || 2.0;
  appState.settings.royaltyCycle = document.getElementById("set-royalty-cycle").value;
  appState.settings.currency = document.getElementById("set-currency").value;
  appState.settings.lowStockThreshold = parseInt(document.getElementById("set-lowstock-threshold").value) || 20;

  saveAppState();
  showToast("Organization policy settings updated successfully", "success");
}

// --------------------------------------------------------------------------
// 26. CSV EXPORT & BACKUP SYSTEM
// --------------------------------------------------------------------------
function exportDataReport(type) {
  let csvContent = "";
  let filename = `FranchiseFlow_${type}_${new Date().toISOString().split("T")[0]}`;

  if (type === "backup-json") {
    const blob = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
    downloadBlob(blob, `FranchiseFlow_Database_Backup_${new Date().toISOString().split("T")[0]}.json`);
    showToast("Complete database backup exported as JSON.", "success");
    return;
  }

  if (type === "locations" || type === "overview") {
    csvContent = "ID,Name,City,Manager,Phone,Email,Status,MonthlyRevenue,StaffCount,QualityScore,OpenedDate\n";
    appState.franchises.forEach(f => {
      csvContent += `"${f.id}","${f.name}","${f.city}","${f.manager}","${f.phone}","${f.email}","${f.status}",${f.revenue},${f.employees},${f.score},"${f.openedDate}"\n`;
    });
  } else if (type === "sales") {
    csvContent = "ID,Location,Customer,Category,Amount,Royalty,Status,Time\n";
    appState.transactions.forEach(t => {
      csvContent += `"${t.id}","${t.location}","${t.customer}","${t.category}",${t.amount},${t.royalty},"${t.status}","${t.time}"\n`;
    });
  } else if (type === "royalties") {
    csvContent = "FranchiseID,FranchiseName,Location,Revenue,RoyaltyPct,RoyaltyAmount,AdFundAmount,DueDate,Status\n";
    appState.royalties.forEach(r => {
      csvContent += `"${r.franchiseId}","${r.franchiseName}","${r.location}",${r.revenue},${r.royaltyPct},${r.royaltyAmount},${r.adFundAmount},"${r.dueDate}","${r.status}"\n`;
    });
  } else if (type === "employees") {
    csvContent = "ID,Name,Email,Phone,Location,Role,Salary,Score,Status\n";
    appState.employees.forEach(emp => {
      csvContent += `"${emp.id}","${emp.name}","${emp.email}","${emp.phone}","${emp.location}","${emp.role}",${emp.salary},${emp.score},"${emp.status}"\n`;
    });
  } else if (type === "inventory") {
    csvContent = "ID,Name,SKU,Category,Location,Price,Stock,MinStock\n";
    appState.inventory.forEach(p => {
      csvContent += `"${p.id}","${p.name}","${p.sku}","${p.category}","${p.location}",${p.price},${p.stock},${p.minStock}\n`;
    });
  } else if (type === "tasks") {
    csvContent = "ID,Title,Location,Assignee,Priority,Status,Deadline\n";
    appState.tasks.forEach(t => {
      csvContent += `"${t.id}","${t.title}","${t.location}","${t.assignee}","${t.priority}","${t.status}","${t.deadline}"\n`;
    });
  } else {
    csvContent = "Category,Report,Date\nConsolidated Performance,All Units," + new Date().toISOString() + "\n";
  }

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  downloadBlob(blob, `${filename}.csv`);
  showToast(`CSV Dataset exported: ${filename}.csv`, "success");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --------------------------------------------------------------------------
// 27. MODAL UTILITIES
// --------------------------------------------------------------------------
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("hidden");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("hidden");
}

function handleModalBackdropClick(e, modalId) {
  if (e.target.id === modalId) {
    closeModal(modalId);
  }
}

// Esc key closes modals
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.add("hidden"));
    document.getElementById("quick-add-menu")?.classList.add("hidden");
    document.getElementById("notif-panel")?.classList.add("hidden");
    document.getElementById("profile-dropdown")?.classList.add("hidden");
  }
});

let pendingConfirmCallback = null;

function openConfirmModal(title, message, onConfirm) {
  document.getElementById("confirm-modal-title").textContent = title;
  document.getElementById("confirm-modal-message").textContent = message;
  pendingConfirmCallback = onConfirm;

  const confirmBtn = document.getElementById("confirm-modal-btn");
  confirmBtn.onclick = () => {
    if (pendingConfirmCallback) pendingConfirmCallback();
    closeModal("modal-confirm");
  };

  openModal("modal-confirm");
}

function openLoginModal() {
  openModal("modal-auth");
}

function handleDemoAuth(e) {
  e.preventDefault();
  const email = document.getElementById("auth-email").value;
  const role = document.getElementById("auth-role").value;

  appState.settings.activeRole = role;
  saveAppState();

  const roleSelect = document.getElementById("active-role-select");
  if (roleSelect) roleSelect.value = role;

  const roleBadge = document.getElementById("current-user-role");
  if (roleBadge) roleBadge.textContent = role;

  closeModal("modal-auth");
  showToast(`Welcome back, ${email} (${role})`, "success");
  launchPlatform();
}

function openAddTransactionModal() {
  document.getElementById("form-transaction").reset();
  const locSelect = document.getElementById("tx-location");
  if (locSelect) {
    locSelect.innerHTML = appState.franchises.map(f => `<option value="${f.name}">${f.name}</option>`).join('');
  }
  openModal("modal-transaction");
}

function handleTransactionSubmit(e) {
  e.preventDefault();
  const desc = document.getElementById("tx-desc").value.trim();
  const location = document.getElementById("tx-location").value;
  const category = document.getElementById("tx-type").value;
  const amount = parseFloat(document.getElementById("tx-amount").value) || 0;
  const status = document.getElementById("tx-status").value;

  const royalty = category === "POS Register Sales" ? amount * 0.06 : category === "Royalty Payment" ? amount : 0;

  const newTx = {
    id: `TX-${Math.floor(1000 + Math.random() * 8999)}`,
    location,
    customer: desc,
    category,
    amount,
    royalty,
    status,
    time: "Just now"
  };

  appState.transactions.unshift(newTx);
  saveAppState();
  closeModal("modal-transaction");
  renderAllViews();
  showToast(`Transaction of $${amount.toFixed(2)} recorded!`, "success");
}

// --------------------------------------------------------------------------
// 28. Responsive Mobile Menu & Sidebar Handlers
// --------------------------------------------------------------------------
function initMobileNavigation() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const landingNav = document.getElementById("landing-nav-menu");

  if (mobileToggle && landingNav) {
    mobileToggle.addEventListener("click", () => {
      landingNav.classList.toggle("mobile-open");
    });
  }

  const sidebarToggle = document.getElementById("sidebar-toggle-btn");
  const sidebar = document.getElementById("app-sidebar");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
}

// --------------------------------------------------------------------------
// 29. Main App Initialization
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initAppState();
  initTheme();
  initLiveClock();
  initGlobalSearch();
  initRoyaltyCalculator();
  initMobileNavigation();
  renderAllViews();

  // Close open dropdowns if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".quick-add-dropdown-wrap")) {
      document.getElementById("quick-add-menu")?.classList.add("hidden");
    }
    if (!e.target.closest("#notif-btn") && !e.target.closest("#notif-panel")) {
      document.getElementById("notif-panel")?.classList.add("hidden");
    }
    if (!e.target.closest(".user-profile-wrap")) {
      document.getElementById("profile-dropdown")?.classList.add("hidden");
    }
  });

  console.log("FranchiseFlow Enterprise 4.2 initialized successfully.");
});
