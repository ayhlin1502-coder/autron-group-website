# Autron Group 澳創集團官網 — Pre-Coding Planning Document

依 Master Build Prompt 第 62 條要求,提供正式 Coding 前的 20 項規劃產出。

---

## 0. Hero Slogan 選項(先提出 3–5 組,並選定)

| # | English | 繁體中文 |
|---|---|---|
| 1 | Connecting Australia, Taiwan & Global Markets | 連結澳洲、台灣與全球市場 |
| 2 | Trade. Distribution. Logistics. Technology. | 貿易．經銷．物流．科技 |
| 3 | Connecting Markets. Moving Products. Building Brands. | 連結市場．流通產品．打造品牌 |
| 4 | A Cross-Border Business Platform for Australia & Asia | 澳洲與亞洲之間的跨境商業平台 |
| 5 | Creating Opportunities Across Borders | 跨境創造商機 |

**建議採用:#1 作為 Hero 主標語**
理由:最直接建立「澳洲/台灣/全球」的地理定位與集團格局,適合長期作為品牌核心語句;可與 #2(副標語,說明四大能力)搭配使用,形成「主標定位 + 副標能力」的標準 Hero 結構。此為建議,你可依集團實際發展方向做最終選擇。

---

## 1. Final Sitemap(Phase 1)

```
/ (Home)
/about
/our-businesses
  /autron-trade
  /auzcare
  /autrongo
  /quarter-innovations
/global-network
/contact
/privacy-policy
/cookie-policy

語言前綴套用於以上所有頁面:
/zh-tw/...
/en/...

未來擴充(不在 Phase 1):
/news
/case-studies
/careers
/supplier-portal
/distributor-portal
/partner-portal
/investor-relations
```

---

## 2. Homepage Wireframe(區塊順序)

```
[Header - Sticky]
[Section 1] Hero (Full Width, 主標+副標+雙CTA)
[Section 2] One Group. Four Business Platforms.(Sticky Scroll Story,4張卡片)
[Section 3] About Autron Group(120–160字簡述 + CTA)
[Section 4] Cross-Border Capability(Product→Market Entry→Distribution→Logistics→Marketing 流程視覺)
[Section 5] Global Network(Interactive Map,澳洲/台灣/中國/美國/日本/越南)
[Section 6] Lead Routing CTA區(依需求分流:出口/代理/進口/物流/網站/行銷/供應商/經銷商)
[Section 7] Partner With Autron(集團級最終CTA)
[Footer - Global Component]
```

---

## 3. Desktop Navigation

```
[Logo Autron Group]   Home  About  Our Businesses ▾  Global Network  Contact   [繁中|EN]  [Partner With Us]

Our Businesses Mega Menu:
 International Trading   → Autron Trade
 Brand Distribution      → AuzCare
 International Logistics → Autron Go
 Technology & Marketing  → Quarter Innovation
```
需求:Sticky、Responsive、Minimal、快速載入。

## 4. Mobile Navigation

```
[Logo]                    [☰]
展開後:
 Home
 About
 Our Businesses (展開子項:4個 Business Unit)
 Global Network
 Contact
 ────────────
 繁中 / EN
 [Partner With Us] (主要CTA按鈕)
```

---

## 5. Homepage Section Structure(細節)

**Hero**:主標 + 副標(中英雙語)+ 雙CTA(Explore Our Businesses / Partner With Autron)+ 動態視覺(Trade Route動畫,禁用貨輪照/握手照/廉價地圖)

**Four Business Platforms**:Desktop用Sticky Scroll,Mobile改Vertical Stack;每張卡片含編號、分類標籤、Business名稱、一句話定位、CTA

**About**:120–160字,強調 Market Access + Distribution + Supply Chain + Logistics + Digital Capability 的整合能力

**Global Network**:地圖 + 市場分類(Operational/Trading/Distribution/Expansion Markets),用詞用「Markets We Serve」而非「Our Offices」

**Lead Routing**:以問題導向排列(「我要出口產品」→Autron Trade 等),對應規格書第10條全部情境

---

## 6. Individual Business Page Structure(共用模板)

```
[Hero] Business名稱 + Slogan
[Positioning] 一段定位說明
[Services/Categories] 服務或產品分類(使用CMS管理,標明狀態如「洽談中」「已合作」)
[Target Markets](如適用)
[Trade+Logistics Integration Callout](Autron Go專屬)
[CTA Block] 該Business專屬CTA
[Cross-link to other Business Units]
```
每頁遵守內容規範:不可將「洽談中」寫成「已合作」、不可將「目標市場」寫成「已有辦公室」等(對應第53條)。

