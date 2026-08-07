import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Header from './components/HeaderComponent/Header';
import Nav from './components/NavComponent/Nav';
import Banner from './components/BannerComponent/Banner';
import Home from './components/HomeComponent/Home';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Blog from './components/BlogComponent/Blog';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import StudentDashboard from './components/StudentDashboardComponent/StudentDashboard';
import AdminDashboard from './components/AdminDashboardComponent/AdminDashboard';
import InstructorDashboard from './components/InstructorDashboardComponent/InstructorDashboard';
import Footer from './components/FooterComponent/Footer';
import Logout from './components/LogoutComponent/Logout';
import ManageUser from './components/ManageUserComponent/ManageUser';
import ManageInstructor from './components/ManageInstructorComponent/ManageInstructor';
import EpAdmin from './components/EpAdminComponent/EpAdmin';
import CpAdmin from './components/CpAdminComponent/CpAdmin';
import EpStudent from './components/EpStudentComponent/EpStudent';
import CpStudent from './components/CpStudentComponent/CpStudent';
import EpInstructor from './components/EpInstructorComponent/EpInstructor';
import CpInstructor from './components/CpInstructorComponent/CpInstructor';
import AddCourse from './components/AddCourseComponent/AddCourse';
import ManageCourse from './components/ManageCourseComponent/ManageCourse'
import Course from './components/CourseComponent/Course';
import CourseDetailPage from './components/CourseDetailPageComponent/CourseDetailPage';
import MyCourse from './components/MyCourseComponent/MyCourse';
import StudentMyCourse from './components/StudentMyCourseComponent/StudentMyCourse';
import StudentLearn from './components/StudentLearnComponent/StudentLearn';
import CourseEditor from './components/CourseEditorComponent/CourseEditor';
import AddQuiz from './components/AddQuizInstructorComponent/AddQuiz';
import StudentQuiz from './components/StudentQuizComponent/StudentQuiz';
import UpdateCourse from './components/UpdateCourseComponent/UpdateCourse';
import CourseContent from './components/CourseContentComponent/CourseContent';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <Nav />

      <main>

        {location.pathname === "/" && <Banner />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/student' element={<StudentDashboard />} />
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/instructor' element={<InstructorDashboard />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/manageuser' element={<ManageUser />} />
          <Route path='/Manageinstructor' element={<ManageInstructor />} />
          <Route path='/epadmin' element={<EpAdmin />} />
          <Route path='/cpadmin' element={<CpAdmin />} />
          <Route path='/epstudent' element={<EpStudent />} />
          <Route path='/cpstudent' element={<CpStudent />} />
          <Route path='/epinstructor' element={<EpInstructor />} />
          <Route path='/cpinstructor' element={<CpInstructor />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/managecourse' element={<ManageCourse />} />
          <Route path='/course' element={<Course />} />
          <Route path='/coursedetail/:id' element={<CourseDetailPage />} />
          <Route path="/mycourse" element={<MyCourse />} />
          <Route path="/studentmycourse" element={<StudentMyCourse />} />
          <Route path="/learn/:id" element={<StudentLearn />} />
          <Route path="/courseEditor/:id" element={<CourseEditor />} />
          <Route path="/addquiz/:id" element={<AddQuiz />} />
          <Route path="/quiz/:id" element={<StudentQuiz />} />
          <Route path="/updatecourse/:id" element={<UpdateCourse />} />
          <Route path="/coursecontent/:id" element={<CourseContent />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
