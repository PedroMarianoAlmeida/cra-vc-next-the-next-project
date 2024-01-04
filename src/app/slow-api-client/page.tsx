'use client'

import useSlowApi from "@/hooks/useSlowApi";

const SlowApiClientPage = () => {
  const loadedData = useSlowApi();
  return (
    <main>
      <h1>Slow API</h1>
      <>{loadedData}</>
    </main>
  );
};

export default SlowApiClientPage;
