import React from 'react';
import { Link } from './Link';

export class Header extends React.Component {
  linkText = '+7(962)556-1234'

  render() {
    const linkContent = () => {
      return <div className="header-logo"></div>
    }

    return (
      <header>
        <div className="wrapper">
          <div className="header">
            <Link href='#' content={linkContent()} />
            <Link href='tel:888' className="header-phone" />
            <div className="header-phonelink">
              <Link href='tel:7(962)556-1234' content={this.linkText} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}




