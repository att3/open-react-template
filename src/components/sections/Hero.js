import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Asiakaspalautejärjestelmä
              <span className="text-color-primary"> niille jotka halauvat ymmärtää asiakkaiden tarpeita
              </span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Asiakkaalta palauteen saaminen on äärrettömän tärkeää jotta yrityksesi menestyy, 
                mutta palautteen keräämistä ja analysointia on helppo laiminlyödä, koska
                 sen kerääminen, käsittely ja ymmärtäminen on vaikeaa, hidasta ja kallista.
              </p>
              <h2 style={{ marginTop: 60 }} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                <span className="text-color-primary"> Aapo Asiakaspalautejärjestelmä
                </span><br />
              </h2>
              <h4>
                Järjestelmän avulla automatisoit asiakaspalautteen keräämisen ja
                hallitset kaikkea asiakaspalautetta helposti yhdestä paikasta!
              </h4>
              <div style={{ marginTop: 60 }}>
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Kokeile ilmaiseksi
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    Pyydä demo
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;