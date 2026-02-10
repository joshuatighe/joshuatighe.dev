import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import { GRUVBOX } from "../constants";

export default function TerminalView() {
  const ref = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      theme: {
        background: GRUVBOX.bgMuted,
        foreground: "#00ff9c",
      },
    });

    const fit = new FitAddon();
    term.loadAddon(fit);

    if (ref.current) {
      term.open(ref.current);
      fit.fit();
    }

    term.writeln("joshuatighe.dev");
    term.write("-> ");

    return () => term.dispose();
  }, []);

  return (
    <div
      ref={ref}
      className="w-screen h-screen m-4"
      style={{ backgroundColor: GRUVBOX.bgMuted }}
    />
  );
}
