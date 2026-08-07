import { forwardRef } from "react";

const ReportPrint01 = forwardRef(function ReportPrint01(props, ref) {
   // const PRINT_ROW_COUNT = 24;





  return (
      
      
    <div ref={ref} className="report-wrap print-only" >
      <div className="report-page">

       
        <div className="a4-container">
            <div className="text-center title"> 건설공사기성실적증명(신청)서</div>
            <table>
                <tr>
                <td colSpan={45} className="text-right mb-1 mt-2 none" > (앞쪽)</td>
                </tr>
                <tr>
                <td colSpan={5}>접수번호</td>
                <td colSpan={10}></td>
                <td colSpan={5}>접수일</td>
                <td colSpan={10}></td>
                <td colSpan={5}>처리기간</td>
                <td colSpan={10}>즉시</td>
                </tr>

               <tr>
                <td colSpan={2} rowSpan={2}>신청인</td>
                <td colSpan={6} className="text-left">
                    상호(법인인 경우에는 법인의 명칭)
                </td>
                <td colSpan={14} className="text-left"><strong className="highlight"> 금호석유화학㈜</strong>(디폴트)</td>
                <td colSpan={6} className="text-left">
                    대표자 
                </td>
                <td colSpan={17} className="text-left"><strong className="highlight">백 종 훈</strong> (디폴트)</td>
                </tr>

                <tr>
                <td colSpan={6} className="text-left">
                    영업소 소재지
                </td>
                <td colSpan={14} className="text-left"><strong className="highlight">서울시 중구 청계천로 100 (시그니쳐타워, 동관)</strong></td>
                <td colSpan={6} className="text-left">
                    업종 및 등록번호
                </td>
                <td colSpan={17} className="text-left"><strong className="highlight">금속구조물, 창호공사업 종로 07-08-01</strong></td>
                </tr>

               
                <tr>
                <td colSpan={45} className="tit-text" >공사내역</td>
                </tr>

                <tr>
                <td colSpan={2} className="text-left">
                    공사명
                </td>
                <td colSpan={18} className="text-left"><strong className="highlight">인천강화 1단지지주택 중 PL창호공사</strong></td>
                <td colSpan={4} className="text-left">
                    총공사금액<br />백만원
                </td>
                <td colSpan={21} className="text-left"><strong className="highlight">인천강화 1단지지주택 중 PL창호공사</strong></td>
                </tr>

                <tr>
                <td colSpan={6} className="text-left">
                    현장 소재지(번지까지 기재)
                </td>
                <td colSpan={39} className="text-left"><strong className="highlight">인천강화 1단지지주택 중 PL창호공사</strong></td>
                </tr>


                <tr>
                    <td colSpan={4} rowSpan={2} className="tiny-text">공사유형<br />건축공사</td>
                    <td colSpan={1} rowSpan={2} className="tiny-text">주력분야</td>
                    <td colSpan={15} rowSpan={2} className="text-left tiny-text">
                        ① 공사종류 : <strong className="highlight">건축공사</strong>(디폴트)<br />
                        ② 세부공사종류(종합)<br />
                        ③ 세부공사종류(전문) : <strong className="highlight">창호공사</strong>(디폴트)
                    </td>
                    <td colSpan={25} className="text-left tiny-text">인ㆍ허가 기관</td>
                </tr>
                <tr>
                    <td colSpan={25} className="text-left tiny-text">인ㆍ허가 연월일</td>
                </tr>



                <tr>
                    <td rowspan={3} clclassNameass="tiny-text">계약<br />연월</td>
                    <td colspan={3} rowspan={3} className="tiny-text">착공<br />연월</td>
                    <td  colspan={2} rowspan={3} className="tiny-text">준공<br />(예정)<br />연월</td>
                    <td  colspan={10} className="tiny-text">당년도 계약액 또는 이월금액<br /><strong>(총계약-전년누계)</strong></td>
                    <td  colspan={10} className="tiny-text">당년도 기성액<br />(PM/SAP)</td>
                    <td  colspan={10} className="tiny-text">당년도 기성지급액<br />(SAP)</td>
                    <td  colspan={9} className="tiny-text">당년도 발주자공급자재액</td>
                </tr>
                <tr>
                    <td  colspan={10} className="tiny-text">총계약금액<br />(PM)</td>
                    <td  colspan={10} className="tiny-text">전년도까지 누계기성액<br />(PM/SAP)</td>
                    <td  colspan={10} className="tiny-text">전년도까지 누계지급액<br />(SAP)</td>
                    <td colspan={9} className="tiny-text">전년도까지 누계관급자재액</td>
                </tr>

                {/* ===== 숫자 데이터 1행 ===== */}
                <tr>
                    <td colspan={2} className="tiny-text">백억</td>
                    <td className="tiny-text">십억</td>
                    <td className="tiny-text">억</td>
                    <td className="tiny-text">천만</td>
                    <td  colspan={2} className="tiny-text">백만</td>
                    <td className="tiny-text">십만</td>
                    <td className="tiny-text">만</td>
                    <td className="tiny-text">천</td>
                    <td  colspan={2} className="tiny-text">백억</td>
                    <td className="tiny-text">십억</td>
                    <td className="tiny-text">억</td>
                    <td className="tiny-text">천만</td>
                    <td  colspan={2} className="tiny-text">백만</td>
                    <td className="tiny-text">십만</td>
                    <td className="tiny-text">만</td>
                    <td className="tiny-text">천</td>
                    <td  colspan={2} className="tiny-text">백억</td>
                    <td className="tiny-text">십억</td>
                    <td className="tiny-text">억</td>
                    <td className="tiny-text">천만</td>
                    <td  colspan={2} className="tiny-text">백만</td>
                    <td className="tiny-text">십만</td>
                    <td className="tiny-text">만</td>
                    <td className="tiny-text">천</td>
                    <td className="tiny-text">백억</td>
                    <td className="tiny-text">십억</td>
                    <td  colspan={2} className="tiny-text">억</td>
                    <td className="tiny-text">천만</td>
                    <td className="tiny-text">백만</td>
                    <td className="tiny-text">십만</td>
                    <td className="tiny-text">만</td>
                    <td className="tiny-text">천</td>
                </tr>
                <tr>
                    <td rowspan={2} className="tiny-text"><strong className="highlight">221017</strong><br /><strong>(PM)</strong></td>
                    <td  colspan={3} rowspan={2} className="tiny-text"><strong className="highlight">221017</strong><br /><strong>(PM)</strong></td>
                    <td  colspan={2} rowspan={2} className="tiny-text"><strong className="highlight">241231</strong><br /><strong>(PM)</strong></td>
                    <td  colspan={2}></td>
                    <td></td>
                    <td><strong className="highlight">6</strong></td>
                    <td><strong className="highlight">2</strong></td>
                    <td  colspan={2}><strong className="highlight">2</strong></td>
                    <td><strong className="highlight">1</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td  colspan={2}></td>
                    <td></td>
                    <td><strong className="highlight">4</strong></td>
                    <td><strong className="highlight">3</strong></td>
                    <td  colspan={2}><strong className="highlight">9</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td  colspan={2}></td>
                    <td><strong className="highlight">1</strong></td>
                    <td><strong className="highlight">1</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td  colspan={2}><strong className="highlight">2</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td></td>
                    <td></td>
                    <td  colspan={2}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td  colspan={2}></td>
                    <td><strong className="highlight">4</strong></td>
                    <td><strong className="highlight">2</strong></td>
                    <td><strong className="highlight">3</strong></td>
                    <td  colspan={2}><strong className="highlight">8</strong></td>
                    <td><strong className="highlight">4</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td  colspan={2}></td>
                    <td><strong className="highlight">3</strong></td>
                    <td><strong className="highlight">6</strong></td>
                    <td><strong className="highlight">1</strong></td>
                    <td  colspan={2}><strong className="highlight">6</strong></td>
                    <td><strong className="highlight">3</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td  colspan={2}></td>
                    <td><strong className="highlight">2</strong></td>
                    <td><strong className="highlight">9</strong></td>
                    <td><strong className="highlight">5</strong></td>
                    <td  colspan={2}><strong className="highlight">3</strong></td>
                    <td><strong className="highlight">3</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td><strong className="highlight">0</strong></td>
                    <td></td>
                    <td></td>
                    <td  colspan={2}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan={2} className="tiny-text"> </td>
                    <td  colspan={3} rowspan={2} className="tiny-text"> </td>
                    <td  colspan={2} rowspan={2} className="tiny-text"> </td>
                    <td  colspan={2}></td>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td  colspan={2}></td>
                    <td> </td>
                    <td></td>
                    <td> </td>
                    <td  colspan={2}></td>
                    <td></td>
                    <td> </td>
                    <td> </td>
                    <td  colspan={2}> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td  colspan={2}></td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td  colspan={2}> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td  colspan={2}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td  colspan={2}></td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td  colspan={2}> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td  colspan={2}></td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td  colspan={2}> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td  colspan={2}></td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td  colspan={2}> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td  colspan={2}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
               
                <tr>
                    <td colspan={6} className="text-left tiny-text">그 밖의 사항<br />(공사의 규모ㆍ공법,<br />공동 도급내역 등)</td>
                    <td colspan={39}></td>
                </tr>

                 <tr>
                    <td colspan={39} rowspan={2} className="text-left"><strong className="highlight">2024</strong>(PM/SAP) 년도 중 위와 같이 건설공사기성실적이 있음을 증명하여 주시기 바랍니다.</td>
                    <td colspan={6}>수수료</td>
                </tr>
                <tr>
                    <td colspan={6}>없음</td>
                </tr>


                <tr>
                    <td colspan={45} className="text-left py-3">
                        <div className="label-right"  style={{ margin: "10px 0"}}>
                            2025 년 01 월    일
                        </div>
                        <div className="label-right" style={{ margin: "8px 0"}}>
                            신청인 <strong className="highlight pl-4 pr-4">금호석유화학㈜</strong>(디폴트) (서명 또는 인)
                        </div>
                        <div className="text-left">
                            <strong className="highlight pl-4 pr-4">㈜서희건설</strong>(PM/SAP) 귀하
                        </div>
                    </td>
                </tr>
                  <tr>
                    <td colspan={45} className="text-left py-3 none">

                        <div className="text-left" style={{ fontSize: "14px", marginTop: "10px" }} >
                                위 사실을 증명합니다.
                            </div>
                                <div className="label-right mb-2">
                                2025 년 01 월 09 일
                            </div>
                            
                            
                                <div className="label-right mb-2" >
                                
                                <div  style={{ width: "400px", marginLeft: "auto", textAlign: "left" }} >
                                 <p className="mb-2"><strong>발주자(수급인)</strong></p>   
                                <div style={{ margin: "4px 0"}}>
                                    <span>ㆍ상호 </span><span><strong className="highlight ml-4">㈜서희건설</strong> (PM/SAP)</span>
                                </div>
                                <div style={{ margin: "4px 0"}}>
                                    <span>ㆍ법인(사업자)등록번호 </span><span><strong className="highlight ml-4">220-81-19330</strong>(SAP)</span>
                                </div>
                                <div style={{ margin: "4px 0"}}>
                                    <span>ㆍ대표자 성명 </span><span><strong className="highlight ml-4">김 원 철, 김 팔 수</strong> <strong>(PM/SAP)</strong> (서명 또는 인)</span>
                                </div>
                                <div style={{ margin: "4px 0"}}>
                                    <span>ㆍ주소 </span><span><strong className="highlight ml-4">경기도 하남시 미사강변중앙로 210,3층 304호</strong>(PM/SAP)</span>
                                </div>
                               <div style={{ margin: "4px 0"}}>
                                    <span>ㆍ전화번호 </span><span><strong className="highlight ml-4">02-3416-6614</strong>(PM/SAP)</span>
                                </div>

                                </div>
                            </div>

                    </td>
                </tr>
            </table>
        </div>

        
        </div>    
    </div>          
                    
  );
});

export default ReportPrint01;
