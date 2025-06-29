import { Fragment, JSX, lazy, useEffect, useState } from "react";
import posthog from "posthog-js";
import React from "react";
import Stats from "@/Components/Stats";

const FeatureFlagComponents = {
    SplitHeader: lazy(() => import("@/Components/SplitHeader")),
    HeaderImageTiles: lazy(() => import("@/Components/HeaderImageTiles")),
} as const;

type HeaderComponent = React.LazyExoticComponent<() => JSX.Element> | null;

export default function Home() {
    const [Header, setHeader] = useState<HeaderComponent>(null);

    useEffect(() => {
        posthog.onFeatureFlags(() => {
            if (posthog.getFeatureFlag("main_header") === "HeaderImageTiles") {
                setHeader(FeatureFlagComponents.HeaderImageTiles);
            } else {
                setHeader(FeatureFlagComponents.SplitHeader);
            }
        });
    }, []);

    if (!Header) {
        return;
    }

    return (
        <Fragment>
            <Header />
            <Stats />
        </Fragment>
    );
}
