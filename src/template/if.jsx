
export default props => {
    if(props.noHide) {
        return props.children
    } else {
        return false
    }
}
