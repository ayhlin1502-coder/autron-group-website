import { NextResponse } from "next/server";

const helpOptions = new Set([
  "International Trade",
  "Brand Distribution",
  "International Logistics",
  "Technology-Website",
  "Supplier Cooperation",
  "Distribution Cooperation",
  "General Enquiry"
]);

const limits = {
  help: 60,
  name: 100,
  company: 150,
  email: 254,
  phone: 40,
  country: 100,
  businessType: 100,
  enquiryCategory: 120,
  message: 5000,
  website: 200
} as const;

type ContactPayload = {
  help: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  businessType: string;
  enquiryCategory: string;
  message: string;
  website: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const requestLog = new Map<string, number[]>();

function readField(formData: FormData, name: string) {
  const value = formData.get(name);
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(request: Request) {
  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? request.headers.get("x-real-ip")
    ?? "unknown";
  const now = Date.now();
  const recentRequests = (requestLog.get(clientIp) ?? []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, {
      status: 429,
      headers: { "Retry-After": "60" }
    });
  }
  recentRequests.push(now);
  requestLog.set(clientIp, recentRequests);

  // Development-stage in-memory rate limiting; it resets on restart and is not shared across instances.
  // TODO: Replace with Redis or Vercel Edge Rate Limiting for production IP-based enforcement.

  const formData = await request.formData();
  const payload: ContactPayload = {
    help: readField(formData, "help"),
    name: readField(formData, "name"),
    company: readField(formData, "company"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    country: readField(formData, "country"),
    businessType: readField(formData, "business-type"),
    enquiryCategory: readField(formData, "enquiry-category"),
    message: readField(formData, "message"),
    website: readField(formData, "website")
  };

  // Honeypot: legitimate users never see or fill this field.
  if (payload.website) {
    return NextResponse.json({ error: "Unable to process this enquiry." }, { status: 400 });
  }

  // TODO: 加入Cloudflare Turnstile驗證(申請Key後在此驗證token)

  const requiredFields: Array<[keyof ContactPayload, string]> = [
    ["help", "How Can We Help?"],
    ["name", "Name"],
    ["company", "Company"],
    ["email", "Email"],
    ["enquiryCategory", "Enquiry Category"],
    ["message", "Message"]
  ];
  const missingField = requiredFields.find(([field]) => !payload[field]);

  if (missingField) {
    return NextResponse.json({ error: `${missingField[1]} is required.` }, { status: 400 });
  }

  if (!helpOptions.has(payload.help)) {
    return NextResponse.json({ error: "Please select a valid enquiry type." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Reject overlong input rather than silently accepting truncated data.
  const lengthByField = {
    help: payload.help.length,
    name: payload.name.length,
    company: payload.company.length,
    email: payload.email.length,
    phone: payload.phone.length,
    country: payload.country.length,
    businessType: payload.businessType.length,
    enquiryCategory: payload.enquiryCategory.length,
    message: payload.message.length,
    website: payload.website.length
  };
  const oversizedField = Object.entries(lengthByField).find(([field, length]) => length > limits[field as keyof typeof limits]);
  if (oversizedField) {
    return NextResponse.json({ error: "One or more fields exceed the allowed length." }, { status: 400 });
  }

  // TODO: 串接真實Email服務(建議Resend)在此處寄信通知,目前僅為開發階段的模擬記錄
  console.log("[contact] enquiry received", payload);

  return NextResponse.json({ message: "Your enquiry has been received." }, { status: 200 });
}

