import InlineSvg from '@hashicorp/react-inline-svg'
import Image from '@hashicorp/react-image'
import s from './style.module.css'

export default function Testimonial({ children, userLogoUrl, userDetails }) {
  return (
    <div className={s.testimonial}>
      <InlineSvg src={require('./img/quote-icon.svg?include')} />
      {children}
      <div className={s.userInfo}>
        <div className={s.userLogo}>
          <Image url={userLogoUrl} />
        </div>
        <span className={s.userDetails}>{userDetails}</span>
      </div>
    </div>
  )
}
