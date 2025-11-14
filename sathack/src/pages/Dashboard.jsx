import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Radar,
  Video,
  BarChart3,
  MapPin,
  AlertTriangle,
  Cpu,
  Bell,
  Settings,
} from "lucide-react";

// TOP STATS
const topStats = [
  { label: "Live Nodes", value: 32, hint: "CCTV + Edge Sensors" },
  { label: "Active Alerts", value: 3, hint: "Realtime incidents" },
  { label: "Avg Delay (min)", value: 12, hint: "City-wide" },
  { label: "Model Latency (ms)", value: 78, hint: "Inference avg" },
];

// SMALL SPARKLINE CHART
function Sparkline({ data = [] }) {
  const w = 120;
  const h = 36;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);

  const points = data
    .map((d, i) => `${(i / (data.length - 1)) * w},${h - ((d - min) / (max - min)) * h}`)
    .join(" ");

  return (
    <svg width={w} height={h}>
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeOpacity={0.9}
      />
    </svg>
  );
}

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("overview");
  const [videoSrc, setVideoSrc] = useState("http://localhost:5000/video-stream");

  // Upload handler
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setVideoSrc(URL.createObjectURL(file));
  };

  const leftMenu = [
    { id: "overview", label: "Overview", icon: <Radar /> },
    { id: "monitor", label: "Monitor", icon: <Video /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 /> },
    { id: "heatmap", label: "Hotspots", icon: <MapPin /> },   // 🔥 RENAME HERE
    { id: "alerts", label: "Alerts", icon: <AlertTriangle /> },
    { id: "system", label: "System", icon: <Cpu /> },
  ];

  // dummy alerts
  const alerts = [
    { id: 1, title: "Accident — Highway 5", time: "2m ago" },
    { id: 2, title: "Slowdown — City Mall", time: "8m ago" },
    { id: 3, title: "Construction — Dock Rd", time: "30m ago" },
  ];

  // --------------------------------------------------
  // OVERVIEW PAGE
  // --------------------------------------------------
  const overviewLayout = () => (
    <>
      {/* LEFT COLUMN */}
      <section className="lg:col-span-5 space-y-6">

        {/* LIVE MONITOR */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Live Monitor</h2>
              <p className="text-sm text-gray-400">Real-time feed</p>
            </div>

            <label className="px-3 py-2 bg-cyan-500/20 rounded-lg cursor-pointer">
              Upload
              <input type="file" accept="video/*" className="hidden" onChange={handleVideoUpload} />
            </label>
          </div>

          {/* VIDEO PLAYER (RIGHT SIDE REMOVED) */}
          <div className="mt-4 h-[260px] bg-black/40 rounded-xl border border-white/10 overflow-hidden">
            <video
              src={videoSrc}
              autoPlay
              muted
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TIMELINE */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="font-semibold">Incident Timeline</h3>

          <div className="mt-3 border-l border-white/10 pl-4 space-y-4">
            <div className="relative">
              <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-yellow-400 animate-pulse"></div>
              <p className="text-sm text-gray-300">Now</p>
              <p className="font-medium">Accident — Highway 5</p>
            </div>

            <div className="relative">
              <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-cyan-400"></div>
              <p className="text-sm text-gray-300">10 min</p>
              <p className="font-medium">Slowdown — City Mall</p>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT COLUMN */}
      <section className="lg:col-span-7 space-y-6">

        {/* ANALYTICS */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold">AI Congestion Analytics</h3>
          <p className="text-sm text-gray-400">Predicted severity</p>

          <div className="mt-4 space-y-3">
            <div className="p-3 bg-white/10 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-300">Congestion Score</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <Sparkline data={[12, 18, 20, 24, 16, 30, 22]} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <p className="text-xs text-gray-300">Avg Delay</p>
                <p className="text-xl font-bold">12 min</p>
              </div>

              <div className="p-3 bg-white/10 rounded-lg">
                <p className="text-xs text-gray-300">Anomalies/hr</p>
                <p className="text-xl font-bold">4</p>
              </div>
            </div>
          </div>
        </div>

        {/* HOTSPOTS (RENAMED HEATMAP) */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 h-[260px] flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Hotspots</h3>
              <p className="text-sm text-gray-400">High congestion zones</p> {/* 🔥 Updated */}
            </div>
            <span className="text-sm text-gray-300">24h</span>
          </div>

          <div className="flex-1 mt-4 bg-black/40 border border-white/10 rounded-lg flex items-center justify-center text-gray-300 text-center">
            Map Placeholder — integrate Mapbox/Leaflet
          </div>
        </div>

      </section>
    </>
  );

  // --------------------------------------------------
  // TAB SWITCHING
  // --------------------------------------------------
  const renderContent = () => {
    switch (active) {
      case "overview":
        return overviewLayout();

      case "monitor":
        return (
          <div className="lg:col-span-12 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Live Monitor</h2>
              <label className="px-4 py-2 bg-cyan-500/20 rounded-lg cursor-pointer">
                Upload Video
                <input type="file" accept="video/*" className="hidden" onChange={handleVideoUpload} />
              </label>
            </div>

            <video
              src={videoSrc}
              autoPlay
              muted
              controls
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>
        );

      case "heatmap":
        return (
          <div className="lg:col-span-12 p-6 rounded-2xl bg-white/5 border border-white/10 h-[500px]">
            <h2 className="text-2xl font-semibold mb-3">Hotspots</h2>
            <div className="w-full h-full bg-black/40 rounded-xl flex items-center justify-center">
              Map Placeholder — integrate Mapbox/Leaflet
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="lg:col-span-12 p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">AI Analytics</h2>
            <Sparkline data={[12, 18, 20, 24, 16, 30, 22]} />
          </div>
        );

      case "alerts":
        return (
          <div className="lg:col-span-12 p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold mb-3">Critical Alerts</h2>
            {alerts.map((a) => (
              <div key={a.id} className="p-3 bg-white/10 rounded-lg border border-white/10 my-2">
                <div className="flex justify-between">
                  <span>{a.title}</span>
                  <span className="text-xs">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case "system":
        return (
          <div className="lg:col-span-12 p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">System Information</h2>
            <p className="text-gray-300">CPU Load: 27%</p>
            <p className="text-gray-300">GPU Temp: 54°C</p>
            <p className="text-gray-300">Nodes Active: 32</p>
          </div>
        );

      default:
        return null;
    }
  };

  // --------------------------------------------------
  // MAIN UI
  // --------------------------------------------------
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#071022] text-white overflow-hidden">

      {/* NAVBAR */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
            >
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </button>

            <div>
              <h1 className="text-xl font-bold">TRAVIS</h1>
              <p className="text-xs text-gray-400">AI Traffic Command Center</p>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="hidden lg:flex items-center gap-6">
            {topStats.map((s, i) => (
              <div
                key={i}
                className="px-3 py-2 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="text-xs text-gray-300">{s.label}</div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{s.value}</h3>
                  <span className="text-xs text-gray-400">{s.hint}</span>
                </div>
              </div>
            ))}

            <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20">
              <Bell />
            </button>
            <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20">
              <Settings />
            </button>
            <button className="px-4 py-2 rounded-lg bg-red-500/80 hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6 px-6 py-8">

        {/* SIDEBAR */}
        <aside className="col-span-12 md:col-span-2 lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            {leftMenu.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition ${
                  active === m.id
                    ? "bg-cyan-500/20 border border-cyan-400/40"
                    : ""
                }`}
              >
                <span className="text-cyan-300">{m.icon}</span>
                {!collapsed && <span>{m.label}</span>}
              </button>
            ))}
          </motion.div>
        </aside>

        {/* CONTENT */}
        <main className="col-span-12 md:col-span-10 lg:col-span-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {renderContent()}
          </div>
        </main>

      </div>

      {/* FOOTER */}
      <footer className="max-w-[1400px] mx-auto px-6 py-8 text-gray-500 text-sm flex justify-between">
        <span>© {new Date().getFullYear()} TRAVIS — Hackathon Edition</span>
        <span>Command Center UI • v1.0</span>
      </footer>
    </div>
  );
}
