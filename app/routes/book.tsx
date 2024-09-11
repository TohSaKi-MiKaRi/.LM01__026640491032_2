import { books } from "./data";
import { useState } from "react";

export default function Profile ({
    Code, Title, Cover, Description, Author, Publishing, Price, Bestsellers, Suggestions, Category
}: {
    Code: string, Title: string, Cover: string, Description: string, Category: string, Author: string, Publishing: string, Price: string, Bestsellers: boolean, Suggestions: boolean
}) {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
           <div className="h-48 lg:h-auto lg:w-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img src={Cover} alt={Title} className="w-full h-full object-cover" />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{Title}</div>
                    <pre className="text-gray-700 text-base">{Description}</pre>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-600">Category: {Category}</p>
                        <p className="text-gray-900 leading-none">Author: {Author}</p>
                        <p className="text-gray-600">Published by: {Publishing}</p>
                        <p className="text-gray-600">Price: {Price}</p>
                        <p className="text-gray-600">Bestseller: {Bestsellers ? "#ขายดี" : "-"}</p>
                        <p className="text-gray-600">Suggestion: {Suggestions ? "#เเนะนำ" : "ไม่แนะนำ"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Mycard() {
    const [status, setStatus] = useState<'bestsellers' | 'suggestions'>('bestsellers');
    const name = "หนังสือที่ขายดีและแนะนำ";

    const filteredBooks = books.filter(book =>
        status === 'bestsellers' ? book.Bestsellers : book.Suggestions
    );

    const bookItems = filteredBooks.map(book => (
        <Profile
            Code={book.Code}
            Title={book.Title}
            Cover={book.Cover}
            Description={book.Description}
            Category={book.Category}
            Author={book.Author}
            Publishing={book.Publishing}
            Price={book.Price}
            Bestsellers={book.Bestsellers}
            Suggestions={book.Suggestions} 
            key={book.Code}
        />
    ));

    function handleClickBestsellers() {
        setStatus('bestsellers');
    }

    function handleClickSuggestions() {
        setStatus('suggestions');
    }

    return (
        <div className="m-3 bg-blue-400 p-10">
            <h1 className="text-3xl">ParitShop: {name}</h1>
            <div className="flex flex-row mb-4">
                <button
                    className={`basis-1/2 m-2 p-3 rounded-3xl ${status === 'bestsellers' ? 'bg-pink-400 text-white' : 'bg-green-300 text-black'}`}
                    onClick={handleClickBestsellers}
                >
                    สินค้าขายดี
                </button>
                <button
                    className={`basis-1/2 m-2 p-3 rounded-3xl ${status === 'suggestions' ? 'bg-pink-400 text-white' : 'bg-green-300 text-black'}`}
                    onClick={handleClickSuggestions}
                >
                    สินค้าแนะนำ
                </button>
            </div>
            <div>
                {bookItems.length > 0 ? bookItems : <p>No books found for the selected status.</p>}
            </div>
        </div>
    );
}