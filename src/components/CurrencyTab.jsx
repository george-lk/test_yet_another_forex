function CurrencyTab( { exchangeName, exchangeValue } ) {
    return (
        <>          
            <div style={{
                display: "grid",
                minHeight: "80px",
                minWidth: "200px",
                gridTemplateRows: "1fr 1.2fr",
            }}>
                <div style={{
                    border: "1px solid #D9DADB",
                    backgroundColor: "#F0F1F2",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    color: "black",
                    display: "grid",
                    alignContent:"center",
                }} >
                    {exchangeName}
                </div>
                <div style={{
                    border: "1px solid #D9DADB",
                    backgroundColor: "#F8F9FA",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                    color: "black",
                    fontSize: "1.3rem",
                    display: "grid",
                    alignContent:"center",
                }}><b> {exchangeValue} </b></div>
            </div>
        </>
    )

}

export default CurrencyTab;

