import React from 'react';
import './App.css'
import SearchSect from './components/SearchSect';
import Map from './components/Map';

function App() {
  const [ipAddress, setIpAddress] = React.useState('')
  const [address, setAddress] = React.useState(null)
  const checkIpAddress =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
const checkDomain =
  /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  React.useEffect(() => {
      try {
          const getInitialData = async () => {
              const resp = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_GLJNUdJAe9SRJWtxCHxpmeS71qSl2&ipAddress=192.212.174.101`)
              const data = await resp.json()
              // setAddress(data)
              setAddress(data)
              console.log(data.location.lat)
          }
          getInitialData()
      } catch (error) {
          console.trace(error)
      }
  }, [])


  const getEnteredAddress = async () => {
    const resp = await fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_GLJNUdJAe9SRJWtxCHxpmeS71qSl2&${checkIpAddress.test(ipAddress) ? `ipAddress=${ipAddress}` : checkDomain.test(ipAddress) ? `domain=${ipAddress}` : ""}
    `)
    const data = await resp.json()
    setAddress(data)
  }


  const handleForm = (e) => {
    e.preventDefault();
    getEnteredAddress();
    setIpAddress("")
  }

  return (
    <>
      <div className="">
        {address && <SearchSect 
        ip={address.ip}
        locationRegion={address.location.region}
        locationCountry={address.location.country}
        timezone={address.location.timezone}
        isp={address.isp}
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        handleForm={handleForm}
        />}

        {address && <Map 
        />}
      </div>
    </>
  )
}

export default App
