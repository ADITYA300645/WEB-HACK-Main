import React from 'react'
import NavigationBar from '../../utils/Navigation/NavigationBar'
import SearchBar from './Component/SearchBar/SearchBar'
import RepoCard from './Component/RepoCard/RepoCard'
import styles from './styles/style.module.css'
import { headers } from '../../../next.config'

function index() {
  return (
    <div className='w-full justify-center'>

        <NavigationBar/>
        <div className='w-full bg-custom-color flex flex-col items-center'>

        <SearchBar/>
        <div className={styles.repoMainContainer}>
                <RepoCard lastComit={"some Finalizing Changes"} userName={"Aditya300645"} visibility={"Private"}/>
                <RepoCard lastComit={"Base App"} userName={"Aditya300645"} visibility={"Public"}/>
                <RepoCard lastComit={"Basic APp2"} userName={"ritvik_bharti_01"}  visibility={"Public"}/>
                <RepoCard lastComit={"Basic APp2"} userName={"Sourav8401"}  visibility={"Public"}/>
                <RepoCard lastComit={"Basic APp2"} userName={"ritvik_bharti_01"}  visibility={"Public"}/>
                <RepoCard lastComit={"Basic APp2"} userName={"ritvik_bharti_01"}  visibility={"Public"}/>
        </div>
        </div>
        
    </div>
  )
}



export default index