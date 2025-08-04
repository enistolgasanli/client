import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <section className="w-full h-screen flex flex-col justify-center bg-[linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0.5)),url('/header-image.jpg')] bg-cover bg-center bg-no-repeat">
            <Navbar />
            <div className="flex flex-col items-center justify-center gap-y-4 md:mt-50 mt-20">
                <h1 className="text-6xl text-center text-white">Find Your Perfect Match</h1>
                <p className="text-[#dbdbdb] text-center">
                    Whether you are buying, selling, or nothing. You will be happy.
                </p>
                <Button variant="primary">
                    Explore now
                </Button>
            </div>
            <div className="w-full flex items-center justify-center bg-white mt-auto rounded-tl-xl rounded-tr-xl py-10">
                <div className="w-full max-w-4/5 flex md:flex-row flex-col items-center justify-between gap-y-4">
                    <Select>
                        <SelectTrigger className="md:w-[180px] w-full rounded-full border-gray-500 cursor-pointer">
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
                        <SelectTrigger className="md:w-[180px] w-full rounded-full border-gray-500 cursor-pointer">
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
                        <SelectTrigger className="md:w-[180px] w-full rounded-full border-gray-500 cursor-pointer">
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
                        <SelectTrigger className="md:w-[180px] w-full rounded-full border-gray-500 cursor-pointer">
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
                    <Button variant="primary" className="md:w-[180px] w-full">
                        Search
                    </Button>
                </div>
            </div>
        </section>
    )
}