import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const phone = formData.get("phone") as string;
    const birthdayDay = formData.get("birthdayDay") as string;
    const birthdayMonth = formData.get("birthdayMonth") as string;
    const birthdayYear = formData.get("birthdayYear") as string;
    const addressMulti = formData.get("addressMulti") as string;
    const countryRegion = formData.get("countryRegion") as string;
    const addressLine2 = formData.get("addressLine2") as string;
    const city = formData.get("city") as string;
    const zip = formData.get("zip") as string;
    const companyName = formData.get("companyName") as string;
    const position = formData.get("position") as string;
    const idDocument = formData.get("idDocument") as File | null;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Process file attachment if exists
    let attachments = [];
    if (idDocument && idDocument.size > 0 && idDocument.name) {
      const buffer = Buffer.from(await idDocument.arrayBuffer());
      attachments.push({
        filename: idDocument.name,
        content: buffer,
      });
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
      attachments: attachments,
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
