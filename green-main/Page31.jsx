import { useCallback, useMemo, useRef, useState,forwardRef } from 'react';
import { Button } from "primereact/button";
import { BreadCrumb } from 'primereact/breadcrumb';
import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tooltip } from 'primereact/tooltip';
import { FileUpload } from 'primereact/fileupload';
import { Checkbox } from "primereact/checkbox";
import { Dialog } from 'primereact/dialog';
import { Editor } from 'primereact/editor';
import { Calendar } from 'primereact/calendar';
import { createPortal } from 'react-dom';
import ReportPrint01 from './ReportPrint01';
import {
  DtPicker,
  FormAutoComplete,
  FormAutoCompleteMulti,
  FormDropdown,
  FormEditor,
  FormInputNumber,
  FormInputText,
  FormPassword,
  FormTextArea,
  MonthPicker,
  YearPicker,
} from '../../components/form/UseFormControl';

import DataGrid from '@components/grid/DataGrid';
import MOCK_DATA3 from '@components/grid/MOCK_DATA3.json';

// ifram 출력용 css 수정금지
const printWithIframe = (html) => {
  const iframe = document.createElement('iframe');

  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';

  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <html>
      <head>
        <title>건설공사기성 실적증명서</title>

        <style>
          @page {
            size: A4;
            margin: 10mm;
          }

          html, body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }

          .report-wrap {
             width: 210mm;
            padding: 10mm;
            box-sizing: border-box;
          }

          .report-page {
            width: 100%;
            margin-top: 3rem;
            background: #fff;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
          }

          td {
            border: 1px solid #888;
            padding: 4px !important;
            height: 32px;
          }

          td.none {
            border: 0px solid #888;
            padding: 4px;
          }

        .title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
        }
        .label-right {
          text-align: right;
          font-size: 12px;
        }


        .label-left {
          text-align: left;
          font-size: 12px;
        }
        .text-left {
            text-align: left;
        }  
        .text-right {
            text-align: right;
        }

          .small-text {
              font-size: 8pt;
          }

          .tit-text {
            font-size: 14pt;
            font-weight: 600;
            text-align: center;
          }

          .tiny-text {
              font-size: 12px;
          }

        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
  doc.close();

  iframe.contentWindow.focus();
  iframe.contentWindow.print();

  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 1000);
};


const Page31 = () => {

     /* 달력 */
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null); // 월
  const [year, setYear] = useState(null); // 년
 const printRef = useRef(null);
 const [text, setText] = useState('');

   /* 다이얼로그 팝업 */
  const [visible, setVisible] = useState(false);
  const footerContent = (
          <div className="gap-2">
              <Button label="취소"  onClick={() => setVisible(false)} outlined className='mr-2'/>
              <Button label="적용"  onClick={() => setVisible(false)} autoFocus />
          </div>
      );

         /* 다이얼로그 팝업  - 공지사항 */
  const [visible2, setVisible2] = useState(false);
  const footerContent2 = (
          <div className="gap-2">
              <Button label="취소"  onClick={() => setVisible2(false)} outlined className='mr-2'/>
              <Button label="목록바로가기"  onClick={() => setVisible2(false)} autoFocus />
          </div>
      );

  /* 모바일 검색영역 감추기 */
  const [activeIndex, setActiveIndex] = useState(null);
  const regions = [
    { label: "서울", value: "seoul" },
    { label: "부산", value: "busan" },
    { label: "대전", value: "daejeon" },
  ];


/* 다이얼로그 팝업 */
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

const handlePrint = () => {
  const html = printRef.current?.outerHTML;
  if (!html) return;

  setVisible4(false);
  setVisible3(false);

  setTimeout(() => {
    printWithIframe(html);
  }, 100);
};



  const footerContent3 = (
    <div className="gap-2">
      
      <Button
        label="본문출력"
        icon="pi pi-print"
         onClick={handlePrint}
        autoFocus
        />
    </div>
  );

    const footerContent4 = (
    <div className="gap-2">
      <Button
        label="취소"
        onClick={() => setVisible4(false)}
        outlined
        className="mr-2"
      />
      <Button
        label="본문출력"
        icon="pi pi-print"
         onClick={handlePrint}
        autoFocus
        />
    </div>
  );


  //툴팁
  const bellRef = useRef(null);  

  /* 즐겨찾기 아이콘  */
  const [filled, setFilled] = useState(false);

  /* 업무영역 도움말 패널영역 정의 */
  const [visibleRight, setVisibleRight] = useState(false);

  /* primereact - BreadCrumb */
   const items = [
        { label: '여신관리' },
        {
            label: 'InputText',
            template: () => (
              <Link to="/inputtext" className="p-breadcrumb_now">
                현재페이지
              </Link>
            )
        }
    ];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' };

 /*input, combobox */
  const [value, setValue] = useState('');
  const [ingredient, setIngredient] = useState('');

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

