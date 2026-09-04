"use client";

import { useEffect } from "react";

const translations: Record<string, string> = {
  "國際貿易": "International Trade", "通路與經銷": "Distribution", "國際物流": "International Logistics", "科技與數位服務": "Tech & Marketing",
  "串聯全球供應鏈與市場，提供國際貿易、進出口及海外通路拓展服務。": "Connecting global supply chains and markets through international trade, import-export and overseas channel development.",
  "專注優質商品品牌代理與經銷，打造線上線下整合的多元銷售通路。": "Representing and distributing quality brands through integrated online and offline sales channels.",
  "提供靈活高效的國際物流與跨境運輸服務，協助企業快速連結全球市場。": "Providing flexible, efficient international logistics and cross-border transport services that connect businesses to global markets.",
  "結合網站開發、數位行銷與創新科技，協助企業打造品牌並加速數位成長。": "Combining web development, digital marketing and innovative technology to build brands and accelerate digital growth.",
  "國際市場開發": "Global Market Development", "數位成長": "Digital Growth", "掌握市場趨勢，開拓全球商機": "Understand market trends and unlock global opportunities.",
  "布局多元通路，建立穩固銷售網絡": "Build diverse channels and resilient sales networks.", "高效整合物流資源，確保順暢交付": "Integrate logistics efficiently for reliable delivery.", "數位行銷與科技服務，加速品牌成長": "Digital marketing and technology services that accelerate brand growth.",
  "核心事業平台": "Core Business", "營運據點": "Locations", "服務市場": "Markets Served", "無限商機可能": "Opportunity",
  "貿易合作": "Trade", "通路經銷": "Distribution", "物流諮詢": "Logistics", "科技行銷": "Digital Services", "事業快捷選單": "Business shortcuts",
  "連結澳洲、台灣與全球市場": "Connecting Australia, Taiwan & Global Markets", "透過國際貿易、品牌經銷、國際物流與科技服務，連結澳洲、台灣與全球市場的商機與成長動能。": "Connecting opportunities and growth across Australia, Taiwan and global markets through trade, distribution, logistics and technology.",
  "探索我們的事業": "Explore Our Businesses", "聯絡我們": "Contact Us", "一個集團，四大核心平台": "One Group, Four Core Platforms", "整合貿易、通路、物流、科技與行銷，創造跨境商業價值": "Integrating trade, distribution, logistics, technology and marketing to create cross-border value.", "了解更多": "Learn More",
  "跨境商業整合能力": "Cross-Border Business Integration", "從商品到市場，從供應鏈到數位成長，我們提供一站式解決方案": "From products and supply chains to market entry and digital growth, we provide integrated solutions.", "我們的使命": "Our Mission", "連結澳洲、台灣與全球市場，創造商業價值，成就合作夥伴。": "Connecting Australia, Taiwan and global markets to create business value and enable our partners.", "成為我們的合作夥伴": "Become Our Partner", "準備拓展您的國際市場嗎？": "Ready to expand into international markets?", "讓澳創成為您值得信賴的跨境商業夥伴": "Let Autron be your trusted cross-border business partner.", "立即合作": "Get Started",
  "全球市場布局": "Global Market Presence", "深耕重點市場，連結全球商機": "Deepening key markets and connecting global opportunities.", "擴展全球市場": "Explore Global Markets",
  "關於澳創": "About Autron", "創造無限商機": "Creating Infinite Opportunities", "澳創國際整合貿易、品牌經銷、物流與科技的跨域實力，我們以跨境整合能力與創新思維，協助品牌與企業拓展新市場，實現永續成長與長期價值。": "Autron integrates trade, brand distribution, logistics and technology to help brands and businesses enter new markets and build sustainable long-term value.",
  "連結澳洲、台灣與全球": "Connecting Australia, Taiwan & The World",
  "跨境整合": "Cross-Border Integration", "市場拓展": "Market Expansion", "長期合作價值": "Long-Term Partnership Value", "整合供應鏈、品牌與服務能力，讓跨市場合作更順暢。": "Integrating supply chains, brands and service capabilities for smoother cross-market collaboration.", "從市場進入到通路發展，協助合作夥伴掌握成長機會。": "Supporting partners from market entry to channel development.", "以專業與透明溝通為基礎，建立值得信任的合作關係。": "Building trusted partnerships through expertise and transparent communication.",
  "公司簡介": "Company Profile", "一個集團，": "One Group,", "四大核心事業平台": "Four Core Businesses", "整合貿易、品牌、物流與科技，創造跨境商業新價值。": "Integrating trade, brands, logistics and technology to create new cross-border value.", "發展里程碑": "Our Journey", "一步一腳印，": "Step by Step,", "持續創造更多可能": "Creating More Possibilities.", "集團架構": "Group Structure", "整合多元專業": "Integrated Expertise", "核心價值": "Core Values", "讓合作走得更遠的核心價值": "Core Values That Take Partnerships Further", "準備拓展您的國際商機嗎？": "Ready to expand your international opportunities?", "立即洽詢合作": "Talk to Us",
  "業務諮詢": "Business Enquiries", "合作夥伴": "Partnerships", "經銷與貿易": "Distribution & Trade", "物流與支援": "Logistics & Support", "聯絡澳創集團": "Contact Autron Group", "與我們聯繫": "Get in Touch", "我們可以怎麼協助您？": "How Can We Help?", "聯絡資訊": "Contact Details", "台灣總公司": "Taiwan Headquarters", "澳洲辦公室": "Australia Office", "快速回覆": "Quick Response", "提交您的詢問": "Submit Your Enquiry",
  "精選全球優質產品": "Selected Global Products", "完整供應鏈整合": "Complete Supply Chain Integration", "國際市場經驗": "International Market Experience", "共創品牌價值": "Building Brand Value Together", "多元優質產品，滿足全球需求": "Quality Products for Global Needs", "選擇 Autron Trade 的理由": "Why Choose Autron Trade", "全球市場佈局": "Global Market Presence", "靈活通路，創造最大商業價值": "Flexible Channels, Greater Business Value",
  "合作供應商": "Partner Suppliers", "出口國家與地區": "Export Countries & Regions", "優質產品": "Quality Products", "國際貿易經驗": "International Trade Experience", "蜂蜜與蜂膠": "Honey & Propolis", "橄欖油": "Olive Oil", "保健產品": "Health Supplements", "紅酒": "Wine", "牛肉與羊肉": "Beef & Lamb", "醫療消耗品與器材": "Medical Supplies & Devices",
  "嚴選來源，確保品質": "Carefully sourced for dependable quality.", "採購、倉儲到通路，一站式服務": "From sourcing and storage to channels, all in one service.", "深耕亞太、北美等主要市場": "Experience across key Asia-Pacific and North American markets.", "協助品牌國際化、市場拓展": "Supporting brand internationalisation and market expansion.", "成熟通路與代理經銷": "Established channels and distribution", "在地法規與認證支援": "Local regulatory and certification support", "品牌行銷與市場推廣": "Brand marketing and promotion", "穩定供應與長期合作": "Stable supply and long-term collaboration",
  "台灣": "Taiwan", "澳洲": "Australia", "中國": "China", "美國": "United States", "日本": "Japan", "越南": "Vietnam", "尋找優質商品": "Source Quality Products", "協助尋找台灣與澳洲的優質商品，嚴選來源，確保品質與競爭力。": "Helping source quality products from Taiwan and Australia with dependable quality and competitiveness.", "出口溝通協助": "Export Coordination", "協助與供應商、買家進行溝通協調，處理合約、文件與出口流程。": "Coordinating with suppliers and buyers on contracts, documents and export processes.", "國際運送安排": "International Shipping", "整合國際物流資源，提供安全、高效且具成本優勢的運送方案。": "Integrating global logistics resources for secure, efficient and cost-effective shipping.", "協助進口全球": "Global Import Support", "協助將商品進口到全球各國，完成清關與在地合作，拓展國際市場。": "Helping import products into markets worldwide, including customs coordination and local partnerships.", "全球市場不設限": "Global Markets Without Limits", "協助進入任何國家與地區": "Supporting entry into markets worldwide.", "一站式整合服務": "Integrated One-Stop Service", "從商品、溝通、物流到進口": "From products and coordination to logistics and import.", "專業團隊把關": "Expert Guidance", "確保合規、降低風險": "Ensuring compliance and reducing risk.", "創造最大商業價值": "Maximise Business Value", "降低成本，提高效率與利潤": "Lowering costs while improving efficiency and returns.",
  "連結澳洲與台灣，讓優質產品走向全球": "Connecting Australia and Taiwan, taking quality products to the world.", "整合全球優質商品、專業通路與貿易資源，建立長期穩定的國際供應與經銷網絡。": "Integrating quality products, professional channels and trade resources into stable international supply and distribution networks.", "洽詢合作": "Enquire Now", "從天然健康、優質美食到醫療保健，為全球客戶提供高品質、具競爭力的產品。": "From natural wellness and premium foods to healthcare, we provide high-quality, competitive products for global customers.", "查看更多產品": "View More Products", "以澳洲與台灣為核心，連結亞洲、北美及全球市場，創造更多跨境合作與商業機會。": "With Australia and Taiwan at our core, we connect Asia, North America and global markets to create cross-border opportunities.", "探索全球市場": "Explore Global Markets", "主要市場": "Key Markets", "依據不同市場特性，提供多元銷售與通路策略，協助合作夥伴快速成長。": "Tailored sales and channel strategies that help partners grow in diverse markets.", "與 Autron Trade 一起，讓優質產品走向世界": "Join Us, To Take Quality Products to the World", "無論您是品牌方、供應商或經銷夥伴，期待與您攜手共創全球市場。": "Whether you are a brand, supplier or distributor, we look forward to building global markets together.",
  "創立 Autron Trade": "Founded Autron Trade", "引進並代理澳洲蜂蜜品牌，正式跨入台灣市場。": "Introduced and represented Australian honey brands, officially entering the Taiwan market.", "成立 Autron Tech": "Founded Autron Tech", "聚焦系統開發，逐步建立集團的科技服務能力。": "Focused on systems development and built the Group's technology capabilities.", "成立 Quarter Innovation": "Founded Quarter Innovation", "拓展網站設計與數位行銷服務，延伸企業成長所需的數位能力。": "Expanded into web design and digital marketing to support business growth.", "擴大品牌代理版圖": "Expanded Brand Representation", "持續增加品牌代理項目，並拓展多元經銷通路。": "Expanded represented brands and diversified distribution channels.", "布局全球貿易市場": "Expanded into Global Trade Markets", "啟動全球市場拓展，深化跨境貿易布局。": "Launched global market expansion and deepened cross-border trade capabilities.", "成立 AuzCare": "Founded AuzCare", "擴充多品牌代理與經銷業務，強化品牌通路服務。": "Expanded multi-brand representation and distribution services.", "成立 Autron Go": "Founded Autron Go", "完成國際物流業務併購，進一步整合跨境物流能力。": "Completed an international logistics acquisition to further integrate cross-border logistics capabilities.",
  "國際貿易與品牌事業": "International Trade & Brands", "串連全球供應與市場需求，提供採購、進出口與市場開發服務。": "Connecting global supply with market demand through sourcing, import-export and market development.", "品牌代理與經銷": "Brand Representation & Distribution", "協助品牌進入市場，發展代理、經銷與零售通路。": "Helping brands enter markets and build representation, distribution and retail channels.", "跨境物流事業": "Cross-Border Logistics", "整合國際運輸、集運與物流協調，支援貨物跨境移動。": "Integrating international freight, consolidation and logistics coordination for cross-border movement.", "以網站設計、系統開發與數位行銷協助企業成長。": "Supporting business growth through web design, systems development and digital marketing.", "跨境連結": "Cross-Border Connection", "連結市場、產品與專業能力，讓合適的機會在不同地區之間順利發生。": "Connecting markets, products and expertise so the right opportunities can move across regions.", "專業可信": "Trusted Expertise", "以清楚溝通、深入理解與務實執行，建立值得長期合作的關係。": "Building trusted long-term relationships through clear communication and practical execution.", "協同整合": "Integrated Collaboration", "整合貿易、品牌、物流與數位服務，讓不同事業能力彼此支援。": "Integrating trade, brands, logistics and digital services so capabilities reinforce one another.", "共同成長": "Grow Together", "與合作夥伴一起看見長期機會，持續創造可延伸的商業價值。": "Working with partners to create enduring opportunities and scalable business value.",
  "了解我們的事業與解決方案": "Learn about our businesses and solutions.", "尋求策略合作，共同開發機會": "Explore strategic partnerships and opportunities.", "產品開發、貿易合作與市場拓展": "Product development, trade partnerships and market expansion.", "物流服務、技術支援與售後服務": "Logistics, technical support and after-sales service.", "無論您有任何採購諮詢、合作提案或產品需求，我們都將盡快回覆並協助您找到最合適的團隊。": "Whether you have sourcing enquiries, partnership proposals or product needs, we will respond promptly and connect you with the right team.", "我們的團隊將於 1–2 個工作天內回覆您的詢問。": "Our team will respond to your enquiry within 1–2 business days.", "告訴我們您的需求，我們將協助您找到最適合的事業平台。": "Tell us what you are looking for and we will connect you with the most relevant business platform.", "台北市大安區信義路四段 6 號 6 樓": "6F., No. 6, Sec. 4, Xinyi Rd., Da'an Dist., Taipei City, Taiwan",
  "[CONTENT REQUIRED - 待確認市場]": "[CONTENT REQUIRED - Market confirmation pending]", "[CONTENT REQUIRED - 待確認分類]": "[CONTENT REQUIRED - Classification pending]"
};

function translateText(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => {
    const original = node.nodeValue ?? "";
    const trimmed = original.trim();
    if (translations[trimmed]) node.nodeValue = original.replace(trimmed, translations[trimmed]);
  });
}

function localizeLinks(root: ParentNode) {
  root.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("/en")) link.setAttribute("href", href === "/" ? "/en" : `/en${href}`);
  });
}

export function EnglishCopy() {
  useEffect(() => {
    translateText(document.body);
    localizeLinks(document);
    const observer = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => {
      translateText(node);
      if (node instanceof Element) localizeLinks(node);
    })));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
