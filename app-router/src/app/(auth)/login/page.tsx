import axios from 'axios';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  await wait(1000);

  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  throw new Error('crashed');

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
