export default function Steper({ currentStep }) {
  const langkah = ["Umum", "Kategori", "Bantuan", "Konfirmasi Data"];
  return (
    <section className="py-4 flex justify-center ">
      <ul className="steps">
        {langkah.map((langkah, index) => (
          <li
            key={index}
            className={`step text-sm text-gray-600 ${
              index + 1 <= currentStep ? "step-primary" : ""
            }`}
          >
            {langkah}
          </li>
        ))}
      </ul>
    </section>
  );
}
