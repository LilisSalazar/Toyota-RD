// Notice from where NextResponse is imported:
import { NextResponse } from 'next/server';

import sendgrid, { ResponseError } from '@sendgrid/mail';
import prettyjson from 'prettyjson';

if (process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
  sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
}


const buildMessage = (formData: Object) => {
  const formattedText = prettyjson.render(formData, { noColor: true });
  return `Datos:
  ${formattedText}`;
};

export async function POST(request: Request) {
  const body = await request.json();
  const { to, subject, formData } = body;
  // to: process.env.NEXT_PUBLIC_FORM_EMAIL_TARGET,
  // subject,
  // formData: values,
  const message = buildMessage(formData);
  const emailFrom = formData.email;

  try {
    await sendgrid.send({
      to,
      from: emailFrom,
      subject,
      text: message,
    });

    return NextResponse.json({ success: true, message: 'Correo enviado' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    if (error instanceof ResponseError) {
      if (error.response) {
        console.error(error.response.body);
      }
    }
    return NextResponse.json({ success: false, error: 'Error al enviar correo' }, { status: 500 });
  }
}
