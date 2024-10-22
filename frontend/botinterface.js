import React, { useState } from 'react';
import { actor } from 'ic:trading-bot';

const BotControl = () => {
  const [status, setStatus] = useState('Berhenti');

  const startBot = async () => {
    setStatus('Berjalan');
    await actor.startBot();
  };

  return (
    <div>
      <h1>Status Bot Trading: {status}</h1>
      <button onClick={startBot}>Mulai Bot</button>
    </div>
  );
};

export default BotControl;
￼Enter
