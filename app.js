const TRAINING_STORE_URL = "https://knb-tutorial.myshopify.com";
const TRAINING_STORE_ADMIN_URL = "https://admin.shopify.com/store/knb-tutorial";
const TRAINING_STORE_PASSWORD = "charol";
const SHOPIFY_CLI_DOCS_URL = "https://shopify.dev/docs/api/shopify-cli";
const SHOPIFY_THEME_CLI_DOCS_URL = "https://shopify.dev/docs/storefronts/themes/tools/cli";
const GITHUB_DESKTOP_URL = "https://desktop.github.com/";
const GITHUB_DESKTOP_AUTH_DOCS_URL =
  "https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop";
const GITHUB_DESKTOP_CLONE_DOCS_URL =
  "https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=desktop";
const BEM_NAMING_DOCS_URL = "https://getbem.com/naming/";
const SASS_STYLE_RULES_DOCS_URL = "https://sass-lang.com/documentation/style-rules/";
const SASS_SELECTOR_DOCS_URL = "https://sass-lang.com/documentation/modules/selector/";
const STORAGE_KEY = "knb-shopify-training-progress-v1";

const tutorials = [
  {
    tool: "admin",
    title: "Dashboard Tour: What Each Menu Does",
    description:
      "First open the KNB tutorial store, then learn the Shopify dashboard navigation one step at a time.",
    lessons: 10,
    time: "35m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Keep this first lesson as orientation only. The trainee should know the menu names before editing anything.",
    steps: [
      "Open knb-tutorial.myshopify.com.",
      "Enter the password: charol.",
      "Look at the Shopify dashboard navigation.",
      "Follow each step in the popup before trying it in the tutorial store.",
      "Keep the lesson light: identify where things are before changing anything.",
    ],
  },
  {
    tool: "setup",
    title: "Create the Store and Install Essentials",
    description:
      "Set up the Shopify account, store profile, staff access, and the basic tools needed for training.",
    lessons: 6,
    time: "45m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Ask the trainee to inspect settings first. Billing, payments, domains, and staff access should stay trainer-only.",
    steps: [
      "Create or log in to a Shopify account.",
      "Add store name, business address, currency, and timezone.",
      "Invite staff from Settings > Users and permissions.",
      "Confirm sales channel: Online Store.",
      "Install only approved starter apps after the workflow is clear.",
    ],
  },
  {
    tool: "pages",
    title: "Add Pages: About, Contact, FAQ, Policies",
    description: "Create standard website pages from Online Store > Pages and prepare them for navigation.",
    lessons: 5,
    time: "35m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Use hidden practice pages for beginners so they can learn the editor without publishing unfinished content.",
    steps: [
      "Go to Online Store > Pages.",
      "Click Add page.",
      "Add the page title and content.",
      "Set Visibility to visible or hidden.",
      "Save, then add the page to a menu if customers need to find it.",
    ],
  },
  {
    tool: "theme",
    title: "Open the Theme Customizer",
    description:
      "Find the Shopify theme editor and learn how templates, sections, blocks, settings, and preview controls work.",
    lessons: 6,
    time: "48m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Before saving, have the trainee identify the template selector, sections panel, blocks, and preview controls.",
    steps: [
      "Go to Online Store > Themes.",
      "Find the active theme or a theme in the library.",
      "Click Edit theme to open the customizer.",
      "Use the top template selector to switch pages.",
      "Use sections, blocks, theme settings, and app embeds carefully before saving.",
    ],
  },
  {
    tool: "products",
    title: "Add Products and Collections",
    description: "Create products, upload images, set prices, manage inventory, and group items into collections.",
    lessons: 7,
    time: "1h 10m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Practice products should stay Draft until the trainee understands price, inventory, media, variants, and status.",
    steps: [
      "Go to Products.",
      "Click Add product.",
      "Add title, description, media, price, inventory, shipping, variants, and status.",
      "Create collections for groups like New Arrivals or Best Sellers.",
      "Preview product pages after saving.",
    ],
  },
  {
    tool: "theme",
    title: "Edit Homepage Sections",
    description: "Update the hero, featured collection, image banners, text blocks, and reusable homepage sections.",
    lessons: 5,
    time: "42m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Let trainees inspect sections before editing copy. This prevents random layout changes in the theme editor.",
    steps: [
      "Open Online Store > Themes > Edit theme.",
      "Select Home page from the template menu.",
      "Click a section to edit content and layout settings.",
      "Add sections only when they support the page goal.",
      "Check desktop and mobile previews before saving.",
    ],
  },
  {
    tool: "pages",
    title: "Add Navigation Menu Links",
    description: "Make pages, collections, products, and policies visible in header or footer menus.",
    lessons: 4,
    time: "30m",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Menu edits affect storefront navigation, so beginners should use an assigned practice menu when possible.",
    steps: [
      "Go to Content > Menus or Online Store > Navigation, depending on the admin view.",
      "Choose Main menu or Footer menu.",
      "Click Add menu item.",
      "Name the link and select the destination.",
      "Save and verify the link on the storefront.",
    ],
  },
  {
    tool: "setup",
    title: "Before Launch: Settings Check",
    description: "Review payments, shipping, taxes, checkout, domains, notifications, and password protection.",
    lessons: 9,
    time: "1h 25m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Use this as a read-only review until the trainee can explain the risk of each launch setting.",
    steps: [
      "Check Settings > Payments.",
      "Check shipping and delivery rates.",
      "Check taxes and duties for the store region.",
      "Review checkout, customer accounts, and notifications.",
      "Connect the domain and remove storefront password only when approved.",
    ],
  },
  {
    tool: "dev",
    title: "Developer Setup: VS Code and Terminal",
    description:
      "Install the developer workspace tools and learn how VS Code, terminal, folders, and extensions fit together.",
    lessons: 5,
    time: "45m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Keep this setup module practical. The trainee should be able to open the project folder and terminal before touching code.",
    steps: [
      "Install Visual Studio Code.",
      "Open the project folder, not a random single file.",
      "Open the integrated terminal.",
      "Install approved VS Code extensions.",
      "Confirm the trainee can find files, search, terminal, and source control.",
    ],
  },
  {
    tool: "dev",
    title: "Install Node, npm, Git, and Shopify CLI",
    description:
      "Set up the required command-line tools for Shopify theme development and confirm each one works.",
    lessons: 6,
    time: "55m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Modern Shopify CLI theme work needs Node, npm, Git, and Shopify CLI. Ruby should only be mentioned if a specific older project requires it.",
    steps: [
      "Install Node.js 20.10 or higher.",
      "Confirm npm is available.",
      "Install Git 2.28 or higher.",
      "Install Shopify CLI with npm.",
      "Run version checks before starting theme work.",
    ],
  },
  {
    tool: "dev",
    title: "Shopify CLI Theme Workflow",
    description:
      "Learn the daily commands for pulling, previewing, checking, pushing, and opening Shopify themes safely.",
    lessons: 7,
    time: "1h 10m",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Teach command purpose before memorization. The trainee should know when a command reads from Shopify, writes to Shopify, or only previews locally.",
    steps: [
      "Use shopify theme dev to preview local work.",
      "Use shopify theme pull before editing a remote theme.",
      "Use shopify theme push only after review.",
      "Run shopify theme check before sharing or pushing.",
      "Use theme list, info, and open for orientation.",
    ],
  },
  {
    tool: "dev",
    title: "Theme Project Files and npm Install",
    description:
      "Understand the Shopify theme folders, install project packages, and know when npm scripts are different from Shopify CLI.",
    lessons: 6,
    time: "1h",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Make the trainee explain the difference between npm install, npm run dev, and shopify theme dev before they edit files.",
    steps: [
      "Open the actual theme project folder.",
      "Identify assets, config, layout, locales, sections, snippets, and templates.",
      "Run npm install when the project has package.json.",
      "Use npm run scripts only when the project provides them.",
      "Preview with Shopify CLI from the correct theme folder.",
    ],
  },
  {
    tool: "dev",
    title: "Developer Troubleshooting Checklist",
    description:
      "Fix common beginner setup problems before they become project blockers.",
    lessons: 5,
    time: "40m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "This module is for calm diagnosis: check folder, versions, login, permissions, then command syntax.",
    steps: [
      "Check the current folder before running commands.",
      "Check Node, npm, Git, and Shopify CLI versions.",
      "Confirm Shopify account or Theme Access permissions.",
      "Log out and reconnect when the wrong Shopify account is active.",
      "Document the error message before asking for help.",
    ],
  },
  {
    tool: "dev",
    title: "GitHub Access and GitHub Desktop Setup",
    description:
      "Ask the supervisor for the correct account access first, then install GitHub Desktop and connect it safely.",
    lessons: 6,
    time: "55m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Do not let trainees use personal guesses for company repository access. Confirm account, repository permission, branch rule, and password or 2FA support first.",
    steps: [
      "Ask the supervisor which GitHub account and repository to use.",
      "Confirm any password, 2FA, or access approval needed before signing in.",
      "Install GitHub Desktop.",
      "Sign in through the browser.",
      "Clone only the assigned repository.",
    ],
  },
  {
    tool: "dev",
    title: "GitHub Desktop Daily Workflow",
    description:
      "Learn the safe everyday GitHub Desktop workflow: fetch, pull, branch, review changes, commit, push, and ask for review.",
    lessons: 7,
    time: "1h 5m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Beginners should understand that commit saves locally, push uploads to GitHub, and pull downloads teammate changes.",
    steps: [
      "Fetch and pull before starting work.",
      "Create or switch to the assigned branch.",
      "Review changed files before committing.",
      "Write a clear commit message.",
      "Push to GitHub and tell the supervisor for review.",
    ],
  },
  {
    tool: "code",
    title: "BEM Naming Basics",
    description:
      "Learn block, element, and modifier naming so CSS class names stay readable and reusable.",
    lessons: 6,
    time: "50m",
    level: "Basic",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Start with naming decisions, not styling. The trainee should explain why a class is a block, element, or modifier.",
    steps: [
      "Identify the block as the standalone component.",
      "Name elements with block__element.",
      "Name variations with block--modifier or block__element--modifier.",
      "Avoid tag and ID selectors for component styling.",
      "Practice renaming messy classes into BEM.",
    ],
  },
  {
    tool: "code",
    title: "BEM Medium: Components and States",
    description:
      "Apply BEM to real UI components with cards, buttons, forms, state classes, and responsive variants.",
    lessons: 6,
    time: "1h",
    level: "Medium",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Watch for over-nesting names like card__body__title. Teach trainees to keep elements tied to the block, not chained elements.",
    steps: [
      "Build a product card naming map.",
      "Add block and element modifiers.",
      "Handle states like is-active carefully.",
      "Avoid element-of-element class names.",
      "Split reusable pieces into new blocks.",
    ],
  },
  {
    tool: "code",
    title: "SCSS Basics: Nesting, Variables, and Ampersand",
    description:
      "Learn SCSS syntax, variables, shallow nesting, and how the ampersand creates BEM selectors.",
    lessons: 7,
    time: "1h 10m",
    level: "Hard",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Keep nesting shallow. The trainee should understand exactly what CSS is generated by &__element and &--modifier.",
    steps: [
      "Create SCSS variables for colors, spacing, and radius.",
      "Nest elements with &__element.",
      "Nest modifiers with &--modifier.",
      "Use &:hover, &:focus-visible, and media queries clearly.",
      "Compile mentally from SCSS to CSS before writing more nesting.",
    ],
  },
  {
    tool: "code",
    title: "Pro SCSS: Architecture and Review Rules",
    description:
      "Use professional SCSS structure with partials, mixins, tokens, responsive helpers, and code review standards.",
    lessons: 8,
    time: "1h 35m",
    level: "Pro",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "This is the senior-level module. The trainee should learn when abstraction helps and when plain CSS is better.",
    steps: [
      "Organize SCSS into tokens, base, components, utilities, and pages.",
      "Use @use instead of old @import when the build supports it.",
      "Create mixins only for repeated real patterns.",
      "Keep selector specificity low.",
      "Review compiled CSS output before approving work.",
    ],
  },
];

