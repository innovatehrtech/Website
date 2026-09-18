import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Download as DownloadIcon,
  Search as SearchIcon,
  ShieldCheck as ShieldCheckIcon,
  AlertTriangle as AlertTriangleIcon,
  Info as InfoIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon
} from 'lucide-react';
import '../css/ComplianceCalendar.css';

// Initial Statutory Compliance Data
const complianceData = [
  {
    id: 1,
    act: "Employees' Provident Fund Act, 1952",
    form: "Form 5, 10 & ECR Filing",
    frequency: "Monthly",
    dueDate: "15th of every month",
    penalty: "Damages under Sec 14B + 12% p.a. Interest under Sec 7Q.",
    status: "Critical",
    category: "Social Security"
  },
  {
    id: 2,
    act: "Employees' State Insurance Act, 1948",
    form: "ESIC Online Contribution Payment",
    frequency: "Monthly",
    dueDate: "15th of every month",
    penalty: "Simple interest for late deposit + Imprisonment under Sec 85.",
    status: "Critical",
    category: "Social Security"
  },
  {
    id: 3,
    act: "Professional Tax (PT) Act",
    form: "Form III Return & Tax Remittance",
    frequency: "Monthly / Annual",
    dueDate: "Last date of following month / 30th April",
    penalty: "Interest + penalty of total tax liability.",
    status: "Mandatory",
    category: "State Tax"
  },
  {
    id: 4,
    act: "Income Tax Act, 1961 (TDS)",
    form: "Form 24Q Quarterly Salary TDS",
    frequency: "Quarterly",
    dueDate: "31st July, 31st Oct, 31st Jan, 31st May",
    penalty: "Late fee under Sec 234E + Interest under Sec 201(1A).",
    status: "Critical",
    category: "Direct Tax"
  },
  {
    id: 5,
    act: "Labour Welfare Fund (MLWF) Act",
    form: "Form A1 Statement & Contribution",
    frequency: "Bi-Annual",
    dueDate: "30th June & 31st December",
    penalty: "Interest on delayed payment + fine.",
    status: "Mandatory",
    category: "Social Security"
  },
  {
    id: 6,
    act: "Contract Labour (R&A) Act, 1970",
    form: "Form XXIV Unified Annual Return",
    frequency: "Annual",
    dueDate: "15th February following calendar year",
    penalty: "Fine or Imprisonment for Principal Employer.",
    status: "Audit Focus",
    category: "Contract Labour"
  },
  {
    id: 7,
    act: "Factories Act, 1948",
    form: "Form 22 Annual Return & Safety Audit",
    frequency: "Annual",
    dueDate: "31st January",
    penalty: "Fine for occupier/factory manager.",
    status: "High Liability",
    category: "Safety & Factory"
  },
  {
    id: 8,
    act: "Payment of Bonus Act, 1965",
    form: "Form D Annual Return",
    frequency: "Annual",
    dueDate: "Within 30 days of bonus payout deadline (30th Nov)",
    penalty: "Imprisonment up to 6 months on non-payment of bonus under Sec 28.",
    status: "Mandatory",
    category: "Social Security"
  },
  {
    id: 9,
    act: "POSH Act, 2013",
    form: "Annual Compliance Report",
    frequency: "Annual",
    dueDate: "31st December / District Officer submission deadline",
    penalty: "Fine and cancellation of business license on repeated default.",
    status: "Critical",
    category: "Governance"
  },
  {
    id: 10,
    act: "Shops & Establishment Act",
    form: "Registration Renewal & License Amendment",
    frequency: "Annual / Multi-Year",
    dueDate: "30 days before registration expiry date",
    penalty: "Fine for violation and seal order on establishment.",
    status: "Mandatory",
    category: "Shops & Establishments"
  },
  {
    id: 11,
    act: "Shops & Establishment Act (Muster Roll)",
    form: "Form I & II Leave & Attendance Registers",
    frequency: "Monthly / Annual",
    dueDate: "Continuous maintenance & annual filing by 31st Jan",
    penalty: "Fine for unmaintained or missing muster roll during inspection.",
    status: "Critical",
    category: "Shops & Establishments"
  },
  {
    id: 12,
    act: "Shops & Establishment Act (Notices)",
    form: "Form L Opening/Closing Hours & Weekly Off Display",
    frequency: "Permanent / Annual",
    dueDate: "Mandatory display at main premises entrance",
    penalty: "Fine for non-display of statutory working hours notice.",
    status: "Audit Focus",
    category: "Shops & Establishments"
  }
];

const categories = [
  "All",
  "Shops & Establishments",
  "Social Security",
  "Direct Tax",
  "State Tax",
  "Safety & Factory",
  "Contract Labour",
  "Governance"
];

