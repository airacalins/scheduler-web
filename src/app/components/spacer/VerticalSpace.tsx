interface Props {
    height: number,
}

const VerticalSpace = ({ height }: Props) => {
    return (
        <div style={{ height: `${height}px` }}></div>
    )
}

export default VerticalSpace