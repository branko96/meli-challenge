import React, {ReactElement} from "react"
import {Container as BContainer, ContainerProps as BContainerProps} from "react-bootstrap";

interface ContainerProps extends BContainerProps {
  children: ReactElement | ReactElement[]
}

const Container = ({children}: ContainerProps) => {
  return (
      <BContainer  style={{paddingLeft: 40, paddingRight: 40}}>
        {children}
      </BContainer>
  )
}

export default Container
