import { Upload, MessageSquare } from "lucide-react";
export default function Button(){
    const status = "Diterima";

    const renderButton = () => {
        if (status === "Diterima") {
            return (
                <button className="btn w-full md:w-150 bg-[#6D123F] rounded-xl text-white border-none hover:bg-pink-600">
                    <Upload size={18} />
                    <span>Kirim Bukti Penerimaan</span>
                </button>
            );
        }
        if (status === "Selesai") {
            return (
                <button className="btn w-full md:w-150 bg-[#6D123F] rounded-xl text-white border-none hover:bg-pink-600">
                    <MessageSquare size={18} />
                    <span>Kirim Testimoni</span>
                </button>
            );
        }
    return null;
};
    return(
        <section className="mt-4 flex justify-center">
            {renderButton()}
        </section>
    )
}