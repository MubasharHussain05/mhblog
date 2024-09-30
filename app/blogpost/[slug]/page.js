export default function Page({ params }) {
    const blog = {
        title:"javaScript",
        author: "John Doe",
        content: "One thing is clear this year: generative AI is having a tremendous impact on the software industry, and a week doesn’t pass without software companies announcing their plans to incorporate the seem...",
        date: "2023-10-01",
        reading_time: "5 minutes"
    };

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{blog.title} </h1>
            <div className="mb-2">
                <span className="font-semibold">Reading Time: </span>{blog.reading_time}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Author: </span>{blog.author}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Date: </span>{blog.date}
            </div>
            <div 
                className="prose"
                dangerouslySetInnerHTML={{ 
                    __html: blog.content 
                }} 
            />
        </div>
    );
}