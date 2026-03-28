import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { 
      firstName, lastName, email, message, phone, 
      birthdayDay, birthdayMonth, birthdayYear, 
      addressMulti, countryRegion, addressLine2, city, zip, 
      companyName, position 
    } = data;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: "mirvacinvestment@gmail.com",
      subject: `New Application from ${firstName} ${lastName}`,
      html: `
        <h2>New Form Submission (MIRVac Investment Company)</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
        
        <h3>Birthday</h3>
        <p>${birthdayDay || ''} / ${birthdayMonth || ''} / ${birthdayYear || ''}</p>

        <h3>Address</h3>
        <p><strong>Multi-line address:</strong> <br />${addressMulti ? addressMulti.replace(/\\n/g, '<br/>') : 'N/A'}</p>
        <p><strong>Country/Region:</strong> ${countryRegion || 'N/A'}</p>
        <p><strong>Address:</strong> ${addressLine2 || 'N/A'}</p>
        <p><strong>City:</strong> ${city || 'N/A'}</p>
        <p><strong>Zip/Postal:</strong> ${zip || 'N/A'}</p>
        
        <h3>Professional Info</h3>
        <p><strong>Company name:</strong> ${companyName || 'N/A'}</p>
        <p><strong>Position:</strong> ${position || 'N/A'}</p>
      `,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
