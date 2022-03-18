import './switchButton.scss'

interface switchButtonProps {
    checked: boolean
    setChecked(e: boolean): void
    icons: string[]
}

const SwitchButton = ({ checked, setChecked, icons }: switchButtonProps) => {

    return (
        <label className="switch">
            <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
            <span className="slider round" >
                <span className='dot'>
                    <img src={checked ? icons[0] : icons[1]} alt='icon' />
                </span>
            </span>
        </label >

    )
}

export default SwitchButton