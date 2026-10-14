import React from "react";
import {
  TrendingDown,
  TrendingUp,
  Users,
  CalendarCheck,
  Clock,
  Sparkles,
  Bot,
  Send,
  Plus,
  Receipt,
  PieChart,
  Wallet,
  ArrowDownLeft,
} from "lucide-react";

// ==========================================
// 1. SMART SPLIT MOBILE DASHBOARD (Akhlaque)
// ==========================================
export function AkhlaqueSmartSplitMobileScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-xs space-y-2 select-none h-full bg-[#0a0c14] text-white">
      {/* Top App Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-[10px] shadow-sm">
            AR
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-[12px] font-bold text-white tracking-tight">SmartSplit</span>
              <span className="text-[8px] px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-400 font-medium">
                Live
              </span>
            </div>
            <span className="text-[9px] text-neutral-400">Akhlaque Rahman</span>
          </div>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[9px] font-semibold flex items-center space-x-1">
          <Sparkles className="h-2.5 w-2.5 text-pink-400" />
          <span>Dev Mode</span>
        </div>
      </div>

      {/* Greeting Banner */}
      <div className="px-1">
        <h4 className="text-[13px] font-bold tracking-tight text-white flex items-center">
          Good Night, Akhlaque <span className="ml-1 text-sm">👋</span>
        </h4>
        <div className="flex items-center space-x-2 text-[9px] text-neutral-400 mt-0.5">
          <span className="flex items-center text-amber-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-1" /> 0 pending
          </span>
          <span className="flex items-center text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1" /> You are owed ₹14.38
          </span>
        </div>
      </div>

      {/* Total Balance & Ledger Cards */}
      <div className="grid grid-cols-2 gap-2 text-left">
        <div className="p-2.5 rounded-2xl bg-gradient-to-br from-purple-950/70 via-neutral-900 to-black border border-purple-500/30 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-purple-300 font-semibold uppercase">Total Balance</span>
            <Wallet className="h-3 w-3 text-purple-400" />
          </div>
          <div className="text-xl font-black text-white mt-1">₹13.53</div>
          <span className="text-[8px] text-emerald-400 font-medium flex items-center mt-0.5">
            <TrendingUp className="h-2.5 w-2.5 mr-0.5" /> +4.2%
          </span>
        </div>

        <div className="p-2.5 rounded-2xl bg-gradient-to-br from-pink-950/60 via-neutral-900 to-black border border-pink-500/30 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-pink-300 font-semibold uppercase">You Owe</span>
            <ArrowDownLeft className="h-3 w-3 text-pink-400" />
          </div>
          <div className="text-xl font-black text-white mt-1">₹0.85</div>
          <span className="text-[8px] text-pink-400 font-medium flex items-center mt-0.5">
            <TrendingDown className="h-2.5 w-2.5 mr-0.5" /> -12.5%
          </span>
        </div>
      </div>

      {/* Spending Trends Card */}
      <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/6 text-left">
        <div className="flex items-center justify-between text-[9px] mb-1">
          <span className="font-bold text-neutral-300 uppercase tracking-wider">Spending Trends</span>
          <span className="text-pink-400 font-medium">Recent Days</span>
        </div>
        <div className="h-10 w-full flex items-end space-x-1 pt-1">
          {[20, 35, 75, 95, 60, 40, 25, 15].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-blue-600/40 via-purple-500/80 to-pink-500"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Top Groups Mini Breakdown */}
      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/6 flex items-center justify-between text-left">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
            <PieChart className="h-3 w-3" />
          </div>
          <div>
            <p className="font-bold text-[10px] text-white leading-tight">Total Spent: ₹24,943</p>
            <p className="text-[8px] text-neutral-400">5 active friends in groups</p>
          </div>
        </div>
        <span className="text-[9px] text-emerald-400 font-mono font-bold">+₹14.38</span>
      </div>

      {/* Bottom Actions */}
      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
        <div className="py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-[10px] flex items-center justify-center space-x-1 shadow-md">
          <Plus className="h-3 w-3" />
          <span>Create Group</span>
        </div>
        <div className="py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-[10px] flex items-center justify-center space-x-1">
          <Sparkles className="h-3 w-3 text-pink-400" />
          <span>AI Assist</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. HRMS SHIFT & ATTENDANCE MOBILE SCREEN
// ==========================================
export function AkhlaqueHRMSMobileScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-xs space-y-2 select-none h-full bg-[#080a12] text-white">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 font-bold text-[10px]">
            AR
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-[12px] font-bold text-white tracking-tight">HRMS Pro</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span className="text-[9px] text-neutral-400">Mobiloitte Internship</span>
          </div>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-medium">
          Shift Completed
        </div>
      </div>

      {/* Calendar Overview Card */}
      <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-950/60 via-indigo-950/40 to-neutral-900 border border-blue-500/30 text-center relative overflow-hidden">
        <div className="flex items-center justify-between text-[9.5px]">
          <span className="text-blue-300 font-medium">October 2026</span>
          <span className="text-emerald-400 font-mono font-semibold">Evening Shift</span>
        </div>
        <div className="text-xl font-black text-white tracking-tight mt-1">15:00 - 00:00</div>
        <p className="text-[9px] text-neutral-300 mt-0.5">Working Days: Excl. Sunday · Target: 27</p>

        {/* Mini Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mt-2.5 pt-2 border-t border-white/10 text-[8px] font-mono">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="text-neutral-400 font-semibold text-center">{d}</div>
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
            <div
              key={num}
              className={`p-1 rounded text-center ${
                num === 14
                  ? "bg-purple-600 text-white font-bold ring-1 ring-white/50"
                  : num === 9
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : num % 7 === 0 || num % 7 === 6
                  ? "bg-neutral-800 text-neutral-400"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Stats Cards */}
      <div className="grid grid-cols-2 gap-2 text-left">
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/6">
          <div className="flex items-center text-blue-400 space-x-1 mb-0.5">
            <CalendarCheck className="h-3 w-3" />
            <span className="text-[9px] text-neutral-400">Present</span>
          </div>
          <div className="text-sm font-bold text-white">8.0h worked</div>
          <span className="text-[8px] text-emerald-400 font-medium">Punch Verified</span>
        </div>

        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/6">
          <div className="flex items-center text-purple-400 space-x-1 mb-0.5">
            <Clock className="h-3 w-3" />
            <span className="text-[9px] text-neutral-400">Break Log</span>
          </div>
          <div className="text-sm font-bold text-white">60 Mins</div>
          <span className="text-[8px] text-purple-300 font-medium">Lunch &amp; Tea</span>
        </div>
      </div>

      {/* Clock In / Out Action */}
      <div className="space-y-1.5 pt-1 border-t border-white/10">
        <div className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-[10px] flex items-center justify-center space-x-1.5 shadow-md">
          <Clock className="h-3 w-3" />
          <span>Clock Out &amp; Punch Log</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. SMARTSPLIT AI CONVERSATIONAL ASSISTANT
// ==========================================
export function AkhlaqueSmartSplitAIScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-xs space-y-2 select-none h-full bg-[#ffffff] text-neutral-900 rounded-[30px] p-1">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-2 px-1">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-[11px] shadow-sm">
            AI
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-[12px] font-bold text-neutral-900 tracking-tight">SmartSplit AI</span>
              <span className="text-[8px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                Online
              </span>
            </div>
            <span className="text-[9px] text-neutral-500">Intelligent Assistant</span>
          </div>
        </div>
        <span className="text-[8.5px] px-2 py-0.5 rounded bg-neutral-900 text-emerald-400 font-mono font-bold">
          DEV MODE
        </span>
      </div>

      {/* Greeting Bubble */}
      <div className="flex flex-col items-center justify-center py-2 text-center px-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-xs mb-1.5 shadow-md">
          AI
        </div>
        <h4 className="text-[13px] font-bold text-neutral-900">Hello! 👋</h4>
        <p className="text-[10px] text-neutral-500 leading-tight mt-0.5">
          I&apos;m SmartSplit AI. I can help you with groups, expenses, and settlements.
        </p>
      </div>

      {/* 4 Action Chips */}
      <div className="grid grid-cols-2 gap-1.5 px-1">
        <div className="p-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center space-x-1.5 text-neutral-800 font-semibold text-[9.5px]">
          <Users className="h-3 w-3 text-blue-600" />
          <span>Create Group</span>
        </div>
        <div className="p-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center space-x-1.5 text-neutral-800 font-semibold text-[9.5px]">
          <Receipt className="h-3 w-3 text-purple-600" />
          <span>Add Expense</span>
        </div>
        <div className="p-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center space-x-1.5 text-neutral-800 font-semibold text-[9.5px]">
          <PieChart className="h-3 w-3 text-pink-600" />
          <span>Reports Analytics</span>
        </div>
        <div className="p-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center space-x-1.5 text-neutral-800 font-semibold text-[9.5px]">
          <Bot className="h-3 w-3 text-emerald-600" />
          <span>What can you do</span>
        </div>
      </div>

      {/* Bottom Filter & Input Bar */}
      <div className="pt-1 border-t border-neutral-200 space-y-1.5 px-1">
        <div className="flex items-center space-x-1 overflow-x-auto text-[8.5px] font-medium text-neutral-600 py-0.5 no-scrollbar">
          <span className="px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 whitespace-nowrap">
            💳 Balance
          </span>
          <span className="px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 whitespace-nowrap">
            📄 Recent Expenses
          </span>
        </div>
        <div className="p-1.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
          <span className="text-[9.5px] text-neutral-400 pl-1.5">Ask SmartSplit AI...</span>
          <div className="h-5 w-5 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <Send className="h-2.5 w-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