const modulePractices = {
  "Dashboard Tour: What Each Menu Does": {
    title: "Tutorial store access",
    description:
      "Open the KNB tutorial store and use the password inside the popup.",
    tasks: [
      "Go to knb-tutorial.myshopify.com.",
      "Enter password: charol.",
      "Use the popup steps to understand the dashboard navigation before changing anything.",
    ],
  },
  "Create the Store and Install Essentials": {
    title: "Check the training store setup",
    description:
      "Review the setup areas without changing billing, payments, domains, or staff permissions.",
    tasks: [
      "Find Settings from the admin sidebar.",
      "Open Store details and identify the store name, timezone, and currency.",
      "Open Users and permissions only for orientation. Do not add or remove users.",
    ],
  },
  "Add Pages: About, Contact, FAQ, Policies": {
    title: "Create a trainee page",
    description: "Create a hidden practice page so the trainee learns the page editor safely.",
    tasks: [
      "Go to Online Store > Pages.",
      "Create a page named Practice Page - Your Name.",
      "Add two short paragraphs, keep the page hidden if assigned, then save.",
    ],
  },
  "Open the Theme Customizer": {
    title: "Open the theme customizer",
    description: "Practice opening the theme editor and identifying its main controls.",
    tasks: [
      "Go to Online Store > Themes.",
      "Open Edit theme or Customize on the assigned training theme.",
      "Find the template selector, sections sidebar, theme settings, desktop/mobile preview, and Save button.",
    ],
  },
  "Add Products and Collections": {
    title: "Add a practice product",
    description: "Create a draft product so the trainee learns product fields without publishing real items.",
    tasks: [
      "Go to Products > Add product.",
      "Name it Training Product - Your Name.",
      "Add a price, short description, one image if provided, and keep the product as Draft.",
    ],
  },
  "Edit Homepage Sections": {
    title: "Edit a homepage draft section",
    description: "Practice section editing. The trainer decides whether trainees can save changes.",
    tasks: [
      "Open Online Store > Themes > Edit theme.",
      "Select Home page.",
      "Click a section and identify its blocks, image controls, text fields, and layout settings.",
    ],
  },
  "Add Navigation Menu Links": {
    title: "Add a navigation link",
    description: "Connect the trainee practice page to a safe menu only if the trainer approves menu edits.",
    tasks: [
      "Go to Content > Menus or Online Store > Navigation.",
      "Open the assigned practice menu.",
      "Add a link to Practice Page - Your Name, save, then verify where it appears.",
    ],
  },
  "Before Launch: Settings Check": {
    title: "Run a launch settings review",
    description: "Learn where launch settings live. Beginners should inspect only unless assigned changes.",
    tasks: [
      "Find Payments, Shipping and delivery, Taxes and duties, Checkout, Domains, and Notifications.",
      "Do not change payment, domain, or billing settings.",
      "Complete a trainer-provided launch checklist after reviewing each area.",
    ],
  },
  "Developer Setup: VS Code and Terminal": {
    title: "Prepare the local workspace",
    description: "Install VS Code, open the project folder, and confirm the terminal is ready.",
    tasks: [
      "Open the project folder in VS Code.",
      "Open Terminal > New Terminal.",
      "Confirm the file explorer, search, source control, and terminal panels are visible.",
    ],
  },
  "Install Node, npm, Git, and Shopify CLI": {
    title: "Run version checks",
    description: "Confirm the machine has the required command-line tools before theme work starts.",
    tasks: [
      "Run node -v and confirm Node.js is 20.10 or higher.",
      "Run npm -v and git --version.",
      "Run shopify version after installing Shopify CLI.",
    ],
  },
  "Shopify CLI Theme Workflow": {
    title: "Preview a theme safely",
    description: "Use Shopify CLI to connect to the training store and preview a local theme.",
    tasks: [
      "Run shopify theme info to confirm the store context.",
      "Run shopify theme dev --store knb-tutorial from the theme folder.",
      "Use the preview link for testing before pushing anything.",
    ],
  },
  "Theme Project Files and npm Install": {
    title: "Inspect the project structure",
    description: "Understand theme folders and install package dependencies only when package.json exists.",
    tasks: [
      "Find package.json before running npm install.",
      "Identify sections, snippets, templates, layout, config, and assets.",
      "Explain whether npm run dev or shopify theme dev should be used for the current project.",
    ],
  },
  "Developer Troubleshooting Checklist": {
    title: "Diagnose before changing code",
    description: "Use a consistent checklist for setup and CLI problems.",
    tasks: [
      "Check folder path and command spelling.",
      "Check tool versions and Shopify login.",
      "Copy the exact terminal error before escalating.",
    ],
  },
  "GitHub Access and GitHub Desktop Setup": {
    title: "Confirm access before GitHub work",
    description: "Ask the supervisor for the correct GitHub access details before signing in or cloning repositories.",
    tasks: [
      "Ask which GitHub account should be used.",
      "Ask which repository and branch are assigned.",
      "Confirm password, 2FA, or permission help before starting.",
    ],
  },
  "GitHub Desktop Daily Workflow": {
    title: "Practice the GitHub Desktop flow",
    description: "Use GitHub Desktop to sync, review, commit, and push work without touching unapproved branches.",
    tasks: [
      "Fetch and pull before editing.",
      "Commit only the files related to the assigned task.",
      "Push and notify the supervisor for review.",
    ],
  },
  "BEM Naming Basics": {
    title: "Rename classes into BEM",
    description: "Practice turning vague CSS names into block, element, and modifier names.",
    tasks: [
      "Choose one UI component as the block.",
      "List its elements using block__element.",
      "Add one modifier using block--modifier or block__element--modifier.",
    ],
  },
  "BEM Medium: Components and States": {
    title: "Build a component naming map",
    description: "Map a realistic component before writing CSS so naming stays clean.",
    tasks: [
      "Create a product card BEM map.",
      "Add active, featured, or disabled states.",
      "Check that no class uses element-of-element naming.",
    ],
  },
  "SCSS Basics: Nesting, Variables, and Ampersand": {
    title: "Write BEM with SCSS",
    description: "Use SCSS nesting and ampersand patterns to generate clear BEM selectors.",
    tasks: [
      "Write a block with &__element.",
      "Add &--modifier and &__element--modifier.",
      "Explain the compiled CSS selectors.",
    ],
  },
  "Pro SCSS: Architecture and Review Rules": {
    title: "Review SCSS like production code",
    description: "Check architecture, specificity, duplication, and compiled CSS output before approval.",
    tasks: [
      "Place styles in the correct SCSS partial.",
      "Use tokens or mixins only when they reduce repeated work.",
      "Review compiled CSS and remove unnecessary nesting.",
    ],
  },
};

const dashboardSteps = [
  {
    title: "First, open the tutorial store",
    label: "Store access",
    description: "Go to the KNB tutorial store and enter the password. This is the practice site.",
    imageTitle: "Store password screen",
    imageHint: "Placeholder: add a screenshot of the password page here later.",
    nav: "Open store",
    action: "Open tutorial store",
    url: TRAINING_STORE_URL,
    tryTasks: ["Open the store link.", "Enter password: charol.", "Keep this tab open for practice."],
    example: "Example: this is the customer-facing practice store, not the Shopify admin.",
    mistake: "Do not confuse the storefront password with your Shopify staff login.",
    question: "What password opens the storefront?",
    answers: ["charol", "admin", "shopify"],
    correct: "charol",
  },
  {
    title: "Home",
    label: "Dashboard navigation",
    description: "Home shows setup reminders, alerts, and quick store activity.",
    imageTitle: "Home dashboard",
    imageHint: "Placeholder: screenshot of Shopify Home.",
    image: "assets/shopify-home-dashboard.png",
    nav: "Home",
    action: "Open Home in Shopify admin",
    url: TRAINING_STORE_ADMIN_URL,
    tryTasks: ["Open Home.", "Look for setup cards.", "Find one store alert or recommendation."],
    example: "Example: use Home when you want a quick status check before doing store work.",
    mistake: "Do not start changing settings from Home. Use it for orientation first.",
    question: "Home is mainly for...",
    answers: ["Setup prompts and alerts", "Product prices", "Discount codes"],
    correct: "Setup prompts and alerts",
  },
  {
    title: "Orders",
    label: "Dashboard navigation",
    description: "Orders is where you check purchases, payment status, fulfillment, and refunds.",
    imageTitle: "Orders page",
    imageHint: "Placeholder: screenshot of Orders.",
    nav: "Orders",
    action: "Open Orders in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/orders`,
    tryTasks: ["Open Orders.", "Find order views or filters.", "Look for payment and fulfillment columns."],
    example: "Example: if a customer asks about a purchase, start in Orders.",
    mistake: "Do not refund, cancel, or fulfill orders unless assigned by a trainer.",
    question: "Orders is where you check...",
    answers: ["Purchases and fulfillment", "Theme colors", "Store files"],
    correct: "Purchases and fulfillment",
  },
  {
    title: "Products",
    label: "Dashboard navigation",
    description: "Products is where you add items, prices, images, inventory, variants, and collections.",
    imageTitle: "Products page",
    imageHint: "Placeholder: screenshot of Products.",
    nav: "Products",
    action: "Open Products in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/products`,
    tryTasks: ["Open Products.", "Find Add product.", "Look for product status, price, and inventory."],
    example: "Example: use Products to create a draft item before it appears on the store.",
    mistake: "Keep practice products as Draft unless the trainer says to publish.",
    question: "Products is for...",
    answers: ["Items, prices, inventory", "Customer emails", "Sales reports"],
    correct: "Items, prices, inventory",
  },
  {
    title: "Customers",
    label: "Dashboard navigation",
    description: "Customers shows buyer profiles, order history, tags, and segments.",
    imageTitle: "Customers page",
    imageHint: "Placeholder: screenshot of Customers.",
    nav: "Customers",
    action: "Open Customers in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/customers`,
    tryTasks: ["Open Customers.", "Find customer search.", "Look for tags or segments."],
    example: "Example: use Customers to review a buyer profile and past orders.",
    mistake: "Do not edit customer data during the tour.",
    question: "Customers shows...",
    answers: ["Buyer profiles", "Theme sections", "Shipping rates"],
    correct: "Buyer profiles",
  },
  {
    title: "Content",
    label: "Dashboard navigation",
    description: "Content is for files and reusable store content.",
    imageTitle: "Content area",
    imageHint: "Placeholder: screenshot of Content or Files.",
    nav: "Content",
    action: "Open Content in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/content`,
    tryTasks: ["Open Content.", "Find files or content items.", "Look for where reusable assets live."],
    example: "Example: upload brand assets here only when assigned.",
    mistake: "Do not delete files. They may be used by pages or themes.",
    question: "Content is commonly used for...",
    answers: ["Files and reusable content", "Refunds", "Checkout payment capture"],
    correct: "Files and reusable content",
  },
  {
    title: "Analytics",
    label: "Dashboard navigation",
    description: "Analytics shows sales, sessions, conversion, and reports.",
    imageTitle: "Analytics dashboard",
    imageHint: "Placeholder: screenshot of Analytics.",
    nav: "Analytics",
    action: "Open Analytics in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/analytics`,
    tryTasks: ["Open Analytics.", "Find date range.", "Look for sales, sessions, and conversion metrics."],
    example: "Example: use Analytics to prepare a quick store performance summary.",
    mistake: "Do not judge performance from one metric only. Check date range first.",
    question: "Analytics helps you check...",
    answers: ["Sales and traffic", "Page content", "App permissions"],
    correct: "Sales and traffic",
  },
  {
    title: "Marketing",
    label: "Dashboard navigation",
    description: "Marketing is where campaigns and automations are reviewed.",
    imageTitle: "Marketing area",
    imageHint: "Placeholder: screenshot of Marketing.",
    nav: "Marketing",
    action: "Open Marketing in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/marketing`,
    tryTasks: ["Open Marketing.", "Find campaigns.", "Look for automations if available."],
    example: "Example: marketing campaigns and email flows are reviewed here.",
    mistake: "Do not launch campaigns without approval.",
    question: "Marketing is for...",
    answers: ["Campaigns and automations", "Tax settings", "Order refunds"],
    correct: "Campaigns and automations",
  },
  {
    title: "Discounts",
    label: "Dashboard navigation",
    description: "Discounts is where promo codes and automatic discounts are created.",
    imageTitle: "Discounts page",
    imageHint: "Placeholder: screenshot of Discounts.",
    nav: "Discounts",
    action: "Open Discounts in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/discounts`,
    tryTasks: ["Open Discounts.", "Find code discount.", "Find automatic discount."],
    example: "Example: create WELCOME10 here when assigned a promo task.",
    mistake: "Always test discounts before sharing them with customers.",
    question: "Discounts is where you create...",
    answers: ["Promo codes", "Product images", "Customer addresses"],
    correct: "Promo codes",
  },
  {
    title: "Online Store",
    label: "Dashboard navigation",
    description: "Online Store is where themes, pages, navigation, and blog posts live.",
    imageTitle: "Online Store menu",
    imageHint: "Placeholder: screenshot of Online Store navigation.",
    nav: "Online Store",
    action: "Open Online Store themes",
    url: `${TRAINING_STORE_ADMIN_URL}/themes`,
    tryTasks: ["Open Online Store.", "Find Themes.", "Look for Pages and Navigation."],
    example: "Example: use Online Store to edit themes, pages, menus, and blog content.",
    mistake: "Do not publish a new theme without trainer approval.",
    question: "Online Store includes...",
    answers: ["Themes and pages", "Payment payouts", "Customer passwords"],
    correct: "Themes and pages",
  },
  {
    title: "Apps",
    label: "Dashboard navigation",
    description: "Apps shows installed Shopify apps. Beginners should not install apps without approval.",
    imageTitle: "Apps page",
    imageHint: "Placeholder: screenshot of Apps.",
    nav: "Apps",
    action: "Open Apps in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/apps`,
    tryTasks: ["Open Apps.", "View installed apps.", "Do not install anything yet."],
    example: "Example: apps add extra features like reviews, subscriptions, or email tools.",
    mistake: "Do not install or remove apps without approval.",
    question: "Apps should be changed...",
    answers: ["Only with approval", "Anytime", "Before checking products"],
    correct: "Only with approval",
  },
  {
    title: "Settings",
    label: "Dashboard navigation",
    description: "Settings controls payments, shipping, taxes, domains, checkout, users, and notifications.",
    imageTitle: "Settings page",
    imageHint: "Placeholder: screenshot of Settings.",
    nav: "Settings",
    action: "Open Settings in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/settings`,
    tryTasks: ["Open Settings.", "Find Payments.", "Find Shipping, Checkout, Users, and Domains."],
    example: "Example: Settings controls the store foundation and should be handled carefully.",
    mistake: "Do not change payments, domains, taxes, or users during beginner training.",
    question: "Settings controls...",
    answers: ["Payments and shipping", "Product photos only", "Blog comments only"],
    correct: "Payments and shipping",
  },
];

