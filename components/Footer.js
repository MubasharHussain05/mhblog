export const Footer = () => {
    return (
        <div className="py-10">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
                <div className="grid mb-8 lg:grid-cols-6 gap-8">
                    <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                        {[
                            {
                                title: "Category",
                                items: ["News", "World", "Games", "Reference"],
                            },
                            {
                                title: "Apples",
                                items: ["Web", "E-commerce", "Entertainment", "Business", "Portfolio"],
                            },
                            {
                                title: "IT Services",
                                items: ["Next Js", "React Js", "Javascript", "Html", "Css"],
                            },
                            {
                                title: "Business",
                                items: ["Shopify", "E-commerce", "Web Developments", "Digital Marketing", "Personal"],
                            },
                        ].map((section, index) => (
                            <div key={index}>
                                <p className="font-medium tracking-wider ">{section.title}</p>
                                <ul className="mt-2 space-y-2">
                                    {section.items.map((item, idx) => (
                                        <li key={idx}>
                                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                        <p className="font-medium tracking-wider ">Contact</p>
                        <form className="mt-4 flex flex-col md:flex-row">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="flex-grow h-12 px-4 mb-3 transition duration-200 border  rounded shadow-sm md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-sm ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur iure beatae excepturi veritatis quia molestiae dolorem, quidem dignissimos minus voluptas sit, possimus cumque ut deleniti consequatur, nesciunt inventore ad!
                        </p>
                    </div>
                </div>
                <p className="mt-4 text-sm ">&copy; 2024 My Blog App. All Rights Reserved.</p>
            </div>
        </div>
    );
}