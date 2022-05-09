type SvgEditorPolylineProps = {
  points: number[][]
}

export const SvgEditorPolyline: React.FC<SvgEditorPolylineProps> = ({
  points,
}) => {
  return (
    <polyline
      points={points.map((n) => n.join(' ')).join(', ')}
      stroke="black"
    />
  )
}
