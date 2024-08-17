

function App() {
  return (
    <div className="main">
      <div className="search-username">
        <input className="search-user" type="text" placeholder="Search Leetcode username" />
      </div>

      <div className="stats">
        <div className="stats-data">
          <p className="num-qs">
            <h3 className="stats-head">
              Stats
            </h3>
            Number of Questions solved : 124
          </p><p className="num-cnts">
            Number of Contests participated : 34
          </p>
          <p className="num-qs">
            <h3 className="stats-head">
              Rankings
            </h3>
            World ranking : 23948
          </p><p className="num-cnts">
            Rank in recent Contest : 8362
          </p>
        </div>
      </div>
      <div className="contest-stats">
        <h3 className="cont-stats-head">
          Contest Data
        </h3>
        <input placeholder="Search contest" className="search-contest" type="text" />
        <button className="search-contest-btn">Search</button>
        <div className="contest-scroll">
            
        </div>
      </div>
    </div>
  )
}
export default App