const setupSteps = [
  {
    title: "Store details",
    label: "Store foundation",
    description: "Find the store profile area and identify the store name, legal business details, timezone, and currency.",
    imageTitle: "Store details screen",
    imageHint: "Placeholder: add a Settings > Store details screenshot later.",
    nav: "Store details",
    action: "Open Store details",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/general`,
    tryTasks: ["Open Settings.", "Find Store details.", "Identify store name, timezone, and currency."],
    example: "Example: use Store details to confirm the store profile before starting client setup work.",
    mistake: "Do not change business address, currency, or legal details without approval.",
    question: "Store details is mainly for...",
    answers: ["Store profile basics", "Theme sections", "Discount rules"],
    correct: "Store profile basics",
  },
  {
    title: "Users and permissions",
    label: "Staff access",
    description: "Find where staff accounts and permissions are managed. Beginners should inspect only.",
    imageTitle: "Users and permissions",
    imageHint: "Placeholder: add a staff access screenshot later.",
    nav: "Staff access",
    action: "Open Users and permissions",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/account`,
    tryTasks: ["Open Users and permissions.", "Find staff list.", "Notice where permission groups live."],
    example: "Example: staff access controls who can enter the Shopify admin.",
    mistake: "Do not invite, remove, or change staff permissions during beginner training.",
    question: "Staff access controls...",
    answers: ["Who can use the admin", "Product image sizes", "Homepage banners"],
    correct: "Who can use the admin",
  },
  {
    title: "Billing awareness",
    label: "Billing",
    description: "Know where billing lives and why trainees should not change plans, payment methods, or invoices.",
    imageTitle: "Billing area",
    imageHint: "Placeholder: add a billing screenshot later.",
    nav: "Billing",
    action: "Open Billing",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/billing`,
    tryTasks: ["Find Billing in Settings.", "Identify plan and payment areas.", "Leave everything unchanged."],
    example: "Example: billing is reviewed by owners or approved managers, not beginner trainees.",
    mistake: "Do not change plan, payment method, or billing contact.",
    question: "Billing should be changed...",
    answers: ["Only by approved people", "By every trainee", "Before adding products"],
    correct: "Only by approved people",
  },
  {
    title: "Sales channel check",
    label: "Online Store",
    description: "Confirm the Online Store sales channel exists because themes, pages, and navigation depend on it.",
    imageTitle: "Online Store sales channel",
    imageHint: "Placeholder: add an Online Store channel screenshot later.",
    nav: "Sales channel",
    action: "Open Online Store",
    url: `${TRAINING_STORE_ADMIN_URL}/themes`,
    tryTasks: ["Find Sales channels.", "Open Online Store.", "Find Themes, Pages, and Navigation."],
    example: "Example: Online Store is the channel for storefront design and content.",
    mistake: "Do not remove sales channels from a training or client store.",
    question: "Online Store is needed for...",
    answers: ["Themes and pages", "Staff passwords", "Tax invoices only"],
    correct: "Themes and pages",
  },
  {
    title: "Approved app rule",
    label: "Apps",
    description: "Learn the rule for apps: install only when the workflow and approval are clear.",
    imageTitle: "Apps area",
    imageHint: "Placeholder: add an Apps screenshot later.",
    nav: "Apps rule",
    action: "Open Apps",
    url: `${TRAINING_STORE_ADMIN_URL}/apps`,
    tryTasks: ["Open Apps.", "Review installed apps.", "Do not install or remove anything."],
    example: "Example: apps can affect theme speed, billing, checkout, and customer data.",
    mistake: "Do not test random apps in a shared training store.",
    question: "Apps should be installed...",
    answers: ["Only after approval", "Whenever curious", "Before checking settings"],
    correct: "Only after approval",
  },
  {
    title: "Setup review",
    label: "Review",
    description: "Finish by naming the areas that are safe to inspect and the areas that require trainer approval.",
    imageTitle: "Setup review",
    imageHint: "Placeholder: add a setup checklist screenshot later.",
    nav: "Review",
    action: "Open Settings",
    url: `${TRAINING_STORE_ADMIN_URL}/settings`,
    tryTasks: ["Name three setup areas.", "Name two areas you should not change.", "Tell the trainer when the review is done."],
    example: "Example: safe beginner setup work starts with identifying areas, not changing live settings.",
    mistake: "Do not treat setup as a checklist to edit without instructions.",
    question: "The beginner setup goal is...",
    answers: ["Know where setup areas live", "Change billing quickly", "Install many apps"],
    correct: "Know where setup areas live",
  },
];

const pagesSteps = [
  {
    title: "Open Pages",
    label: "Pages",
    description: "Go to the Pages area so the trainee knows where standard store pages are created and edited.",
    imageTitle: "Pages list",
    imageHint: "Placeholder: add an Online Store > Pages screenshot later.",
    nav: "Open Pages",
    action: "Open Pages in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/pages`,
    tryTasks: ["Open Online Store.", "Find Pages.", "Look for the page list and Add page button."],
    example: "Example: About, Contact, FAQ, and Policy-style pages are usually managed here.",
    mistake: "Do not edit live client page copy during the first practice run.",
    question: "Pages is mainly used for...",
    answers: ["Standard website pages", "Refunding orders", "Theme app embeds"],
    correct: "Standard website pages",
  },
  {
    title: "Add a practice page",
    label: "Create page",
    description: "Create a safe trainee page with a clear name so it can be found and removed later if needed.",
    imageTitle: "Add page editor",
    imageHint: "Placeholder: add an Add page screenshot later.",
    nav: "Add page",
    action: "Add a page",
    url: `${TRAINING_STORE_ADMIN_URL}/pages/new`,
    tryTasks: ["Click Add page.", "Use title: Practice Page - Your Name.", "Add two short paragraphs."],
    example: "Example: Practice Page - Angelo makes it obvious this is a training page.",
    mistake: "Do not use a vague page title like Test because it becomes hard to manage later.",
    question: "A good practice page title includes...",
    answers: ["Your name", "A random number only", "The word checkout"],
    correct: "Your name",
  },
  {
    title: "Set visibility",
    label: "Visibility",
    description: "Learn the difference between visible and hidden pages before saving beginner practice content.",
    imageTitle: "Page visibility control",
    imageHint: "Placeholder: add a page visibility screenshot later.",
    nav: "Visibility",
    action: "Open Pages",
    url: `${TRAINING_STORE_ADMIN_URL}/pages`,
    tryTasks: ["Find Visibility.", "Choose the trainer-approved setting.", "Keep practice pages hidden if unsure."],
    example: "Example: hidden pages can be saved without appearing to customers.",
    mistake: "Do not publish unfinished practice content to the storefront.",
    question: "If unsure, a practice page should be...",
    answers: ["Hidden", "Published immediately", "Deleted before saving"],
    correct: "Hidden",
  },
  {
    title: "Save and verify",
    label: "Save",
    description: "Save the page and confirm it appears in the admin page list.",
    imageTitle: "Saved page",
    imageHint: "Placeholder: add a saved page screenshot later.",
    nav: "Save",
    action: "Open Pages",
    url: `${TRAINING_STORE_ADMIN_URL}/pages`,
    tryTasks: ["Click Save.", "Return to the Pages list.", "Find your practice page by title."],
    example: "Example: verification means checking the page exists after saving, not guessing.",
    mistake: "Do not assume a page is saved until the admin confirms it.",
    question: "After saving, verify the page by...",
    answers: ["Finding it in the list", "Closing the browser", "Changing theme colors"],
    correct: "Finding it in the list",
  },
  {
    title: "Navigation awareness",
    label: "Menus",
    description: "Understand that a saved page does not always appear in the storefront menu until it is linked.",
    imageTitle: "Navigation menu",
    imageHint: "Placeholder: add a Navigation screenshot later.",
    nav: "Menus",
    action: "Open Navigation",
    url: `${TRAINING_STORE_ADMIN_URL}/menus`,
    tryTasks: ["Open Navigation or Menus.", "Find Main menu.", "Identify where a page link would be added."],
    example: "Example: a Contact page usually appears in header or footer navigation only after adding a menu link.",
    mistake: "Do not add training pages to a live menu unless the trainer approves.",
    question: "A saved page appears in a menu when...",
    answers: ["A menu link is added", "It has two paragraphs", "The title is long"],
    correct: "A menu link is added",
  },
];

const themeSteps = [
  {
    title: "Open Themes",
    label: "Themes",
    description: "Find the Themes area where the active Shopify theme and theme library live.",
    imageTitle: "Themes page",
    imageHint: "Placeholder: add an Online Store > Themes screenshot later.",
    nav: "Themes",
    action: "Open Themes",
    url: `${TRAINING_STORE_ADMIN_URL}/themes`,
    tryTasks: ["Open Online Store.", "Open Themes.", "Identify the active theme."],
    example: "Example: the active theme is what customers currently see.",
    mistake: "Do not publish a different theme during beginner training.",
    question: "The active theme is...",
    answers: ["What customers see", "Only a draft page", "A discount setting"],
    correct: "What customers see",
  },
  {
    title: "Open the customizer",
    label: "Customize",
    description: "Open the theme editor from the active theme so the trainee sees the actual customization workspace.",
    imageTitle: "Theme customizer",
    imageHint: "Placeholder: add a customizer screenshot later.",
    nav: "Customizer",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Find Customize or Edit theme.", "Open the editor.", "Wait for the preview to load."],
    example: "Example: the customizer lets you edit sections, blocks, theme settings, and preview layout.",
    mistake: "Do not save random visual changes while exploring.",
    question: "The customizer is used to edit...",
    answers: ["Theme sections and settings", "Staff permissions", "Order refunds"],
    correct: "Theme sections and settings",
  },
  {
    title: "Find templates",
    label: "Templates",
    description: "Use the top template selector to understand whether you are editing Home, Product, Collection, or Page templates.",
    imageTitle: "Template selector",
    imageHint: "Placeholder: add a template selector screenshot later.",
    nav: "Templates",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Find the template selector.", "Switch to Home page if assigned.", "Notice which template is currently open."],
    example: "Example: changing a product template can affect many products using that template.",
    mistake: "Do not edit the wrong template because it can affect more pages than expected.",
    question: "The template selector helps you choose...",
    answers: ["Which page type to edit", "Which staff user to invite", "Which refund to send"],
    correct: "Which page type to edit",
  },
  {
    title: "Sections and blocks",
    label: "Sections",
    description: "Click sections and blocks to see how Shopify breaks the page into editable pieces.",
    imageTitle: "Sections and blocks",
    imageHint: "Placeholder: add a sections panel screenshot later.",
    nav: "Sections",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Click one section.", "Find its blocks.", "Identify text, image, and layout settings."],
    example: "Example: an image banner section can contain heading, text, buttons, and image settings.",
    mistake: "Do not delete blocks or sections unless the trainer asks.",
    question: "Sections and blocks control...",
    answers: ["Page content pieces", "Billing contact", "Order payment status"],
    correct: "Page content pieces",
  },
  {
    title: "Preview desktop and mobile",
    label: "Preview",
    description: "Use preview controls to check if content looks good on both desktop and mobile.",
    imageTitle: "Preview controls",
    imageHint: "Placeholder: add preview control screenshot later.",
    nav: "Preview",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Find desktop preview.", "Switch to mobile preview.", "Check if text and images still fit."],
    example: "Example: a hero that looks fine on desktop can be too tall on mobile.",
    mistake: "Do not approve a homepage edit without checking mobile.",
    question: "Before saving theme edits, check...",
    answers: ["Desktop and mobile", "Only desktop", "Only the billing page"],
    correct: "Desktop and mobile",
  },
  {
    title: "Save rule",
    label: "Save",
    description: "Understand when to save and when to exit without saving during training.",
    imageTitle: "Save button",
    imageHint: "Placeholder: add a Save button screenshot later.",
    nav: "Save rule",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Find the Save button.", "Ask trainer before saving.", "Exit without saving if this is only orientation."],
    example: "Example: saving is fine only when the task is assigned and reviewed.",
    mistake: "Do not save exploratory edits to the active theme.",
    question: "During orientation, saving should happen...",
    answers: ["Only with approval", "After every click", "Before checking mobile"],
    correct: "Only with approval",
  },
];

const productSteps = [
  {
    title: "Open Products",
    label: "Products",
    description: "Find where products are created and managed before adding anything.",
    imageTitle: "Products list",
    imageHint: "Placeholder: add a Products screenshot later.",
    nav: "Products",
    action: "Open Products",
    url: `${TRAINING_STORE_ADMIN_URL}/products`,
    tryTasks: ["Open Products.", "Find Add product.", "Look for product status and inventory columns."],
    example: "Example: Products is where store items, prices, and inventory are managed.",
    mistake: "Do not edit live products during first practice.",
    question: "Products controls...",
    answers: ["Items for sale", "Staff permissions", "Theme fonts"],
    correct: "Items for sale",
  },
  {
    title: "Create a draft product",
    label: "Draft item",
    description: "Use a clearly named draft product so practice work does not appear live.",
    imageTitle: "Add product",
    imageHint: "Placeholder: add an Add product screenshot later.",
    nav: "Draft",
    action: "Add product",
    url: `${TRAINING_STORE_ADMIN_URL}/products/new`,
    tryTasks: ["Click Add product.", "Use title: Training Product - Your Name.", "Set status to Draft."],
    example: "Example: Training Product - Angelo keeps practice work easy to find.",
    mistake: "Do not publish practice products without approval.",
    question: "Practice products should start as...",
    answers: ["Draft", "Active", "Archived only"],
    correct: "Draft",
  },
  {
    title: "Price, media, inventory",
    label: "Details",
    description: "Identify where price, images, description, stock, SKU, and options are managed.",
    imageTitle: "Product details",
    imageHint: "Placeholder: add product details screenshot later.",
    nav: "Details",
    action: "Add product",
    url: `${TRAINING_STORE_ADMIN_URL}/products/new`,
    tryTasks: ["Find media upload.", "Find price and inventory.", "Find variants or options."],
    example: "Example: variants are used for options like size, color, or material.",
    mistake: "Do not guess inventory or pricing for real products.",
    question: "Variants are used for...",
    answers: ["Options like size/color", "Admin passwords", "Blog posts"],
    correct: "Options like size/color",
  },
  {
    title: "Collections",
    label: "Collections",
    description: "Find collections and understand how products are grouped for storefront browsing.",
    imageTitle: "Collections",
    imageHint: "Placeholder: add collections screenshot later.",
    nav: "Collections",
    action: "Open Collections",
    url: `${TRAINING_STORE_ADMIN_URL}/collections`,
    tryTasks: ["Open Collections.", "Find manual and automated collection areas.", "Identify where products are grouped."],
    example: "Example: New Arrivals and Best Sellers are common collections.",
    mistake: "Do not add practice products to live collections unless assigned.",
    question: "Collections are...",
    answers: ["Groups of products", "Payment settings", "Theme fonts"],
    correct: "Groups of products",
  },
];

