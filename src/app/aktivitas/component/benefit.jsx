import { Banknote, Package } from "lucide-react";

export default function Benefit() {
  return (
    <section className="w-full">
      <div className="px-2 md:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Tunai */}
          <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white">
            <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex items-center gap-2">
              <Banknote className="w-7 h-7 text-green-600" />
              Benefit Tunai
            </h3>
            <p className="text-xl font-bold text-gray-800">Rp. 4.000.000</p>
          </div>

          {/* Non-Tunai */}
          <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white">
            <h3 className="text-lg font-semibold text-[#6D123F] mb-3 flex items-center gap-2">
              <Package className="w-7 h-7 text-amber-600" />
              Benefit Non-Tunai
            </h3>
            <ul className="list-disc list-inside text-md font-semibold text-gray-800">
              <li>Voucher Sembako</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
