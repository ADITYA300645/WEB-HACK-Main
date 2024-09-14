import React from 'react'
import styles from '../../styles/style.module.css'
import { IoAddOutline } from "react-icons/io5";
function RepoCard({userName,visibility,lastComit}) {
  
  return (
    <>
      <div className={styles.cardMainContainer}>
        <div className={styles.cardheader}>
          
          <div className={styles.headingMain}>
            <h2>{userName}</h2> {/* name */}
            <div className={styles.privacy}>
              Public {/* pubic or private */}
            </div>
          </div>
          <div className={styles.content}>Config files for my GitHub profile.</div> {/* last commit message */}
        </div>
        
        <div className={styles.cardFooter}>
          <div>

          </div>
          <div className={styles.addBtn}><IoAddOutline /></div>
        </div>
      </div>
    </>
  )
}



export default RepoCard