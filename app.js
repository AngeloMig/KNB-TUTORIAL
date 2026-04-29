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
      "Open the KNB tutorial store and learn every Shopify admin menu section by name before touching anything. Knowing where Orders, Products, Online Store, and Settings live prevents beginners from making changes in the wrong area during client work.",
    lessons: 10,
    time: "35m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Keep this first lesson as orientation only. The trainee should know the menu names before editing anything.",
    steps: [
      "Open knb-tutorial.myshopify.com and enter the password: charol.",
      "Identify each sidebar menu item: Home, Orders, Products, Customers, Content, Analytics, Marketing, Discounts, Online Store, Apps, and Settings.",
      "Click each menu item and describe its purpose in one sentence before moving on.",
      "Follow each step in the popup before trying it in the tutorial store.",
      "Keep the lesson light: identify where things are before changing anything.",
    ],
  },
  {
    tool: "setup",
    title: "Create the Store and Install Essentials",
    description:
      "Review the Shopify account profile, staff access, billing, and sales channel settings that form the store foundation. Understanding these areas before making changes protects client stores from accidental billing, permission, or channel errors.",
    lessons: 6,
    time: "45m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Ask the trainee to inspect settings first. Billing, payments, domains, and staff access should stay trainer-only.",
    steps: [
      "Log in to the training Shopify account and open Settings > Store details.",
      "Identify store name, business address, currency (AUD or assigned), and timezone.",
      "Open Settings > Users and permissions and review the staff list without adding or removing anyone.",
      "Confirm the Online Store sales channel is active under Settings > Sales channels.",
      "Open Apps, review what is installed, and do not install or remove anything without trainer approval.",
    ],
  },
  {
    tool: "pages",
    title: "Add Pages: About, Contact, FAQ, Policies",
    description:
      "Create standard website pages such as About, Contact, FAQ, and Policies from Online Store > Pages, then prepare them for navigation menus. Pages are a core part of store credibility — a store without an About or Contact page often loses customer trust before they reach checkout.",
    lessons: 5,
    time: "35m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Use hidden practice pages for beginners so they can learn the editor without publishing unfinished content.",
    steps: [
      "Go to Online Store > Pages and review the existing page list.",
      "Click Add page, set the title to 'Practice Page - Your Name', and write two short paragraphs.",
      "Set Visibility to Hidden so the page does not appear to customers.",
      "Save, then return to the Pages list and confirm your page appears.",
      "Open Online Store > Navigation and identify where you would add a link to this page.",
    ],
  },
  {
    tool: "theme",
    title: "Open the Theme Customizer",
    description:
      "Find the Shopify theme editor and learn how templates, sections, blocks, settings, and preview controls work together. Understanding the customizer layout before saving any changes prevents accidental layout breaks on the live storefront.",
    lessons: 6,
    time: "48m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Before saving, have the trainee identify the template selector, sections panel, blocks, and preview controls.",
    steps: [
      "Go to Online Store > Themes and identify the active theme.",
      "Click Customize on the active theme to open the editor.",
      "Use the template selector at the top to switch between Home, Product, Collection, and Page templates.",
      "Click a section in the left panel, then expand its blocks and inspect the settings.",
      "Switch between desktop and mobile preview before asking the trainer whether to save.",
    ],
  },
  {
    tool: "products",
    title: "Add Products and Collections",
    description:
      "Create draft products, upload images, set prices, manage inventory, add variants, and group items into collections so the storefront is ready for customers. Each product field — price, SKU, inventory tracking, shipping weight, SEO title — directly affects what customers see and what orders the store can fulfil.",
    lessons: 7,
    time: "1h 10m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Practice products should stay Draft until the trainee understands price, inventory, media, variants, and status.",
    steps: [
      "Go to Products and click Add product.",
      "Set the title to 'Training Product - Your Name', write a short description, and upload one test image.",
      "Set a price, enable inventory tracking, and choose a SKU or leave blank for practice.",
      "Add at least one variant option (e.g. Size: Small / Large) to see how variants work.",
      "Set status to Draft, save, then open Collections and add the product to a practice collection.",
      "Open the SEO section at the bottom of the product page and fill in the SEO title and meta description fields.",
      "Click the eye icon or View on storefront to preview how the product page looks to customers.",
    ],
  },
  {
    tool: "theme",
    title: "Edit Homepage Sections",
    description:
      "Update the hero banner, featured collection, image banners, and text blocks that make up the Shopify homepage. The homepage is often the first thing a customer sees, so every section edit — image, heading, button text — has an immediate impact on the brand impression and conversion rate.",
    lessons: 5,
    time: "42m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Let trainees inspect sections before editing copy. This prevents random layout changes in the theme editor.",
    steps: [
      "Open Online Store > Themes and click Customize on the active theme.",
      "Select Home page from the template selector at the top.",
      "Click the Image banner or hero section and identify the Heading, Subheading, Button label, and Image fields.",
      "Make one assigned text change, then check the desktop preview for layout and the mobile preview for overflow.",
      "Only click Save when the trainer confirms the change is approved.",
    ],
  },
  {
    tool: "pages",
    title: "Add Navigation Menu Links",
    description:
      "Make pages, collections, products, and policy pages visible to customers by adding them to the correct header or footer menu. Without a menu link, even a fully built page is invisible to customers — so understanding menu structure is essential before any store goes live.",
    lessons: 4,
    time: "30m",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Menu edits affect storefront navigation, so beginners should use an assigned practice menu when possible.",
    steps: [
      "Go to Online Store > Navigation and open the Main menu.",
      "Click Add menu item, name the link (e.g. About), and select the destination page from the search field.",
      "Save the menu, then open the storefront to confirm the link appears in the header.",
      "Open Footer menu and review which policy or secondary links belong there.",
      "Open the storefront on a mobile screen or use browser device emulation to check the hamburger menu.",
    ],
  },
  {
    tool: "setup",
    title: "Before Launch: Settings Check",
    description:
      "Review payments, shipping, taxes, checkout, domains, notifications, and storefront password protection before a Shopify store goes live. Each of these settings can silently block orders, charge customers the wrong amount, or expose an incomplete store to the public if not reviewed carefully.",
    lessons: 9,
    time: "1h 25m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Use this as a read-only review until the trainee can explain the risk of each launch setting.",
    steps: [
      "Open Settings > Payments and confirm the payment provider is active and test mode is off.",
      "Open Settings > Shipping and delivery and check that rates are set correctly for all regions.",
      "Open Settings > Taxes and duties and confirm the tax region and included/excluded tax rule is correct.",
      "Open Settings > Checkout and review customer accounts, order notes, and tipping settings.",
      "Open Settings > Notifications and confirm order confirmation email looks correct.",
      "Open Settings > Domains and confirm the correct custom domain is connected.",
      "Walk through the cart to checkout in the storefront preview and check for broken links or missing images before removing the password.",
    ],
  },
  {
    tool: "dev",
    title: "Developer Setup: VS Code and Terminal",
    description:
      "Install Visual Studio Code and learn how the editor, integrated terminal, file explorer, and extensions work together as the developer workspace. A correctly configured local workspace is the difference between running Shopify CLI commands that work immediately and spending an hour debugging the wrong folder or missing tool.",
    lessons: 5,
    time: "45m",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Keep this setup module practical. The trainee should be able to open the project folder and terminal before touching code.",
    steps: [
      "Download and install VS Code from code.visualstudio.com.",
      "Open the theme project folder using File > Open Folder — not a single file.",
      "Open the integrated terminal with Terminal > New Terminal and confirm the path matches the project folder.",
      "Install the Shopify Liquid extension from the VS Code Marketplace for syntax support.",
      "Confirm you can use Explorer to find files, Search to find text, Source Control to see changes, and Terminal to run commands.",
    ],
  },
  {
    tool: "dev",
    title: "Install Node, npm, Git, and Shopify CLI",
    description:
      "Install and verify Node.js, npm, Git, and Shopify CLI — the four command-line tools that every Shopify theme developer needs before working with a theme project. Running a version check on each tool before starting a project prevents cryptic errors that waste hours of debugging time.",
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
      "Learn the daily Shopify CLI commands — theme dev, theme pull, theme check, and theme push — and understand when each one reads from Shopify versus writes to it. Using the wrong command in the wrong direction can overwrite local work or push untested code to a live storefront.",
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
      "Understand the Shopify theme folder structure — assets, config, layout, locales, sections, snippets, and templates — and know when and why to run npm install versus shopify theme dev. Confusing these two commands is one of the most common beginner mistakes and can lead to editing files in the wrong place or previewing stale code.",
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
    title: "Build Tools: Gulp Watch and Theme Preview",
    description:
      "Run the Gulp asset watcher and Shopify theme preview simultaneously in two separate terminals so SCSS compiles and theme changes refresh in real time while you code. Keeping both processes running is what makes the local development loop fast — stopping one without realising it is a common source of confusing delays.",
    lessons: 7,
    time: "55m",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    trainerNote:
      "Use this only for projects that actually include Gulp. If the project uses npm scripts, Vite, or another build tool, follow package.json instead.",
    steps: [
      "Open the correct theme project folder.",
      "Run npm install if dependencies are not installed.",
      "Run gulp watch in one terminal.",
      "Open a second terminal.",
      "Run shopify theme dev --store sample-store.myshopify.com.",
      "Keep both terminals running while editing.",
      "Stop watchers with Ctrl + C when finished.",
    ],
  },
  {
    tool: "dev",
    title: "Developer Troubleshooting Checklist",
    description:
      "Diagnose common beginner setup problems — wrong folder, missing tool versions, incorrect Shopify login — using a consistent checklist before escalating. Following the same diagnostic order every time builds the habit of calm, methodical problem-solving instead of guessing and making things worse.",
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
      "Confirm the correct GitHub account, repository, and branch access with the supervisor before installing GitHub Desktop and cloning any project. Accessing the wrong repository or guessing company credentials is a security risk that can expose client code or lock a team account.",
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
      "Practice the safe daily GitHub Desktop loop: fetch, pull, branch, edit, review changed files, write a clear commit message, push, and notify the supervisor. Each step in this loop protects the team from overwriting each other's work or pushing unreviewed changes to a shared branch.",
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
      "Learn the BEM naming convention — Block, Element, Modifier — so CSS class names are readable, predictable, and reusable across any project. Consistent naming conventions reduce the time spent hunting for which CSS class controls which part of a component, especially when another developer joins the project.",
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
      "Apply BEM naming to realistic UI components — product cards, buttons, forms — including state classes like is-active, is-loading, and responsive variants. Learning to map a full component naming structure before writing any CSS prevents the messy mixed-naming patterns that make stylesheets hard to maintain as a project scales.",
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
      "Learn SCSS syntax — variables, shallow nesting, and the ampersand (&) — and understand exactly what CSS each pattern compiles to before writing more. Knowing the compiled output before you write nested SCSS is what separates developers who write maintainable stylesheets from those who introduce impossible-to-override specificity problems.",
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
      "Apply professional SCSS structure using partials, design tokens, mixins, responsive helpers, and a code review checklist that catches naming, specificity, and compiled output problems. Senior developers review the compiled CSS output — not just the source SCSS — before approving work, because clean-looking SCSS can still produce bloated or fragile CSS.",
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
  "Build Tools: Gulp Watch and Theme Preview": {
    title: "Run local build and Shopify preview",
    description: "Use two terminals: one for the asset watcher and one for Shopify theme preview.",
    tasks: [
      "Run npm install from the project folder.",
      "Run gulp watch in terminal one.",
      "Run shopify theme dev --store sample-store.myshopify.com in terminal two.",
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
    description: "Go to the KNB tutorial store and enter the password to access the practice storefront. This is the customer-facing side of the store, not the Shopify admin — knowing the difference between the two is the first thing every trainee must understand before doing any work.",
    imageTitle: "KNB tutorial store password entry screen",
    imageHint: "Screenshot should show: the storefront password page with the password input field, the Enter store button, and the store name visible in the browser tab.",
    nav: "Open store",
    action: "Open tutorial store",
    url: TRAINING_STORE_URL,
    tryTasks: ["Open the store link in a new tab.", "Enter the password: charol and click Enter store.", "Look at the storefront homepage and identify one product or banner.", "Keep this tab open alongside the Shopify admin tab so you can compare both views."],
    example: "Example: this is the customer-facing practice store, not the Shopify admin. A customer sees this; a staff member works in the admin.",
    mistake: "Do not confuse the storefront password (charol) with your Shopify staff account login — they are different credentials used in different places.",
    question: "What password opens the storefront?",
    answers: ["charol", "admin", "shopify"],
    correct: "charol",
  },
  {
    title: "Home",
    label: "Dashboard navigation",
    description: "Home shows setup task reminders, store performance alerts, and quick activity summaries that help you orient yourself before starting any work. It is the first screen you see after logging in and acts as a status dashboard — not a starting point for editing anything.",
    imageTitle: "Shopify admin Home dashboard with setup cards and store alerts",
    imageHint: "Screenshot should show: the Shopify admin Home page with at least one setup task card, the store name in the top-left, and the left sidebar menu visible.",
    image: "assets/shopify-home-dashboard.png",
    nav: "Home",
    action: "Open Home in Shopify admin",
    url: TRAINING_STORE_ADMIN_URL,
    tryTasks: ["Click Home in the left sidebar.", "Find and read one setup task card or recommendation.", "Identify the store name shown at the top of the sidebar.", "Note whether there are any alerts or required actions before moving on."],
    example: "Example: use Home when you want a quick status check before doing store work. If there is a setup card saying 'Add your first product', that is a prompt — not a requirement to act right now.",
    mistake: "Do not start changing settings from Home. Use it for orientation first, then navigate to the specific area.",
    question: "Home is mainly for...",
    answers: ["Setup prompts and alerts", "Product prices", "Discount codes"],
    correct: "Setup prompts and alerts",
  },
  {
    title: "Orders",
    label: "Dashboard navigation",
    description: "Orders is where you check purchases, payment status, fulfillment progress, and initiate refunds when authorised. This is a high-impact area because any action taken on an order — refund, cancel, fulfill — immediately affects a real customer and real money, so beginners should view only.",
    imageTitle: "Shopify admin Orders list with payment status and fulfillment columns",
    imageHint: "Screenshot should show: the Orders list page with the order number column, payment status badge (e.g. Paid), fulfillment status badge (e.g. Unfulfilled), and the filter/view tabs at the top.",
    nav: "Orders",
    action: "Open Orders in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/orders`,
    tryTasks: ["Click Orders in the left sidebar.", "Identify the column headers: Order, Date, Customer, Total, Payment status, Fulfillment status.", "Find the filter or view tabs at the top of the list (e.g. Open, Unfulfilled, Unpaid).", "Click one order to see its detail view — do not take any action on it."],
    example: "Example: if a customer asks about a purchase, start in Orders and search by order number or customer email.",
    mistake: "Do not refund, cancel, or fulfill orders unless assigned by a trainer. These actions are immediate and affect real customers.",
    question: "Orders is where you check...",
    answers: ["Purchases and fulfillment", "Theme colors", "Store files"],
    correct: "Purchases and fulfillment",
  },
  {
    title: "Products",
    label: "Dashboard navigation",
    description: "Products is where you create and manage the items for sale — including title, description, images, price, inventory, variants, and collections. Every detail here shapes what customers see on the storefront and what can be ordered at checkout, so incorrect pricing or inventory settings have a direct business impact.",
    imageTitle: "Shopify admin Products list with status, price, and inventory columns",
    imageHint: "Screenshot should show: the Products list with the product title column, Status badge (Active / Draft), Inventory count, and the Add product button in the top-right corner.",
    nav: "Products",
    action: "Open Products in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/products`,
    tryTasks: ["Click Products in the left sidebar.", "Find the Add product button in the top-right.", "Identify the Status, Inventory, and Type columns in the product list.", "Click one existing product to view its fields — do not change anything."],
    example: "Example: use Products to create a draft item before it appears on the store. A Draft product is invisible to customers until its status is set to Active.",
    mistake: "Keep practice products as Draft unless the trainer says to publish. Publishing a practice product makes it visible to real customers immediately.",
    question: "Products is for...",
    answers: ["Items, prices, inventory", "Customer emails", "Sales reports"],
    correct: "Items, prices, inventory",
  },
  {
    title: "Customers",
    label: "Dashboard navigation",
    description: "Customers shows buyer profiles, full order history, tags, and customer segments used for marketing. This data is personal information that belongs to real people, so editing, deleting, or exporting customer records must only happen when explicitly assigned and approved.",
    imageTitle: "Shopify admin Customers list with name, email, and order count columns",
    imageHint: "Screenshot should show: the Customers list with the customer name, email, location, orders count, and total spent columns visible, plus the search bar at the top.",
    nav: "Customers",
    action: "Open Customers in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/customers`,
    tryTasks: ["Click Customers in the left sidebar.", "Use the search bar to search for any customer name.", "Identify the columns shown: customer name, email, orders, and total spent.", "Click one customer profile to see their order history — do not edit any data."],
    example: "Example: use Customers to review a buyer profile and past orders when a customer contacts support about their order.",
    mistake: "Do not edit, tag, or delete customer data during the tour. Customer records contain personal information and should only be changed with explicit approval.",
    question: "Customers shows...",
    answers: ["Buyer profiles", "Theme sections", "Shipping rates"],
    correct: "Buyer profiles",
  },
  {
    title: "Content",
    label: "Dashboard navigation",
    description: "Content is where uploaded files — images, PDFs, videos — and reusable store assets are stored and managed. Files uploaded here may be referenced by pages, theme sections, or product listings, so deleting a file without checking its usage can break content across the store.",
    imageTitle: "Shopify admin Content area showing Files tab with uploaded images",
    imageHint: "Screenshot should show: the Content > Files area with at least one uploaded image visible, the Upload files button in the top-right, and the file URL column.",
    nav: "Content",
    action: "Open Content in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/content`,
    tryTasks: ["Click Content in the left sidebar.", "Find the Files section and identify the file list.", "Hover over one file to see the URL or copy-link option.", "Do not upload, replace, or delete any files during this orientation."],
    example: "Example: upload brand assets such as logos or PDFs here only when assigned. Uploaded file URLs can be used in theme sections or page content.",
    mistake: "Do not delete files. A file that appears unused may still be referenced by a page, theme section, or product image URL.",
    question: "Content is commonly used for...",
    answers: ["Files and reusable content", "Refunds", "Checkout payment capture"],
    correct: "Files and reusable content",
  },
  {
    title: "Analytics",
    label: "Dashboard navigation",
    description: "Analytics shows total sales, online store sessions, conversion rate, and detailed reports that help evaluate store performance over time. A single metric never tells the full story — checking sales without checking sessions, or sessions without conversion rate, leads to wrong conclusions about what is working.",
    imageTitle: "Shopify admin Analytics overview with sales, sessions, and conversion rate metrics",
    imageHint: "Screenshot should show: the Analytics overview page with the date range picker, the Total sales card, the Online store sessions card, and the Conversion rate card all visible.",
    nav: "Analytics",
    action: "Open Analytics in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/analytics`,
    tryTasks: ["Click Analytics in the left sidebar.", "Find the date range picker and set it to Last 30 days.", "Identify the Total sales, Online store sessions, and Conversion rate cards.", "Click Reports to see the full list of available report categories."],
    example: "Example: use Analytics to prepare a quick store performance summary before a client meeting by setting the date range to the current month.",
    mistake: "Do not judge performance from one metric alone. Always check the date range first — a low sales number on a one-day view is very different from a low 30-day trend.",
    question: "Analytics helps you check...",
    answers: ["Sales and traffic", "Page content", "App permissions"],
    correct: "Sales and traffic",
  },
  {
    title: "Marketing",
    label: "Dashboard navigation",
    description: "Marketing is where ad campaigns, email automations, and promotional flows are created and monitored. Launching or editing a marketing campaign sends real messages to real customers, so any changes require explicit trainer or client approval before the trainee acts.",
    imageTitle: "Shopify admin Marketing overview with Campaigns and Automations tabs",
    imageHint: "Screenshot should show: the Marketing page with the Campaigns tab and Automations tab visible, plus the Create campaign button in the top-right corner.",
    nav: "Marketing",
    action: "Open Marketing in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/marketing`,
    tryTasks: ["Click Marketing in the left sidebar.", "Find the Campaigns tab and the Automations tab.", "Identify the Create campaign button but do not click it.", "Read the name of any existing campaign or automation without opening it."],
    example: "Example: marketing campaigns and email flows are reviewed here. An email automation that fires on purchase is configured in this section.",
    mistake: "Do not launch, pause, or edit any campaign or automation without approval. Even pausing an active email flow can affect customer experience.",
    question: "Marketing is for...",
    answers: ["Campaigns and automations", "Tax settings", "Order refunds"],
    correct: "Campaigns and automations",
  },
  {
    title: "Discounts",
    label: "Dashboard navigation",
    description: "Discounts is where percentage-off, fixed-amount, and free-shipping promo codes and automatic discounts are created and managed. An untested or incorrectly configured discount code can cause revenue loss if customers apply it more broadly than intended — always test before sharing.",
    imageTitle: "Shopify admin Discounts page showing code discounts and automatic discounts tabs",
    imageHint: "Screenshot should show: the Discounts page with the Code tab and Automatic tab visible, a list of existing discount codes, and the Create discount button in the top-right corner.",
    nav: "Discounts",
    action: "Open Discounts in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/discounts`,
    tryTasks: ["Click Discounts in the left sidebar.", "Find the Code discounts tab and identify any existing codes.", "Click the Automatic discounts tab and check if any are active.", "Identify the Create discount button but do not create anything yet."],
    example: "Example: create a code called WELCOME10 here when assigned a promo task. Set it to 10% off with a usage limit so it cannot be used more than intended.",
    mistake: "Always test a discount code in the storefront before sharing it with customers. An incorrect minimum order value or product restriction can allow unintended free or over-discounted orders.",
    question: "Discounts is where you create...",
    answers: ["Promo codes", "Product images", "Customer addresses"],
    correct: "Promo codes",
  },
  {
    title: "Online Store",
    label: "Dashboard navigation",
    description: "Online Store is the section that controls everything customers see: themes, pages, navigation menus, blog posts, and storefront preferences. This is the most frequently used section for KNB Web Solution work — theme edits, page creation, and menu changes all happen here.",
    imageTitle: "Shopify admin Online Store submenu showing Themes, Blog posts, Pages, Navigation, and Preferences",
    imageHint: "Screenshot should show: the Online Store section expanded in the left sidebar with all five sub-items visible — Themes, Blog posts, Pages, Navigation, and Preferences.",
    nav: "Online Store",
    action: "Open Online Store themes",
    url: `${TRAINING_STORE_ADMIN_URL}/themes`,
    tryTasks: ["Click Online Store in the left sidebar to expand it.", "Identify the five sub-sections: Themes, Blog posts, Pages, Navigation, and Preferences.", "Click Themes and confirm the active theme is visible.", "Click Pages and identify how many pages the training store has."],
    example: "Example: use Online Store > Themes to open the theme customizer, Online Store > Pages to add content pages, and Online Store > Navigation to manage header and footer menus.",
    mistake: "Do not publish a new theme or change the active theme without trainer approval. Publishing a new theme immediately changes what all customers see.",
    question: "Online Store includes...",
    answers: ["Themes and pages", "Payment payouts", "Customer passwords"],
    correct: "Themes and pages",
  },
  {
    title: "Apps",
    label: "Dashboard navigation",
    description: "Apps shows all installed third-party Shopify apps that extend store functionality — reviews, subscriptions, loyalty programs, email tools, and more. Installing an untested app can slow the storefront, add unexpected charges to the billing account, or introduce conflicts with the active theme.",
    imageTitle: "Shopify admin Apps page showing installed app list with app names and manage buttons",
    imageHint: "Screenshot should show: the Apps page with a list of installed apps, each showing the app name, logo, and a Manage or Settings button. The App store button should be visible in the top-right.",
    nav: "Apps",
    action: "Open Apps in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/apps`,
    tryTasks: ["Click Apps in the left sidebar.", "Read the list of installed apps and note what each one does.", "Do not click Install, Remove, or Uninstall on any app.", "Note the App store link — this is where new apps can be browsed but not installed without approval."],
    example: "Example: apps add features like product reviews, subscriptions, or email marketing tools. Each app may add code to the theme and add a billing charge.",
    mistake: "Do not install or remove apps without approval. Removing an app can break theme sections that depended on that app's code blocks.",
    question: "Apps should be changed...",
    answers: ["Only with approval", "Anytime", "Before checking products"],
    correct: "Only with approval",
  },
  {
    title: "Settings",
    label: "Dashboard navigation",
    description: "Settings controls the store foundation — payments, shipping rates, taxes, domains, checkout behaviour, staff users, and email notifications. Changes in Settings can affect every order, every customer interaction, and the billing account, which is why most Settings areas are trainer-only during beginner training.",
    imageTitle: "Shopify admin Settings page with the full list of setting categories visible",
    imageHint: "Screenshot should show: the Settings page with the left navigation list of categories visible — Store details, Plan, Billing, Users and permissions, Payments, Checkout, Shipping and delivery, Taxes and duties, Domains, and Notifications.",
    nav: "Settings",
    action: "Open Settings in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/settings`,
    tryTasks: ["Click Settings at the bottom of the left sidebar.", "Read the list of setting categories on the left side of the Settings page.", "Open Store details and identify the store name, timezone, and currency.", "Find Payments, Shipping and delivery, Domains, and Notifications — do not change anything in any of them."],
    example: "Example: Settings controls the store foundation. Changing payment providers, domain connection, or tax rules without review can break checkout or expose the store to incorrect charges.",
    mistake: "Do not change payments, domains, taxes, or users during beginner training. Each of these areas has irreversible or immediately-live consequences.",
    question: "Settings controls...",
    answers: ["Payments and shipping", "Product photos only", "Blog comments only"],
    correct: "Payments and shipping",
  },
];

const setupSteps = [
  {
    title: "Store details",
    label: "Store foundation",
    description: "The Store details page holds the store name, legal business name, address, currency, and timezone — the core identity that appears on invoices, receipts, and shipping labels. Incorrect details here flow through to customer-facing documents, so always verify before beginning client work rather than after.",
    imageTitle: "Settings > Store details page showing store name, address, currency, and timezone fields",
    imageHint: "Screenshot should show: the Store details settings page with the Store name field, Legal name field, Store address section, Store currency dropdown (e.g. AUD), and Timezone dropdown all visible.",
    nav: "Store details",
    action: "Open Store details",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/general`,
    tryTasks: ["Open Settings from the bottom of the left sidebar.", "Click Store details in the settings list.", "Read and note the store name, legal name, and currency shown on the page.", "Identify the Timezone field and confirm it matches the store's operating region."],
    example: "Example: use Store details to confirm the store profile before starting client setup work. The currency set here determines what currency prices display in — it cannot be changed after orders exist.",
    mistake: "Do not change the business address, currency, or legal details without explicit approval. Currency changes are locked once the store has order history.",
    question: "Store details is mainly for...",
    answers: ["Store profile basics", "Theme sections", "Discount rules"],
    correct: "Store profile basics",
  },
  {
    title: "Users and permissions",
    label: "Staff access",
    description: "Users and permissions controls which staff accounts can log into the Shopify admin and what actions they are allowed to take within it. Granting too many permissions to a trainee account is a real risk — a staff member with full access can change billing, payment providers, or delete products without realising the impact.",
    imageTitle: "Settings > Users and permissions page showing the staff list and permission groups",
    imageHint: "Screenshot should show: the Users and permissions page with the staff account list, each showing the staff name, email, and status. The Invite staff button should be visible in the top-right.",
    nav: "Staff access",
    action: "Open Users and permissions",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/account`,
    tryTasks: ["Open Settings > Users and permissions.", "Read the staff list and note how many staff accounts exist.", "Click one staff account to view its permission checkboxes — do not change anything.", "Identify where the Invite staff button is without clicking it."],
    example: "Example: staff access controls who can enter the Shopify admin and what they can do. A trainee account might have Products and Online Store access, but not Payments or Billing.",
    mistake: "Do not invite, remove, or change staff permissions during beginner training. Adding an incorrect email or wrong permission level can give unauthorised access to a client store.",
    question: "Staff access controls...",
    answers: ["Who can use the admin", "Product image sizes", "Homepage banners"],
    correct: "Who can use the admin",
  },
  {
    title: "Billing awareness",
    label: "Billing",
    description: "Billing shows the current Shopify plan, app charges, and the payment method used for monthly invoices. This is one of the most restricted areas in any Shopify store — an accidental plan change or credit card update can cause an immediate charge or service interruption for the client.",
    imageTitle: "Settings > Billing page showing current plan, app charges, and payment method",
    imageHint: "Screenshot should show: the Billing settings page with the current plan name visible (e.g. Shopify or Basic), the Payment method section, and the Bills and charges section — without any sensitive card numbers visible.",
    nav: "Billing",
    action: "Open Billing",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/billing`,
    tryTasks: ["Open Settings > Billing.", "Identify the current plan name shown at the top of the page.", "Find the Payment method section — do not click Edit.", "Find the Bills section and note whether any charges are listed."],
    example: "Example: billing is reviewed by store owners or approved managers only. A trainee should be able to identify which plan the store is on, but should never click Edit or Upgrade.",
    mistake: "Do not change the plan, payment method, or billing contact. Even clicking the wrong button here can trigger an immediate billing action on the store owner's card.",
    question: "Billing should be changed...",
    answers: ["Only by approved people", "By every trainee", "Before adding products"],
    correct: "Only by approved people",
  },
  {
    title: "Sales channel check",
    label: "Online Store",
    description: "The Online Store sales channel provides the public storefront and is the foundation for themes, pages, navigation menus, and blog posts. Without this channel active, there is no customer-facing website — so confirming it exists is one of the first setup checks before any storefront work begins.",
    imageTitle: "Online Store sales channel active in the left sidebar with Themes, Pages, and Navigation visible",
    imageHint: "Screenshot should show: the left sidebar with Online Store expanded and showing the Themes, Blog posts, Pages, Navigation, and Preferences sub-menu items. The Online Store section should be clearly active.",
    nav: "Sales channel",
    action: "Open Online Store",
    url: `${TRAINING_STORE_ADMIN_URL}/themes`,
    tryTasks: ["Check that Online Store appears in the left sidebar under the Sales channels group.", "Click Online Store > Themes and confirm the active theme is listed.", "Click Online Store > Pages and confirm the Pages list loads correctly.", "Click Online Store > Navigation and confirm at least one menu exists."],
    example: "Example: Online Store is the channel for storefront design and content. If it were removed, the storefront would go offline and customers could not visit the store URL.",
    mistake: "Do not remove sales channels from a training or client store. Removing Online Store makes the storefront immediately inaccessible to customers.",
    question: "Online Store is needed for...",
    answers: ["Themes and pages", "Staff passwords", "Tax invoices only"],
    correct: "Themes and pages",
  },
  {
    title: "Approved app rule",
    label: "Apps",
    description: "The rule for apps in any KNB-managed store is: only install when the workflow requirement is clear and the trainer or client has given explicit approval. Apps can add recurring billing charges, inject theme code, slow the storefront, and expose customer data to third parties — all of which require deliberate review before installation.",
    imageTitle: "Shopify admin Apps page showing the installed app list and App store button",
    imageHint: "Screenshot should show: the Apps page with the installed app list visible, the App store button in the top-right, and any embedded app sections listed below the installed apps.",
    nav: "Apps rule",
    action: "Open Apps",
    url: `${TRAINING_STORE_ADMIN_URL}/apps`,
    tryTasks: ["Open Apps from the left sidebar.", "Read the list of installed apps and identify what each one does.", "Open one app's settings page to see what data it accesses — do not change any settings.", "Do not install or remove any apps during this step."],
    example: "Example: apps can affect theme speed, billing, checkout experience, and customer data privacy. A review app adds billing; a loyalty app may store customer emails externally.",
    mistake: "Do not test random apps in a shared training or client store. Even free apps can add theme code or send customer data to external servers.",
    question: "Apps should be installed...",
    answers: ["Only after approval", "Whenever curious", "Before checking settings"],
    correct: "Only after approval",
  },
  {
    title: "Setup review",
    label: "Review",
    description: "Finish the setup module by verbally naming which areas are safe to inspect and which areas require trainer approval before any changes are made. The goal of this review is to build the habit of pausing and checking before acting — a critical skill for working on real client stores.",
    imageTitle: "Shopify admin Settings page overview used as a setup review reference",
    imageHint: "Screenshot should show: the Settings page with the full list of setting categories visible in the left panel, used as a reference while the trainee calls out safe versus restricted areas.",
    nav: "Review",
    action: "Open Settings",
    url: `${TRAINING_STORE_ADMIN_URL}/settings`,
    tryTasks: ["Name three setup areas a beginner can safely inspect: for example, Store details, Online Store, and Apps.", "Name two areas that require trainer approval before changes: for example, Billing and Payments.", "Tell the trainer which specific field you would check first if asked to verify the store currency.", "Confirm with the trainer that setup review is complete before moving to the next module."],
    example: "Example: safe beginner setup work starts with identifying areas, not changing live settings. A trainee should be able to navigate to any Settings area without triggering any action.",
    mistake: "Do not treat setup as a checklist to edit without instructions. Every field in Settings has a live consequence — reading is safe, changing is not.",
    question: "The beginner setup goal is...",
    answers: ["Know where setup areas live", "Change billing quickly", "Install many apps"],
    correct: "Know where setup areas live",
  },
];

const pagesSteps = [
  {
    title: "Open Pages",
    label: "Pages",
    description: "The Pages area under Online Store is where standard informational pages — About, Contact, FAQ, and policy pages — are created and managed. These pages are different from product or collection pages because they contain static content written by the store team, not automatically generated from catalogue data.",
    imageTitle: "Online Store > Pages list showing page titles, visibility status, and Add page button",
    imageHint: "Screenshot should show: the Pages list with at least two pages visible, the page title column, the Visibility status indicator (Visible or Hidden), and the Add page button in the top-right corner.",
    nav: "Open Pages",
    action: "Open Pages in Shopify admin",
    url: `${TRAINING_STORE_ADMIN_URL}/pages`,
    tryTasks: ["Open Online Store in the left sidebar and click Pages.", "Read the page list and note the page titles that already exist.", "Identify the Visibility column and note which pages are Visible versus Hidden.", "Find the Add page button in the top-right without clicking it yet."],
    example: "Example: About, Contact, FAQ, and Refund Policy pages are usually managed here. Product pages are generated automatically from the Products section, not created here.",
    mistake: "Do not edit live client page copy during the first practice run. Saving a change to a visible page immediately updates what customers see.",
    question: "Pages is mainly used for...",
    answers: ["Standard website pages", "Refunding orders", "Theme app embeds"],
    correct: "Standard website pages",
  },
  {
    title: "Add a practice page",
    label: "Create page",
    description: "Create a clearly named trainee practice page so it can be identified and removed later without confusion. Naming practice content properly matters on shared stores — a page called 'Test' with no context is indistinguishable from an abandoned client page.",
    imageTitle: "Add page editor showing Title field, content editor, and Visibility dropdown",
    imageHint: "Screenshot should show: the Add page screen with the Title field filled in as 'Practice Page - Your Name', the rich text content editor with sample text, and the Visibility dropdown on the right side showing Hidden selected.",
    nav: "Add page",
    action: "Add a page",
    url: `${TRAINING_STORE_ADMIN_URL}/pages/new`,
    tryTasks: ["Click Add page in the top-right of the Pages list.", "Type the title: Practice Page - Your Name (use your actual first name).", "Write two short paragraphs in the content editor using the formatting toolbar.", "Set the Visibility dropdown on the right to Hidden before saving."],
    example: "Example: 'Practice Page - Angelo' makes it immediately obvious this is a training page and belongs to a specific trainee.",
    mistake: "Do not use a vague page title like Test or Untitled because it becomes hard to manage later and could get deleted by another staff member thinking it is abandoned.",
    question: "A good practice page title includes...",
    answers: ["Your name", "A random number only", "The word checkout"],
    correct: "Your name",
  },
  {
    title: "Set visibility",
    label: "Visibility",
    description: "The Visibility setting controls whether a page is publicly accessible on the storefront or hidden from customers. Setting practice pages to Hidden lets you save and revisit them safely without any risk of customers finding unfinished or placeholder content.",
    imageTitle: "Page editor right panel showing the Visibility dropdown set to Hidden",
    imageHint: "Screenshot should show: the right-side panel of the page editor with the Visibility dropdown expanded, showing the Hidden option selected, and the Publish date field below it greyed out.",
    nav: "Visibility",
    action: "Open Pages",
    url: `${TRAINING_STORE_ADMIN_URL}/pages`,
    tryTasks: ["On the page editor, find the Visibility section in the right-side panel.", "Click the Visibility dropdown and read both options: Visible and Hidden.", "Select Hidden as the trainer-approved setting for practice pages.", "Note that a Hidden page can still be opened directly by URL but will not appear in navigation menus automatically."],
    example: "Example: hidden pages can be saved and shared by direct URL without appearing to customers browsing the site.",
    mistake: "Do not publish unfinished practice content by leaving Visibility set to Visible. Customers will be able to find the page immediately.",
    question: "If unsure, a practice page should be...",
    answers: ["Hidden", "Published immediately", "Deleted before saving"],
    correct: "Hidden",
  },
  {
    title: "Save and verify",
    label: "Save",
    description: "Save the page and confirm it appears in the admin page list by searching for it by title. Checking that the save worked is a professional habit — assuming it saved without verifying leads to lost content when a session times out or a browser tab closes.",
    imageTitle: "Pages list with the newly saved practice page visible in the list",
    imageHint: "Screenshot should show: the Pages list after saving, with the new practice page title visible in the list, its visibility status showing Hidden, and the Save button greyed out (confirming the save was successful).",
    nav: "Save",
    action: "Open Pages",
    url: `${TRAINING_STORE_ADMIN_URL}/pages`,
    tryTasks: ["Click the Save button in the top-right of the page editor.", "Return to Online Store > Pages using the breadcrumb or left sidebar.", "Find your practice page in the list by its full title.", "Click the page title once to confirm its content and visibility are exactly as you saved them."],
    example: "Example: verification means checking the page exists after saving, not guessing. If you cannot find it in the list, the save may not have completed.",
    mistake: "Do not assume a page is saved until the admin page list confirms it. A browser error or session timeout can silently discard unsaved changes.",
    question: "After saving, verify the page by...",
    answers: ["Finding it in the list", "Closing the browser", "Changing theme colors"],
    correct: "Finding it in the list",
  },
  {
    title: "Navigation awareness",
    label: "Menus",
    description: "A saved page does not automatically appear in any storefront menu — it must be added as a menu item with a specific link destination. This is one of the most common beginner confusions: a client asks 'why can't customers find the Contact page?' and the answer is always a missing menu link.",
    imageTitle: "Online Store > Navigation > Main menu showing the Add menu item button",
    imageHint: "Screenshot should show: the Main menu editor with existing menu items listed, the Add menu item button visible, and the Link field from a previous item showing how a page is selected as a destination.",
    nav: "Menus",
    action: "Open Navigation",
    url: `${TRAINING_STORE_ADMIN_URL}/menus`,
    tryTasks: ["Open Online Store > Navigation from the left sidebar.", "Click Main menu to open the menu editor.", "Identify where the Add menu item button is and what the Name and Link fields look like.", "Do not add your practice page to the live menu unless the trainer explicitly approves it."],
    example: "Example: a Contact page usually appears in the header or footer navigation only after adding a menu item that links to it. The page can exist without ever being in a menu.",
    mistake: "Do not add training pages to a live client menu unless the trainer approves. A menu link appears immediately on the storefront for all customers.",
    question: "A saved page appears in a menu when...",
    answers: ["A menu link is added", "It has two paragraphs", "The title is long"],
    correct: "A menu link is added",
  },
];

const themeSteps = [
  {
    title: "Open Themes",
    label: "Themes",
    description: "The Themes page shows the active theme currently displayed to all customers, plus any unpublished themes in the library. Understanding which theme is active before opening the customizer is critical — edits to the active theme go live immediately when saved, while edits to a library theme do not.",
    imageTitle: "Online Store > Themes page showing active theme and theme library",
    imageHint: "Screenshot should show: the Themes page with the active theme card at the top showing the theme name, a Customize button, and a Live label. Below it, the theme library section should show at least one additional unpublished theme.",
    nav: "Themes",
    action: "Open Themes",
    url: `${TRAINING_STORE_ADMIN_URL}/themes`,
    tryTasks: ["Open Online Store > Themes from the left sidebar.", "Identify which theme is marked as the active or current theme.", "Read the theme name shown on the active theme card.", "Find the Customize button on the active theme — do not click it yet."],
    example: "Example: the active theme is what customers currently see. A library theme can be edited or previewed without affecting customers until it is published.",
    mistake: "Do not publish a different theme during beginner training. Publishing immediately replaces the live storefront with a potentially incomplete theme.",
    question: "The active theme is...",
    answers: ["What customers see", "Only a draft page", "A discount setting"],
    correct: "What customers see",
  },
  {
    title: "Open the customizer",
    label: "Customize",
    description: "Opening the theme customizer launches the visual editing environment where sections, blocks, and theme settings are all accessible in one workspace. Taking a moment to identify all the panels before changing anything prevents accidental edits and makes the customizer feel less overwhelming.",
    imageTitle: "Theme customizer open on the Home page with sections panel and preview visible",
    imageHint: "Screenshot should show: the full theme customizer layout — left sections panel, centre storefront preview, right settings panel — with the Home page template selected in the top dropdown.",
    nav: "Customizer",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Click Customize on the active theme from the Themes page.", "Wait for the editor to load and identify the three main areas: left panel, centre preview, right settings panel.", "Find the template selector dropdown at the top of the page.", "Find the Save button in the top-right — do not click it yet."],
    example: "Example: the customizer lets you edit sections, blocks, theme settings, and preview layout — all without writing code.",
    mistake: "Do not save random visual changes while exploring. Every save immediately updates the live storefront for all customers.",
    question: "The customizer is used to edit...",
    answers: ["Theme sections and settings", "Staff permissions", "Order refunds"],
    correct: "Theme sections and settings",
  },
  {
    title: "Find templates",
    label: "Templates",
    description: "The template selector at the top of the customizer controls which page type you are currently editing — Home, Product, Collection, Page, and more. Editing the wrong template is a common mistake because changes to a shared template like 'Product' apply to every product page that uses it, not just one.",
    imageTitle: "Theme customizer template selector dropdown showing Home, Product, Collection, and Page options",
    imageHint: "Screenshot should show: the template selector dropdown open at the top of the customizer, with the list of available templates visible — Home page, Default product, Default collection, and Contact page at minimum.",
    nav: "Templates",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Click the template selector dropdown at the top of the customizer.", "Read through the list of available templates without selecting anything yet.", "Select Home page from the list to confirm you are on the homepage template.", "Ask the trainer which template you should use for the assigned task before making any changes."],
    example: "Example: changing a layout setting on the Product template affects every product page using that template — not just one product.",
    mistake: "Do not edit the wrong template by accident. Always confirm which template is selected in the top dropdown before making any changes.",
    question: "The template selector helps you choose...",
    answers: ["Which page type to edit", "Which staff user to invite", "Which refund to send"],
    correct: "Which page type to edit",
  },
  {
    title: "Sections and blocks",
    label: "Sections",
    description: "Shopify themes are built from sections — reusable content containers — and blocks, which are smaller editable pieces inside each section. Learning to read the sections panel before editing anything prevents confusing situations where you cannot find the setting you are looking for.",
    imageTitle: "Theme customizer sections panel open with one section expanded showing its blocks",
    imageHint: "Screenshot should show: the left-side sections panel with a list of sections for the Home page, one section expanded to reveal its child blocks (e.g. Heading, Text, Button blocks), and the section settings visible in the right panel.",
    nav: "Sections",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Click one section in the left panel to select it.", "Expand the section to see its block list (e.g. Heading block, Image block, Button block).", "Click one block to see its individual settings in the right panel.", "Identify at least one text field and one image field inside the block settings."],
    example: "Example: an Image banner section typically contains a Heading block, a Subheading block, a Button block, and an image setting — each editable separately.",
    mistake: "Do not delete blocks or sections unless the trainer specifically asks. Deleting a section removes all its content and cannot be undone without re-entering everything.",
    question: "Sections and blocks control...",
    answers: ["Page content pieces", "Billing contact", "Order payment status"],
    correct: "Page content pieces",
  },
  {
    title: "Preview desktop and mobile",
    label: "Preview",
    description: "The preview controls in the customizer let you switch between desktop, tablet, and mobile views without leaving the editor. Checking mobile before saving is essential because most Shopify stores receive more than half their traffic on mobile devices — a layout that works on desktop can break completely on a phone screen.",
    imageTitle: "Theme customizer preview controls showing desktop and mobile toggle buttons",
    imageHint: "Screenshot should show: the top toolbar of the customizer with the desktop, tablet, and mobile preview icon buttons highlighted. The centre preview should show the current page in the selected view mode.",
    nav: "Preview",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Find the preview toggle icons in the top toolbar of the customizer.", "Click the desktop icon and note how the preview width changes.", "Click the mobile icon and check whether text, images, and buttons still look correct.", "Identify any content that looks cut off or misaligned on mobile and note it for the trainer."],
    example: "Example: a hero banner that looks fine on desktop with a large background image can appear too tall on mobile, pushing the heading and button off-screen.",
    mistake: "Do not approve a homepage or section edit without checking both desktop and mobile views. Mobile layout issues are invisible until you switch the preview mode.",
    question: "Before saving theme edits, check...",
    answers: ["Desktop and mobile", "Only desktop", "Only the billing page"],
    correct: "Desktop and mobile",
  },
  {
    title: "Save rule",
    label: "Save",
    description: "The Save button in the theme customizer publishes changes to the live storefront immediately — there is no staging step or confirmation dialog. During training, the rule is: identify the Save button, ask the trainer before using it, and exit without saving if the session is for orientation only.",
    imageTitle: "Theme customizer Save button in the top-right corner",
    imageHint: "Screenshot should show: the top-right area of the theme customizer with the Save button clearly visible, and if possible, the Exit button or breadcrumb alongside it to illustrate both options.",
    nav: "Save rule",
    action: "Open theme editor",
    url: `${TRAINING_STORE_ADMIN_URL}/themes/current/editor`,
    tryTasks: ["Locate the Save button in the top-right corner of the customizer.", "Find the Exit or back button that lets you leave without saving.", "Ask the trainer before clicking Save on any session that started as orientation.", "If no changes were intentionally made, click Exit and confirm you do not want to save."],
    example: "Example: saving is appropriate only when a change has been reviewed and assigned. If you explored sections without intent to publish, always exit without saving.",
    mistake: "Do not save exploratory edits to the active theme. The Save button publishes immediately — there is no undo button after saving a theme change.",
    question: "During orientation, saving should happen...",
    answers: ["Only with approval", "After every click", "Before checking mobile"],
    correct: "Only with approval",
  },
];

const productSteps = [
  {
    title: "Open Products",
    label: "Products",
    description: "The Products section is where every item for sale is created, priced, stocked, and managed. Understanding the products list and its columns — status, inventory, type — before adding anything helps trainees orient themselves and avoids accidental edits to existing live products.",
    imageTitle: "Shopify admin Products list showing title, status, inventory, and type columns",
    imageHint: "Screenshot should show: the Products list with the product title column, Status badge (Active or Draft), Inventory number, Type column, and the Add product button in the top-right corner.",
    nav: "Products",
    action: "Open Products",
    url: `${TRAINING_STORE_ADMIN_URL}/products`,
    tryTasks: ["Click Products in the left sidebar.", "Read the column headers: Title, Status, Inventory, Type, Vendor.", "Find the Add product button in the top-right without clicking it.", "Click one existing product to view its fields — read only, do not change anything."],
    example: "Example: Products is where store items, prices, and inventory are managed. The Status column tells you at a glance whether each product is visible to customers (Active) or hidden (Draft).",
    mistake: "Do not edit live products during first practice. An accidental price change or status toggle on an Active product affects customers immediately.",
    question: "Products controls...",
    answers: ["Items for sale", "Staff permissions", "Theme fonts"],
    correct: "Items for sale",
  },
  {
    title: "Create a draft product",
    label: "Draft item",
    description: "Creating a clearly named draft product is the safe way to learn every product field without risking any change to live store inventory or pricing. The Draft status acts as a protective gate — the product is fully configured but invisible to customers until deliberately set to Active.",
    imageTitle: "Add product page showing Title field, Status set to Draft, and the Save button",
    imageHint: "Screenshot should show: the product editor page with the Title field filled in as 'Training Product - Your Name', the Status dropdown in the right panel set to Draft, and the Save button in the top-right.",
    nav: "Draft",
    action: "Add product",
    url: `${TRAINING_STORE_ADMIN_URL}/products/new`,
    tryTasks: ["Click Add product from the Products list.", "Type the title: Training Product - Your Name using your actual first name.", "Find the Status dropdown in the right panel and confirm it shows Draft.", "Click Save and confirm the product appears in the Products list with a Draft badge."],
    example: "Example: 'Training Product - Angelo' keeps practice work easy to find and immediately identifies it as a training item rather than a real product.",
    mistake: "Do not publish practice products without approval. Switching status from Draft to Active immediately makes the product visible on the storefront.",
    question: "Practice products should start as...",
    answers: ["Draft", "Active", "Archived only"],
    correct: "Draft",
  },
  {
    title: "Price, media, inventory",
    label: "Details",
    description: "The product detail fields — price, compare-at price, media, description, SKU, inventory tracking, and variants — control everything a customer sees and everything an order picks up at checkout. Learning where each field is and what it does before filling in real data prevents pricing errors and inventory mismatches.",
    imageTitle: "Product editor showing the Media, Pricing, Inventory, and Variants sections",
    imageHint: "Screenshot should show: the product editor scrolled to show the Media upload area at the top, the Pricing section with Price and Compare-at price fields, the Inventory section with SKU and Quantity fields, and the Variants section below.",
    nav: "Details",
    action: "Add product",
    url: `${TRAINING_STORE_ADMIN_URL}/products/new`,
    tryTasks: ["Find the Media section and click Add media to see the upload dialog — do not upload unless assigned.", "Find the Pricing section and enter a practice price (e.g. $25.00) in the Price field.", "Find the Inventory section and identify the SKU field and the Track quantity checkbox.", "Find the Variants section and add one option named 'Size' with values 'Small' and 'Large'."],
    example: "Example: variants are used for options like size, color, or material. Each variant combination gets its own price and inventory quantity.",
    mistake: "Do not guess inventory or pricing for real products. An incorrect price entered and published will be charged to real customers at checkout.",
    question: "Variants are used for...",
    answers: ["Options like size/color", "Admin passwords", "Blog posts"],
    correct: "Options like size/color",
  },
  {
    title: "Collections",
    label: "Collections",
    description: "Collections group products into browsable categories that appear on the storefront — New Arrivals, Best Sellers, Sale, or any category a store needs. Without collections, customers must use search to find products; well-structured collections drive browsing and increase order values.",
    imageTitle: "Shopify admin Collections list showing manual and automated collection types",
    imageHint: "Screenshot should show: the Collections list page with at least two collections visible, each showing the collection title, product count, and whether it is Manual or Automated. The Add collection button should be in the top-right.",
    nav: "Collections",
    action: "Open Collections",
    url: `${TRAINING_STORE_ADMIN_URL}/collections`,
    tryTasks: ["Click Products > Collections in the left sidebar.", "Read the collection list and note which are Manual and which are Automated.", "Click one collection to see its product list and the conditions (for Automated) or manual product picker (for Manual).", "Do not add your practice product to any live collection unless the trainer assigns it."],
    example: "Example: 'New Arrivals' and 'Best Sellers' are common collections. An Automated collection can use rules like 'product tag equals new-arrival' to add products automatically.",
    mistake: "Do not add practice products to live client collections unless assigned. A draft product added to an active collection may still appear in that collection if the status later changes.",
    question: "Collections are...",
    answers: ["Groups of products", "Payment settings", "Theme fonts"],
    correct: "Groups of products",
  },
  {
    title: "Product SEO and status",
    label: "SEO",
    description: "The SEO section at the bottom of every product page controls the title and description that appear in Google search results and social sharing previews. Setting a product to Active versus Draft is the final switch that determines whether customers can find and purchase it — so understanding both fields before publishing is essential.",
    imageTitle: "Product editor SEO section showing title and meta description fields, and Status dropdown",
    imageHint: "Screenshot should show: the product editor scrolled to the bottom SEO section with the Page title field, Meta description field, and URL handle field all visible. The Status dropdown in the right panel should also be visible showing Draft or Active.",
    nav: "SEO",
    action: "Add product",
    url: `${TRAINING_STORE_ADMIN_URL}/products/new`,
    tryTasks: ["Open your practice product and scroll to the Search engine listing section at the bottom.", "Fill in the Page title field with the product name and a short keyword phrase (e.g. 'Training Product Small - KNB Store').", "Fill in the Meta description field with one or two sentences describing the product.", "Locate the Status dropdown in the right panel and confirm it reads Draft — do not change it to Active."],
    example: "Example: a good product SEO title is 'Blue Cotton T-Shirt - Free Shipping | Store Name' — it includes the product name, a benefit, and the store brand.",
    mistake: "Do not leave the SEO title blank. Shopify will use the product title by default, which is often not keyword-friendly. Also, setting status to Active without the trainer's sign-off publishes the product immediately.",
    question: "The SEO title and meta description control...",
    answers: ["How the product appears in search results", "The product price at checkout", "Which collection the product belongs to"],
    correct: "How the product appears in search results",
  },
  {
    title: "Preview the product page",
    label: "Preview",
    description: "Before any product is set to Active, use the storefront preview button to check how the product page looks to a real customer — including images, price, variant selector, and the Add to cart button. Previewing first catches layout problems, missing images, or broken variant options before they affect real shoppers.",
    imageTitle: "Product page storefront preview showing product image, title, price, variant selector, and Add to cart button",
    imageHint: "Screenshot should show: the live storefront product page view with the product image on the left, the product title, price, variant dropdown (e.g. Size: Small / Large), and the Add to cart button visible. The page should clearly be the practice product.",
    nav: "Preview",
    action: "Open Products",
    url: `${TRAINING_STORE_ADMIN_URL}/products`,
    tryTasks: ["Open your practice product in the Shopify admin.", "Find the Preview link or eye icon near the top of the product editor.", "Click it to open the product page in a new browser tab as a customer would see it.", "Check that the product image, title, price, variant options, and Add to cart button all display correctly — report any issues to the trainer."],
    example: "Example: a product with two size variants should show a Size dropdown on the product page. If the dropdown is missing, the variants may not have been saved correctly.",
    mistake: "Do not skip the preview step before publishing a product. A product that looks complete in the admin can still have a missing image or broken variant selector on the actual storefront.",
    question: "The storefront preview button shows...",
    answers: ["How the product looks to customers", "The product's inventory count", "The product's SEO ranking"],
    correct: "How the product looks to customers",
  },
];

const navigationSteps = [
  {
    title: "Open menus",
    label: "Menus",
    description: "The Navigation section under Online Store is where all the header and footer menu structures are defined — each menu is a named list of links that the theme displays in a specific location. Understanding which menu controls which storefront location before editing prevents accidental changes to the wrong menu.",
    imageTitle: "Online Store > Navigation page showing the Main menu and Footer menu listed",
    imageHint: "Screenshot should show: the Navigation page with at least two menus listed — Main menu and Footer menu — each showing the menu name, how many items it contains, and an Edit button.",
    nav: "Menus",
    action: "Open Navigation",
    url: `${TRAINING_STORE_ADMIN_URL}/menus`,
    tryTasks: ["Open Online Store > Navigation from the left sidebar.", "Read the list of menus and identify which one is called Main menu.", "Click Main menu to open it and read the current list of links.", "Click the browser back button and open Footer menu to compare its structure."],
    example: "Example: the Main menu typically controls the header navigation links — Home, Shop, About, Contact. The theme maps this specific menu name to the header location.",
    mistake: "Do not change live navigation without review. Saving a main menu change immediately updates the header links that all customers see on every page.",
    question: "Main menu usually controls...",
    answers: ["Header links", "Billing plan", "Inventory count"],
    correct: "Header links",
  },
  {
    title: "Add a menu item",
    label: "Add link",
    description: "Adding a menu item follows a simple three-field pattern: the display name, the destination link type, and the specific destination. Using the Link search field to select a real page, product, or collection — rather than typing a manual URL — prevents broken links caused by future URL handle changes.",
    imageTitle: "Menu editor showing the Add menu item dialog with Name and Link fields",
    imageHint: "Screenshot should show: the menu editor with the Add menu item panel open on the right side, showing the Name field filled in (e.g. 'About'), the Link field with the search box, and a page selected as the destination.",
    nav: "Add link",
    action: "Open Navigation",
    url: `${TRAINING_STORE_ADMIN_URL}/menus`,
    tryTasks: ["Open Main menu and click Add menu item.", "Type the display name: About in the Name field.", "Click the Link field and search for the About page by name — select it from the results.", "Click Save menu and confirm the About link appears in the menu list."],
    example: "Example: 'Contact' in the Name field should link to the Contact page selected from the Link search — not a manually typed URL like /pages/contact.",
    mistake: "Do not add duplicate menu labels with the same name. Two items called 'Shop' in the same menu confuses customers and causes accessibility issues.",
    question: "A menu item needs...",
    answers: ["Name and destination", "SKU and inventory", "Theme code"],
    correct: "Name and destination",
  },
  {
    title: "Verify header links on storefront",
    label: "Verify",
    description: "After saving a menu, always verify the link actually works on the storefront before marking the task complete. A save confirmation in the admin does not guarantee the link destination resolves correctly — a deleted page or renamed URL handle can create a 404 error that only appears on the storefront.",
    imageTitle: "Storefront header navigation with the newly added menu link visible and clickable",
    imageHint: "Screenshot should show: the storefront header with the navigation menu visible, the newly added link highlighted or circled, and the destination page loaded after clicking it.",
    nav: "Verify",
    action: "Open tutorial store",
    url: TRAINING_STORE_URL,
    tryTasks: ["Open the tutorial store storefront in a new tab after saving the menu.", "Find the menu link you just added in the storefront header navigation.", "Click the link and confirm it opens the correct page — check the URL and page title.", "Return to the storefront and scroll to the footer to review the policy links listed there."],
    example: "Example: a menu save is not complete until the link works on the storefront. If the link shows a 404 page, the destination URL may have changed.",
    mistake: "Do not remove legal or policy links from the footer menu. Links to Privacy Policy, Refund Policy, and Terms of Service are often legally required.",
    question: "After saving a menu, you should...",
    answers: ["Test the link", "Change billing", "Delete the page"],
    correct: "Test the link",
  },
  {
    title: "Footer menu links",
    label: "Footer",
    description: "The footer menu is separate from the header Main menu and typically contains policy pages, secondary links, and legal content that customers expect to find at the bottom of every page. Confusing the two menus or accidentally removing a policy link from the footer can create legal compliance issues for the store.",
    imageTitle: "Online Store > Navigation > Footer menu showing policy page links",
    imageHint: "Screenshot should show: the Footer menu editor with links to policy pages such as Privacy Policy, Refund Policy, Terms of Service, and Shipping Policy listed as menu items.",
    nav: "Footer",
    action: "Open Navigation",
    url: `${TRAINING_STORE_ADMIN_URL}/menus`,
    tryTasks: ["Open Online Store > Navigation and click Footer menu.", "Read through the existing footer menu items and identify which are policy pages.", "Find where policy pages come from: go to Settings > Policies to see how Shopify auto-generates policy URLs.", "On the storefront, scroll to the footer and confirm each policy link is clickable and resolves to the correct page."],
    example: "Example: a typical Footer menu contains Privacy Policy, Refund Policy, Terms of Service, and Shipping Policy — all linked to the Shopify-generated policy pages under /policies/.",
    mistake: "Do not delete footer policy links thinking they are unused. Many stores are legally required to display these policies, and Shopify payment providers may require them for payment activation.",
    question: "The footer menu is best for...",
    answers: ["Policy and secondary links", "Main product categories", "Staff account settings"],
    correct: "Policy and secondary links",
  },
  {
    title: "Test navigation on mobile",
    label: "Mobile test",
    description: "Mobile navigation behaves differently from desktop — most themes collapse the header menu into a hamburger icon on small screens, opening a slide-out drawer. Testing the mobile menu confirms that all links are accessible, the hamburger icon opens correctly, and no menu items are hidden or cut off.",
    imageTitle: "Storefront mobile view showing hamburger menu icon and open navigation drawer",
    imageHint: "Screenshot should show: the storefront viewed on a mobile screen width (or browser device emulation) with the hamburger menu icon visible in the header, and a second screenshot showing the navigation drawer open with all menu links listed.",
    nav: "Mobile test",
    action: "Open tutorial store",
    url: TRAINING_STORE_URL,
    tryTasks: ["Open the tutorial storefront in a browser tab.", "Open browser DevTools and switch to device emulation mode (press F12, then click the device toggle icon).", "Select a phone-sized device such as iPhone 12 Pro from the device dropdown.", "Tap the hamburger menu icon in the header and confirm all navigation links are visible and tappable in the drawer."],
    example: "Example: on mobile, the Main menu collapses into a hamburger icon. Tapping it should open a full-height drawer showing Home, Shop, About, and Contact links — all tappable with a finger-sized target.",
    mistake: "Do not assume the desktop menu working means the mobile menu works. Some themes have separate mobile menu settings or mobile-specific menu assignments that must be checked independently.",
    question: "Mobile navigation is usually accessed through...",
    answers: ["A hamburger menu icon", "The footer menu only", "The product search bar"],
    correct: "A hamburger menu icon",
  },
];

const launchSteps = [
  {
    title: "Payments",
    label: "Payments",
    description: "The Payments settings page is where the store's payment provider — Shopify Payments, PayPal, or a third-party gateway — is configured. An incorrectly configured payment provider can block all customer transactions or route payments to the wrong account, making this one of the highest-risk settings on any Shopify store.",
    imageTitle: "Settings > Payments page showing the active payment provider and test mode status",
    imageHint: "Screenshot should show: the Payments settings page with the Shopify Payments or other active payment provider card visible, the test mode status indicator, and any additional payment methods listed below.",
    nav: "Payments",
    action: "Open Payments",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/payments`,
    tryTasks: ["Open Settings > Payments from the left sidebar.", "Identify the active payment provider shown at the top of the page.", "Check whether test mode is enabled or disabled — note the current state.", "Do not click Activate, Deactivate, or Edit on any payment provider."],
    example: "Example: payment setup affects real customer checkout. A payment provider in test mode will not accept real customer cards — it must be switched to live mode before launch.",
    mistake: "Do not change payment providers, toggle test mode, or modify payment capture rules during beginner training. Payment changes can block all orders immediately.",
    question: "Payments should be changed...",
    answers: ["Only with approval", "Before every product", "By any trainee"],
    correct: "Only with approval",
  },
  {
    title: "Shipping, tax, checkout",
    label: "Core settings",
    description: "Shipping rates, tax settings, and checkout behaviour are three separate areas that each directly affect what a customer pays and whether their order can be completed. A wrong shipping rate overcharges customers; a missing tax rule creates compliance risk; a checkout setting like required customer accounts can prevent guest purchases entirely.",
    imageTitle: "Shopify admin Settings page with Shipping and delivery, Taxes and duties, and Checkout highlighted",
    imageHint: "Screenshot should show: the Settings left panel with Shipping and delivery, Taxes and duties, and Checkout all visible as clickable links, with the main panel showing whichever one is currently selected.",
    nav: "Core",
    action: "Open Settings",
    url: `${TRAINING_STORE_ADMIN_URL}/settings`,
    tryTasks: ["Open Settings > Shipping and delivery and read the shipping zones and rates listed.", "Open Settings > Taxes and duties and identify which tax region is configured.", "Open Settings > Checkout and find the Customer accounts setting — note whether it is required, optional, or disabled.", "Report what you found to the trainer before the session ends."],
    example: "Example: wrong shipping rates or checkout rules can block orders or charge customers incorrectly. A flat rate of $0 for all orders means the store loses shipping revenue on every sale.",
    mistake: "Do not guess or change shipping, tax, or checkout rules. Even a rate that looks obviously wrong should be confirmed with the trainer before editing.",
    question: "Shipping and tax settings affect...",
    answers: ["Checkout charges", "Theme sections", "Staff avatars"],
    correct: "Checkout charges",
  },
  {
    title: "Domains and password",
    label: "Domains",
    description: "The Domains settings page is where the custom domain is connected and the storefront password protection is controlled. Removing the storefront password is the moment the store goes public — this is an irreversible action that should only happen with explicit approval from the store owner and after all launch checklist items are confirmed.",
    imageTitle: "Settings > Domains page showing custom domain and storefront password toggle",
    imageHint: "Screenshot should show: the Domains settings page with the primary domain shown (custom or myshopify.com), and the Online Store > Preferences link or section where the storefront password can be found and disabled.",
    nav: "Domains",
    action: "Open Domains",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/domains`,
    tryTasks: ["Open Settings > Domains and read the primary domain shown at the top.", "Identify whether a custom domain is connected or if the store is still using the myshopify.com domain.", "Open Online Store > Preferences and find the Password protection section — read the current state.", "Do not click Remove password, Disable password, or Enable unless the trainer gives explicit approval."],
    example: "Example: removing the password makes the store immediately public — even if it is 2am and products are not ready. This action does not ask for a second confirmation.",
    mistake: "Do not launch the store by accident by clicking Remove password or Disable password without approval. There is no undo — the store goes live immediately.",
    question: "Removing the storefront password can...",
    answers: ["Make store public", "Create products", "Invite staff"],
    correct: "Make store public",
  },
  {
    title: "Notifications review",
    label: "Notifications",
    description: "The Notifications settings page lists every automatic email Shopify sends to customers and staff — order confirmations, shipping updates, refund notices, and more. These emails are often the only direct communication a customer receives after ordering, so they must match the store's brand, have correct contact information, and clearly explain the order status.",
    imageTitle: "Settings > Notifications page showing customer email notification list",
    imageHint: "Screenshot should show: the Notifications settings page with the list of customer notification types visible — Order confirmation, Shipping confirmation, Order cancelled, Refund notification — each with an Edit button.",
    nav: "Notifications",
    action: "Open Notifications",
    url: `${TRAINING_STORE_ADMIN_URL}/settings/notifications`,
    tryTasks: ["Open Settings > Notifications from the left sidebar.", "Read the list of customer notification types and identify Order confirmation.", "Click Order confirmation to open its template — read the subject line and preview, but do not edit.", "Close the template without saving and report to the trainer whether the sender name and email look correct."],
    example: "Example: the Order confirmation email should show the store name, a clear order summary, and the correct customer service contact. A generic 'Shopify' sender name means branding customisation has not been completed.",
    mistake: "Do not edit email notification templates casually. An incorrect template change can send confusing or broken emails to real customers on the next order.",
    question: "Notifications are mainly...",
    answers: ["Customer/store emails", "Theme blocks", "Collection filters"],
    correct: "Customer/store emails",
  },
  {
    title: "Final storefront check",
    label: "Storefront walkthrough",
    description: "Before any store goes live, do a complete walkthrough of the storefront as a customer — browse products, add to cart, and proceed through to checkout to check for broken links, missing images, wrong prices, or blocked checkout steps. This end-to-end test is the last line of defence before real customers encounter a problem.",
    imageTitle: "Storefront product page, cart, and checkout page viewed as a customer",
    imageHint: "Screenshot should show: a three-panel composite — the storefront homepage, a product page with Add to cart button visible, and the checkout page with the order summary on the right side — demonstrating the full customer path.",
    nav: "Storefront walkthrough",
    action: "Open tutorial store",
    url: TRAINING_STORE_URL,
    tryTasks: ["Open the tutorial storefront in a private browsing window to simulate a fresh customer session.", "Browse to a product, select a variant, and click Add to cart — confirm the cart updates correctly.", "Open the cart and click Checkout to reach the checkout page — do not complete a real purchase.", "Note any broken images, 404 pages, wrong prices, or steps that block the checkout flow and report them to the trainer."],
    example: "Example: a product that looks fine in the admin can have a missing image on the storefront, or a discount code that was removed may still be referenced on a banner section causing a broken link.",
    mistake: "Do not skip the end-to-end storefront walkthrough by assuming the admin looks correct. Many issues are only visible from the customer-facing storefront view.",
    question: "The final storefront check should include...",
    answers: ["Browsing to cart to checkout", "Only checking the homepage", "Only checking Settings"],
    correct: "Browsing to cart to checkout",
  },
  {
    title: "Launch checklist sign-off",
    label: "Sign-off",
    description: "The launch checklist sign-off is a verbal or documented review where the trainer confirms all areas are ready and the trainee explains the risk of each launch setting before any live changes are made. This step exists because understanding the risk is what prevents a trainee from making a destructive change on a future store without supervision.",
    imageTitle: "Launch checklist document with each area ticked and the trainer and trainee names signed off",
    imageHint: "Screenshot should show: a checklist document (printed or digital) with rows for Payments, Shipping, Taxes, Checkout, Domain, Password, Notifications, and Storefront walkthrough — each with a checkbox and a status column showing Reviewed.",
    nav: "Sign-off",
    action: "Open Settings",
    url: `${TRAINING_STORE_ADMIN_URL}/settings`,
    tryTasks: ["Go through each launch setting area with the trainer: Payments, Shipping, Taxes, Checkout, Domains, Notifications.", "For each area, the trainee explains: what could go wrong if this setting were incorrect.", "Trainer confirms the explanation is accurate before moving to the next item.", "Do not make any live changes until the full sign-off checklist is complete and the trainer approves."],
    example: "Example: the trainee says 'If test mode is still on in Payments, no real customer card will work at checkout and every order will fail.' The trainer confirms and checks it off.",
    mistake: "Do not rush through the sign-off or just say 'I understand' without explaining each risk. The sign-off is a learning checkpoint, not a formality.",
    question: "The launch sign-off goal is...",
    answers: ["Trainee explains each risk before changes", "Quickly click through all settings", "Let the trainer do all the checking"],
    correct: "Trainee explains each risk before changes",
  },
];

const devSetupSteps = [
  {
    title: "Install Visual Studio Code",
    label: "Editor",
    description: "VS Code is the code editor the entire KNB team uses to open project folders, edit Shopify theme files, and run terminal commands from a single workspace. Using the same editor as the team means every trainee can follow the same keyboard shortcuts, extension setup, and folder conventions without translation.",
    imageTitle: "VS Code welcome screen showing the Explorer, Search, Source Control, and Terminal icons in the sidebar",
    imageHint: "Screenshot should show: the VS Code application open on its welcome screen, with the left sidebar showing the five main panel icons — Explorer, Search, Source Control, Run, and Extensions — and the integrated terminal panel at the bottom.",
    nav: "VS Code",
    action: "Open VS Code website",
    url: "https://code.visualstudio.com/",
    tryTasks: ["Download VS Code from code.visualstudio.com and install it.", "Open VS Code and dismiss the welcome tab.", "Find the Explorer icon (file tree) in the left sidebar and click it.", "Identify all five sidebar icons: Explorer, Search, Source Control, Run and Debug, Extensions."],
    example: "Example: VS Code is where you edit theme files like sections/header.liquid, snippets/product-card.liquid, assets/theme.scss, and templates/product.json.",
    mistake: "Do not edit theme files in random text editors like Notepad, TextEdit, or online editors when the team workflow expects VS Code. Different editors can introduce hidden character encoding issues in Liquid files.",
    question: "VS Code is mainly used for...",
    answers: ["Editing project files", "Receiving Shopify payments", "Creating discounts"],
    correct: "Editing project files",
  },
  {
    title: "Open the project folder",
    label: "Folder",
    description: "Opening the full project folder — not a single file — gives VS Code access to the entire theme structure, the package.json, the Git history, and the correct terminal working directory for CLI commands. Opening just one Liquid file instead of the folder is the most common beginner mistake and breaks the terminal path, npm, and Git context.",
    imageTitle: "VS Code File > Open Folder dialog with the theme project folder selected",
    imageHint: "Screenshot should show: the VS Code File menu open with Open Folder highlighted, or the folder-open dialog showing the theme project folder selected (visible folder name and theme subfolders like sections, snippets, assets).",
    nav: "Open folder",
    action: "Open VS Code docs",
    url: "https://code.visualstudio.com/docs",
    tryTasks: ["Use File > Open Folder (Mac: File > Open) to open the theme project.", "Navigate to the correct theme folder — not a parent folder or a Downloads copy.", "Confirm the Explorer panel shows folders like assets, sections, snippets, and templates.", "Open the terminal and run pwd to confirm the path matches the theme project folder."],
    example: "Example: opening the folder lets npm, Git, and Shopify CLI all run from the right location. Running 'npm install' from the wrong folder produces a confusing 'no package.json found' error.",
    mistake: "Do not open only a single file like index.liquid or theme.scss by double-clicking it. This opens VS Code without setting the workspace folder, breaking terminal path and Git context.",
    question: "For project work, open...",
    answers: ["The full folder", "Only one file", "Only the browser"],
    correct: "The full folder",
  },
  {
    title: "Use the integrated terminal",
    label: "Terminal",
    description: "The VS Code integrated terminal opens in the same directory as the workspace folder, which means npm, Git, and Shopify CLI commands automatically run from the right location. Using the integrated terminal instead of a separate system terminal window reduces the chance of running commands from the wrong folder.",
    imageTitle: "VS Code integrated terminal panel showing the project folder path and version check commands",
    imageHint: "Screenshot should show: the VS Code terminal panel open at the bottom of the screen, with the terminal prompt showing the project folder path, and the output of 'node -v' and 'npm -v' visible.",
    nav: "Terminal",
    action: "Open VS Code terminal docs",
    url: "https://code.visualstudio.com/docs/terminal/basics",
    tryTasks: ["Open Terminal > New Terminal from the VS Code menu bar.", "Run pwd on Mac/Linux or cd on Windows to confirm the terminal path shows the project folder.", "Run node -v and confirm a version number appears.", "Run npm -v, git --version, and shopify version to check all four tools respond."],
    example: "Example: run node -v, npm -v, git --version, and shopify version in the integrated terminal — all four should print version numbers before starting any project work.",
    mistake: "Do not run Shopify CLI or npm commands from a separate system Terminal or Command Prompt window — it may be in a different folder and produce confusing path errors.",
    question: "The terminal is where you run...",
    answers: ["Commands", "Customer refunds", "Theme colors only"],
    correct: "Commands",
  },
  {
    title: "Install useful extensions",
    label: "Extensions",
    description: "VS Code extensions add language support, linting, and Git visibility that make Shopify theme development faster and safer. The Shopify Liquid extension adds syntax highlighting and theme check warnings directly inside the editor, catching errors before a command is even run.",
    imageTitle: "VS Code Extensions panel showing the Shopify Liquid extension search result and install button",
    imageHint: "Screenshot should show: the VS Code Extensions panel open with 'Shopify Liquid' typed in the search box, and the official Shopify Liquid extension result shown with its logo, publisher name (Shopify), and an Install button.",
    nav: "Extensions",
    action: "Open Shopify Liquid extension",
    url: "https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode",
    tryTasks: ["Click the Extensions icon in the left sidebar (or press Ctrl+Shift+X / Cmd+Shift+X).", "Search for 'Shopify Liquid' and find the extension published by Shopify.", "Click Install and wait for the extension to activate.", "Ask the trainer before installing any additional extensions beyond those on the approved list."],
    example: "Example: the Shopify Liquid extension underlines syntax errors in .liquid files and shows theme check warnings as you type — catching problems before running shopify theme check in the terminal.",
    mistake: "Do not install many random extensions on a trainee machine. Each extension can slow VS Code startup, conflict with others, or change editor behaviour unexpectedly.",
    question: "Extensions should be installed...",
    answers: ["Only when approved", "Randomly", "Before opening VS Code"],
    correct: "Only when approved",
  },
  {
    title: "Confirm the workspace",
    label: "Ready",
    description: "The workspace readiness check confirms the trainee can navigate the file tree, search across files, use the terminal, and find the Source Control panel — the four daily actions needed for every theme development session. A trainee who cannot find Source Control or run a terminal command is not ready to start Shopify CLI work.",
    imageTitle: "VS Code workspace showing Explorer, terminal panel, and Source Control panel all visible",
    imageHint: "Screenshot should show: the VS Code window with the Explorer panel open on the left showing theme files, the integrated terminal at the bottom showing the project path, and the Source Control icon in the sidebar showing any pending changes.",
    nav: "Ready",
    action: "Open VS Code",
    url: "https://code.visualstudio.com/",
    tryTasks: ["Use the Explorer panel to open any file in the sections folder.", "Press Ctrl+Shift+F (Cmd+Shift+F on Mac) to open the search panel and search for the word 'header'.", "Click the Source Control icon in the sidebar and confirm the panel loads.", "Open a new terminal and confirm the path shows the project folder."],
    example: "Example: the trainee is ready when they can move around the workspace without guessing. If they cannot find a file in Explorer or cannot open a terminal, stop here and practice until it is second nature.",
    mistake: "Do not start Shopify CLI until folder and terminal basics are clear. Running CLI commands when unsure of the folder location almost always causes confusing errors.",
    question: "Before code work, the trainee should know...",
    answers: ["Files, search, terminal, source control", "Only the browser", "Only product pages"],
    correct: "Files, search, terminal, source control",
  },
];

const cliInstallSteps = [
  {
    title: "Install Node.js",
    label: "Node",
    description: "Shopify CLI requires Node.js 20.10 or higher to run — without it, the shopify command will not start or will fail with an unexpected runtime error. Always check the Node version before troubleshooting any Shopify CLI issue, because most 'broken CLI' problems are actually outdated Node versions.",
    imageTitle: "VS Code terminal showing node -v output with version number v20.10.0 or higher",
    imageHint: "Screenshot should show: the VS Code integrated terminal with the command 'node -v' typed and the output 'v20.10.0' or a higher version number printed on the next line.",
    nav: "Node.js",
    action: "Open Node.js",
    url: "https://nodejs.org/",
    tryTasks: ["Download Node.js LTS from nodejs.org and run the installer.", "Open the VS Code terminal and run: node -v", "Confirm the output shows v20.10.0 or higher — not v18 or earlier.", "If the version is too old, download the current LTS version and reinstall."],
    example: "Example: node -v should show a version such as v20.10.0 or v22.1.0. A version like v16.14.0 is too old for the current Shopify CLI.",
    mistake: "Do not troubleshoot Shopify CLI commands before checking the Node version. An old Node version is the most common hidden cause of CLI failures that look like permission or network errors.",
    question: "Shopify CLI currently needs Node.js...",
    answers: ["20.10 or higher", "10 or lower", "Only Ruby"],
    correct: "20.10 or higher",
  },
  {
    title: "Confirm npm",
    label: "npm",
    description: "npm (Node Package Manager) installs automatically with Node.js and is used to install project dependencies, run build scripts, and install the Shopify CLI itself. Confirming npm responds before starting any project saves time compared to discovering it is missing mid-workflow.",
    imageTitle: "VS Code terminal showing npm -v output with a version number",
    imageHint: "Screenshot should show: the VS Code terminal with 'npm -v' typed and a version number like '10.2.3' printed on the next line.",
    nav: "npm",
    action: "Open npm",
    url: "https://www.npmjs.com/",
    tryTasks: ["In the VS Code terminal, run: npm -v", "Confirm a version number prints — it should be 9 or higher when Node 20 is installed.", "Note whether the project uses npm, pnpm, or yarn — check the package.json 'packageManager' field if present.", "Use npm for this training track unless the specific project's package.json specifies a different package manager."],
    example: "Example: npm install installs all project dependencies listed in package.json. Running 'npm install' in a folder without package.json will create a new one — not what you want.",
    mistake: "Do not run npm install in a folder that has no package.json. Always verify the file exists first by running 'ls' or checking the Explorer panel in VS Code.",
    question: "npm is used to...",
    answers: ["Install packages", "Edit Shopify orders", "Set tax rates"],
    correct: "Install packages",
  },
  {
    title: "Install Git",
    label: "Git",
    description: "Git is required for Shopify CLI to work and is also the version control system the team uses to track, review, and recover every code change made to a theme. Without Git, there is no safety net when a theme edit goes wrong — and no way to show the supervisor what changed.",
    imageTitle: "VS Code terminal showing git --version output",
    imageHint: "Screenshot should show: the VS Code terminal with 'git --version' typed and the output 'git version 2.40.0' or a similar recent version printed on the next line.",
    nav: "Git",
    action: "Open Git",
    url: "https://git-scm.com/",
    tryTasks: ["Download Git from git-scm.com and run the installer with default options.", "In the VS Code terminal, run: git --version", "Confirm the output shows git version 2.28 or higher.", "Run: git config --global user.name 'Your Name' and git config --global user.email 'your@email.com' to set your identity."],
    example: "Example: Git helps the team review and recover code changes. Running 'git log --oneline' in a theme project shows the full history of who changed what and when.",
    mistake: "Do not edit production theme code without a Git workflow. Without commits, there is no record of what changed and no way to roll back a broken edit.",
    question: "Git is used for...",
    answers: ["Tracking code changes", "Charging customers", "Writing product prices"],
    correct: "Tracking code changes",
  },
  {
    title: "Install Shopify CLI",
    label: "Shopify CLI",
    description: "Shopify CLI is installed globally using npm so the 'shopify' command is available from any terminal directory. The -g flag installs it as a global tool rather than a project-specific dependency, which is what allows it to be used across all Shopify projects on the machine.",
    imageTitle: "VS Code terminal showing npm install -g @shopify/cli@latest running and then shopify version output",
    imageHint: "Screenshot should show: the VS Code terminal with 'npm install -g @shopify/cli@latest' running (with progress output visible), followed by 'shopify version' on the next command and a version number like '3.55.0' printed.",
    nav: "Install CLI",
    action: "Open Shopify CLI docs",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["In the VS Code terminal, run: npm install -g @shopify/cli@latest", "Wait for the installation to finish — it may take a minute.", "Run: shopify version to confirm it prints a version number.", "Run: shopify help to see the list of available commands."],
    example: "Example command: npm install -g @shopify/cli@latest — the @latest tag ensures the most recent stable version is installed, not an older cached version.",
    mistake: "Do not use old package names like '@shopify/cli' without @latest, or the legacy 'shopify-cli' package name. These may install outdated versions with different command syntax.",
    question: "The current npm install command is...",
    answers: ["npm install -g @shopify/cli@latest", "npm install -g shopify-cli", "ruby install shopify"],
    correct: "npm install -g @shopify/cli@latest",
  },
  {
    title: "Ruby note",
    label: "Ruby",
    description: "The modern Shopify CLI (version 3.x and above) does not require Ruby — it runs entirely on Node.js. Ruby is only needed if you are working with a legacy project that explicitly depends on the old Shopify CLI 2.x toolchain, which should be verified by checking the project's README before installing anything.",
    imageTitle: "Internal note card clarifying Ruby is not required for modern Shopify CLI v3",
    imageHint: "Screenshot should show: a simple VS Code terminal or text note showing the Shopify CLI version (shopify version) confirming v3.x is installed, alongside a note that Ruby is not in the requirements list for this version.",
    nav: "Ruby note",
    action: "Open Shopify CLI requirements",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Run: shopify version and confirm it shows version 3 or higher.", "Open the project README if one exists and search for any mention of Ruby requirements.", "Ask the trainer before installing Ruby — it adds complexity and may conflict with other tools.", "Do not install extra language runtimes without a specific documented reason."],
    example: "Example: include Ruby only if the theme project's README or setup guide explicitly requires a Ruby gem or a Shopify CLI 2.x command. Modern KNB projects use Shopify CLI 3.x on Node.js.",
    mistake: "Do not make trainees install Ruby based on outdated tutorials. Many older Shopify development guides still show Ruby-based CLI setup that no longer applies to current projects.",
    question: "For this modern Shopify CLI track, Ruby is...",
    answers: ["Optional unless project needs it", "Always required", "A replacement for npm"],
    correct: "Optional unless project needs it",
  },
  {
    title: "Final version check",
    label: "Verify",
    description: "Running a four-command version check — node, npm, git, shopify — takes about ten seconds and confirms the entire development environment is ready before any theme work begins. Doing this check at the start of every new machine setup prevents a half-hour of troubleshooting caused by a missing or outdated tool.",
    imageTitle: "VS Code terminal showing all four version check commands and their outputs side by side",
    imageHint: "Screenshot should show: the VS Code terminal with four commands run sequentially — 'node -v', 'npm -v', 'git --version', 'shopify version' — each showing a version number output. All four should respond without 'command not found'.",
    nav: "Verify",
    action: "Open Shopify CLI docs",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["In the VS Code terminal, run: node -v — confirm the output.", "Run: npm -v — confirm the output.", "Run: git --version — confirm the output.", "Run: shopify version — confirm the output. If any of the four says 'command not found', stop and fix it before continuing."],
    example: "Example: a clean setup should show node v20.x.x, npm 10.x.x, git version 2.40.x, and shopify 3.x.x. Screenshot this for reference before starting a project.",
    mistake: "Do not continue to theme work if any command returns 'command not found'. Missing tools are easy to fix now and very confusing to debug later when a Shopify CLI command fails mid-session.",
    question: "If shopify says command not found, first check...",
    answers: ["CLI install and terminal path", "Product price", "Theme colors"],
    correct: "CLI install and terminal path",
  },
];

const cliWorkflowSteps = [
  {
    title: "Connect to the store",
    label: "Store",
    description: "Every Shopify CLI theme command needs a --store flag to know which Shopify admin to connect to — without it, the CLI will prompt you or use an unexpected default. Always specifying the correct store prevents previewing, pulling, or pushing to the wrong Shopify account during multi-client work.",
    imageTitle: "VS Code terminal showing shopify theme dev --store knb-tutorial running and a preview URL output",
    imageHint: "Screenshot should show: the VS Code terminal with the command 'shopify theme dev --store knb-tutorial' typed and the output showing a preview URL like 'http://127.0.0.1:9292' and a 'View your theme at' message.",
    nav: "Connect",
    action: "Open Shopify theme CLI docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Open the integrated terminal in VS Code and confirm you are in the theme folder (run pwd).", "Run: shopify theme dev --store knb-tutorial", "Log in through the browser when the CLI opens a login page.", "Confirm the terminal shows a preview URL — copy it and open it in the browser."],
    example: "Example command: shopify theme dev --store knb-tutorial — the store value is the subdomain part of the myshopify.com URL, not the full URL.",
    mistake: "Do not connect to a client store when practising with the tutorial store. Using --store with the wrong store name will push or pull theme files to the wrong Shopify admin.",
    question: "The --store flag selects...",
    answers: ["Which Shopify store to use", "Which CSS file to edit", "Which VS Code theme to use"],
    correct: "Which Shopify store to use",
  },
  {
    title: "Preview with theme dev",
    label: "theme dev",
    description: "shopify theme dev creates a temporary development theme in the Shopify admin and serves a local preview at http://127.0.0.1:9292 — changes to local files appear in the preview without affecting the live published theme. This is the safe sandbox for all theme editing, and is the command you run first every development session.",
    imageTitle: "Browser showing the theme dev preview URL (127.0.0.1:9292) with the storefront loaded",
    imageHint: "Screenshot should show: the browser open at http://127.0.0.1:9292 with the training store homepage visible, and a 'Development theme' banner or indicator showing it is a preview, not the live theme.",
    nav: "Preview",
    action: "Open theme dev docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-dev",
    tryTasks: ["Run: shopify theme dev --store knb-tutorial in the VS Code terminal.", "Copy the preview URL from the terminal output and open it in the browser.", "Make a small text change in a Liquid file — for example, change one word in sections/header.liquid.", "Watch the terminal for a hot reload message, then refresh the browser preview to see the change."],
    example: "Example: use theme dev for local preview and hot reload during theme editing. The preview refreshes automatically when you save a file — you do not need to re-run the command.",
    mistake: "Do not assume theme dev publishes work to the live theme. It creates a separate development theme in Shopify admin — the live published theme is not affected until you run theme push.",
    question: "theme dev is mainly for...",
    answers: ["Previewing local work", "Publishing live immediately", "Creating customer accounts"],
    correct: "Previewing local work",
  },
  {
    title: "Pull before editing",
    label: "theme pull",
    description: "shopify theme pull downloads theme files from a Shopify store to your local folder, making your local copy match the remote theme exactly. Running pull before starting work ensures you are editing the most recent version — not an outdated local copy that will overwrite someone else's changes when pushed.",
    imageTitle: "VS Code terminal showing shopify theme pull running with a list of downloaded files",
    imageHint: "Screenshot should show: the VS Code terminal with 'shopify theme pull' running and a list of downloaded file names being printed (e.g. sections/header.liquid, templates/index.json), followed by a 'Theme pull was successful' message.",
    nav: "Pull",
    action: "Open theme pull docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-pull",
    tryTasks: ["Run: shopify theme list to see available themes and confirm which one to pull.", "Run: shopify theme pull --store knb-tutorial for the assigned theme.", "Open Source Control in VS Code to review which files changed after the pull.", "Do not start editing until you have reviewed the pulled changes."],
    example: "Example: pull first when starting from an existing Shopify theme. If you skip this step and push later, your local edits will overwrite any changes made in the Shopify admin since your last pull.",
    mistake: "Do not pull over local edits without first checking what will change. A pull can overwrite local unsaved work — commit or stash local changes before running a pull.",
    question: "theme pull moves files...",
    answers: ["From Shopify to local", "From local to Shopify", "From customer emails to products"],
    correct: "From Shopify to local",
  },
  {
    title: "Check theme code",
    label: "theme check",
    description: "shopify theme check runs Shopify's Liquid linter against all theme files and reports errors, warnings, and best practice suggestions. Running a check before submitting work for review demonstrates professionalism and catches issues — like unused variables or deprecated filters — that would otherwise be spotted by the senior developer in review.",
    imageTitle: "VS Code terminal showing shopify theme check output with warning and error counts",
    imageHint: "Screenshot should show: the VS Code terminal with 'shopify theme check' output listing file paths, line numbers, and warning or error messages, followed by a summary like '5 offenses: 2 errors, 3 warnings'.",
    nav: "Check",
    action: "Open theme check docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-check",
    tryTasks: ["In the VS Code terminal, run: shopify theme check", "Read each warning and error line — note the file name and line number.", "Fix any errors flagged as high severity before asking for review.", "Re-run shopify theme check after fixing to confirm errors are resolved."],
    example: "Example: run shopify theme check before asking for review. If the output shows 0 errors and 0 warnings, your code is ready for the supervisor to review.",
    mistake: "Do not ignore errors just because the preview seems to load. Some Liquid errors only surface in specific page contexts and will cause visible bugs for customers even when the preview looks fine.",
    question: "theme check helps find...",
    answers: ["Theme code issues", "Billing errors", "Customer refunds"],
    correct: "Theme code issues",
  },
  {
    title: "Push after review",
    label: "theme push",
    description: "shopify theme push uploads local theme files to a Shopify store, overwriting the remote theme files with your local versions. This is a one-way destructive action — it immediately replaces the remote theme files — so it must only happen after review, with the correct target theme confirmed, and never to the live published theme without explicit approval.",
    imageTitle: "VS Code terminal showing shopify theme push running with a list of uploaded files",
    imageHint: "Screenshot should show: the VS Code terminal with 'shopify theme push' output listing uploaded file names and ending with a 'Theme push was successful' message and a link to the theme in Shopify admin.",
    nav: "Push",
    action: "Open theme push docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-push",
    tryTasks: ["Run: shopify theme list to confirm which theme ID is the target for review.", "Run: shopify theme check and confirm there are no errors before pushing.", "Run: shopify theme push --store knb-tutorial --theme [theme-id] using the unpublished review theme.", "Get trainer confirmation before using push on any theme that is live (published)."],
    example: "Example: push to an unpublished review theme for supervisor feedback before affecting live storefront work. Use 'shopify theme push --unpublished' to create a new theme for review.",
    mistake: "Do not push to the live published theme by accident. Always specify the --theme flag with a theme ID rather than letting the CLI choose the default, which may be the active theme.",
    question: "theme push moves files...",
    answers: ["From local to Shopify", "From Shopify to local", "From analytics to discounts"],
    correct: "From local to Shopify",
  },
  {
    title: "Useful orientation commands",
    label: "Info",
    description: "The theme list, theme info, and theme open commands are orientation tools that tell you what themes exist in the store, what context the CLI is currently using, and let you jump directly to a theme in the Shopify admin. Running these before any push or pull prevents the classic beginner error of operating on the wrong theme.",
    imageTitle: "VS Code terminal showing shopify theme list output with theme names and IDs",
    imageHint: "Screenshot should show: the VS Code terminal with 'shopify theme list' output showing a table of theme names, IDs, and their roles (e.g. main for the live theme, development for a dev theme).",
    nav: "Info",
    action: "Open theme command reference",
    url: "https://shopify.dev/docs/api/shopify-cli/theme",
    tryTasks: ["Run: shopify theme list --store knb-tutorial and read the theme names and IDs.", "Run: shopify theme info to see which store and theme the CLI is currently targeting.", "Note the theme ID for the unpublished review theme — you will need it for safe push commands.", "Run: shopify theme open --store knb-tutorial to open the theme in Shopify admin."],
    example: "Example: shopify theme info confirms which store and theme context the CLI is using. If it shows the wrong store, run shopify auth logout and reconnect before doing anything else.",
    mistake: "Do not guess the active store or theme ID when the CLI can tell you. Running theme push without confirming the target with theme list first is how code ends up on the wrong store.",
    question: "theme info helps confirm...",
    answers: ["Current theme environment", "Customer password", "Product inventory"],
    correct: "Current theme environment",
  },
  {
    title: "Logout and switch account",
    label: "Auth",
    description: "shopify auth logout clears the stored Shopify authentication so the next command will prompt you to log in with a different account. This is necessary when the CLI is connected to the wrong Shopify account — for example, a personal account instead of the client account — and theme commands are being refused or targeting the wrong store.",
    imageTitle: "VS Code terminal showing shopify auth logout command and a re-login browser prompt",
    imageHint: "Screenshot should show: the VS Code terminal with 'shopify auth logout' confirming the logout, followed by a Shopify browser login page opening to re-authenticate with the correct account.",
    nav: "Auth",
    action: "Open Shopify CLI auth docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Run: shopify auth logout in the terminal — confirm the CLI reports you are logged out.", "Run: shopify theme dev --store knb-tutorial to trigger a new browser login prompt.", "Log in with the correct Shopify account in the browser window that opens.", "Run: shopify theme info to confirm the correct account and store are now active."],
    example: "Example: log out when the browser login is using the wrong Shopify account. After logout, the next shopify command opens the browser for fresh authentication.",
    mistake: "Do not keep retrying commands with the wrong account hoping they will eventually work. Check which account is active with shopify theme info and log out immediately if it is wrong.",
    question: "Use auth logout when...",
    answers: ["The wrong account is active", "A product has no image", "A page title is too long"],
    correct: "The wrong account is active",
  },
];

const projectFilesSteps = [
  {
    title: "Open the theme root",
    label: "Root",
    description: "All Shopify CLI theme commands must be run from the folder that contains the standard Shopify theme structure — the folder with assets, config, layout, sections, snippets, and templates inside it. Running commands from a parent folder, a Downloads copy, or the wrong subfolder is the single most common cause of CLI errors that confuse beginners.",
    imageTitle: "VS Code Explorer panel showing the theme root folder with all standard Shopify theme subfolders visible",
    imageHint: "Screenshot should show: the VS Code Explorer panel with the theme project root open, showing the following folders: assets, config, layout, locales, sections, snippets, and templates. The integrated terminal at the bottom should show the same folder path.",
    nav: "Theme root",
    action: "Open theme docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Open the theme project in VS Code using File > Open Folder.", "In the Explorer panel, confirm these folders exist: assets, config, layout, sections, snippets, templates.", "Open the integrated terminal and run: ls (Mac/Linux) or dir (Windows) to see the same folder list.", "Confirm package.json exists at the root if the project uses npm build tools."],
    example: "Example: CLI commands fail or behave oddly when run from the wrong folder. Running 'shopify theme dev' from a parent folder that contains the theme folder produces confusing 'no theme files found' errors.",
    mistake: "Do not run theme commands from the Downloads folder, Desktop, or a parent folder by accident. Always open the exact theme root folder, not the folder that contains it.",
    question: "Theme commands should run from...",
    answers: ["The theme folder", "Any random folder", "The Shopify admin page"],
    correct: "The theme folder",
  },
  {
    title: "Know the core folders",
    label: "Folders",
    description: "Each Shopify theme folder has a specific purpose — editing a file in the wrong folder wastes time and can break the theme in ways that are hard to trace. Knowing that sections/ contains the editable page-section Liquid files, snippets/ contains small reusable code, and assets/ contains compiled CSS and JS prevents the most common file-placement errors.",
    imageTitle: "VS Code Explorer showing theme folder structure with sections, snippets, templates, assets, config, layout, and locales",
    imageHint: "Screenshot should show: the VS Code Explorer panel with the theme folder tree expanded, showing at least: assets/ (with a .css and .js file), sections/ (with a .liquid file), snippets/ (with a .liquid file), templates/ (with a .json file), and layout/ (with theme.liquid).",
    nav: "Folders",
    action: "Open theme directory docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Click on the sections/ folder and open one .liquid file to see what a section file looks like.", "Click on the snippets/ folder and identify a small reusable snippet file.", "Open the templates/ folder and find the product.json or product.liquid template file.", "Find the layout/theme.liquid file — this is the global wrapper that every page renders inside."],
    example: "Example: sections/ contains the reusable page-section Liquid files you edit in the theme customizer. snippets/ contains smaller included code blocks. assets/ contains the compiled CSS and JavaScript files served to the browser.",
    mistake: "Do not edit files in the assets/ folder by hand unless you understand the build process. If the project uses Gulp or another build tool, the assets are generated — your manual changes will be overwritten on the next compile.",
    question: "Sections are usually...",
    answers: ["Editable page pieces", "Customer records", "Payment providers"],
    correct: "Editable page pieces",
  },
  {
    title: "Run npm install",
    label: "npm install",
    description: "npm install reads the package.json file and downloads all listed dependencies into a node_modules folder, making build tools like Gulp, PostCSS, or Sass available for the project. This step is only needed when package.json exists — many Shopify themes are pure Liquid with no npm dependencies at all.",
    imageTitle: "VS Code terminal showing npm install running with dependency download progress and completion message",
    imageHint: "Screenshot should show: the VS Code terminal with 'npm install' running, progress output visible, and ending with a message like 'added 247 packages in 14s' or similar success output.",
    nav: "Install",
    action: "Open npm docs",
    url: "https://docs.npmjs.com/cli/commands/npm-install",
    tryTasks: ["Check the Explorer panel — confirm package.json exists at the theme root before running anything.", "In the terminal, run: npm install and wait for it to complete.", "Confirm a node_modules/ folder now appears in the Explorer panel.", "Do not commit node_modules/ to Git — confirm it is listed in the .gitignore file."],
    example: "Example: npm install creates node_modules from package.json dependencies. Running it takes 30 seconds to a few minutes depending on the project size.",
    mistake: "Do not commit the node_modules folder to Git unless the project explicitly requires it. This folder can be hundreds of megabytes and is regenerated from package.json by running npm install.",
    question: "npm install reads...",
    answers: ["package.json", "Shopify orders", "Theme preview links"],
    correct: "package.json",
  },
  {
    title: "Understand npm scripts",
    label: "Scripts",
    description: "Some Shopify theme projects define custom npm scripts in the 'scripts' section of package.json — these run project-specific commands like build tools, watchers, or linters. Only the scripts listed in that file exist for the project; you cannot run 'npm run dev' if the project does not define a 'dev' script.",
    imageTitle: "VS Code showing package.json scripts section with the available script names",
    imageHint: "Screenshot should show: a package.json file open in VS Code with the 'scripts' section visible, showing at least one script entry such as 'dev', 'watch', or 'build' with its command value.",
    nav: "Scripts",
    action: "Open npm scripts docs",
    url: "https://docs.npmjs.com/cli/using-npm/scripts",
    tryTasks: ["Open package.json in VS Code and find the 'scripts' section.", "Read the script names listed — for example: 'watch', 'build', 'dev'.", "In the terminal, run: npm run watch (or whichever script is listed) if the trainer has assigned it.", "If there is no 'dev' or 'watch' script, do not try to run it — use shopify theme dev directly instead."],
    example: "Example: 'npm run dev' starts a build tool only if the project defines a 'dev' script in package.json. A project without that entry will show 'missing script: dev' as an error.",
    mistake: "Do not assume every Shopify theme has npm run dev. Many themes have no npm scripts at all and use only shopify theme dev for previewing.",
    question: "npm run dev works only when...",
    answers: ["The project defines it", "Shopify admin is open", "The store has products"],
    correct: "The project defines it",
  },
  {
    title: "Separate npm from Shopify CLI",
    label: "Difference",
    description: "npm installs packages and runs local build scripts — it has no connection to Shopify. Shopify CLI connects the local theme folder to the Shopify admin for preview, pull, and push operations. They serve completely different purposes and must both be understood to work on a project that uses build tools alongside Shopify CLI.",
    imageTitle: "Diagram showing npm on the left handling build tools and Shopify CLI on the right handling store connection",
    imageHint: "Screenshot should show: two terminal windows side by side — one showing 'npm install' or 'npm run watch' output, and the other showing 'shopify theme dev --store knb-tutorial' with a preview URL. Both windows should be visible simultaneously.",
    nav: "Difference",
    action: "Open Shopify CLI docs",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Explain out loud: what does npm install do? (Answer: downloads project dependencies from package.json)", "Explain out loud: what does npm run dev/watch do? (Answer: runs a project build script if defined)", "Explain out loud: what does shopify theme dev do? (Answer: connects local theme to Shopify for preview)", "Tell the trainer which of the three you would run first when starting work on a project with package.json."],
    example: "Example: npm install prepares build tool dependencies; shopify theme dev creates a preview connection to Shopify. On a project with Gulp, you need both — npm install once, then npm run watch and shopify theme dev simultaneously.",
    mistake: "Do not replace shopify theme dev with npm run dev and expect it to connect to Shopify. npm scripts never communicate with the Shopify API — only Shopify CLI does.",
    question: "shopify theme dev is for...",
    answers: ["Shopify theme preview", "Installing packages", "Creating Git commits"],
    correct: "Shopify theme preview",
  },
  {
    title: "Safe edit workflow",
    label: "Workflow",
    description: "A consistent local edit workflow — pull, install, preview, edit, check, review, push — prevents the two most common beginner mistakes: editing stale files and pushing unchecked code. Following the same sequence every time builds the professional habits that protect client stores from accidental breakage.",
    imageTitle: "Workflow diagram showing the seven steps: pull, install, preview, edit, check, review, push",
    imageHint: "Screenshot should show: a printed or digital workflow card with seven sequential steps labelled: 1. Pull, 2. npm install (if needed), 3. shopify theme dev, 4. Edit files, 5. shopify theme check, 6. Get review, 7. shopify theme push.",
    nav: "Workflow",
    action: "Open Shopify theme CLI docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Pull the latest theme files using: shopify theme pull --store knb-tutorial", "Run npm install if package.json exists and node_modules is missing.", "Start the preview with: shopify theme dev --store knb-tutorial", "Run shopify theme check after making an edit and confirm there are no new errors before asking for review."],
    example: "Example: the safe workflow is: pull first, install if needed, preview, edit, check, get review, push. Skipping the pull step is how teams overwrite each other's work on shared themes.",
    mistake: "Do not edit and push in the same session without previewing and running theme check. A push without preview is guessing — a push without review is a risk to the client.",
    question: "Before pushing, run...",
    answers: ["Preview and checks", "Billing setup", "Customer import"],
    correct: "Preview and checks",
  },
];

const buildToolsSteps = [
  {
    title: "Open the correct project folder",
    label: "Folder",
    description: "Build tool commands like npm install and gulp watch must be run from the theme project root — the folder containing both package.json and the Shopify theme subfolders. Running them from a parent directory or a Downloads copy causes errors that look broken but are simply caused by being in the wrong location.",
    imageTitle: "VS Code Explorer showing theme project root with package.json and theme folders visible",
    imageHint: "Screenshot should show: the VS Code Explorer panel with the theme project root open, showing package.json, gulpfile.js (if present), and the theme subfolders (assets, sections, snippets) all visible at the same level.",
    nav: "Folder",
    action: "Open VS Code terminal docs",
    url: "https://code.visualstudio.com/docs/terminal/basics",
    tryTasks: ["Open the theme project folder using File > Open Folder in VS Code.", "Confirm both package.json and the sections/ folder are visible in the Explorer panel at the same level.", "Open Terminal > New Terminal and run pwd to confirm the terminal path matches the theme root.", "Run: ls to see the folder contents and confirm package.json appears in the list."],
    example: "Example: the terminal should be inside the folder that contains both package.json and the theme folders. If you see only package.json but not sections/, you may be in the wrong subfolder.",
    mistake: "Do not run build commands from Downloads, Desktop, or the wrong parent folder. An 'ENOENT: no such file' error from npm is almost always a wrong folder problem.",
    question: "Build commands should run from...",
    answers: ["The project folder", "Any random folder", "Shopify admin only"],
    correct: "The project folder",
  },
  {
    title: "Install project packages",
    label: "npm install",
    description: "Running npm install downloads all the project's build dependencies — Gulp, PostCSS, Sass compiler, and others — from the npm registry into a local node_modules folder. This step is required once after cloning the project and any time node_modules is missing, but should never be run on a folder that lacks package.json.",
    imageTitle: "VS Code terminal showing npm install running with download progress and success message",
    imageHint: "Screenshot should show: the VS Code terminal with 'npm install' running, showing dependency download lines like 'added 312 packages in 22s', and the terminal prompt returning when complete.",
    nav: "Install",
    action: "Open npm install docs",
    url: "https://docs.npmjs.com/cli/commands/npm-install",
    tryTasks: ["Confirm package.json is visible in the Explorer panel before running anything.", "In the terminal, run: npm install", "Wait for the install to complete — watch for any 'npm error' messages.", "After install, confirm the node_modules/ folder now appears in the Explorer panel."],
    example: "Example command: npm install — this reads package.json and downloads all listed dependencies. It typically takes 20–60 seconds depending on the number of packages.",
    mistake: "Do not run npm install in a folder without package.json. Running it in the wrong directory creates a new package.json with no dependencies and a confusing empty node_modules folder.",
    question: "npm install should be run when...",
    answers: ["The project has package.json", "You are editing Shopify orders", "There is no code project"],
    correct: "The project has package.json",
  },
  {
    title: "Run gulp watch",
    label: "Gulp watch",
    description: "gulp watch starts the Gulp task runner in watch mode, which monitors source files like SCSS and compiles them into assets whenever a change is detected. Without gulp watch running, saving an SCSS file will not update the compiled CSS file in assets/ — the Shopify preview will show the old styles.",
    imageTitle: "VS Code terminal showing gulp watch running and listening for file changes",
    imageHint: "Screenshot should show: the VS Code terminal with 'gulp watch' running and output like 'Starting watch task...' or 'Watching files for changes...' with the terminal kept open and not returning to the prompt.",
    nav: "gulp watch",
    action: "Open Gulp docs",
    url: "https://gulpjs.com/docs/en/getting-started/quick-start/",
    tryTasks: ["Confirm the project has a gulpfile.js or gulpfile.mjs at the root — if it does not, do not run this command.", "In the terminal, run: gulp watch", "Confirm the terminal shows a watching or listening message and does NOT return to the prompt.", "Do not close or press Ctrl+C in this terminal while you are editing SCSS or JS files."],
    example: "Example command: gulp watch — after running it, the terminal stays active, watching for SCSS changes and compiling them into the assets/ folder automatically on each file save.",
    mistake: "Do not use gulp watch unless the project actually includes a Gulp setup with a gulpfile. Running it in a project without Gulp will show 'Local gulp not found' or a similar error.",
    question: "gulp watch is usually for...",
    answers: ["Watching and compiling assets", "Logging into Shopify admin", "Creating GitHub branches"],
    correct: "Watching and compiling assets",
  },
  {
    title: "Open a second terminal",
    label: "Two terminals",
    description: "Gulp watch and Shopify CLI both run as long-lived background processes — each one needs its own terminal so neither blocks the other. VS Code supports multiple terminal panels, and switching between them takes one click, making the two-terminal workflow manageable once you know where to look.",
    imageTitle: "VS Code showing two terminal tabs — one with gulp watch running and one ready for shopify theme dev",
    imageHint: "Screenshot should show: the VS Code terminal area with two terminal tabs visible at the top of the terminal panel — one tab labelled or showing gulp watch output, and a second tab open and ready for the next command.",
    nav: "Second terminal",
    action: "Open VS Code terminal docs",
    url: "https://code.visualstudio.com/docs/terminal/basics",
    tryTasks: ["With gulp watch running in terminal one, click the + icon in the terminal panel to open a new terminal tab.", "Confirm the new terminal tab shows the same project folder path as the first terminal.", "Leave terminal one with gulp watch untouched — use terminal two for Shopify CLI commands.", "Switch between the two terminals by clicking their tabs in the terminal panel."],
    example: "Example: terminal one runs gulp watch, terminal two runs shopify theme dev. You can see both by clicking between the tabs — each stays running independently.",
    mistake: "Do not stop gulp watch just to run Shopify CLI. Stopping the watcher means SCSS changes will no longer compile until you restart it, causing confusing preview inconsistencies.",
    question: "Why use two terminals?",
    answers: ["Both watchers can keep running", "To edit customer orders", "To avoid using VS Code"],
    correct: "Both watchers can keep running",
  },
  {
    title: "Run Shopify theme preview",
    label: "theme dev",
    description: "In the second terminal, run shopify theme dev to create a live preview of the theme against the assigned Shopify store. This preview hot-reloads when Liquid or JSON files change — but it relies on Gulp to compile SCSS first, so the order matters: Gulp must be running before the SCSS changes will appear in the preview.",
    imageTitle: "VS Code second terminal showing shopify theme dev running with a preview URL",
    imageHint: "Screenshot should show: the second terminal tab with 'shopify theme dev --store knb-tutorial' running and the output showing a preview URL like 'http://127.0.0.1:9292' and a 'View your theme at' message.",
    nav: "theme dev",
    action: "Open Shopify theme dev docs",
    url: "https://shopify.dev/docs/api/shopify-cli/theme/theme-dev",
    tryTasks: ["In terminal two, run: shopify theme dev --store knb-tutorial", "Log in through the browser if prompted.", "Copy the preview URL (e.g. http://127.0.0.1:9292) and open it in the browser.", "Make a small SCSS change, watch terminal one for the Gulp compile message, then refresh the browser preview."],
    example: "Correct command: shopify theme dev --store knb-tutorial — note the space between --store and the store name. Using a colon or equals sign instead of a space is a common syntax error.",
    mistake: "Do not write --store:knb-tutorial or --store=knb-tutorial. The correct format uses a space: --store knb-tutorial. Incorrect flag syntax causes a confusing 'unknown flag' error.",
    question: "The correct flag format is...",
    answers: ["--store sample-store.myshopify.com", "--store:sample-store.shopify.com", "--store=always-required-password"],
    correct: "--store sample-store.myshopify.com",
  },
  {
    title: "Keep both running while editing",
    label: "Edit",
    description: "The active development loop requires both terminals running: Gulp in terminal one compiles SCSS changes into CSS, and Shopify CLI in terminal two serves the preview. If either process stops — because a terminal was closed or Ctrl+C was pressed — the loop breaks and changes will no longer appear in the preview correctly.",
    imageTitle: "VS Code with both terminal tabs running — gulp watch in one and shopify theme dev in the other — alongside an open SCSS file",
    imageHint: "Screenshot should show: the VS Code window with the Explorer panel open, an SCSS file open in the editor, and the terminal panel showing two tabs — one with gulp watch output and one with the shopify theme dev preview URL visible.",
    nav: "Keep running",
    action: "Open Shopify CLI docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Open an SCSS file (e.g. assets/theme.scss or a component SCSS partial) and make a small change.", "Switch to terminal one and watch for a Gulp compile success message after saving.", "Switch to the browser preview and refresh — the change should be visible.", "If the SCSS change does not appear, check terminal one first to confirm Gulp compiled without errors."],
    example: "Example: SCSS changes compile through Gulp into assets/theme.css, then Shopify theme dev serves the updated CSS in the preview. The two tools work together — neither alone is sufficient.",
    mistake: "Do not assume the Shopify preview is broken if SCSS is not updating. The most likely cause is that gulp watch stopped — check terminal one before troubleshooting anything else.",
    question: "If SCSS does not update, check...",
    answers: ["Whether gulp watch is still running", "Only product inventory", "Only store password"],
    correct: "Whether gulp watch is still running",
  },
  {
    title: "Stop commands safely",
    label: "Stop",
    description: "Long-running processes like gulp watch and shopify theme dev are stopped by pressing Ctrl+C in their respective terminals — not by closing VS Code. Closing the application without stopping processes first can leave orphaned processes running in the background that hold ports and interfere with the next session.",
    imageTitle: "VS Code terminal showing Ctrl+C pressed to stop gulp watch with a process termination message",
    imageHint: "Screenshot should show: the VS Code terminal with the gulp watch process stopped by Ctrl+C, showing a termination message or the terminal prompt returning. A second screenshot showing the shopify theme dev terminal also stopped.",
    nav: "Stop",
    action: "Open VS Code terminal docs",
    url: "https://code.visualstudio.com/docs/terminal/basics",
    tryTasks: ["Click terminal one (gulp watch) to make it active.", "Press Ctrl + C and confirm the terminal prompt returns, indicating the process stopped.", "Click terminal two (shopify theme dev) and also press Ctrl + C to stop it.", "Confirm both terminals show the prompt before closing VS Code."],
    example: "Example: Ctrl + C stops gulp watch or shopify theme dev. After pressing it, the terminal shows the command prompt again, which means the process has ended.",
    mistake: "Do not close VS Code without stopping running processes first. If port 9292 is still occupied when you try to run shopify theme dev in the next session, it will fail to start until you find and kill the background process.",
    question: "Long-running terminal commands are usually stopped with...",
    answers: ["Ctrl + C", "Delete key", "Shopify password"],
    correct: "Ctrl + C",
  },
];

const devTroubleshootingSteps = [
  {
    title: "Check the folder first",
    label: "Folder",
    description: "The majority of beginner terminal errors — 'command not found', 'no theme files', 'no package.json' — are caused by the terminal being in the wrong directory, not by a broken tool. Checking the folder takes five seconds and resolves more issues faster than any reinstall or restart.",
    imageTitle: "VS Code terminal showing pwd output with the correct theme folder path",
    imageHint: "Screenshot should show: the VS Code terminal with 'pwd' typed and the output showing a path that ends in the theme project folder name (e.g. /Users/yourname/Projects/knb-theme), followed by 'ls' output showing sections, templates, package.json.",
    nav: "Folder",
    action: "Open VS Code terminal docs",
    url: "https://code.visualstudio.com/docs/terminal/basics",
    tryTasks: ["Run: pwd on Mac/Linux or: cd on Windows to see the current terminal folder path.", "Run: ls (Mac/Linux) or dir (Windows) to see the files in the current folder.", "Confirm the output includes sections/, templates/, and package.json — if not, navigate to the correct folder.", "Run: cd /path/to/correct/theme-folder to move if needed, then re-run the failing command."],
    example: "Example: run ls or dir and check for sections/, templates/, and package.json. If none of these appear, the terminal is in the wrong place.",
    mistake: "Do not reinstall Node, npm, or Shopify CLI before checking the current folder. Most 'CLI broken' reports turn out to be a wrong folder problem that takes 10 seconds to fix.",
    question: "First troubleshooting check is...",
    answers: ["Current folder", "Store logo", "Product inventory"],
    correct: "Current folder",
  },
  {
    title: "Check versions",
    label: "Versions",
    description: "If the folder is correct but a command still fails, check that all four required tools — Node, npm, Git, and Shopify CLI — are installed and responding. A 'command not found' error means the tool is either not installed or not on the system PATH, both of which require a specific fix before any other troubleshooting makes sense.",
    imageTitle: "VS Code terminal showing all four version check commands with their outputs",
    imageHint: "Screenshot should show: the VS Code terminal with four sequential commands: 'node -v', 'npm -v', 'git --version', 'shopify version' — each with a version number response. If any shows 'command not found', that is the tool to fix.",
    nav: "Versions",
    action: "Open Shopify CLI requirements",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Run: node -v — if this says 'command not found', Node is not installed or not on PATH.", "Run: npm -v — this should respond if Node is installed correctly.", "Run: git --version — if missing, download Git from git-scm.com.", "Run: shopify version — if missing, run: npm install -g @shopify/cli@latest"],
    example: "Example: 'command not found: shopify' usually means Shopify CLI was not installed globally, or the terminal session was opened before the install completed. Close and reopen the terminal, then try again.",
    mistake: "Do not continue troubleshooting other issues until all four required commands respond. A missing tool will cause cascading failures that look unrelated but share the same root cause.",
    question: "Version checks confirm...",
    answers: ["Tools are available", "Theme is published", "Discount is active"],
    correct: "Tools are available",
  },
  {
    title: "Check Shopify login",
    label: "Login",
    description: "Shopify CLI theme commands require an authenticated Shopify account with staff or Theme Access permissions for the target store. Using the wrong account — such as a personal Shopify account that has no access to the client store — produces permission errors that look like CLI bugs but are actually authentication issues.",
    imageTitle: "VS Code terminal showing shopify theme info output with the authenticated account and store name visible",
    imageHint: "Screenshot should show: the VS Code terminal with 'shopify theme info' output displaying the connected store name, the authenticated account email, and the current theme details — confirming the correct account is active.",
    nav: "Login",
    action: "Open Shopify CLI auth docs",
    url: SHOPIFY_THEME_CLI_DOCS_URL,
    tryTasks: ["Run: shopify theme info --store knb-tutorial to check which account is currently authenticated.", "If the account shown is wrong, run: shopify auth logout to clear it.", "Run: shopify theme dev --store knb-tutorial to trigger a new browser login with the correct account.", "Confirm with the trainer that your staff account has Theme or Online Store permissions."],
    example: "Example: a staff account needs Theme permission (or full access) to run shopify theme dev, pull, or push. If the account has only Products permission, theme commands will return a 403 or permissions error.",
    mistake: "Do not use a personal Shopify account that has no access to the training store. Always check which account is active with shopify theme info before running any theme commands.",
    question: "Theme commands need...",
    answers: ["Correct account and theme access", "Only storefront password", "Only a product image"],
    correct: "Correct account and theme access",
  },
  {
    title: "Read the exact error",
    label: "Error",
    description: "The exact wording of a terminal error message identifies the specific problem — summarising it as 'it doesn't work' removes all the diagnostic information that makes it fixable. Training trainees to copy the full error message before asking for help saves the senior developer from spending ten minutes recreating a problem that the error message already explains.",
    imageTitle: "VS Code terminal showing an example error message with the full text highlighted for copying",
    imageHint: "Screenshot should show: the VS Code terminal with an example error message visible — such as 'Error: EACCES: permission denied, access /usr/local/lib/node_modules' — with the full error text clearly readable and the command that caused it visible above it.",
    nav: "Error",
    action: "Open Shopify help resources",
    url: "https://community.shopify.dev/",
    tryTasks: ["Select all the terminal output from the failing command — including the command itself.", "Copy the full error text using Ctrl+C / Cmd+C.", "Note the exact folder path (from pwd) and the exact store name used when the error occurred.", "Paste the command, error, folder, and store name into your help message or support ticket."],
    example: "Example: 'command not found: shopify' and 'Error: Not authorized' are completely different problems with different solutions. The exact message is the diagnosis.",
    mistake: "Do not summarise errors as 'it does not work' or 'there was an error' without the actual text. The full error message is the most important piece of information for solving the problem quickly.",
    question: "A useful help request includes...",
    answers: ["Command and exact error", "Only a screenshot of the homepage", "Only the store name"],
    correct: "Command and exact error",
  },
  {
    title: "Know when to escalate",
    label: "Escalate",
    description: "After completing the four-step checklist — folder, versions, login, exact error — and the problem is still unresolved, escalate to the trainer with all the diagnostic information already gathered. A well-prepared escalation saves everyone time and demonstrates the professional discipline of checking before asking.",
    imageTitle: "Troubleshooting checklist showing four completed checks before escalation",
    imageHint: "Screenshot should show: a checklist (digital or printed) with four rows: Folder confirmed, Versions checked, Login confirmed, Error copied — each with a tick or status. Below it, a fifth row labelled 'Escalate to trainer' with the collected information listed.",
    nav: "Escalate",
    action: "Open Shopify CLI help",
    url: SHOPIFY_CLI_DOCS_URL,
    tryTasks: ["Write down: the current folder path, Node/npm/Git/Shopify CLI versions, the Shopify account used, and the exact error message.", "List which of the four checks you already completed and what the result of each was.", "Share this information with the trainer before asking for help — do not start with 'it's broken'.", "Do not change any live store theme settings, billing, or payment settings while attempting to fix a CLI issue."],
    example: "Example: a good escalation message reads: 'Folder: /Users/me/knb-theme. Node: v20.11.0, npm: 10.2, git: 2.40, shopify: 3.55. Store: knb-tutorial. Command: shopify theme dev. Error: Error: Not authorized to access store.'",
    mistake: "Do not change live theme settings, remove a password, or edit billing while trying to fix a CLI access problem. These are separate systems — fixing one will not help the other and may create new problems.",
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
      "Before any GitHub work, confirm the correct company GitHub account, repository name, assigned branch, and whether 2FA or access approval is needed — all with the supervisor. Jumping straight into GitHub without this confirmation is how trainees accidentally access the wrong repository, expose credentials, or clone a client's private project they were not meant to see.",
    imageTitle: "Internal access confirmation checklist showing account, repository, branch, and 2FA requirements",
    imageHint: "Screenshot should show: a digital or printed checklist with four rows — GitHub account to use, Repository name, Assigned branch, and 2FA or approval needed — with space to fill in the answers from the supervisor.",
    nav: "Ask first",
    action: "Open GitHub Desktop auth docs",
    url: GITHUB_DESKTOP_AUTH_DOCS_URL,
    tryTasks: [
      "Ask the supervisor: which GitHub account (personal or company email) should be used for this work?",
      "Ask: which repository name and which branch are assigned for this task?",
      "Ask: is 2FA required? Is there any approval process or access request needed before sign-in?",
      "Write down the answers before opening GitHub Desktop — do not start the sign-in process without them.",
    ],
    example: "Example: ask the supervisor for repository access before cloning a company project. The answer should include the full repository name (e.g. 'knb-web/client-theme') and the branch (e.g. 'training/your-name').",
    mistake: "Do not use someone else's account, guess a company password, or clone a repository you were not specifically assigned. GitHub logs every access event — unauthorised access is traceable.",
    question: "Before GitHub work, ask the supervisor for...",
    answers: ["Account, repo, branch, and access help", "Product prices", "Store discount codes"],
    correct: "Account, repo, branch, and access help",
  },
  {
    title: "Install GitHub Desktop",
    label: "Install",
    description: "GitHub Desktop provides a visual interface for the Git workflow — clone, commit, push, pull, and branch management — without requiring command-line Git knowledge. It is the recommended tool for KNB trainees because it shows the list of changed files before every commit, making it harder to accidentally commit the wrong files.",
    imageTitle: "GitHub Desktop application open after installation showing the welcome screen",
    imageHint: "Screenshot should show: the GitHub Desktop application open after installation, showing the welcome screen with options to Sign in to GitHub.com, Sign in to GitHub Enterprise, and Skip this step. The app name and version should be visible.",
    nav: "Install",
    action: "Open GitHub Desktop",
    url: GITHUB_DESKTOP_URL,
    tryTasks: ["Download GitHub Desktop from desktop.github.com.", "Run the installer — it installs without needing admin password on most machines.", "Open GitHub Desktop after installation.", "Confirm the welcome screen appears with the sign-in options."],
    example: "Example: use GitHub Desktop when the trainee is not ready for command-line Git yet. It provides the same core workflow — clone, commit, push, pull — in a clear visual interface.",
    mistake: "Do not skip GitHub Desktop setup if the team workflow requires it. Using terminal git commands without proper setup can lead to accidental pushes to protected branches.",
    question: "GitHub Desktop helps beginners use...",
    answers: ["Git visually", "Shopify payments", "Theme sections only"],
    correct: "Git visually",
  },
  {
    title: "Sign in safely",
    label: "Sign in",
    description: "Sign in to GitHub Desktop through the browser using the approved account — GitHub Desktop opens the browser for OAuth authentication, which means the password is entered on github.com, not inside the app. Completing 2FA if prompted is essential; stopping to ask the supervisor instead of guessing the 2FA code prevents account lockouts.",
    imageTitle: "GitHub Desktop sign-in screen with Sign in to GitHub.com button and browser OAuth flow",
    imageHint: "Screenshot should show: the GitHub Desktop sign-in panel with the 'Sign in to GitHub.com' button, and if possible a second screenshot of the GitHub.com browser login page that opens after clicking it.",
    nav: "Sign in",
    action: "Open GitHub Desktop auth docs",
    url: GITHUB_DESKTOP_AUTH_DOCS_URL,
    tryTasks: ["In GitHub Desktop, click 'Sign in to GitHub.com' from the welcome screen.", "The browser will open — log in with the approved account email and password on github.com.", "If 2FA is required, enter the code from your authenticator app or ask the supervisor for the code.", "Return to GitHub Desktop and confirm your GitHub username appears in the top-right corner of the app."],
    example: "Example: if 2FA asks for a code and you do not have the authenticator set up, stop and ask the supervisor instead of guessing. Multiple failed 2FA attempts can temporarily lock the account.",
    mistake: "Do not save company credentials in an unapproved browser profile or shared device. Always sign in using a private or work profile to prevent credentials from being auto-saved somewhere insecure.",
    question: "If sign-in needs a code or password you do not have...",
    answers: ["Ask the supervisor", "Guess several times", "Create a random new repo"],
    correct: "Ask the supervisor",
  },
  {
    title: "Clone the assigned repository",
    label: "Clone",
    description: "Cloning creates a local copy of the GitHub repository on your computer, including the full commit history, all branches, and all files. Choosing the correct local folder location — not Desktop or Downloads — makes it easy to open the project in VS Code and run CLI commands from the right path.",
    imageTitle: "GitHub Desktop Clone repository dialog showing repository list and local path selector",
    imageHint: "Screenshot should show: the GitHub Desktop 'Clone a repository' dialog with the repository search field, a repository selected from the list, and the 'Local path' field showing a clean folder location like /Users/yourname/Projects/.",
    nav: "Clone",
    action: "Open GitHub clone docs",
    url: GITHUB_DESKTOP_CLONE_DOCS_URL,
    tryTasks: ["In GitHub Desktop, choose File > Clone repository.", "Search for or select only the assigned repository name from the list.", "Set the Local path to a clean location such as ~/Projects/ or ~/Work/ — not Desktop or Downloads.", "Click Clone and wait for the download to complete."],
    example: "Example: clone the company training repository into a Projects or Work folder — for example: /Users/yourname/Projects/knb-training-theme. This makes it easy to open in VS Code with File > Open Folder.",
    mistake: "Do not clone unrelated client repositories without permission. Cloning gives you read access to the code, but it also creates a local copy of potentially sensitive client files on your machine.",
    question: "Cloning means...",
    answers: ["Downloading a repo locally", "Publishing the live store", "Deleting old files"],
    correct: "Downloading a repo locally",
  },
  {
    title: "Open in VS Code",
    label: "Open",
    description: "After cloning, open the repository in VS Code using GitHub Desktop's built-in 'Open in Visual Studio Code' option — this opens the exact cloned folder as the workspace, ensuring the terminal, Git, and file paths all point to the tracked project. Editing a copied folder outside the cloned repository breaks the Git tracking and makes commits impossible.",
    imageTitle: "GitHub Desktop Repository menu showing Open in Visual Studio Code option",
    imageHint: "Screenshot should show: the GitHub Desktop window with the Repository menu open and 'Open in Visual Studio Code' highlighted. A second screenshot should show VS Code opening with the repository folder visible in the Explorer panel.",
    nav: "Open in VS Code",
    action: "Open VS Code",
    url: "https://code.visualstudio.com/",
    tryTasks: ["In GitHub Desktop, click Repository > Open in Visual Studio Code.", "Confirm VS Code opens with the repository folder shown in the Explorer panel.", "Check the VS Code window title — it should show the project folder name.", "Open the Source Control panel in VS Code and confirm it shows the same repository as GitHub Desktop."],
    example: "Example: GitHub Desktop watches changes made in VS Code automatically. When you save a file in VS Code, GitHub Desktop updates its changed files list within seconds.",
    mistake: "Do not edit a duplicate folder or a Desktop copy outside the cloned repository. Git will not track those changes — your commits will be on the correct folder while your edits are on a different one.",
    question: "After cloning, edit files in...",
    answers: ["The cloned repository folder", "A random desktop copy", "The browser download folder"],
    correct: "The cloned repository folder",
  },
  {
    title: "Know the no-edit rule",
    label: "Rules",
    description: "Before changing any file in the repository, confirm which branch to work on, which files are in scope for the task, and whether a pull request is required before merging. These three rules prevent the most common beginner Git mistakes: editing the wrong branch, touching out-of-scope files, and pushing directly to main.",
    imageTitle: "GitHub Desktop showing the Current branch dropdown and a list of branches with main highlighted",
    imageHint: "Screenshot should show: the GitHub Desktop Current branch dropdown open, showing the list of branches with 'main' at the top and a training or feature branch below it — the training branch should be selected, not main.",
    nav: "Rules",
    action: "Open GitHub Desktop docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["Ask the supervisor which branch to use for your assigned task.", "In GitHub Desktop, check the Current branch selector and switch to the assigned branch if needed.", "Ask which files in the repository are in scope for your task — only edit those files.", "Ask whether a pull request is required when the task is done or if you can push directly."],
    example: "Example: beginners should not commit directly to main unless the supervisor explicitly approves. Work on a branch named after the task, such as 'training/homepage-copy' or 'feature/new-header'.",
    mistake: "Do not edit unrelated files just because they appear in the project. Every file you change shows up in the GitHub Desktop changed files list and will be part of your commit unless you manually deselect it.",
    question: "Beginners should avoid committing directly to...",
    answers: ["main without approval", "their assigned branch", "a local folder"],
    correct: "main without approval",
  },
];

const githubWorkflowSteps = [
  {
    title: "Fetch and pull first",
    label: "Sync first",
    description: "Fetch checks GitHub for any updates pushed by teammates since your last sync, and pull downloads those changes to your local repository. Starting work without fetching and pulling first is how merge conflicts happen — two people edit the same file from different starting points and Git cannot automatically resolve the difference.",
    imageTitle: "GitHub Desktop showing Fetch origin button and Pull origin notification with pending changes count",
    imageHint: "Screenshot should show: the GitHub Desktop top bar with the 'Fetch origin' button visible, and if updates exist, the button changing to 'Pull origin' with a number showing how many commits are pending. The repository name should be visible.",
    nav: "Fetch / Pull",
    action: "Open GitHub Desktop docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["Open GitHub Desktop and confirm the correct repository and branch are selected.", "Click Fetch origin to check for any updates from GitHub.", "If the button changes to Pull origin with a number, click it to download the updates.", "Confirm the branch is now up to date before opening any files in VS Code."],
    example: "Example: pull first so you do not edit old files. If a teammate pushed changes to sections/header.liquid while you had an older copy open, your edits will conflict when you try to commit.",
    mistake: "Do not start coding before syncing the repository. Even a five-minute gap between fetch and starting work can create a merge conflict if a teammate pushes during that time.",
    question: "Pull means...",
    answers: ["Download latest changes", "Upload your commit", "Delete a branch"],
    correct: "Download latest changes",
  },
  {
    title: "Use the assigned branch",
    label: "Branch",
    description: "A branch keeps one task's changes isolated from the main project until a reviewer approves merging them. Creating a branch for each task — named clearly after the work — makes it easy for the supervisor to see exactly what changed and why, and makes it safe to work in parallel with other team members without breaking each other's work.",
    imageTitle: "GitHub Desktop Current branch dropdown showing the assigned training branch selected",
    imageHint: "Screenshot should show: the GitHub Desktop window with the Current branch dropdown open, showing a training or feature branch selected (e.g. 'training/header-update') with main visible but not selected.",
    nav: "Branch",
    action: "Open GitHub Desktop branch docs",
    url: "https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop",
    tryTasks: ["Click the Current branch dropdown in GitHub Desktop.", "Confirm you are on the assigned branch — not main.", "If the branch does not exist, click New branch and name it clearly (e.g. training/yourname-task-description).", "Ask the trainer before creating a branch or switching to main."],
    example: "Example: use a branch named 'training/angelo-homepage-copy' for a homepage copy update task. This makes it clear who made the change and what it was for.",
    mistake: "Do not mix several unrelated tasks in one branch. A branch with three different features is harder to review and harder to revert if one change causes a problem.",
    question: "A branch is used to...",
    answers: ["Separate task work", "Change Shopify passwords", "Install Node"],
    correct: "Separate task work",
  },
  {
    title: "Review changed files",
    label: "Review",
    description: "GitHub Desktop shows the full list of changed files and the line-by-line diff of every edit before you commit — this is the last opportunity to catch unintended changes, auto-generated files, or system files like .DS_Store that should not be committed. Reviewing every changed file before committing is a professional habit that prevents messy commit history.",
    imageTitle: "GitHub Desktop changed files panel showing edited files with green addition and red deletion line diffs",
    imageHint: "Screenshot should show: the GitHub Desktop left panel listing changed files with checkboxes, and the right panel showing the diff of one file with green lines for additions and red lines for deletions.",
    nav: "Review",
    action: "Open GitHub Desktop docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["Make a small assigned edit in VS Code and save the file.", "Switch to GitHub Desktop — the changed files panel should show your file.", "Click each changed file to view its diff and confirm the changes are exactly what you intended.", "If any unexpected files appear (e.g. .DS_Store, node_modules entries), uncheck them before committing."],
    example: "Example: if .DS_Store or unrelated files appear in the changed files list, ask the trainer before committing them. Committing .DS_Store clutters the repository history with operating system metadata.",
    mistake: "Do not commit files you do not recognise or did not intentionally change. Review every changed file, not just the one you intended to edit.",
    question: "Before committing, review...",
    answers: ["Changed files", "Only the page title", "Only the browser preview"],
    correct: "Changed files",
  },
  {
    title: "Write a clear commit",
    label: "Commit",
    description: "A commit saves a local checkpoint with a message that explains what changed and why — it is the permanent record of your work that the supervisor and future developers will read. A vague message like 'update' or 'fix' tells nobody what happened; a specific message like 'Update hero heading copy on homepage template' gives immediate context.",
    imageTitle: "GitHub Desktop commit panel showing a descriptive commit summary and description fields",
    imageHint: "Screenshot should show: the GitHub Desktop commit area at the bottom-left of the screen, with the Summary field filled in with a clear message like 'Update hero banner heading text on homepage', and the Commit to branch button ready to click.",
    nav: "Commit",
    action: "Open GitHub Desktop commit docs",
    url: "https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop",
    tryTasks: ["In the Summary field, write a commit message that starts with a verb: 'Add', 'Update', 'Fix', or 'Remove'.", "Be specific: 'Update footer copyright year in layout/theme.liquid' is better than 'update footer'.", "Use the Description field for longer context if the change needs more explanation.", "Click 'Commit to [branch-name]' only after reviewing the changed files."],
    example: "Example commit message: 'Add About page link to Main menu navigation' — this is clear, specific, and explains both what changed and where.",
    mistake: "Do not use vague messages like 'update', 'fix', or 'final final v2'. These are useless in commit history and make it impossible to find or revert a specific change later.",
    question: "A commit is...",
    answers: ["A local saved checkpoint", "A live Shopify publish", "A password reset"],
    correct: "A local saved checkpoint",
  },
  {
    title: "Push to GitHub",
    label: "Push",
    description: "Push uploads your local commits to GitHub, making them visible to the supervisor and team. Commit saves your work locally — push shares it. Not pushing means your work only exists on your machine and could be lost if the device fails or the task is handed to someone else.",
    imageTitle: "GitHub Desktop Push origin button after committing a change",
    imageHint: "Screenshot should show: the GitHub Desktop toolbar with the 'Push origin' button active (not greyed out), showing a number like '1' indicating one unpushed commit. The commit should be visible in the history panel below.",
    nav: "Push",
    action: "Open GitHub Desktop docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["After committing, find the Push origin button in the top toolbar of GitHub Desktop.", "Click Push origin to upload your commit to GitHub.", "Open github.com in the browser and navigate to the repository — confirm your branch and commit appear.", "Tell the supervisor you have pushed and are ready for review."],
    example: "Example: commit saves locally; push sends the commit to GitHub. After pushing, the supervisor can see your changes on github.com without needing to access your computer.",
    mistake: "Do not push unfinished or unrelated changes without telling the supervisor. Pushing incomplete work to a shared branch can block teammates who are also working on that branch.",
    question: "Push means...",
    answers: ["Upload commits to GitHub", "Download teammate changes", "Open Shopify admin"],
    correct: "Upload commits to GitHub",
  },
  {
    title: "Ask for review",
    label: "Review",
    description: "After pushing, always notify the supervisor with a message that includes what changed, the branch name, and a link to the branch or pull request on GitHub. Review is not optional for KNB trainees — no branch is merged or deployed without a senior developer confirming the changes are correct.",
    imageTitle: "GitHub branch page on github.com showing the pushed commits and a Compare and pull request button",
    imageHint: "Screenshot should show: the github.com repository page with the recently pushed branch selected, showing the commit message visible in the commit list, and the 'Compare and pull request' button that GitHub automatically shows for recently pushed branches.",
    nav: "Ask review",
    action: "Open GitHub pull request docs",
    url: "https://docs.github.com/en/pull-requests",
    tryTasks: ["Open github.com and navigate to the repository.", "Find your branch in the branch list and copy the branch URL.", "Send the supervisor a message: the branch name, what you changed, and the GitHub URL.", "Wait for the supervisor's feedback before merging, pushing more changes, or deploying to Shopify."],
    example: "Example message: 'Pushed branch training/angelo-header-copy. Updated the header tagline text in sections/header.liquid. Ready for review. Branch: [URL]'",
    mistake: "Do not merge or deploy theme work without supervisor review. Even a small text change in a theme file can introduce a Liquid syntax error that breaks the storefront for all customers.",
    question: "After pushing, the next step is usually...",
    answers: ["Ask for review", "Delete the branch immediately", "Change billing"],
    correct: "Ask for review",
  },
  {
    title: "Handle common GitHub mistakes",
    label: "Fixes",
    description: "The most common beginner Git mistakes — merge conflicts, accidentally staged wrong files, wrong branch commits, and unexpected changed files — all share one correct response: stop and ask the supervisor before clicking any button you are unsure about. Clicking 'Discard', 'Revert', or 'Force push' without understanding what they do can permanently destroy work.",
    imageTitle: "GitHub Desktop showing a merge conflict warning or unexpected changed files in the panel",
    imageHint: "Screenshot should show: the GitHub Desktop changed files panel with a merge conflict indicator (the yellow warning icon on a file), or an unexpected system file like .DS_Store listed — demonstrating two scenarios where the trainee should stop and ask.",
    nav: "Mistakes",
    action: "Open GitHub Desktop support docs",
    url: "https://docs.github.com/en/desktop",
    tryTasks: ["If GitHub Desktop shows a conflict marker on a file, stop — do not click Resolve, Abort, or Discard until the trainer explains the options.", "If you see a changed file you did not intentionally edit, uncheck it in the changed files panel and ask the trainer before proceeding.", "If you are on the wrong branch with changes already made, stop — do not move the files manually, ask the trainer.", "Write down exactly what happened before asking for help: which branch, which files, what action you took."],
    example: "Example: if GitHub Desktop shows a conflict warning, get supervisor help before clicking any option. The wrong click on a conflict can delete work permanently — there is no undo for some Git operations.",
    mistake: "Do not click Discard, Revert, or Force push without explicit trainer approval. Each of these actions can permanently remove work or overwrite a teammate's commits in ways that Git cannot automatically recover.",
    question: "If there is a conflict, you should...",
    answers: ["Stop and ask for help", "Click random buttons", "Delete the repo"],
    correct: "Stop and ask for help",
  },
];

const bemBasicSteps = [
  {
    title: "Understand the block",
    label: "Block",
    description: "A block is a standalone component that can make sense by itself, like card, button, product-card, or site-header. Naming blocks correctly is the foundation of BEM — a well-named block can be moved anywhere on the page without changing its class name.",
    imageTitle: "BEM block",
    imageHint: "Screenshot should show: a product card component with a visible class attribute of 'product-card', surrounded by a highlight box or annotation pointing to the block-level element in the browser DevTools HTML panel.",
    nav: "Block",
    action: "Open BEM naming docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Choose one component visible on the page — for example, the product card.", "Name the block using a lowercase hyphenated noun that describes the component's purpose, not its location (e.g., product-card, not homepage-left-box).", "Check that the name makes sense if the component moved to a different page or section.", "Write the block name on paper and explain why it is reusable — share your answer with the trainer."],
    example: "Example: product-card is a better block name than homepage-left-box.",
    mistake: "Do not name blocks from their page position, like top-green-area.",
    question: "A BEM block should be...",
    answers: ["A standalone component", "A random color name", "A database field"],
    correct: "A standalone component",
  },
  {
    title: "Name elements",
    label: "Element",
    description: "An element is a part of a block that depends on the block for meaning — it cannot be used in isolation. Elements are named with double underscores: block__element, which makes the parent-child relationship instantly clear to anyone reading the CSS.",
    imageTitle: "BEM element",
    imageHint: "Screenshot should show: a product card in DevTools with element classes visible — product-card__image, product-card__title, and product-card__price — each highlighted or annotated in the HTML panel.",
    nav: "Element",
    action: "Open BEM naming docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Pick the product-card block and list all visible parts: image, title, price, button.", "Name each part using the block__element pattern (e.g., product-card__image, product-card__title, product-card__price, product-card__action).", "Keep element names short and descriptive — avoid generic names like product-card__item or product-card__div.", "Write out all four element class names and confirm with the trainer that none of them chain deeper than one level (no product-card__body__title)."],
    example: "Example: product-card__image, product-card__title, product-card__price.",
    mistake: "Do not write product-card__body__title. Use product-card__title.",
    question: "A BEM element uses...",
    answers: ["Double underscore", "Double dash only", "An ID selector"],
    correct: "Double underscore",
  },
  {
    title: "Name modifiers",
    label: "Modifier",
    description: "A modifier is a variation of a block or element — such as featured, compact, disabled, or active — that changes its appearance or behaviour. Modifiers use double dashes and are always applied alongside the base class, never alone.",
    imageTitle: "BEM modifier",
    imageHint: "Screenshot should show: two product cards side by side — one with class 'product-card' and one with 'product-card product-card--featured' — both classes visible in the DevTools HTML panel with the modifier class highlighted.",
    nav: "Modifier",
    action: "Open BEM naming docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Choose one block variation — for example, a featured product card — and name a block modifier for it: product-card--featured.", "Choose one element variation — for example, a sale price — and name an element modifier: product-card__price--sale.", "Write both class combinations out in full: 'product-card product-card--featured' and 'product-card__price product-card__price--sale'.", "Explain to the trainer why the base class must always be kept alongside the modifier class."],
    example: "Example: product-card--featured and product-card__price--sale.",
    mistake: "Do not create a new block name just because the component has a small visual variation.",
    question: "A BEM modifier uses...",
    answers: ["Double dash", "Double underscore only", "A tag selector"],
    correct: "Double dash",
  },
  {
    title: "Write the HTML classes",
    label: "HTML",
    description: "In HTML, use the base class plus the modifier class together when a component has a variation. This lets the base styles apply first and the modifier layer on top — making the component easy to maintain and easy to extend.",
    imageTitle: "BEM HTML",
    imageHint: "Screenshot should show: an HTML snippet in a code editor with a product card article element carrying both 'product-card' and 'product-card--featured' classes, and a price span carrying 'product-card__price product-card__price--sale'.",
    nav: "HTML",
    action: "Open BEM docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Write an article element with class='product-card'.", "Add element classes for image, title, price, and button inside it: product-card__image, product-card__title, product-card__price, product-card__action.", "Add a modifier to the article to make it featured: class='product-card product-card--featured'.", "Add a sale modifier to the price span: class='product-card__price product-card__price--sale' — confirm both the base and modifier class are present."],
    example: '<article class="product-card product-card--featured">...</article>',
    mistake: "Do not use only the modifier class. Keep the base class too.",
    question: "For a modified block, keep...",
    answers: ["Base and modifier classes", "Only modifier", "Only an ID"],
    correct: "Base and modifier classes",
  },
  {
    title: "Avoid high specificity",
    label: "Specificity",
    description: "BEM works best with flat, simple class selectors — not IDs, deep descendant chains, or tag-heavy selectors. Low specificity means any component style can be overridden predictably when needed, without resorting to !important.",
    imageTitle: "Clean selectors",
    imageHint: "Screenshot should show: two CSS rules side by side — a high-specificity version (.page main article h3.title) crossed out in red, and the BEM version (.product-card__title) in green — annotated to show which is easier to override.",
    nav: "Specificity",
    action: "Open BEM naming docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Open the project CSS or SCSS and find one selector that uses a tag name or multiple nested classes (e.g., .page main .product-area h3).", "Replace it with a single direct BEM class selector (e.g., .product-card__title).", "Confirm no ID selectors (#header, #main) are used for component-level styling.", "Explain to the trainer what would happen if !important was needed to override that old selector — and why the BEM class avoids that problem."],
    example: "Example: .product-card__title is cleaner than .page main article h3.title.",
    mistake: "Do not fight CSS with more nesting when a direct class solves it.",
    question: "BEM usually prefers...",
    answers: ["Simple class selectors", "Deep ID selectors", "Inline styles"],
    correct: "Simple class selectors",
  },
  {
    title: "Rename messy classes",
    label: "Practice",
    description: "Real-world codebases often have leftover class names that describe appearance or position rather than purpose. Converting these to proper BEM names makes the code readable to any developer joining the project later.",
    imageTitle: "BEM rename practice",
    imageHint: "Screenshot should show: a before-and-after table with three columns — original class name, the problem with it, and the corrected BEM name — written in a code editor or on a whiteboard.",
    nav: "Practice",
    action: "Open BEM docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Rename card-img to the correct BEM element name: product-card__image.", "Rename big-green-title to a purpose-based BEM name: product-card__title (modifiers for colour go in CSS, not the class name).", "Rename active-price to product-card__price--sale or product-card__price--active depending on the context.", "Write out all three original names and their corrected BEM versions and share the list with the trainer for review."],
    example: "Example: card-img becomes product-card__image.",
    mistake: "Do not keep vague names that only make sense to the person who wrote them.",
    question: "big-green-title is weak because it describes...",
    answers: ["Appearance, not purpose", "The block clearly", "A Shopify product"],
    correct: "Appearance, not purpose",
  },
];

const bemMediumSteps = [
  {
    title: "Map a real component",
    label: "Map",
    description: "Before writing a single line of CSS, map the component into a block, its elements, and possible modifiers. This naming map is the single source of truth for all developers working on that component — skipping it leads to inconsistent class names across the codebase.",
    imageTitle: "Product card map",
    imageHint: "Screenshot should show: a hand-drawn or digital diagram of a product card split into labelled zones — block (product-card), elements (product-card__media, product-card__title, product-card__price, product-card__action), and modifiers (product-card--compact, product-card--featured).",
    nav: "Map",
    action: "Open BEM docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Choose product-card as the block name and write it at the top of a blank page.", "List all visible internal parts: image, title, price, and call-to-action button — then give each one a block__element name.", "Add at least two block modifiers (product-card--featured, product-card--compact) and one element modifier (product-card__price--sale).", "Show the completed naming map to the trainer before writing any CSS — get sign-off that all names describe purpose, not appearance."],
    example: "Example: product-card, product-card__media, product-card__title, product-card--compact.",
    mistake: "Do not start writing CSS before deciding the naming map.",
    question: "A naming map should happen...",
    answers: ["Before styling", "After deployment", "Only after errors"],
    correct: "Before styling",
  },
  {
    title: "Use block modifiers",
    label: "Block mod",
    description: "A block modifier changes the entire component's visual variation — it belongs on the block element itself, not on any child element. This keeps variation logic at the top level so the whole card can shift layout, colour, or scale with a single class.",
    imageTitle: "Block modifier",
    imageHint: "Screenshot should show: two product cards rendered side by side in the browser — one with a default layout and one with a 'product-card--compact' modifier visible in DevTools, annotated to highlight reduced padding and image height.",
    nav: "Block modifier",
    action: "Open BEM modifier docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Add class='product-card product-card--featured' to a card element in the HTML.", "Add class='product-card product-card--compact' to a second card element.", "Write SCSS rules for each modifier: .product-card--featured { border: 2px solid gold; } and .product-card--compact { padding: 8px; }.", "Explain to the trainer why product-card__featured would be wrong — what does placing -- on the block rather than __ on an element communicate?"],
    example: "Example: product-card--compact can reduce padding and image height.",
    mistake: "Do not use product-card__featured if featured changes the whole card.",
    question: "A modifier for the whole card should be...",
    answers: ["product-card--featured", "product-card__featured", "featured-card__product"],
    correct: "product-card--featured",
  },
  {
    title: "Use element modifiers",
    label: "Element mod",
    description: "An element modifier changes only one part of the block — for example, a sale price differs from a standard price, but both are still price elements inside the same product card. Always keep the base element class alongside the modifier class so base styles still apply.",
    imageTitle: "Element modifier",
    imageHint: "Screenshot should show: an HTML snippet in a code editor with a span element carrying both 'product-card__price' and 'product-card__price--sale', with the browser rendering the sale price in a different colour than the standard price.",
    nav: "Element modifier",
    action: "Open BEM docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Write a span with class='product-card__price' and add a standard price value inside it.", "Add the sale modifier: class='product-card__price product-card__price--sale' — confirm both classes are present.", "Write SCSS: .product-card__price--sale { color: red; text-decoration: line-through; } and check the browser output.", "Explain to the trainer what would break visually if the base product-card__price class was removed and only the modifier remained."],
    example: '<span class="product-card__price product-card__price--sale">$49</span>',
    mistake: "Do not use a modifier alone without the base element class.",
    question: "A sale price element modifier is...",
    answers: ["product-card__price--sale", "product-card--price-sale", "price__sale"],
    correct: "product-card__price--sale",
  },
  {
    title: "Handle state classes",
    label: "State",
    description: "State classes like is-active, is-loading, or is-disabled represent temporary or interactive conditions applied by JavaScript. They can work alongside BEM modifiers, but the team must agree on one consistent pattern — mixing both styles in the same component creates confusion.",
    imageTitle: "State class",
    imageHint: "Screenshot should show: a tab component in the browser with one tab highlighted as active, and the DevTools HTML panel showing either 'tab tab--active' or 'tab is-active' on the active tab — annotated with a note confirming one style was chosen and used consistently.",
    nav: "State",
    action: "Open BEM docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Look at an existing interactive component in the project — a tab, accordion, or toggle button.", "Identify whether the project uses BEM modifier style (tab--active) or state class style (is-active) for the active state.", "Add the active state using whichever pattern the project already uses — do not introduce a second pattern.", "Confirm with the trainer that the same state style is used consistently across every similar component in the codebase."],
    example: "Example: tab tab--active or tab is-active can work if the team standard is consistent.",
    mistake: "Do not mix many state naming styles in the same component.",
    question: "State naming should be...",
    answers: ["Consistent", "Random per file", "Always an ID"],
    correct: "Consistent",
  },
  {
    title: "Split new blocks",
    label: "New block",
    description: "When a UI piece can exist independently in multiple locations across the site, it deserves its own block name rather than being locked inside a parent block as an element. Splitting reusable pieces into their own blocks makes them portable without renaming or restructuring.",
    imageTitle: "Reusable block",
    imageHint: "Screenshot should show: a badge component appearing in three different contexts — inside a product card, on a collection hero, and inside a navigation menu — each using the same 'badge' block class, annotated to show reusability.",
    nav: "New block",
    action: "Open BEM docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Identify a UI piece that appears in more than one context — for example, a badge, a star rating, or a tag chip.", "Check whether it is currently named as an element of a parent block (e.g., product-card__badge).", "If the component genuinely appears independently or in multiple parent blocks, rename it to its own block: badge, rating, or tag.", "Show the trainer the old element name and the proposed standalone block name — discuss together whether it truly warrants independence."],
    example: "Example: badge can be a separate block used inside product-card, hero, or collection tiles.",
    mistake: "Do not force every nested UI piece to be an element of the parent.",
    question: "A reusable independent piece can become...",
    answers: ["A new block", "An element-of-element", "An ID"],
    correct: "A new block",
  },
  {
    title: "Review BEM mistakes",
    label: "Review",
    description: "Professional BEM review looks for four common errors: appearance-based names, element chains deeper than one level, missing base classes on modified elements, and block modifiers used where element modifiers should be. Visual correctness is not sufficient — the class names must also communicate purpose clearly.",
    imageTitle: "BEM review checklist",
    imageHint: "Screenshot should show: a code editor with a side-by-side before/after diff — the before column showing red-button, product-card__body__title, and a lone --featured modifier, and the after column showing button button--danger, product-card__title, and product-card product-card--featured.",
    nav: "Review",
    action: "Open BEM naming docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Find one appearance-based name in the project CSS (e.g., red-button, big-title, green-box) and write the corrected BEM name.", "Find one class chain deeper than one level (e.g., product-card__body__title) and flatten it to a direct element name (product-card__title).", "Find one element where the modifier class appears without its base class and add the missing base class.", "Show all three fixes to the trainer — for each one, explain the original mistake and why the corrected version is easier to maintain."],
    example: "Example: replace red-button with button button--danger.",
    mistake: "Do not approve BEM code just because it visually works.",
    question: "red-button is weaker than button--danger because...",
    answers: ["Danger describes purpose", "Red is always wrong", "Buttons cannot be blocks"],
    correct: "Danger describes purpose",
  },
];

const scssBasicSteps = [
  {
    title: "Understand SCSS syntax",
    label: "SCSS",
    description: "SCSS is Sass syntax that looks and reads like CSS, but adds variables, nesting, and other features before the build tool compiles it into plain CSS for the browser. Understanding this compile step is critical — SCSS that looks fine may produce unexpected CSS if selectors nest incorrectly.",
    imageTitle: "SCSS to CSS",
    imageHint: "Screenshot should show: a code editor split into two panels — the left panel showing an SCSS file with nesting and a variable, and the right panel showing the compiled CSS output with flat selectors — annotated to label each side.",
    nav: "SCSS",
    action: "Open Sass docs",
    url: SASS_STYLE_RULES_DOCS_URL,
    tryTasks: ["Open an SCSS source file in the project (e.g., _product-card.scss) and identify at least one variable and one nested rule.", "Find the compiled CSS file the build produces (e.g., theme.css or assets/application.css) and locate the corresponding compiled rule.", "Confirm that the SCSS uses standard braces and semicolons — not Sass indented syntax, which would require a different file extension (.sass).", "Show the trainer both the SCSS source and the compiled CSS output for the same rule — explain what the build step does between them."],
    example: "Example: style.scss is written by developers; style.css is what the browser receives.",
    mistake: "Do not paste SCSS syntax into a plain CSS file unless the build supports it.",
    question: "SCSS must be...",
    answers: ["Compiled to CSS", "Uploaded as Shopify orders", "Used only in HTML"],
    correct: "Compiled to CSS",
  },
  {
    title: "Use variables",
    label: "Variables",
    description: "Variables store repeated design values — colours, spacing, radius, transitions — in one place so that a design change updates every component at once. Variables only earn their place when the value has clear design meaning and is used in at least two locations.",
    imageTitle: "SCSS variables",
    imageHint: "Screenshot should show: a _tokens.scss or _variables.scss file open in the editor with colour variables ($color-primary, $color-text), spacing variables ($space-sm, $space-md, $space-lg), and a radius variable ($radius-card) — each on its own line with a comment explaining the design role.",
    nav: "Variables",
    action: "Open Sass docs",
    url: "https://sass-lang.com/documentation/variables/",
    tryTasks: ["Open the project tokens or variables file and find the primary brand colour variable — note its name and value.", "Create a new spacing variable $space-xl: 48px; below the existing spacing variables — confirm it follows the existing naming pattern.", "Use $color-primary and $space-md inside a component rule (e.g., .button { background: $color-primary; padding: $space-md; }) and verify the build compiles correctly.", "Explain to the trainer why creating a variable like $blue-box-random-margin: 13px; is a bad practice even though it works."],
    example: "$color-primary: #0f766e;",
    mistake: "Do not create a variable for a value used once with no design meaning.",
    question: "Variables are best for...",
    answers: ["Repeated design values", "One random value only", "HTML text"],
    correct: "Repeated design values",
  },
  {
    title: "Use &__element",
    label: "&__element",
    description: "Inside a SCSS block, the ampersand (&) represents the parent selector — so &__title inside .product-card compiles to .product-card__title. This keeps all element rules co-located with their block, making the SCSS file easier to navigate.",
    imageTitle: "Ampersand element",
    imageHint: "Screenshot should show: a SCSS block (.product-card) expanded in the editor with three nested &__element rules (&__title, &__image, &__price), alongside the compiled CSS in a right panel showing the three flat selectors (.product-card__title, .product-card__image, .product-card__price).",
    nav: "&__element",
    action: "Open Sass selector docs",
    url: SASS_SELECTOR_DOCS_URL,
    tryTasks: ["Open the product-card SCSS file and locate or create the .product-card block.", "Add three nested element rules using the ampersand: &__title { font-weight: 700; }, &__image { width: 100%; }, and &__price { color: $color-text; }.", "Run the build (gulp watch or equivalent) and check the compiled CSS to confirm the three selectors compile to .product-card__title, .product-card__image, and .product-card__price.", "Explain to the trainer what &__title inside &__body would compile to — and why that output is worse than writing &__title directly."],
    example: ".product-card { &__title { font-weight: 700; } } becomes .product-card__title.",
    mistake: "Do not nest &__title inside &__body if the output becomes confusing.",
    question: "&__title inside .product-card compiles to...",
    answers: [".product-card__title", ".product-card .__title", ".product-card--title"],
    correct: ".product-card__title",
  },
  {
    title: "Use &--modifier",
    label: "&--modifier",
    description: "Inside a SCSS block, &--featured compiles to .block--featured — a sibling class, not a descendant. This is how BEM modifier SCSS should always be written: nesting the modifier with & keeps it inside the block file while producing the correct flat selector output.",
    imageTitle: "Ampersand modifier",
    imageHint: "Screenshot should show: a SCSS block (.product-card) with two nested modifier rules (&--featured { } and &--compact { }), and the compiled CSS panel showing .product-card--featured and .product-card--compact as flat selectors — annotated to contrast this with the wrong approach of .product-card { .product-card--featured { } } which would create a descendant selector.",
    nav: "&--modifier",
    action: "Open Sass selector docs",
    url: SASS_SELECTOR_DOCS_URL,
    tryTasks: ["Inside the .product-card block, add &--featured { border: 2px solid gold; } using the ampersand.", "Add a second modifier: &--compact { padding: 8px; grid-template-rows: auto; }.", "Run the build and verify the compiled CSS shows .product-card--featured and .product-card--compact — not .product-card .product-card--featured.", "Show the trainer the difference between &--featured (correct) and .product-card--featured nested inside .product-card { } (creates a descendant selector and is wrong)."],
    example: ".product-card { &--featured { border-color: gold; } } becomes .product-card--featured.",
    mistake: "Do not write .product-card { .product-card--featured { } } because it creates a descendant selector.",
    question: "&--featured inside .product-card compiles to...",
    answers: [".product-card--featured", ".product-card .product-card--featured", ".featured__product-card"],
    correct: ".product-card--featured",
  },
  {
    title: "Use states and pseudo-classes",
    label: "States",
    description: "Use &:hover, &:focus-visible, and &[disabled] directly inside the component block to keep interactive state rules co-located with the base styles. Never remove focus styles — keyboard and screen reader users depend on them to navigate the page.",
    imageTitle: "SCSS state selectors",
    imageHint: "Screenshot should show: a .button SCSS block with three nested pseudo-class rules (&:hover, &:focus-visible, &[disabled]) alongside a browser screenshot showing the button in its hover state with a visible transform effect and in its focus state with a visible outline.",
    nav: "States",
    action: "Open Sass style rules",
    url: SASS_STYLE_RULES_DOCS_URL,
    tryTasks: ["Inside a .button block, add &:hover { transform: translateY(-2px); background: darken($color-primary, 8%); } and verify the compiled output is .button:hover.", "Add &:focus-visible { outline: 2px solid $color-focus; outline-offset: 3px; } — use the browser to tab to the button and confirm the outline appears.", "Add &[disabled] { opacity: 0.5; cursor: not-allowed; pointer-events: none; } — confirm the disabled attribute triggers the style in the browser.", "Explain to the trainer what would break for keyboard users if the &:focus-visible rule was deleted."],
    example: ".button { &:hover { transform: translateY(-1px); } } becomes .button:hover.",
    mistake: "Do not remove focus styles. Keyboard users need them.",
    question: "&:hover inside .button compiles to...",
    answers: [".button:hover", ".button :hover", ".hover--button"],
    correct: ".button:hover",
  },
  {
    title: "Keep nesting shallow",
    label: "Nesting",
    description: "SCSS nesting is powerful, but each level of nesting adds another layer to the compiled CSS selector — making it heavier and harder to override without !important. Keeping nesting to BEM element rules and pseudo-classes produces clean, predictable selectors.",
    imageTitle: "Shallow nesting",
    imageHint: "Screenshot should show: a before/after code comparison — the before side showing a deeply nested SCSS chain (.page > .grid > .product-card > .body > h3) crossed out in red, and the after side showing the flat BEM class (.product-card__title) in green — annotated with the compiled output of each.",
    nav: "Nesting",
    action: "Open Sass style rules",
    url: SASS_STYLE_RULES_DOCS_URL,
    tryTasks: ["Open a project SCSS file and find the deepest nested selector chain — count the levels of nesting.", "Write out the compiled CSS selector that chain would produce — for example, .page .grid .card .body h3 — and consider how hard it would be to override.", "Flatten the selector to a direct BEM class (e.g., .product-card__title) and update the SCSS accordingly.", "Show the trainer both the old and new selector — discuss why the flat version is easier to override when design requirements change."],
    example: "Example: use .card__title instead of .page .grid .card .body h3.",
    mistake: "Do not nest just to mirror the HTML tree.",
    question: "Deep nesting usually creates...",
    answers: ["Fragile selectors", "Cleaner HTML", "Automatic accessibility"],
    correct: "Fragile selectors",
  },
  {
    title: "Use media queries inside blocks",
    label: "Responsive",
    description: "Placing media queries inside the component block keeps all responsive rules for that component co-located in one file. Scattering responsive overrides across multiple files means a future developer must hunt through several files to understand how one component behaves at mobile sizes.",
    imageTitle: "Responsive SCSS",
    imageHint: "Screenshot should show: a product-card SCSS block with a @media (max-width: 768px) rule nested inside it — changing padding and grid layout — alongside the compiled CSS confirming the correct scoped media query output.",
    nav: "Responsive",
    action: "Open Sass style rules",
    url: SASS_STYLE_RULES_DOCS_URL,
    tryTasks: ["Inside the .product-card block, add @media (max-width: 768px) { padding: 12px; grid-template-columns: 1fr; } and save the file.", "Run the build and verify the compiled CSS shows a .product-card rule inside a @media (max-width: 768px) block.", "Resize the browser window below 768 px and confirm the responsive layout change takes effect on the product card.", "Explain to the trainer why keeping the responsive rule inside the _product-card.scss file is better than adding it to a separate mobile.scss or responsive.scss file."],
    example: ".product-card { @media (max-width: 720px) { padding: 16px; } }",
    mistake: "Do not scatter the same component's responsive rules across many unrelated files.",
    question: "Component media queries should stay...",
    answers: ["Close to the component", "Only in HTML", "Inside random utilities"],
    correct: "Close to the component",
  },
];

const scssProSteps = [
  {
    title: "Use a clear SCSS architecture",
    label: "Structure",
    description: "Professional projects organize styles into predictable layers — tokens, base, components, utilities, and pages — so any developer can find or add a style without searching the whole codebase. A clear architecture means new components always have an obvious home and old styles are easy to locate.",
    imageTitle: "SCSS folders",
    imageHint: "Screenshot should show: the project's styles folder open in VS Code Explorer, showing subfolders named tokens, base, components, utilities, and pages, with one component partial (_product-card.scss) visible inside the components folder.",
    nav: "Structure",
    action: "Open Sass docs",
    url: "https://sass-lang.com/documentation/",
    tryTasks: ["Open the project's styles or scss folder in VS Code Explorer and list the top-level subfolders you see.", "Identify which subfolder contains component partials (e.g., components/_product-card.scss) and which contains global token variables.", "Locate one style that appears to be in the wrong layer — for example, a component rule inside a page file or a token variable inside a component partial.", "Explain to the trainer where that misplaced style should live according to the architecture, and why keeping it in the wrong place creates problems as the project grows."],
    example: "Example: _product-card.scss belongs in components, not mixed into random page CSS.",
    mistake: "Do not put every style into one giant file once the project grows.",
    question: "Component styles should usually live in...",
    answers: ["Component partials", "Random HTML files", "Git history only"],
    correct: "Component partials",
  },
  {
    title: "Use @use when supported",
    label: "@use",
    description: "Modern Sass recommends @use for loading token and utility modules — it scopes variables to the file and avoids the global namespace pollution of the old @import. Before making changes, check which import system the project already uses and follow that pattern consistently.",
    imageTitle: "Sass @use",
    imageHint: "Screenshot should show: the top of a component SCSS partial file with a @use '../tokens' as *; statement, followed by a rule that uses a variable from that tokens file (e.g., color: $color-primary) — annotated to show the link between the @use import and the variable reference.",
    nav: "@use",
    action: "Open Sass @use docs",
    url: "https://sass-lang.com/documentation/at-rules/use/",
    tryTasks: ["Open one of the project's component SCSS partials and find the first line — identify whether it uses @use, @import, or neither.", "Check two other component files to confirm the project uses one consistent import pattern.", "Add a @use '../tokens' as *; statement at the top of a new component partial if the project uses @use — or follow the @import pattern if that is the established convention.", "Show the trainer the import line you added and explain whether you chose @use or @import — and why you followed the project pattern rather than switching systems."],
    example: '@use "../tokens" as *;',
    mistake: "Do not rewrite the whole Sass architecture just to use a new syntax.",
    question: "When adding SCSS, follow...",
    answers: ["The project pattern", "A random tutorial", "Only inline styles"],
    correct: "The project pattern",
  },
  {
    title: "Create mixins only when useful",
    label: "Mixins",
    description: "Mixins remove real duplication when the same CSS pattern appears across multiple components — focus rings, media query breakpoints, and visually-hidden utilities are classic examples. Creating a mixin for a two-line one-off rule adds indirection without benefit and makes the code harder for the next developer to read.",
    imageTitle: "SCSS mixin",
    imageHint: "Screenshot should show: a _mixins.scss file with a @mixin focus-ring { } definition, then a component file using @include focus-ring; on a button — alongside the compiled CSS showing the output of the mixin with the actual properties expanded.",
    nav: "Mixins",
    action: "Open Sass mixin docs",
    url: "https://sass-lang.com/documentation/at-rules/mixin/",
    tryTasks: ["Open the project's mixins file (e.g., _mixins.scss) and identify the existing mixins — note what pattern each one removes.", "Find two component files where the same focus-ring or visually-hidden pattern is duplicated without using the mixin.", "Replace the duplicated rules with @include focus-ring; in both component files and verify the compiled CSS output is identical to before.", "Explain to the trainer why creating a mixin like @mixin red-text { color: red; } used only once is worse than just writing color: red; directly."],
    example: "@mixin focus-ring { outline: 2px solid $color-focus; }",
    mistake: "Do not make a mixin for every two-line style rule.",
    question: "Mixins are best for...",
    answers: ["Repeated patterns", "Every property", "HTML content"],
    correct: "Repeated patterns",
  },
  {
    title: "Use tokens for design values",
    label: "Tokens",
    description: "Design tokens store brand colour, spacing scale, border radius, typography scale, and shadow values in one place so that a single token change updates every component that uses it. Hard-coding a colour like #0f766e in five component files means a brand refresh requires five individual edits — and risks one being missed.",
    imageTitle: "Design tokens",
    imageHint: "Screenshot should show: the project's _tokens.scss file open in the editor with clearly labelled colour variables ($color-primary, $color-text, $color-bg), spacing variables ($space-sm, $space-md, $space-lg, $space-xl), and a radius variable ($radius-card, $radius-button) — each group separated by a comment.",
    nav: "Tokens",
    action: "Open Sass variables docs",
    url: "https://sass-lang.com/documentation/variables/",
    tryTasks: ["Open the project's tokens or variables file and find the full list of colour tokens — note the naming convention used ($color-primary, $color-accent, etc.).", "Search the project SCSS files for any hard-coded hex colour values (e.g., #0f766e, #333) that are not using a token variable.", "Replace one hard-coded hex value in a component file with the correct token variable and verify the compiled CSS output is unchanged.", "Explain to the trainer what happens across all components if $color-primary is updated to a new brand colour in the tokens file — why is this better than updating each component file individually?"],
    example: "$radius-card: 12px; $space-card: 24px;",
    mistake: "Do not invent near-duplicate values without checking the token list.",
    question: "Tokens help keep design...",
    answers: ["Consistent", "Random", "Hidden from CSS"],
    correct: "Consistent",
  },
  {
    title: "Control specificity",
    label: "Specificity",
    description: "Professional SCSS deliberately keeps selector specificity low by using flat BEM class selectors and avoiding IDs, tag chains, and deep descendants. Low specificity makes every component override predictable and eliminates the arms race of fighting CSS with !important.",
    imageTitle: "Specificity review",
    imageHint: "Screenshot should show: a browser DevTools Styles panel with two competing rules — a high-specificity selector (.main .grid .product-card h3) shown as crossed out (overridden), and a low-specificity BEM class (.product-card__title) shown as the active rule — annotated to label the specificity score of each.",
    nav: "Specificity",
    action: "Open BEM docs",
    url: BEM_NAMING_DOCS_URL,
    tryTasks: ["Open the browser DevTools Styles panel for a component element and look for any crossed-out rules — identify the competing selectors and their specificity scores.", "Find one SCSS selector in the project that uses a tag name or multiple class chains (e.g., .section .card-grid .card h3) and rewrite it as a single BEM class selector.", "Search the project SCSS for any !important declarations — identify what specificity problem each one was used to solve.", "Explain to the trainer how using a single BEM class (.product-card__title) would have prevented each !important from being necessary in the first place."],
    example: "Example: .product-card__title beats .main .grid .product-card h3 for maintainability.",
    mistake: "Do not fix specificity problems by adding more IDs or !important.",
    question: "Low specificity makes CSS easier to...",
    answers: ["Maintain and override", "Break randomly", "Hide from browsers"],
    correct: "Maintain and override",
  },
  {
    title: "Review compiled CSS",
    label: "Output",
    description: "When reviewing SCSS, always verify what CSS it produces — clean-looking SCSS can still compile into unexpectedly heavy or redundant selectors if nesting is used carelessly. Checking compiled output before merging a pull request prevents performance and maintainability issues from entering the codebase.",
    imageTitle: "Compiled CSS output",
    imageHint: "Screenshot should show: a split view with an SCSS file on the left containing a .card block with deeply nested rules, and the compiled CSS on the right showing the resulting long selectors — annotated to highlight which nested SCSS lines produced which compiled selectors.",
    nav: "Output",
    action: "Open Sass style rules",
    url: SASS_STYLE_RULES_DOCS_URL,
    tryTasks: ["Pick one SCSS component block in the project and mentally trace each nested rule — write out the expected compiled selector for each level.", "Run the build (gulp watch) and open the compiled CSS file — compare the actual output to your prediction and note any unexpected selectors.", "Find one selector in the compiled CSS that is longer or more specific than it needs to be — trace back to the SCSS nesting that created it.", "Show the trainer the SCSS and its compiled output — explain one change to the nesting that would produce a cleaner, flatter selector without changing the visual result."],
    example: "Example: .card { & &__title { } } creates heavier output than needed.",
    mistake: "Do not approve SCSS without considering compiled CSS.",
    question: "SCSS review should include...",
    answers: ["Compiled CSS output", "Only file name", "Only image assets"],
    correct: "Compiled CSS output",
  },
  {
    title: "Build a review checklist",
    label: "Review",
    description: "Using a consistent BEM and SCSS review checklist before approving a pull request ensures quality does not depend on the reviewer's memory or mood. A checklist also teaches trainees exactly what standard is expected, making feedback more objective and the review faster.",
    imageTitle: "SCSS review checklist",
    imageHint: "Screenshot should show: a written or digital code review checklist with six items checked off — naming follows BEM, nesting is shallow, all values use tokens, responsive rules are co-located, focus states are present, and compiled output is verified — annotated to indicate each item was checked before approval.",
    nav: "Checklist",
    action: "Open Sass docs",
    url: "https://sass-lang.com/documentation/",
    tryTasks: ["Walk through a component SCSS file using this checklist: (1) all class names follow BEM, (2) nesting is shallow with no chains deeper than two levels, (3) no hard-coded colour or spacing values.", "Continue the checklist: (4) responsive rules are inside the component block, (5) hover and focus-visible states are defined, (6) compiled CSS output is reviewed and free of bloated selectors.", "Identify one item on the checklist that the current file fails — note the specific line number and explain the fix needed.", "Show the trainer the completed checklist for the component — discuss which item is most commonly missed on real projects and why."],
    example: "Example: approve only when naming is clear, selectors are shallow, and focus states remain visible.",
    mistake: "Do not review only by looking at the browser screenshot.",
    question: "A pro CSS review checks...",
    answers: ["Naming, nesting, tokens, output", "Only color preference", "Only file size"],
    correct: "Naming, nesting, tokens, output",
  },
  {
    title: "Know when plain CSS is better",
    label: "Judgment",
    description: "The mark of a professional SCSS developer is knowing when NOT to use SCSS features. Overusing variables, mixins, functions, loops, and deep nesting produces code that is harder to read, debug, and hand off — using the simplest solution that clearly communicates intent is always the right call.",
    imageTitle: "Plain CSS judgment",
    imageHint: "Screenshot should show: two side-by-side code examples — the left showing an over-engineered SCSS block with nested mixins, loops, and generated selectors, and the right showing a simple direct class with three plain properties — annotated to label which is 'harder to maintain' and which is 'easier to maintain'.",
    nav: "Judgment",
    action: "Open Sass docs",
    url: "https://sass-lang.com/documentation/",
    tryTasks: ["Find one SCSS rule in the project that uses a mixin, function, or loop where a direct class would be simpler and equally readable.", "Rewrite that rule as plain CSS or simple SCSS without the abstraction layer — confirm the compiled output and browser result are identical.", "Compare the two versions side by side and count the lines — identify whether the abstraction genuinely saves code or just moves it to a harder-to-find location.", "Explain to the trainer the difference between clever SCSS (abstract, hard to trace) and professional SCSS (direct, readable, easy to change) — give a concrete example from the project."],
    example: "Example: a direct class can be better than a mixin, function, loop, and generated selector.",
    mistake: "Do not confuse clever SCSS with professional SCSS.",
    question: "Professional SCSS should be...",
    answers: ["Readable and useful", "Clever at all costs", "Impossible to compile"],
    correct: "Readable and useful",
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
  "Build Tools: Gulp Watch and Theme Preview": {
    key: "buildTools",
    kicker: "Build tools",
    title: "Run Gulp and Shopify preview together.",
    intro: "Use two terminals so local assets compile while Shopify CLI previews the theme.",
    completionTitle: "Build workflow practice is complete.",
    completionText:
      "The trainee can install packages, run gulp watch, run Shopify theme dev, and keep both processes working during edits.",
    steps: buildToolsSteps,
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
  "BEM Naming Basics": {
    key: "bemBasics",
    kicker: "Coding basics",
    title: "Name CSS like a system.",
    intro: "Learn block, element, and modifier naming before writing component styles.",
    completionTitle: "BEM basics are complete.",
    completionText:
      "The trainee can identify blocks, elements, modifiers, and clean up vague class names.",
    steps: bemBasicSteps,
  },
  "BEM Medium: Components and States": {
    key: "bemMedium",
    kicker: "BEM components",
    title: "Build component names that scale.",
    intro: "Practice real component naming, modifiers, states, reusable blocks, and BEM review rules.",
    completionTitle: "BEM component practice is complete.",
    completionText:
      "The trainee can map component classes, avoid element chains, and use modifiers consistently.",
    steps: bemMediumSteps,
  },
  "SCSS Basics: Nesting, Variables, and Ampersand": {
    key: "scssBasics",
    kicker: "SCSS basics",
    title: "Use SCSS without making messy CSS.",
    intro: "Learn variables, shallow nesting, ampersand selectors, states, and responsive component rules.",
    completionTitle: "SCSS basics are complete.",
    completionText:
      "The trainee understands how SCSS compiles, especially &__element, &--modifier, and &:hover selectors.",
    steps: scssBasicSteps,
  },
  "Pro SCSS: Architecture and Review Rules": {
    key: "scssPro",
    kicker: "Pro SCSS",
    title: "Write SCSS for real project maintenance.",
    intro: "Use architecture, tokens, mixins, low specificity, and review discipline for production-quality styles.",
    completionTitle: "Pro SCSS practice is complete.",
    completionText:
      "The trainee can organize SCSS, use abstractions carefully, and review compiled CSS like production code.",
    steps: scssProSteps,
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
const revealPasswordButton = document.querySelector("#revealPasswordButton");
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
    tour.key.startsWith("bem") ||
    tour.key.startsWith("scss") ||
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
    code: "code-2",
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
    simpleTourPassword.classList.remove("password-masked");
    revealPasswordButton.hidden = true;
    simpleTourAccessNote.textContent =
      "Developer modules use official references and terminal checks. Store commands still require the correct Shopify staff account.";
  } else {
    simpleTourAccessLabel.textContent = "Tutorial store";
    simpleTourStoreLink.href = TRAINING_STORE_URL;
    simpleTourStoreLink.textContent = TRAINING_STORE_URL.replace("https://", "");
    simpleTourPasswordLabel.textContent = "Password";
    simpleTourPassword.textContent = TRAINING_STORE_PASSWORD;
    simpleTourPassword.classList.add("password-masked");
    revealPasswordButton.hidden = false;
    revealPasswordButton.innerHTML = '<i data-lucide="eye"></i> Show';
    lucide.createIcons({ nodes: [revealPasswordButton] });
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

revealPasswordButton.addEventListener("click", () => {
  const isNowMasked = simpleTourPassword.classList.toggle("password-masked");
  revealPasswordButton.innerHTML = isNowMasked
    ? '<i data-lucide="eye"></i> Show'
    : '<i data-lucide="eye-off"></i> Hide';
  lucide.createIcons({ nodes: [revealPasswordButton] });
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

  const pathTrack = document.querySelector("#learningPathTrack");
  const pathPrev = document.querySelector("#pathCarouselPrev");
  const pathNext = document.querySelector("#pathCarouselNext");

  function updateCarouselButtons() {
    pathPrev.disabled = pathTrack.scrollLeft <= 2;
    pathNext.disabled =
      pathTrack.scrollLeft + pathTrack.clientWidth >= pathTrack.scrollWidth - 2;
  }

  pathPrev.addEventListener("click", () => {
    const item = pathTrack.querySelector("div");
    pathTrack.scrollBy({ left: -(item.offsetWidth + 1) * 2, behavior: "smooth" });
  });

  pathNext.addEventListener("click", () => {
    const item = pathTrack.querySelector("div");
    pathTrack.scrollBy({ left: (item.offsetWidth + 1) * 2, behavior: "smooth" });
  });

  pathTrack.addEventListener("scroll", updateCarouselButtons, { passive: true });
  updateCarouselButtons();
});