---

## 7. Visual Design Direction

定位:International Business Group × Modern Technology Company × Premium Corporate Brand
避免:廉價Template、大量漸層、過度圓角、每區都是Card、大量Stock Photo、Neon科技風

---

## 8. Animation Direction

- Smooth Scroll、Scroll-triggered Reveal、Text/Image Reveal
- Four Business Platforms:Sticky Scroll Story
- Global Map:Animated Trade Routes,hover顯示市場資訊
- 時長 200–600ms,Subtle/Fast/Purposeful
- 強制支援 `prefers-reduced-motion`,降級移除 Parallax / 複雜Scroll動畫

---

## 9. Colour System(草案,待Logo確認後鎖定色碼)

```
Primary   = [依 Logo 主色決定 — 目前缺素材,標示 CONTENT REQUIRED]
Secondary = Deep Navy   #0B1F3A(建議值)
Tertiary  = Charcoal    #2B2B2B(建議值)
Background = White #FFFFFF / Off-white #FAFAFA / Light Grey #F2F3F5
```
⚠️ 你先前選擇「目前沒有品牌素材」,因此 Primary 色未定,實作時以 CONTENT REQUIRED 佔位,待Logo/色系確認後再鎖定。

---

## 10. Typography System

```
英文: Inter / Manrope / DM Sans(擇一為主字體)
中文: Noto Sans TC
Headline: Bold, Large, Clean
Body: 高可讀性,建議中文 16px 起
```

---

## 11. CTA Architecture

| 頁面 | 主要CTA |
|---|---|
| Global(首頁/Footer) | Partner With Autron |
| Autron Trade | Discuss a Trading Opportunity / Become a Supplier / Become a Distributor |
| AuzCare | Become a Brand Partner / Retail & Distribution Enquiry |
| Autron Go | Request a Freight Quote |
| Quarter Innovation | Start a Project |
| Contact | Submit Enquiry(Smart Routing Form) |

---

## 12–13. Homepage Copy(中英文,首版草稿)

**Hero**
EN: Connecting Australia, Taiwan & Global Markets — Through international trade, brand distribution, logistics and technology, Autron Group helps businesses, products and brands reach new markets.
ZH: 連結澳洲、台灣與全球市場 — 透過國際貿易、品牌經銷、國際物流與科技服務,澳創集團連結澳洲、台灣與全球市場。

**About(草稿,120–160字/EN為基準)**
EN: Autron Group operates across Australia, Taiwan and international markets, combining market access, brand distribution, supply chain and logistics capability with digital growth expertise. Through four complementary business platforms, we help products, brands and businesses move confidently across borders — from sourcing and market entry to distribution, logistics and digital marketing. Autron Group is built to scale, connecting opportunities between Australia, Taiwan, Asia-Pacific and global markets.
ZH: 澳創集團橫跨澳洲、台灣與國際市場,整合市場准入、品牌經銷、供應鏈與國際物流能力,並結合數位成長專業。透過四大互補事業平台,我們協助產品、品牌與企業跨境布局 — 從產品開發、市場進入,到經銷、物流與數位行銷。澳創集團持續擴展,連結澳洲、台灣、亞太與全球市場的商業機會。

(以上為草稿,正式上線前需公司確認數據與定位用詞是否符合實際情況)

---

## 14. CMS Architecture

建議採 Headless/Visual CMS(見第19項比較),核心概念:
- Global Components(Header/Footer/CTA/Contact Form/Business Nav/Partner Logos/Global Network)集中管理,改一處全站同步
- 每頁可由 Section Builder 組裝(Hero/Text+Image/Business Cards/Services/Brands/Products/Map/Timeline/Statistics/Logo Wall/Video/CTA/News/FAQ/Contact Form)
- Design System Lock:管理者選 Preset Style,不可改 Raw CSS

## 15. CMS Collections

```
Businesses / Brands / Products / Services / Markets /
Distribution Channels / News / Case Studies / Partners /
CTA / Contact Details
```
每個 Collection 欄位:中文內容、英文內容、SEO Title、Meta Description、Status(Draft/Published)、Featured Image、Publish Date。
Brands Collection 需強制分類欄位:Represented Brand / Partner Brand / Manufacturer / Own Brand(對應規格書第12條要求,避免混淆代理關係)。

---

## 16. Bilingual Architecture

