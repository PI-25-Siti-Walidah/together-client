"use client";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Card from "../beranda/card";

export default function TanyaAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) {
      setError("Silakan ketik pertanyaan terlebih dahulu.");
      return;
    }

    setLoading(true);
    setAnswer("");
    setRelated([]);
    setError("");

    try {
      const res = await fetch(
        "https://together-server-production.up.railway.app/her-ai",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Terjadi kesalahan, coba lagi nanti.");
      } else {
        setAnswer(data.answer || "Tidak ada jawaban.");
        setRelated(data.related || []);
      }
    } catch (err) {
      setError(
        "Gagal menghubungi server HerAI. Pastikan koneksi internet stabil."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="flex flex-col min-h-[calc(100vh-70px)] bg-[#FFF9F7] pt-[70px] px-4 sm:px-6 lg:px-8">
        <section className="max-w-2xl bg-white mx-auto mt-16 mb-12 p-4 sm:p-6 border rounded-2xl shadow-sm">
          <h2 className="font-bold text-2xl text-[#6D123F] mb-3 text-center">
            💬 Tanya Her AI
          </h2>
          <p className="text-gray-600 text-center text-sm mb-5">
            Tanyakan apa saja seputar bantuan atau fitur di website{" "}
            <b>ToGetHer</b>.
          </p>

          <div className="flex flex-col gap-3">
            <textarea
              className="textarea w-full bg-white text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
              placeholder="Contoh: Saya butuh bantuan pendidikan untuk anak saya"
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>

            <button
              className="btn bg-[#6D123F] text-white border-none hover:bg-pink-600 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={handleAsk}
              disabled={loading}
            >
              {loading ? "Memproses..." : "Tanya HerAI"}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {answer && (
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {answer}
              </p>
            </div>
          )}
        </section>

        {related.length > 0 && (
          <section className="max-w-6xl mx-auto mt-4 mb-20">
            <h3 className="text-xl font-semibold text-[#6D123F] mb-4 text-center">
              Bantuan yang Mungkin Anda Cari
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <Card key={item._id} item={item} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
