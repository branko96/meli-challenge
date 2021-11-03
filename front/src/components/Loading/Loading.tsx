import ContentLoader from "react-content-loader";
import { ReactElement } from "react";

interface LoadingProps {
  show: boolean
  children: ReactElement
  height: string
  width: string
  viewBox: string
  containerStyle?: any
}

const Loading = ({ show, children, height, width, viewBox = "", containerStyle }: LoadingProps) => {
  if (!show) {
    return children
  }

  const content = <ContentLoader viewBox={viewBox}>
    <rect x="0" y="0" width={width} height={height} />
  </ContentLoader>

  if (containerStyle) {
    return <div style={containerStyle}>
      {content}
    </div>
  }

  return content
}

export default Loading
