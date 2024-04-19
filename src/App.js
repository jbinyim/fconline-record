import "./App.css";


function App() {
  return <div className="App">


    <header>
      <h1>FC GG.KR</h1>
      <nav>
        <ul>
          <li><a href="https://fconline.nexon.com/main/index" target='_blank'>FC Online</a></li>
          <li>선수 검색</li>
          <li>랭커 닉네임조회</li>
        </ul>
      </nav>
    </header>
    <section className="searchArea">
      <div>
        <form>
          <input type="search" placeholder="구단주명"></input>
          <button type="button">검색</button>
        </form>
      </div>
    </section>

  </div>;
}

export default App;
