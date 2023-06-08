[    
    // ====== Custom ======
    {trigger: "inner", replacement: "\\left\\langle $0,\\, $1\\right\\rangle", options: "mA"},

    // Derivatives
    {trigger: "odif", replacement: "\\mathrm{d}${0:x}", options: "mA"},
    {trigger: "pdif", replacement: "\\partial_{${0:x}}", options: "mA"},
    {trigger: "odv", replacement: "\\frac{\\mathrm{d}${0:f}}{\\mathrm{d}${1:x}}", options: "mA"},
    {trigger: "pdv", replacement: "\\frac{\\partial ${0:f}}{\\partial ${1:x}}", options: "mA"},
    {trigger: "(\\d)+d([\\w^{}()\\[\\]]*)d([\\w^{}()\\[\\]]+)", replacement: "\\frac{\\mathrm{d}^{[[0]]}[[1]]}{\\mathrm{d}[[2]]^{[[0]]}}$0", options: "rm"},
    {trigger: "d([\\w^{}()\\[\\]]*)d([\\w^{}()\\[\\]]+)", replacement: "\\frac{\\mathrm{d}[[0]]}{\\mathrm{d}[[1]]}$0", options: "rm"},
    {trigger: "(\\d)+p([\\w^{}()\\[\\]]*)p([\\w^{}()\\[\\]]+)", replacement: "\\frac{\\partial^{[[0]]} [[1]]}{\\partial [[2]]^{[[0]]}}$0", options: "rm"},
    {trigger: "p([\\w^{}()\\[\\]]*)p([\\w^{}()\\[\\]]+)", replacement: "\\frac{\\partial [[0]]}{\\partial [[1]]}$0", options: "rm"},
    

    // Custom Integrals
    {trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, \\mathrm{d}${1:x} $2", options: "mA"},
    {trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, \\mathrm{d}${1:x} $2", options: "mA"},
    {trigger: "dint", replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, \\mathrm{d}${3:x} $4", options: "mA"},
    {trigger: "oint", replacement: "\\oint", options: "mA"},
    {trigger: "iiint", replacement: "\\iiint", options: "mA"},
    {trigger: "iint", replacement: "\\iint", options: "mA"},
    {trigger: "int", replacement: "\\int $0 \\, \\mathrm{d}${1:x} $2", options: "mA"},
    {trigger: "fourier", replacement: "\\int_{${0:-\\infty}}^{${1:\\infty}} $2 e^{-2i\\pi ${3:\\xi} ${4:t}} \\, \\mathrm{d}${4:t} $5", options: "mA"},

    // Custom Operations
    {trigger: "\\b(\\S+)\/\/(\\S+)\\b", replacement: "\\frac{[[0]]}{[[1]]$0}$1", options: "rmA"},
    {trigger: "cal", replacement: "\\mathcal{$0}$1", options: "mA"},
    {trigger: "frak", replacement: "\\mathfrak{$0}$1", options: "mA"},
    {trigger: "scr", replacement: "\\mathscr{$0}$1", options: "mA"},
    {trigger: "vdot", replacement: "\\vdots", options: "mA", priority: 2},
    {trigger: "^", replacement: "^{$0}$1", options: "mA"},
    {trigger: "bigo", replacement: "\\mathcal{O}\\left($0\\right)$1", options: "mA"},
    {trigger: "exst", replacement: "\\exists", options: "mA"},
    {trigger: "all", replacement: "\\forall", options: "mA", priority: 2},

    // Other
    {trigger: "$", replacement: "$$0$", options: "tA"},
    {trigger: "$", replacement: "$$0$", options: "mA"},

    {trigger: "fx", replacement: "f(x)", options: "mA"},
    {trigger: "ff", replacement: "f($0)", options: "mA"},
]
