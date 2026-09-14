import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';

export default function TerminalDrawer({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', content: 'AKIL THANVEER M // INFRASTRUCTURE CONSOLE v4.2' },
    { type: 'system', content: 'Type "help" to inspect available command endpoints, or tap the quick pills below.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = TERMINAL_COMMANDS[cmd] || `Command not found: "${cmd}". Type "help" for valid commands.`;
    
    setHistory(prev => [
      ...prev,
      { type: 'input', content: `akil@infra-prod:~$ ${rawCmd.trim()}` },
      { type: 'output', content: output }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      executeCommand(inputVal);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    executeCommand(inputVal);
  };

  const handleQuickCommand = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className={`w-full bg-[#070b0a] border border-[#1e302b] rounded-lg shadow-2xl flex flex-col font-mono text-xs sm:text-sm overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-w-6xl h-[92vh]' : 'max-w-3xl h-[85vh] sm:h-[540px]'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
      >
        {/* Terminal Titlebar */}
        <div className="bg-[#0c1311] border-b border-[#1b2b27] px-4 py-3 flex items-center justify-between select-none">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm">
            <Terminal className="w-4 h-4" />
            <span>akil@infra-prod-01:~ (ap-south-1)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="p-1.5 rounded text-[#718680] hover:text-tactical-parchment hover:bg-[#14201c] transition-colors hidden sm:block"
              title={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-1.5 rounded text-[#718680] hover:text-rose-400 hover:bg-[#14201c] transition-colors"
              title="Close Console"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Terminal Content Screen */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3 bg-[#070b0a] text-[#c9d6d1] cursor-text">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
              {item.type === 'input' && (
                <div className="text-emerald-400 font-bold">{item.content}</div>
              )}
              {item.type === 'output' && (
                <div className="text-[#b0c2bc] pl-2 border-l border-[#1a2b27]">{item.content}</div>
              )}
              {item.type === 'system' && (
                <div className="text-[#68817a] italic">{item.content}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Pills */}
        <div className="px-4 py-2.5 bg-[#09100e] border-t border-[#182622] flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#6e857f] font-bold mr-1">QUICK:</span>
          {['help', 'whoami', 'skills', 'experience', 'projects', 'education', 'uptime', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleQuickCommand(cmd);
              }}
              className="px-2.5 py-1 rounded bg-[#0f1715] hover:bg-[#172522] border border-[#1e2e2a] text-[#a2b3ae] hover:text-emerald-400 transition-colors font-medium text-xs sm:text-sm"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Command Input Row */}
        <form onSubmit={handleFormSubmit} className="bg-[#0a110f] border-t border-[#1c2c28] p-3 sm:p-4 flex items-center gap-2">
          <span className="text-emerald-400 font-bold select-none text-xs sm:text-sm">akil@infra-prod:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command and press Enter..."
            className="flex-1 bg-transparent border-none outline-none text-tactical-parchment font-mono text-sm sm:text-base placeholder-[#485d57]"
            autoFocus
          />
          <button 
            type="submit" 
            className="text-emerald-400 hover:text-emerald-300 p-2 hover:bg-[#152420] rounded transition-colors"
            title="Press Enter or Click to Submit"
          >
            <CornerDownLeft className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
