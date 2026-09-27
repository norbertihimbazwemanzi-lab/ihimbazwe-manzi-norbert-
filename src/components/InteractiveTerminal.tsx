import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onOpenResume
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <div>Norbert Ihimbazwe Manzi — Interactive CLI [Version 2.4.0]</div>
          <div>Type <span className="text-amber-400 font-bold">help</span> to view available terminal commands.</div>
        </div>
      )
    }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300 text-xs sm:text-sm">
            <div className="text-blue-400 font-bold">Available Commands:</div>
            <div><span className="text-amber-400 font-mono w-24 inline-block">whoami</span> - Display developer bio and core identity</div>
            <div><span className="text-amber-400 font-mono w-24 inline-block">skills</span> - List full-stack technical competencies</div>
            <div><span className="text-amber-400 font-mono w-24 inline-block">projects</span> - View production projects and architectures</div>
            <div><span className="text-amber-400 font-mono w-24 inline-block">contact</span> - Display email and availability status</div>
            <div><span className="text-amber-400 font-mono w-24 inline-block">resume</span> - Open full printable CV modal</div>
            <div><span className="text-amber-400 font-mono w-24 inline-block">clear</span> - Clear the terminal output</div>
            <div><span className="text-amber-400 font-mono w-24 inline-block">exit</span> - Close the terminal console</div>
          </div>
        );
        break;

      case 'whoami':
      case 'bio':
        output = (
          <div className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <div className="text-emerald-400 font-bold">{PERSONAL_INFO.name}</div>
            <div className="text-slate-400">{PERSONAL_INFO.role}</div>
            <p className="pt-1 text-slate-300">{PERSONAL_INFO.bioShort}</p>
            <div className="text-xs text-blue-400 pt-1">Location: {PERSONAL_INFO.location}</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
            <div><span className="text-blue-400 font-bold">Frontend:</span> React 19, TypeScript, Next.js, Tailwind CSS, State Trees, WebSockets</div>
            <div><span className="text-purple-400 font-bold">Backend:</span> Node.js, Express, Go (Golang), Python, REST, GraphQL, Kafka</div>
            <div><span className="text-emerald-400 font-bold">Databases:</span> PostgreSQL, Redis, ClickHouse, Firestore, Prisma, Drizzle</div>
            <div><span className="text-amber-400 font-bold">Cloud/DevOps:</span> Docker, Kubernetes, CI/CD, AWS, GCP, Prometheus</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
            {PROJECTS.map((p) => (
              <div key={p.id}>
                <span className="text-blue-400 font-semibold">{p.title}</span> — {p.tagline}
                <div className="text-[11px] text-slate-400">Stack: {p.techStack.join(' · ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300 text-xs sm:text-sm">
            <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 underline">{PERSONAL_INFO.email}</a></div>
            <div>Status: <span className="text-emerald-400">{PERSONAL_INFO.availabilityStatus}</span></div>
            <div>Location: {PERSONAL_INFO.location}</div>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        output = (
          <div className="text-emerald-400 text-xs sm:text-sm">
            Opening Norbert&apos;s Curriculum Vitae...
          </div>
        );
        onOpenResume();
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <div className="text-rose-400 text-xs sm:text-sm">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-amber-400 underline">help</span> for a list of valid commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm">
      <div
        className={`w-full bg-[#0a0e17] rounded-xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-200 ${
          isMaximized ? 'h-[92vh] max-w-6xl' : 'h-[500px] max-w-3xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d121f] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-blue-400" />
            <span className="font-mono text-xs font-semibold text-slate-200">
              norbert@manzi-systems:~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              aria-label="Toggle maximize"
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              aria-label="Close terminal"
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-rose-900/40 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Console Output */}
        <div className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-3 text-slate-200">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400">norbert@portfolio:~$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Command Input Form */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 bg-[#0d121f] border-t border-slate-800 font-mono text-xs sm:text-sm"
        >
          <span className="text-emerald-400 font-bold shrink-0">norbert@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};
