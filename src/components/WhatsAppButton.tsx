'use client';

import Image from 'next/image';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({ phoneNumber, message = 'Hola, me gustaría obtener más información' }: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className=''>
      <button
      onClick={handleClick}
      className="fixed left-4 bottom-2 z-50 rounded-full p-0 bg-transparent transition-all duration-300 hover:scale-110"
      aria-label="Chat en WhatsApp"
    >
      <Image
        src="/whatsapp-icon.svg"
        alt="WhatsApp"
        width={68}
        height={68}
      />
    </button>
    </div>
  );
} 