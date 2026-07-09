/**
 * Circuit-board style connection lines.
 * Routes paths with a single right-angle bend (horizontal then vertical)
 * to look like PCB traces instead of organic straight lines.
 */
export default function ConnectionLines({
  connections,
  nodeLookup,
  activeNode,
}) {
  return (
    <>
      {connections.map((connection, index) => {
        const s = nodeLookup[connection.from];
        const e = nodeLookup[connection.to];

        if (!s || !e) return null;

        const isActive =
          !activeNode ||
          connection.from === activeNode ||
          connection.to === activeNode;

        // Orthogonal routing: go horizontal from start, then vertical to end
        // Alternate routing direction for visual variety
        const useHorizontalFirst = index % 2 === 0;
        const midX = useHorizontalFirst ? e.x : s.x;
        const midY = useHorizontalFirst ? s.y : e.y;

        const pathD = `M ${s.x} ${s.y} L ${midX} ${midY} L ${e.x} ${e.y}`;

        return (
          <g key={`${connection.from}-${connection.to}`}>
            {/* Glow layer (wider, dimmer) */}
            <path
              d={pathD}
              fill="none"
              stroke="#EAFF00"
              strokeOpacity={isActive ? 0.06 : 0.02}
              strokeWidth={connection.strength * (isActive ? 0.45 : 0.35)}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Core trace */}
            <path
              d={pathD}
              fill="none"
              stroke="#EAFF00"
              strokeOpacity={isActive ? 0.28 : 0.08}
              strokeWidth={connection.strength * (isActive ? 0.14 : 0.1)}
              strokeLinejoin="round"
              strokeLinecap="round"
              className="circuit-trace transition-all duration-300"
              style={{ animationDelay: `${index * 0.3}s` }}
            />
            {/* Invisible path for packet animation */}
            <path
              id={`packet-path-${index}`}
              d={pathD}
              fill="none"
              stroke="transparent"
            />
          </g>
        );
      })}
    </>
  );
}
