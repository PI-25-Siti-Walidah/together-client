export default function Steper({currentStep}) {
const langkah = ['Umum', 'Kategori', 'Bantuan', 'Konfirmasi Data'];
  return (
    <section className="p-8">
      <ul className="steps">
        {langkah.map((langkah, index)=>(
            <li
            key={index}
            className={`step ${index + 1 <= currentStep ? 'step-primary' : ''}`}>
                {langkah}
            </li>
        ))}
      </ul>
    </section>
  );
}
