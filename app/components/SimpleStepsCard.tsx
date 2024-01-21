export default function SimpleStepsCard(props: { children: React.ReactNode, title: string }) {

    const { children, title } = props

    return (
        <article className="w-full max-w-[323px] p-2.5 text-[#0B251C]">
            {children}
            <p className="font-medium mt-5">{title}</p>
        </article>
    )
}