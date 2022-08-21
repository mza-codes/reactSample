function Counter (props){
    const {title,value,count} = props // destructured the values in props
    return (
        <div className="mx-auto" style={{border:'1px solid white',padding:'1rem',margin:'0.8rem',maxWidth:'15rem'}}>
            <h3> {title} </h3>
            <h3>Count : {count} </h3>
            <h4>{count} * 5 = {value} </h4>
        </div>
    )
}

export default Counter;