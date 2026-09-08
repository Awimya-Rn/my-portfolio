import { NextResponse } from "next/server";
import { sanitizeFormData, validateEmail } from "@/lib/sanitize";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";

    const { success, remaining } = rateLimit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ message: "Message sent successfully!" });
    }

    const sanitized = sanitizeFormData({
      name: body.name || "",
      email: body.email || "",
      subject: body.subject || "",
      message: body.message || "",
    });

    if (!sanitized.name || sanitized.name.length < 2) {
      return NextResponse.json({ error: "Name is required (min 2 characters)." }, { status: 400 });
    }
    if (!validateEmail(sanitized.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (!sanitized.message || sanitized.message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    // In production, integrate with email service (Resend, Nodemailer, etc.)
    console.log("[Contact Form Submission]", sanitized);

    return NextResponse.json(
      { message: "Message sent successfully! I'll get back to you soon." },
      { status: 200, headers: { "X-RateLimit-Remaining": String(remaining) } }
    );
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
