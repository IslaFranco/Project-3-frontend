import './App.css';
import StoneHeader from './components/StoneHeader';
import StoneMain from './components/StoneMain';
import BlogHeader from './components/BlogHeader';
import BlogMain from './components/BlogMain';
import ChakraHeader from './components/ChakraHeader';
import ChakraMain from './components/ChakraMain';

function App() {
  return (
    <div className="App">
      <StoneHeader />
      <StoneMain />
      <BlogHeader />
      <BlogMain />
      <ChakraHeader />
      <ChakraMain />
    </div>
  );
}

export default App;
