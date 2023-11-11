import React from 'react'

import FrontendSkill from '../Cards/FrontendSkill'
import BackendSkill from '../Cards/BackendSkill'
const Skills = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-center p-10 '>

        <FrontendSkill></FrontendSkill>
        <BackendSkill></BackendSkill>
      </div>

    </div>
  )
}

export default Skills