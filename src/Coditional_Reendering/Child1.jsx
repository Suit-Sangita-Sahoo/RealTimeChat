const Child1 = ({ name, age }) => {
    return (
        <div>
            {
                (name === "sundari" && age > 18) ? <h1>PASS</h1> : <h1>Fail</h1>
            }
            <button
                style={{
                    backgroundColor: (name === "sundari" && age > 18) ? "green" : "red",
                    padding: "10px",
                }}
            >
                {(name === "sundari" && age > 18) ? "Submit" : "Disable"}
            </button>
        </div>
    )
}
export default Child1
