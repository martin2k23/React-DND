import './App.css';

function App() {
  const controls =[
    { id:'1', name:'Label'},
    { id:'2', name:'Input'},
    { id:'3', name:'Button'}
  ]

  return (
    <div className="App">
      <div className='main'>
        MAIN
      </div>
      
      <div className='sidebar'>
        <div className='text'>BLOCKS</div>
        <div className='blocks'>
          {(controls || []).map((item)=>(
            <div className='item_container'>           
              <div class="drop"/>
              {item?.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
