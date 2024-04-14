import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-northeast-1.hygraph.com/v2/cluwdwl591bdx08wa1sihbl9x/master";
const getCategory = async()=>{
    const query = gql`
    query GetCategory {
        categories {
          id
          name
          icons {
            url
          }
          slug
        }
      }
      
    `

    const result=await request(MASTER_URL,query)
    return result;
}

export default{
    getCategory
}