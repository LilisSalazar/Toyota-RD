interface FormValues {
  email: string;
  [key: string]: any;
}

export const sendMail = async (subject: string, values: FormValues) => {
  const datos = {
    to: process.env.NEXT_PUBLIC_FORM_EMAIL_TARGET,
    subject,
    formData: values,
  };
  try {
    if (!values.email) {
      console.error('No se proporcionó un correo electrónico');
      return;
    }

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    });

    const result = await response.json();
    if (result.success) {
      console.debug('Correo enviado exitosamente');
    } else {
      console.error('Hubo un error al enviar el correo');
    }
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};
