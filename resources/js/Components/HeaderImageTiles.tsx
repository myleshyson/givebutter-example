import tile1 from "@img/tile_1.webp";
import tile2 from "@img/tile_2.webp";
import tile3 from "@img/tile_3.webp";
import tile4 from "@img/tile_4.webp";
import tile5 from "@img/tile_5.webp";

export default function HeaderImageTiles() {
    return (
        <div className="bg-sand">
            <main>
                <div className="relative isolate">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg
                            x="50%"
                            y={-1}
                            className="overflow-visible fill-overlay"
                        >
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect
                            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                        />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    >
                        <div
                            style={{
                                clipPath:
                                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                            }}
                            className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-5xl font-semibold tracking-tight text-pretty text-pine sm:text-7xl">
                                        Help us break the cycle of violence.
                                    </h1>
                                    <p className="mt-8 text-lg font-medium text-pretty text-base sm:max-w-md sm:text-xl/8 lg:max-w-none">
                                        Every survivor deserves a safe place to
                                        heal and rebuild. Your Safe Place
                                        Foundation provides life-changing
                                        services to survivors of domestic
                                        violence, sexual assault, and
                                        trafficking—from emergency housing and
                                        legal support to therapy and basic
                                        necessities. When you donate, 100% goes
                                        directly to survivors because our board
                                        covers all overhead costs. Together,
                                        we're not just changing lives—we're
                                        saving them.
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a
                                            id="hero_btn"
                                            href="https://www.yspfoundation.org/donate"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-md bg-love-800 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-love-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-love-900"
                                        >
                                            Donate Now
                                        </a>
                                        <a
                                            href="https://www.yspfoundation.org/about"
                                            rel="noreferrer nofollow"
                                            target="_blank"
                                            className="text-sm/6 font-semibold text-base hover:underline"
                                        >
                                            Learn Our Impact{" "}
                                            <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                                        <div className="relative">
                                            <img
                                                alt="a mother looking lovingly at her child."
                                                src={tile1}
                                                className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                alt="a mother looking playfully at her child."
                                                src={tile2}
                                                className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                alt="two women looking foward"
                                                src={tile3}
                                                className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                alt="a woman sitting on bleachers looking hopeful towards the sky"
                                                src={tile4}
                                                className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                alt="a woman holder her baby"
                                                src={tile5}
                                                className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
