import React from 'react';

export default ({searchMethod}) =>{
  return (
    <input onChange={searchMethod} type="search" placeholder="search" />
  )
}