const navigationSteps = [
  {
    title: "Open menus",
    label: "Menus",
    description: "Find where main menu and footer menu links are edited.",
    imageTitle: "Navigation menus",
    imageHint: "Placeholder: add menus screenshot later.",
    nav: "Menus",
    action: "Open Navigation",
    url: `${TRAINING_STORE_ADMIN_URL}/menus`,
    tryTasks: ["Open Online Store.", "Find Navigation or Menus.", "Open Main menu."],
    example: "Example: header links are usually controlled by Main menu.",
    mistake: "Do not change live navigation without review.",
    question: "Main menu usually controls...",
    answers: ["Header links", "Billing plan", "Inventory count"],
    correct: "Header links",
  },
  {
    title: "Add a menu item",
    label: "Add link",
    description: "Learn the pattern: name the link, choose a destination, then save.",
    imageTitle: "Add menu item",
    imageHint: "Placeholder: add menu item screenshot later.",
    nav: "Add link",
    action: "Open Navigation",
    url: `${TRAINING_STORE_ADMIN_URL}/menus`,
    tryTasks: ["Click Add menu item.", "Name the link clearly.", "Choose page, product, collection, or URL."],
    example: "Example: Contact should link to the Contact page, not a random URL.",
    mistake: "Do not add duplicate menu labels.",
    question: "A menu item needs...",
    answers: ["Name and destination", "SKU and inventory", "Theme code"],
    correct: "Name and destination",
  },
  {
    title: "Verify and footer links",
    label: "Verify",
    description: "Test links on the storefront and know that policies often belong in the footer.",
    imageTitle: "Storefront navigation",
    imageHint: "Placeholder: add storefront menu screenshot later.",
    nav: "Verify",
    action: "Open tutorial store",
    url: TRAINING_STORE_URL,
    tryTasks: ["Open storefront.", "Click the menu link.", "Review footer policy links."],
    example: "Example: a menu save is not complete until the link works on the storefront.",
    mistake: "Do not remove legal or policy links.",
    question: "After saving a menu, you should...",
    answers: ["Test the link", "Change billing", "Delete the page"],
    correct: "Test the link",
  },
];

