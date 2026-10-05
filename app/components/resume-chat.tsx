"use client";

import { useChat} from "@ai-sdk/react";
import { useState } from "react";

export function ResumeChat() {
  const [input, setInput] = useState("");

  const { messages, sendMessage } = useChat();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim()) return;

    await sendMessage({
      text: input,
    });

    setInput("");
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="min-h-[500px] rounded-xl border p-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.role === "user"
                ? "text-right"
                : "text-left"
            }`}
          >
            <div
              className={`inline-block rounded-lg px-4 py-2 ${
                message.role === "user"
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
            >
              {message.parts.map((part, index) =>
                part.type === "text" ? (
                  <span key={index}>{part.text}</span>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Isaac's experience..."
          className="flex-1 rounded-lg border px-4 py-3"
        />

        <button
          type="submit"
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}