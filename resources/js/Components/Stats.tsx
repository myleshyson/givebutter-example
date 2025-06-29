const stats = [
  { id: 1, name: 'Individuals served', value: '7,800+' },
  { id: 2, name: 'Phone calls', value: '16,367' },
  { id: 3, name: 'Direct services', value: '13,602' },
  { id: 4, name: 'Housing services', value: '1,670' },
  { id: 5, name: 'Forensic services', value: '140' },
  { id: 6, name: 'Mobile clinics', value: '106' },
]

export default function Stats() {
  return (
    <div className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-base sm:text-5xl">
              Our 2024 Impact
            </h2>
            <p className="mt-4 text-lg/8 text-base">Your Safe Place is committed to providing comprehensive, confidential support to people experiencing domestic violence, family violence, sexual assault, sex trafficking, strangulation, and older/dependent abuse. </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-sand p-8">
                <dt className="text-sm/6 font-semibold text-base">{stat.name}</dt>
                <dd className="order-first text-3xl font-extrabold tracking-tight text-base">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
