import { useEffect, useState } from "react";

function App() {
    const [displayDiv, setDisplayDiv] = useState("");
    const [score, setScore] = useState(0);
    const [butonActive, setButonActive] = useState(true);
    const [scoreTable, setScoreTable] = useState("");
    const [play, setPlay] = useState(false);
   
    const[dogru,setDogru] = useState(0)



    const puan = (option) => {
        if (butonActive && play) {
            if (option === "deve" && document.getElementById("deve").classList.contains("deve-active")) {
                setScore(score + 1);
                setScoreTable("green");
                
                setDogru(dogru +1)
                
            } else if (option === "cuce" && document.getElementById("cuce").classList.contains("cuce-active")) {
                setScore(score + 1);
                setScoreTable("green");
                
                setDogru(dogru +1)
            } else {
                if (score > 0) {
                    setScore(score - 1);
                    
                    setScoreTable("#DB2A55");
                } else {
                    setScoreTable("#DB2A55");
                }
            }
            setButonActive(false);
        }
    };

    useEffect(() => {
        if (play) {
            const interval = setInterval(() => {
                const random = Math.random();
                if (random < 0.5) {
                    setDisplayDiv("deve");
                } else {
                    setDisplayDiv("cuce");
                }
                setTimeout(() => {
                    setDisplayDiv("");
                    setScoreTable("");
                   
                }, 1000);
                setButonActive(true);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [play]);

    return (
        <>
           <div className="contaier d-flex justify-content-center py-5 gap-3">
            <button onClick={() => setPlay(true)} className="btn btn-outline-success">
                Başlat
            </button>
            <button onClick={() => setPlay(false)} className="btn btn-outline-danger">
                Durdur
            </button>
            <button onClick={() => (!play) && setScore(0) && setDogru(0)} className="btn btn-outline-warning">Sıfırla</button>
            </div>
            {play&&(
                     <div className="d-flex justify-content-center  gap-3">
                    <span>dogru tıklama: </span>
                    <span>  {dogru}</span>
                    </div>
                )}      
              
            <div className="container d-flex flex-column align-items-center justify-content-center border py-3">
             {play&& (   <div className="play">
                    <div className={`deve ${displayDiv === 'deve' ? 'deve-active' : ''}`} id="deve"><span>Deve</span></div>
                    <div className={`cuce ${displayDiv === 'cuce' ? 'cuce-active' : ''}`} id="cuce"><span>Cuce</span></div>
                    
                </div>
              
              )}
              {!play&&(
                <div className="play border d-flex align-items-center justify-content-center text-success">
                    <p style={{fontWeight:"bolder", textAlign:"center"}}>Başlamak veya Devam Etmek İçin "Başlat" Butonuna Bas</p>
                </div>
              )

              }
                <div className="buttons py-5 d-flex justify-content-center gap-3">
                    <button onClick={() => puan("deve")} className="btn btn-outline-primary">Deve</button>
                    <button onClick={() => puan("cuce")} className="btn btn-outline-primary">Cuce</button>
                    <span className="col-lg-4 d-flex align-items-center justify-content-center" style={{backgroundColor: scoreTable, border: "1px solid whitesmoke", borderRadius: "30%"}} id="scoreTable">
                        {score}
                    </span>
               
    
                         
                    

                  
                </div>
                

                
      
           </div>
           
        </>
    );
}

export default App;
