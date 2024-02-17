export default async function DataFetch(url){
const req=await fetch(url)
if(!req.ok){
   throw new Error('somthing went wrong')
}
const data=await req.json()
return data
}