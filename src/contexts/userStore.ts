import { create } from 'zustand'
import { IUserState } from './@userTypes'

export const userStore = create<IUserState>()((set) => ({
    user_data: null

//login
//logout
//autologin
}))