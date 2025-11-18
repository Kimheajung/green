// import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
// import { AllEnterpriseModule, LicenseManager } from 'ag-grid-enterprise';
// ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

import 'ag-grid-enterprise';
// import { LicenseManager } from 'ag-grid-enterprise';
import { ModuleRegistry } from 'ag-grid-community'; // ModuleRegistry는 community에서 가져와도 됨
import { LicenseManager, AllEnterpriseModule } from 'ag-grid-enterprise';
LicenseManager.setLicenseKey(
  'Using_this_{AG_Grid}_Enterprise_key_{AG-105090}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{CIT_CO.,_Ltd}_is_granted_a_{Multiple_Applications}_Developer_License_for_{4}_Front-End_JavaScript_developers___All_Front-End_JavaScript_developers_need_to_be_licensed_in_addition_to_the_ones_working_with_{AG_Grid}_Enterprise___This_key_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_{AG_Grid}_Enterprise_versions_released_before_{14_November_2026}____[v3]_[01]_MTc5NDYxNDQwMDAwMA==1195a6d5489c5d8fda25776bfbfb07fb'
);
ModuleRegistry.registerModules([AllEnterpriseModule]); // CommunityModule 제거!
console.log('License set:', LicenseManager.getLicenseDetails());

/* 초창기 버젼
import 'react-app-polyfill/ie11';
import './tailwind.css';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; // 테마
import 'primereact/resources/primereact.min.css'; // 코어
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';

//import './assets/demo/flags/flags.css';
//import './assets/demo/Demos.scss';
import './App.scss';
import '@components/aggrid/grid.css';
import './index.css';
import './assets/layout/layout.scss';

 */


/* 1️⃣ Polyfill (가장 먼저) ==================순서 변경 금지 ====================*/
import 'react-app-polyfill/ie11';

/* 2️⃣ Framework-level CSS (가장 먼저 적용되는 기본값) // Tailwind: utility-first, 글로벌 reset도 일부 포함됨 */
import './tailwind.css'; 

/* 3️⃣ PrimeReact 테마 및 핵심 스타일 */
import 'primereact/resources/themes/lara-light-cyan/theme.css'; // PrimeReact 테마
import 'primereact/resources/primereact.min.css'; // PrimeReact 코어
import 'primeflex/primeflex.css'; // PrimeFlex (Grid/Flex 유틸)
import 'primeicons/primeicons.css'; // PrimeIcons (아이콘)

/* 4️⃣ AG Grid (테마 + 레이아웃) */
import '@components/aggrid/grid.css'; // 당신의 커스텀 AG Grid CSS (ag-theme-alpine 등 포함 가능)

/* 5️⃣ 외부 라이브러리 스타일 */
import 'prismjs/themes/prism-coy.css'; // 코드 하이라이터 테마 등

/* 6️⃣ 프로젝트 전역 SCSS (이 아래가 가장 우선순위 높음) */
import './assets/layout/layout.scss'; // 레이아웃 관련 (PrimeReact 덮어쓰기)
import './App.scss'; // 페이지 전반 스타일
import './index.css'; // 마지막 글로벌 오버라이드 (폰트, 색상 등)




// import './index.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './ScrollTop.jsx';
import { createStore } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './store/reducers/index.jsx';
import { TabProvider } from './util/TabContext.jsx';
import { CSSTransition } from 'react-transition-group';

const store = createStore(rootReducer);
const persistor = persistStore(store);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ScrollTop />
        <TabProvider>
          <App />
        </TabProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
