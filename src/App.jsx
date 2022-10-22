import './App.css'
import { useState, useEffect } from 'react'
import CurrencyTab from './components/CurrencyTab'
import GetApiLayerData from './helper/ApiLayer'
import { formatDate, todayFormatDate } from './helper/DateFunc'

function App() {
	const [exchangeRateList, setExchangeRateList] = useState(null)
	const [isLiveData, setIsLiveData] = useState(true)
	const [currDate, setCurrDate] = useState(todayFormatDate())
	const apikey = import.meta.env.VITE_APILAYER_API_KEY

	const renderList = () => {
		if(exchangeRateList == null){
			return <></>
		}

		return (
			<>
				{
				Object.entries(exchangeRateList.quotes).map( (item) => {
					return <CurrencyTab key={item[0]} exchangeName={item[0].slice(3)} exchangeValue={item[1].toFixed(2)}></CurrencyTab>
				})
				}
			</>
		)   
	}

	const h_changeDataType = (event) => {
		if(event.currentTarget.value == "Live"){
			setIsLiveData(true)
			setCurrDate(formatDate(new Date()))
		}
		else {
			setIsLiveData(false)
		}
	}

	const h_changeDate = (event) => {
		setCurrDate(formatDate(new Date(event.target.value)))
	} 

	useEffect(
		() => {
			if(isLiveData == true){
				GetApiLayerData("Live",currDate,apikey).then(res => {setExchangeRateList(res)})
			}
			else{
				GetApiLayerData("History",currDate,apikey).then(res => {setExchangeRateList(res)})
			}
				
		},
		[currDate,isLiveData]
	) 

	return (
		<div className="App">
			<div
				style={{
				background:"black",
				color:"white",
				padding: "0.5rem 1rem"
				}}
			>
				Yet Another Forex
			</div>
			<br></br>
			<div>
				<span> Rate as of {currDate} </span>
				<span style={{
					float: "right"
				}}>
					<input type="radio" id="History" name="dataTypeSelection" value="History" onChange={ (e) => {h_changeDataType(e) }} checked={!isLiveData}/>
					<label>History Data</label>
					<input type="radio" id="Live" name="dataTypeSelection" value="Live" onChange={ (e) => {h_changeDataType(e) }} checked={isLiveData}/>
					<label>Live data</label> 
				</span>
			</div>

			{
				isLiveData ? 
				<></> : <div style={{
					float: "right"
				}}>
					<label>Date Selector: </label>
					<input type="date" id="dateSelector" name="dateSelector" value={currDate} max={todayFormatDate()} onChange={ (e) => { h_changeDate(e) } }></input>
				</div> 
			}
			<br></br>
			<br></br>
			<div style={ {
				display: "grid",
				justifyContent:"center",
			}} >
				<div style={ {
					display:"grid",
					gap: "2rem 8rem",
					gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
					maxWidth: "60vw",
					minWidth: "300px",
					justifyContent: "center",
					textAlign: "center",
				}}>
					{
						renderList()
					}
				</div>
			</div>
		</div>
	)
}

export default App
