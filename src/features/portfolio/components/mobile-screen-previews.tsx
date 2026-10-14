import React from "react";
import {
  CreditCard,
  TrendingDown,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  Sparkles,
  Bot,
  Send,
  CalendarCheck,
  MapPin,
  Plus,
  Receipt,
  UserCheck,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

// ==========================================
// 1. MAIN PHONE — SmartSplit Expense Manager
// ==========================================
export function SmartSplitScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-xs space-y-2 select-none h-full">
      {/* App Header & Group Switcher */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-[10px] shadow-sm">
            LK
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-[12px] font-bold text-white tracking-tight">Japan Trip &apos;24</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-400 font-medium">
                Active
              </span>
            </div>
            <span className="text-[9.5px] text-neutral-400">4 Members · Currency SGD</span>
          </div>
        </div>
        <div className="w-6 h-6 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-neutral-300">
          <Receipt className="h-3.5 w-3.5 text-pink-400" />
        </div>
      </div>

      {/* Net Settlement Balance Card (Inspired by Reference) */}
      <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-950/70 via-neutral-900 to-black border border-purple-500/30 shadow-lg relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-pink-500/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-purple-300 font-semibold uppercase tracking-wider">
            Total Net Balance
          </span>
          <span className="text-[9px] text-emerald-400 font-mono font-medium flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
            Settled 82%
          </span>
        </div>

        <div className="mt-1 flex items-baseline space-x-1.5">
          <span className="text-2xl font-black text-white tracking-tight">$392.40</span>
          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
            You are owed overall
          </span>
        </div>

        {/* Small Dual Indicators */}
        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/10 text-[10px]">
          <div className="flex items-center space-x-1.5 bg-white/[0.03] p-1.5 rounded-lg border border-white/5">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
            <div>
              <span className="text-neutral-400 text-[8.5px] block">You are owed</span>
              <span className="font-bold text-white text-[10.5px]">+$456.80</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 bg-white/[0.03] p-1.5 rounded-lg border border-white/5">
            <TrendingDown className="h-3.5 w-3.5 text-pink-400 flex-shrink-0" />
            <div>
              <span className="text-neutral-400 text-[8.5px] block">You owe</span>
              <span className="font-bold text-white text-[10.5px]">-$64.40</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Expenses List (3 compact items with icons & amounts) */}
      <div className="space-y-1.5 flex-1">
        <div className="flex items-center justify-between px-0.5">
          <span className="text-[9.5px] font-bold text-neutral-400 uppercase tracking-wider">Recent Expenses</span>
          <span className="text-[9px] text-pink-400 font-medium hover:underline">View All</span>
        </div>

        {/* Item 1 */}
        <div className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/6 flex items-center justify-between transition-colors">
          <div className="flex items-center space-x-2">
            <div className="h-7 w-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
              <Users className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-bold text-[10.5px] text-white leading-tight">Shinjuku Izakaya</p>
              <p className="text-[8.5px] text-neutral-400">Paid by Ben W. · Japan Trip</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10.5px] font-bold text-emerald-400">+$34.30</p>
            <p className="text-[8px] text-neutral-400">owed to you</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/6 flex items-center justify-between transition-colors">
          <div className="flex items-center space-x-2">
            <div className="h-7 w-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <CreditCard className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-bold text-[10.5px] text-white leading-tight">Shinkansen Express</p>
              <p className="text-[8.5px] text-neutral-400">Paid by You · 4 tickets</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10.5px] font-bold text-emerald-400">+$94.70</p>
            <p className="text-[8px] text-neutral-400">owed to you</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/6 flex items-center justify-between transition-colors">
          <div className="flex items-center space-x-2">
            <div className="h-7 w-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
              <Zap className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-bold text-[10.5px] text-white leading-tight">Pocket Wi-Fi &amp; eSIM</p>
              <p className="text-[8.5px] text-neutral-400">Paid by April L.</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10.5px] font-bold text-pink-400">-$28.60</p>
            <p className="text-[8px] text-neutral-400">you owe</p>
          </div>
        </div>
      </div>

      {/* Compact Quick Actions & Bottom Navigation Bar */}
      <div className="space-y-2 pt-1 border-t border-white/10">
        <div className="grid grid-cols-2 gap-2">
          <div className="py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-[10.5px] flex items-center justify-center space-x-1.5 shadow-md shadow-pink-500/20">
            <Sparkles className="h-3 w-3" />
            <span>Settle Up</span>
          </div>
          <div className="py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-[10.5px] flex items-center justify-center space-x-1.5">
            <Plus className="h-3 w-3 text-pink-400" />
            <span>Add Expense</span>
          </div>
        </div>

        {/* Bottom App Navigation Icons */}
        <div className="flex items-center justify-around py-1 text-neutral-400 text-[9px]">
          <div className="flex flex-col items-center text-pink-400 font-semibold">
            <Receipt className="h-3.5 w-3.5" />
            <span className="text-[7.5px] mt-0.5">Expenses</span>
          </div>
          <div className="flex flex-col items-center hover:text-white">
            <Users className="h-3.5 w-3.5" />
            <span className="text-[7.5px] mt-0.5">Groups</span>
          </div>
          <div className="flex flex-col items-center hover:text-white">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="text-[7.5px] mt-0.5">Activity</span>
          </div>
          <div className="flex flex-col items-center hover:text-white">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span className="text-[7.5px] mt-0.5">Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. LEFT PHONE — HRMS Enterprise Dashboard
