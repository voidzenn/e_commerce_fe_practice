import { useState } from 'react';

export const Pusher = () => {
  const [message, setMessage] = useState<string>('');

  return <div>{message}</div>;
};
