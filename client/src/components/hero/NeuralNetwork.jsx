import { useMemo, useState } from "react";
import { networkNodes, networkConnections } from "../../data/networkData";
import { ConnectionLines } from "./network";

const nodeLookup = Object.fromEntries(
  networkNodes.map((node) => [node.id, node]),
);

function getNodeRadius(size) {
  switch (size) {
    case "large":
      return 3.2;
    case "medium":
    case "secondary":
      return 2.2;
    default:
      return 1.6;
  }
}

export default function NeuralNetwork({ compact = false }) {
  const [activeNode, setActiveNode] = useState(null);

  const neighbors = useMemo(() => {
    if (!activeNode) return new Set();
    return new Set(
      networkConnections.flatMap((c) => {
        if (c.from === activeNode) return [c.to];
        if (c.to === activeNode) return [c.from];
        return [];
      }),
    );
  }, [activeNode]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        role="img"
        aria-label="Circuit-board neural network of Priyanshu's engineering stack"
        className={`w-full overflow-visible ${compact ? "max-w-[560px]" : "max-w-[520px]"}`}
        onMouseLeave={() => setActiveNode(null)}
      >
        <defs>
          {/* Node core glow */}
          <radialGradient id="nodeCore" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#EAFF00" />
            <stop offset="100%" stopColor="#EAFF00" stopOpacity="0.6" />
          </radialGradient>

          {/* Filter for node glow */}
          <filter id="networkGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Tighter glow for packets */}
          <filter id="packetGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Subtle grid pattern behind the network */}
        {!compact && (
          <g opacity="0.04">
            {Array.from({ length: 11 }, (_, i) => (
              <line
                key={`hg-${i}`}
                x1="0" y1={i * 10} x2="100" y2={i * 10}
                stroke="#EAFF00"
                strokeWidth="0.15"
              />
            ))}
            {Array.from({ length: 11 }, (_, i) => (
              <line
                key={`vg-${i}`}
                x1={i * 10} y1="0" x2={i * 10} y2="100"
                stroke="#EAFF00"
                strokeWidth="0.15"
              />
            ))}
          </g>
        )}

        {/* Connection traces (circuit-board style) */}
        <ConnectionLines
          connections={networkConnections}
          nodeLookup={nodeLookup}
          activeNode={activeNode}
        />

        {/* Data packets traveling along traces */}
        {!compact &&
          networkConnections.slice(0, 4).map((connection, index) => (
            <circle
              key={`${connection.from}-${connection.to}-packet`}
              r={0.65}
              fill="#EAFF00"
              className="data-packet"
              filter="url(#packetGlow)"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <animateMotion
                dur={`${7 + (index % 3)}s`}
                begin={`${index * 0.6}s`}
                repeatCount="indefinite"
              >
                <mpath href={`#packet-path-${index}`} />
              </animateMotion>
            </circle>
          ))}

        {/* Nodes */}
        {networkNodes.map((node, index) => {
          const isCore = node.id === "me";
          const isDimmed =
            activeNode && activeNode !== node.id && !neighbors.has(node.id);
          const radius = getNodeRadius(node.size);

          return (
            <g
              key={node.id}
              className="cursor-pointer outline-none"
              tabIndex="0"
              onMouseEnter={() => setActiveNode(node.id)}
              onFocus={() => setActiveNode(node.id)}
              onBlur={() => setActiveNode(null)}
            >
              {/* Outer glow ring */}
              <rect
                x={node.x - radius - 3}
                y={node.y - radius - 3}
                width={(radius + 3) * 2}
                height={(radius + 3) * 2}
                fill="#EAFF00"
                opacity={isDimmed ? 0.02 : isCore ? 0.12 : 0.06}
                className="network-node-glow"
                style={{ animationDelay: `${index * 0.25}s` }}
              />

              {/* Node body — small square for circuit junction feel */}
              <rect
                x={node.x - radius}
                y={node.y - radius}
                width={radius * 2}
                height={radius * 2}
                fill={isCore ? "url(#nodeCore)" : "#EAFF00"}
                opacity={isDimmed ? 0.2 : 1}
                filter={isDimmed ? undefined : "url(#networkGlow)"}
                className="network-node transition-opacity duration-300"
                style={{ animationDelay: `${index * 0.18}s` }}
              />

              {/* Node label */}
              {!compact && (
                <text
                  x={node.x}
                  y={node.y - radius - 3}
                  textAnchor="middle"
                  fontSize={isCore ? "2.8" : "2.1"}
                  fill={isDimmed ? "#555555" : "#EAFF00"}
                  fillOpacity={isDimmed ? 0.5 : 0.85}
                  className="select-none font-mono transition-colors duration-300"
                >
                  {node.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
