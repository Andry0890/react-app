import "./app-info.css";

const AppInfo = ({data, increased}) => {
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании "Три поросёнка"</h1>
            <h2>Общее число сотрудников: <b>{data.length}</b> </h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;