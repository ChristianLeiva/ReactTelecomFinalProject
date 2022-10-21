import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { BlogPage } from './../blog/BlogPage';


export const BlogRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<BlogPage/>}/>

            {/* authentication */}
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>

        </Routes>
    </>
  )
}
