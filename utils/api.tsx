const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const getData = async ({ url }: { url: string }) => {
    const data = await fetch(`${BASE_URL}/${url}`, { next: { revalidate: 120 } })
    const allData = await data.json();
    return allData
}
export default getData