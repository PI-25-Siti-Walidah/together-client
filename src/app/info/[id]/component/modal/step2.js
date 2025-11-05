export default function Step2({pertanyaan, data, handleChange, errors}){
    return(
        <section>
            <div className="my-4 px-6">
            <h3 className="font-semibold text-center mb-1.5">Jenis Bantuan</h3>
            {pertanyaan.map((pertanyaan)=> (
                <fieldset key={pertanyaan.id} className="fieldset mb-1">
                    <legend className="fieldset-legend">{pertanyaan.label}</legend>
                    {pertanyaan.type=== 'select'?(
                        <select 
                        id={pertanyaan.id} 
                        name={pertanyaan.id}
                        className="select w-full border rounded-sm p-3"
                        value={data[pertanyaan.id] || ''}
                        onChange={handleChange}>
                            {pertanyaan.options && pertanyaan.options.map((option) => (
                                <option key={option} value={option}>
                                {option}
                                </option>
                            ))}
                        </select>
                    ): pertanyaan.type === 'radio' ? (
                        <div className="flex gap-6">
                            <label>Ya</label>
                            <input type="radio" 
                            id={pertanyaan.id}
                            name={pertanyaan.id} 
                            value="true"
                            className="radio radio-primary border" 
                            onChange={handleChange}
                            required={pertanyaan.required}
                            checked={data[pertanyaan.id] === true}/>
                            <label>Tidak</label>
                            <input 
                            type="radio" 
                            id={pertanyaan.id}
                            name={pertanyaan.id} 
                            value="false"
                            className="radio radio-primary border" 
                            onChange={handleChange}
                            required={pertanyaan.required}
                            checked={data[pertanyaan.id] === false}/>
                            </div>
                    ): pertanyaan.type === 'checkbox' ? (
                        <input 
                        type="checkbox" 
                        id={pertanyaan.id}
                        name={pertanyaan.id}
                        required={pertanyaan.required}
                        checked={data[pertanyaan.id] || false}
                        onChange={handleChange} 
                        className="checkbox checkbox-primary border" />
                    ): pertanyaan.type === 'date' ? (
                        <input type="date"
                        id={pertanyaan.id}
                        name={pertanyaan.id}
                        className={`input h-10 w-full border rounded-m`}
                        required={pertanyaan.required} 
                        value={data[pertanyaan.id] || ''}
                        onChange={handleChange}
                        placeholder="Klik disini untuk mengisi formulir"/>
                    ): (
                    <input 
                    type={pertanyaan.type} 
                    id={pertanyaan.id}
                    name={pertanyaan.id}
                    className={`input h-10 w-full border rounded-md`}
                    required={pertanyaan.required} 
                    value={pertanyaan.type !== 'file' ? data[pertanyaan.id] || '' : undefined}
                    onChange={handleChange}
                    placeholder="Klik disini untuk mengisi formulir"/> 
                )}
                {errors[pertanyaan.id] && (
                    <p className="text-red-500 text-xs mt-1">{errors [pertanyaan.id]}</p>
                )}
                </fieldset>
            ))}
        </div>
        </section>
    )
}