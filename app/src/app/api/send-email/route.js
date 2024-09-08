import nodemailer from "nodemailer";
import { promises as fs } from "fs"; // Use promises to read file asynchronously
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Determine if in development or production
    const isDev = process.env.NODE_ENV !== "production";
    const logoUrl = isDev
      ? "http://localhost:3000/Logo.svg"
      : "https://eliogerges.com/Logo.svg";

    // Read the email template from file
    const templatePath = path.join(
      process.cwd(),
      "public",
      "emailTemplate.html"
    );
    let emailTemplate = await fs.readFile(templatePath, "utf-8");

    // Replace the logo placeholder with the correct URL
    emailTemplate = emailTemplate.replace("{{LOGO_URL}}", logoUrl);

    // Replace other dynamic content (e.g., name, subject, etc.)
    emailTemplate = emailTemplate.replace("{{NAME}}", name);
    emailTemplate = emailTemplate.replace("{{MESSAGE}}", message);

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // SMTP server
      port: process.env.EMAIL_PORT, // SMTP port
      secure: process.env.EMAIL_SECURE === "true", // SSL/TLS
      auth: {
        user: process.env.EMAIL_USER, // Email user from .env
        pass: process.env.EMAIL_PASS, // Email password from .env
      },
    });

    // Email options
    const mailOptions = {
      from: `"No Reply" <${process.env.EMAIL_USER}>`,
      to: `${email}, no-reply@eliogerges.com, info@eliogerges.com`,
      subject: subject,
      html: emailTemplate, // Use the template with the replaced content
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
