# 1° npx create-react-app nomedoprojeto --template typescript
# 2° public fica o html que carrega tudo 
# 3° src fica os códigos do servidor 
# 4° cada componet é um arquivo.tsx
# 5° todo file que é componet deve começar com letra maiuscula 
# 6° a função em javascript é um componet 
# 7° todo componet retorna HTML 
# 8° quando tiver mais de um element HTMl dentro do return esse deve conter uma fragmentação <> </> ou uma div  

home.tsx 

const Home = ()=>{
    return (
        <>
        <h1>oi</h1>
        <h2> olá </h2>
        </>
    )
}

# 9° no package.json ficam todas as dependencias 
# 10° chamada de componente é estilo tag : <Home/>
# 11° o index.html é mapeado pelo index.tsx que carrega App.tsx 
# 12 npm install react-router-dom@6
