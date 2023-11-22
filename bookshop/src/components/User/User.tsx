import { Link, Navigate } from "react-router-dom"
import { IUser } from "../../types"
import { useState } from "react"

export const User = (props: IUser) => {

  const { userName = "" } = props;
  const firstLetter = userName.charAt(0).toUpperCase();
  return (
    <>
      <div className="user">
        {<Link style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }} to={`/`}>{firstLetter}
        </Link>}
        </div>
    </>
  )
}
