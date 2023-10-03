import Item from './Item'

function Lista() {
    return (
        <div>
            <h1>
                Minha Lista Componentizada
            </h1>
            <ul>
                <Item texto="Item 1" cor="#FF0000"/>
                <Item texto="Item 2" cor="#00FF00"/>
                <Item texto="Item 3" cor="#0000FF"/>
            </ul>
        </div>
    )
}

export default Lista