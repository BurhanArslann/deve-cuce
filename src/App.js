import { useEffect, useState } from "react";

function App() {
    const [displayDiv, setDisplayDiv] = useState("");
    const [score, setScore] = useState(0);
    const [butonActive, setButonActive] = useState(true)
    const [scoreTable, setScoreTable] = useState("")
    const puan = (option) => {
      
      
      if(butonActive){
        if (option === "deve" && document.getElementById("deve").classList.contains("deve-active")) {
          setScore(score + 1);
          setScoreTable("green")
          
      } else if (option === "cuce" && document.getElementById("cuce").classList.contains("cuce-active")) {
          setScore(score + 1);
          setScoreTable("green")
      } else {
        if(score>0){
          setScore(score - 1);
          setScoreTable("#DB2A55")
        }
        else{
          setScoreTable("#DB2A55")
        }
      }
      setButonActive(false)
      }
     
    }

    useEffect(() => {
     
        const interval = setInterval(() => {
            const random = Math.random();
            if (random < 0.5) {
                setDisplayDiv("deve");
            } else {
                setDisplayDiv("cuce");
            }
             
            // Belirli bir süre sonra displayDiv'i boş bir string'e ayarla
            setTimeout(() => {
                setDisplayDiv("");
                setScoreTable("")
            }, 1500);
            setButonActive(true)
           
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container d-flex flex-column align-items-center justify-content-center border py-3">
                <div className="play">
                    <div className={`deve ${displayDiv === 'deve' ? 'deve-active' : ''}`} id="deve"><span>deve</span></div>
                    <div className={`cuce ${displayDiv === 'cuce' ? 'cuce-active' : ''}`} id="cuce"><span>cuce</span></div>
                </div>
                <div className="buttons py-5 d-flex justify-content-center gap-3">
                    <button onClick={() => puan("deve")} className="btn btn-success">deve</button>
                    <button onClick={() => puan("cuce")} className="btn btn-success">cuce</button>
                    <span className="col-lg-4 d-flex align-items-center justify-content-center " style={{backgroundColor: scoreTable, border:"1px solid whitesmoke",borderRadius:"30%"}} id="scoreTable">{score}</span>

                </div>
            </div>
        </>
    );
}

export default App;
