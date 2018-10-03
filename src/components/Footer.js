import React from 'react'
import classNames from 'classnames'
import styles from './Footer.module.css'

const Footer = props => (
  <footer className={classNames(props.className, 'container-full')}>
    <div className={classNames(styles.footer, 'container')}>
      Copyright Art-Joy 2018
    </div>
  </footer>
)

export default Footer
