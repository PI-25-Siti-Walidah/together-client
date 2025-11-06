import { Banknote, Package } from 'lucide-react'

export default function Benefit() {
    return (
        <section>
            <div className='px-2 md:px-12 lg:px-24'>
                {/* Ringkasan Utama */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 items-stretch">
                    {/*Tunai*/}
                    <div className="border lg:w-150 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex items-center gap-2">
                        <Banknote className="w-8 h-8 text-green-600" />
                        Benefit Tunai
                        </h3>
                        <p className="text-2xl font-bold text-gray-800">Rp. 4.000.000</p>
                    </div>

                    {/*Non-Tunai*/}
                    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex items-center gap-2">
                        <Package className="w-8 h-8 text-amber-600" />
                        Benefit Non Tunai
                        </h3>
                        <div className='px-5'>
                            <li className="text-md font-bold text-gray-800">Voucher Sembako</li>
                            <li className="text-md font-bold text-gray-800">Pelatihan</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}