const launchSteps = [
  {
    title: "Payments",
    label: "Payments",
    description: "Find payment settings and understand they are high-risk.",
    imageTitle: "Payments settings",
    imageHint: "Placeholder: add payment settings screenshot later.",
    nav: "Payments",
    action: "Open Payments",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/payments`,
    tryTasks: ["Open Settings.", "Find Payments.", "Do not activate or change providers."],
    example: "Example: payment setup affects real customer checkout.",
    mistake: "Do not change payment providers during beginner training.",
    question: "Payments should be changed...",
    answers: ["Only with approval", "Before every product", "By any trainee"],
    correct: "Only with approval",
  },
  {
    title: "Shipping, tax, checkout",
    label: "Core settings",
    description: "Find shipping, tax, and checkout settings before launch review.",
    imageTitle: "Launch settings",
    imageHint: "Placeholder: add launch settings screenshot later.",
    nav: "Core",
    action: "Open Settings",
    url: `${TRAINING_STORE_ADMIN_URL}/settings`,
    tryTasks: ["Find Shipping and delivery.", "Find Taxes and duties.", "Find Checkout."],
    example: "Example: wrong rates or checkout rules can block orders or charge customers incorrectly.",
    mistake: "Do not guess shipping, tax, or checkout rules.",
    question: "Shipping and tax settings affect...",
    answers: ["Checkout charges", "Theme sections", "Staff avatars"],
    correct: "Checkout charges",
  },
  {
    title: "Domains and password",
    label: "Domains",
    description: "Find domains and storefront password settings before launch.",
    imageTitle: "Domains and password",
    imageHint: "Placeholder: add domains/password screenshot later.",
    nav: "Domains",
    action: "Open Domains",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/domains`,
    tryTasks: ["Find Domains.", "Find storefront password setting.", "Do not remove password until approved."],
    example: "Example: removing the password can make the store public.",
    mistake: "Do not launch the store by accident.",
    question: "Removing the storefront password can...",
    answers: ["Make store public", "Create products", "Invite staff"],
    correct: "Make store public",
  },
  {
    title: "Notifications review",
    label: "Notifications",
    description: "Find customer email notifications and understand they are part of launch QA.",
    imageTitle: "Notifications",
    imageHint: "Placeholder: add notifications screenshot later.",
    nav: "Notifications",
    action: "Open Notifications",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/notifications`,
    tryTasks: ["Open Notifications.", "Find order confirmation.", "Do not edit templates without approval."],
    example: "Example: notification emails should match brand and order workflow.",
    mistake: "Do not edit email templates casually.",
    question: "Notifications are mainly...",
    answers: ["Customer/store emails", "Theme blocks", "Collection filters"],
    correct: "Customer/store emails",
  },
];

const devSetupSteps = [
  {
    title: "Install Visual Studio Code",
    label: "Editor",
    description: "VS Code is the editor trainees will use to open folders, edit theme files, and run terminal commands.",
    imageTitle: "VS Code installer",
    imageHint: "Placeholder: add a screenshot of the VS Code download or welcome screen.",
    nav: "VS Code",
    action: "Open VS Code website",
    url: "https://code.visualstudio.com/",
    tryTasks: ["Install VS Code.", "Open VS Code.", "Find Explorer, Search, Source Control, and Terminal."],
    example: "Example: VS Code is where you edit theme files like sections, snippets, templates, CSS, and JavaScript.",
    mistake: "Do not edit theme files in random text editors when the team workflow expects VS Code.",
    question: "VS Code is mainly used for...",
    answers: ["Editing project files", "Receiving Shopify payments", "Creating discounts"],
    correct: "Editing project files",
  },
  {
    title: "Open the project folder",
    label: "Folder",
    description: "Open the full project folder so VS Code can see package files, theme folders, Git, and terminal context.",
    imageTitle: "Open folder",
    imageHint: "Placeholder: add a screenshot of File > Open Folder in VS Code.",
    nav: "Open folder",
    action: "Open VS Code docs",
    url: "https://code.visualstudio.com/docs",
    tryTasks: ["Use File > Open Folder.", "Choose the theme or training project folder.", "Confirm files appear in Explorer."],
    example: "Example: opening the folder lets npm, Git, and Shopify CLI run from the right location.",
    mistake: "Do not open only index.html or one Liquid file when working on a full project.",
    question: "For project work, open...",
    answers: ["The full folder", "Only one file", "Only the browser"],
    correct: "The full folder",
  },
  {
    title: "Use the integrated terminal",
    label: "Terminal",
    description: "The integrated terminal lets trainees run npm, Git, and Shopify CLI commands without leaving VS Code.",
    imageTitle: "VS Code terminal",
    imageHint: "Placeholder: add a screenshot of Terminal > New Terminal.",
    nav: "Terminal",
    action: "Open VS Code terminal docs",
    url: "https://code.visualstudio.com/docs/terminal/basics",
    tryTasks: ["Open Terminal > New Terminal.", "Run pwd or cd to confirm folder.", "Keep the terminal open for setup checks."],
    example: "Example: run node -v, npm -v, git --version, and shopify version here.",
    mistake: "Do not run commands from the wrong folder and assume the project is broken.",
    question: "The terminal is where you run...",
    answers: ["Commands", "Customer refunds", "Theme colors only"],
    correct: "Commands",
  },
  {
    title: "Install useful extensions",
    label: "Extensions",
    description: "Use approved extensions for Liquid, formatting, linting, and Git visibility.",
    imageTitle: "VS Code extensions",
    imageHint: "Placeholder: add a screenshot of the Extensions panel.",
    nav: "Extensions",
    action: "Open Shopify Liquid extension",
    url: "https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode",
    tryTasks: ["Open Extensions.", "Search for Shopify Liquid or Theme Check.", "Install only approved team extensions."],
    example: "Example: Shopify Liquid support helps with theme syntax and theme checks.",
    mistake: "Do not install many random extensions on a trainee machine.",
    question: "Extensions should be installed...",
    answers: ["Only when approved", "Randomly", "Before opening VS Code"],
    correct: "Only when approved",
  },
  {
    title: "Confirm the workspace",
    label: "Ready",
    description: "Finish by confirming the trainee can navigate files, search code, open terminal, and find source control.",
    imageTitle: "Workspace ready",
    imageHint: "Placeholder: add a screenshot of a ready VS Code workspace.",
    nav: "Ready",
    action: "Open VS Code",
    url: "https://code.visualstudio.com/",
    tryTasks: ["Find a file from Explorer.", "Search for a word in the project.", "Open Source Control and Terminal."],
    example: "Example: the trainee is ready when they can move around the workspace without guessing.",
    mistake: "Do not start Shopify CLI until folder and terminal basics are clear.",
    question: "Before code work, the trainee should know...",
    answers: ["Files, search, terminal, source control", "Only the browser", "Only product pages"],
    correct: "Files, search, terminal, source control",
  },
];

const cliInstallSteps = [
  {
    title: "Install Node.js",
    label: "Node",
    description: "Shopify CLI requires Node.js 20.10 or higher, so start by installing or checking Node.",
    imageTitle: "Node.js version check",
    imageHint: "Placeholder: add a screenshot of node -v in terminal.",
    nav: "Node.js",
    action: "Open Node.js",
    url: "https://nodejs.org/",
    tryTasks: ["Install Node.js.", "Run node -v.", "Confirm the version is 20.10 or higher."],
    example: "Example: node -v should show a version such as v20.10.0 or newer.",
    mistake: "Do not troubleshoot Shopify CLI before checking the Node version.",
    question: "Shopify CLI currently needs Node.js...",
    answers: ["20.10 or higher", "10 or lower", "Only Ruby"],
    correct: "20.10 or higher",
  },
  {
    title: "Confirm npm",
    label: "npm",
    description: "npm usually installs with Node.js and is used to install packages and the Shopify CLI.",
    imageTitle: "npm version check",
    imageHint: "Placeholder: add a screenshot of npm -v.",
    nav: "npm",
    action: "Open npm",
    url: "https://www.npmjs.com/",
    tryTasks: ["Run npm -v.", "Confirm a version prints.", "Use npm for this training unless the project specifies pnpm or yarn."],
    example: "Example: npm install installs project dependencies when package.json exists.",
    mistake: "Do not run npm install in a folder that has no package.json.",
    question: "npm is used to...",
    answers: ["Install packages", "Edit Shopify orders", "Set tax rates"],
    correct: "Install packages",
  },
  {
    title: "Install Git",
    label: "Git",
    description: "Git is required for Shopify CLI and is also how the team tracks theme code changes.",
    imageTitle: "Git version check",
    imageHint: "Placeholder: add a screenshot of git --version.",
    nav: "Git",
    action: "Open Git",
    url: "https://git-scm.com/",
    tryTasks: ["Install Git.", "Run git --version.", "Confirm the version is 2.28 or higher."],
    example: "Example: Git helps the team review and recover code changes.",
    mistake: "Do not edit production theme code without a Git workflow.",
    question: "Git is used for...",
    answers: ["Tracking code changes", "Charging customers", "Writing product prices"],
    correct: "Tracking code changes",
  },
  {
    title: "Install Shopify CLI",
    label: "Shopify CLI",
    description: "Install Shopify CLI globally so the shopify command works from the terminal.",
    imageTitle: "Shopify CLI install",
    imageHint: "Placeholder: add a screenshot of npm install -g @shopify/cli@latest.",
    nav: "Install CLI",
    action: "Open Shopify CLI docs",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Run npm install -g @shopify/cli@latest.", "Run shopify version.", "Run shopify help."],
    example: "Example command: npm install -g @shopify/cli@latest",
    mistake: "Do not use old package names like shopify-cli for modern Shopify CLI training.",
    question: "The current npm install command is...",
    answers: ["npm install -g @shopify/cli@latest", "npm install -g shopify-cli", "ruby install shopify"],
    correct: "npm install -g @shopify/cli@latest",
  },
  {
    title: "Ruby note",
    label: "Ruby",
    description: "Ruby is not part of the current Shopify CLI requirements for modern theme training unless a specific old project needs it.",
    imageTitle: "Legacy tool note",
    imageHint: "Placeholder: add a simple internal note screenshot if needed.",
    nav: "Ruby note",
    action: "Open Shopify CLI requirements",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Explain why Ruby is optional here.", "Check the actual project requirements.", "Do not install extra tools without a reason."],
    example: "Example: include Ruby only if the theme or legacy tooling clearly asks for it.",
    mistake: "Do not make trainees install Ruby just because older Shopify tutorials mention it.",
    question: "For this modern Shopify CLI track, Ruby is...",
    answers: ["Optional unless project needs it", "Always required", "A replacement for npm"],
    correct: "Optional unless project needs it",
  },
  {
    title: "Final version check",
    label: "Verify",
    description: "Before theme work, confirm every required tool responds correctly in terminal.",
    imageTitle: "Version checklist",
    imageHint: "Placeholder: add a screenshot showing node, npm, git, and shopify versions.",
    nav: "Verify",
    action: "Open Shopify CLI docs",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Run node -v.", "Run npm -v and git --version.", "Run shopify version."],
    example: "Example: version checks save time before troubleshooting project commands.",
    mistake: "Do not continue if a required command says command not found.",
    question: "If shopify says command not found, first check...",
    answers: ["CLI install and terminal path", "Product price", "Theme colors"],
    correct: "CLI install and terminal path",
  },
];

const cliWorkflowSteps = [
  {
    title: "Connect to the store",
    label: "Store",
    description: "Run Shopify CLI commands with the correct store so previews and pulls use the right Shopify admin.",
    imageTitle: "Store connection",
    imageHint: "Placeholder: add a screenshot of shopify theme dev --store knb-tutorial.",
    nav: "Connect",
    action: "Open Shopify theme CLI docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Open terminal in the theme folder.", "Run shopify theme dev --store knb-tutorial.", "Log in when prompted."],
    example: "Example command: shopify theme dev --store knb-tutorial",
    mistake: "Do not connect to a client store when practicing with the tutorial store.",
    question: "The --store flag selects...",
    answers: ["Which Shopify store to use", "Which CSS file to edit", "Which VS Code theme to use"],
    correct: "Which Shopify store to use",
  },
  {
    title: "Preview with theme dev",
    label: "theme dev",
    description: "theme dev previews local changes as a development theme so trainees can test before pushing.",
    imageTitle: "Development theme preview",
    imageHint: "Placeholder: add a screenshot of theme dev preview output.",
    nav: "Preview",
    action: "Open theme dev docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-dev",
    tryTasks: ["Run shopify theme dev.", "Open the preview URL.", "Make a small assigned change and watch the preview refresh."],
    example: "Example: use theme dev for local preview and hot reload during theme editing.",
    mistake: "Do not assume theme dev publishes work to the live theme.",
    question: "theme dev is mainly for...",
    answers: ["Previewing local work", "Publishing live immediately", "Creating customer accounts"],
    correct: "Previewing local work",
  },
  {
    title: "Pull before editing",
    label: "theme pull",
    description: "theme pull downloads theme files from Shopify so local files match the selected remote theme.",
    imageTitle: "Theme pull",
    imageHint: "Placeholder: add a screenshot of shopify theme pull.",
    nav: "Pull",
    action: "Open theme pull docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-pull",
    tryTasks: ["Run shopify theme list if needed.", "Run shopify theme pull for the assigned theme.", "Review changed files before editing."],
    example: "Example: pull first when starting from an existing Shopify theme.",
    mistake: "Do not pull over local edits without checking what will change.",
    question: "theme pull moves files...",
    answers: ["From Shopify to local", "From local to Shopify", "From customer emails to products"],
    correct: "From Shopify to local",
  },
  {
    title: "Check theme code",
    label: "theme check",
    description: "theme check reviews Liquid and theme code for issues before review or push.",
    imageTitle: "Theme check",
    imageHint: "Placeholder: add a screenshot of shopify theme check.",
    nav: "Check",
    action: "Open theme check docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-check",
    tryTasks: ["Run shopify theme check.", "Read any warnings.", "Fix assigned issues before pushing."],
    example: "Example: run checks before asking for review.",
    mistake: "Do not ignore errors just because the preview seems to load.",
    question: "theme check helps find...",
    answers: ["Theme code issues", "Billing errors", "Customer refunds"],
    correct: "Theme code issues",
  },
  {
    title: "Push after review",
    label: "theme push",
    description: "theme push uploads local theme files to Shopify and should be used carefully after review.",
    imageTitle: "Theme push",
    imageHint: "Placeholder: add a screenshot of shopify theme push.",
    nav: "Push",
    action: "Open theme push docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-push",
    tryTasks: ["Confirm the target theme.", "Run theme check first.", "Push only after trainer approval."],
    example: "Example: push to an unpublished theme for review before affecting live storefront work.",
    mistake: "Do not push to the live theme by accident.",
    question: "theme push moves files...",
    answers: ["From local to Shopify", "From Shopify to local", "From analytics to discounts"],
    correct: "From local to Shopify",
  },
  {
    title: "Useful orientation commands",
    label: "Info",
    description: "Use list, info, and open to understand the current theme environment.",
    imageTitle: "Theme info",
    imageHint: "Placeholder: add a screenshot of shopify theme info.",
    nav: "Info",
    action: "Open theme command reference",
    url: "https://shopify.dev/docs/api/shopify-cli/theme",
    tryTasks: ["Run shopify theme info.", "Run shopify theme list.", "Use shopify theme open when assigned."],
    example: "Example: theme info confirms which store and theme context the CLI is using.",
    mistake: "Do not guess the active store when the CLI can tell you.",
    question: "theme info helps confirm...",
    answers: ["Current theme environment", "Customer password", "Product inventory"],
    correct: "Current theme environment",
  },
  {
    title: "Logout and switch account",
    label: "Auth",
    description: "Use logout when Shopify CLI is connected to the wrong account or store context.",
    imageTitle: "Shopify auth logout",
    imageHint: "Placeholder: add a screenshot of shopify auth logout.",
    nav: "Auth",
    action: "Open Shopify CLI auth docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Know the command: shopify auth logout.", "Reconnect with the correct account.", "Confirm store permissions before retrying."],
    example: "Example: log out when the browser login is using the wrong Shopify account.",
    mistake: "Do not keep retrying with the wrong account and assume the CLI is broken.",
    question: "Use auth logout when...",
    answers: ["The wrong account is active", "A product has no image", "A page title is too long"],
    correct: "The wrong account is active",
  },
];

const projectFilesSteps = [
  {
    title: "Open the theme root",
    label: "Root",
    description: "Run Shopify CLI from the folder that contains the Shopify theme structure.",
    imageTitle: "Theme root folder",
    imageHint: "Placeholder: add a screenshot of the theme root in VS Code.",
    nav: "Theme root",
    action: "Open theme docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Find assets, config, layout, sections, snippets, and templates.", "Confirm package.json if the project has one.", "Open terminal at that folder."],
    example: "Example: CLI commands fail or behave oddly when run from the wrong folder.",
    mistake: "Do not run theme commands from Downloads or a parent folder by accident.",
    question: "Theme commands should run from...",
    answers: ["The theme folder", "Any random folder", "The Shopify admin page"],
    correct: "The theme folder",
  },
  {
    title: "Know the core folders",
    label: "Folders",
    description: "Understand what common Shopify theme folders contain before editing files.",
    imageTitle: "Theme folder structure",
    imageHint: "Placeholder: add a screenshot of theme folders.",
    nav: "Folders",
    action: "Open theme directory docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Find sections.", "Find snippets and templates.", "Find assets, layout, config, and locales."],
    example: "Example: sections are reusable page pieces; snippets are smaller reusable code parts.",
    mistake: "Do not edit unfamiliar files without understanding where they render.",
    question: "Sections are usually...",
    answers: ["Editable page pieces", "Customer records", "Payment providers"],
    correct: "Editable page pieces",
  },
  {
    title: "Run npm install",
    label: "npm install",
    description: "Run npm install only when the project has package.json and needs dependencies installed.",
    imageTitle: "npm install",
    imageHint: "Placeholder: add a screenshot of npm install.",
    nav: "Install",
    action: "Open npm docs",
    url: "https://docs.npmjs.com/cli/commands/npm-install",
    tryTasks: ["Find package.json.", "Run npm install.", "Wait for dependencies to finish installing."],
    example: "Example: npm install creates node_modules from package.json dependencies.",
    mistake: "Do not commit node_modules unless the project explicitly requires it.",
    question: "npm install reads...",
    answers: ["package.json", "Shopify orders", "Theme preview links"],
    correct: "package.json",
  },
  {
    title: "Understand npm scripts",
    label: "Scripts",
    description: "Some projects provide npm scripts for build tools. Use only the scripts listed in package.json.",
    imageTitle: "package.json scripts",
    imageHint: "Placeholder: add a screenshot of package.json scripts.",
    nav: "Scripts",
    action: "Open npm scripts docs",
    url: "https://docs.npmjs.com/cli/using-npm/scripts",
    tryTasks: ["Open package.json.", "Find the scripts section.", "Run npm run only for an existing script."],
    example: "Example: npm run dev may start a build tool if the project defines it.",
    mistake: "Do not assume every Shopify theme has npm run dev.",
    question: "npm run dev works only when...",
    answers: ["The project defines it", "Shopify admin is open", "The store has products"],
    correct: "The project defines it",
  },
  {
    title: "Separate npm from Shopify CLI",
    label: "Difference",
    description: "npm installs and runs project tooling. Shopify CLI connects the theme to Shopify for preview, pull, and push.",
    imageTitle: "npm versus Shopify CLI",
    imageHint: "Placeholder: add a simple workflow screenshot.",
    nav: "Difference",
    action: "Open Shopify CLI docs",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Explain npm install.", "Explain npm run dev.", "Explain shopify theme dev."],
    example: "Example: npm install prepares dependencies; shopify theme dev previews the theme with Shopify.",
    mistake: "Do not replace shopify theme dev with npm run dev unless the project workflow says so.",
    question: "shopify theme dev is for...",
    answers: ["Shopify theme preview", "Installing packages", "Creating Git commits"],
    correct: "Shopify theme preview",
  },
  {
    title: "Safe edit workflow",
    label: "Workflow",
    description: "Use a basic local workflow: pull or branch, install, preview, edit, check, review, then push.",
    imageTitle: "Safe workflow",
    imageHint: "Placeholder: add a workflow diagram screenshot later.",
    nav: "Workflow",
    action: "Open Shopify theme CLI docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Pull or confirm latest files.", "Preview locally.", "Run checks before review."],
    example: "Example: safe workflow reduces surprise changes to live Shopify themes.",
    mistake: "Do not edit and push without previewing and review.",
    question: "Before pushing, run...",
    answers: ["Preview and checks", "Billing setup", "Customer import"],
    correct: "Preview and checks",
  },
];

const devTroubleshootingSteps = [
  {
    title: "Check the folder first",
    label: "Folder",
    description: "Most beginner command problems start because the terminal is in the wrong directory.",
    imageTitle: "Current folder check",
    imageHint: "Placeholder: add a screenshot of pwd and folder path.",
    nav: "Folder",
    action: "Open VS Code terminal docs",
    url: "https://code.visualstudio.com/docs/terminal/basics",
    tryTasks: ["Run pwd on Mac/Linux or cd on Windows.", "Confirm the folder has theme files.", "Move to the correct folder if needed."],
    example: "Example: run ls or dir and check for sections, templates, and package.json.",
    mistake: "Do not reinstall tools before checking the current folder.",
    question: "First troubleshooting check is...",
    answers: ["Current folder", "Store logo", "Product inventory"],
    correct: "Current folder",
  },
  {
    title: "Check versions",
    label: "Versions",
    description: "Confirm required tools are installed and visible to the terminal.",
    imageTitle: "Version commands",
    imageHint: "Placeholder: add a screenshot of version commands.",
    nav: "Versions",
    action: "Open Shopify CLI requirements",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Run node -v.", "Run npm -v and git --version.", "Run shopify version."],
    example: "Example: command not found usually means the tool is not installed or terminal path is not updated.",
    mistake: "Do not continue until required commands respond.",
    question: "Version checks confirm...",
    answers: ["Tools are available", "Theme is published", "Discount is active"],
    correct: "Tools are available",
  },
  {
    title: "Check Shopify login",
    label: "Login",
    description: "CLI commands need the right Shopify account, store access, and theme permissions.",
    imageTitle: "Shopify login prompt",
    imageHint: "Placeholder: add a screenshot of CLI login prompt.",
    nav: "Login",
    action: "Open Shopify CLI auth docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Run a command that requires access.", "Log in with the correct Shopify account.", "Confirm staff or Theme Access permissions."],
    example: "Example: a staff account needs theme permission to work with theme commands.",
    mistake: "Do not use a personal account that has no access to the training store.",
    question: "Theme commands need...",
    answers: ["Correct account and theme access", "Only storefront password", "Only a product image"],
    correct: "Correct account and theme access",
  },
  {
    title: "Read the exact error",
    label: "Error",
    description: "Teach trainees to copy the exact terminal error and identify which command caused it.",
    imageTitle: "Terminal error",
    imageHint: "Placeholder: add a screenshot of an example terminal error.",
    nav: "Error",
    action: "Open Shopify help resources",
    url: "https://community.shopify.dev/",
    tryTasks: ["Copy the command used.", "Copy the exact error.", "Note what folder and store were active."],
    example: "Example: 'command not found' and 'not authorized' are different problems.",
    mistake: "Do not summarize errors as 'it does not work' without details.",
    question: "A useful help request includes...",
    answers: ["Command and exact error", "Only a screenshot of the homepage", "Only the store name"],
    correct: "Command and exact error",
  },
  {
    title: "Know when to escalate",
    label: "Escalate",
    description: "After folder, versions, login, and exact error are checked, escalate with useful context.",
    imageTitle: "Escalation checklist",
    imageHint: "Placeholder: add a checklist screenshot.",
    nav: "Escalate",
    action: "Open Shopify CLI help",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["List checks already completed.", "Share terminal output.", "Ask the trainer before changing store or theme settings."],
    example: "Example: good escalation includes folder path, tool versions, store name, command, and error.",
    mistake: "Do not change live theme settings while trying to fix CLI access.",
    question: "Escalate after checking...",
    answers: ["Folder, versions, login, error", "Only homepage image", "Only product count"],
    correct: "Folder, versions, login, error",
  },
];

const githubSetupSteps = [
  {
    title: "Ask supervisor before starting",
    label: "Access",
    description:
      "Before GitHub work, confirm the correct company account, repository, branch, and login support with the supervisor.",
    imageTitle: "GitHub access approval",
    imageHint: "Placeholder: add a screenshot of the internal access checklist.",
    nav: "Ask first",
    action: "Open GitHub Desktop auth docs",
    url: GITHUB_DESKTOP_AUTH_DOCS_URL,
    tryTasks: [
      "Ask which GitHub account to use.",
      "Ask which repository and branch are assigned.",
      "Ask for password, 2FA, or permission help before signing in.",
    ],
    example: "Example: ask the supervisor for repository access before cloning a company project.",
    mistake: "Do not use someone else's account or guess a company password.",
    question: "Before GitHub work, ask the supervisor for...",
    answers: ["Account, repo, branch, and access help", "Product prices", "Store discount codes"],
    correct: "Account, repo, branch, and access help",
  },
  {
    title: "Install GitHub Desktop",
    label: "Install",
    description: "GitHub Desktop gives beginners a visual way to clone, commit, pull, and push code changes.",
    imageTitle: "GitHub Desktop download",
    imageHint: "Placeholder: add a screenshot of the GitHub Desktop download page.",
    nav: "Install",
    action: "Open GitHub Desktop",
    url: GITHUB_DESKTOP_URL,
    tryTasks: ["Download GitHub Desktop.", "Install the app.", "Open GitHub Desktop."],
    example: "Example: use GitHub Desktop when the trainee is not ready for command-line Git yet.",
    mistake: "Do not skip GitHub Desktop setup if the team workflow requires it for trainees.",
    question: "GitHub Desktop helps beginners use...",
    answers: ["Git visually", "Shopify payments", "Theme sections only"],
    correct: "Git visually",
  },
  {
    title: "Sign in safely",
    label: "Sign in",
    description: "Sign in through the browser using the approved GitHub account and complete 2FA if required.",
    imageTitle: "GitHub Desktop sign in",
    imageHint: "Placeholder: add a screenshot of GitHub Desktop sign-in.",
    nav: "Sign in",
    action: "Open GitHub Desktop auth docs",
    url: GITHUB_DESKTOP_AUTH_DOCS_URL,
    tryTasks: ["Click Sign in to GitHub.com.", "Use the approved account.", "Ask the supervisor if password or 2FA is blocked."],
    example: "Example: if 2FA asks for a code, stop and ask the supervisor instead of guessing.",
    mistake: "Do not save company credentials in an unapproved browser or device.",
    question: "If sign-in needs a code or password you do not have...",
    answers: ["Ask the supervisor", "Guess several times", "Create a random new repo"],
    correct: "Ask the supervisor",
  },
  {
    title: "Clone the assigned repository",
    label: "Clone",
    description: "Clone means downloading a copy of the GitHub repository to the local computer.",
    imageTitle: "Clone repository",
    imageHint: "Placeholder: add a screenshot of the Clone repository dialog.",
    nav: "Clone",
    action: "Open GitHub clone docs",
    url: GITHUB_DESKTOP_CLONE_DOCS_URL,
    tryTasks: ["Choose File > Clone repository.", "Select only the assigned repository.", "Choose a clear local folder location."],
    example: "Example: clone the company training repository into a Projects or Work folder.",
    mistake: "Do not clone unrelated client repositories without permission.",
    question: "Cloning means...",
    answers: ["Downloading a repo locally", "Publishing the live store", "Deleting old files"],
    correct: "Downloading a repo locally",
  },
  {
    title: "Open in VS Code",
    label: "Open",
    description: "After cloning, open the repository in VS Code so code edits happen inside the tracked project folder.",
    imageTitle: "Open repository in VS Code",
    imageHint: "Placeholder: add a screenshot of Repository > Open in Visual Studio Code.",
    nav: "Open in VS Code",
    action: "Open VS Code",
    url: "https://code.visualstudio.com/",
    tryTasks: ["Open the cloned repo from GitHub Desktop.", "Open it in VS Code.", "Confirm the same folder is visible in both apps."],
    example: "Example: GitHub Desktop watches changes made in VS Code.",
    mistake: "Do not edit a duplicate folder outside the cloned repository.",
    question: "After cloning, edit files in...",
    answers: ["The cloned repository folder", "A random desktop copy", "The browser download folder"],
    correct: "The cloned repository folder",
  },
  {
    title: "Know the no-edit rule",
    label: "Rules",
    description: "Before changing files, confirm branch rules, review rules, and which files are safe to touch.",
    imageTitle: "Repository rules",
    imageHint: "Placeholder: add a screenshot of an internal branch rule note.",
    nav: "Rules",
    action: "Open GitHub Desktop docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["Ask which branch to use.", "Ask which files are assigned.", "Ask whether a pull request is required."],
    example: "Example: beginners should not commit directly to main unless the supervisor approves.",
    mistake: "Do not edit unrelated files just because they appear in the project.",
    question: "Beginners should avoid committing directly to...",
    answers: ["main without approval", "their assigned branch", "a local folder"],
    correct: "main without approval",
  },
];

const githubWorkflowSteps = [
  {
    title: "Fetch and pull first",
    label: "Sync first",
    description: "Fetch checks GitHub for updates. Pull downloads teammate changes to your local repository.",
    imageTitle: "Fetch and pull",
    imageHint: "Placeholder: add a screenshot of Fetch origin or Pull origin.",
    nav: "Fetch / Pull",
    action: "Open GitHub Desktop docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["Click Fetch origin.", "Pull if updates are available.", "Confirm the repository is up to date before editing."],
    example: "Example: pull first so you do not edit old files.",
    mistake: "Do not start coding before syncing the repository.",
    question: "Pull means...",
    answers: ["Download latest changes", "Upload your commit", "Delete a branch"],
    correct: "Download latest changes",
  },
  {
    title: "Use the assigned branch",
    label: "Branch",
    description: "A branch keeps task work separate from the main project until review.",
    imageTitle: "Current branch",
    imageHint: "Placeholder: add a screenshot of the Current branch menu.",
    nav: "Branch",
    action: "Open GitHub Desktop branch docs",
    url: "https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop",
    tryTasks: ["Check Current branch.", "Create or switch to the assigned branch.", "Ask before using main."],
    example: "Example: use a branch named training-homepage-copy for a homepage copy task.",
    mistake: "Do not mix several unrelated tasks in one branch.",
    question: "A branch is used to...",
    answers: ["Separate task work", "Change Shopify passwords", "Install Node"],
    correct: "Separate task work",
  },
  {
    title: "Review changed files",
    label: "Review",
    description: "GitHub Desktop shows changed files so trainees can check what they edited before committing.",
    imageTitle: "Changed files",
    imageHint: "Placeholder: add a screenshot of the changed files panel.",
    nav: "Review",
    action: "Open GitHub Desktop docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["Make a small assigned edit.", "Return to GitHub Desktop.", "Review every changed file before committing."],
    example: "Example: if .DS_Store or unrelated files appear, ask before committing them.",
    mistake: "Do not commit files you do not understand.",
    question: "Before committing, review...",
    answers: ["Changed files", "Only the page title", "Only the browser preview"],
    correct: "Changed files",
  },
  {
    title: "Write a clear commit",
    label: "Commit",
    description: "A commit saves a local checkpoint with a message explaining the change.",
    imageTitle: "Commit message",
    imageHint: "Placeholder: add a screenshot of the commit summary box.",
    nav: "Commit",
    action: "Open GitHub Desktop commit docs",
    url: "https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop",
    tryTasks: ["Write a short commit summary.", "Use the description if needed.", "Click Commit to the assigned branch."],
    example: "Example commit: Add Shopify CLI setup module.",
    mistake: "Do not use vague messages like update, fix, or final final.",
    question: "A commit is...",
    answers: ["A local saved checkpoint", "A live Shopify publish", "A password reset"],
    correct: "A local saved checkpoint",
  },
  {
    title: "Push to GitHub",
    label: "Push",
    description: "Push uploads local commits to GitHub so the supervisor can review them.",
    imageTitle: "Push origin",
    imageHint: "Placeholder: add a screenshot of Push origin.",
    nav: "Push",
    action: "Open GitHub Desktop docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["Commit the assigned change.", "Click Push origin.", "Confirm the commit appears on GitHub if assigned."],
    example: "Example: commit saves locally; push sends the commit to GitHub.",
    mistake: "Do not push unfinished or unrelated work without telling the supervisor.",
    question: "Push means...",
    answers: ["Upload commits to GitHub", "Download teammate changes", "Open Shopify admin"],
    correct: "Upload commits to GitHub",
  },
  {
    title: "Ask for review",
    label: "Review",
    description: "After pushing, notify the supervisor and provide the branch, commit, or pull request link.",
    imageTitle: "Review request",
    imageHint: "Placeholder: add a screenshot of a GitHub branch or PR link.",
    nav: "Ask review",
    action: "Open GitHub pull request docs",
    url: "https://docs.github.com/en/pull-requests",
    tryTasks: ["Tell the supervisor what changed.", "Share the branch or PR link.", "Wait for review before merging or publishing."],
    example: "Example: 'Pushed branch training-cli-module. Ready for review.'",
    mistake: "Do not merge or publish theme work without review.",
    question: "After pushing, the next step is usually...",
    answers: ["Ask for review", "Delete the branch immediately", "Change billing"],
    correct: "Ask for review",
  },
  {
    title: "Handle common GitHub mistakes",
    label: "Fixes",
    description: "Know when to stop and ask for help: conflicts, wrong branch, password issues, or unexpected changed files.",
    imageTitle: "GitHub mistake checklist",
    imageHint: "Placeholder: add a screenshot of a conflict or warning.",
    nav: "Mistakes",
    action: "Open GitHub Desktop support docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["Stop when a conflict appears.", "Stop if the wrong branch has changes.", "Ask before discarding or reverting files."],
    example: "Example: if GitHub Desktop shows a conflict, get supervisor help before clicking random options.",
    mistake: "Do not discard, revert, or force changes without approval.",
    question: "If there is a conflict, you should...",
    answers: ["Stop and ask for help", "Click random buttons", "Delete the repo"],
    correct: "Stop and ask for help",
  },
];

const moduleTours = {
  "Dashboard Tour: What Each Menu Does": {
    key: "dashboard",
    kicker: "Dashboard tour",
    title: "Start with the tutorial store.",
    intro: "Follow one step at a time. Read the short note, then try it in the KNB tutorial store.",
    completionTitle: "Dashboard navigation is done.",
    completionText:
      "The trainee has seen the main Shopify admin areas. Next, move into store setup or let them repeat any step.",
    steps: dashboardSteps,
  },
  "Create the Store and Install Essentials": {
    key: "setup",
    kicker: "Store setup",
    title: "Review setup before editing.",
    intro: "Use this popup to inspect the setup areas and learn what beginners should avoid changing.",
    completionTitle: "Store setup review is done.",
    completionText:
      "The trainee knows the setup areas and which settings require approval. Next, move into pages, products, or theme practice.",
    steps: setupSteps,
  },
  "Add Pages: About, Contact, FAQ, Policies": {
    key: "pages",
    kicker: "Pages module",
    title: "Create pages safely.",
    intro: "Practice creating a page, checking visibility, and understanding when pages appear in navigation.",
    completionTitle: "Pages practice is done.",
    completionText:
      "The trainee can find Pages, create a safe practice page, check visibility, and understand menu linking.",
    steps: pagesSteps,
  },
  "Open the Theme Customizer": {
    key: "themeCustomizer",
    kicker: "Theme customizer",
    title: "Inspect the theme editor first.",
    intro: "Use this module to find templates, sections, blocks, preview controls, and the save rule.",
    completionTitle: "Theme customizer orientation is done.",
    completionText:
      "The trainee can open the editor, find core controls, check mobile, and avoid saving unapproved changes.",
    steps: themeSteps,
  },
  "Add Products and Collections": {
    key: "products",
    kicker: "Products module",
    title: "Create products safely.",
    intro: "Practice product creation as draft work, then identify price, media, inventory, variants, and collections.",
    completionTitle: "Products practice is done.",
    completionText:
      "The trainee can create draft products, find key product fields, and understand collection grouping.",
    steps: productSteps,
  },
  "Add Navigation Menu Links": {
    key: "navigation",
    kicker: "Navigation module",
    title: "Connect pages to menus.",
    intro: "Learn how menu labels, destinations, storefront testing, and footer links work.",
    completionTitle: "Navigation practice is done.",
    completionText:
      "The trainee can add and verify menu links while avoiding unapproved live navigation changes.",
    steps: navigationSteps,
  },
  "Before Launch: Settings Check": {
    key: "launch",
    kicker: "Launch checklist",
    title: "Review launch settings carefully.",
    intro: "Walk through the high-risk settings that need approval before a Shopify store goes live.",
    completionTitle: "Launch settings review is done.",
    completionText:
      "The trainee can find launch-critical settings and explain which areas require trainer approval.",
    steps: launchSteps,
  },
  "Developer Setup: VS Code and Terminal": {
    key: "devSetup",
    kicker: "Developer setup",
    title: "Prepare VS Code first.",
    intro: "Set up the editor, folder, terminal, and extensions before running Shopify theme commands.",
    completionTitle: "VS Code setup is done.",
    completionText:
      "The trainee can open the project folder, use terminal, and navigate the workspace before code work starts.",
    steps: devSetupSteps,
  },
  "Install Node, npm, Git, and Shopify CLI": {
    key: "cliInstall",
    kicker: "CLI installation",
    title: "Install the required developer tools.",
    intro: "Check Node, npm, Git, and Shopify CLI versions so theme development starts from a clean setup.",
    completionTitle: "Developer tools are installed.",
    completionText:
      "The trainee can verify Node, npm, Git, and Shopify CLI before running theme commands.",
    steps: cliInstallSteps,
  },
  "Shopify CLI Theme Workflow": {
    key: "cliWorkflow",
    kicker: "Shopify CLI workflow",
    title: "Preview, pull, check, and push safely.",
    intro: "Learn the command purpose before using CLI commands on real Shopify themes.",
    completionTitle: "Shopify CLI workflow is complete.",
    completionText:
      "The trainee understands the daily CLI commands and which ones read, preview, or write theme files.",
    steps: cliWorkflowSteps,
  },
  "Theme Project Files and npm Install": {
    key: "projectFiles",
    kicker: "Theme project files",
    title: "Know the project before editing.",
    intro: "Inspect folders, package files, npm scripts, and the difference between npm tooling and Shopify CLI.",
    completionTitle: "Theme project orientation is complete.",
    completionText:
      "The trainee understands theme folders, npm install, scripts, and the safe local edit workflow.",
    steps: projectFilesSteps,
  },
  "Developer Troubleshooting Checklist": {
    key: "devTroubleshooting",
    kicker: "Troubleshooting",
    title: "Diagnose setup problems calmly.",
    intro: "Use a repeatable checklist for folder, version, login, permission, and command errors.",
    completionTitle: "Troubleshooting checklist is complete.",
    completionText:
      "The trainee can collect useful error context and fix common setup problems before escalating.",
    steps: devTroubleshootingSteps,
  },
  "GitHub Access and GitHub Desktop Setup": {
    key: "githubSetup",
    kicker: "GitHub setup",
    title: "Confirm access before cloning.",
    intro: "Ask the supervisor for account, password or 2FA help, repository, and branch rules before GitHub work starts.",
    completionTitle: "GitHub Desktop setup is done.",
    completionText:
      "The trainee knows how to ask for access, install GitHub Desktop, sign in safely, clone the assigned repository, and open it in VS Code.",
    steps: githubSetupSteps,
  },
  "GitHub Desktop Daily Workflow": {
    key: "githubWorkflow",
    kicker: "GitHub workflow",
    title: "Sync, commit, push, review.",
    intro: "Use GitHub Desktop for the daily beginner workflow: pull first, use the assigned branch, commit clearly, push, then ask for review.",
    completionTitle: "GitHub Desktop workflow is complete.",
    completionText:
      "The trainee understands fetch, pull, branch, review changes, commit, push, and supervisor review.",
    steps: githubWorkflowSteps,
  },
};

const grid = document.querySelector("#tutorialGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const filterButtons = document.querySelectorAll(".filter-chip");
const viewButtons = document.querySelectorAll(".view-tabs button");
const overallProgressMetric = document.querySelector("#overallProgressMetric");
const overallProgressBar = document.querySelector("#overallProgressBar");
const resetProgressButton = document.querySelector("#resetProgressButton");
const trainerModeToggle = document.querySelector("#trainerModeToggle");
const completionDashboardTitle = document.querySelector("#completionDashboardTitle");
const nextRecommendedModule = document.querySelector("#nextRecommendedModule");
const continueModuleButton = document.querySelector("#continueModuleButton");
const completedModulesCount = document.querySelector("#completedModulesCount");
const inProgressModulesCount = document.querySelector("#inProgressModulesCount");
const notStartedModulesCount = document.querySelector("#notStartedModulesCount");
const pathCards = document.querySelectorAll(".learning-path [data-tour-keys]");
const certificateSection = document.querySelector("#certificateSection");
const dashboardTour = document.querySelector("#dashboardTour");
const tourKicker = document.querySelector("#tourKicker");
const dashboardTourTitle = document.querySelector("#dashboardTourTitle");
const tourIntro = document.querySelector("#tourIntro");
const closeDashboardTour = document.querySelector("#closeDashboardTour");
const previousTourItem = document.querySelector("#previousTourItem");
const nextTourItem = document.querySelector("#nextTourItem");
const startModuleButton = document.querySelector("#startModuleButton");
const simpleTourStepLabel = document.querySelector("#simpleTourStepLabel");
const simpleTourTitle = document.querySelector("#simpleTourTitle");
const simpleTourDescription = document.querySelector("#simpleTourDescription");
const simpleTourImage = document.querySelector("#simpleTourImage");
const simpleTourImageTitle = document.querySelector("#simpleTourImageTitle");
const simpleTourImageHint = document.querySelector("#simpleTourImageHint");
const simpleTourNav = document.querySelector("#simpleTourNav");
const simpleTourProgress = document.querySelector("#simpleTourProgress");
const simpleTourBar = document.querySelector("#simpleTourBar");
const simpleTourAccessLabel = document.querySelector("#simpleTourAccessLabel");
const simpleTourStoreLink = document.querySelector("#simpleTourStoreLink");
const simpleTourPasswordLabel = document.querySelector("#simpleTourPasswordLabel");
const simpleTourPassword = document.querySelector("#simpleTourPassword");
const simpleTourAccessNote = document.querySelector("#simpleTourAccessNote");
const simpleTourAction = document.querySelector("#simpleTourAction");
const doneNextItem = document.querySelector("#doneNextItem");
const tryCardTitle = document.querySelector("#tryCardTitle");
const tryChecklist = document.querySelector("#tryChecklist");
const exampleNote = document.querySelector("#exampleNote");
const mistakeNote = document.querySelector("#mistakeNote");
const stepTrainerNote = document.querySelector("#stepTrainerNote");
const miniQuestion = document.querySelector("#miniQuestion");
const miniAnswers = document.querySelector("#miniAnswers");
const miniFeedback = document.querySelector("#miniFeedback");
const screenshotSlot = document.querySelector("#screenshotSlot");
const screenshotControls = document.querySelector("#screenshotControls");
const replaceScreenshotButton = document.querySelector("#replaceScreenshotButton");
const removeScreenshotButton = document.querySelector("#removeScreenshotButton");
const screenshotUpload = document.querySelector("#screenshotUpload");
const simpleTourLayout = document.querySelector(".simple-tour-layout");
const tourActions = document.querySelector(".tour-actions");
const tourCompletion = document.querySelector("#tourCompletion");
const completionTitle = document.querySelector("#completionTitle");
const completionText = document.querySelector("#completionText");
const repeatTour = document.querySelector("#repeatTour");
const closeCompletion = document.querySelector("#closeCompletion");
const practiceTitle = document.querySelector("#practiceTitle");
const practiceDescription = document.querySelector("#practiceDescription");
const practiceTasks = document.querySelector("#practiceTasks");
const trainingStoreLink = document.querySelector("#trainingStoreLink");
const trainerNote = document.querySelector("#trainerNote");
const templateButtons = document.querySelectorAll("[data-template]");

const detail = {
  image: document.querySelector("#detailImage"),
  tool: document.querySelector("#detailTool"),
  title: document.querySelector("#detailTitle"),
  description: document.querySelector("#detailDescription"),
  lessons: document.querySelector("#detailLessons"),
  time: document.querySelector("#detailTime"),
  level: document.querySelector("#detailLevel"),
  steps: document.querySelector("#detailSteps"),
};

let activeFilter = "all";
let activeView = "beginner";
let selectedTitle = tutorials[0].title;
let activeTourStep = 0;
let activeTourTitle = tutorials[0].title;
const savedProgress = loadSavedProgress();

function loadSavedProgress() {
  if (typeof localStorage === "undefined") {
    return {};
  }

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  if (typeof localStorage === "undefined") {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedProgress));
}

function resetSavedProgress() {
  Object.keys(savedProgress).forEach((key) => {
    delete savedProgress[key];
  });

  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function getTourState(tourKey) {
  if (!savedProgress[tourKey]) {
    savedProgress[tourKey] = {
      completedSteps: [],
      passedChecks: [],
      checkedTasks: {},
      screenshots: {},
    };
  }

  savedProgress[tourKey].screenshots ||= {};

  return savedProgress[tourKey];
}

function getActiveTour() {
  return moduleTours[activeTourTitle] || moduleTours[tutorials[0].title];
}

function getCompletedSet(tourKey) {
  return new Set(getTourState(tourKey).completedSteps);
}

function getPassedSet(tourKey) {
  return new Set(getTourState(tourKey).passedChecks);
}

function updateStoredSet(tourKey, property, index) {
  const state = getTourState(tourKey);
  const values = new Set(state[property]);
  values.add(index);
  state[property] = Array.from(values).sort((a, b) => a - b);
  saveProgress();
}

function setStoredTasks(tourKey, stepIndex, checkedTasks) {
  const state = getTourState(tourKey);
  state.checkedTasks[String(stepIndex)] = checkedTasks;
  saveProgress();
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getStepImagePath(tour, step) {
  const storedScreenshot = getTourState(tour.key).screenshots[String(activeTourStep)];
  return storedScreenshot || step.image || `assets/shopify/${slugify(tour.key)}-${slugify(step.nav || step.title)}.png`;
}

function hasStoredScreenshot(tour, stepIndex) {
  return Boolean(getTourState(tour.key).screenshots[String(stepIndex)]);
}

function getStepTrainerNote(step) {
  return step.trainerNote || `Trainer note: confirm the trainee can explain "${step.title}" before marking this step complete.`;
}

function isDeveloperTour(tour) {
  return (
    tour.key.startsWith("dev") ||
    tour.key.startsWith("cli") ||
    tour.key.startsWith("github") ||
    tour.key === "projectFiles"
  );
}

function formatTool(tool) {
  return tool.charAt(0).toUpperCase() + tool.slice(1);
}

function getModuleStatus(tutorial) {
  const tour = moduleTours[tutorial.title];

  if (!tour) {
    return "Not started";
  }

  const completedSteps = getCompletedSet(tour.key);

  if (completedSteps.size === tour.steps.length) {
    return "Completed";
  }

  if (completedSteps.size > 0) {
    return "In progress";
  }

  return tutorial.tool === "admin" ? "Start here" : "Not started";
}

function getStatusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function getToolIcon(tool) {
  const icons = {
    admin: "layout-dashboard",
    setup: "settings",
    pages: "file-text",
    theme: "paintbrush",
    products: "package",
    dev: "terminal",
  };

  return icons[tool] || "book-open";
}

function isStepReady(tour, stepIndex) {
  const step = tour.steps[stepIndex];
  const state = getTourState(tour.key);
  const checkedTasks = state.checkedTasks[String(stepIndex)] || [];
  return checkedTasks.length === step.tryTasks.length && getPassedSet(tour.key).has(stepIndex);
}

function maybeCompleteStep(tour, stepIndex) {
  if (isStepReady(tour, stepIndex)) {
    updateStoredSet(tour.key, "completedSteps", stepIndex);
    renderTutorials();
    return true;
  }

  return false;
}

function getGuidedTutorials() {
  return tutorials.filter((tutorial) => moduleTours[tutorial.title]);
}

function getNextGuidedModule() {
  const guidedTutorials = getGuidedTutorials();

  return (
    guidedTutorials.find((tutorial) => getModuleStatus(tutorial) === "In progress") ||
    guidedTutorials.find((tutorial) => getModuleStatus(tutorial) !== "Completed") ||
    null
  );
}

function getFirstIncompleteStepIndex(tour) {
  const completedSteps = getCompletedSet(tour.key);
  const index = tour.steps.findIndex((_, stepIndex) => !completedSteps.has(stepIndex));
  return index === -1 ? 0 : index;
}

function getTourStatusByKey(tourKey) {
  const tour = Object.values(moduleTours).find((item) => item.key === tourKey);

  if (!tour) {
    return "not-started";
  }

  const completedSteps = getCompletedSet(tour.key);

  if (completedSteps.size === tour.steps.length) {
    return "complete";
  }

  if (completedSteps.size > 0) {
    return "current";
  }

  return "not-started";
}

function renderPathStates() {
  pathCards.forEach((card) => {
    const keys = card.dataset.tourKeys.split(",");
    const statuses = keys.map((key) => getTourStatusByKey(key));
    const status = statuses.every((item) => item === "complete")
      ? "complete"
      : statuses.some((item) => item === "current" || item === "complete")
        ? "current"
        : "not-started";
    card.classList.toggle("is-complete", status === "complete");
    card.classList.toggle("is-current", status === "current");
    card.classList.toggle("is-locked", status === "not-started");
  });
}

function getGuidedModuleCounts() {
  return getGuidedTutorials().reduce(
    (counts, tutorial) => {
      const status = getModuleStatus(tutorial);

      if (status === "Completed") {
        counts.completed += 1;
      } else if (status === "In progress") {
        counts.inProgress += 1;
      } else {
        counts.notStarted += 1;
      }

      return counts;
    },
    { completed: 0, inProgress: 0, notStarted: 0 },
  );
}

function renderCompletionDashboard() {
  const guidedTutorials = getGuidedTutorials();
  const counts = getGuidedModuleCounts();
  const percent = guidedTutorials.length
    ? Math.round((counts.completed / guidedTutorials.length) * 100)
    : 0;
  const nextModule = getNextGuidedModule();

  overallProgressMetric.textContent = `${percent}%`;
  overallProgressBar.style.width = `${percent}%`;
  completionDashboardTitle.textContent = `${counts.completed} of ${guidedTutorials.length} guided modules complete`;
  nextRecommendedModule.textContent = nextModule
    ? `Next recommended: ${nextModule.title}.`
    : "All guided beginner modules are complete.";
  continueModuleButton.disabled = !nextModule;
  continueModuleButton.innerHTML = nextModule
    ? '<i data-lucide="play"></i> Continue'
    : '<i data-lucide="check"></i> Complete';
  completedModulesCount.textContent = counts.completed;
  inProgressModulesCount.textContent = counts.inProgress;
  notStartedModulesCount.textContent = counts.notStarted;
  certificateSection.hidden = counts.completed !== guidedTutorials.length;
  renderPathStates();
}

function renderTutorials() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleTutorials = tutorials.filter((tutorial) => {
    const matchesFilter = activeFilter === "all" || tutorial.tool === activeFilter;
    const matchesView = activeView === "beginner" || Boolean(moduleTours[tutorial.title]);
    const matchesSearch = `${tutorial.title} ${tutorial.description} ${tutorial.tool}`
      .toLowerCase()
      .includes(query);
    return matchesFilter && matchesView && matchesSearch;
  });

  grid.innerHTML = "";
  resultCount.textContent = `${visibleTutorials.length} ${
    visibleTutorials.length === 1 ? "module" : "modules"
  }${activeView === "sop" ? " in SOP view" : ""}`;

  if (!visibleTutorials.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <i data-lucide="search-x"></i>
        <h3>No modules found</h3>
        <p>Try clearing the search or choosing a different topic filter.</p>
        <button type="button" id="clearSearchButton">Clear search</button>
      </div>
    `;
    document.querySelector("#clearSearchButton").addEventListener("click", () => {
      searchInput.value = "";
      activeFilter = "all";
      filterButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.filter === "all"));
      renderTutorials();
    });
    renderCompletionDashboard();

    if (window.lucide) {
      lucide.createIcons();
    }

    return;
  }

  visibleTutorials.forEach((tutorial) => {
    const status = getModuleStatus(tutorial);
    const card = document.createElement("button");
    card.className = `tutorial-card ${selectedTitle === tutorial.title ? "is-selected" : ""}`;
    card.type = "button";
    card.innerHTML = `
      <span class="card-top">
        <span class="tool-tag ${tutorial.tool}">
          <i data-lucide="${getToolIcon(tutorial.tool)}"></i>
          ${formatTool(tutorial.tool)}
        </span>
        <span class="module-status ${getStatusClass(status)}">${status}</span>
      </span>
      <span>
        <h3>${tutorial.title}</h3>
        <p>${activeView === "sop" ? `SOP focus: ${modulePractices[tutorial.title].description}` : tutorial.description}</p>
      </span>
      <span class="card-meta">
        <span>${tutorial.lessons} lessons</span>
        <span>${tutorial.time}</span>
        <span>${tutorial.level}</span>
      </span>
    `;

    card.addEventListener("click", () => {
      selectedTitle = tutorial.title;
      updateDetail(tutorial);
      renderTutorials();
    });

    grid.appendChild(card);
  });

  if (window.gsap) {
    gsap.fromTo(
      ".tutorial-card",
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.28, stagger: 0.03, ease: "power2.out" },
    );
  }

  renderCompletionDashboard();

  if (window.lucide) {
    lucide.createIcons();
  }
}

