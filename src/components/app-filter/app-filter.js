import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На увольнение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    Лучшие сотрудники
            </button>
        </div>
    )
}

export default AppFilter;