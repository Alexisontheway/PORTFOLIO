import { MapPin, Activity } from 'lucide-react';
import { systemProfile } from '../../data/portfolioData';

export default function SystemProfile() {
  return (
    <aside className="border border-yellow-400/10 bg-white/[0.02] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-md">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-yellow-400/10 pb-4">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-yellow-100/90">
          System Profile
        </p>
        <span className="neon-dot animate-pulse" />
      </div>

      <dl className="space-y-5">
        {/* Status */}
        <div>
          <dt className="mb-2 font-mono text-[10px] uppercase tracking-widest text-neutral-600">
            Status
          </dt>
          <dd className="flex items-center gap-2 text-sm font-medium text-yellow-200">
            <Activity size={15} />
            <span className="h-2 w-2 rounded-full bg-neon shadow-neon-sm" />
            {systemProfile.status}
          </dd>
        </div>

        {/* Location */}
        <div>
          <dt className="mb-2 font-mono text-[10px] uppercase tracking-widest text-neutral-600">
            Location
          </dt>
          <dd className="flex items-center gap-2 text-sm text-neutral-300">
            <MapPin size={15} className="text-yellow-400/70" />
            {systemProfile.location}
          </dd>
        </div>

        {/* Focus Areas */}
        <div>
          <dt className="mb-3 font-mono text-[10px] uppercase tracking-widest text-neutral-600">
            Focus Areas
          </dt>
          <dd className="space-y-2">
            {systemProfile.focusAreas.map((area) => (
              <div key={area} className="flex items-center gap-2 text-sm text-neutral-300">
                <span className="h-px w-4 bg-yellow-400/40" />
                {area}
              </div>
            ))}
          </dd>
        </div>

        {/* Current Stack */}
        <div>
          <dt className="mb-3 font-mono text-[10px] uppercase tracking-widest text-neutral-600">
            Current Stack
          </dt>
          <dd className="flex flex-wrap gap-2">
            {systemProfile.currentStack.map((item) => (
              <span
                key={item}
                className="border border-yellow-400/10 bg-yellow-400/[0.03] px-2.5 py-1 font-mono text-[11px] text-yellow-100/70"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      {/* Highlights */}
      <div className="mt-7 grid grid-cols-3 gap-3 border-t border-yellow-400/10 pt-5">
        {systemProfile.highlights.map((item) => (
          <div key={item.label}>
            <p className="text-xl font-black text-white">{item.value}</p>
            <p className="mt-1 font-mono text-[10px] uppercase leading-4 tracking-widest text-neutral-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
