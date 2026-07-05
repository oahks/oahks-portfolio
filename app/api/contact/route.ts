import { siteConfig } from "@/lib/site-config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.formData();

  if (body.get("_honeypot")) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.get("name") ?? "").trim();
  const email = String(body.get("email") ?? "").trim();
  const message = String(body.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const response = await fetch(siteConfig.contactFormEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ name, email, message, _honeypot: "" }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Submission failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
