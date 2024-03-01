import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Membership from './pages/Membership';
import Profile from './pages/Profile';
import Math from './pages/Math';
import MathReading from './pages/MathReading';
import ReadiToWright from './pages/ReadiToWright';
import Reading from './pages/Reading';
import Page404 from './pages/Page404';
import Lesson from './pages/Lesson';
import PageCongratulation from './pages/PageCongratulation';
import YearGradation from './pages/YearGradation';
import MathWeek from './pages/MathWeek';
import ReadiToWrightWeek from './pages/ReadiToWrightWeek';
import MathReadingWeek from './pages/MathReadingWeek';
import ReadingWeek from './pages/ReadingWeek';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "learning",
        element: <Learning />,
        children: [
          {path: "", element: <YearGradation />},
          { path: "math", 
          element: <Math />,
          children:[
            {
              path: "",
              element: <MathWeek/>,
            },
            {
              path: "lesson/:lessonId",
              element: <Lesson />,
            }, // Assuming Lesson handles lessonId dynamically
            {
              path: "lesson/:lessonId/congratulation",
              element: <PageCongratulation />,
            },
          ]
        },
          { path: "reading", element: <Reading />,
          children:[
            {
              path: "",
              element: <ReadingWeek/>,
            },
            {
              path: "lesson/:lessonId",
              element: <Lesson />,
            }, // Assuming Lesson handles lessonId dynamically
            {
              path: "lesson/:lessonId/congratulation",
              element: <PageCongratulation />,
            },
          ] },
          { path: "mathreading", element: <MathReading />,
          children:[
            {
              path: "",
              element: <MathReadingWeek/>,
            },
            {
              path: "lesson/:lessonId",
              element: <Lesson />,
            }, // Assuming Lesson handles lessonId dynamically
            {
              path: "lesson/:lessonId/congratulation",
              element: <PageCongratulation />,
            },
          ] },
          { path: "readitowrtight", element: <ReadiToWright />,
          children:[
            {
              path: "",
              element: <ReadiToWrightWeek/>,
            },
            {
              path: "lesson/:lessonId",
              element: <Lesson />,
            }, // Assuming Lesson handles lessonId dynamically
            {
              path: "lesson/:lessonId/congratulation",
              element: <PageCongratulation />,
            },
          ] },
           // Assuming PageCongratulation handles lessonId dynamically
        ],
      },
      { path: "membership", element: <Membership /> },
      { path: "aboutus", element: <Aboutus /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Page404 /> }, // Catch-all for unmatched routes
    ],
  },
]);

// ... rest of your app

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

