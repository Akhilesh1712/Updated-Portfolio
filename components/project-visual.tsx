import type { CSSProperties } from "react";
import {
  Accessibility,
  AudioLines,
  Bot,
  BrainCircuit,
  Eye,
  MessageCircle,
  Radar,
  Search,
  Sparkles,
  TrendingUp,
  UserRound,
} from "lucide-react";

type ProjectVisualProps = {
  projectId: string;
  modal?: boolean;
};

const cryptoCandles = [
  [58, 35, "down"],
  [46, 22, "up"],
  [62, 30, "up"],
  [50, 27, "down"],
  [70, 39, "up"],
  [58, 18, "up"],
  [78, 44, "up"],
  [66, 31, "down"],
  [82, 48, "up"],
  [72, 34, "up"],
  [60, 26, "down"],
  [88, 52, "up"],
  [76, 32, "down"],
  [92, 58, "up"],
  [84, 41, "up"],
  [68, 25, "down"],
  [96, 60, "up"],
  [86, 38, "up"],
] as const;

function VisualHeader({ label, meta }: { label: string; meta: string }) {
  return (
    <div className="project-visual__header mono-label">
      <span><i />{label}</span>
      <span>{meta}</span>
    </div>
  );
}

function AiGenieVisual() {
  return (
    <>
      <VisualHeader label="NEURAL ROUTER / LIVE" meta="DEC 24—JAN 25" />
      <div className="genie-query">
        <span className="mono-label"><Search aria-hidden="true" /> USER INTENT</span>
        <p>Find the right AI agent to automate competitor research.</p>
        <div>
          <span>BUSINESS</span>
          <span>AUTOMATION</span>
          <span>RESEARCH</span>
        </div>
      </div>

      <div className="genie-core">
        <i className="genie-core__orbit genie-core__orbit--outer" />
        <i className="genie-core__orbit genie-core__orbit--inner" />
        <span className="genie-core__node"><Sparkles aria-hidden="true" /></span>
        <strong>2,418</strong>
        <small className="mono-label">AGENTS INDEXED</small>
      </div>

      <div className="genie-results">
        <div className="mono-label">
          <span>TOP MATCHES</span>
          <span>CONFIDENCE</span>
        </div>
        {[
          ["01", "ResearchPilot", "97%"],
          ["02", "CrewOps", "93%"],
          ["03", "MarketMind", "89%"],
        ].map(([index, name, score]) => (
          <div className="genie-result" key={name}>
            <span>{index}</span>
            <Bot aria-hidden="true" />
            <strong>{name}</strong>
            <em>{score}</em>
          </div>
        ))}
      </div>

      <div className="genie-pipeline mono-label">
        <span><BrainCircuit aria-hidden="true" /> NLP INTENT</span>
        <i />
        <span>RAG RETRIEVAL</span>
        <i />
        <span>RL RANKING</span>
        <i />
        <span>GENAI RESPONSE</span>
      </div>
    </>
  );
}

function CryptoVisual() {
  return (
    <>
      <VisualHeader label="MARKET ENGINE / LIVE" meta="BTC / USDT" />
      <div className="crypto-price">
        <span className="mono-label">BITCOIN</span>
        <strong>$63,842</strong>
        <em>+2.84%</em>
      </div>
      <div className="crypto-chart" aria-hidden="true">
        <div className="crypto-chart__grid" />
        <div className="crypto-chart__line" />
        <div className="crypto-candles">
          {cryptoCandles.map(([top, height, direction], index) => (
            <span
              className={`crypto-candle crypto-candle--${direction}`}
              style={{
                "--candle-height": `${height}px`,
                "--candle-offset": `${(top - 66) * 0.65}px`,
              } as CSSProperties}
              key={`${top}-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="crypto-signal">
        <span className="mono-label"><TrendingUp aria-hidden="true" /> MODEL SIGNAL</span>
        <strong>BUY</strong>
        <div><i /><span>82% CONFIDENCE</span></div>
        <p>Momentum and sentiment aligned.</p>
      </div>
      <div className="crypto-tape mono-label">
        <span>ETH +1.48%</span><span>SOL +4.12%</span><span>RISK / BALANCED</span>
      </div>
    </>
  );
}

function VisionVisual() {
  return (
    <>
      <VisualHeader label="ASSISTIVE PERCEPTION / ACTIVE" meta="MULTIMODAL" />
      <div className="vision-reticle">
        <i /><i /><i />
        <span><Eye aria-hidden="true" /></span>
      </div>
      <div className="vision-detection vision-detection--person">
        <span className="mono-label">PERSON / 98%</span>
      </div>
      <div className="vision-detection vision-detection--obstacle">
        <span className="mono-label">OBSTACLE / 2.4M</span>
      </div>
      <div className="vision-alert">
        <AudioLines aria-hidden="true" />
        <div>
          <span className="mono-label">SOUND EVENT</span>
          <strong>Vehicle approaching</strong>
        </div>
        <em>NEAR</em>
      </div>
      <div className="vision-modes mono-label">
        <span><Eye aria-hidden="true" /> VISION</span>
        <span><AudioLines aria-hidden="true" /> SOUND</span>
        <span><Accessibility aria-hidden="true" /> GESTURE</span>
      </div>
    </>
  );
}

function TwetterixVisual() {
  const posts = [
    ["AK", "akhilesh.dev", "Building recommendation systems that learn what matters."],
    ["ML", "model.logs", "Your feed should feel useful, not endless."],
    ["UI", "interface.lab", "Fast interactions. Relevant conversations."],
  ];

  return (
    <>
      <VisualHeader label="PERSONALIZED FEED / ONLINE" meta="MERN + TANSTACK" />
      <div className="twitter-feed">
        {posts.map(([initials, handle, copy], index) => (
          <article className={index === 0 ? "is-active" : ""} key={handle}>
            <span className="twitter-avatar">{initials}</span>
            <div>
              <strong>{handle}</strong>
              <p>{copy}</p>
              <span className="twitter-actions mono-label">
                <MessageCircle aria-hidden="true" /> {12 + index * 7}
              </span>
            </div>
            <em>{98 - index * 7}%</em>
          </article>
        ))}
      </div>
      <div className="twitter-engine">
        <span className="mono-label"><Radar aria-hidden="true" /> RECOMMENDATION GRAPH</span>
        <div className="twitter-engine__graph">
          <i /><i /><i /><i /><i />
          <UserRound aria-hidden="true" />
        </div>
        <p>Ranking posts from interests, interactions, and recency.</p>
      </div>
    </>
  );
}

export function ProjectVisual({ projectId, modal = false }: ProjectVisualProps) {
  return (
    <div
      className={`project-visual project-visual--${projectId}${modal ? " project-visual--modal" : ""}`}
      aria-hidden="true"
    >
      <div className="project-visual__noise" />
      {projectId === "ai-genie" && <AiGenieVisual />}
      {projectId === "cryptonight" && <CryptoVisual />}
      {projectId === "vision-s" && <VisionVisual />}
      {projectId === "twetterix" && <TwetterixVisual />}
    </div>
  );
}
