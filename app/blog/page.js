
import { Button } from "@/components/ui/button"
import blogs from '../../components/ApiData'
import Link from "next/link";

const Blog = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                blogs.slice(0,19).map((blog, index) => (
                    <div key={index} className=" shadow-md rounded-lg overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                            <p className=" mb-2">By {blog.author}</p>
                            <p className=" mb-2">{blog.category}</p>
                            <p className=" mb-4">{blog.description}</p>
                            
                                <Link href={`/blogpost/{blog.content}`}>
                            <Button  variant="outline">Read more</Button>
                            
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;