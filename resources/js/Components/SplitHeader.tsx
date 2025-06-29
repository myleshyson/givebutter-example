import splitHero from "@img/split_hero.webp";

export default function SplitHeader() {
    return (
        <div className="relative bg-sand">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
                    <div className="mx-auto max-w-lg lg:mx-0">
                        <h1 className="text-5xl font-semibold tracking-tight text-pretty text-pine sm:text-7xl">
                            Help us break the cycle of violence.
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-base sm:max-w-md sm:text-xl/8 lg:max-w-none">
                            Every survivor deserves a safe place to heal and
                            rebuild. Your Safe Place Foundation provides
                            life-changing services to survivors of domestic
                            violence, sexual assault, and trafficking—from
                            emergency housing and legal support to therapy and
                            basic necessities. When you donate, 100% goes
                            directly to survivors because our board covers all
                            overhead costs. Together, we're not just changing
                            lives—we're saving them.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                id="hero_btn"
                                data-ph-capture-attribute-id="hero_btn"
                                href="https://www.yspfoundation.org/donate"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md bg-love-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-love-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-love-900"
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
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <img
                        alt="two women holding hands and looking at the night sky."
                        src={splitHero}
                        className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                    />
                </div>
            </div>
        </div>
    );
}
