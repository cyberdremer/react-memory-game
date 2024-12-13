import '../styles/Header.css'

export default function Header({currScore, highScore}){
   return(<header>
        <div className="header-name">
            <h1>Brain Cyberware Testing</h1>
            <p>Test your cyberware in a memory game featuring beautiful felines.</p>
        </div>
        <div className="header-scoreboard">
            <span className='header-text'>Score: {currScore}</span>
            <span className='header-text'>High Score: {highScore}</span>
        </div>
    </header>
   );

}