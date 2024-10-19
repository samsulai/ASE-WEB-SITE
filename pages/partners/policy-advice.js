import Footer from "../../components/Footer"
import Intro from "../../components/Intro"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"



export default function PolicyAdvicePage({ }){


    return(
        <>

        <SEO
            title="Policy Advice"
            description="Policy Advice"
            image="/static/img/bg.png"
        />

        <Navbar />
        
        <Intro>
            Policy Advice
        </Intro>

        <section className='max-w-6xl mx-auto overflow-auto text-base lg:py-20 lg:px-16 py-12 px-5'>

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                <div className="lg:col-span-8 space-y-6">
                    <p className="">
                        ASE has provided evidenced based policy advice towards three different levels:
                    </p>

                    <div className="space-y-2">
                        <p className="font-bold">Supranational Level</p>
                        <p className="">
                            Through its new partnership with the African Union Development Agency (AUDA-NEPAD) policy advice is given through training program for policy makers on various topics as well as research cooperation with think tanks.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-bold">Regional Level</p>
                        <p className="">
                            On a regional level ASE holds a partnership with the Central Bank of West African States (BCEAO) since 2021. Moreover, ASE used to host the francophone side of the Afrobarometer Network.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-bold">National Level</p>
                        <p className="">
                            On the national level cooperation partners have been the Benin, Ghana as well as the Ivorian public sector with impact evaluations of public policies being the flagship products of these cooperation. One example of the evaluations is the impact evaluation of the entrepreneurial status in Benin commissioned by the Ministry of Commerce of Benin or a study on the quality of democracy and good governance in Côte d'Ivoire
                            <br /><br />

                            Examples of Bilateral partners having commissioned policy support on the national level have been:<br />
                            •	Agence Française de Développement (AFD) - Evaluation of the long-term effects of the Family Farming Council (FFC): the case of former PADSE members in Benin<br />
                            •	Dutch Embassy - Ex-post evaluation of the "Rural Transport Sub-Sector Support Program" in Benin<br />
                            •	DANIDA - Study of the impact of the media on socio-economic development in Benin<br />

                        </p>
                    </div>
                </div>
            </div>

        </section>

        
        
        <Footer />
        </>
    )


}