import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-black text-white p-10 flex flex-col items-center">
            <Image src='/logo-dark.png' width={290} height={105} />
            <div className='mt-5'>Email Inquiries: palygunnmathcamp@gmail.com</div>
            <div>©{new Date().getFullYear()}</div>
        </div>
    )
}