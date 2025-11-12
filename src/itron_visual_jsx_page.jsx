// src/itron_visual_jsx_page.jsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Tabs, TabsList, TabsTrigger, TabsContent } from "./ui-shim";
import { CheckCircle, BarChart3, Cpu, Zap, Wifi, Building2 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const marketData = [
  { region: "한국", market: 130, ami: 65 },
  { region: "미국", market: 4300, ami: 82 },
];

// ✅ TS 타입 제거 (그대로 두면 CRA에서 에러)
const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3">
    <div className="rounded-2xl p-2 shadow-sm bg-white">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

export default function ItronVisualPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(60%_60%_at_50%_0%,#dbeafe,transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Badge className="mb-4">Itron · Business Overview</Badge>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                스마트 계량 · 분산지능 · 스마트시티를 잇는
                <span className="block">유틸리티 디지털 전환 플랫폼</span>
              </h1>
              <p className="mt-4 text-slate-600">
                하드웨어(계량기)·네트워크·소프트웨어·분석을 통합해 노후 인프라, 그리드 신뢰성, 탈탄소화, 수자원 보존, 가스 안전을 해결합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button>제품/솔루션 살펴보기</Button>
                <Button variant="outline">한·미 시장 비교</Button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <Card className="rounded-3xl shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" /> 시장 & AMI 보급률(예시)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={marketData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="market" name="시장 규모 (백만 USD)" />
                        <Bar yAxisId="right" dataKey="ami" name="AMI 보급률 (%)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5" /> 분산 인텔리전스 (DI)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              엣지 장치(계량기)에서 실시간 분석·제어: 전압 모니터링, 변압기 부하, EV/PV 인식.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="w-5 h-5" /> 지능형 연결성
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              메시·셀룰러·Wi-Fi 멀티 전송. 보안·신뢰성·확장성으로 AMI/DER/스마트시티 지원.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" /> CityEdge 스마트 시티
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              스마트 조명·교통·환경 모니터링을 통합하는 도시 운영 플랫폼. 부서 간 협업·개방형 표준.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs: Offerings */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid md:grid-cols-4 w-full">
            <TabsTrigger value="grid">그리드 엣지/DERMS</TabsTrigger>
            <TabsTrigger value="meter">계량 솔루션</TabsTrigger>
            <TabsTrigger value="data">데이터 & 분석</TabsTrigger>
            <TabsTrigger value="city">스마트 시티</TabsTrigger>
          </TabsList>
          <TabsContent value="grid" className="mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>DERMS & 운영 최적화</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> IntelliFLEX 기반 DER 관리
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> EV/배터리/태양광 통합
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> 전압/주파수/호스팅용량 분석
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> ADMS/SCADA 연동·배전 자동화
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> 트럭롤 감소·정전 복구 가속
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> 실시간 엣지 분석(DI)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meter" className="mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>전기·가스·수도 AMI</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
                <div>
                  <p className="font-semibold mb-2">전기</p>
                  <p>양방향 통신, 원격 검침, TOU/DR, DI 지원.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">가스</p>
                  <p>Intelis™ 초음파·내장 차단밸브·고유량 알람·온도/에어 감지.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">수도</p>
                  <p>누수 감지·NRW 절감·Temetra 기반 경로 수집.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>DataHub · MDM · Revenue Assurance</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
                <div>
                  <p className="font-semibold mb-2">DataHub</p>
                  <p>공통 데이터 모델·보안 공유·개방형 API·멀티테넌시.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">MDM</p>
                  <p>수집·검증·이벤트 분석·실시간 인사이트.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">수익 보장</p>
                  <p>도난·누출 탐지, 조사 워크플로우, 손실 절감.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="city" className="mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>CityEdge & 스마트 조명</CardTitle>
              </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
                <Feature icon={Zap} title="스마트 조명" desc="원격 제어·유지보수 최적화·IIoT 백본" />
                <Feature icon={Wifi} title="공공 안전/교통" desc="센서·분석·적응형 제어로 안전·흐름 개선" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Comparison */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>한국 vs 미국 전기 계량기 산업 비교 (요약)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="p-3">항목</th>
                    <th className="p-3">한국</th>
                    <th className="p-3">미국</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t"><td className="p-3">시장 규모</td><td className="p-3">약 1.3억 USD</td><td className="p-3">약 43억 USD</td></tr>
                  <tr className="border-t"><td className="p-3">보급률(AMI)</td><td className="p-3">60~70%</td><td className="p-3">82%</td></tr>
                  <tr className="border-t"><td className="p-3">시장 단계</td><td className="p-3">성장기</td><td className="p-3">성숙기</td></tr>
                  <tr className="border-t"><td className="p-3">주요 기업</td><td className="p-3">한전 KDN, LS전선 등</td><td className="p-3">Itron, Landis+Gyr 등</td></tr>
                  <tr className="border-t"><td className="p-3">수익모델</td><td className="p-3">하드웨어 중심</td><td className="p-3">데이터/서비스 중심</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>


    </div>
  );
}
