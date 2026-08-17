import {useState} from "react";
import {BarChart3,Bell,BookOpen,Boxes,ChevronDown,CircleDollarSign,CircleHelp,FileText,LayoutDashboard,LifeBuoy,Menu,Package,PanelLeft,Plus,Search,Settings,ShoppingCart,Sparkles,Users,Wallet,ArrowUpRight,ArrowDownRight,Check,Clock3,ReceiptText,IndianRupee,Warehouse,FileBarChart2} from "lucide-react";

type Page="Overview"|"Sales"|"Purchases"|"Inventory"|"Customers"|"Vendors"|"Accounting"|"Reports"|"Subscription"|"FAQ"|"Documentation"|"Support";
const mainNav:[Page,any,string][]=[
 ["Overview",LayoutDashboard,""],
 ["Sales",ShoppingCart,""],
 ["Purchases",ReceiptText,""],
 ["Inventory",Boxes,""],
 ["Customers",Users,""],
 ["Vendors",Users,""],
 ["Accounting",Wallet,""],
 ["Reports",FileBarChart2,""],
];
const helpNav:[Page,any,string][]=[
 ["Subscription",Sparkles,"SOON"],
 ["FAQ",CircleHelp,""],
 ["Documentation",BookOpen,""],
 ["Support",LifeBuoy,""],
];

export default function App(){
 const [page,setPage]=useState<Page>("Overview"); const [collapsed,setCollapsed]=useState(false);
 return <div className="shell">
  <aside className={"sidebar "+(collapsed?"collapsed":"")}>
   <div className="brand"><div className="logo">A</div>{!collapsed&&<div><b>ArcBooks</b><small>Developed by TeamArc</small></div>}</div>
   <button className="collapse" onClick={()=>setCollapsed(!collapsed)}>{collapsed?<Menu size={16}/>:<PanelLeft size={16}/>}</button>
   <div className="nav-title">{!collapsed&&"BUSINESS"}</div>
   <nav>{mainNav.map(([name,Icon])=><Nav key={name} name={name} Icon={Icon} active={page===name} collapsed={collapsed} onClick={()=>setPage(name)}/>)}</nav>
   <div className="nav-title help">{!collapsed&&"HELP & ACCOUNT"}</div>
   <nav>{helpNav.map(([name,Icon,badge])=><Nav key={name} name={name} Icon={Icon} active={page===name} collapsed={collapsed} badge={badge} onClick={()=>setPage(name)}/>)}</nav>
   <div className="sideBottom"><button className="nav"><Settings size={17}/>{!collapsed&&"Settings"}</button>{!collapsed&&<div className="support-mini"><span>Support</span><b>Mon–Sat · 11–7</b></div>}<div className="team">{!collapsed&&<>ArcBooks <b>• TeamArc</b></>}</div></div>
  </aside>
  <main className={collapsed?"main wide":"main"}>
   <header><div><small>ArcBooks / {page}</small><h1>{page}</h1></div><div className="headerRight"><button className="search"><Search size={15}/> Search <kbd>⌘K</kbd></button><button className="bell"><Bell size={17}/><i/></button><button className="company">Agarwal Hosiery <ChevronDown size={14}/></button></div></header>
   {page==="Overview"&&<Dashboard setPage={setPage}/>}
   {page==="Subscription"&&<Subscription/>}{page==="FAQ"&&<FAQ/>}{page==="Documentation"&&<Docs/>}{page==="Support"&&<Support/>}
   {!["Overview","Subscription","FAQ","Documentation","Support"].includes(page)&&<Module page={page}/>}
  </main>
 </div>
}

function Nav({name,Icon,active,collapsed,badge,onClick}:{name:Page,Icon:any,active:boolean,collapsed:boolean,badge?:string,onClick:()=>void}){return <button title={name} onClick={onClick} className={"nav "+(active?"selected":"")}><Icon size={17}/>{!collapsed&&<><span>{name}</span>{badge&&<em>{badge}</em>}</>}</button>}

