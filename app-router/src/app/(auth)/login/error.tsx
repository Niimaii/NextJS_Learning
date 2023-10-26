'use client';

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.log('test', error);
  return (
    <div>
      error <button onClick={() => reset()}>Try Again</button>
      <h1>{error.message}</h1>
    </div>
  );
};

export default error;
