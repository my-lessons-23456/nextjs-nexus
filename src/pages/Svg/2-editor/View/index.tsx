/* eslint-disable no-console */
import { useCallback, useState, useMemo, useEffect } from 'react'
import {
  SvgEditorPageViewStyled,
  SvgEditorPageViewSvgStyled,
  SvgEditorPageViewToolbarStyled,
} from './styles'
import { SvgEditorPolyline } from './tag/Polyline'

type Shape = {
  tag: keyof Pick<SVGElementTagNameMap, 'polyline'>
  points: number[][]
}

export const SvgEditorPageView: React.FC = () => {
  const width = 600
  const height = 400

  /**
   * Массив всех фигур
   */
  const [shapes, shapesSetter] = useState<Shape[]>([])

  /**
   * Редактируемая фигура
   */
  const [editingShape, editingShapeSetter] = useState<Shape>()

  /**
   * Если есть редактируемый элемент, но его нет в массиве фигур, то сбрасываем его
   */
  useEffect(() => {
    if (editingShape && !shapes.includes(editingShape)) {
      editingShapeSetter(undefined)
    }
  }, [editingShape, shapes])

  console.log('editingShape', editingShape)

  // const onMouseDown = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
  //   console.log('onMouseDown event', event)
  // }, [])

  // const [points, pointsSetter] = useState<[number, number][]>([])

  // console.log('points', points)

  const onClick = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      console.log('onClick event', event)

      if (!editingShape) {
        return
      }

      const { offsetX: x, offsetY: y } = event.nativeEvent

      editingShape.points.push([x, y])

      shapesSetter([...shapes])
    },
    [editingShape, shapes]
  )

  const elements = useMemo<JSX.Element[]>(() => {
    const elements: JSX.Element[] = []

    shapes.forEach((shape, index) => {
      switch (shape.tag) {
        case 'polyline':
          elements.push(<SvgEditorPolyline key={index} points={shape.points} />)

          break
      }
    })

    return elements
  }, [shapes])

  /**
   * При клике добавляем редактируемую фигуру
   */
  const onClickAddShape = useCallback(() => {
    /**
     * Создаем новую фигуру
     */
    const shape: Shape = {
      tag: 'polyline',
      points: [],
    }

    /**
     * Добавляем фигуру в общий список фигур
     */
    shapesSetter([...shapes, shape])

    /**
     * Устанавливаем, что эта фигура сейчас редактируется
     */
    editingShapeSetter(shape)
  }, [shapes])

  const reset = useCallback(() => {
    shapesSetter([])
  }, [])

  return (
    <SvgEditorPageViewStyled>
      <SvgEditorPageViewToolbarStyled>
        <button onClick={onClickAddShape}>Add shape</button>
        <button onClick={reset}>Reset</button>
      </SvgEditorPageViewToolbarStyled>
      <SvgEditorPageViewSvgStyled
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        // onMouseDown={onMouseDown}
        onClick={onClick}
      >
        {/* <path d="M 10 10 H 90 V 90 H 10 L 10 10" fill="transparent" stroke="black"/> */}

        {/* <polyline points="60 60, 110 65" stroke="black"/> */}
        {/* <polyline
          points={points.map((n) => n.join(' ')).join(', ')}
          stroke="black"
        /> */}

        {elements}
      </SvgEditorPageViewSvgStyled>
    </SvgEditorPageViewStyled>
  )
}
