import ShowTime from "./ShowTime";

export const dynamic = "force-dynamic";

const SlowApiPage = async () => {
  const response = await fetch(
    "https://5rgdpun4qtidue3qwfhoc3vesm0ronor.lambda-url.us-east-2.on.aws/"
  );
  const data = await response.json();

  return (
    <main>
      <h1>Slow API</h1>
      <ShowTime time={data.message} />
    </main>
  );
};

export default SlowApiPage;
