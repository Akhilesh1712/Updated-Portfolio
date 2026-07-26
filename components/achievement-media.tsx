"use client";

import { useState } from "react";
import Image from "next/image";
import type { AchievementMedia as AchievementMediaType } from "@/lib/portfolio-data";

type AchievementMediaProps = {
  media: AchievementMediaType;
};

export function AchievementMedia({ media }: AchievementMediaProps) {
  const [failed, setFailed] = useState(!media.src);

  if (media.src && !failed) {
    const useBackdrop = media.kind === "certificate" || media.fit === "contain";

    return (
      <figure
        className="journey-media__tile journey-media__tile--image"
        data-kind={media.kind ?? "photo"}
        data-fit={media.fit ?? "cover"}
        data-orientation={media.orientation ?? "landscape"}
      >
        <div className="journey-media__visual">
          {useBackdrop && (
            <Image
              className="journey-media__backdrop"
              src={media.src}
              alt=""
              fill
              sizes="(max-width: 760px) 92vw, 34vw"
              aria-hidden="true"
            />
          )}
          <Image
            className="journey-media__asset"
            src={media.src}
            alt={media.label}
            fill
            sizes="(max-width: 760px) 92vw, (max-width: 1100px) 44vw, 34vw"
            style={{ objectPosition: media.position ?? "center" }}
            onError={() => setFailed(true)}
          />
          <div className="journey-media__scan" aria-hidden="true" />
        </div>
        <figcaption className="mono-label">
          <span>{media.label}</span>
          <span>{media.kind === "certificate" ? "VERIFIED DOCUMENT" : "EVENT ARCHIVE"}</span>
        </figcaption>
      </figure>
    );
  }

  return null;
}
