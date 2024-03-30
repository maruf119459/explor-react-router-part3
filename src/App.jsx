import './App.css'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import RefForm from './components/RefForm/RefForm'
// import HookForm from './HookForm/HookForm'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import Grandpa from './components/Grandpa/Grandpa'
function App() {
/*
  const handleSingUpSubmit = data =>{
    console.log('sign up data', data)
  }
  const handleUpdateProfile = data =>{
    console.log('update profile data', data)
  }
*/

  return (
    <>
        <h1>Form master</h1>
        <Grandpa></Grandpa>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StatefulForm></StatefulForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        
        {/*
          <ReuseableForm formTitle={'Sing Up'} handleSubmit={handleSingUpSubmit}>
            <div>
              <h2>Children Sing Up</h2>
              <p>Please sing up right now</p>
            </div>
          </ReuseableForm>
          <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText={'Update'}>
          <div>
              <h2>Children Update Profile</h2>
              <p>Update profile</p>
            </div>
          </ReuseableForm>
        */}
    </>
  )
}

export default App


// alt + shift + downarow dile select line ke copy pest kora jay