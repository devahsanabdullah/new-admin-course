import React from 'react'

const SkeletonLoading = ({
  width,
  height,
  marginBottom,
  borderRadius,
  style
}: {
  width: string
  height: string
  marginBottom?: string | undefined
  borderRadius?: string | undefined
  restStyle?: any
  style?: React.CSSProperties
}) => {
  return (
    <div
      style={{
        border: '1px solid rgba(255 , 255, 255, 0.09)',
        width: '100%',
        maxWidth: width,
        height: height,
        marginBottom: marginBottom ? marginBottom : '5px',
        borderRadius: borderRadius ? borderRadius : '10px',
        boxShadow: 'rgba(255 , 255, 255, 0.7)',
        ...style
      }}
      className="skeleton"
    ></div>
  )
}

export default SkeletonLoading
