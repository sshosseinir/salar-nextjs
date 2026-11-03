import { notFound } from "next/navigation"

interface IProps {
    params: Promise<{ id: string, catId: string }>
    searchParams: {}
}

async function page({ params }: IProps) {
    const { id, catId } = await params

    if (20 > Number(id)) {
        return notFound()
    }

    return (
        <div>page {id} / {catId}</div>
    )
}

export default page