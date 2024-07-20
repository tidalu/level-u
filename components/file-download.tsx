import Link from 'next/link'
import React from 'react'

const FileDownload = () => {

    const general = [
        {
            "fileName": "GTC for single entry with attachments (from December 1, 2021)"
        },
        {
            "fileName": "GTC Korta with attachments (from September 17, 2021)"
        },
        {
            "fileName": "Offer and price list (from September 18, 2021)"
        },
        {
            "fileName": "GTC (from June 6, 2020)"
        },
        {
            "fileName": "General Terms and Conditions with annexes (from September 18, 2021)"
        },
        {
            "fileName": "General Terms and Conditions with annexes (from May 20, 2021)"
        },
        {
            "fileName": "Offer and price list (from December 1, 2021)"
        },
        {
            "fileName": "General Terms and Conditions with annexes (from December 1, 2021)"
        },
        {
            "fileName": "GTC Korta with attachments (from January 4, 2022)"
        },
        {
            "fileName": "GTC for single entry with attachments (from March 1, 2022)"
        },
    ]

    const promotion = [
        {
            "fileName": "Regulations of the Health as a Gift Promotion (from November 24, 2021)"
        },
        {
            "fileName": "Terms and Conditions of the 5 for 5 Promotion (from July 12, 2021)"
        },
        {
            "fileName": "Terms and Conditions of the Body Composition Analysis Promotion (from May 29, 2021)"
        },
        {
            "fileName": "BASIC 1M Promotion Regulations for Uniformed Personnel (from May 20, 2021)"
        },
        {
            "fileName": "GTC for single entry with attachments (from March 1, 2022)"
        },
        {
            "fileName": "BASIC 1M Promotion Regulations for Uniformed Personnel (from December 1, 2021)"
        },
        {
            "fileName": "Terms and Conditions of the Promotion -20% cheaper online (from May 29, 2021)"
        },
        {
            "fileName": "Promotion Terms and Conditions -20% off and no online membership fee (from December 1, 2021)"
        },
        {
            "fileName": "Terms and Conditions of the Cheaper Together Promotion (from May 20, 2021)"
        },
        {
            "fileName": "Terms and Conditions of the Light Start Promotion (from September 1, 2021)"
        },
        {
            "fileName": "SW Promotion Regulations and MS Body Composition Analysis (from May 29, 2021)"
        },
        {
            "fileName": "Terms and Conditions of the Zdrofit Healthy Place Promotion (from January 4, 2022)"
        },
        {
            "fileName": "Physioconsultation Promotion Regulations (from October 8, 2021) (FiF)"
        },
    ]


    const network = [
        {
            "fileName": "Battle of Fit Fabric Competition Rules (Monday, November 1, 2020)"
        },
        {
            "fileName": "Regulations on the provision of services by electronic means (from September 18, 2021)"
        },
        {
            "fileName": "Regulations on the provision of services by electronic means (from December 1, 2021)"
        },
        {
            "fileName": "Regulations on the provision of services by electronic means (from May 20, 2021)"
        },
        {
            "fileName": "Court Regulations with attachments (from September 17, 2021)"
        },
        {
            "fileName": "Fight Fabric and Fight Fabric Pro Terms and Conditions"
        },
        {
            "fileName": "Regulations for Active Mom - Active Dad classes (from October 28, 2021)"
        },
        {
            "fileName": "Outdoor Activities Regulations (from June 29, 2021)"
        },
        {
            "fileName": "Terms and Conditions Voucher Physioconsultation (from January 4, 2022)"
        },
        {
            "fileName": "Promotion Regulations Invitation to SW (from January 4, 2022)"
        },
        {
            "fileName": "Outdoor Activities Regulations (from January 4, 2022)"
        },

    ]

    const document = [
        {
            "fileName": "Assignment form"
        },
        {
            "fileName": "Information on the possibility of withdrawal - online purchase"
        },
        {
            "fileName": "Information about recurring payment systems"
        },
        {
            "fileName": "Declaration of willingness to use before the withdrawal deadline expires"
        },
        {
            "fileName": "Declaration of withdrawal from a distance contract"
        },
        {
            "fileName": "Paid Freeze Statement"
        },
        {
            "fileName": "Declaration of withdrawal from contract extension"
        },
        {
            "fileName": "Declaration of withdrawal of contract termination"
        },
        {
            "fileName": "Declaration of withdrawal of contract freeze"
        },
    ]

    return (
        <div>
            <h2 className=' text-black font-bold text-2xl dark:text-white'>Files to download</h2>

            <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10'>
                <div>
                    <div className='bg-[#b8df4b1a] dark:bg-[#0f1227] p-5 md:p-10 rounded-2xl'>
                        <h3 className=' font-semibold text-md md:text-[13px] mt-2 md:mt-0 text-gray-500 dark:text-gray-400'>General Terms and Conditions</h3>

                        <div className='mt-5 md:mt-10'>
                            {general.map((file, i) => (
                                <div key={i} className=' border-t-2 text-[#0d1c07] dark:text-gray-300 font-semibold text-sm  border-t-[#6cce4033] '>
                                    <Link href="/files-to-download" className='flex justify-between items-center gap-3 hover:underline py-4'>
                                        {file.fileName}
                                        <img src="/line-arrow.svg" width={20} height={20} alt="arrowicon" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='bg-[#b8df4b1a] dark:bg-[#0f1227] p-5 md:p-10 rounded-2xl mt-5 md:mt-10'>
                        <h3 className=' font-semibold text-md md:text-[13px] mt-2 md:mt-0 text-gray-500 dark:text-gray-400'>Network Regulations</h3>

                        <div className='mt-5 md:mt-10'>
                            {promotion.map((file, i) => (
                                <div key={i} className=' border-t-2 text-[#0d1c07] dark:text-gray-300 font-semibold text-sm  border-t-[#6cce4033] '>
                                    <Link href="/files-to-download" className='flex justify-between items-center gap-3 hover:underline py-4'>
                                        {file.fileName}
                                        <img src="/line-arrow.svg" width={20} height={20} alt="arrowicon" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-[#b8df4b1a] dark:bg-[#0f1227] p-5 md:p-10 rounded-2xl'>
                        <h3 className=' font-semibold text-md md:text-[13px] mt-2 md:mt-0 text-gray-500 dark:text-gray-400'>Promotion Terms and Conditions</h3>

                        <div className='mt-5 md:mt-10'>
                            {promotion.map((file, i) => (
                                <div key={i} className=' border-t-2 text-[#0d1c07] dark:text-gray-300 font-semibold text-sm  border-t-[#6cce4033] '>
                                    <Link href="/files-to-download" className='flex justify-between items-center gap-3 hover:underline py-4'>
                                        {file.fileName}
                                        <img src="/line-arrow.svg" width={20} height={20} alt="arrowicon" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='bg-[#b8df4b1a] dark:bg-[#0f1227] p-5 md:p-10 rounded-2xl mt-5 md:mt-10'>
                        <h3 className=' font-semibold text-md md:text-[13px] mt-2 md:mt-0 text-gray-500 dark:text-gray-400'>Document templates</h3>

                        <div className='mt-5 md:mt-10'>
                            {document.map((file, i) => (
                                <div key={i} className=' border-t-2 text-[#0d1c07] dark:text-gray-300 font-semibold text-sm  border-t-[#6cce4033] '>
                                    <Link href="/files-to-download" className='flex justify-between items-center gap-3 hover:underline py-4'>
                                        {file.fileName}
                                        <img src="/line-arrow.svg" width={20} height={20} alt="arrowicon" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FileDownload