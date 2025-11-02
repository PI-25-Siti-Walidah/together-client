export default function Testi({testimoni}) {

  return (
    <section className="mt-3">
      <div className="card bg-base-100 lg:w-md card-md shadow-sm p-5">
        <div className="grid gap-3 max-w-6xl mx-auto ">
          {testimoni.map((t, i) => (
            <div key={i} className="card bg-gray-50 shadow rounded-lg p-6">
              <p className="text-sm text-gray-700 mb-4">“{t.quote}”</p>
              <div className="text-sm font-medium text-gray-900">- {t.name}, {t.domisili}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
