import React, { useEffect, useState } from 'react'
import useDocTitle from '../../hooks/useDocTitle'

const DocTitleOne = () => {
    const [count, setCount] = useState(0)
    useDocTitle(count)
  return (
      <div>
          <button onClick={()=>setCount(c=>c+1)}>Count:{`${count}` }</button>
    </div>
  )
}

export default DocTitleOne