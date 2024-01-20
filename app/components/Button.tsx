export default function Button(props: { title: string, background: string, color: string }) {
    const { title, background, color } = props
    return (
        <button type="button" className={`${background} ${color} font-bold text-sm h-[59px] px-[30px] rounded-[100px]`}>{title}</button>
    )
}