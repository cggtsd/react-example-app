import  './myStyles.css'

// function StyleSheet(props) {
//     const className=props.primary?'primary':''
//     return <h1 className={`${className} font-xl`}>StyleSheet</h1>
// }

//destructuring props
function StyleSheet({primary}) {
    const className=primary?'primary':''
    return <h1 className={`${className} font-xl`}>StyleSheet</h1>
}

export default StyleSheet