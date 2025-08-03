import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <section className="w-full h-screen flex flex-col justify-center bg-[url('/original.jpg')] bg-cover bg-bottom bg-no-repeat">
            <Navbar />
            <div className="flex flex-col items-center justify-center gap-y-4 mt-20">
                <h1 className="text-6xl text-center">Find Your Perfect Match</h1>
                <p className="text-[#777] text-center">
                    Whether you are buying, selling, or nothing. You will be happy.
                </p>
            </div>
            <div className="w-full flex items-center justify-center bg-white mt-auto rounded-tl-xl rounded-tr-xl py-10">
                <div className="w-full max-w-4/5 flex items-center justify-between">
                    <Select>
                        <SelectTrigger className="md:w-[180px] w-[65px] rounded-full border-gray-500 cursor-pointer">
                            <SelectValue placeholder="Select a building" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Buildings</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="md:w-[180px] w-[65px] rounded-full border-gray-500 cursor-pointer">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="md:w-[180px] w-[65px] rounded-full border-gray-500 cursor-pointer">
                            <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Location</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="md:w-[180px] w-[65px] rounded-full border-gray-500 cursor-pointer">
                            <SelectValue placeholder="Select a style" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Style</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button variant="primary">
                        Search
                    </Button>
                </div>
            </div>
        </section>
    )
}