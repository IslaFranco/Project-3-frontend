import { Routes, Route } from 'react-router-dom';
import BlogIndex from '../pages/BlogIndex';
import BlogShow from '../pages/BlogShow'

function BlogMain(props) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<BlogIndex />} />
                <Route path="/blogs/:id" element={<BlogShow />} />
            </Routes>
        </main>
    );
  }
  
  export default BlogMain;