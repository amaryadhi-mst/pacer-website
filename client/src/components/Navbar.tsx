import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import {
  Menu, X, ChevronDown, Award, FileText, BookOpen, Briefcase,
  Users, Building2, LogOut, LayoutDashboard, User, MessageSquare,
  Scale, Download, Video, Wrench, MapPin, Phone, Mail
} from "lucide-react";

const LOGO_URL = "/manus-storage/pacer-logo-horizontal_c5716704.png";

interface DropdownItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  sublabel?: string;
}

interface DropdownGroup {
  title?: string;
  items: DropdownItem[];
}

function NavDropdown({ label, groups, icon }: { label: string; groups: DropdownGroup[]; icon?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-1 text-sm font-medium transition-colors px-3 py-2 rounded-md"
        style={{ color: "#374151" }}
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseOver={e => (e.currentTarget as HTMLButtonElement).style.color = "#1E40AF"}
        onMouseOut={e => (e.currentTarget as HTMLButtonElement).style.color = "#374151"}
      >
        {icon}
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-1 dropdown-menu min-w-[220px] py-2 px-1 z-50"
          onMouseLeave={() => setOpen(false)}
        >
          {groups.map((group, gi) => (
            <div key={gi}>
              {group.title && (
                <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#1E40AF", borderBottom: "1px solid rgba(37,99,235,0.10)" }}>
                  {group.title}
                </div>
              )}
              {group.items.map((item, ii) => (
                <Link key={ii} href={item.href} className="dropdown-item" onClick={() => setOpen(false)}>
                  {item.icon && <span style={{ color: "#2563EB" }}>{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              ))}
              {gi < groups.length - 1 && <hr style={{ borderColor: "rgba(59,130,246,0.10)", margin: "4px 0" }} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => { logout(); window.location.href = "/"; }
  });

  const servicesGroups: DropdownGroup[] = [
    {
      title: "Professional Certification",
      items: [
        { label: "ISO 9001 — Quality Management", href: "/services/certification/iso9001", icon: <Award size={14} /> },
        { label: "ISO 14001 — Environmental", href: "/services/certification/iso14001", icon: <Award size={14} /> },
        { label: "ISO 45001 — OHS Auditor", href: "/services/certification/iso45001", icon: <Award size={14} /> },
        { label: "ISO 27001 — Information Security", href: "/services/certification/iso27001", icon: <Award size={14} /> },
        { label: "ISO 22000 — Food Safety", href: "/services/certification/iso22000", icon: <Award size={14} /> },
        { label: "BNSP Certifications", href: "/services/certification/bnsp", icon: <Award size={14} /> },
      ],
    },
    {
      title: "Other Services",
      items: [
        { label: "Professional Curriculum (CV)", href: "/services/verified-cv", icon: <FileText size={14} /> },
        { label: "Professional Training", href: "/services/training", icon: <BookOpen size={14} /> },
        { label: "Career — Individuals", href: "/services/career/individuals", icon: <User size={14} /> },
        { label: "Career — Corporations", href: "/services/career/corporations", icon: <Building2 size={14} /> },
      ],
    },
  ];

  const resourcesGroups: DropdownGroup[] = [
    {
      items: [
        { label: "Blog & Articles", href: "/resources/blog", icon: <FileText size={14} /> },
        { label: "Download Center", href: "/resources/downloads", icon: <Download size={14} /> },
        { label: "Webinar Library", href: "/resources/webinars", icon: <Video size={14} /> },
        { label: "Tools & Calculators", href: "/resources/tools", icon: <Wrench size={14} /> },
      ],
    },
  ];

  const complaintsGroups: DropdownGroup[] = [
    {
      items: [
        { label: "Submit Complaint", href: "/complaints", icon: <MessageSquare size={14} /> },
        { label: "Submit Appeal", href: "/appeals", icon: <Scale size={14} /> },
      ],
    },
  ];

  const partnersGroups: DropdownGroup[] = [
    {
      items: [
        { label: "Training Partners", href: "/partners/training", icon: <BookOpen size={14} /> },
        { label: "Certification Partners", href: "/partners/certification", icon: <Award size={14} /> },
      ],
    },
  ];

  const aboutGroups: DropdownGroup[] = [
    {
      items: [
        { label: "Our Story & Vision", href: "/about/story", icon: <Users size={14} /> },
        { label: "Certification Schemes", href: "/about/scheme", icon: <Award size={14} /> },
        { label: "Quality Policy", href: "/about/quality-policy", icon: <FileText size={14} /> },
        { label: "Contact Information", href: "/about/contact", icon: <MapPin size={14} /> },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 nav-silver">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src={LOGO_URL} alt="PACER" className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="text-sm font-medium px-3 py-2 rounded-md transition-colors"
              style={{ color: location === "/" ? "#1E40AF" : "#374151", fontWeight: location === "/" ? 600 : 500 }}
            >
              Home
            </Link>
            <NavDropdown label="Services" groups={servicesGroups} icon={<Award size={14} />} />
            <NavDropdown label="Resources" groups={resourcesGroups} icon={<BookOpen size={14} />} />
            <NavDropdown label="Complaints & Appeals" groups={complaintsGroups} icon={<MessageSquare size={14} />} />
            <NavDropdown label="Partners" groups={partnersGroups} icon={<Users size={14} />} />
            <NavDropdown label="About" groups={aboutGroups} icon={<Building2 size={14} />} />
          </div>

          {/* Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2 rounded-md"
                  style={{ color: "#374151" }}
                >
                  <LayoutDashboard size={15} />
                  Dashboard
                </Link>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md" style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.40)", color: "#92400E" }}>
                    {(user?.name ?? "U").charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm max-w-[120px] truncate" style={{ color: "#374151" }}>{user?.name ?? "User"}</span>
                </div>
                <button
                  onClick={() => logoutMutation.mutate()}
                  className="flex items-center gap-1 text-sm transition-colors px-2 py-2"
                  style={{ color: "#94A3B8" }}
                  onMouseOver={e => (e.currentTarget as HTMLButtonElement).style.color = "#EF4444"}
                  onMouseOut={e => (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8"}
                >
                  <LogOut size={14} />
                </button>
              </div>
            ) : (
              <a href={getLoginUrl()} className="btn-primary text-sm py-2 px-4">
                Login / Register
              </a>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 transition-colors"
            style={{ color: "#374151" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden py-4" style={{ borderTop: "1px solid rgba(59,130,246,0.12)", background: "#FFFFFF" }}>
          <div className="container space-y-1">
            <MobileLink href="/" label="Home" onClick={() => setMobileOpen(false)} />
            <MobileSection label="Services">
              <MobileLink href="/services/certification/iso9001" label="ISO 9001 — Quality Management" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/certification/iso14001" label="ISO 14001 — Environmental" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/certification/iso45001" label="ISO 45001 — OHS" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/certification/iso27001" label="ISO 27001 — Info Security" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/certification/iso22000" label="ISO 22000 — Food Safety" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/certification/bnsp" label="BNSP Certifications" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/verified-cv" label="Professional Curriculum (CV)" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/training" label="Professional Training" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/career/individuals" label="Career — Individuals" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/services/career/corporations" label="Career — Corporations" onClick={() => setMobileOpen(false)} sub />
            </MobileSection>
            <MobileSection label="Resources">
              <MobileLink href="/resources/blog" label="Blog & Articles" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/resources/downloads" label="Download Center" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/resources/webinars" label="Webinars" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/resources/tools" label="Tools & Calculators" onClick={() => setMobileOpen(false)} sub />
            </MobileSection>
            <MobileLink href="/complaints" label="Submit Complaint" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/appeals" label="Submit Appeal" onClick={() => setMobileOpen(false)} />
            <MobileSection label="Partners">
              <MobileLink href="/partners/training" label="Training Partners" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/partners/certification" label="Certification Partners" onClick={() => setMobileOpen(false)} sub />
            </MobileSection>
            <MobileSection label="About">
              <MobileLink href="/about/story" label="Our Story & Vision" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/about/scheme" label="Certification Schemes" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/about/quality-policy" label="Quality Policy" onClick={() => setMobileOpen(false)} sub />
              <MobileLink href="/about/contact" label="Contact" onClick={() => setMobileOpen(false)} sub />
            </MobileSection>
            <div className="pt-3" style={{ borderTop: "1px solid rgba(59,130,246,0.10)" }}>
              {isAuthenticated ? (
                <div className="space-y-1">
                  <MobileLink href="/dashboard" label="My Dashboard" onClick={() => setMobileOpen(false)} />
                  <button
                    onClick={() => { logoutMutation.mutate(); setMobileOpen(false); }}
                    className="w-full text-left px-3 py-2 text-sm rounded-md"
                    style={{ color: "#EF4444" }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <a href={getLoginUrl()} className="btn-primary w-full justify-center text-sm py-2.5">
                  Login / Register
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileLink({ href, label, onClick, sub }: { href: string; label: string; onClick: () => void; sub?: boolean }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-sm rounded-md transition-colors"
      style={{ color: sub ? "#6B7280" : "#374151", paddingLeft: sub ? "1.5rem" : undefined }}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function MobileSection({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md"
        style={{ color: "#374151" }}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="mt-1 space-y-0.5">{children}</div>}
    </div>
  );
}
