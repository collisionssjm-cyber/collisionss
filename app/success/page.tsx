'use client';

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");

  return (
    <div>
      <h1>Payment Success</h1>
      <p>Session ID: {sessionId}</p>
    </div>
  );
}