//출력전용



  return (
    <div className="card height-01">  
     {/* 공통 : 타이틀영역 */}
        <div className="title-container">
            <div  className="flex gap-4">
              <h2>9. 거래명세표 </h2>
              <div className="flex gap-2">
              {/* 공통 : 메뉴별 새창열기 */}
              <Button
                icon="pi pi-external-link"
                className="layout-newwindow-button"
                aria-label="New Windows"
                text 
                tooltip="윈도우 새창"
                tooltipOptions={{ position: "bottom", mouseTrack: true, mouseTrackTop: 15 }}
                onClick={() => window.open(window.location.href, "_blank")}
              />
              {/* 공통 : 메뉴별 즐겿자기 */}
              <Button
                icon={filled ? "pi pi-star-fill" : "pi pi-star"}
                className="layout-Favorite-button"
                onClick={() => setFilled((prev) => !prev)}
                aria-label="Favorite"
                tooltip="즐겨찾기 메뉴"
                tooltipOptions={{ position: "bottom", mouseTrack: true, mouseTrackTop: 15 }}
                text 
              />
              </div>
            </div>          
            <div className="flex items-center" >
               <BreadCrumb model={items} home={home}  />               
               {/* 공통 : 메뉴별 도움말 */}
                <Tooltip target=".has-tooltip" position="bottom" mouseTrack mouseTrackTop={15} />
               <button className="layout-BreadCrumb-button has-tooltip" data-pr-tooltip="업무매뉴얼" onClick={() => setVisibleRight(true)}>
                  <i className="pi pi-exclamation-circle"/>
                </button>
            </div>
        </div>

        {/* 공통 : 업무영역에 대한 도움말 사이드바 */}
        <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className="favorite-help-sidebar">
          <h3 className="absolute top-[1.6rem]"> 업무영역별 도움말</h3>
          <img src="/images/sample.png" alt="main" className="max-w-none"  />
          <p>기능설명</p>
          <span>
           1. 각 업무화면의 매뉴얼 버튼을 클릭하면 해당화면의 주요기능을 설명하는 화면이 제공됩니다. <br/>
           2. 이미지가 있으면 이미지 업로드 하게 만들면 됩니다.
          </span>
        </Sidebar>


        {/* 공통 case01 : 검색영역 + 그리드 버튼 + 그리드영역 */}
        <div className="hugreen_grid flex-1 flex flex-wrap md:flex-row">

            {/* 공통 : 그리드 상단 버튼  */}
            <div className="hugreen_aggridbtn_hwrap">
               <div className="flex"> 
                  <span className="InfoText"> 요청 </span>
               </div>
               <div className="flex gap-2"> 
                 <Button
                label="요청-건설공사기성실적증명서"
                onClick={() => setVisible3(true)}
                />
                
                <Button
                label="요청-거래명세표"
                onClick={() => setVisible4(true)}
                />
                
                <Dialog
                header="건설공사기성실적증명서"
                visible={visible3}
                modal={false}
                resizable={false}
                blockScroll
                style={{ width: '50vw' }}
                className="user-dialog"
                onHide={() => setVisible3(false)}
                footer={footerContent3}
                >
                     <div className="report-preview">
                        {/* 출력 DOM을 그대로 미리보기 */}
                        <div className="preview-scale">
                        <ReportPrint01 />
                        </div>
                    </div>
                </Dialog>

               

                 


           
            {/* 출력 전용 – DOM에 단 하나 */}
            <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
                <ReportPrint01
                ref={printRef}
                id="print-area-modal"
                //style={{ display: "none"}}
                />
            </div>
           
           

              </div>
            </div>
            {/* 공통 : ag그리드  */}
            <div className="flex w-full h-full">
             그리드영역



            </div>

           
        </div>
    </div> 
  );
};

export default Page31;
