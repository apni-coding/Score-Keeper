let score = 0;
let  wicket = 0;

function addone(){
    score += 1;
    rootElement.render(<App/>)
}

function addscore(num){
    if(wicket<10){
    score += num;
    rootElement.render(<App/>)
    }else{
        alert("All Ought!!")
    }
}

function addWicket(){
    if(wicket<10){
    wicket += 1;
    rootElement.render(<App/>);
    }else{
        alert("All Ought!!");
    }
}

function reset(){
    wicket=0;
    score = 0;
    rootElement.render(<App/>);
}

const App = ()=> (
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    <div>
        <button  className="btn btn-primary mx-2" onClick={()=> addscore(1)}>1</button>
        <button  className="btn btn-primary mx-2" onClick={()=> addscore(2)}>2</button>
        <button  className="btn btn-primary mx-2" onClick={()=> addscore(3)}>3</button>
        <button  className="btn btn-primary mx-2" onClick={()=> addscore(4)}>4</button>
        <button  className="btn btn-primary mx-2" onClick={()=> addscore(5)}>5</button>
        <button  className="btn btn-primary mx-2" onClick={()=> addscore(6)}>6</button>
        <button  className="btn btn-primary mx-2" onClick={addWicket}>Wicket</button>
    </div>
    <div>
    <button  className="btn btn-primary my-3" onClick={reset}>Reset Score Card </button>
    </div>
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App/>)