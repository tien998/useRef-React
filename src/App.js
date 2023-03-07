import { forwardRef, useRef, useState } from "react"


export default function App() {
  const inputRef = useRef(null);
  function focusInput() {
    inputRef.current.focus()
  }
  return (
    <>
      <FormField ref={inputRef} />
      <button onClick={focusInput}>Edit</button>
    </>
  )
}

const FormField = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  return (
    <form>
      <NameInput 
        ref={ref} value={value} 
        onChange={e => { setValue(e.target.value) }} />
    </form>
  )
})

const NameInput = forwardRef((props, ref) => {

  return (
    <>
      <input ref={ref} {...props} />

    </>
  )
}) 