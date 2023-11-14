const TemplateExpressions = ( ) =>{
    const name = "Luiz";
    const data ={
        age:25,
        job:"estagiário",
    };
    return(
        <div>
            <h1 className="mlf">Template Expressions</h1>
            <p>Olá, {name}!</p>
            <p>Você tem {data.age} anos, e atua como {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;