import React from 'react';
import { useRouter } from 'next/router';

import * as Yup from 'yup';
import ApplicationPage1 from './applicationPage1';
import ApplicationPage2 from './applicationPage2';
import ApplicationPage3 from './applicationPage3';
import ApplicationPage4 from './applicationPage4';

const MainAppForm = () => {
  const router = useRouter();
  const appId = router.query.appId;
  
  return (
    <div>
      {appId === 'page1' && <ApplicationPage1 />}
      {appId === 'page2' && <ApplicationPage2 />}
      {appId === 'page3' && <ApplicationPage3 />}
      {appId === 'page4' && <ApplicationPage4 />}
    </div>
  );
};

export default MainAppForm;