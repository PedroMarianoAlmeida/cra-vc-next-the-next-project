"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ShowTime = ({ time }: { time: string }) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return <>{time}</>;
};

export default ShowTime;
