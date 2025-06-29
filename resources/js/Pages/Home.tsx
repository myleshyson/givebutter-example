import { lazy } from "react";

const FeatureFlagComponents = {
    SplitHeader: lazy(() => import("@/Components/SplitHeader")),
    HeaderImageTiles: lazy(() => import("@/Components/HeaderImageTiles")),
} as const;

type HomeProps = {
    headerFlag: keyof typeof FeatureFlagComponents;
};

export default function Home({ headerFlag }: HomeProps) {
    const Header = FeatureFlagComponents[headerFlag];

    return <Header />;
}
