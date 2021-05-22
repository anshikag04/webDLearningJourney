import useLocalStorage from '../Hooks/useLocalStorage'

function Footer() {
    let [value, setValue] = useLocalStorage('')
    return (
        <div>
            <input type="text" onChange={(event) => { setValue(event.target.value) }} />
            Value: {value}
        </div>
    )
}
export default Footer;