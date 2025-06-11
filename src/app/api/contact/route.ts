import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, newsletter } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter (you'll need to configure this with your email service)
    // For now, I'll show you the structure - you'll need to add your SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'support@mcofsi.org',
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #002537; border-bottom: 2px solid #003d52; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f0f7f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #002537; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            ${newsletter ? '<p><strong>Newsletter:</strong> Yes, they want to subscribe</p>' : ''}
          </div>
          
          <div style="background-color: white; padding: 20px; border-left: 4px solid #002537; margin: 20px 0;">
            <h3 style="color: #002537; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #002537; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 30px;">
            <p style="margin: 0; font-size: 14px;">
              This message was sent from the MCSI website contact form
            </p>
          </div>
        </div>
      `,
      // Also include a plain text version
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Subject: ${subject}
${newsletter ? 'Newsletter: Yes, they want to subscribe' : ''}

Message:
${message}

---
This message was sent from the MCSI website contact form
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 