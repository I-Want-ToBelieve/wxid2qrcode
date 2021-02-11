import React, { useCallback, useMemo, useState } from 'react'
import logo from './logo.svg'
import appreciate from './appreciate.jpg'
import QRCode from 'qrcode.react'
import './App.scss'

const App: React.FC = () => {
  const [wxid, setWxid] = useState('')
  const src = useMemo(() => `weixin://contacts/profile/${wxid}`, [wxid])

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const wxid = event.target.value
    setWxid(wxid)
    console.log('wxid', wxid)
  }, [])
  return (
    // see https://codepen.io/FloatingShuYin/pen/oNYYXEg
    <>
      <div className="container">
        <div>
          <div className="appreciate">
            <img src={appreciate} alt="" width="250" height="250" />
          </div>
          <div className="webflow-style-input">
            <input
              className=""
              type="email"
              placeholder="请输入要生成微信二维码的 wxid"
              autoFocus
              value={wxid}
              onChange={onChange}
            ></input>

            <div className="qrcode">
              {wxid !== '' && <QRCode value={src} />}{' '}
            </div>

            {/* <!--     <button type="submit"><i className="icon ion-android-arrow-forward"></i></button> --> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
