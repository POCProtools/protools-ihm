// eslint-disable-next-line import/no-extraneous-dependencies

import type { RouteObject } from 'react-router-dom';
import Home from '../../components/pages/home/Home';
import Visualize from '../../components/pages/visualize/Visualize';
import Launch from "../../components/pages/launch/Launch";
import UploadFile from '../../components/shared/tasks/UploadFile/UploadFile';
import ValidateTask from '../../components/shared/tasks/ValidationTask/ValidationTask';
import NotFound from '../../components/pages/notFound/NotFound';

// Temp routing
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/visualize/:id/:processDefinitionId",
    element: <Visualize />,
  },
  {
    path: "/launch",
    element: <Launch />,
  },
  {
    path: "/upload-context/:taskId",
    element: <UploadFile />,
  },
  {
    path: "/validation-task/:taskId",
    element: <ValidateTask />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
