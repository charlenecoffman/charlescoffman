import './App.css'
import { BookList } from './components/BookList'
import { Navbar } from './components/Navbar'
import { AboutAuthor } from './components/About'
import Splash from './components/Splash'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Splash/>
      <BookList />
      <AboutAuthor/>
      <Contact />
    </>
  )
}

export default App
