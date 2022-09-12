import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

<svg
 width="559pt" height="897pt" viewBox="0 0 559 897"
 xmlns="http://www.w3.org/2000/svg">

<g 
className="svg-container" 
transform="translate(0,897) scale(0.1,-0.1)" 
fill="#ffd100">

<path 
ref={outlineLogoRef} 
d="M2040 8850 l-23 -110 -87 0 -86 0 -63 -287 c-35 -159 -65 -298 -68
-310 -5 -22 -3 -23 78 -24 164 -1 948 -34 954 -41 4 -4 -1192 -7156 -1199
-7165 -1 -1 -179 -10 -396 -19 -217 -9 -396 -18 -397 -19 -3 -1 -26 -116 -37
-177 l-7 -38 -89 0 -89 0 -10 -52 c-6 -29 -31 -161 -56 -293 -25 -132 -47
-249 -50 -260 l-4 -21 1542 1 1542 0 29 108 30 107 77 0 c43 0 80 4 83 9 26
41 140 602 125 614 -2 3 -253 13 -557 23 -304 10 -557 21 -563 25 -7 4 189
1160 610 3584 341 1967 622 3579 624 3581 2 2 194 11 428 20 233 9 427 20 431
23 4 4 20 53 34 109 l27 102 79 0 c93 0 83 -15 133 195 27 110 85 399 85 421
0 2 -699 4 -1554 4 l-1554 0 -22 -110z m3090 66 c0 -62 -106 -520 -123 -534
-7 -5 -230 -17 -497 -26 -267 -10 -499 -22 -517 -27 -18 -6 -34 -18 -37 -27
-12 -39 -1276 -7352 -1276 -7380 0 -25 5 -31 28 -36 15 -3 266 -13 557 -22
292 -9 533 -20 536 -23 12 -12 -56 -365 -96 -505 l-15 -51 -1510 0 c-1506 0
-1511 0 -1506 20 2 11 26 135 52 275 26 140 52 257 56 261 4 3 207 13 450 23
482 20 499 22 526 79 14 29 1242 7305 1242 7357 0 21 -6 29 -22 33 -13 3 -245
13 -515 23 -271 10 -493 22 -493 26 0 7 96 447 115 526 l5 22 1520 0 c1321 0
1520 -2 1520 -14z m-3125 -218 c-10 -33 -77 -349 -74 -352 2 -2 235 -12 516
-23 282 -11 515 -22 518 -25 8 -7 -1223 -7312 -1237 -7343 -12 -26 -20 -30
-100 -40 -30 -4 -48 -2 -48 4 0 5 270 1614 600 3575 330 1961 600 3575 600
3586 0 12 -9 24 -22 29 -13 5 -243 17 -513 26 -269 10 -492 19 -494 21 -4 4
102 501 114 542 3 8 27 12 74 12 52 0 69 -3 66 -12z m2812 -454 l-23 -89 -55
-3 c-235 -11 -774 -30 -777 -27 -6 6 20 159 29 169 5 6 834 46 846 41 2 -1 -8
-42 -20 -91z m-4117 -7621 c0 -5 -16 -89 -35 -188 -19 -99 -35 -180 -35 -181
0 0 648 0 1439 0 792 1 1442 -2 1445 -5 5 -5 0 -30 -29 -134 l-14 -50 -1511 0
c-830 0 -1510 2 -1510 4 0 10 101 537 105 549 5 13 145 18 145 5z"/>
</g>
      </svg>
    </div>
  )
}

export default Logo