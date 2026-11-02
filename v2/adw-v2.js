(function(){var d=document,h=d.documentElement,rm=matchMedia("(prefers-reduced-motion: reduce)").matches;if(!rm&&"IntersectionObserver"in window)h.classList.add("adw-js");
function init(){var b=d.body;if(!b||d.getElementById("adw-pg"))return;var pg=d.createElement("div");pg.id="adw-pg";b.appendChild(pg);
var cta=d.querySelector(".vzy-header .btn-1")||d.querySelector('a[href="/contact"]'),wa=d.querySelector('a[href*="wa.me"]'),mb=d.createElement("div");mb.id="adw-mb";
var p=d.createElement("a");p.className="p";p.href=cta?cta.getAttribute("href"):"/contact";p.textContent=cta&&cta.textContent.trim()?cta.textContent.trim():"Contact";mb.appendChild(p);
if(wa){var s=d.createElement("a");s.className="s";s.href=wa.href;s.target="_blank";s.rel="noopener";s.textContent="WhatsApp";mb.appendChild(s)}b.appendChild(mb);
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
{k:"proof",pg:"/",mk:function(){var p=el("p","adw-proof","US-registered LLC since 2022 \u00b7 Offices in Wyoming, USA & Bratislava, Slovakia \u00b7 Serving the US, Europe & MENA");p.id="adw-proof";return p},
 at:function(r){var h=r.querySelector(":scope>.account-for-header")||(d.querySelector("h1")&&top(d.querySelector("h1"),r));return[h&&h.querySelector(".button-holder"),1]}},
{k:"top",pg:"/",mk:function(){var g=el("div","adw-top");g.id="adw-top";g.appendChild(marquee());g.appendChild(stats());g.appendChild(finder(0));return g},
 at:function(r){var h=r.querySelector(":scope>.account-for-header")||(d.querySelector("h1")&&top(d.querySelector("h1"),r));return[h,1]}},
{k:"ecoh",pg:"/",mk:eco,at:function(r){var h=byHead("h2",/^our products$/i)||(d.querySelector(".card h3")&&byHead(".card h3",/^adawaty campus$/i));return[h&&top(h,r),1]}},
{k:"ecop",pg:"/products",mk:eco,at:function(r){var h=byHead("h2",/^adawaty bio$/i);if(h)return[top(h,r),1];var f=r.querySelector(":scope>.v_2-footer"),p=f&&f.previousElementSibling;while(p&&!p.classList.contains("box"))p=p.previousElementSibling;return[p,0]}},
{k:"fs",pg:"/services",mk:function(){return finder(1)},at:function(r){var h=r.querySelector(":scope>.account-for-header");if(h)return[h,1];var x=byHead("h2",/^for schools/i);return[x&&top(x,r),0]}}];
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
if(d.readyState!="loading")setTimeout(start,60);else d.addEventListener("DOMContentLoaded",function(){setTimeout(start,60)});
addEventListener("load",function(){setTimeout(mount,400);setTimeout(mount,2000)});addEventListener("popstate",sched);
}catch(e){window.console&&console.warn("adw21",e)}})();
