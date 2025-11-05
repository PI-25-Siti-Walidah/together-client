"use client";
import { useState } from "react";

export default function TanyaAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    setAnswer("");

    const res = await fetch(
      "https://together-server-production.up.railway.app/her-ai",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      }
    );

    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow">
      <h2 className="font-semibold text-lg mb-3">
        💬 Tanya AI tentang Bantuan
      </h2>
      <textarea
        className="textarea textarea-bordered w-full bg-white"
        placeholder="Contoh: Saya butuh bantuan sembako di Surabaya"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      <button
        className="btn bg-[#6D123F] text-white mt-3"
        onClick={handleAsk}
        disabled={loading}
      >
        {loading ? "Memproses..." : "Tanya AI"}
      </button>

      {answer && (
        <div className="mt-4 p-3 bg-gray-50 border rounded-lg">
          <p className="text-gray-700 whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  );
}
