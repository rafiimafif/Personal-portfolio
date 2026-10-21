import { Link } from "react-router-dom";
import { Home, Boxes } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NotFound = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-24 pb-16 flex items-center justify-center px-4">
      <div
        className={`text-center max-w-xl w-full mx-auto relative z-10 p-8 sm:p-10 rounded-2xl border ${
          isLight
            ? "bg-white border-slate-200 shadow-sm"
            : "bg-slate-900/80 border-slate-800"
        }`}
      >
        <p
          className={`text-xs font-mono uppercase tracking-widest mb-2 ${
            isLight ? "text-emerald-700" : "text-emerald-400"
          }`}
        >
          HTTP 404 &middot; Route Unresolved
        </p>

        <h1
          className={`text-6xl sm:text-7xl font-extrabold font-mono tracking-tight mb-4 ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          404
        </h1>

        <h2
          className={`text-2xl sm:text-3xl font-bold mb-3 ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          Page Not Found
        </h2>

        <p
          className={`text-sm sm:text-base mb-8 leading-relaxed ${
            isLight ? "text-slate-600" : "text-slate-400"
          }`}
        >
          The requested path does not match any active route on this portfolio. Use the navigation links below to return to the main overview or inspect project architectures.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold transition-colors border ${
              isLight
                ? "bg-slate-900 border-slate-900 text-white hover:bg-slate-800"
                : "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-500"
            }`}
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/projects"
            className={`inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold transition-colors border ${
              isLight
                ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
                : "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800"
            }`}
          >
            <Boxes className="w-4 h-4" aria-hidden="true" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
