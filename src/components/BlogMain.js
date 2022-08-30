import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogIndex from '../pages/BlogIndex';
import BlogShow from '../pages/BlogShow'

function BlogMain(props) {

    const [ blog, setBlog ] = useState(null);

    const API_URL = 'http://localhost:3001/blogs/blog';

    const getBlog = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setBlog(data);
        } catch (error) {
            //to do add logic or task
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/blogs" element={<BlogIndex blog={blog} />} />
                <Route path="/blogs/:id" element={<BlogShow />} />
            </Routes>
        </main>
    );
  }
  
  export default BlogMain;