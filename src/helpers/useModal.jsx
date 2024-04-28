import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code !== 'Escape') return;
      handleCloseModal();
    };
    document.body.addEventListener('keydown', handleKeyPress);
    return () => document.body.removeEventListener('keydown', handleKeyPress);
  }, []);
  return {
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};
