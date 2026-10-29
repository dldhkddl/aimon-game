import { useEffect } from 'react'
import villainIcon from '../../assets/boss_midcmorg.png'

export default function MiniBossAlert({ onFight }) {
  // 직전 화면(빈칸 채우기 퀴즈 등)의 <input autoFocus> 가 이 화면으로 전환된
  // 뒤에도 포커스를 유지해, 일부 모바일 브라우저/키보드에서 깜빡이는 텍스트
  // 커서가 이 카드 위에 남아 보이는 문제가 있었다. 화면 진입 시 명시적으로
  // blur 시켜 잔상 커서를 없앤다.
  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }, [])

  return (
    <div className="stage-page villain-mode">
      <div className="boss-container" style={{ paddingTop: '2rem' }}>
        <div className="boss-card intro-card card-glass animate-fade-in-up">
          <div className="boss-avatar animate-float">
            <img src={villainIcon} alt="미니보스" />
          </div>
          <h1 className="boss-title">‼️ 미니보스 등장!</h1>
          <p className="boss-desc">
            "크크크, 내가 코드를 망쳐놨지!<br />과연 날 이길 수 있을까?"
          </p>
          <button className="btn btn-primary btn-lg btn-full pulse-btn" onClick={onFight}>
            ⚔️ 맞서 싸우기!
          </button>
        </div>
      </div>
    </div>
  )
}

