export default function Step3({pertanyaan, data, handleChange}){
    return(
        <section>
            <div className="my-4 px-6">
            <h3 className="font-semibold text-center mb-1.5">Rincian Pengajuan</h3>
            {pertanyaan.map((pertanyaan)=> (
                <fieldset key={pertanyaan.id} className="fieldset mb-3">
                    <legend className="fieldset-legend">{pertanyaan.label}</legend>
                    <input 
                    type={pertanyaan.type} 
                    id={pertanyaan.id}
                    name={pertanyaan.id}
                    className={`input h-10 w-full border rounded-md`}
                    required={pertanyaan.required} 
                    value={pertanyaan.type !== 'file' ? data[pertanyaan.id] || '' : undefined}
                    onChange={handleChange}
                    placeholder="Klik disini untuk mengisi formulir"/>
                </fieldset>
            ))}
        </div>
        </section>
    )
}