function updateDetail(tutorial) {
  const practice = modulePractices[tutorial.title];

  detail.image.src = tutorial.image;
  detail.image.alt = `${tutorial.title} tutorial preview`;
  detail.tool.textContent = formatTool(tutorial.tool);
  detail.tool.className = `tool-tag ${tutorial.tool}`;
  detail.title.textContent = tutorial.title;
  detail.description.textContent = tutorial.description;
  detail.lessons.textContent = tutorial.lessons;
  detail.time.textContent = tutorial.time;
  detail.level.textContent = tutorial.level;
  detail.steps.innerHTML = tutorial.steps.map((step) => `<li>${step}</li>`).join("");
  practiceTitle.textContent = practice.title;
  practiceDescription.textContent = practice.description;
  practiceTasks.innerHTML = practice.tasks.map((task) => `<li>${task}</li>`).join("");
  trainingStoreLink.href = TRAINING_STORE_URL;
  trainerNote.textContent = tutorial.trainerNote;

  if (!moduleTours[tutorial.title] && dashboardTour.open) {
    dashboardTour.close();
  }
}

function renderSimpleTour() {
  const tour = getActiveTour();
  const step = tour.steps[activeTourStep];
  const completedSteps = getCompletedSet(tour.key);
  const passedChecks = getPassedSet(tour.key);
  const state = getTourState(tour.key);
  const checkedTasks = state.checkedTasks[String(activeTourStep)] || [];
  const progress = (completedSteps.size / tour.steps.length) * 100;
  const checkedTaskCount = checkedTasks.length;

  simpleTourLayout.hidden = false;
  tourActions.hidden = false;
  tourCompletion.hidden = true;
  tourKicker.textContent = tour.kicker;
  dashboardTourTitle.textContent = tour.title;
  tourIntro.textContent = tour.intro;
  simpleTourStepLabel.textContent = `Step ${activeTourStep + 1} of ${tour.steps.length}`;
  simpleTourTitle.textContent = step.title;
  simpleTourDescription.textContent = step.description;
  simpleTourImageTitle.textContent = step.imageTitle;
  simpleTourImageHint.textContent = step.imageHint;
  const stepImagePath = getStepImagePath(tour, step);
  simpleTourImage.hidden = false;
  simpleTourImage.src = stepImagePath;
  simpleTourImage.alt = `${step.title} training screenshot`;
  simpleTourImage.onerror = () => {
    simpleTourImage.hidden = true;
    simpleTourImage.removeAttribute("src");
  };
  simpleTourProgress.textContent = `${completedSteps.size} / ${tour.steps.length} completed`;
  simpleTourBar.style.width = `${progress}%`;
  if (isDeveloperTour(tour)) {
    simpleTourAccessLabel.textContent = "Reference";
    simpleTourStoreLink.href = step.url || SHOPIFY_CLI_DOCS_URL;
    simpleTourStoreLink.textContent = "Open official setup reference";
    simpleTourPasswordLabel.textContent = "Required";
    simpleTourPassword.textContent = "VS Code, Node, npm, Git, Shopify CLI";
    simpleTourAccessNote.textContent =
      "Developer modules use official references and terminal checks. Store commands still require the correct Shopify staff account.";
  } else {
    simpleTourAccessLabel.textContent = "Tutorial store";
    simpleTourStoreLink.href = TRAINING_STORE_URL;
    simpleTourStoreLink.textContent = TRAINING_STORE_URL.replace("https://", "");
    simpleTourPasswordLabel.textContent = "Password";
    simpleTourPassword.textContent = TRAINING_STORE_PASSWORD;
    simpleTourAccessNote.textContent =
      "Storefront uses this password. Dashboard links open Shopify admin and require a staff account.";
  }
  previousTourItem.disabled = activeTourStep === 0;
  nextTourItem.innerHTML =
    activeTourStep === tour.steps.length - 1
      ? 'Finish <i data-lucide="check"></i>'
      : 'Next step <i data-lucide="arrow-right"></i>';
  simpleTourAction.href = step.url;
  simpleTourAction.textContent = step.action;
  screenshotSlot.textContent = `${step.title} screenshot slot`;
  screenshotSlot.hidden = hasStoredScreenshot(tour, activeTourStep);
  screenshotControls.hidden = !hasStoredScreenshot(tour, activeTourStep);
  tryCardTitle.textContent = `Try this now (${checkedTaskCount}/${step.tryTasks.length})`;
  tryChecklist.innerHTML = step.tryTasks
    .map(
      (task, index) => `
        <li>
          <label>
            <input type="checkbox" data-task-index="${index}" ${checkedTasks.includes(index) ? "checked" : ""} />
            <span>${task}</span>
          </label>
        </li>
      `,
    )
    .join("");
  exampleNote.textContent = step.example;
  mistakeNote.textContent = step.mistake;
  stepTrainerNote.textContent = getStepTrainerNote(step);
  miniQuestion.textContent = step.question;
  miniFeedback.textContent = passedChecks.has(activeTourStep)
    ? "Correct. This check is complete."
    : "";
  miniFeedback.className = `mini-feedback ${passedChecks.has(activeTourStep) ? "is-correct" : ""}`;
  miniAnswers.innerHTML = step.answers
    .map(
      (answer) => `
        <button class="${passedChecks.has(activeTourStep) && answer === step.correct ? "is-correct" : ""}" type="button" data-answer="${answer}">
          ${answer}
        </button>
      `,
    )
    .join("");

  simpleTourNav.innerHTML = tour.steps
    .map(
      (item, index) => `
        <button class="${index === activeTourStep ? "is-active" : ""} ${completedSteps.has(index) ? "is-complete" : ""}" type="button" data-index="${index}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          ${item.nav}
          ${completedSteps.has(index) ? '<i data-lucide="check"></i>' : ""}
        </button>
      `,
    )
    .join("");

  simpleTourNav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeTourStep = Number(button.dataset.index);
      renderSimpleTour();
    });
  });

  miniAnswers.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const isCorrect = button.dataset.answer === step.correct;
      miniAnswers
        .querySelectorAll("button")
        .forEach((item) => item.classList.remove("is-correct", "is-wrong"));
      button.classList.add(isCorrect ? "is-correct" : "is-wrong");
      miniFeedback.textContent = isCorrect ? "Correct." : `Not quite. Answer: ${step.correct}.`;
      miniFeedback.className = `mini-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;

      if (isCorrect) {
        updateStoredSet(tour.key, "passedChecks", activeTourStep);
        maybeCompleteStep(tour, activeTourStep);
      }
    });
  });

  tryChecklist.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const nextCheckedTasks = Array.from(tryChecklist.querySelectorAll("input:checked"))
        .map((item) => Number(item.dataset.taskIndex))
        .sort((a, b) => a - b);
      setStoredTasks(tour.key, activeTourStep, nextCheckedTasks);
      tryCardTitle.textContent = `Try this now (${nextCheckedTasks.length}/${step.tryTasks.length})`;

      maybeCompleteStep(tour, activeTourStep);
      renderSimpleTour();
    });
  });

  if (window.lucide) {
    lucide.createIcons();
  }

  if (window.gsap) {
    gsap.fromTo(
      ".simple-tour-main",
      { y: 10, opacity: 0.8 },
      { y: 0, opacity: 1, duration: 0.22, ease: "power2.out" },
    );
  }
}

function showTourCompletion() {
  const tour = getActiveTour();

  simpleTourLayout.hidden = true;
  tourActions.hidden = true;
  tourCompletion.hidden = false;
  completionTitle.textContent = tour.completionTitle;
  completionText.textContent = tour.completionText;
  simpleTourProgress.textContent = `${tour.steps.length} / ${tour.steps.length} completed`;
  simpleTourBar.style.width = "100%";
  renderTutorials();

  if (window.lucide) {
    lucide.createIcons();
  }
}

function goToNextTourStep() {
  const tour = getActiveTour();

  if (activeTourStep === tour.steps.length - 1) {
    if (!maybeCompleteStep(tour, activeTourStep)) {
      miniFeedback.textContent = "Complete the checklist and quick check first.";
      miniFeedback.className = "mini-feedback is-wrong";
      return;
    }
    showTourCompletion();
    return;
  }

  activeTourStep += 1;
  renderSimpleTour();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderTutorials();
  });
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    viewButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    renderTutorials();
  });
});

searchInput.addEventListener("input", renderTutorials);

resetProgressButton.addEventListener("click", () => {
  const shouldReset = window.confirm("Reset all saved trainee progress?");

  if (!shouldReset) {
    return;
  }

  resetSavedProgress();
  activeTourStep = 0;
  renderSimpleTour();
  renderTutorials();
});

trainerModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("trainer-mode", trainerModeToggle.checked);
});

screenshotSlot.addEventListener("click", () => {
  screenshotUpload.click();
});

replaceScreenshotButton.addEventListener("click", () => {
  screenshotUpload.click();
});

removeScreenshotButton.addEventListener("click", () => {
  const tour = getActiveTour();
  delete getTourState(tour.key).screenshots[String(activeTourStep)];
  saveProgress();
  renderSimpleTour();
});

screenshotUpload.addEventListener("change", () => {
  const file = screenshotUpload.files?.[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const tour = getActiveTour();
    getTourState(tour.key).screenshots[String(activeTourStep)] = reader.result;
    saveProgress();
    screenshotUpload.value = "";
    renderSimpleTour();
  });
  reader.readAsDataURL(file);
});

templateButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(button.dataset.template);
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy checklist";
    }, 1400);
  });
});

continueModuleButton.addEventListener("click", () => {
  const nextModule = getNextGuidedModule();

  if (!nextModule) {
    return;
  }

  const tour = moduleTours[nextModule.title];
  selectedTitle = nextModule.title;
  activeTourTitle = nextModule.title;
  activeTourStep = getFirstIncompleteStepIndex(tour);
  updateDetail(nextModule);
  renderTutorials();
  renderSimpleTour();
  dashboardTour.showModal();
});

previousTourItem.addEventListener("click", () => {
  activeTourStep = Math.max(0, activeTourStep - 1);
  renderSimpleTour();
});

nextTourItem.addEventListener("click", () => {
  goToNextTourStep();
});

doneNextItem.addEventListener("click", () => {
  const tour = getActiveTour();

  if (!maybeCompleteStep(tour, activeTourStep)) {
    miniFeedback.textContent = "Complete the checklist and quick check first.";
    miniFeedback.className = "mini-feedback is-wrong";
    return;
  }

  renderTutorials();
  goToNextTourStep();
});

repeatTour.addEventListener("click", () => {
  activeTourStep = 0;
  renderSimpleTour();
});

closeCompletion.addEventListener("click", () => {
  dashboardTour.close();
  activeTourStep = 0;
  renderSimpleTour();
});

startModuleButton.addEventListener("click", () => {
  const selectedTutorial = tutorials.find((tutorial) => tutorial.title === selectedTitle);
  const selectedTour = moduleTours[selectedTutorial?.title];

  if (selectedTour) {
    activeTourTitle = selectedTutorial.title;
    activeTourStep = getFirstIncompleteStepIndex(selectedTour);
    renderSimpleTour();
    dashboardTour.showModal();
    return;
  }

  detail.steps.scrollIntoView({ behavior: "smooth", block: "center" });
});

closeDashboardTour.addEventListener("click", () => {
  dashboardTour.close();
});

dashboardTour.addEventListener("click", (event) => {
  if (event.target === dashboardTour) {
    dashboardTour.close();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  updateDetail(tutorials[0]);
  renderSimpleTour();
  renderTutorials();

  if (window.gsap) {
    gsap.fromTo(
      [".sidebar", ".hero-strip", ".detail-panel"],
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" },
    );
  }
});
