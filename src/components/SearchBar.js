import React, { useCallback } from 'react'

export default function SearchBar({ setSearch }) {
  const debounceSearch = (setSearch, time = 500) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) { clearTimeout(timer) }
      timer = setTimeout(() => {
        timer = null
        setSearch.apply(context, args)
      }, timer)
    }
  }
  const optimizedFn = useCallback(debounceSearch(setSearch), []);

  return (
    <div>
      <input onChange={(e) => optimizedFn(e.target.value)} className='form-control' placeholder='Search by name, email or role' />
    </div>
  )
}

