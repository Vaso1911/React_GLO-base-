import React from 'react';
import { Link } from './Link';

export class Footer extends React.Component {

  render() {

    return (
      <footer>
        <div className="footer">
          <div className="footer-logo"></div>
          <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
          <Link href="tel:888" className="footer-phone" />
          <div className="footer-websurfer">
            <span className="footer-websurfer_build">Сделано</span>
            <Link href="#" content="Ваше имя" />
          </div>
          <div className="footer-phonelink">
            <Link href="tel:888" content="+7(962)556-1234" />
          </div>
        </div>
      </footer>
    )
  }
}