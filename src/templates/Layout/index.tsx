import { ReactNode } from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'

interface LayoutProps {
  children: ReactNode
}

const StyledButton = styled(Button)`
  background-color: red;
`

const useStyles = makeStyles({
  root: {
    backgroundColor: 'yellow'
  }
})

const useStylesClassName = makeStyles({
  root: {
    backgroundColor: 'green'
  }
})

export default function Layout ({ children }: LayoutProps): JSX.Element {

  const classes = useStyles()
  const classesClassName = useStylesClassName()

  return (
    <>
      <StyledButton
        color="primary"
        variant="contained"
      >
        styled
      </StyledButton>

      <Button
        classes={{ root: classes.root }}
        color="secondary"
        variant="contained"
      >
        classes
      </Button>

      <Button
        className={classesClassName.root}
        color="secondary"
        variant="contained"
      >
        className
      </Button>
      {children}
    </>
  )
}
