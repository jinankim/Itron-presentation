// src/itron_visual_jsx_page.jsx
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const marketData = [
  { region: "한국", market: 130, ami: 65 },
  { region: "미국", market: 4300, ami: 82 },
];

function Feature({ icon = "⚡", title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-2xl p-2 shadow-sm bg-white">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

export default function ItronVisualPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(60%_60%_at_50%_0%,#dbeafe,transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="inline-block text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded mb-4">
                Itron · Business Overview
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                스마트 계량 · 분산지능 · 스마트시티를 잇는
                <span className="block">유틸리티 디지털 전환 플랫폼</span>
              </h1>
              <p className="mt-4 text-slate-600">
                하드웨어(계량기)·네트워크·소프트웨어·분석을 통합해 노후 인프라, 그리드 신뢰성, 탈탄소화,
                수자원 보존, 가스 안전을 해결합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">
                  제품/솔루션 살펴보기
                </button>
                <button className="px-4 py-2 rounded-lg border border-slate-300">
                  한·미 시장 비교
                </button>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="rounded-3xl shadow-lg bg-white">
                <div className="px-6 pt-6">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <span role="img" aria-label="chart">📊</span>
                    시장 & AMI 보급률(예시)
                  </h3>
                </div>
                <div className="p-6">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white shadow p-6">
            <h4 className="flex items-center gap-2 font-semibold mb-2">
              <span role="img" aria-label="cpu">🧠</span> 분산 인텔리전스 (DI)
            </h4>
            <p className="text-sm text-slate-600">
              엣지 장치(계량기)에서 실시간 분석·제어: 전압 모니터링, 변압기 부하, EV/PV 인식.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow p-6">
            <h4 className="flex items-center gap-2 font-semibold mb-2">
              <span role="img" aria-label="wifi">📶</span> 지능형 연결성
            </h4>
            <p className="text-sm text-slate-600">
              메시·셀룰러·Wi-Fi 멀티 전송. 보안·신뢰성·확장성으로 AMI/DER/스마트시티 지원.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow p-6">
            <h4 className="flex items-center gap-2 font-semibold mb-2">
              <span role="img" aria-label="city">🏙️</span> CityEdge 스마트 시티
            </h4>
            <p className="text-sm text-slate-600">
              스마트 조명·교통·환경 모니터링을 통합하는 도시 운영 플랫폼. 부서 간 협업·개방형 표준.
            </p>
          </div>
        </div>
      </section>

      {/* 비교 표 */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-2xl bg-white shadow">
          <div className="px-6 pt-6">
            <h3 className="text-lg font-semibold">한국 vs 미국 전기 계량기 산업 비교 (요약)</h3>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="p-3">항목</th>
                  <th className="p-3">한국</th>
                  <th className="p-3">미국</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">시장 규모</td>
                  <td className="p-3">약 1.3억 USD</td>
                  <td className="p-3">약 43억 USD</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">보급률(AMI)</td>
                  <td className="p-3">60~70%</td>
                  <td className="p-3">82%</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">시장 단계</td>
                  <td className="p-3">성장기</td>
                  <td className="p-3">성숙기</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">주요 기업</td>
                  <td className="p-3">한전 KDN, LS전선 등</td>
                  <td className="p-3">Itron, Landis+Gyr 등</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">수익모델</td>
                  <td className="p-3">하드웨어 중심</td>
                  <td className="p-3">데이터/서비스 중심</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            브랜드 컬러 적용 · 로고 삽입 · 다국어 전환 · 추가 차트 커스터마이즈
          </h2>
        </div>
      </section>
    </div>
  );
}