- URL 結構:`/zh-tw/...`、`/en/...`,語言切換不跳回首頁,保留當前頁面路徑
- 記住使用者語言偏好(非IP強制Redirect)
- 每語言版本獨立 SEO Title / Meta Description / OG / URL
- hreflang:`zh-Hant-TW`、`en`、`x-default`
- 翻譯缺失顯示「Translation Missing」,可預留 AI Translation Draft 但須人工Review後才Publish

---

## 17. SEO Architecture

- SSR/SSG/ISR(建議 Next.js),重要內容不可僅靠 Client-side JS 渲染
- 每頁後台可管理:SEO Title / Meta Description / Slug / Canonical / OG Title/Description/Image / Index-Noindex
- 每頁單一H1,Semantic HTML(header/nav/main/section/article/footer)
- Structured Data:Organization、WebSite、BreadcrumbList、Service、Product、Brand、FAQPage(依實際內容,不可虛構)
- 自動 sitemap.xml(含中英文)、robots.txt(CMS/Admin/Preview/Staging 禁止索引)
- Internal Linking Entity 架構:Autron Group → Business Unit → Services/Products → Markets

---

## 18. Security Architecture

- 基準:OWASP Top 10:2025 + OWASP ASVS 5.0
- HTTPS Only,TLS 1.3(最低1.2),HTTP強制Redirect
- Security Headers:CSP、HSTS、X-Content-Type-Options、Referrer-Policy、Permissions-Policy、Frame防護
- CMS:MFA、強密碼政策、Rate Limiting、Session Timeout,預留Passkey
- API:Authentication/Authorization/Rate Limiting/Input Validation,最小權限原則
- 表單防護:CSRF、SQLi、XSS、Bot Protection(建議 Cloudflare Turnstile,非侵入式)
- Secrets 一律用環境變數/Secret Manager,不寫入前端或Git
- Dependency Scanning(如Dependabot)+ 定期更新 + Lock Versions
- 備份:Database每日自動備份 + 可測試的 Restore 流程
- Staging 與 Production 完全分離,Staging 需密碼保護 + Noindex

---

## 19. 推薦技術棧(Recommended Tech Stack)

```
Frontend:  Next.js 14+ / React / TypeScript / Tailwind CSS
CMS:       Storyblok 或 Sanity(Visual Editor + 多語 + Section Builder + 版本控管,見下方比較)
Animation: Framer Motion(主要)+ 少量 CSS Animation,避免濫用 GSAP 增加複雜度(除非需要複雜Scroll Story效果)
Hosting:   Vercel(Next.js原生整合、CDN、ISR支援佳)
Forms/Bot: Cloudflare Turnstile
Analytics: GA4 + GTM,預留 Search Console / Bing Webmaster
```

**CMS 選型比較**(依規格書第51條需求):
| CMS | Visual Editor | 多語 | Drag&Drop Section | 版本歷史 | 適合度 |
|---|---|---|---|---|---|
| Storyblok | ✅ 強 | ✅ 原生 | ✅ 原生 | ✅ | ★★★★★ 最推薦,visual editor+多語為業界最成熟 |
| Sanity | 部分(需自建Studio UI) | ✅ | 需自訂 | ✅ | ★★★★ 彈性高但需較多開發 |
| Builder.io | ✅ 強 | ✅ | ✅ | ✅ | ★★★★ 適合行銷團隊自主編輯,但與Next.js整合需留意效能 |
| Payload CMS | 中 | ✅ | 需自訂 | ✅ | ★★★ Self-hosted,適合想完全掌控資料的情況 |
| Strapi | 弱(無原生Visual Editor) | ✅ | ❌ | 有限 | ★★ 不符合「Section Builder」需求,不建議 |

**建議:Storyblok**,最符合「Visual CMS + Drag-and-Drop Section Builder + 完整雙語」的核心需求,且與 Next.js 整合成熟。

## 20. Hosting Recommendation

Vercel(主機)+ Cloudflare(DNS/WAF/DDoS防護/Turnstile)。此組合對 Next.js 的 SSR/ISR、Edge運算、全球CDN支援最完整,且能滿足規格書 Core Web Vitals(LCP≤2.5s / INP<200ms / CLS<0.1)目標。

---

## 待確認事項(CONTENT REQUIRED)

以下資訊尚未提供,實作時將以佔位方式標示,待你確認後再鎖定:
- Logo 檔案與品牌主色
- AuzCare 各品牌實際合作狀態(Represented/Partner/Manufacturer/Own Brand)
- Autron Go 服務是否為自有運力或第三方物流網絡協調
- 各市場(中國/美國/日本/越南)實際合作階段(洽談中 vs 已合作)
- Hero Slogan 最終選定版本(已建議 #1,待你確認)
