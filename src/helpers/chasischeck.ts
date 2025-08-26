export const checkChasis = async (value: String) => {
    const datos = {
        value
    };
  
    try {
      const response = await fetch('/api/chasischeck', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      });
      // console.log(response);
      return await response.json();
    } catch (error: any) {
      return {success: false, message: 'Error de conexión'};
    }
  };
  