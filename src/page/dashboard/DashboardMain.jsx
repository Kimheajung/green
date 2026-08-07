import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useSelector } from "react-redux";
import { Tag } from "primereact/tag";
import { Divider } from "primereact/divider";
import { Chart } from "primereact/chart";
import { Calendar } from 'primereact/calendar';

const DashboardMain = (props) => {

  //테스트 - 여신현황 추가삭제 
const [noCreditMode, setNoCreditMode] = useState(false); 

const notices = [
  { title: "전략기획팀 1월 월간현안보고 안내 및 복지 포인트 안내 및 가이드", date: "2026-01-15", isNew: true },
  { title: "설 연휴 배송 일정 안내", date: "2026-01-10", isNew: false },
  { title: "전략기획팀 1월 월간현안보고 안내 및 복지 포인트 안내 및 가이드", date: "2026-01-15", isNew: false },
  { title: "전략기획팀 2월 월간현안보고 안내 및 복지 포인트 안내 및 가이드", date: "2026-01-15", isNew: false },
  { title: "전략기획팀 3월 월간현안보고 안내 및 복지 포인트 안내 및 가이드", date: "2026-01-15", isNew: false },
  { title: "전략기획팀 4월 월간현안보고 안내 및 복지 포인트 안내 및 가이드", date: "2026-01-15", isNew: false },
  { title: "전략기획팀 5월 월간현안보고 안내 및 복지 포인트 안내 및 가이드", date: "2026-01-15", isNew: false },
];

// max5개
const files = [
  { title: "납세_롤러_스토퍼_경향하우징_LX하우시스(26년 1월)가이드 배포", date: "2026-01-15", isNew: true },
  { title: "여신 약정서.hwp", date: "2026-01-15", isNew: false },
];


//챠트 - 원형매출현황
const salesRate = 78;
const data = {
  datasets: [
    {
      data: [salesRate, 100 - salesRate],
      backgroundColor: ["#6AB7C4", "#e0e0e0"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: "70%",            
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
};


//매출현황 - 월별 막대그래프
const [chartData, setChartData] = useState({});
const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            datasets: [
                {
                    label: 'year',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40, 72, 60, 68, 75, 82],
                    barPercentage: 0.2,
                    categoryPercentage: 0.7
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                  display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

  // 일정관련 달력
  const [date, setDate] = useState(null);

  const userInfo = useSelector((state) => state.userInfo);
  const menuList = useSelector((state) => state.menuList);


  //일정등록
  const CALENDAR_ITEMS = [
  {
    id: 1,
    status: "주문승인",
    tagClass: "main01",
    company: "아키원!",
    desc: "PBF-84EWIA/AB 외 3건 주문",
    orderNo: "PB00009890"
  },
  {
    id: 2,
    status: "승인대기",
    tagClass: "main02",
    company: "금호석유화학(주)",
    desc: "PBF-84EWIA/AB 외 3건 주문",
    orderNo: "PB00009890"
  },
];



  return (
    <>
      {/* ← 삭제 금지!  하드코딩 CSS로 메인에만 적용   */}
      <style>
        {`
          /* PC(768px 이상)에서만 사이드바 제거 */
          @media (min-width: 768px) {
            .layout-sidebar {
              display: none !important;
              width: 0 !important;
            }

            .layout-main-container,
            .layout-main {
              margin-left: 0 !important;
              padding-left: 0 !important;
              width: 100% !important;
              height:100% !important;
            }
          }
        `}
      </style>

<div className="dashboard">

  {/* 사용자정보 */}
  <div className="topboard">
    <div>
      <Tag severity="contrast" value="대리점"></Tag> 
      <span className="ml-2">
        <strong>홍 길동님!</strong> 환영합니다.
      </span>
    </div>
    <div> WinkK+ 바로가기</div>
  </div>

  <section className="summary">
     {/* 매출 현황 */}
    <div className="item">
       <div className="flex justify-between mb-2">
        <h3>매출현황</h3>
        <Button icon="pi pi-plus" className="w-[10px]" rounded text severity="secondary" aria-label="더보기"/>
       </div>

        <div className="flex flex-col md:flex-row gap-2">
          <div  className="flex flex-1 relative items-center doughnut-wrap">
            {/* 왼쪽: 반원 도넛 */}
            <div className="sales-half-donut">
              <Chart type="doughnut" data={data} options={options} />
              <div className="sales-half-donut__center">
                <strong>{salesRate}%</strong>
              </div>
            </div>

             {/* 오른쪽: 매출 텍스트  / 금액이 적은경우 */}
            <div className="flex flex-col">
              <span className="tit pb-2">당년 매출액 현황</span>
              <p className="value">
                1,450,000<span className="text-gray-400">원</span>
              </p>
              <span className="minus">
                지난 년도보다 -20억 <span>총 4 만건</span>
              </span>
            </div>
          </div>

          <div  className="flex flex-1 items-center doughnut-wrap">
            {/* 왼쪽: 반원 도넛 */}
            <div className="sales-half-donut ">
              <Chart type="doughnut" data={data} options={options} />
              <div className="sales-half-donut__center">
                <strong>{salesRate}%</strong>
              </div>
            </div>

            {/* 오른쪽: 매출 텍스트 */}
            <div className="flex flex-col" >
              <span className="tit">당월 매출액 현황</span>
              <p className="value">
                212,290<span className="text-gray-400">억원</span>
              </p>
              <span className="plus">
                지난 달보다 +900억 <span>총 23,000 건</span>
              </span>
            </div>
          </div>
        </div>
        
        
    </div>

     {/* 주문 현황 */}
    <div className="item">
      <div className="flex justify-between mb-2">
        <h3>주문 처리 현황</h3>
        <Button icon="pi pi-plus" className="w-[10px]" rounded text severity="secondary" aria-label="더보기"/>
      </div>
      <div className="count pt-2">
        <div className="count-item">
          <span className="label">당일 주문</span>
          <span><strong className="num1">0</strong> 건</span>
        </div>
        <div className="count-item">
          <span className="label">주문 승인</span>
          <span><strong className="num2">10</strong> 건</span>
        </div>
        <div className="count-item">
          <span className="label">승인 대기</span>
          <span><strong className="num">5</strong> 건</span>
        </div>
      </div>
      <div className="count pt-2 mt-2">
        <div className="count-item">
          <span className="label">주문변경요청</span>
          <span><strong className="num">1</strong> 건</span>
        </div>
        <div className="count-item">
          <span className="label">변경승인</span>
          <span><strong className="num1">0</strong> 건</span>
        </div>
        <div className="count-item">
          <span className="label">변경승인대기</span>
          <span><strong className="num2">3</strong> 건</span>
        </div>
      </div>
    </div>
  </section>

   {/* 여신현황 */}
   <div className="main-area">
    {!noCreditMode && (
      <section className="credit">
        <div className="credit-header">
          <h3>여신 현황</h3>
          <Button  rounded text severity="secondary" label="더보기"/>
        </div>
        <div className="item">
          <span>총 여신</span>
          <span className="tit"><strong>2,890</strong>억원</span>
        </div>
        <div className="item">
          <span>사용중 여신</span>
          <span className="tit"><strong>20</strong>억원</span>
        </div>
        <div className="item highlight">
          <span>여신 잔액</span>
          <span className="tit"><strong>3,000</strong>억원</span>
        </div>
        <div className="item">
          <span>사용률</span>
          <span className="tit"><strong>31</strong>%</span>
        </div>
      </section>
  )}
      <section className="notice" >
        <div className="card2 graph-item">
          <div className="flex flex-col md:flex-row gap-4 h-full min-h-0">
    
            {/* 달력 */}
            <div className="dashboard-calendar flex-[3] shrink-0">
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                inline
              />
            </div>

            {/* 일정 상세 */}
            <div className="flex-[7] min-h-0 flex flex-col">
              <p className="text-xl font-bold mb-4 text-gray-500 shrink-0">
                오늘 2026.01.27
              </p>

              <div
                className={`cal-list overflow-y-auto ${CALENDAR_ITEMS.length > 5 ? "pr-1" : ""} `}
              >
                {CALENDAR_ITEMS.map((item) => (
                  <div key={item.id}
                    className="cal-summary cursor-pointer hover:text-blue-800"
                    onClick={() => navigate(`/order/${item.orderNo}`)}
                  >
                    <Tag
                      severity="contrast"
                      className={` ${item.tagClass} pointer-events-none shrink-0 min-w-[64px]  h-[18px] flex items-center justify-center px-2 text-xs whitespace-nowrap`}
                      value={item.status}
                    />

                    <span className="truncate">
                      <strong>{item.company}</strong>
                    </span>

                    <span className="truncate">
                      {item.desc}
                    </span>

                    <span className="text-right tabular-nums">
                      {item.orderNo}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
           
        </div>


        {/* 년도별 매출현황 */}
        <div className="card2 graph-item">
            <div className="graph-header">
              <h4>년도별 매출현황</h4>
              <Button icon="pi pi-plus" rounded text severity="secondary" />
            </div>
            <div className="graph-chart">
              <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </div>
       

        {/* 공지사항 + 자료실 */}
        <div className="item notice-full">
          <div className="notice-panel">
          {/* 공지사항 */}
            <div className="notice-section">
              <div className="flex justify-between mb-2">
                <h4>공지사항</h4>
                <Button icon="pi pi-plus" className="w-1" rounded text severity="secondary" aria-label="더보기"/>
              </div>
              <ul>
                {notices.slice(0, 5).map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => navigate("/")}
                    className="cursor-pointer hover:text-blue-800"
                  >
                    <span className="nottitle">{item.title}</span>

                    {item.isNew && <span className="notice-new">N</span>}

                    <span className="date">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>

           

            {/* 자료실 */}
            <div className="notice-section border-t border-gray-200 pt-2">
              <div className="flex justify-between mb-2">
                <h4>자료실</h4>
                <Button icon="pi pi-plus" className="w-1" rounded text severity="secondary" aria-label="더보기"/>
              </div>
              <ul>
                {files.slice(0, 5).map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => navigate("/")}
                    className="cursor-pointer hover:text-blue-800"
                  >
                    <span className="nottitle">{item.title}</span>

                    {item.isNew && <span className="notice-new">N</span>}

                    <span className="date">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

</div>

</div>

    </>
  );
};

export default DashboardMain;
