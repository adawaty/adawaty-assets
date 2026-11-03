(function(){var d=document,h=d.documentElement,rm=matchMedia("(prefers-reduced-motion: reduce)").matches;if(!rm&&"IntersectionObserver"in window)h.classList.add("adw-js");
function init(){var b=d.body;if(!b||d.getElementById("adw-pg"))return;var pg=d.createElement("div");pg.id="adw-pg";b.appendChild(pg);
var cta=d.querySelector(".vzy-header .btn-1")||d.querySelector('a[href="/contact"]'),wa=d.querySelector('a[href*="wa.me"]'),mb=d.createElement("div");mb.id="adw-mb";
var p=d.createElement("a");p.className="p";p.href="https://wa.me/13393991355";p.target="_blank";p.rel="noopener";p.textContent="Start on WhatsApp";mb.appendChild(p);
if(!/^\/services\/?$/i.test(location.pathname)){var s=d.createElement("a");s.className="s";s.href="/services";s.textContent="Explore services";mb.appendChild(s)}b.appendChild(mb);
var tk=0;function upd(){tk=0;var y=scrollY,m=h.scrollHeight-innerHeight;pg.style.transform="scaleX("+(m>0?y/m:0)+")";h.classList.toggle("adw-sc",y>24);mb.classList.toggle("on",y>innerHeight*.6)}
addEventListener("scroll",function(){if(!tk){tk=1;requestAnimationFrame(upd)}},{passive:true});upd();
if(h.classList.contains("adw-js")){var els=d.querySelectorAll(".card-header,.card,.banner-text>section,.hero-box .inner-content,.list-box .inner-content,.footer-card");var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("adw-in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.08});
els.forEach(function(el){if(el.closest(".bg-video"))return;var r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)return;var sib=el.parentNode?[].indexOf.call(el.parentNode.children,el):0;el.style.setProperty("--d",Math.min(sib,4)*.07+"s");el.classList.add("adw-r");io.observe(el)});setTimeout(function(){els.forEach(function(el){el.classList.add("adw-in")})},6000)}
}
if(d.readyState!="loading")setTimeout(init,50);else d.addEventListener("DOMContentLoaded",function(){setTimeout(init,50)});addEventListener("load",function(){setTimeout(init,300)})})();
(function(){function fx(){var d=document;if(d.documentElement.classList.contains("adw-lk"))return;d.documentElement.classList.add("adw-lk");
var M={"Digital Transformation":"hero-13","Custom Software":"hero-10","AI & Workflow":"hero-12","Websites, Hosting":"hero-11"};
d.querySelectorAll('a[href="#"]').forEach(function(a){var c=a.closest(".card"),b=a.querySelector("button[onclick]");
if(a.parentNode.classList.contains("announcement-bar-block")){a.href="/services";return}
if(b){var m=/open\('([^']+)',\s*'([^']*)'\)/.exec(b.getAttribute("onclick"));if(m){a.href=m[1];if(m[2]=="_blank"){a.target="_blank";a.rel="noopener"}b.removeAttribute("onclick");if(c)c.style.pointerEvents="auto";return}}
if(a.querySelector("[class*=ph-map]")){var p=a.querySelector("p");if(p){a.href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(p.textContent.trim());a.target="_blank";a.rel="noopener";return}}
var h=a.querySelector("h3"),t=h?h.textContent.trim():"";for(var k in M)if(t.indexOf(k)==0){a.href="/services#"+M[k];return}
a.removeAttribute("href");if(c)c.classList.add("adw-off")})}
if(document.readyState!="loading")fx();else document.addEventListener("DOMContentLoaded",fx)})();
(function(){function fm(){var d=document,H=d.documentElement;if(H.classList.contains("adw-fm"))return;H.classList.add("adw-fm");
d.querySelectorAll(".card p.pre-line,.hero-box p.pre-line").forEach(function(p){var L=p.textContent.split("\n").map(function(s){return s.trim()}).filter(Boolean);if(L.filter(function(s){return /^[\u2713\u2022]/.test(s)}).length<2)return;var f=d.createDocumentFragment(),seen=0;
L.forEach(function(s){var m=/^([\u2713\u2022])\s*(.*)$/.exec(s),e=d.createElement("span");if(m){seen=1;e.className="adw-li";var i=d.createElement("i");i.className="adw-ck";i.textContent="\u2713";e.appendChild(i);e.appendChild(d.createTextNode(m[2]))}else{e.className=seen?"adw-pr":"adw-tl";e.textContent=s}f.appendChild(e)});p.textContent="";p.style.whiteSpace="normal";p.appendChild(f)});
d.querySelectorAll(".card-label,.section-label").forEach(function(l){if(!/^testimonials$/i.test(l.textContent.trim()))return;var b=l.closest(".card-box");if(!b)return;b.classList.add("adw-tst");b.querySelectorAll(".card .description p").forEach(function(p){var t=p.textContent,i=t.lastIndexOf("\u2014");if(i<1)return;var r=d.createElement("span");r.className="adw-role";r.textContent=t.slice(i).trim();p.textContent=t.slice(0,i).trim();var c=p.closest(".card"),h=c&&c.querySelector("h3");(h?h.parentNode:p.parentNode).appendChild(r)})});
d.querySelectorAll(".card h3").forEach(function(h){var m=/^(.*?)\s*\u00b7\s*(Most popular)$/.exec(h.textContent.trim());if(!m)return;h.textContent=m[1];var b=d.createElement("span");b.className="adw-bd";b.textContent=m[2];h.appendChild(b);var c=h.closest(".card");if(c)c.classList.add("adw-pop")});
d.querySelectorAll("h2").forEach(function(h){var m=/^(\d)\s+(\S.*)$/.exec(h.textContent.trim());if(!m||h.children.length)return;h.textContent="";var n=d.createElement("span");n.className="adw-n";n.textContent=m[1];h.appendChild(n);h.appendChild(d.createTextNode(m[2]))});
d.querySelectorAll(".text-box .text-header+div>div").forEach(function(c){var ps=[].slice.call(c.children),q=function(e){return e.tagName=="P"&&e.children.length==1&&e.firstElementChild.tagName=="STRONG"&&e.textContent.trim()==e.firstElementChild.textContent.trim()};if(ps.filter(q).length<2)return;var o=d.createElement("div"),cur=null;o.className="adw-faq";
ps.forEach(function(e){if(q(e)){cur=d.createElement("details");var s=d.createElement("summary");s.textContent=e.textContent.trim();cur.appendChild(s);o.appendChild(cur)}else(cur||o).appendChild(e)});c.textContent="";c.appendChild(o);var f1=o.querySelector("details");if(f1)f1.open=true})}
if(document.readyState!="loading")fm();else document.addEventListener("DOMContentLoaded",fm)})();
/* Adawaty v2.1 interactive layer: finder, ecosystem, stats, marquee, tilt */
(function(){try{
var W=window,d=document,H=d.documentElement;if(W.__adw21)return;W.__adw21=1;
var RM=W.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
var WA="https://wa.me/13393991355?text=";
function el(t,c,x){var e=d.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function path(){return(location.pathname.replace(/\/+$/,"")||"/").toLowerCase()}
function root(){var f=d.querySelector(".v_2-footer");return f&&f.parentElement}
function top(e,r){while(e&&e.parentElement&&e.parentElement!==r)e=e.parentElement;return e&&e.parentElement===r?e:null}
function byHead(sel,re){var hs=d.querySelectorAll(sel);for(var i=0;i<hs.length;i++)if(re.test(hs[i].textContent.trim()))return hs[i];return null}
function waLink(name){return WA+encodeURIComponent("Hi Adawaty, I'm interested in the "+name+". My organization: ")}

/* ---------- reveal (same calm fade/rise as v2, only for our own nodes) ---------- */
var io=null;function reveal(n){if(RM||!("IntersectionObserver"in W)||!H.classList.contains("adw-js"))return;if(n.__rv)return;n.__rv=1;var r=n.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)return;
if(!io)io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("adw-in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.08});
n.classList.add("adw-r");io.observe(n);setTimeout(function(){n.classList.add("adw-in")},6000)}

/* ---------- packages (exact prices/timelines from the site) ---------- */
var P={
ad:["AI Admissions Desk","$990 + $149/mo (optional care)","Live in 10 days",10],
al:["Academy Launch","$1,290 + $129/mo (optional care)","Selling in 14 days",14],
po:["Paperless Operations Sprint","$1,890 + $190/mo (optional care)","Results in 3 weeks",21],
st:["Store Live in 14 Days","$1,490 + $99/mo care","Live in 14 days",14],
ve:["AI Video Engine","$290 setup + $490/mo","First videos in 7 days",7],
la:["Leads on Autopilot","$290 setup + $390/mo (3-month minimum)","First leads in 10 days",10],
lw:["Launch-Ready Website","$1,490 + $79/mo (optional care)","Live in 10 working days",14],
fe:["Found Everywhere","$290 audit (credited) + $590/mo, 3-month minimum","First wins in 30 days",30],
tb:["Team Bio Cards","$290 for up to 10 people + $29/mo (optional care)","Live in 5 days",5]};
var Y={
ad1:"It's the fastest way to take admin off your team: an AI assistant answers applicants on web, WhatsApp and phone, 24/7, and logs every inquiry as a lead.",
ad2:"Every applicant gets an answer in seconds, 24/7, in Arabic and English, and every inquiry is logged as a lead in your Campus pipeline, so none slip away.",
al:"Your branded academy on your own domain with payments switched on, so your courses start selling in 14 days.",
po:"It automates 3–5 of your repetitive workflows end to end, with smart forms, e-signatures and approvals replacing paper.",
st1:"Store, catalogue and checkout set up, with bookings, online payments and order emails connected, so orders stop being manual work.",
st2:"A store built to sell: checkout and online payments set up, with abandoned-cart emails on to win back lost sales.",
st3:"If your website has to sell, it should be a real store: catalogue, checkout and online payments set up, with abandoned-cart and order emails on.",
ve:"Your first branded videos arrive in 7 days, sized for Reels, TikTok, LinkedIn and YouTube, so you're in front of buyers this week.",
la:"Qualified prospects every week: an ideal-customer list built and verified, buying signals tracked across social, and a lead sheet ready to call.",
lw:"Up to 8 bilingual pages, designed and hosted for you, with online booking and a live chat assistant built in: a site that books, ranks and converts.",
fe:"A technical and content audit with a clear fix list, then 8–12 search-optimized pages or articles a month, so you get found on Google and in AI answers.",
tb:"A branded bio page and QR code for every team member, with WhatsApp buttons and click analytics, so people can find and reach you right away."};
/* map[Q1][Q2] = [this week, in 2 weeks, in about a month] as "pkg:why" */
var MAP={
e:{admin:["ad:ad1","ad:ad1","po:po"],leads:["ad:ad2","al:al","al:al"],web:["lw:lw","lw:lw","lw:lw"],found:["fe:fe","fe:fe","fe:fe"]},
s:{admin:["st:st1","st:st1","po:po"],leads:["ve:ve","st:st2","la:la"],web:["st:st3","st:st3","st:st3"],found:["fe:fe","fe:fe","fe:fe"]},
o:{admin:["po:po","po:po","po:po"],leads:["ve:ve","la:la","la:la"],web:["lw:lw","lw:lw","lw:lw"],found:["tb:tb","fe:fe","fe:fe"]}};
var Q=[{k:"run",q:"What do you run?",a:[["e","A school, university, or training center"],["s","A store or brand"],["o","Any other business"]]},
{k:"pain",q:"What hurts most right now?",a:[["admin","Too much manual admin"],["leads","Not enough leads or sales"],["web","Our website doesn't sell"],["found","Nobody can find us"]]},
{k:"when",q:"How fast do you need it live?",a:[["0","This week"],["1","In 2 weeks"],["2","In about a month"]]}];
W.__adwFinder={P:P,MAP:MAP,Q:Q};
function pick(a){var r=MAP[a[0]][a[1]][+a[2]].split(":");return{p:P[r[0]],why:Y[r[1]],k:r[0]}}

var fid=0;
function finder(compact){var id="adw-f"+(++fid),S=el("section","adw-x adw-fd"+(compact?" adw-fd-c":""));S.id=compact?"adw-finder-s":"adw-finder";S.setAttribute("aria-labelledby",id+"t");
var w=el("div","adw-w");S.appendChild(w);w.appendChild(el("div","adw-eb","Package finder"));var h=el("h2","adw-h","Find your package in 30 seconds");h.id=id+"t";w.appendChild(h);
w.appendChild(el("p","adw-sub","Three quick questions, one honest recommendation. No form, no email needed."));
var box=el("div","adw-fd-box");w.appendChild(box);var A=[];
function prog(n){var g=el("div","adw-fd-pg");var t=el("span","adw-fd-st",n<3?"Question "+(n+1)+" of 3":"Your recommendation");g.appendChild(t);var dots=el("span","adw-fd-dots");dots.setAttribute("aria-hidden","true");for(var i=0;i<3;i++){var o=el("i",i<n?"on":i==n?"cur":"");dots.appendChild(o)}g.appendChild(dots);return g}
function focusH(x){try{x.focus({preventScroll:true})}catch(e){}}
function step(n,kb){box.textContent="";box.appendChild(prog(n));
if(n<3){var q=Q[n],qh=el("h3","adw-fd-q",q.q);qh.id=id+"q"+n;qh.tabIndex=-1;box.appendChild(qh);var g=el("div","adw-fd-opts");g.setAttribute("role","group");g.setAttribute("aria-labelledby",qh.id);
q.a.forEach(function(o){var b=el("button","adw-fd-o",o[1]);b.type="button";if(A[n]==o[0])b.setAttribute("aria-pressed","true");b.addEventListener("click",function(ev){A[n]=o[0];A.length=n+1;step(n+1,ev.detail===0)});g.appendChild(b)});box.appendChild(g);
if(n>0){var bk=el("button","adw-fd-bk","← Back");bk.type="button";bk.addEventListener("click",function(ev){step(n-1,ev.detail===0)});box.appendChild(bk)}
if(kb)focusH(qh);if(A.length||n)anim(box);return}
var R=pick(A),p=R.p,days=[7,14,31][+A[2]],c=el("div","adw-fd-res");c.setAttribute("aria-live","polite");
c.appendChild(el("div","adw-fd-k","Your best fit"));var rh=el("h3","adw-fd-n",p[0]);rh.tabIndex=-1;c.appendChild(rh);
var m=el("div","adw-fd-m");m.appendChild(el("span","adw-chip adw-chip-p",p[1]));m.appendChild(el("span","adw-chip",p[2]));c.appendChild(m);
c.appendChild(el("p","adw-fd-why",R.why));
if(p[3]>days)c.appendChild(el("p","adw-fd-note","Honest timing: "+p[2].charAt(0).toLowerCase()+p[2].slice(1)+(A[2]=="0"?", not this week":", a little later than you hoped")+". It's still the package that fits this problem best."));
var g2=el("p","adw-fd-g");g2.appendChild(el("strong","","On time, or it's on us."));g2.appendChild(d.createTextNode(" Miss your go-live date and your first 2 months of care are free."));c.appendChild(g2);
var bt=el("div","adw-fd-cta"),a1=el("a","adw-b adw-b1","Talk to us on WhatsApp");a1.href=waLink(p[0]);a1.target="_blank";a1.rel="noopener";
var a2=el("a","adw-b adw-b2","See all 9 packages");a2.href=path()=="/services"?"#cards-2":"/services";bt.appendChild(a1);bt.appendChild(a2);c.appendChild(bt);
var rs=el("button","adw-fd-rs","Start again");rs.type="button";rs.addEventListener("click",function(ev){A=[];step(0,ev.detail===0)});c.appendChild(rs);
box.appendChild(c);if(kb)focusH(rh);anim(box)}
function anim(b){if(RM)return;b.classList.remove("adw-fd-in");void b.offsetWidth;b.classList.add("adw-fd-in")}
step(0);return S}

/* ---------- stats + counters ---------- */
function stats(){var S=el("section","adw-x adw-st");S.id="adw-stats";S.setAttribute("aria-label","Adawaty in numbers");var w=el("div","adw-w"),u=el("ul","adw-st-l");
[["2022","founded",2000],["9","done-for-you packages",0],["4","products",0],["2","offices"],["2","languages (EN + AR)"]].forEach(function(s){var li=el("li"),n=el("span","adw-st-n",s[0]);if(s[2]!=null){n.setAttribute("data-from",s[2]);n.setAttribute("data-to",s[0])}li.appendChild(n);li.appendChild(el("span","adw-st-k",s[1]));u.appendChild(li)});
w.appendChild(u);S.appendChild(w);
if(!RM&&"IntersectionObserver"in W){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;o.disconnect();count(S)})},{threshold:.4});o.observe(S)}return S}
function count(S){var ns=S.querySelectorAll("[data-to]"),t0=null,D=1800;ns.forEach(function(n){n.textContent=n.getAttribute("data-from");n.style.minWidth=n.getAttribute("data-to").length+"ch"});
function f(t){if(t0==null)t0=t;var k=Math.min(1,(t-t0)/D),e=1-Math.pow(1-k,3);ns.forEach(function(n){var a=+n.getAttribute("data-from"),b=+n.getAttribute("data-to");n.textContent=String(Math.round(a+(b-a)*e))});if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}

/* ---------- client marquee ---------- */
var CL=["Tawplast","Bondeega","Meteory","Sparx Engineering","Coursatee","Met71","EIBS"];
function marquee(){var S=el("section","adw-x adw-mq");S.id="adw-clients";S.setAttribute("aria-label","Selected clients");var w=el("div","adw-mq-w");w.appendChild(el("span","adw-mq-k","Selected clients"));
var v=el("div","adw-mq-v"),t=el("div","adw-mq-t");for(var r=0;r<2;r++){var u=el("ul","adw-mq-u");if(r)u.setAttribute("aria-hidden","true");CL.forEach(function(c){u.appendChild(el("li","",c))});t.appendChild(u)}v.appendChild(t);w.appendChild(v);S.appendChild(w);return S}

/* ---------- ecosystem diagram ---------- */
var EC=[["campus","Campus","Adawaty Campus","A student information system that keeps every student record — admissions, attendance, grades, schedules — in one source of truth.","Schools, institutes, and universities."],
["learn","Learn","Adawaty Learn","An e-learning platform for training centers and academies — courses, live classes, and assessments that work on any screen.","Training centers, academies, and corporate training."],
["sites","Sites","Adawaty Sites","Design, build, hosting, and growth in one place — a website that loads fast, ranks, and turns visitors into enquiries, managed end to end.","Any organization that needs a website that performs."],
["bio","Bio","Adawaty Bio","One link for everything you do — your website, social profiles, store, and contact details on a single page your audience can open from anywhere.","Founders, teams, and professionals."]];
var eid=0;
function eco(){var id="adw-e"+(++eid),S=el("section","adw-x adw-eco");S.id="adw-ecosystem";S.setAttribute("aria-labelledby",id+"t");var w=el("div","adw-w");S.appendChild(w);
w.appendChild(el("div","adw-eb","How it fits together"));var h=el("h2","adw-h","One ecosystem, not four tools");h.id=id+"t";w.appendChild(h);
w.appendChild(el("p","adw-sub","Select a product to see what it does."));
var g=el("div","adw-eco-g"),map=el("div","adw-eco-map"),pn=el("div","adw-eco-pn adw-tilt");pn.id=id+"p";pn.setAttribute("role","tabpanel");
var svg='<svg class="adw-eco-ln" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">';[[50,14],[86,50],[50,86],[14,50]].forEach(function(p,i){svg+='<line data-i="'+i+'" x1="50" y1="50" x2="'+p[0]+'" y2="'+p[1]+'"/>'});map.innerHTML=svg+'</svg><div class="adw-eco-c" aria-hidden="true"><span>Adawaty</span></div>';
var tl=el("div","adw-eco-tl");tl.setAttribute("role","tablist");tl.setAttribute("aria-label","Adawaty products");map.appendChild(tl);var bs=[];
EC.forEach(function(e,i){var b=el("button","adw-eco-nd adw-eco-"+e[0]);b.type="button";b.id=id+"b"+i;b.setAttribute("role","tab");b.setAttribute("aria-controls",pn.id);b.appendChild(el("span","adw-eco-dot"));b.appendChild(el("span","",e[1]));
b.addEventListener("click",function(){sel(i,false)});b.addEventListener("keydown",function(ev){var k=ev.key,j=-1;if(k=="ArrowRight"||k=="ArrowDown")j=(i+1)%4;else if(k=="ArrowLeft"||k=="ArrowUp")j=(i+3)%4;else if(k=="Home")j=0;else if(k=="End")j=3;if(j>-1){ev.preventDefault();sel(j,1)}});tl.appendChild(b);bs.push(b)});
function body(e,x){x.appendChild(el("p","adw-eco-d",e[3]));var bf=el("p","adw-eco-bf");bf.appendChild(el("strong","","Best for: "));bf.appendChild(d.createTextNode(e[4]));x.appendChild(bf)}
function sel(i,f){bs.forEach(function(b,j){var on=i==j;b.setAttribute("aria-selected",on?"true":"false");b.tabIndex=on?0:-1;b.classList.toggle("on",on)});map.querySelectorAll("line").forEach(function(l){l.classList.toggle("on",+l.getAttribute("data-i")==i)});
pn.setAttribute("aria-labelledby",bs[i].id);pn.textContent="";pn.appendChild(el("div","adw-eco-k","0"+(i+1)+" / 04"));pn.appendChild(el("h3","adw-eco-n",EC[i][2]));body(EC[i],pn);if(!RM&&f!==0){pn.classList.remove("adw-fd-in");void pn.offsetWidth;pn.classList.add("adw-fd-in")}if(f)bs[i].focus()}
g.appendChild(map);g.appendChild(pn);w.appendChild(g);sel(0,0);
var ac=el("div","adw-eco-acc");EC.forEach(function(e,i){var dt=el("details","adw-eco-it"),sm=el("summary","",e[2]);dt.appendChild(sm);var bx=el("div","adw-eco-ib");body(e,bx);dt.appendChild(bx);if(!i)dt.open=true;ac.appendChild(dt)});w.appendChild(ac);
w.appendChild(el("p","adw-eco-sh","Campus, Learn, Sites, and Bio share your brand, your domain, and your data. Campus syncs with Learn, so a student record and a course enrollment are never two different truths. One partner configures, hosts, and supports all of it."));
var ct=el("div","adw-eco-cta"),a=el("a","adw-b adw-b1","Request a demo");a.href="/contact";ct.appendChild(a);w.appendChild(ct);return S}

/* ---------- mounting (idempotent, survives re-renders) ---------- */
var N={};
function get(k,f){if(!N[k])N[k]=f();return N[k]}
function put(n,ref,after){if(!ref||!ref.parentNode)return false;var t=after?ref.nextSibling:ref;if(n.parentNode===ref.parentNode&&(after?ref.nextSibling===n:ref.previousSibling===n))return true;ref.parentNode.insertBefore(n,t);reveal(n);return true}
var C=[
{k:"proof",pg:"/",mk:function(){var p=d.getElementById("adw-proof");if(p)return p;p=el("p","adw-proof","US-registered LLC since 2022 \u00b7 Offices in Wyoming, USA & Bratislava, Slovakia \u00b7 Serving the US, Europe & MENA");p.id="adw-proof";return p},
 at:function(r){var h=r.querySelector(":scope>.account-for-header")||(d.querySelector("h1")&&top(d.querySelector("h1"),r));return[h&&h.querySelector(".button-holder"),1]}},
{k:"top",pg:"/",mk:function(){var g=el("div","adw-top");g.id="adw-top";g.appendChild(marquee());g.appendChild(stats());g.appendChild(finder(0));return g},
 at:function(r){var h=r.querySelector(":scope>.account-for-header")||(d.querySelector("h1")&&top(d.querySelector("h1"),r));return[h,1]}},
{k:"ecoh",pg:"/",mk:eco,at:function(r){var h=byHead("h2",/^our products$/i)||(d.querySelector(".card h3")&&byHead(".card h3",/^adawaty campus$/i));return[h&&top(h,r),1]}},
{k:"ecop",pg:"/products",mk:eco,at:function(r){var h=byHead("h2",/^adawaty bio$/i);if(h)return[top(h,r),1];var f=r.querySelector(":scope>.v_2-footer"),p=f&&f.previousElementSibling;while(p&&!p.classList.contains("box"))p=p.previousElementSibling;return[p,0]}},
{k:"fs",pg:"/services",mk:function(){return finder(1)},at:function(r){var x=byHead("h2",/^for schools/i);if(x)return[top(x,r),1];return[r.querySelector(":scope>.account-for-header"),1]}}];
function mount(){try{var r=root(),p=path();C.forEach(function(c){var n=N[c.k];if(c.pg!=p){if(n&&n.parentNode)n.parentNode.removeChild(n);return}if(!r)return;if(n&&n.isConnected)return;var a=c.at(r);if(a[0])put(get(c.k,c.mk),a[0],a[1])})}catch(e){W.console&&console.warn("adw21",e)}}

/* ---------- 3D tilt on cards (pointer devices only, delegated so re-rendered cards keep it) ---------- */
if(!RM&&W.matchMedia&&matchMedia("(hover: hover) and (pointer: fine)").matches){var cur=null,raf=0,lx=0,ly=0;
function reset(c){c.style.setProperty("--ry","0deg");c.style.setProperty("--rx","0deg")}
d.addEventListener("pointermove",function(e){var c=e.target&&e.target.closest?e.target.closest(".card,.adw-tilt"):null;
if(c&&(c.style.pointerEvents=="none"||c.classList.contains("adw-off")||c.closest(".adw-tst")))c=null;if(cur&&cur!==c)reset(cur);cur=c;if(!c)return;lx=e.clientX;ly=e.clientY;
if(!raf)raf=requestAnimationFrame(function(){raf=0;if(!cur)return;var r=cur.getBoundingClientRect(),x=(lx-r.left)/r.width-.5,y=(ly-r.top)/r.height-.5;cur.style.setProperty("--ry",(x*6).toFixed(2)+"deg");cur.style.setProperty("--rx",(-y*6).toFixed(2)+"deg")})},{passive:true});
d.addEventListener("pointerout",function(e){if(!e.relatedTarget&&cur){reset(cur);cur=null}},{passive:true})}

var tm=0;function sched(){if(!tm)tm=setTimeout(function(){tm=0;mount()},120)}
function start(){mount();try{new MutationObserver(sched).observe(d.body,{childList:true,subtree:true})}catch(e){}}
if(d.readyState!="loading"){mount();setTimeout(start,60)}else{var eo=new MutationObserver(function(){if(d.body)mount()});eo.observe(d.documentElement,{childList:true,subtree:true});d.addEventListener("DOMContentLoaded",function(){eo.disconnect();setTimeout(start,60)})}
addEventListener("load",function(){setTimeout(mount,400);setTimeout(mount,2000)});addEventListener("popstate",sched);
}catch(e){window.console&&console.warn("adw21",e)}})();
/* Adawaty v2.2: how it starts, prove it, infographics, product mockups, who fits */
(function(){try{
var W=window,d=document,H=d.documentElement;if(W.__adw22)return;W.__adw22=1;
var RM=W.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches,WA="https://wa.me/13393991355",IMG="https://cdn.jsdelivr.net/gh/adawaty/adawaty-assets@main/img/";
var ALT={
"prove-it-then-scale":["Infographic: \"Baseline, pilot, scale.\" Three numbered steps. 1, Baseline: we record how your process works today, so improvement is measured, not guessed. 2, Pilot: your package goes live in 5 to 30 days and you use it with your real team before anything expands. 3, Scale: we expand only what beats the baseline. Guarantee: on time, or it's on us, miss go-live and your first 2 months of care are free.",3200,2526],
"ecosystem":["Diagram: \"One ecosystem.\" Adawaty at the centre, connected to four products. Campus, a student information system, best for schools, institutes and universities. Learn, an e-learning platform, best for training centers, academies and corporate training. Sites, websites designed, built, hosted and grown, best for any organization that needs a website that performs. Bio, one link for everything you do, best for founders, teams and professionals. Campus syncs with Learn, and all four share your brand, your domain and your data.",3200,3092],
"campus-mockup":["Adawaty Campus student information system dashboard on a laptop, dark interface with cyan highlights, showing admissions pipeline, attendance, grades and today's schedule with sample data.",3200,2000],
"learn-mockup":["Adawaty Learn course player on a laptop with lesson video and course outline, and a phone showing a lesson quiz and progress, using a sample academy.",3200,2000],
"sites-mockup":["A sample clinic website built with Adawaty Sites, shown on a desktop monitor and a mobile phone, with online booking and WhatsApp buttons.",3200,2000],
"bio-mockup":["Adawaty Bio link-in-bio page on a phone for a sample profile, with WhatsApp, website, store, contact and email links, beside a QR code card and a click-analytics card.",3200,2000]};
function el(t,c,x){var e=d.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function path(){return(location.pathname.replace(/\/+$/,"")||"/").toLowerCase()}
function root(){var f=d.querySelector(".v_2-footer");return f&&f.parentElement}
function top(e,r){while(e&&e.parentElement&&e.parentElement!==r)e=e.parentElement;return e&&e.parentElement===r?e:null}
function byHead(sel,re,sc){var hs=(sc||d).querySelectorAll(sel);for(var i=0;i<hs.length;i++)if(re.test(hs[i].textContent.replace(/\s+/g," ").trim()))return hs[i];return null}
function img(n,cls){var a=ALT[n],i=el("img",cls||"");i.src=IMG+n+".webp";i.alt=a[0];i.width=a[1];i.height=a[2];i.loading="lazy";i.decoding="async";return i}
var io=null;function reveal(n){if(RM||!("IntersectionObserver"in W)||!H.classList.contains("adw-js")||n.__rv)return;n.__rv=1;var r=n.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)return;
if(!io)io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("adw-in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:.05});n.classList.add("adw-r");io.observe(n);setTimeout(function(){n.classList.add("adw-in")},6000)}
function head(w,eb,h,sub){if(eb)w.appendChild(el("div","adw-eb",eb));var x=el("h2","adw-h",h);w.appendChild(x);if(sub)w.appendChild(el("p","adw-sub",sub));return x}
function wa(a,t){a.href=WA;a.target="_blank";a.rel="noopener";if(t)a.textContent=t;return a}

/* 1. How it starts (/services) */
function starts(){var S=el("section","adw-x adw-hs");S.id="adw-starts";var w=el("div","adw-w");S.appendChild(w);var h=head(w,"Getting started","How it starts");h.id="adw-hs-t";S.setAttribute("aria-labelledby",h.id);
var o=el("ol","adw-hs-l");["Talk to us on WhatsApp — we map your biggest time and cost leaks.","Get a written scope, milestones, pricing, and a go-live date.","Go live in 5 to 30 days, with support after launch."].forEach(function(t,i){var li=el("li"),a=wa(el("a","adw-hs-i"));a.appendChild(el("span","adw-hs-n","0"+(i+1)));a.appendChild(el("span","adw-hs-x",t));a.appendChild(el("span","adw-hs-ar","\u2192"));a.lastChild.setAttribute("aria-hidden","true");li.appendChild(a);o.appendChild(li)});w.appendChild(o);
var c=el("div","adw-cta");c.appendChild(wa(el("a","adw-b adw-b1"),"Start on WhatsApp"));w.appendChild(c);return S}

/* 2. Prove it, then scale + infographic (/approach) */
function prove(){var g=el("div","adw-grp");g.id="adw-prove";var S=el("section","adw-x adw-pv"),w=el("div","adw-w");S.appendChild(w);var h=head(w,"Our method","Prove it, then scale");h.id="adw-pv-t";S.setAttribute("aria-labelledby",h.id);
var o=el("ol","adw-pv-l");["Baseline first — we record how your process works today, so improvement is measured, not guessed.","Pilot fast — your package goes live in 5 to 30 days, and you use it with your real team before anything expands.","Scale what proves itself — we expand only what beats the baseline: faster replies, fewer manual hours, more enquiries."].forEach(function(t,i){var li=el("li","adw-pv-i"),k=t.indexOf(" — ");li.appendChild(el("span","adw-pv-n","0"+(i+1)));var p=el("p","adw-pv-x");p.appendChild(el("strong","",t.slice(0,k)));p.appendChild(d.createTextNode(t.slice(k)));li.appendChild(p);o.appendChild(li)});w.appendChild(o);
var gl=el("p","adw-pv-g");gl.appendChild(el("strong","","On time, or it's on us"));gl.appendChild(d.createTextNode(" — miss go-live and your first 2 months of care are free."));w.appendChild(gl);g.appendChild(S);g.appendChild(info("adw-ig-prove","Baseline, pilot, scale","prove-it-then-scale"));return g}

/* infographic section */
function info(id,h,n){var S=el("section","adw-x adw-ig");S.id=id;var w=el("div","adw-w"),x=head(w,"",h);x.id=id+"-t";S.setAttribute("aria-labelledby",x.id);var f=el("figure","adw-ig-f");f.appendChild(img(n));w.appendChild(f);S.appendChild(w);return S}

/* 3. product mockup swaps (HOME_ALL=1 would swap all four home product cards; brief asks only the lead Campus card) */
var HOME_ALL=0;
function swapImg(box,n){if(!box)return;var a=ALT[n],v=box.querySelector("video"),i=box.querySelector("img.adw-mk-i")||box.querySelector("img"),u=IMG+n+".webp";box.classList.add("adw-mk");var hi=box.classList.contains("hero-image");if(hi&&box.style.getPropertyPriority("height")!="important"){box.style.setProperty("height","auto","important");box.style.setProperty("aspect-ratio","16 / 10")}
if(v){v.style.display="none";try{v.pause()}catch(e){}if(!i||i.className.indexOf("adw-mk-i")<0){i=img(n,"adw-mk-i");box.appendChild(i)}}
else if(i&&i.getAttribute("src")!==u){i.removeAttribute("srcset");i.setAttribute("src",u);i.alt=a[0];i.width=a[1];i.height=a[2];i.loading="lazy";i.classList.add("adw-mk-i")}
if(hi&&i&&i.style.getPropertyPriority("height")!="important")i.style.setProperty("height","100%","important")}
function swaps(r,p){if(p=="/products"){[["campus","campus-mockup"],["learn","learn-mockup"],["sites","sites-mockup"],["bio","bio-mockup"]].forEach(function(x){var h=byHead("h2",new RegExp("^adawaty "+x[0]+"$","i"));if(!h)return;var b=top(h,r);b&&swapImg(b.querySelector(".hero-image"),x[1])})}
if(p=="/"){var h=byHead("h2",/^our products$/i);if(!h)return;var b=top(h,r);if(!b)return;["campus","learn","sites","bio"].forEach(function(k,ix){if(ix&&!HOME_ALL)return;var c=byHead(".card h3",new RegExp("^adawaty "+k+"$","i"),b);c=c&&c.closest(".card");swapImg(c?c.querySelector(".card-image"):(ix?null:b.querySelector(".card-image")),k+"-mockup")})}}

/* 4. Who fits Adawaty (home) — restyle the editor's single text section */
var X={good:/^a good fit if you:?$/i,bad:/^not a fit if you:?$/i};
function whofits(r){var h=byHead("h1,h2,h3",/^who fits adawaty\??$/i);if(!h)return;var b=top(h,r);if(!b||b.classList.contains("adw-wf-done"))return;
var all=[].slice.call(b.querySelectorAll("h3,h4,h5,p,strong,b,li,div")),g=null,n=null;
all.forEach(function(e){var t=e.textContent.replace(/\s+/g," ").trim();if(!g&&X.good.test(t))g=e;else if(!n&&X.bad.test(t))n=e});if(!g||!n)return;
/* collect text lines after each sub-heading inside the body container */
var body=g.closest("p,li,h3,h4,h5,div");var cont=body.parentElement;while(cont&&cont!==b&&!cont.contains(n))cont=cont.parentElement;if(!cont)return;
var lines=[],MK=/^[\u2713\u2714\u2715\u2716\u2717\u00d7\u2022\u00b7*-]\s*/;(function walk(e,li){[].forEach.call(e.childNodes,function(c){if(c.nodeType==3){c.textContent.split("\n").forEach(function(s){s=s.replace(/\s+/g," ").trim();if(s)lines.push({t:s,li:li})})}else if(c.nodeType==1&&!/^(SCRIPT|STYLE)$/.test(c.tagName)){var bl=/^(P|LI|H3|H4|H5|DIV|BR|UL|OL)$/.test(c.tagName);if(bl)lines.push(0);walk(c,li||c.tagName=="LI");if(bl)lines.push(0)}})})(cont,false);
var L=[],buf=null;lines.forEach(function(s){if(!s){if(buf)L.push(buf);buf=null}else if(buf)buf.t+=" "+s.t;else buf={t:s.t,li:s.li}});if(buf)L.push(buf);
L.forEach(function(o){if(MK.test(o.t)){o.li=true;o.t=o.t.replace(MK,"")}o.t=o.t.trim()});L=L.filter(function(o){return o.t});
var gi=-1,ni=-1;L.forEach(function(o,i){if(gi<0&&X.good.test(o.t))gi=i;else if(ni<0&&X.bad.test(o.t))ni=i});if(gi<0||ni<0||ni<gi)return;
function T(a){return a.map(function(o){return o.t})}
var good=T(L.slice(gi+1,ni)),rest=L.slice(ni+1),ci=-1,anyLi=rest.some(function(o){return o.li});
rest.forEach(function(o,i){if(ci<0&&(anyLi?!o.li&&i>0:/^if you(’|')re not sure/i.test(o.t)))ci=i});
var bad=T(ci<0?rest:rest.slice(0,ci)),cl=ci<0?null:T(rest.slice(ci)).join(" ");
if(!good.length||!bad.length)return;
var wrap=el("div","adw-wf");wrap.id="adw-wf";L.slice(0,gi).forEach(function(o){wrap.appendChild(el("p","adw-wf-in",o.t))});function col(cls,title,items,mk){var c=el("div","adw-wf-c "+cls);c.appendChild(el("h3","adw-wf-h",title));var u=el("ul","adw-wf-l");items.forEach(function(s){var li=el("li");var ic=el("span","adw-wf-ic",mk);ic.setAttribute("aria-hidden","true");li.appendChild(ic);li.appendChild(el("span","",s));u.appendChild(li)});c.appendChild(u);return c}
var gr=el("div","adw-wf-g");gr.appendChild(col("adw-wf-yes",L[gi].t.replace(/:$/,""),good,"\u2713"));gr.appendChild(col("adw-wf-no",L[ni].t.replace(/:$/,""),bad,"\u2715"));wrap.appendChild(gr);
if(cl){var cp=el("p","adw-wf-cl",cl);wrap.appendChild(cp)}
cont.classList.add("adw-wf-src");cont.setAttribute("aria-hidden","true");cont.parentNode.insertBefore(wrap,cont.nextSibling);b.classList.add("adw-wf-done","adw-wf-box")}


/* v2.2b: services timeline move, WhatsApp CTAs */
function inChrome(a){return !!a.closest(".vzy-header,.side-navigation-wrapper,.side-navigation,.announcement,header,nav,#adw-mb,.adw-x,.adw-top")}
function ctas(){var as=d.querySelectorAll("a");for(var i=0;i<as.length;i++){var a=as[i];if(a.__adwc||inChrome(a))continue;var t=a.textContent.replace(/\s+/g," ").trim();
var rq=/^request a quote$/i.test(t),kit=/^get the kit$/i.test(t);if(!rq&&!kit)continue;var tg=a.querySelector("button span,button")||a;
if(tg.tagName=="BUTTON"&&tg.children.length==0||tg!==a)tg.textContent="Start on WhatsApp";else a.textContent="Start on WhatsApp";
if(rq&&!/wa\.me\//.test(a.getAttribute("href")||"")){a.setAttribute("href",WA);a.setAttribute("target","_blank");a.setAttribute("rel","noopener")}a.__adwc=1}}
function timeline(r,p){if(p!="/services")return;var im=d.querySelector('img[alt^="Timeline of Adawaty"]');if(!im)return;var s=top(im,r);if(!s)return;
var box=im.closest(".hero-image");s.classList.add("adw-tl");if(box&&box.style.getPropertyPriority("height")!="important"){box.style.setProperty("height","auto","important");box.classList.add("adw-tl-b")}
if(im.style.getPropertyPriority("height")!="important"){im.style.setProperty("height","auto","important");im.style.setProperty("object-fit","contain","important");if(!im.getAttribute("width")){im.setAttribute("width","3200");im.setAttribute("height","3552")}}
var ref=d.getElementById("adw-finder-s");if(!ref||ref.parentElement!==r)ref=r.querySelector(":scope>.account-for-header");if(ref&&ref.nextElementSibling!==s)r.insertBefore(s,ref.nextSibling)}
/* mounting */
var N={};function get(k,f){if(!N[k])N[k]=f();return N[k]}
function put(n,ref,after){if(!ref||!ref.parentNode)return;if(after?ref.nextSibling===n:ref.previousSibling===n)return;ref.parentNode.insertBefore(n,after?ref.nextSibling:ref);reveal(n)}
var C=[
{k:"hs",pg:"/services",mk:starts,at:function(r){var h=byHead("h2",/^campus growth kit$/i);if(h)return[top(h,r),1];var f=byHead("h2",/^questions ceos ask$/i);return[f&&top(f,r),0]}},
{k:"pv",pg:"/approach",mk:prove,at:function(r){if(byHead("h2",/^prove it, then scale$/i)&&!d.getElementById("adw-prove"))return[null];var f=r.querySelector(":scope>.v_2-footer"),p=f&&f.previousElementSibling;while(p&&!(p.classList.contains("box")&&/let.s build what.s next/i.test(p.textContent)))p=p.previousElementSibling;if(p)return[p,0];var a=r.querySelector(":scope>.account-for-header");a=a&&a.nextElementSibling;while(a&&!a.classList.contains("box"))a=a.nextElementSibling;return[a,1]}},
{k:"igpv",pg:"/approach",mk:function(){return info("adw-ig-prove2","Baseline, pilot, scale","prove-it-then-scale")},at:function(r){if(d.getElementById("adw-prove"))return[null];var h=byHead("h2",/^prove it, then scale$/i);return[h&&top(h,r),1]}},
{k:"igeco",pg:"/products",mk:function(){return info("adw-ig-eco","One ecosystem","ecosystem")},at:function(r){var e=d.getElementById("adw-ecosystem");return[e&&e.parentElement===r?e:null,1]}}];
function mount(){try{var r=root(),p=path();C.forEach(function(c){var n=N[c.k];if(c.pg!=p){if(n&&n.parentNode)n.parentNode.removeChild(n);return}if(!r||(n&&n.isConnected&&(c.k!="igeco"||n.previousElementSibling&&n.previousElementSibling.id=="adw-ecosystem")))return;var a=c.at(r);if(a[0])put(get(c.k,c.mk),a[0],a[1])});
if(r){swaps(r,p);timeline(r,p);if(p=="/")whofits(r)}ctas();}catch(e){W.console&&console.warn("adw22",e)}}
var tm=0;function sched(){if(!tm)tm=setTimeout(function(){tm=0;mount()},150)}
function start(){mount();try{new MutationObserver(sched).observe(d.body,{childList:true,subtree:true})}catch(e){}}
if(d.readyState!="loading"){mount();setTimeout(start,90)}else{var eo=new MutationObserver(function(){if(d.body)mount()});eo.observe(d.documentElement,{childList:true,subtree:true});d.addEventListener("DOMContentLoaded",function(){eo.disconnect();setTimeout(start,90)})}
addEventListener("load",function(){setTimeout(mount,500);setTimeout(mount,2200)});addEventListener("popstate",sched);
}catch(e){window.console&&console.warn("adw22",e)}})();
/* v2.2.2 */
