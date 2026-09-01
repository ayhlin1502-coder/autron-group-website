# CLAUDE.md — Autron Group 官網專案指引

此檔案放在專案根目錄,Claude Code 每次啟動時會自動讀取,作為長期專案脈絡。

## 專案身份
Autron Group 澳創集團官方網站。詳細規劃見同目錄 `01-PLANNING.md`(含Sitemap、CMS架構、SEO/安全基準、色彩字體系統等20項規劃產出)。原始需求規格見 `00-MASTER-SPEC.md`。

## 技術棧(鎖定版本)
- Next.js 14+(App Router)、React、TypeScript
- Tailwind CSS
- CMS:Storyblok(Visual Editor + 雙語 + Section Builder)
- Hosting:Vercel + Cloudflare(WAF/Turnstile)
- Animation:Framer Motion

## 開發原則
1. 嚴禁虛構公司資料(營收/員工數/成立年份/辦公室/客戶/認證等),缺資料一律用 `[CONTENT REQUIRED]` 佔位,不可自行編造。
2. 「洽談中合作」不可寫成「已合作」;「目標市場」不可寫成「已有辦公室」;「合作製造商」不可寫成「代理品牌」。
3. 雙語架構:`/zh-tw/...`、`/en/...`,切換語言需保留當前頁面路徑,不可跳回首頁。
4. 每頁單一 H1,Semantic HTML,SSR/SSG 優先(重要內容不可僅靠 Client-side JS 渲染)。
5. Motion 一律 200–600ms,必須支援 `prefers-reduced-motion`。
6. Secrets 一律用環境變數,不可寫入程式碼或提交到 Git。
7. 表單(尤其 Contact Form)需 Server-side Validation + CSRF + Bot Protection。
8. 效能優先序:Content > Usability > Conversion > Performance > SEO > Accessibility > Animation — 任何動畫造成 Core Web Vitals 不良就必須簡化或移除。

## Phase 1 開發範圍(依此順序建置)
1. 專案初始化(Next.js + TypeScript + Tailwind + 基礎資料夾結構)
2. Design System(色彩/字體/間距/按鈕/Grid 之 Tailwind Config + 共用元件)
3. Global Components:Header(含Mega Menu)、Footer、語言切換器
4. Home 頁面(依 01-PLANNING.md 第2、5節結構)
5. About 頁面
6. 四個 Business Unit 頁面:Autron Trade / AuzCare / AutronGo / Quarter Innovations
7. Global Network 頁面
8. Contact 頁面(Smart Routing Form)
9. SEO 基礎(sitemap.xml、robots.txt、metadata、hreflang、結構化資料)
10. 安全基礎(Security Headers、HTTPS強制、表單防護)
11. CMS 整合(Storyblok,建立 Collections 並串接前端)

**本階段不做**:大型電商、複雜會員系統、ERP整合、大型CRM、Distributor/Supplier Portal。

## 給 Claude Code 的建議工作方式
每次只處理一個明確步驟(例如「先做步驟1和2」),完成後再繼續下一步,方便逐步Review,不要一次產生整個網站。
