import React, { useState, useMemo } from 'react';
import { Cpu, Database, Server, Zap, RefreshCw, AlertTriangle, CheckCircle, ShieldCheck } from 'lucide-react';

export const ArchitectureSimulator: React.FC = () => {
  const [trafficLoad, setTrafficLoad] = useState<number>(25000); // req/sec
  const [enableRedisCache, setEnableRedisCache] = useState<boolean>(true);
  const [enableReadReplicas, setEnableReadReplicas] = useState<boolean>(true);
  const [enableAsyncQueue, setEnableAsyncQueue] = useState<boolean>(true);
  const [workerCount, setWorkerCount] = useState<number>(4);

  // Compute simulated system telemetry based on architecture topology
  const simulation = useMemo(() => {
    let baseLatency = 45; // ms
    const cacheHitRatio = enableRedisCache ? 0.88 : 0.0;
    
    // Without cache, db handles 100% of queries
    const effectiveDbLoad = enableRedisCache ? trafficLoad * (1 - cacheHitRatio) : trafficLoad;
    
    // DB capacity calculation
    const maxDbCapacity = enableReadReplicas ? 30000 : 8000;
    const dbSaturation = Math.min(100, Math.round((effectiveDbLoad / maxDbCapacity) * 100));

    // Worker capacity
    const workerCapacity = workerCount * 12000;
    const workerSaturation = Math.min(100, Math.round((trafficLoad / workerCapacity) * 100));

    // Latency calculation
    if (!enableRedisCache) baseLatency += 120;
    if (dbSaturation > 80) baseLatency += (dbSaturation - 80) * 12;
    if (workerSaturation > 85) baseLatency += (workerSaturation - 85) * 8;
    if (!enableAsyncQueue) baseLatency += 65; // Blocking I/O overhead

    const p99 = Math.round(baseLatency);
    const errorRate = dbSaturation >= 100 || workerSaturation >= 100 ? (Math.max(dbSaturation, workerSaturation) - 95) * 0.4 : 0.02;

    const status = errorRate > 1.5 ? 'CRITICAL BOTTLENECK' : errorRate > 0.1 ? 'ELEVATED LOAD' : 'HEALTHY & OPTIMAL';

    return {
      p99Latency: p99,
      cacheHitRate: Math.round(cacheHitRatio * 100),
      dbSaturation,
      workerSaturation,
      errorRate: errorRate.toFixed(2),
      status
    };
  }, [trafficLoad, enableRedisCache, enableReadReplicas, enableAsyncQueue, workerCount]);

  return (
    <section id="architecture" className="py-20 md:py-28 border-t border-slate-300 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            Systems Engineering &amp; Topology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Full-Stack Architecture Simulator
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300 font-normal">
            Interactive benchmark modeling how Norbert designs multi-tier distributed architectures for high-load platforms.
            Adjust traffic load and topology controls to observe live latency, cache offloading, and database resiliency.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Col 5) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center justify-between">
              <span>Topology Parameters</span>
              <button
                onClick={() => {
                  setTrafficLoad(25000);
                  setEnableRedisCache(true);
                  setEnableReadReplicas(true);
                  setEnableAsyncQueue(true);
                  setWorkerCount(4);
                }}
                className="text-xs font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Defaults
              </button>
            </h3>

            {/* Traffic Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800 dark:text-slate-200">Simulated Ingress Load</span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  {trafficLoad.toLocaleString()} req/s
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={trafficLoad}
                onChange={(e) => setTrafficLoad(Number(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                <span>5k req/s (Standard)</span>
                <span>100k req/s (Peak Spike)</span>
              </div>
            </div>

            {/* Worker Nodes Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800 dark:text-slate-200">Cluster Worker Instances</span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  {workerCount} Containers
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={workerCount}
                onChange={(e) => setWorkerCount(Number(e.target.value))}
                className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Architecture Toggles */}
            <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
                Architectural Layers
              </div>

              {/* Toggle 1: Redis Distributed Cache */}
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors bg-white dark:bg-slate-900/40 shadow-sm">
                <div className="space-y-0.5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Distributed Redis Caching Layer
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Intercepts read queries with sub-millisecond memory lookups
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={enableRedisCache}
                  onChange={(e) => setEnableRedisCache(e.target.checked)}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </label>

              {/* Toggle 2: PostgreSQL Read Replicas */}
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors bg-white dark:bg-slate-900/40 shadow-sm">
                <div className="space-y-0.5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    PostgreSQL Read Replicas &amp; Pools
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Distributes report &amp; exam queries away from write node
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={enableReadReplicas}
                  onChange={(e) => setEnableReadReplicas(e.target.checked)}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </label>

              {/* Toggle 3: Asynchronous Message Queue */}
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer transition-colors bg-white dark:bg-slate-900/40 shadow-sm">
                <div className="space-y-0.5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Async Event Queue (Kafka/BullMQ)
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Decouples SMS dispatch, report card PDFs, and batch jobs
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={enableAsyncQueue}
                  onChange={(e) => setEnableAsyncQueue(e.target.checked)}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Telemetry & Diagram Display (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-800 shadow-sm">
              <div>
                <div className="text-xs text-slate-700 dark:text-slate-400 font-medium">p99 Latency</div>
                <div className="font-mono text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                  {simulation.p99Latency}ms
                </div>
                <span className={`text-[11px] font-semibold ${simulation.p99Latency < 60 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                  {simulation.p99Latency < 60 ? 'Sub-60ms optimal' : 'High latency delay'}
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-700 dark:text-slate-400 font-medium">Cache Hit Rate</div>
                <div className="font-mono text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                  {simulation.cacheHitRate}%
                </div>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                  {enableRedisCache ? '88% offloaded' : 'Direct DB hits'}
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-700 dark:text-slate-400 font-medium">DB Saturation</div>
                <div className="font-mono text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                  {simulation.dbSaturation}%
                </div>
                <span className={`text-[11px] font-semibold ${simulation.dbSaturation < 80 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                  {simulation.dbSaturation < 80 ? 'Optimal capacity' : 'Pool bottleneck'}
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-700 dark:text-slate-400 font-medium">System Health</div>
                <div className="font-mono text-xs font-bold truncate mt-1">
                  {simulation.status === 'HEALTHY & OPTIMAL' ? (
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                      Optimal
                    </span>
                  ) : (
                    <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1 font-semibold">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      Strained
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-mono font-medium">
                  Err: {simulation.errorRate}%
                </span>
              </div>
            </div>

            {/* Interactive Architecture Flow Diagram */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-300 uppercase tracking-wider">
                  Active Multi-Tier Data Pipeline
                </span>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                  Norbert Production Architecture
                </span>
              </div>

              <div className="space-y-4">
                {/* Layer 1: Client & Edge Ingress */}
                <div className="p-4 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        Edge Ingress &amp; Client Layer
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        React 19 SPA · TLS 1.3 Termination · Token Authentication
                      </div>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-800 w-fit">
                    {trafficLoad.toLocaleString()} req/s Inbound
                  </div>
                </div>

                {/* Layer 2: API Gateway & Worker Pods */}
                <div className="p-4 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 shrink-0">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        Application Service Tier ({workerCount} Nodes)
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Node.js / Express Controllers · Epoll Event Loop · Business Logic
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                    Load: <span className={simulation.workerSaturation > 80 ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-emerald-600 dark:text-emerald-400 font-bold'}>{simulation.workerSaturation}%</span>
                  </div>
                </div>

                {/* Layer 3: Caching & Event Bus */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Redis Cache Box */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    enableRedisCache
                      ? 'border-emerald-400 dark:border-emerald-800/80 bg-emerald-50/60 dark:bg-emerald-950/20 shadow-xs'
                      : 'border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 opacity-60'
                  }`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Zap className={`w-4 h-4 ${enableRedisCache ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`} />
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        Redis Cache Cluster
                      </span>
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {enableRedisCache ? 'Active: 88% cache hits offloaded' : 'Bypassed (0% offload)'}
                    </div>
                  </div>

                  {/* Async Message Queue Box */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    enableAsyncQueue
                      ? 'border-blue-400 dark:border-blue-800/80 bg-blue-50/60 dark:bg-blue-950/20 shadow-xs'
                      : 'border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 opacity-60'
                  }`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Cpu className={`w-4 h-4 ${enableAsyncQueue ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'}`} />
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        SMS &amp; PDF Worker Queue
                      </span>
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {enableAsyncQueue ? 'Active: Non-blocking async queue' : 'Synchronous blocking I/O'}
                    </div>
                  </div>
                </div>

                {/* Layer 4: Relational Persistence Layer */}
                <div className="p-4 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        PostgreSQL Database {enableReadReplicas ? '(Primary + 2 Read Replicas)' : '(Single Primary Node)'}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        ACID Compliance · Connection Pooling (PgBouncer) · B-Tree Indexes
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                    DB Load: <span className={simulation.dbSaturation > 80 ? 'text-rose-600 dark:text-rose-400 font-bold' : 'text-emerald-600 dark:text-emerald-400 font-bold'}>{simulation.dbSaturation}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
