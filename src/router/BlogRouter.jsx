import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { NewArticle } from "../blog/NewArticle";
import { BlogPage } from './../blog/BlogPage';
import { ArticleView } from './../blog/ArticleView';
import { Navbar } from "../components/Navbar";
import { ArticleEditing } from "../blog/ArticleEditing";
import { UserPage } from './../blog/UserPage';
import { Footer } from "../components/Footer";



export const BlogRouter = () => {
  return (
    <>
        <Navbar />
        <div >
          <Routes>
              <Route path="/*" element={<Navigate to="/home"/>}/>
              <Route path="/home" element={<BlogPage/>}/>
              <Route path="/articleView/:id" element={<ArticleView/>}/>
              <Route path="/articleEditing" element={<ArticleEditing/>}/>
              <Route path="/newArticle" element={<NewArticle/>}/>
              <Route path="/userPage" element={<UserPage/>}/>
              

              {/* authentication */}
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
          </Routes>

        </div>
        <Footer/>
    </>
  )
}
