import { NextResponse } from "next/server";
import { sanitizeFormData, validateEmail } from "@/lib/sanitize";
import { rateLimit } from "@/lib/rateLimit";

const messages = {
  en: {
    tooMany: "Too many requests. Please try again later.",
    honeypot: "Message sent successfully!",
    name: "Name is required (min 2 characters).",
    email: "Invalid email address.",
    message: "Message must be at least 10 characters.",
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Something went wrong.",
  },
  id: {
    tooMany: "Terlalu banyak permintaan. Silakan coba lagi nanti.",
    honeypot: "Pesan berhasil dikirim!",
    name: "Nama wajib diisi (minimal 2 karakter).",
    email: "Alamat email tidak valid.",
    message: "Pesan minimal 10 karakter.",
    success: "Pesan berhasil dikirim! Saya akan segera membalas.",
    error: "Terjadi kesalahan.",
  },
};

export async function POST(request: Request) {
  const m = messages[request.headers.get("x-lang") === "id" ? "id" : "en"];

  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";

    const { success, remaining } = rateLimit(ip);
    if (!success) {
      return NextResponse.json(
        { error: m.tooMany },
        { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ message: m.honeypot });
    }

    const sanitized = sanitizeFormData({
      name: body.name || "",
      email: body.email || "",
      subject: body.subject || "",
      message: body.message || "",
    });

    if (!sanitized.name || sanitized.name.length < 2) {
      return NextResponse.json({ error: m.name }, { status: 400 });
    }
    if (!validateEmail(sanitized.email)) {
      return NextResponse.json({ error: m.email }, { status: 400 });
    }
    if (!sanitized.message || sanitized.message.length < 10) {
      return NextResponse.json({ error: m.message }, { status: 400 });
    }

    // In production, integrate with email service (Resend, Nodemailer, etc.)
    console.log("[Contact Form Submission]", sanitized);

    return NextResponse.json(
      { message: m.success },
      { status: 200, headers: { "X-RateLimit-Remaining": String(remaining) } }
    );
  } catch {
    return NextResponse.json({ error: m.error }, { status: 500 });
  }
}