// ==========================================
export function PulseWorkScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-xs space-y-2 select-none h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 font-bold text-[10px]">
            AR
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-[12px] font-bold text-white tracking-tight">PulseWork HR</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span className="text-[9px] text-neutral-400">Engineering HQ · Austin</span>
          </div>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-medium flex items-center space-x-1">
          <MapPin className="h-2.5 w-2.5" />
          <span>Geo-Verified</span>
        </div>
      </div>

      {/* Shift & Attendance Status Card */}
      <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-950/60 via-indigo-950/40 to-neutral-900 border border-blue-500/30 text-center relative overflow-hidden">
        <span className="text-[9.5px] text-blue-300 font-medium tracking-wide uppercase">
          Today&apos;s Active Shift
        </span>
        <div className="text-2xl font-black text-white tracking-tight mt-0.5">09:14 AM</div>
        <p className="text-[9px] text-neutral-300 mt-0.5">Shift Window: 09:00 - 18:00 CST (Core)</p>
        
        {/* Working Hours Live Bar */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[9.5px]">
          <span className="text-neutral-400">Hours Logged:</span>
          <span className="text-emerald-400 font-mono font-bold">5h 42m / 8h 00m</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 mt-1 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full w-[71%]" />
        </div>
      </div>

      {/* Attendance Stats & Leave Balances */}
      <div className="grid grid-cols-2 gap-2 text-left">
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/6">
          <div className="flex items-center text-blue-400 space-x-1 mb-0.5">
            <CalendarCheck className="h-3 w-3" />
            <span className="text-[9px] text-neutral-400">Monthly Avg</span>
          </div>
          <div className="text-base font-bold text-white leading-tight">98.4%</div>
          <span className="text-[8px] text-emerald-400 font-medium">On-time index</span>
        </div>

        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/6">
          <div className="flex items-center text-purple-400 space-x-1 mb-0.5">
            <Clock className="h-3 w-3" />
            <span className="text-[9px] text-neutral-400">Paid Leave</span>
          </div>
          <div className="text-base font-bold text-white leading-tight">18 Days</div>
          <span className="text-[8px] text-purple-300 font-medium">Available to apply</span>
        </div>
      </div>

      {/* Recent Approvals & Shift List */}
      <div className="space-y-1.5 flex-1">
        <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block px-0.5">
          Workflow Approvals
        </span>
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/6 flex items-center justify-between text-left">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="font-bold text-[10px] text-white leading-tight">WFH Request Approved</p>
              <p className="text-[8px] text-neutral-400">Signed by VP Engineering · 2h ago</p>
            </div>
          </div>
          <ChevronRight className="h-3 w-3 text-neutral-500" />
        </div>
      </div>

      {/* Clock Out Action & Bottom HR Navigation */}
      <div className="space-y-2 pt-1 border-t border-white/10">
        <div className="w-full py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-semibold text-[10.5px] flex items-center justify-center space-x-1.5">
          <Clock className="h-3 w-3 text-blue-400" />
          <span>Clock Out &amp; Log Timesheet</span>
        </div>

        <div className="flex items-center justify-around py-1 text-neutral-400 text-[9px]">
          <div className="flex flex-col items-center text-blue-400 font-semibold">
            <CalendarCheck className="h-3.5 w-3.5" />
            <span className="text-[7.5px] mt-0.5">Attendance</span>
          </div>
          <div className="flex flex-col items-center hover:text-white">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-[7.5px] mt-0.5">Leaves</span>
          </div>
          <div className="flex flex-col items-center hover:text-white">
            <UserCheck className="h-3.5 w-3.5" />
            <span className="text-[7.5px] mt-0.5">Team</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. RIGHT PHONE — Cortex AI Copilot
// ==========================================
export function CortexAIScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-xs space-y-2 select-none h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-[12px] font-bold text-white tracking-tight">Cortex AI</span>
              <span className="text-[8.5px] px-1.5 py-0.2 rounded-full bg-purple-500/20 text-purple-300 font-mono">
                v4.2 RAG
              </span>
            </div>
            <span className="text-[9px] text-emerald-400 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
              Connected to Enterprise Graph
            </span>
          </div>
        </div>
        <div className="h-6 w-6 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-neutral-300">
          <Sparkles className="h-3.5 w-3.5 text-pink-400" />
        </div>
      </div>

      {/* Chat Messages Conversation Stream */}
      <div className="space-y-2 flex-1 justify-end flex flex-col text-left">
        {/* User Query */}
        <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[10.5px] text-neutral-200 self-end max-w-[88%] shadow-sm">
          Diagnose latency spike in payments service API cluster.
        </div>

        {/* Assistant Response Card */}
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-950/60 to-neutral-900 border border-purple-500/30 text-[10.5px] text-neutral-200 self-start max-w-[94%] space-y-1.5 shadow-md">
          <div className="flex items-center justify-between text-[9px] text-purple-300 font-semibold border-b border-purple-500/20 pb-1">
            <div className="flex items-center space-x-1">
              <Sparkles className="h-2.5 w-2.5 text-pink-400" />
              <span>Root-Cause Diagnostic Analysis</span>
            </div>
            <span className="font-mono text-emerald-400">99.8% Conf.</span>
          </div>
          <p className="leading-snug text-neutral-300 text-[10px]">
            Redis connection pool reached threshold (850/1000). Rebalancing shards to US-East-2 resolved queued threads.
          </p>
        </div>

        {/* Suggested Quick Prompt Chips */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5 no-scrollbar">
          <span className="px-2 py-0.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[9px] text-neutral-300 whitespace-nowrap">
            ⚡ Run auto-scale rule
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[9px] text-neutral-300 whitespace-nowrap">
            📊 Export metrics
          </span>
        </div>
      </div>

      {/* Input Message Composer Bar */}
      <div className="p-1.5 rounded-xl bg-white/[0.06] border border-white/12 flex items-center justify-between mt-1">
        <span className="text-[10px] text-neutral-400 pl-2">Ask Cortex or summarize telemetry...</span>
        <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
          <Send className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. FOURTH SCREEN — VenturePulse Analytics
// ==========================================
export function AnalyticsDashboardScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-xs space-y-2 select-none h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div>
          <span className="text-[9.5px] text-neutral-400 block font-medium">Enterprise Telemetry</span>
          <span className="text-[12px] font-bold text-white tracking-tight">VenturePulse</span>
        </div>
        <div className="flex items-center space-x-1 text-[9.5px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>99.98%</span>
        </div>
      </div>

      {/* Core KPIs */}
      <div className="grid grid-cols-2 gap-2 text-left">
        <div className="p-2 rounded-xl bg-gradient-to-br from-purple-900/40 via-neutral-900 to-black border border-purple-500/25">
          <span className="text-[9px] text-neutral-400 block">MRR Growth</span>
          <div className="text-base font-black text-white mt-0.5">$84.6k</div>
          <span className="text-[8.5px] text-emerald-400 flex items-center font-medium mt-0.5">
            <TrendingUp className="h-2.5 w-2.5 mr-0.5" /> +28.4%
          </span>
        </div>

        <div className="p-2 rounded-xl bg-gradient-to-br from-pink-950/40 via-neutral-900 to-black border border-pink-500/25">
          <span className="text-[9px] text-neutral-400 block">Active Users</span>
          <div className="text-base font-black text-white mt-0.5">14.2k</div>
          <span className="text-[8.5px] text-pink-400 flex items-center font-medium mt-0.5">
            <TrendingUp className="h-2.5 w-2.5 mr-0.5" /> +19.1%
          </span>
        </div>
      </div>

      {/* Mini Visual Bar Chart */}
      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/6 text-left space-y-1">
        <div className="flex items-center justify-between text-[9.5px]">
          <span className="text-neutral-400">Conversion Funnel</span>
          <span className="text-purple-300 font-mono">3.4x Uplift</span>
        </div>
        <div className="h-12 w-full flex items-end space-x-1 pt-1">
          {[35, 48, 62, 54, 78, 68, 85, 92, 80, 100].map((val, idx) => (
            <div
              key={idx}
              className="flex-1 rounded-t bg-gradient-to-t from-purple-600/40 via-pink-500/70 to-blue-400"
              style={{ height: `${val}%` }}
            />
          ))}
        </div>
      </div>

      {/* Quick Status Bar */}
      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/6 flex items-center justify-between text-left">
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle className="h-3 w-3" />
          </div>
          <div>
            <p className="font-semibold text-[9.5px] text-white leading-tight">Cloud Pipelines Synced</p>
            <p className="text-[8px] text-neutral-400">AWS &amp; Vercel Edge Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
