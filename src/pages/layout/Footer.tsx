import React from 'react';
import SVG from 'Components/modal/SVG.tsx';

export default function Footer(): React.ReactElement {

    return (
        <footer>
            <section className='footer-section'>
                <div className='footer-left'>
                    <div className='footer-title'>
                    <a href='/'>Dilettante</a>
                    </div>
                    <div className='footer-item left-item'>
                        <a href='https://cafe.naver.com/purples6bha' target='_blank' rel="noreferrer"><SVG name='cafe' width={32} height={32} color='#ffffff' /></a>
                        <a href='https://blog.naver.com/dltt_music' target='_blank' rel="noreferrer"><SVG name='blog' width={32} height={32} color='#ffffff' /></a>
                        <a href='http://www.dlttmusic.com/' target='_blank' rel="noreferrer"><SVG name='homepage' width={32} height={32} color='#ffffff' /></a>
                        <a href='https://www.instagram.com/dilettantepiano/' target='_blank' rel="noreferrer"><SVG name='insta_logo' width={32} height={32} color='#ffffff' /></a>
                        <a href='/kakao-devapp' target='_blank'><SVG name='kakao_logo' width={32} height={32} color='#ffffff' viewBox='0 0 24 24' /></a>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-item right-item'>
                        <SVG name='location_marker' width={20} height={20} color='#ffffff' viewBox='0 0 175 175'/>
                        <span className='footer-desc'>경기 수원시 영통구 영통로217번길 21</span>
                    </div>
                    <div className='footer-item right-item'>
                        <SVG name='call' width={20} height={20} color='#ffffff' viewBox='0 0 175 175'/>
                        <span className='footer-desc'>+82 01088004825</span>
                    </div>
                    <div className='footer-item right-item'>
                        <SVG name='time' width={20} height={20} color='#ffffff' viewBox='0 0 175 175' />
                        <span className='footer-desc'>PM 13:00 ~ 23:00 / Monday off.</span>
                    </div>
                    <div className='footer-item right-item'>
                        <span style={{fontSize: '0.7rem'}}>Dev <a href='https://github.com/oogie826' target="_blank" rel="noreferrer">@oogie826</a></span>
                    </div>
                </div>
            </section>
        </footer>
    );
}