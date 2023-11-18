import Home from '../Pages/Home/index';
import About from '../Pages/About/index';
import Contact from '../Pages/Contact/index';
import ErrorPage from '../Pages/ErrorPage/index';
import Job from '../Pages/Job/index';
import News from '../Pages/News/index';
import NewsDetail from '../Pages/NewsDetail/index';
import Projects from '../Pages/Projects/index';
import ProjectsDetail from '../Pages/ProjectsDetail/index';
import Services from '../Pages/Services/index';
import ServicesDetail from '../Pages/ServicesDetail/index';


export const MyRoutes = [
    { id: 1, path: '/', element: <Home />, title: 'Əsas səhifə' },
    { id: 2, path: '/about', element: <About />, title: 'Haqqımızda' },
    { id: 3, path: '/contact', element: <Contact />, title: 'Əlaqə' },
    { id: 4, path: '/errorPage', element: <ErrorPage />, title: '' },
    { id: 5, path: '/job', element: <Job />, title: 'Vakansiyalar' },
    { id: 6, path: '/news', element: <News />, title: 'Xəbərlər' },
    { id: 7, path: '/newsDetail', element: <NewsDetail />, title: '' },
    { id: 8, path: '/projects', element: <Projects />, title: 'Layihələr' },
    { id: 9, path: '/projectsDetail', element: <ProjectsDetail />, title: '' },
    { id: 10, path: '/services', element: <Services />, title: 'Xidmətlər' },
    { id: 11, path: '/servicesDetail', element: <ServicesDetail />, title: '' },
];