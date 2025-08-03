import Card from "./Card";
import { FaHouse } from "react-icons/fa6";


export default function Main() {
    return (
        <main className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-4/5 mx-auto mt-20">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl">Buy</h1>
                    <p className="flex items-center justify-center gap-x-2">
                        <FaHouse className="size-5 text-yellow-700" />
                        <span className="text-[#737373]">
                            You can have on your dream house.
                        </span>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 mt-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="w-full max-w-4/5 mt-20">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl">Rent</h1>
                    <p className="flex items-center justify-center gap-x-2">
                        <FaHouse className="size-5 text-yellow-700" />
                        <span className="text-[#737373]">
                            You can rent a beautiful house.
                        </span>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 mt-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </main>
    );
}