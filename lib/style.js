const styles = {
  "modern-sass": {
    name: "Modern Sass",
    dark: {
      h1: "text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-extrabold text-white mb-6 drop-shadow-xl tracking-tight leading-[1.05]",
      h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 tracking-tight leading-snug text-white",
      h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight leading-[1.25]",
      h4: "text-white/90 font-medium mb-2 md:mb-3 text-xs sm:text-sm uppercase tracking-wider",
      p: "text-sm sm:text-base md:text-lg text-white/70 max-w-prose leading-relaxed font-light mb-5",
      p_sm: "text-xs sm:text-sm text-white/80 leading-relaxed mb-5 font-light",
      p_xs: "text-[11px] sm:text-xs text-white/60 leading-relaxed font-mono",
      label_mono:
        "text-[11px] uppercase tracking-[0.2em] text-white/60 font-mono",
      badge:
        "text-xs font-mono px-2.5 py-1 rounded-md bg-white/10 text-white/80 border border-white/20 w-fit",
    },
    light: {
      h1: "text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-extrabold text-gray-900 mb-6 drop-shadow-sm tracking-tight leading-[1.05]",
      h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-5 tracking-tight leading-snug",
      h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-5 tracking-tight leading-[1.25]",
      h4: "text-gray-600 font-medium mb-2 md:mb-3 text-xs sm:text-sm uppercase tracking-wider",
      p: "text-sm sm:text-base md:text-lg text-gray-700 max-w-prose leading-relaxed font-light mb-5",
      p_sm: "text-xs sm:text-sm text-gray-800 leading-relaxed mb-5 font-light",
      p_xs: "text-[11px] sm:text-xs text-gray-600 leading-relaxed font-mono",
      label_mono:
        "text-[11px] uppercase tracking-[0.2em] text-gray-500 font-mono",
      badge:
        "text-xs font-mono px-2.5 py-1 rounded-md bg-gray-200 text-gray-800 border border-gray-300 w-fit",
    },
  },

  minimal: {
    name: "Super Minimal",
    dark: {
      h1: "text-xl sm:text-2xl tracking-tight leading-tight font-semibold text-zinc-100",
      h2: "text-base sm:text-lg text-zinc-100 font-medium",
      h3: "font-medium text-zinc-200 underline decoration-zinc-400/50 underline-offset-2 transition-colors",
      h4: "text-xs sm:text-sm font-medium text-zinc-100",
      p: "text-sm sm:text-base text-zinc-400",
      p_sm: "text-xs sm:text-sm text-zinc-400",
      p_xs: "text-[11px] sm:text-xs text-zinc-400",
      label_mono: "text-[11px] sm:text-xs text-zinc-500",
      badge: "py-1 text-sm text-zinc-300 w-fit",
    },
    light: {
      h1: "text-xl sm:text-2xl tracking-tight leading-tight font-semibold text-zinc-900",
      h2: "text-base sm:text-lg text-zinc-900 font-medium",
      h3: "font-medium text-zinc-800 underline decoration-zinc-500/50 underline-offset-2 transition-colors",
      h4: "text-xs sm:text-sm font-medium text-zinc-900",
      p: "text-sm sm:text-base text-zinc-700",
      p_sm: "text-xs sm:text-sm text-zinc-600",
      p_xs: "text-[11px] sm:text-xs text-zinc-600",
      label_mono: "text-[11px] sm:text-xs text-zinc-600",
      badge: "py-1 text-sm text-zinc-700 w-fit",
    },
  },

  corporate: {
    name: "Corporate",
    light: {
      h1: "text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.15]",
      h2: "text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.15]",
      h3: "text-lg sm:text-xl font-medium",
      h4: "text-base sm:text-lg font-semibold text-gray-900",
      p: "text-sm sm:text-base text-gray-600 leading-relaxed",
      p_sm: "text-xs sm:text-sm text-gray-600 leading-relaxed",
      p_xs: "text-[11px] sm:text-xs text-gray-500 font-medium",
      label_mono: "text-[11px] uppercase tracking-widest text-gray-500",
      badge:
        "px-4 sm:px-6 py-1.5 sm:py-2.5 text-xs font-semibold rounded-full text-white bg-gray-900 w-fit",
    },
    dark: {
      h1: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-white",
      h2: "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15] text-zinc-100",
      h3: "text-lg sm:text-xl font-medium text-zinc-200",
      h4: "text-base sm:text-lg font-semibold text-zinc-100",
      p: "text-sm sm:text-base text-zinc-300 leading-relaxed",
      p_sm: "text-xs sm:text-sm text-zinc-400 leading-relaxed",
      p_xs: "text-[11px] sm:text-xs text-zinc-500 font-medium",
      label_mono: "text-[11px] uppercase tracking-widest text-zinc-400",
      badge:
        "px-4 sm:px-6 py-1.5 sm:py-2.5 text-xs font-semibold rounded-full bg-blue-800 text-white w-fit",
    },
  },
};

export default styles;
