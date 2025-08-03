import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Card() {
    return (
        <div className="w-full h-[500px] mt-10 relative group transition-all duration-500">
            <Image src="/home.jpg" alt="Home" fill className="w-full h-[500px] object-cover rounded-2xl absolute top-0 left-0 transition-all duration-500" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/65 bg-opacity-40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-full absolute px-4 left-0 bottom-5 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 text-white">
                <h1 className="text-white text-2xl">Luxury Modern Villa</h1>
                <div className="mt-5">
                    <p className="text-[#dbdbdb]">
                        Location: İstanbul
                    </p>
                    <p className="text-[#dbdbdb]">
                        Price: $1.000.000
                    </p>
                </div>
                <div className="mt-5">
                    <Button variant="primary" className="w-full">
                        Details
                    </Button>
                </div>
            </div>
        </div>
    );
}