import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="mushaf-container">
      <header>
        <h1>مصحف العلاء</h1>
        <p>بوابتك للقراءة والاستماع</p>
      </header>

      <main>
        <div className="card">
          <button>📖 قراءة القرآن الكريم</button>
          <button>🎧 الاستماع للمقرئين</button>
          <button>📍 اتجاه القبلة</button>
          <button>📿 أذكار المسلم</button>
        </div>
      </main>

      <footer>
        <p>تم البرمجة بواسطة العلاء - 2026</p>
      </footer>
    </div>
  )
}

export default App