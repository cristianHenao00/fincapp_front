import React, { useState, useEffect, useRef } from 'react';
// import { Nav, NavItem, TabContent, TabPane } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
// import Headroom from 'react-headroom';
// import GlideComponent from 'components/carousel/GlideComponent';
import { Modal, ModalBody } from 'reactstrap';
import { adminRoot } from '../constants/config';
import LogoName from '../assets/logos/white-full.svg';

// import ButtonMF from 'components/elements/forms/buttonMF';
// import Empresa from 'components/formulariosElementos/empresa/empresa';
// import {setCreate} from 'components/cruds/Buttonset';

const Home = () => {
  // const formCreate = (listFunction,closeFunction) => {return <Empresa
  //                                                                 listFunction = {listFunction}
  //                                                                 closeFunction = {closeFunction}
  //                                                                 origen = "outside"/>}
  // setCreate.title = "Registra tu Empresa"

  const [modalBasic, setModalBasic] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  // const [activeTab, setActiveTab] = useState(0);

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = `${homeRect.x - 580}px`;

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX = `${
      event.target.innerWidth - homeRect.x - 2000
    }px`;

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };

  const closeFunction = () => {
    setModalBasic(false);
  };

  return (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu,
      })}
    >
      <div className="main-container">
        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row p-5" ref={refRowHome}>
                <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div className="home-text">
                    <div className="display-1">
                      {/* CalendarTax <br /> */}
                      <img alt="logo" src={LogoName} height="150" />
                    </div>
                    <p className="white mb-5" style={{ textAlign: 'justify' }}>
                      Somos una aplicación que te ayuda con tus compras y
                      ventas, te permite llevar el control de tus productos
                      agrícolas y de origen del campo.
                      <br />
                      <br />
                    </p>
                    <a
                      style={{ fontSize: '15px' }}
                      className="btn btn-light btn-xl mr-2 mb-2"
                      href={adminRoot}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ingresar <i className="simple-icon-arrow-right" />
                    </a>
                    <a
                      style={{ fontSize: '15px' }}
                      className="btn btn-light btn-xl mr-2 mb-2"
                      href="user/register"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Regístrate <i className="simple-icon-arrow-right" />
                    </a>
                  </div>
                </div>
                <Modal
                  size="xl"
                  isOpen={modalBasic}
                  toggle={() => setModalBasic(!modalBasic)}
                >
                  <div className="modal-header">
                    <h4>Registro de empresas </h4>
                    <button
                      type="button"
                      className="close"
                      onClick={closeFunction}
                    >
                      {' '}
                      X{' '}
                    </button>
                  </div>
                  <ModalBody>{/* {formCreate("",closeFunction)} */}</ModalBody>
                </Modal>
              </div>

              <div className="row">
                <a
                  className="btn btn-circle btn-outline-semi-light hero-circle-button"
                  href="#scroll"
                  onClick={(event) => scrollTo(event, 'features')}
                >
                  <i className="simple-icon-arrow-down" />
                </a>
              </div>
            </div>
          </div>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <i className="simple-icon-arrow-up" />
                  </a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    {/* <img
                      className="footer-logo"
                      alt="footer logo"
                      src="/assets/logos/white-full.svg"
                    /> */}
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12" />
                <div className="col-12 text-center">
                  <p className="mb-0">2022 © Team Alfa S.A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
