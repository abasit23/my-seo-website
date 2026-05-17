import { 
  SquarePlay, DollarSign, Flag, Globe, LayoutDashboard, 
  Search, Key, LayoutTemplate, Link2, Award, Cpu, MapPin, 
  TrendingUp, Share2, Activity, ArrowRight 
} from "lucide-react";

const servicesData = [
  { id: 1, category: "Advertising", icon: SquarePlay, title: "TikTok Ads Campaigns", desc: "Dominate the FYP with data-driven viral ad creatives and precise audience targeting." },
  { id: 2, category: "Growth", icon: DollarSign, title: "TikTok Monetization", desc: "Turn views into revenue. We optimize your account to unlock maximum monetization features." },
  { id: 3, category: "Infrastructure", icon: Flag, title: "TikTok USA Account Setup", desc: "Access the lucrative US market securely with fully verified US-based TikTok accounts." },
  { id: 4, category: "Infrastructure", icon: Globe, title: "TikTok UK Account Setup", desc: "Expand into the UK with compliant, monetizable creator accounts tailored for the region." },
  { id: 5, category: "Advertising", icon: LayoutDashboard, title: "Meta Ads Management", desc: "High-converting Facebook & Instagram funnels designed to scale your ROAS efficiently." },
  { id: 6, category: "Search", icon: Search, title: "SEO Services", desc: "Comprehensive search engine optimization to secure long-term organic dominance." },
  { id: 7, category: "Search", icon: Key, title: "Keyword Research", desc: "Uncover high-intent, low-competition keywords your competitors are completely missing." },
  { id: 8, category: "Search", icon: LayoutTemplate, title: "On-Page SEO", desc: "Technical structural updates to your pages to ensure Google perfectly understands your content." },
  { id: 9, category: "Search", icon: Link2, title: "Off-Page SEO", desc: "Strategic brand mentions and authority building across the wider internet ecosystem." },
  { id: 10, category: "Search", icon: Award, title: "Quality Do-Follow Backlinks", desc: "White-hat link acquisition from high-DR websites to skyrocket your domain authority." },
  { id: 11, category: "Search", icon: Cpu, title: "Technical SEO", desc: "Core web vitals optimization, schema markup, and crawlability fixes for peak performance." },
  { id: 12, category: "Search", icon: MapPin, title: "Local SEO", desc: "Dominate the Google Map Pack and capture high-converting traffic in your local radius." },
  { id: 13, category: "Strategy", icon: TrendingUp, title: "Digital Marketing", desc: "Full-stack omnichannel strategies that align brand narrative with aggressive performance goals." },
  { id: 14, category: "Social", icon: Share2, title: "Social Media Marketing", desc: "Organic community building and engagement strategies across all major platforms." },
  { id: 15, category: "Audit", icon: Activity, title: "Website SEO Audit", desc: "Deep-dive technical analysis exposing the exact bottlenecks holding back your organic traffic." },
  { id: 16, category: "Search", icon: Search, title: "Google Ranking Services", desc: "Dedicated sprint campaigns designed to push priority pages to Page 1 for target terms." },
];

export default function ServicesPage() {
  return (
    <main>
      <div className="w-full pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Capabilities</h1>
            <p className="text-xl text-muted-foreground">Comprehensive digital dominance. From viral TikTok architecture to technical SEO mastery, we provide the full stack of high-end growth services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="glass-card p-6 flex flex-col h-full group hover:bg-white/5 transition-all hover:border-primary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  <div className="text-xs font-bold text-primary mb-4 uppercase tracking-wider flex items-center justify-between">
                    {service.category}
                    <IconComponent className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.desc}</p>
                  <a href="/contact">
                    <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium border min-h-9 px-4 py-2 w-full justify-between border-white/10 group-hover:border-primary group-hover:bg-primary/10 text-white transition-colors group/btn">
                      Request Service 
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
// }