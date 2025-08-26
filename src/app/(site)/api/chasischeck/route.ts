import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { value } = await request.json();
  const url = 'https://deltacomercial.com.do/takata/takata_send';
  const formData = new FormData();
  formData.append('chasis', value);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
      },
      body: formData
    });

    try {
      const data = await response.text();
      console.log(data)
      // All responses should return 200 status code as per instructions
      if (data === "Ingrese el # de chasis.") {
        return NextResponse.json({
          success: false,
          message: "Ingrese un numero de chasis valido.",
          completed: false
        }, { status: 200 });
      }

      if (data.includes("NO APLICA")) {
        return NextResponse.json({
          success: false,
          message: "NO APLICA. Si tu vehículo no ha sido importado al país por Delta Comercial, es imprescindible que nos escribas al WhatsApp 849-258-0765 para revalidar tus datos y confirmar si tu chasis aplica o no para el cambio.",
          completed: false
        }, { status: 200 });
      }

      if (data.includes("Aplica para la promoción")) {
        return NextResponse.json({
          success: true,
          message: "Aplica para la promoción",
          completed: false
        }, { status: 200 });
      }

      if (data.includes("Completado")) {
        return NextResponse.json({
          success: true,
          message: "Service ya completado",
          completed: true
        }, { status: 200 });
      }

      // Default response if none of the expected messages match
      return NextResponse.json({
        success: false,
        message: "Respuesta no reconocida",
      }, { status: 200 });

    } catch (error: any) {
      return NextResponse.json({
        success: false,
        message: 'Error al procesar la respuesta del servidor',
        error: error.message,
        color: "red"
      }, { status: 200 });
    }
  }
catch (error: any) {
  return NextResponse.json({ 
    success: false, 
    message: 'Error al contactar el servidor',
    error: error.message 
  }, { status: 404 });
}}