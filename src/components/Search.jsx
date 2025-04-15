import React from 'react'

const Search = ({ search, setSearch, submitTask }) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        submitTask(search);
        setSearch('');
    }
return (
    <form action="" onSubmit={handleSubmit} className="flex justify-center my-5">
        <div className="flex justify-center my-5">
            <div className="relative w-72">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 pl-10 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                />
                <img
                    src="https://img.icons8.com/ios-filled/50/000000/search.png"
                    alt="search-icon"
                    className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                />
            </div>
        </div>
    </form>
)
}

export default Search
