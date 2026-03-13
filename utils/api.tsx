const getData = async ({ url }: { url: string }) => {
    const data = await fetch(`${"https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL"}/${url}`, { next: { revalidate: 120 } })
    const allData = await data.json();
    return allData
}
export default getData