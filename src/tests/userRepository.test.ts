import {expect, test, describe, it} from 'vitest'
import { UserRepository } from '../repositories/userRepository.js'
import { beforeEach } from 'node:test'

describe('UserRepository', () => {
    let userRepository: UserRepository

    beforeEach(() => [
        userRepository = new UserRepository([{
            id: 1,
            name: 'Emanuel',
            email: 'teste1@gmail.com'
        }])
    ])

    it('', () => {

    })
})