export default function Step2({pertanyaan, data}){
    return(
        <section>
            <section className="my-4 px-6">
            <h3 className="font-semibold text-center mb-1.5">Jenis Bantuan</h3>
            {pertanyaan.map((pertanyaan)=> (
                <fieldset key={pertanyaan.id} className="fieldset mb-3">
                    <legend className="fieldset-legend">{pertanyaan.label}</legend>
                    <input 
                    type={pertanyaan.type} 
                    className={`input input-primary h-10 w-full ${pertanyaan.type === 'file' ? 'file-input file-input-primary' : ''}`}
                    required={pertanyaan.required} />
                </fieldset>
            ))}
        </section>
        </section>
    )
}