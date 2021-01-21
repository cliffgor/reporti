import './App.css';

import React, { useState } from 'react'

import { Container } from 'react-bootstrap'
import Repositorie from './Repositorie'
import SearchForm from './searchForm';
import repoPagination from './repoPagination';
import searchForm from './searchForm';
import useFetchRepo from './useFetchRepo'

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {repositories, loading, error, hasNextPage } = useFetchRepo(params, page)


  function handleParamChange(e) { 
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
   }



  return (
    <Container className="my-4">
      <h1 className="mb-4">Welcome to Reporti where we find the latest github repositories </h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <repoPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {repositories.map(repositorie => {
        return <Repositorie key={repositorie.id} repositorie={repositorie} />
      })}
      {/* <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
    </Container>
  );
}

export default App;
