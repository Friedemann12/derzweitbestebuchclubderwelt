import { resolve } from "path";
import { useEffect } from 'react'
import useSWR from 'swr'
import axios from "axios";

const initialLoadedBooks = 2;

export default async function BookCarousell() {
    const url = "http://localhost:3000/api/getNextBook"
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR('http://localhost:3000/api/getNextBook', fetcher);

    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;

    return (<div className='w-full flex justify-around items-center bg-white'>
        <p><span className="chevron left"></span></p>
        <div className="w-book h-book drop-shadow-book bookCover">
            <div className="bookside front">
                <img className="w-book h-book" src={data.imagePath} alt={data.name} />
            </div>
            <div className="bookside back w-book h-book bg-gray-100">

                <div className="p-8">
                    <h1 className="text-2xl">{data.name}</h1>
                    <h2 className="italic pb-2">{data.author} - {data.releaseDate.toDateString()}</h2>
                    <p className="overflow-y-auto max-h-klappentext">{data.klappentext}</p>
                </div>
            </div>
        </div>
        <p><span className="chevron right"></span></p>
    </div>)
};
