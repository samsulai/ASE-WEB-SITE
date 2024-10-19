import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiArchiveResearch } from 'react-icons/gi';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';
import Intro from '../../components/Intro';
import { research_institutes } from '../../data';

import 'animate.css';
import SEO from '../../components/SEO';

export default function Home() {

    const router = useRouter();
    const { slug } = router.query;
    const base = "https://benin.africanschoolofeconomics.com";

    const institute = research_institutes.filter(r => r.acronym === 'IERPE')[0];

  return (
    <>
      <SEO
        title={institute.acronym}
        description={institute.title}
        image={ institute.image || '/static/img/bg.png'}
      />
      
      <Navbar />

       <Intro text="ASE Research" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693755507/banners/Research_Banner_ziskzk.png"/>

        <section className='lg:px-20 py-10 px-5 flex gap-8 bg-app-dark !text-white'>
            <div className='space-y-2'>
                <p className='font-bold text-lg lg:text-3xl text-white'>{institute.title}</p>
                <p className='flex space-x-3'>
                    <span className='flex gap-2 items-center text-xs uppercase'>
                        <GiArchiveResearch className="" />
                        {institute.acronym} (in French: IREEP)
                    </span>
                </p>
            </div>
        </section>

        <section className='bg-neutral-100 lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto'>
                <div className='lg:col-span-8 space-y-8'>

                    {/* <div className='bg-white p-4 lg:px-8 py-4 flex gap-4 items-center'>
                        <p className='font-bold text-base'>Share: </p>
                        <Link href={`https://facebook.com/sharer/sharer.php?u=${base+router.asPath}&quote=${'Zoom Meeting'}`}>
                            <a target="_blank" className=""><SiFacebook className="text-app-dark" /></a>
                        </Link>
                        <Link href={`https://twitter.com/intent/tweet?text=${'Zoom meeting'}&hashtags=${'ASE_Event'}&url=${base+router.asPath}`}>
                            <a target="_blank" className=""><SiTwitter className="text-sky-400" /></a>
                        </Link>
                        <Link href={`https://wa.me/?text=${'Zoom meeting'}%20${base+router.asPath}`}>
                            <a target="_blank" className=""><SiWhatsapp className="text-green-600" /></a>
                        </Link>
                        <Link href={`https://t.me/share/url?text=${'Zoom meeting'}&url=${base+router.asPath}`}>
                            <a target="_blank" className=""><SiTelegram className="text-[#3d98b3]" /></a>
                        </Link>
                        <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${base+router.asPath}`}>
                            <a target="_blank" className=""><SiLinkedin className="text-app-main" /></a>
                        </Link>
                        <Link href={`https://mail.google.com/mail/u/0/?view=cm&su=${'Zoom Meeting'}&body=${base+router.asPath}`}>
                            <a target="_blank" className=""><SiGmail className="text-red-500" /></a>
                        </Link>
                    </div> */}

                    <div className='bg-white p-4 lg:p-8 text-base space-y-4' dangerouslySetInnerHTML={{
                        __html: `
                            <p><span style="font-weight: 400;">Since its founding in 2004, the Institute for Empirical Research in Political Economy (IERPE; French: IREEP) has conducted over 30 projects dealing with Governance, Education, Financial Inclusion, History, Public Health, Security, Agricultural Policies, and Electoral Behavior. Noteworthy projects include “</span><a href="https://scholar.princeton.edu/sites/default/files/lwantche/files/beninwkn-qje-final.pdf"><span style="font-weight: 400;">Education and Human Capital Externalities in Colonial Benin</span></a><span style="font-weight: 400;">” (see Wantchekon et al. 2014) and a project on </span><span style="font-weight: 400;">&nbsp;“</span><a href="https://scholar.princeton.edu/sites/default/files/lwantche/files/fujiwara_and_wantchekon.pdf"><span style="font-weight: 400;">Can Public Deliberation Overcome Clientelism? Experimental Evidence from Benin</span></a><span style="font-weight: 400;">” (See Fujiwara and Wantchekon, 2013). </span><span style="font-weight: 400;">Under the leadership of Dr. Ian Heffernan, Research Director of IERPE, the institute continues to rigorously research policy-relevant topics throughout West Africa.</span></p>
                            <p><span style="font-weight: 400;">In addition to ongoing consultancies, including annual data collection for the World Economic Forum’s Global Competitiveness Report, IERPE designs and leads numerous original research projects. Select IERPE-led projects are listed below. For a list of past projects, please visit the <a href="https://benin.africanschoolofeconomics.com/research/ierpe/ierpe-archive/">Archive</a> tab.</span></p>
                            
                          
                            <hr>
                            <p><b>COVID-19 and Rising Educational Inequalities in Africa: Strategies to reset SDG 4</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin, Nigeria and Tanzania</li>
<!--                            <li> <b> Location within country:<b> NA</li>-->
                            <li> <b> Duration of assignment: </b>8 Months</li>
                            <li> <b> Start date: </b> 05/2022</li>
                            <li> <b> Completion date: </b>  01 /2023</li>
                           
                            </ul>
                            
                            <p>The study seeks to measure the impacts of COVID-19 containment measures on educational inequalities in Benin, Nigeria, and Tanzania, while projecting lessons learned from the crisis and implications for future epidemic/pandemics that could warrant similar government containment measures. The findings are expected to inform public policy on ways to strengthen access to quality education and reverse the potential learning loss.</p>
                           
                            <hr>
                            
                            <br><br>
                            
                            
                            <hr>
                            
                            <p><b>Socio-Economic Impact of COVID-19 on African Economies, Social Cohesion, and Governance: Evidence from Benin, Burkina Faso, and South Africa</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin, Burkina and South Africa</li>
<!--                            <li> <b> Location within country:<b> NA</li>-->
                            <li> <b> Duration of assignment: </b>30 Months</li>
                            <li> <b> Start date: </b> 09/2020</li>
                            <li> <b> Completion date: </b>  02 /2023</li>
                           
                            </ul>
                            
                            <p>This study aims to analyze the social and economic effects of COVID-19 in three African countries: Benin, Burkina-Faso, and South Africa. The research builds on existing studies of COVID-19 and on new qualitative and quantitative data collection that will contribute to the knowledge of the mechanisms by which such a global shock affects the economy, social life, social cohesion, governance, and the extent of violence.</p>
                           
                            <hr>
                            
                            <br><br>
                                                        
                            <hr>
                            
                            <p><b>COVID pandemic and Inequality: Are Benin’s mitigation actions and strategies inclusive?</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
<!--                            <li> <b> Location within country:<b> NA</li>-->
                            <li> <b> Duration of assignment: </b>12 Months</li>
                            <li> <b> Start date: </b> 06/2020</li>
                            <li> <b> Completion date: </b>  06/2021</li>
                           
                            </ul>
                            <p>This study evaluates the differential impacts caused by the coronavirus pandemic in Benin and assesses the measures and policies put in place by the Beninese’s government to fight against COVID-19. The study seeks to see how the different policies respond to differently affected socio-economic groups, sectors and regions within Benin societies.</p>
                            <hr>
                            
                            <br><br>
                            
                            <hr>
                            
                            <p><b>Research in Improving systems of Education: RISE- Nigeria</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b> Southern Benin</li>
                            <li> <b> Duration of assignment: </b>36 Months</li>
                            <li> <b> Start date: </b> 09/2018</li>
                            <li> <b> Completion date: </b>  09/2022</li>
                           
                            </ul>
                            
                            <p>Description of Project: The overarching theme in this project is the examination of the role of education demand in education systems change through parental investments and engagements, and how this relationship is mediated through political continuities and discontinuities. Taken together, studying the effect of missionary schools, the Free Primary Education scheme, the National Youth Service Corps and School Based Management committees provide multi-faceted yet coherent insights into how the interplay between increased community aspiration, awareness, action, and engagement in local politics can lead to improved education outcomes in Nigeria.</p>
                            <hr>
                            
                            <br><br>
                            
                            
                            <hr>
                            
                            <p><b>Study on Public Opinion on the Knowledge, Attitudes, and Practices in the Democratic Republic of Congo </b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Democratic Republic of Congo</li>
                            <li> <b> Location within country:</b>8 Months  </li>
                            <li> <b> Duration of assignment: </b> </li>
                            <li> <b> Start date: </b>03/2018  </li>
                            <li> <b> Completion date: </b>  10 /2018 </li>
                           
                            </ul>
                            
                            <p>Study on Public Opinion on the Knowledge, Attitudes, and Practices in the Democratic Republic of Congo</p>
                            <hr>
                            <br><br>
                            
                            <hr>
                            
                            <p><b>Assessing the impact of agricultural insurance programmes targeted at smallholder farmers </b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Senegal</li>
                            <li> <b> Location within country:</b>  </li>
                            <li> <b> Duration of assignment: </b> 10 Months</li>
                            <li> <b> Start date: </b>  01/2016</li>
                            <li> <b> Completion date: </b>  07 /2017 </li>
                           
                            </ul>
                            
                            <p>Designing of the research strategy, Data collection organization, administrative organization, execution of the survey, data cleaning, papers writing.</p>
                            <hr>
                            <br><br>
                            
                            <hr>
                            
                            <p><b>Impact evaluation of the Benin youth employment project (Projet des Jeunes): baseline data collection </b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b>Benin  </li>
                            <li> <b> Duration of assignment: </b>6 Months </li>
                            <li> <b> Start date: </b> 02/2017 </li>
                            <li> <b> Completion date: </b> 07 /2017  </li>
                           
                            </ul>
                            
                            <p>Data collection organization, administrative organization, execution of the survey, data cleaning</p>
                            <hr>
                            <br><br>
                            
                            <hr>
                            
                            <p><b>Ex-post evaluation for the “Rural Transport Sub-Sector Support Program” in Benin.</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b> National </li>
                            <li> <b> Duration of assignment: </b> 9 Months </li>
                            <li> <b> Start date: </b> 06/2016 </li>
                            <li> <b> Completion date: </b>07 /2020   </li>
                           
                            </ul>
                            
                            <p>Setting the design of the evaluataion, activity planning, sampling implementation, administrative organization, execution of the survey, analysis and reporting.</p>
                            <hr>
                            <br><br>
                            
                            <hr>
                            
                            <p><b>Examining the impact and cost-effectiveness of supplementary math courses with a focus on girls </b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b>National </li>
                            <li> <b> Duration of assignment: </b> 24 Months</li>
                            <li> <b> Start date: </b>01/2016  </li>
                            <li> <b> Completion date: </b>  11 /2018 </li>
                           
                            </ul>
                            
                            <p>Assessing the effectiveness of the full subsidy of school fees at the junior secondary level on enrollment and other educational outcomes in Benin.
                            Designing, Sampling, Inmplementation of intervention, Data collection, Analysis, Reporting</p>
                            <hr>
                            <br><br>
                            
                               <hr>
                            
                            <p><b>Impact evaluation of the promotion of the girls education in Benin: A natural Experiment</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b>National </li>
                            <li> <b> Duration of assignment: </b> 36 Months</li>
                            <li> <b> Start date: </b>02/2016  </li>
                            <li> <b> Completion date: </b> 11 /2019</li>
                           
                            </ul>
                            
                            <p>The main goal of this impact evaluation is to assess the effectiveness of the full subsidy of school fees at the junior secondary level on enrollment and other educational outcomes in Benin. The research project applies an evaluation strategy that exploits variation in the treatment status across primary school graduate cohorts to identify the impact of the full subsidy of school fees.
The results show that the school fees subsidy for girls has led to a positive impact on girls’ enrollment and drop-out rates from school, respectively at the cut-off point and far away the cut-off point, an increase of professional aspirations on students that previously had lower
professional aspirations but the results on earlier career labor markets outcomes need more evidence to be concluded.
<br>
Description of actual services provided by your staff within the assignment:
Setting the design of the evaluataion and engage with stakeholders at the ministry and local level for the evaluation of the intervention. Activity planning, sampling implementation, administrative organization, execution of the survey, analysis and reporting. Policy briefs publication and dissemination.</p>
                            <hr>
                            <br><br>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            <p><strong><a href="https://riseprogramme.org/countries/nigeria">Research on Improving Systems of Education (RISE) – Nigeria</a></strong></p>
                            <p class="text-app-main"><a href="https://riseprogramme.org/countries/nigeria">https://riseprogramme.org/countries/nigeria</a></p>
                            <p><span style="font-weight: 400;"></span></p><div class="imagewrapper float-left group overflow-hidden" itemprop="image" itemscope="" itemtype="http://schema.org/ImageObject"><a href="https://riseprogramme.org/countries/nigeria"><picture><source srcset="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/RISE-logo-small.png"><img class="group-hover:scale-110 duration-200" alt="" src="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/RISE-logo-small.png"><a class="hidden" itemprop="contentUrl" href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/RISE-logo-small.png"></a><div class="hidden" itemprop="description"></div></picture></a><div itemprop="caption" class="caption"></div></div><p></p>
                            <p><span style="font-weight: 400;">Led by Principal Investigator Leonard Wantchekon (ASE/Princeton) and carried out in partnership with the Centre for the Study of the Economies of Africa (</span><a href="http://cseaafrica.org/"><span style="font-weight: 400;">CSEA</span></a><span style="font-weight: 400;">), the Research on Improving Systems of Education (RISE) project in Nigeria aims to understand how demand-side issues (such as community engagement, parental aspirations or investments and student motivation) and local politics affect educational outcomes at the community level. RISE-Nigeria is one of seven countries included in the broader</span><a href="https://www.riseprogramme.org/"><span style="font-weight: 400;"> RISE Programme</span></a><span style="font-weight: 400;">.</span></p>
                            <p><span style="font-weight: 400;">ASE is coordinating five studies on (i) the effects of mission and colonial schools, (ii) the 1952 Free Primary Education scheme in the Western Region, (iii) the impact of and potential improvements to the National Youth Service Corps, (iv) whether School Based Management Committees can be made more effective by increasing diversity or by gaining access to school performance data, and (v) whether constructive dialogues and commitment from policy actors have an impact on education. Project Activities: ASE has assembled the research team, which includes five other lead researchers and two newly-recruited post-doctoral fellows.&nbsp;</span></p>
                            <p><span style="font-weight: 400;">Field activities began in February 2019, and the project will continue until 2022. More details can be found on the</span><a href="https://www.riseprogramme.org/countries/nigeria"><span style="font-weight: 400;"> RISE Nigeria website</span></a><i><span style="font-weight: 400;">. Supported by the United Kingdom’s Foreign, Commonwealth and Development Office (FCDO), the Australian Department of Foreign Affairs and Trade (DFAT), and the Bill and Melinda Gates Foundation (BMGF).</span></i></p>
                            
                            <hr>
                            
                            <p><b>Reducing violence through the creation of more inclusive economic opportunities for young people in Benin</b></p>
                            <p><span style="font-weight: 400;">The goal of this study is to propose effective strategies to combat violence and social and economic exclusion of young women and men in Benin through the production of new knowledge. Researchers collected secondary data on violence, employment, and youth labor market integration projects in Benin. Further quantitative data collection was selected for a sample of 1200 youth in households and over 575 pre-selected candidates for a youth employment program. The research team is currently conducting a qualitative data analysis to understand the historical, political, cultural background that could impact the propensity of a youth to become violent, with attention to gender.&nbsp;</span></p>
                            <p><span style="font-weight: 400;">In order to document the political riot that took place in Benin after the country’s legislative election in April 2019, researchers also interviewed political activists and individuals who took part in the riot. Some of the respondents were arrested and released, some were not. It was found that the motivation behind the protest was more political than economic.</span></p>
                            <p><span style="font-weight: 400;">The cohort has grown as researchers from Burkina Faso, Côte d’Ivoire and South Africa joined the teams in Benin and Kenya. The project has advanced through regular meetings, participation in the CHRIPS methodological workshop in Kenya, the organization of a methodological workshop, and the development of a global protocol for the cohort. </span><i><span style="font-weight: 400;">Financed by the International Development Research Centre (IDRC).</span></i></p>
                            
                            <hr>
                            
                            <p><b>Impact Evaluation of the Promotion of Girls’ Education in Benin: A Natural Experiment</b></p>
                            <p><span style="font-weight: 400;"></span></p>
                            <div class="imagewrapper float-left mr-3 mb-3 group overflow-hidden" itemprop="image" itemscope="" itemtype="http://schema.org/ImageObject"><picture><source srcset="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/Math_Courses-sm.jpg"><img class="group-hover:scale-110 duration-200" alt="Math class with Lucie" src="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/Math_Courses-sm.jpg"><a class="hidden" itemprop="contentUrl" href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/Math_Courses-sm.jpg"></a><div class="hidden" itemprop="description"></div></picture><div itemprop="caption" class="caption"></div></div> Female schooling in Benin remains an area of concern. Lack of access to education for girls and gender inequities in schooling potentially affect areas such as female empowerment and employment, and child health and nutrition. <span style="font-weight: 400;">Since 2010, the Beninese Ministry of Secondary Education has been addressing the issue of low female enrollment in schooling at the secondary level by fully subsidizing girls’ school fees. IERPE is evaluating the impact of the full subsidization of school fees by analyzing variation in the treatment status across birth-year cohorts. </span><i><span style="font-weight: 400;">Financed by the International Initiative for Impact Evaluation.</span></i><p></p>
                            <h6><span style="font-weight: 400;" >Image (Top): ASE students and Communications Manager Wilfried Gnanvi visit a high school in Benin for Animath, a mathematics project.</span></h6>
                        `
                    }}>
                    </div>
                    
                </div>

                <div className='lg:col-span-4 space-y-12'>

                    <div className='bg-white px-5 py-8 space-y-2'>
                        
                        <p className='font-bold text-app-dark'>Research Institute</p>

                        <div className='divide-y divide-neutral-300'>
                            {research_institutes.map(({title, acronym}, index) => (
                                <Link key={index} href={`/research/${acronym.replace(/\s/ig,'-').toLowerCase()}`}>
                                    <a className='py-3 block text-base font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                        {title}
                                    </a>
                                </Link>
                            ))}
                        </div>

                    </div>

                    <div className='relative isolate bg-[url(/static/img/brochure.jpg)] bg-cover h-[450px] flex flex-col items-center justify-end px-5 py-8 space-y-2'>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-dark to-transparent -z-10"></div>

                        <p className='w-full font-bold text-center text-white text-2xl'>Need a quick guide into ASE? Get our brochure</p>

                        <Link href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/06/New-ASE-CI-Brochure-Final-2020.pdf">
                            <a target="_blank" className='inline-block'>
                                <Button className="!bg-white !text-app-dark !text-xs lg:!py-2 lg:!px-4" text="Download Brochure"></Button>
                            </a>
                        </Link>
                    </div>
                    
                </div>
            </div>

        </section>


      <Support />

      <Footer />
    </>
  )
}
