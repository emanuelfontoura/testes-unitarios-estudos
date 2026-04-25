import {expect, test, describe, it, beforeEach} from 'vitest'
import { UserRepository } from '../repositories/userRepository.js'

describe('UserRepository', () => {
    let userRepository: UserRepository

    beforeEach(() => {
        userRepository = new UserRepository([{
            id: 1,
            name: 'Emanuel',
            email: 'teste1@gmail.com'
        },
        {
            id: 2,
            name: 'Emanuel2',
            email: 'teste2@gmail.com'
        }])
    })

    it('should be able to create a new user', () => {
        const createdUser = userRepository.create({
            email: 'emanuel@gmail.com',
            name: 'emanuel'
        })
        expect(createdUser).toEqual({
            id: 3,
            email: 'emanuel@gmail.com',
            name: 'emanuel'
        })
        expect(userRepository.getUsers()).toHaveLength(3)
    })

    it('should return all registered users', () => {
        const allUsers = userRepository.getUsers()
        expect(allUsers).toEqual([
            {
                id: 1,
                name: 'Emanuel',
                email: 'teste1@gmail.com'
            },
            {
                id: 2,
                name: 'Emanuel2',
                email: 'teste2@gmail.com'
            }
        ])
    })

    it('should return the user with the same id as the argument passed', () => {
        const userById = userRepository.findById(1)
        expect(userById).toEqual({
            id: 1,
            name: 'Emanuel',
            email: 'teste1@gmail.com'
        })
    })

    it('should return null if user does not exist', () => {
        const userById = userRepository.findById(-1)
        expect(userById).toBeNull()
    })

    it('should return an Error if you try to register a user that already exists', () => {
        expect(() => {
            userRepository.create({
            name: 'Emanuel',
            email: 'teste1@gmail.com'
        })}).toThrow()
    })
})