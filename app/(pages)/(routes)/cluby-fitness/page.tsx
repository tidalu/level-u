import ClientOnly from "@/components/ClientOnly"
import Schedule from "@/components/schedule"

const ClubyFitness = () => {

    return (
        <div className=' max-w-screen-lg mx-auto px-3 pt-36 mb-28'>
            <ClientOnly>
                <Schedule />
            </ClientOnly>
        </div>
    )
}

export default ClubyFitness