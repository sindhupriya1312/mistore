import React from 'react'
import '../styles/PreNavbar.css'

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.55 22.5q-.95 0-1.625-.675T4.25 20.2q0-.95.675-1.625T6.55 17.9q.95 0 1.625.675T8.85 20.2q0 .95-.675 1.625T6.55 22.5Zm10.6 0q-.95 0-1.625-.675T14.85 20.2q0-.95.675-1.625t1.625-.675q.95 0 1.625.675t.675 1.625q0 .95-.675 1.625t-1.625.675ZM6.05 5.95l2.3 4.75h7.15l2.6-4.75ZM4.8 3.3h16.1q.65 0 .875.525.225.525-.025 1.025L17.7 12.1q-.3.575-.837.912-.538.338-1.213.338H7.9l-.8 1.4h12.4v2.65H6.55q-1.325 0-1.962-1.163-.638-1.162-.038-2.287L5.8 11.6 2.2 3.95H.05V1.3h3.8Zm3.55 7.4h7.15Z"/></svg>
const PreNavbar = () => {
  return (
    <div className="preNav">
      <div>
          <a href="https://www.mi.com/in/">MI INDIA</a><span>|</span>
          <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE HELP</a><span>|</span>
          <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
          <a href="https://www.mi.com/in/service/authorized_stores/"> RETAIL STORE</a>
      </div>
      <div>
              <a href="https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252F%252526sign%25253DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%26sign%3DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%2C%2C&_sign=y2X%2BJ2N3%2Fvyraa65wFdQfKWnXao%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a><span>|</span>
              <a href="https://in.account.xiaomi.com/fe/service/register?_locale=en_IN&source=&region=IN&sid=i18n_in_pc_pro&qs=callback%3Dhttps%253A%252F%252Fstore.mi.com%252Fin%252Flogin%252Fcallback%253Ffollowup%253Dhttps%25253A%25252F%25252Fwww.mi.com%25252Fin%2526sign%253DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%252C%252C%26sid%3Di18n_in_pc_pro%26_locale%3Den_IN&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&_uRegion=IN">SIGN UP</a><span>|</span>
              <a href="https://store.mi.com/in/cart">{cartIcon}CART (0)</a>
      </div>
    </div>
  )
}

export default PreNavbar