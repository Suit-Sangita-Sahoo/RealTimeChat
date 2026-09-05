import Child from './Child'

const Parent = () => {
    const cond=true;
  return (
    <div>
        <Child con={cond}/>
    </div>
  )
}

export default Parent

