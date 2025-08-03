import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { TbMenuDeep } from "react-icons/tb";

export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="max-w-4/5 mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={80} height={80} />
                </Link>
                <ul className="hidden md:flex items-center justify-center gap-x-4">
                    <li>
                        <Link href="#" className="px-4 py-3 hover:bg-gray-200 rounded-full transition-all duration-150">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="px-4 py-3 hover:bg-gray-200 rounded-full transition-all duration-150">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="px-4 py-3 hover:bg-gray-200 rounded-full transition-all duration-150">
                            Properties
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="px-4 py-3 hover:bg-gray-200 rounded-full transition-all duration-150">
                            Services
                        </Link>
                    </li>
                </ul>
                <Link href="#" className="hidden md:block px-4 py-3 bg-yellow-700 hover:bg-yellow-900 text-white rounded-full transition-all duration-150">
                    Contact us
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <TbMenuDeep className="size-7 text-yellow-700 block md:hidden cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-center">
                        <SheetTitle className="hidden" />
                        <Link href="/">
                            <Image src="/logo.png" alt="Logo" width={80} height={80} />
                        </Link>
                        <ul className="flex flex-col items-center justify-center gap-y-8">
                            <li>
                                <Link href="#" className="px-4 py-3 hover:bg-gray-200 rounded-full transition-all duration-150">
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-4 py-3 hover:bg-gray-200 rounded-full transition-all duration-150">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-4 py-3 hover:bg-gray-200 rounded-full transition-all duration-150">
                                    Hizmetlerimiz
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-4 py-3 hover:bg-gray-200 rounded-full transition-all duration-150">
                                    Servislerimiz
                                </Link>
                            </li>
                        </ul>
                        <Link href="#" className="px-4 py-3 bg-yellow-700 hover:bg-yellow-900 text-white rounded-full transition-all duration-150">
                            Contact us
                        </Link>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}