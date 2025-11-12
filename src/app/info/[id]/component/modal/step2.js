export default function Step1({ pertanyaan, data, handleChange, errors }) {
  return (
    <section className="my-4 px-4 sm:px-6">
      <h3 className="font-semibold text-center text-[#6D123F] mb-2">
        Jenis Bantuan
      </h3>

      {pertanyaan.map((pertanyaan) => (
        <fieldset key={pertanyaan.id} className="mb-4">
          <legend className="text-sm font-medium text-gray-700 mb-1">
            {pertanyaan.label}
          </legend>

          {pertanyaan.type === "select" ? (
            <select
              id={pertanyaan.id}
              name={pertanyaan.id}
              className="select w-full bg-white border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-[#6D123F]"
              value={data[pertanyaan.id] || ""}
              onChange={handleChange}
            >
              {pertanyaan.options &&
                pertanyaan.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          ) : pertanyaan.type === "radio" ? (
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  id={pertanyaan.id}
                  name={pertanyaan.id}
                  value="true"
                  className="radio radio-primary border-[#6D123F]"
                  onChange={handleChange}
                  checked={data[pertanyaan.id] === true}
                />
                <span>Ya</span>
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  id={pertanyaan.id}
                  name={pertanyaan.id}
                  value="false"
                  className="radio radio-primary border-[#6D123F]"
                  onChange={handleChange}
                  checked={data[pertanyaan.id] === false}
                />
                <span>Tidak</span>
              </label>
            </div>
          ) : pertanyaan.type === "checkbox" ? (
            <input
              type="checkbox"
              id={pertanyaan.id}
              name={pertanyaan.id}
              checked={data[pertanyaan.id] || false}
              onChange={handleChange}
              className="checkbox checkbox-primary border-[#6D123F]"
            />
          ) : (
            <input
              type={pertanyaan.type}
              id={pertanyaan.id}
              name={pertanyaan.id}
              value={
                pertanyaan.type !== "file"
                  ? data[pertanyaan.id] || ""
                  : undefined
              }
              onChange={handleChange}
              placeholder="Klik disini untuk mengisi formulir"
              className="input w-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500 rounded-md focus:ring-2 focus:ring-[#6D123F]"
            />
          )}

          {errors[pertanyaan.id] && (
            <p className="text-red-500 text-xs mt-1">{errors[pertanyaan.id]}</p>
          )}
        </fieldset>
      ))}
    </section>
  );
}
