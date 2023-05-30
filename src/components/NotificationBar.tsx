import React, { useState, useEffect } from 'react';
import ButtonDefault from './ButtonDefault';
import './notification-bar.css';

const NotificationBar = () => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const notificationStatus = sessionStorage.getItem('notificationStatus');
    if (notificationStatus === 'closed') {
      setShowNotification(false);
    }
  }, []);

  const handleClose = () => {
    setShowNotification(false);
    sessionStorage.setItem('notificationStatus', 'closed');
  };

  return showNotification ? (
    <div className='notification-bar'>
      <button className='close-button' onClick={handleClose}>
        Fechar X
      </button>
      <span className='notification-text'>
        Não limite sua criatividade, junte-se à família Blocks por apenas <strong>BRL 19,99</strong>
      </span>
      <ButtonDefault text='Quero ser Premium' />
    </div>
  ) : null;
};

export default NotificationBar;
