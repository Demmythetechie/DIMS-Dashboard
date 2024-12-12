import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Course from './pages/Courses';
import Result from './pages/Result';
import FacultyPage from './pages/Faculty';
import EventNewsPage from './pages/Event-News';
import ResourcesPage from './pages/Resources';
import AdminHome from './pages/AdminHome';
import AdminCourses from 'pages/adminCourses';
import AdminResource from 'pages/adminResources';
import AdminLecturer from 'pages/adminLecturer';
import AdminStudent from 'pages/adminStudent';
import AdminFaculty from 'pages/adminFaculty';
import AdminEventNews from 'pages/adminEventsNews';
import AdminResult from 'pages/adminResult';
import ManageUsers from './pages/AdminUsers';


const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [role, setRole] = useState('admin'); // Example role, could be dynamically fetched

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isMinimized={false}
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
          role={role} // Passing the role prop to Sidebar
        />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Topbar */}
          <Topbar toggleSidebar={toggleSidebar} />

          {/* Scrollable content */}
          <div className="flex-1 p-6 overflow-y-auto bg-white">
            <Routes>
              {/* Routes for student */}
              {role === 'student' && (
                <>
                  <Route path="/student/home" element={<Home />} />
                  <Route path="/student/course" element={<Course />} />
                  <Route path="/student/result" element={<Result />} />
                  <Route path="/student/faculty" element={<FacultyPage />} />
                  <Route path="/student/events-news" element={<EventNewsPage />} />
                  <Route path="/student/resources" element={<ResourcesPage />} />
                </>
              )}

              {/* Routes for admin */}
              {role === 'admin' && (
                <>
                  <Route path="/admin/home" element={<AdminHome />} />
                  <Route path="/admin/course" element={<AdminCourses />} />
                  <Route path="/admin/resources" element={<AdminResource />} />
                  <Route path="/admin/lecturer" element={<AdminLecturer />} />
                  <Route path="/admin/student" element={<AdminStudent />} />
                  <Route path="/admin/events-news" element={<AdminEventNews />} />
                  <Route path="/admin/faculty" element={<AdminFaculty />} />
                  <Route path="/admin/result" element={<AdminResult />} />
                  <Route path="/admin/users" element={<ManageUsers />} />
                </>
              )}

              {/* Routes for faculty */}
              {role === 'lecturer' && (
                <>
                  <Route path="/lecturer/home" element={<Course />} />
                  <Route path="/lecturer/courses" element={<ResourcesPage />} />
                  <Route path="/lecturer/performance" element={<EventNewsPage />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;