function Dashboard({setPage}:{setPage:(p:Page)=>void}){
 const stats=[["Sales this month","₹0","0%","up"],["Purchases","₹0","No change","flat"],["Receivables","₹0","0 invoices","down"],["Payables","₹0","0 bills","down"]];
 return <section className="content">
  <div className="welcome"><div><p className="overline">MONDAY · 17 AUGUST 2026</p><h2>Good morning</h2><p className="muted">Your business overview at a glance.</p></div><button className="primary" onClick={()=>setPage("Sales")}><Plus size={16}/> New Sale</button></div>
  <div className="stats">{stats.map(([t,v,c,type])=><div className="stat" key={t}><span>{t}</span><b>{v}</b><small className={type}>{type==="up"?<ArrowUpRight size={13}/>:<ArrowDownRight size={13}/>} {c}</small></div>)}</div>
  <div className="grid">
   <div className="card chartCard"><div className="cardHead"><div><b>Sales performance</b><small>Last 12 months</small></div><button>This year <ChevronDown size={13}/></button></div><div className="chart">{[20,32,28,46,40,58,50,68,56,73,61,82].map((h,i)=><div className="barCol" key={i}><div className="bar" style={{height:h+"%"}}/><small>{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</small></div>)}</div></div>
   <div className="card"><div className="cardHead"><div><b>Quick actions</b><small>Frequently used</small></div></div><div className="actions"><Action icon={<ShoppingCart/>} text="New sale" onClick={()=>setPage("Sales")}/><Action icon={<ReceiptText/>} text="New purchase" onClick={()=>setPage("Purchases")}/><Action icon={<Users/>} text="Customer" onClick={()=>setPage("Customers")}/><Action icon={<Package/>} text="Item" onClick={()=>setPage("Inventory")}/></div></div>
  </div>
  <div className="card activity"><div className="cardHead"><div><b>Recent activity</b><small>Latest business transactions</small></div><button>View all</button></div><div className="empty"><div><CircleDollarSign size={20}/></div><b>No transactions yet</b><span>Your sales and purchases will appear here.</span><button className="primary small" onClick={()=>setPage("Sales")}><Plus size={14}/> Create first sale</button></div></div>
 </section>
}
function Action({icon,text,onClick}:{icon:any,text:string,onClick:()=>void}){return <button className="action" onClick={onClick}><span>{icon}</span><b>{text}</b><small>→</small></button>}

function Subscription(){return <section className="content page"><div className="comingPage"><div className="heroIcon"><Sparkles size={23}/></div><p className="overline">ARCBOOKS SUBSCRIPTION</p><h2>Subscription plans are coming soon.</h2><p>We're keeping ArcBooks simple while we build plans that fit retail and wholesale businesses.</p><div className="soon"><Clock3 size={14}/> COMING SOON</div></div><div className="trust"><T text="Simple plans"/><T text="Business-focused"/><T text="No unnecessary complexity"/><T text="Secure cloud-ready"/></div></section>}
function T({text}:{text:string}){return <div><Check size={14}/>{text}</div>}

function FAQ(){const q=[["Is ArcBooks GST-based?","ArcBooks is non-GST-first. The default workflow avoids unnecessary GST fields and complexity."],["Can I use it for a wholesale clothing business?","Yes. Wholesale workflows are planned around supply rate, selling rate, MRP, units and party ledgers."],["Does ArcBooks manage stock?","Yes. Inventory covers items, units, SKU/barcode, stock levels and godowns."],["When will subscriptions launch?","The subscription page is currently Coming Soon. Plans will be published before subscriptions are enabled."],["How do I contact support?","Call 8429956234 or email raghav84299@gmail.com, Monday to Saturday, 11 AM to 7 PM."]];return <section className="content page"><Intro kicker="HELP CENTER" title="Frequently asked questions" text="Quick answers about ArcBooks."/><div className="faq">{q.map(([a,b])=><details key={a}><summary>{a}<ChevronDown size={15}/></summary><p>{b}</p></details>)}</div></section>}
function Docs(){const d=[["Getting Started","Set up your business and understand the ArcBooks workspace."],["Sales & Billing","Retail and wholesale invoices, discounts and print workflow."],["Inventory","Items, stock, units, SKU, barcode and godowns."],["Accounting","Vouchers, ledgers, balances and financial statements."],["Reports","Sales, purchase, stock, receivable and payable analysis."],["Security & Backup","Backups, access control and production best practices."]];return <section className="content page"><Intro kicker="DOCUMENTATION" title="ArcBooks documentation" text="Clear guides for every part of your business workflow."/><div className="docs">{d.map(([a,b])=><div className="doc" key={a}><span><BookOpen size={17}/></span><b>{a}</b><p>{b}</p><button>Read guide →</button></div>)}</div></section>}
function Support(){return <section className="content page"><Intro kicker="SUPPORT" title="Support from TeamArc" text="We're available to help with ArcBooks."/><div className="support"><div><span><LifeBuoy size={18}/></span><small>PHONE SUPPORT</small><h3>8429956234</h3><p>Monday to Saturday<br/>11:00 AM – 7:00 PM</p><a href="tel:8429956234">Call support →</a></div><div><span><FileText size={18}/></span><small>EMAIL SUPPORT</small><h3>raghav84299@gmail.com</h3><p>Send your query with your business name and issue details.</p><a href="mailto:raghav84299@gmail.com">Email support →</a></div></div></section>}
function Intro({kicker,title,text}:{kicker:string,title:string,text:string}){return <div className="intro"><p className="overline">{kicker}</p><h2>{title}</h2><p>{text}</p></div>}
function Module({page}:{page:Page}){return <section className="content"><div className="module"><div><Boxes size={22}/></div><h2>{page}</h2><p>The module shell is ready for its production workflow.</p><button className="primary"><Plus size={15}/> Create new</button></div></section>}
