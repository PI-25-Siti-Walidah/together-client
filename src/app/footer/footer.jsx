'use client'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <section>
      <footer className='bg-[#6D123F] mb-16 lg:mb-0 lg:px-20'>
        <div className="px-8 py-10  text-white flex flex-col">
          <div className=' flex flex-row justify-between'>
          <div className="gap-3 flex flex-col flex-start">
            <h6 className='text-xl font-semibold'>Kontak</h6>
            <p className='text-[14px]'>
              Jl. Raya Majapahit 1, <br/>
              Jakarta together.info@gmail.com <br/>
              (+62)812-3456-8910
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <h6 className='text-xl font-semibold'>Sosial Media</h6>
            <div className='flex flex-row gap-1.5'>
              <EmailIcon />
              <InstagramIcon />
              <TelegramIcon />
              <YouTubeIcon />
            </div>
            <p className='text-[14px]'>ToGetHer Indonesia</p>
          </div>
        </div>
        <p className='text-center text-[14px] font-light pt-7'>Copyright © {new Date().getFullYear()} - All right reserved by Together Indonesia</p>
        </div>
      </footer>
    </section>
  );
}
