import { useState, useReducer } from 'react';

const MainDisplay = ()=> {
    const [ message,setMessage] = useState("");
    const [ itemTitle,setItemTitle ] = useState("");
    const [ buttonMessage, setButtonMessage ] = useState("Submit");

    const [ count,setCount] = useState(0);
    const [dataList, setDataList ] = useState([]);

    function typeInput(e){
      e.preventDefault();
      let input = e.target.value;
      setItemTitle(input);
    }

    function submitDetails(e){
      e.preventDefault();
      if(itemTitle === ""){
        alert("Cannot submit empty value")
      }else{
        dataList.push({
          title : itemTitle,
          count : count + 1
        })
        setCount(count + 1);
        setItemTitle("");
        setMessage("");
      }
    }

  return(
    <>
      <div>
          <div>
            <span className="message-modal">{message}</span>
            <h3> Grocery Bud </h3>
          </div>

        <form>
          <input type="text" value={itemTitle} placeholder="e.g eggs" onChange={typeInput}/>
          <button onClick={submitDetails}>{buttonMessage}</button>
        </form>

        <div className="grocery-items">
          {dataList.map((data) => {
                const { count, title } = data;
            return (
              <div key={count}>
                  <div>
                    {title}
                    <button
                    onClick={()=> {
                      let itemIndex = dataList.indexOf(data);

                      if(dataList.length === 1){
                        setDataList([]);
                      } else {
                        if(itemIndex > -1){
                          dataList.splice(itemIndex,1);
                          let newArray = dataList;
                          setDataList(newArray);
                        }

                      }
                    }}>
                    Delete Item</button>
                  </div>
              </div>
            );
          })}
        </div>

        <button onClick={()=> {
          setDataList([]);
          setCount(0);
        }} hidden={dataList.length <= 0}> Clear List </button>
      </div>
    </>
  )
}


export default MainDisplay;
