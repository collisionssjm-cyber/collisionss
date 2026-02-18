"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessContent() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");

  return (
    <div>
      <h1>Success</h1>
      <p>Your payment was processed.</p>
      {sessionId && <p>Session ID: {sessionId}</p>}
    </div>
  );
}
