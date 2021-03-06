import { request, gql } from 'graphql-request'
import './type'

const endpoint = '/api/graphql'

export const userRegister = (nickname: string) =>
  request(
    endpoint,
    gql`
    mutation{
      userRegister(newUser:{nickname:"${nickname}",password:"1234567",username:"${nickname}",email:"13411983s25679213sss0@qq.com"}){
        id
      }
    }
  `
  )

export const updateUserEmail = (email) =>
  request(
    endpoint,
    gql`
    mutation{
      userRegister(newUser:{email:"${email}"}){
        id
      }
    }
  `
  )

export const getSms = (phone: string) =>
  request(
    endpoint,
    gql`
    mutation{
      sendSms(phone:"${phone}")
    }
  `
  )

export const login = (phone: string, code: string) =>
  request(
    endpoint,
    gql`
    mutation{
      login(phone:"${phone}",code:"${code}"){
        accessToken
        refreshToken
        expires
      }
    }
  `
  )