export default function ComplianceCalendar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Export CSV Handler
  const handleExportCalendar = () => {
    const csvRows = [
      ["Act / Regulation", "Compliance Form", "Frequency", "Statutory Due Date", "Penalty Exposure", "Status", "Category"],
      ...complianceData.map(r => [
        `"${r.act}"`,
        `"${r.form}"`,
        `"${r.frequency}"`,
        `"${r.dueDate}"`,
        `"${r.penalty}"`,
        `"${r.status}"`,
        `"${r.category}"`
      ])
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Statutory_Compliance_Calendar_2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter data by search query and category
  const filteredData = complianceData.filter((row) => {
    const matchesSearch =
      row.act.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.form.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.penalty.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || row.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section id="calendar" className="py-24 bg-slate-50 border-t border-slate-200 relative compliance-calendar-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 compliance-calendar-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 calendar-header-row">
          <div className="space-y-3 max-w-2xl calendar-header-info">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider calendar-badge">
              <CalendarIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>Statutory Compliance Calendar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight calendar-header-title">
              Interactive Due Date & Penalty Tracker
            </h2>
            <p className="text-slate-600 text-sm sm:text-base calendar-header-subtitle">
              Monitor key filing deadlines under Shops & Establishments, PF, ESIC, PT, TDS, MLWF, Factory Acts, and CLRA to avoid severe legal damages and interest penalties.
            </p>
          </div>

          <button
            onClick={handleExportCalendar}
            className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-5 py-3 rounded-xl text-xs font-bold transition-all flex-shrink-0 shadow-sm calendar-export-btn"
          >
            <DownloadIcon className="w-4 h-4 text-emerald-600" />
            <span>Export 2026 Statutory Calendar</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4 calendar-filter-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center calendar-filter-grid">

            {/* Search Input */}
            <div className="md:col-span-6 relative calendar-search-box">
              <SearchIcon className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Act name or Form (e.g. PF ECR, Form 24Q, Factories Act)..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors calendar-search-input"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="md:col-span-6 flex flex-wrap gap-2 justify-start md:justify-end calendar-pills-wrapper">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors calendar-pill-btn ${selectedCategory === cat
                    ? 'bg-emerald-600 text-white active'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 inactive'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Searchable Data Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl calendar-table-card">
          <div className="overflow-x-auto calendar-table-overflow">
            <table className="w-full text-left border-collapse compliance-table">
              <thead>
                <tr className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-extrabold border-b border-slate-200">
                  <th className="py-4 px-6">Act / Regulation</th>
                  <th className="py-4 px-6">Compliance Form / Task</th>
                  <th className="py-4 px-6">Frequency</th>
                  <th className="py-4 px-6">Statutory Due Date</th>
                  <th className="py-4 px-6">Delay Penalty Exposure</th>
                  <th className="py-4 px-6 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {currentItems.length > 0 ? (
                  currentItems.map((row) => (
                    <tr key={row.id} className="hover:bg-emerald-50/40 transition-colors group">

                      {/* Act Name */}
                      <td className="py-4 px-6 font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        <div className="flex items-center space-x-2 td-act-name">
                          <ShieldCheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{row.act}</span>
                        </div>
                      </td>

                      {/* Form Name */}
                      <td className="py-4 px-6 text-slate-700 font-mono text-xs font-semibold">
                        <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200 text-slate-800 td-form-code">
                          {row.form}
                        </span>
                      </td>

                      {/* Frequency */}
                      <td className="py-4 px-6 text-slate-600 text-xs font-medium td-frequency">
                        {row.frequency}
                      </td>

                      {/* Due Date */}
                      <td className="py-4 px-6 text-emerald-700 font-extrabold text-xs td-due-date">
                        {row.dueDate}
                      </td>

                      {/* Penalty */}
                      <td className="py-4 px-6 text-xs text-rose-800 max-w-xs">
                        <div className="flex items-start space-x-2 bg-rose-50 border border-rose-200 p-2 rounded-lg font-medium td-penalty-box">
                          <AlertTriangleIcon className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                          <span>{row.penalty}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-block text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border status-badge ${row.status === 'Critical'
                          ? 'bg-rose-100 text-rose-800 border-rose-200 critical'
                          : row.status === 'Mandatory'
                            ? 'bg-amber-100 text-amber-800 border-amber-200 mandatory'
                            : row.status === 'Audit Focus'
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-200 audit-focus'
                              : 'bg-emerald-100 text-emerald-800 border-emerald-200 high-liability'
                          }`}>
                          {row.status}
                        </span>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-slate-500 text-sm">
                      No compliance records match your search query "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls Bar */}
          <div className="calendar-pagination-bar">
            {/* Back Button (Left Side) */}
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-btn pagination-prev"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back</span>
            </button>

            {/* Pagination Info */}
            <div className="pagination-info">
              <span>
                Showing {filteredData.length > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
              </span>
              <span className="pagination-page-badge">Page {currentPage} of {totalPages}</span>
            </div>

            {/* Next Button (Right Side) */}
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || filteredData.length === 0}
              className="pagination-btn pagination-next"
            >
              <span>Next</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Footer Bar */}
          <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium calendar-footer-bar">
            <span className="flex items-center space-x-1.5 calendar-footer-info">
              <InfoIcon className="w-4 h-4 text-emerald-600" />
              <span>Showing {filteredData.length} statutory filing schedules under Indian Labour Codes</span>
            </span>
            <span className="font-mono text-emerald-700 font-bold calendar-accuracy-tag">100% Statutory Accuracy</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export { ComplianceCalendar };
