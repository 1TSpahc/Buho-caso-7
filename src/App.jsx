import { Form } from './components/form'
import { AccountProvider } from './context/accountContext'

function App () {
  return (
    <AccountProvider>
      <Form />
    </AccountProvider>
  )
}

export default App
