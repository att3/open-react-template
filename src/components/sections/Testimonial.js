import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Helppo ja riskitön käyttöönotto',
    paragraph: 'Ilmaisen 30 päivän kokeilun lisäksi voimme auttaa teitä ottamaan tuotteen käyttöön parhaimalla mahdollisella tavalla yrityksellenne.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <h3>
                Askel-askeleelta käytöönotto
                </h3>
                <p className="text-sm mb-0">
                  Yksinkertaisen käyttöönottoprosessin avulla näette askel askeleelta miten saatte otettua järjestelmän yrityksenne käyttöön parhaalla tavalla.
                </p>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <h3>
                Puhelin ja chat tuki
                </h3>
                <p className="text-sm mb-0">
                  Mitä ikinä tarvtisettekin, olemme teidän saavutettavissa helposti ja valmiina auttamaan lähes vuorokauden jokaisena tuntina
                </p>
              </div>
            </div>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <h3>
                  Dokumentaatio & koulutus
                </h3>
                <p className="text-sm mb-0">
                  On teillä kysymys jostain tai tarve oppia lisää, meidän laaja jatkuvasti päivittyvä
                  dokumentaatio pitää huolen siitä että saat vastauksen kysymykseesi aina mahdollisimman pian!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;