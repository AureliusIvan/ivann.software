import { section3 } from "@data/_data";

export default function Home() {
    return (
        <>
            <section className="flex relative w-screen h-[23.4375rem] shrink-0 bg-[#A4183F] max-lg:flex-col">
                {section3.map((data: any) => (
                    <div key={data.id}
                         className="flex flex-col text-center items-center justify-center m-auto text-[#FEE3E1]">
                        <div
                            className="font-lanche text-[2.25rem] mb-[1.62rem] not-italic font-[400] leading-[2.5875rem] max-lg:w-[15rem] max-lg:text-[1.5rem]">{data.title}</div>
                        <div
                            className="w-[57.3125rem] font-argentum-regular text-[1rem] not-italic font-[400] leading-normal max-lg:text-[0.625rem] max-md:w-[18.75rem] max-lg:w-[30rem]">{data.desc}</div>
                    </div>
                ))}
            </section>
        </>
    )
}
