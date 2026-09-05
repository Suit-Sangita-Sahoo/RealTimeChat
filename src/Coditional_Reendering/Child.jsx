const Child = (props) => {
    
  return (
    <div>
       
       {
        props.con?(
            <img src="https://images.pexels.com/photos/33873357/pexels-photo-33873357.jpeg" alt="" />
        ):
        (
        <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequatur laudantium iste praesentium libero suscipit dolorem distinctio, necessitatibus explicabo sit,
             impedit perferendis quaerat repellendus inventore iusto ex neque quam ipsam.
        </h1>
        )
       }
    </div>
  )
}
export default Child;