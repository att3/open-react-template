import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Ymmärrä asiakkaitesi tarpeita',
    paragraph: `
    Kyselijen avulla varmistat että asiakkaasi ovat tyytyväisiä saamaansa palveluun. 
    Löydät myös piilevät syyt, mihin asiakkaat eivät ole tyytyväisiä.`
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Palvelukokemusmittarit
                </div>
                <h3 className="mt-0 mb-12">
                  Asiakastyytyväisyys
                </h3>
                <h4>NPS (suositteleminen)</h4>
                <p className="m-0">
                  <b>Yksinkertainen ja tehokas mittari kertoo teille asiakastyytyväisyydestä todella paljon.</b>
                  <br/>
                  Arviointi tapahtuu numeraalisella asteikoilla tai hymiöden avulla, jolloin arvionnin antaminen on helppoa ja nopeaa!
                </p>
                <h4>Tekstillinen palaute</h4>
                <p className="m-0">
                  Voitte myös helposti pyytää tekstillistä palautetta asiakkailta samlla tai erikseen, jotta tiedätte tarkkaan
                  mihin asiakkaat ovat tai eivät ole tyytyväisiä.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://psa.visma.fi/wp-content/uploads/2019/11/blog_nps_asiakasuskollisuuden_mittarina.jpg'}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                <Image
                  src={'https://miro.medium.com/max/4800/1*rBrMe2JdbCaZNdI_i39U8g.png'}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Helppo käyttöönotto
                </div>
                <h3 className="mt-0 mb-12">
                  Kymmenet valmiit kyselypohjat
                </h3>
                <p className="m-0">
                  Voitte valita sopivat kyselyt ja helposti muokata niistä yrityksellesi sopivat.
                  Voitte yhdistää NPS ja tekstillisiä palautekyseyitä.
                </p>
                <b>Jotta hallitset palvelupolun asiakaskokemustietoa</b>
                <ul>
                  <li>Strukturoidut kyselyt</li>
                </ul>
                <p>Tarjoavat teille sekä
                  numeraalisesti arvioitavaa tietoa että avoimia kysymyksiä asiakkaan palvelupolun eri vaiheilta</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://www.audienceproject.com/wp-content/uploads/audienceproject_technology_2-2000x2988.jpg'}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Aseta prosessi kerran, saa jatkuvia tuloksia
                </div>
                <h3 className="mt-0 mb-12">
                  Integraatiot ja automatisointi
                </h3>
                <p className="m-0">
                  Ota asiakkaasi automaattisesti yhteyttä huonon arvostelun jälkeen.
                  Näin voit taata että asiakas saa äänensä kuulluksi ja voit parantaa liiketoimintaasi.

                  <b>Integraatiot</b>
                  Yli 20 tuettua integraatiota.
                  <ul>
                    <li>Rest API</li>
                    <li>HTML upotus</li>
                    <li>Chatbotit</li>
                    <li>Zapier</li>
                    <li>Zendesk</li>
                    <li>Google Sheets</li>
                  </ul>

                  Kysely voidaan lähettää automattisesti aina esimerkiksi heti palvelun jälkeen.
                  Jos asiakas antaa negatiivisen palautteen, voidaan asiakkaalle lähettää toinen kysely,
                  jotta ymmärätte paremmin mihin asiakas ei ollut tyytyväinen.

                  Kyselyihin voi vastata monin eri tavoin. Vastausten kertymistä ja vastauksia voidaan seurata myös tiedonkeruun ollessa käynnissä.


                  <br />
                  {/*<b>Palkitse kyselyyn vastaamisesta</b>
                  <p>
                    Voit liittää kyselyyn kampanijan jotta saat enemmän vastauksia.
                    Voit tarjota vastaajalle esimerkiksi alennuksen seuraavasta ostoksesta. 
                </p>*/}
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://img.freepik.com/free-photo/i-wish-this-moment-could-stay-forever_329181-11286.jpg?w=1380&t=st=1668360192~exp=1668360792~hmac=f36a60274969665fd6ef9637e5c590bcda2606a9b87a0dee3381d44f8a7467ab'}
                  alt="Features split 03" />
              </div>
            </div>


            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://img.freepik.com/free-photo/i-wish-this-moment-could-stay-forever_329181-11286.jpg?w=1380&t=st=1668360192~exp=1668360792~hmac=f36a60274969665fd6ef9637e5c590bcda2606a9b87a0dee3381d44f8a7467ab'}
                  alt="Features split 03" />
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Vapaamuotoinen palaute
                </div>
                <h3 className="mt-0 mb-12">
                  Helppo käyttäjäpalautteen hallinta
                </h3>
                <p className="m-0">
                  Voit helposti hallita kaikkea palautetta.
                  Järjestelmä näyttää sinulle mikä palaute on käsitelty ja mikä ei.

                  Järjestelmän kautta voit helposti vastata suoraan asiakkaalle hänen antamaansa palautteeseen.
                  Voit esimerkiksi tarjota asiakkaalle hyvityksen tai ennaltamääriteltyn sähköpostiviestin nappia painamalla.

                  Voit myös helposti lokeroida palautetta oikeille henkilöille käsiteltäväksi

                  <b>
                    Tehty tiimeille
                  </b><br />
                  Sujuvaa tiimityöskenetelyä varten organisaatioissa palaute voidaan
                  lokeroida ja ohjata oikeille tahoille helposti
                  <ul>
                    <li>Organisaatiot</li>
                    <li>Joukkueet</li>
                    <li>Ryhmät</li>
                    <li>Yksilöt</li>
                  </ul>

                  <b>Aikataulu ja tavoitteet</b><br />
                  Järjestelmä myös tukee mahdollisuutta asettaa tavoitteita palautteen käsittelyajalle, jotta pysytte aikataulussa.
                  Palveluun pystytään asettamaan tavoitteellinen palautteen käsittelyaika, jolloin järjestelmä lähettää käsittelijän sähköpostiin muistutuksen määriteltynä ajankohtana ennen tavoiteajan umpeutumista.

                  <b>Monimuotoiset valinnat</b>
                  <p>Palautteen antaja voi liittää palautteen mukaan mediatiedostoja, kuten PDF tiedostoja, kuvia tai videoita</p>
                </p></div></div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Paperihommat
                </div>
                <h3 className="mt-0 mb-12">
                  Hienot pahvilaput QR-koodilla, aarraaa ,juustua.....,
                </h3>
                <p className='m-0'>

                  <b>Paperiset palautekyselylomakkeet</b><br />
                  <b>QR koodi linkki kyselyyn, missä vain, milloin vain</b><br />
                  <p>Helppo ja nopea muokata kyselystä yrityksesi näköinen. Voit tilata meiltä korkealaatuisen QR koodi kyselypahvistandin.</p>
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://th.bing.com/th/id/R.4e1c1348f9e6e2a8697e2fb68584e109?rik=Al9%2fm6RQpAtNCg&riu=http%3a%2f%2fmasfinanzas.com.pe%2fwp-content%2fuploads%2f2019%2f02%2fCodigos-QR_MercadoLibre.jpg&ehk=L%2b%2fNwy%2fZMdIF9TcWSlH0VwCOC1lCQ3RXuIGR3zFt8ro%3d&risl=&pid=ImgRaw&r=0'}
                  alt="Features split 03" />
              </div>

            </div>
            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://www.d1asia.co.th/application/files/3415/7715/6944/right_all-languages.png'}
                  alt="Features split 03" />
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Reaaliaikainen raportointi
                </div>
                <h3 className="mt-0 mb-12">
                  Jotta voit tarkastella ja vastata palautteesen missä vain, milloin vain
                </h3>
                <p className='m-0'>
                  <ul>
                    <li>Valmisraportit sähköpostiin</li>
                    <li>Päätä vasta kokeilujakson lopussa haluatko jatkaa käyttöä</li>
                    <li>Kaksisuuntainen viestittely. Vastaa suoraan asiakkaan palauteeseen, tuli palaute sitten
                      SMS tai sähköposti viestillä.
                    </li>
                  </ul>
                  <p>Valmisraportit ovat muokattavissa ja niihin voi valita tiedot esimerkiksi eri päätteiltä</p>
                </p>
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">



                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Kyselystandit ja kioskit
                </div>
                <h3 className="mt-0 mb-12">
                  Saatavilla kyselykioskeja jotka voit sijoittaa teille sopivaan paikkaan.
                  Kyselyitä on helppo ja nopea päivittää.
                </h3>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://www.d1asia.co.th/application/files/5815/7715/6905/Smiley_touch_in-use4-EN.jpg'}
                  alt="Features split 03" />
              </div>

            </div>
          </div>


        </div>
      </div >
    </section >
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;