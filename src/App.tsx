import './App.css'

function App() {
  return (
    <div className="mushaf-container">
      <header>
        <div className="ornament">﴿﴾</div>
        <h1>مصحف العلاء</h1>
        <p>بوابتك للقراءة والاستماع</p>
      </header>

      <main>
        <div className="card-grid">
          <button className="main-btn">📖 قراءة القرآن الكريم</button>
          <button className="main-btn">🎧 الاستماع للمقرئين</button>
          <button className="main-btn">📍 اتجاه القبلة</button>
          <button className="main-btn">📿 أذكار المسلم</button>
        </div>
      </main>

      <footer>
        <p>تم البرمجة بواسطة العلاء - 2026</p>
      </footer>
    </div>
  )
}

export default App