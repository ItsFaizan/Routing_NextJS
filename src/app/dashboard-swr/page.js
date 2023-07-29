import useSwr from 'swr'

const fetcher = async () => {
    const response = await fetch('')
    const data = await response.json()
    return data
}

export const DashboardSwr = () => {
   const {data ,error} = useSwr('dashboard', fetcher)
   if(error) return 'error'
   if(!data) return 'Loading'

  return (
    <div>
    <h2>Dashboard</h2>
    <h2>Post - {data.posts}</h2>
</div>
  )
}
