interface Props {
    height: string,
}

const VerticalSpace = ({ height }: Props) => {
    return (
        <div style={{ height: height }}></div>
    )
}

export default VerticalSpace