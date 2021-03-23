import Button from '@material-ui/core/Button'
import classes from './nav.module.css'
import Link from 'next/link'

const Btn = (props) => { 
  const {href, text} = props
  return (
    <Button className={classes.btn}>
      <Link href={href}>{text}</Link>
    </Button>
  )
}

export default Btn
