
export const Fruits = ({fruit}) => {
    return (
        <li key={fruit.id}>
            {fruit.name} &nbsp; {fruit.calories}
        </li>
    )
}