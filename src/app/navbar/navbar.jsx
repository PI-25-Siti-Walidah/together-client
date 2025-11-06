import Mobile from "./mobile"
import Desktop from "./dekstop"

export default function Navbar() {
  return (
    <>
      {/* tampilkan hanya di desktop */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Desktop />
      </div>

        {/* tampilkan hanya di mobile */}
      <div className="md:hidden bg-white border-t shadow-lg">
        <Mobile />
      </div>

    </>
  )
}