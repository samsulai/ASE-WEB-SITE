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

  return <>
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
                            <li> <b> Name of Client: </b>Southern voice</li>
                            <li> <b> Start date: </b> 05/2022</li>
                            <li> <b> Completion date: </b>  01/2023</li>
                           
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
                            <li> <b> Name of Client: </b>IRDC</li>
                            <li> <b> Start date: </b> 09/2020</li>
                            <li> <b> Completion date: </b>  02/2023</li>
                           
                            </ul>
                            
                            <p>This study aims to analyze the social and economic effects of COVID-19 in three African countries: Benin, Burkina-Faso, and South Africa. The research builds on existing studies of COVID-19 and on new qualitative and quantitative data collection that will contribute to the knowledge of the mechanisms by which such a global shock affects the economy, social life, social cohesion, governance, and the extent of violence.</p>
                           
                         
                            <br style="background-color: #3f5e8d">
                            <br style="background-color: #527fca">
                              <center>
                                <a href="https://idrc-covid.africanschoolofeconomics.com/"  
                                style="padding-top:10px;padding-bottom:10px; padding-left:15px; padding-right: 15px; background-color: #517fc9; color: white;border-radius: 5px"> Learn more about this project</a>
                    
                            </center> 
                          
                            <hr>
                            
                            <br><br>
                                                        
                            <hr>
                            <p><b>COVID pandemic and Inequality: Are Benin’s mitigation actions and strategies inclusive?</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
<!--                            <li> <b> Location within country:<b> NA</li>-->
                            <li> <b> Duration of assignment: </b>12 Months</li>
                            <li> <b> Name of Client: </b>INCLUDE network</li>
                            <li> <b> Start date: </b> 06/2020</li>
                            <li> <b> Completion date: </b>  06/2021</li>
                           
                            </ul>
                            <p>This study evaluates the differential impacts caused by the coronavirus pandemic in Benin and assesses the measures and policies put in place by the Beninese’s government to fight against COVID-19. The study seeks to see how the different policies respond to differently affected socio-economic groups, sectors and regions within Benin societies.</p>
                            <p>Designing, sampling, Data collection organization, administrative organization, execution of the survey, data cleaning and reporting and policy briefs.</p>
                            <hr>
                            
                            <br><br>
                            
                            <hr>
                            <p><b>Research in Improving systems of Education: RISE- Nigeria</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b> Southern Benin</li>
                            <li> <b> Duration of assignment: </b>36 Months</li>
                            <li> <b> Name of Client: </b>UK Aid, Austrillia Aid and Gates Foundation</li>
                            <li> <b> Start date: </b> 09/2018</li>
                            <li> <b> Completion date: </b>  09/2022</li>
                           
                            </ul>
                            
                            <p>Description of Project: The overarching theme in this project is the examination of the role of education demand in education systems change through parental investments and engagements, and how this relationship is mediated through political continuities and discontinuities. Taken together, studying the effect of missionary schools, the Free Primary Education scheme, the National Youth Service Corps and School Based Management committees provide multi-faceted yet coherent insights into how the interplay between increased community aspiration, awareness, action, and engagement in local politics can lead to improved education outcomes in Nigeria.</p>
                            <p>Designing, sampling, Data collection organization, administrative organization, execution of the surveys, data cleaning and reporting, Blog and insignt notes, papers publications, disseminations, conferences organizations.</p>
                            <hr>
                            
                            <br><br>
                            
                            
                            <hr>
                            <p><b>Study on Public Opinion on the Knowledge, Attitudes, and Practices in the Democratic Republic of Congo </b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Democratic Republic of Congo</li>
                            <li> <b> Location within country:</b>NA  </li>
                            <li> <b> Duration of assignment: </b>8 Months </li>
                            <li> <b> Name of Client: </b>Effective Development Group</li>
                            <li> <b> Start date: </b>03/2018  </li>
                            <li> <b> Completion date: </b>  10/2018 </li>
                           
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
                            <li> <b> Name of Client: </b>3IE (International Initiative for Impact Evaluation</li>
                            <li> <b> Start date: </b>  01/2016</li>
                            <li> <b> Completion date: </b>  07/2017 </li>
                           
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
                            <li> <b> Name of Client: </b>The World Bank </li>
                            <li> <b> Start date: </b> 02/2017 </li>
                            <li> <b> Completion date: </b> 07/2017  </li>
                           
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
                            <li> <b> Name of Client: </b>Dutch Embassy in Benin </li>
                            <li> <b> Start date: </b> 06/2016 </li>
                            <li> <b> Completion date: </b>07/2020   </li>
                           
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
                            <li> <b> Name of Client: </b>JPAL </li>
                            <li> <b> Start date: </b>01/2016  </li>
                            <li> <b> Completion date: </b>  11/2018 </li>
                           
                            </ul>
                            
                            <p>Assessing the effectiveness of the full subsidy of school fees at the junior secondary level on enrollment and other educational outcomes in Benin.</p>
                            <p>Designing, Sampling, Inmplementation of intervention, Data collection, Analysis, Reporting</p>
                            <hr>
                            <br><br>
                            
                            <hr>
                            <p><b>Impact evaluation of the promotion of the girls education in Benin: A natural Experiment</b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b>National </li>
                            <li> <b> Duration of assignment: </b> 36 Months</li>
                            <li> <b> Name of Client: </b>International Initiative for Impact Evaluation </li>
                            <li> <b> Start date: </b>02/2016  </li>
                            <li> <b> Completion date: </b> 11/2019</li>
                           
                            </ul>
                            
                            <p>The main goal of this impact evaluation is to assess the effectiveness of the full subsidy of school fees at the junior secondary level on enrollment and other educational outcomes in Benin. The research project applies an evaluation strategy that exploits variation in the treatment status across primary school graduate cohorts to identify the impact of the full subsidy of school fees. The results show that the school fees subsidy for girls has led to a positive impact on girls’ enrollment and drop-out rates from school, respectively at the cut-off point and far away the cut-off point, an increase of professional aspirations on students that previously had lower professional aspirations but the results on earlier career labor markets outcomes need more evidence to be concluded.</p>
                                <br>
                            <p> Setting the design of the evaluataion and engage with stakeholders at the ministry and local level for the evaluation of the intervention. Activity planning, sampling implementation, administrative organization, execution of the survey, analysis and reporting. Policy briefs publication and dissemination.</p>
                            <hr>
                            <br><br>
                            
                            <hr>
                            <p><b>Impact evaluation of the “entrepenant status” in Benin: the end-line survey </b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b>Cotonou </li>
                            <li> <b> Duration of assignment: </b> 5 Months</li>
                            <li> <b> Name of Client: </b>World Bank Group, Ministère de l’Industrie et du Commerce, Bénin </li>
                            <li> <b> Start date: </b>02/2016  </li>
                            <li> <b> Completion date: </b>  06/2016 </li>
                           
                            </ul>
                            
                            <p>As for the midterm survey (conducted in 2015), IERPE conducted as part of the second step of the project, the data collection on 3,600 informal businesses among those surveyed during the baseline survey. At the end of this mission, we provided a databasein STATA format to the WBG IE team with respect to the agreed conditions, methodology and timeline.</p>
                            <p>In the framework of the project, we completed the following tasks: activity planning, sampling implementation, administrative organization, execution of the survey, data entry, and elaboration of technical reports of the fieldwork. This phase consisted of a tablet-based data collection with the CAPISurvey Solution software.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Impact Evaluation of Rural Land Plans: follow-up survey </b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b>National Coverage </li>
                            <li> <b> Duration of assignment: </b> 6 Months</li>
                            <li> <b> Name of Client: </b>World Bank </li>
                            <li> <b> Start date: </b>02/2015  </li>
                            <li> <b> Completion date: </b>  08/2015 </li>
                           
                            </ul>
                            
                            <p>The study was led in 291 villages and targeted 3507 households across these villages. Household questionnaires were administered in the households of the villages concerned and focus groups held with the data recorded in another questionnaire called “community survey”. The survey is the second phase of the baseline conducted in 2011.</p>
                            <p>In the framework of this project, we completed the following tasks: elaboration of the survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data collection in the field, re-abstraction, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Impact evaluation of the “entrepenant status” in Benin: the follow-up survey </b></p>
                             <hr>
                            <ul>
                            <li> <b>Country: </b> Benin</li>
                            <li> <b> Location within country:</b>Cotonou </li>
                            <li> <b> Duration of assignment: </b> 4 Months</li>
                            <li> <b> Name of Client: </b>World Bank Group </li>
                            <li> <b> Start date: </b>02/2015  </li>
                            <li> <b> Completion date: </b>  05/2015 </li>
                           
                            </ul>
                            
                            <p>We conducted as part of this second step of the study, the data collection on 3,600 informal businesses among those surveyed during the baseline survey. At the end of this mission, IERPE provided a database in STATA format to the WBG IE team with respect to the agreed conditions, methodology and timeline.</p>
                            <p>In the framework of the project, we completed the following tasks: activity planning, sampling implementation, administrative organization, execution of the survey, data entry, and elaboration of technical reports of the fieldwork. This phase consisted of a tablet-based data collection with the CAPISurvey Solution software.</p>
                            <hr>
                            <br><br>
                            
                            <hr>
                            <p><b>Afrobarometer Study for Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 9 Months</li>
                                <li> <b> Name of Client: </b>Afrobarometer Network </li>
                                <li> <b> Start date: </b>04/2014  </li>
                                <li> <b> Completion date: </b>  10/2014 </li>
                            </ul>
                            
                            <p>This study commissioned by the Afrobarometer Network surveyed 1,200 individuals 18 years of age and older. Its goal is to collect information on the socioeconomic life of households, their opinions on governance, democracy and confidence in the institutions of the Republic.</p>
                            <p>In the framework of this project, we completed the following tasks: elaboration of the inquiry protocol, activity planning, development of data collection tools, administrative organization, execution of the study, data cleaning, and elaboration of technical reports and dissemination of results to the development community.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Baseline survey as part of the impact evaluation of the “entrepenant status” in Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Cotonou </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>World Bank Group </li>
                                <li> <b> Start date: </b>02/2014  </li>
                                <li> <b> Completion date: </b>05/2014 </li>
                            </ul>
                            
                            <p>As part of this study, IERPE implemented successfully all aspects of the data collection of a large scale firm survey in Cotonou (“Listing” survey), and delivered quality data according to the expectations and protocols within the timeframe defined by the WBG Impact Evaluation Principal Investigators (PIs). The objective of this survey was to constitute a database with important firm characteristics among which 3,600 firms will be selected for the “Entreprenant” study. Around 10,000 firm-owners had been interviewed during the survey, and GPS coordinates of each firm were collected during the survey. The survey had been conducted in both Danktopa Market and outside the market in all “arrondissements” of Cotonou, in respect of the sampling protocol defined by the Evaluation team.</p>
                            <p>In the framework of the project, we completed the following tasks: activity planning, sampling implementation, administrative organization, execution of the survey, data entry, and elaboration of technical reports of the fieldwork.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Enhancing Transparency in African Parliaments: The African Parliamentary Monitoring Organizations (PMOs) </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin, Burkina, Cameroon, Ivoiry Cost, Guinea, Mali, Niger, Sao Tome and Principe, Senegal, Tchad and Togo</li>
                                <li> <b> Location within country:</b> </li>
                                <li> <b> Duration of assignment: </b> 3 Months</li>
                                <li> <b> Name of Client: </b>Ghana Center for Democratic Development (CDD-Ghana) </li>
                                <li> <b> Start date: </b>10/2013  </li>
                                <li> <b> Completion date: </b>  12/2013 </li>
                            </ul>
                            
                            <p>IERPE, in collaboration with CDD-Ghana, is in the process of conducting a study to try to understand how civil society organizations (CSOs) interact with the National Assemblies/Parliaments of their respective countries. The study is titled “Enhancing Transparency in African Parliaments: The African Parliamentary Monitoring Organizations (PMOs)” and is financed by the Open Society Initiate (OSI). Eventually, the best practices that are collected will be disseminated to other organizations in order to improve the monitoring work of CSOs that focus on the National Assembly/Parliament. IERPE is responsible for carrying out the study in eleven (11) African countries: Benin, Burkina Faso, Cameroun, Côte d’Ivoire, Guinea, Mali, Niger, Sao Tome and Principe, Senegal, Tchad, and Togo.</p>
                            <p>In the framework of the project, we completed the following tasks: activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Social Capital in Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 3 Months</li>
                                <li> <b> Name of Client: </b>World Bank Group </li>
                                <li> <b> Start date: </b>03/2014  </li>
                                <li> <b> Completion date: </b>  05/2014 </li>
                            </ul>
                            
                            <p>Recent work has identified a lack of trust and a lack of social capital as constraints to development in Benin. Voters have difficulty in holding politicians accountable for performance and politicians have little incentive to act in the broad interest of the populace. Furthermore, Benin suffers from a low level of trust between the political level and the citizenry, between elites and the general population, between elites themselves, and between individuals and institutions. This lack of trust and effective social capital limits economic performance and may explain the apparently weak links between reforms and economic growth. The Bank is in the process of preparing a new country assistance strategy (CAS) for Benin and would like to have a better understanding of the political economy and social history of the country in developing its strategy.</p>
                            <p>In the framework of the project, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Research project on the Perceptions, Attitudes on Citizenship among Youth vis-à-vis Public Action in Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 6 Months</li>
                                <li> <b> Name of Client: </b>AFriedrich-Ebert-Stiftung and Konrad-Adenauer-Stiftung </li>
                                <li> <b> Start date: </b>12/2012  </li>
                                <li> <b> Completion date: </b>  04/2013 </li>
                            </ul>
                            
                            <p>The Friedrich Ebert and Konrad Adenauer Foundations, both of Germany, have for more than two decades supported public authorities in the domains of governance, civic rights, and democracy, envisioning implementing new programs for youth. Thus, the two institutions have decided to do a baseline study on the perceptions, attitudes on citizenship among youth, particularly examining public action in Benin to have a clear understanding of the reality which will support their interventions. The objective of this study is to evaluate how the youth of Benin see their role as citizens.
                            <br>The study covers 1,500 individuals to provide a representative sample of 1,200 youth (15 to 35 years of age) and a control sample of 300 adults (older than age 35). This study will provide not only an appreciation of the perceptions, interests in public issues, policies, and the degree of political engagement of youth in Benin but also highlight the political attitudes that distinguish youth in Benin from their elders.</p>
                            <p>In the framework of the project, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Impact evaluation of PNDCC’s actions </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 6 Months</li>
                                <li> <b> Name of Client: </b>Secretariat Executive of Projet National d’appui au Développement Conduit par les Communautés (PNDCC) </li>
                                <li> <b> Start date: </b>03/2013  </li>
                                <li> <b> Completion date: </b>  08/2013 </li>
                            </ul>
                            
                            <p>The project aims to evaluate the impact of PNDCC’s actions on education and health’s field. The analysis is based on various available data such as EMICoV, data from Ministry of Education, health transport.</p>
                            <p>For the assignment of this project, staffs use available data to run estimations in order to write the report of the project.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Evaluation of the Pilot Phase of the Solar Electrification Project in Kalalé </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Kalalé </li>
                                <li> <b> Duration of assignment: </b> 2 Months</li>
                                <li> <b> Name of Client: </b>Stanford University </li>
                                <li> <b> Start date: </b>08/2011  </li>
                                <li> <b> Completion date: </b>  10/2011 </li>
                            </ul>
                            
                            <p>It is a study of the extension in the impact of the rural electrification project in the commune of Kalalé. For it to work, it required a reference study in 11 treated villages and also taking into account other villages in the commune of Kalalé. The general objective is to measure a part of the effect of the program between the beneficiaries of the project and the treated households of the villages and in part the effect between villages in the treatment and control groups.</p>
                            <p>In the framework of the project, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Impact Evaluation of Rural Land Plans</b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 6 Months</li>
                                <li> <b> Name of Client: </b>World Bank </li>
                                <li> <b> Start date: </b>11/2010  </li>
                                <li> <b> Completion date: </b>  04/2011 </li>
                            </ul>
                            
                            <p>The study was led in 292 villages distributed in 36 communes in Benin. It targets 3500 households EMICOV of these villages. Household questionnaires were administered in the households of the villages concerned and focus groups held with the data recorded in another questionnaire called “community survey.” This survey was given before the distribution of rural land plans (RLP) that the Millennium Challenge Account (MCA) had programmed for distribution in certain villages in Benin. Among the 292 villages of our study, certain villages were called “treated” where the MCA is going to implement the RLP and villages called “control” that were not chosen by the NCA for the RLP program. This study obtained the VISA of the CNS.</p>
                            <p>In the framework of this project, we completed the following tasks: elaboration of the survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data collection in the field, re-abstraction, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Baseline study on Results Based Financing (RBF) in the Health System in Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 12 Months</li>
                                <li> <b> Name of Client: </b>World Bank </li>
                                <li> <b> Start date: </b>08/2010  </li>
                                <li> <b> Completion date: </b>  Ongoing </li>
                            </ul>
                            
                            <p>As a prelude to the implementation of the funding policy based on the results in the health sector in Benin, this study is a situational analysis of the quality of institutions and infrastructure, the availability of resources (financial and human) and management practices of maternal health services and medicines. The general objective of the study is to analyze the manner in which the mechanism of financing based on the results can be used to maximize the impacts on the indicators concerning the health of mothers and infants.
                            <br>Thus, this study is led in three components: a component of the specific studies in the health facilities (HF), a component of the study in the households, and an ethnographic study in some of the target HFs. The first component has allowed the collection of data from doctors coordinating health zones, from managers of HF in health zones of the study from various financial and clinical administrative documents, from patients of the HF, from qualified neonatal health agents, and other health agents in general. The study in the households took place in the immediate area of the HF study (for households less than 5Km from the target HF) in respect to a well-defined sampling procedure. The questionnaire was distributed in three subcomponents: a principal household questionnaire, a questionnaire for women ages 15-49 and a questionnaire on the children in the household under 5 years old. This household questionnaire provides the anthropometric measures and tests for malaria and anemia. This study obtained the VISA of the CNS and ethics in matters of research in health.</p>
                            <p>In the framework of the project, we have accomplished the following tasks: elaboration of survey protocol, planning of activities, sampling, development of tools for data collection, administrative organization, training of data collection agents and execution of the survey in the HF, collection of data issued from the data collection (double entry), training of data collection agents, health agents, and data collectors, in the households, execution of the survey, data collection in the field, double entry, data cleaning, collection of ethnographic data in collaboration with LASDEL, then elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Evaluation of the LongTerm Effects of the Home Operations Council: the case of former adherents of the PADSE in Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b> </li>
                                <li> <b> Duration of assignment: </b> 10 Months</li>
                                <li> <b> Name of Client: </b>French Development Agency (AFD) </li>
                                <li> <b> Start date: </b>10/2010  </li>
                                <li> <b> Completion date: </b>  07/2011 </li>
                            </ul>
                            
                            <p>In sub-Saharan Africa, the agricultural council has strongly evolved since independence. Numerous approaches of the council have been proposed and put into application in various countries a Home Operations Council (HOC) to reinforce the capacities of analysis and planning of producers with the goal of improving the results of their efforts. In Benin, the HOC has been in existence for 15 years (1995-2010) with three different phases of implementation. These different phases have resulted in the framework of the Program of Improvement and Diversification of Operations Systems (PIDOS) in the standardization of the method of the HOC in Benin in the framework of the (PIDOS) project in the transition period taken at the end of 2007. In total, 254 adherents have taken part in 3 levels of HOC training, 72 non-adherents, 21 rural leaders, and 10 councilors have been interviewed.</p>
                            <p>Development of methodological tools for implementation of the study (Development of the questionnaire, sampling methodology, drawing the sample and supervising the data collection work in the field, development of data making and data cleaning) and proposition of an analysis plan of the study and elaboration of the general report of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Study on Public Opinion on the Knowledge, Attitudes, and Practices in the Democratic Republic of Congo </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Democratic Republic of Congo </li>
                                <li> <b> Location within country:</b>3 Pilot Cities: Matadi, Kananga, and Bukavu </li>
                                <li> <b> Duration of assignment: </b> 8 Months</li>
                                <li> <b> Name of Client: </b>Effective Development Group </li>
                                <li> <b> Start date: </b>03/2010  </li>
                                <li> <b> Completion date: </b>  10/2010 </li>
                            </ul>
                            
                            <p>The public opinion survey on the Knowledge, Attitudes, and Practices (KAP) completed in 2010 is a baseline study of the Support Program for the Accountability of Security Sector and Police Reform (SPASSPR) in DRC. The SPASSPR is a program entirely financed by DFID that intervened in the framework of the reform of the Congolese police in the three pilot cities of Matadi, Kananga, and Bukavu. The survey was conceived following the methodology of case studies/witnesses, defined a treatment group (area of intervention of the program) and a control group (similar area where the project did not intervene). The KAP survey has been led by the National Institute of Statistics (NIS) of the DRC with technical assistance from IERPE. It benefited from the financial assistance of the EDG as an institution implementing monitoring and evaluation activities of the program. The KAP survey targeted a sample of 8,800 individuals for the goal of gathering information on the perception and on the experiences/practices of populations on the questions of security and justice institutions. In addition, it will give a base line, which the results and impacts of the project will compare.</p>
                            <p>Development of methodological tools for implementing the survey (development of questionnaire, methodology, sampling, drawing the sample, and supervision of data collection in the field, data masking and cleaning) and propositions for report analysis plans of the study and contribution to the finalization of the study’s report.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b> Study on the Quality of Democracy and Good Governance in Cote d’Ivoire </b></p> 
                            <hr>
                            <ul>
                                <li> <b>Country: </b> Cote d’Ivoire</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> (months)</li>
                                <li> <b> Name of Client: </b>Government of Cote d’Ivoire </li>
                                <li> <b> Start date: </b>2009  </li>
                                <li> <b> Completion date: </b>  2010 </li>
                            </ul>
                            
                            <p>The study provides analysis of the perception of the population on the governance and democracy in Cote d’Ivoire. It follows an opinion study of individuals in a representative sampling of the Ivorian population. It is a sample of probability and stratified to take into account the area of residence and gender of 1,800 individuals over 18 years of age, distributed on all the national territory. In a more precise fashion, the study provides evidence to the following questions: <br>
                            1. Life condition and economic situation of Ivoirians;<br>
                            2. Quality of governance, perceptions, and incidences of corruption;<br>
                            3. Requests and offers of democracy;<br>
                            4. Leadership and attentiveness of citizens;<br>
                            5. Ethnicity</p>
                            <p>Development of methodology and implementation of the survey (Development of questionnaire, methodology of sampling, drawing the sample, and supervision of data collection in the field, data masking and cleaning) and propositions of analysis plan for the report of the study and elaboration of the study’s report.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Evaluation of Health Education and/or Microfinance Credit Associations of PADME (Malaria 5) </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Department of Plateau </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>Freedom from Hunger </li>
                                <li> <b> Start date: </b>11/2009  </li>
                                <li> <b> Completion date: </b> 2010 </li>
                            </ul>
                            
                            <p>This commissioned study by Freedom from Hunger (FFH) samples 2,100 households in the Department of Plateau. Its goal is to collect information on the decision making process of households.</p>
                            <p>In the framework of this study, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Impact Evaluation of the RCPB in Burkina Faso (Malaria 4) </b></p> <hr>
                            <ul>
                                <li> <b>Country: </b> BURKINA FASO</li>
                                <li> <b> Location within country:</b> </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>Freedom from Hunger (USA) </li>
                                <li> <b> Start date: </b>10/2009  </li>
                                <li> <b> Completion date: </b>  01/2010 </li>
                            </ul>
                            
                            <p>The aim of this project was to assess the effects of healthcare education and/or microfinance on credit association members in Burkina Faso.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study. Usual research tasks were achieved, too.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Evaluation of Health Education and/or Microfinance Associations of the PADME (Malaria 4) </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b> </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>AFreedom from Hunger </li>
                                <li> <b> Start date: </b>10/2009  </li>
                                <li> <b> Completion date: </b>  01/2010 </li>
                            </ul>
                            
                            <p>This study commissioned by Freedom from Hunger (FFH) comes from 32 surveys in each of the three programs. Its goal is the collection of information on the decision making process in households.</p>
                            <p> In the framework of this study, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Evaluation of healthcare education and/or microfinance on PADME credit associations (Malaria 3) </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Department of Plateau </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>Freedom from Hunger (USA) </li>
                                <li> <b> Start date: </b>12/2008  </li>
                                <li> <b> Completion date: </b>  04/2009 </li>
                            </ul>
                            
                            <p>The aim of this part of the project was to assess the effects of healthcare education and/or microfinance on PADME credit association members. Usual research tasks were achieved.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Impact of the Media on Benin’s Social and Economic Development (commune I) </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 8 Months</li>
                                <li> <b> Name of Client: </b>DANIDA, World Bank and Ministry of maternal and primary education </li>
                                <li> <b> Start date: </b> 08/2007  </li>
                                <li> <b> Completion date: </b>  06/2008 </li>
                            </ul>
                            
                            <p>This research project aimed to gather primary data at the district and the national levels on health, education, occupation, and access to media in relation to the socio-demographic characteristics of households. The purpose was to appreciate the impact of information accessed through mass media as well as the household’s participation in political life.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Evaluation of the Pilot Phase of the Rural Solar Electrification of Kalalé </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Commune of Kalalé </li>
                                <li> <b> Duration of assignment: </b> 1 Month</li>
                                <li> <b> Name of Client: </b>Stanford University </li>
                                <li> <b> Start date: </b>11/2008  </li>
                                <li> <b> Completion date: </b>  12/2008 </li>
                            </ul>
                            
                            <p>It is the study of the mid-term review of the implementation of the rural electrification project in the town of Kalalé. The project aims to bring electrification to a vast area with solar energy. The study covered six villages in the municipality of Kalalé. The overall objective is to evaluate the socio-economic potential impact to the households that will benefit from the implementation of the project.</p>
                            <p>In the framework of this study, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Impact of the Media on Benin’s Social and Economic Development (commune II) </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 8 Months</li>
                                <li> <b> Name of Client: </b>DANIDA, World Bank and Ministry of maternal and primary education </li>
                                <li> <b> Start date: </b>07/2008  </li>
                                <li> <b> Completion date: </b>  08/2009 </li>
                            </ul>
                            
                            <p>This research project aimed to gather primary data at the district and national levels on health, education, occupation, and access to the media in comparison to the socio-demographic characteristics of households. The purpose was to appreciate the impact of information accessed through mass media as well as the household’s participation in political life.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Afrobarometer Study for Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>Afrobarometer Network </li>
                                <li> <b> Start date: </b>06/2008  </li>
                                <li> <b> Completion date: </b>  09/2008 </li>
                            </ul>
                            
                            <p>This study commissioned by the Afrobarometer Network surveyed 1,200 individuals 18 years of age and older. Its goal is to collect information on the socioeconomic life of households, their opinions on governance, democracy and confidence in the institutions of the Republic.</p>
                            <p>In the framework of this project, we completed the following tasks: elaboration of the inquiry protocol, activity planning, development of data collection tools, administrative organization, execution of thestudy, data cleaning, and elaboration of technical reports and dissemination of results to the development community.</p>
                            <hr>
                            <br><br>
                            
                            <hr>
                            <p><b>Coordination of Francophone Member Countries of the Afrobarometer Network (Benin, Burkina Faso, Senegal, Mali and Madagascar) within the framework of the survey on governance and democracy </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin, Burkina-Faso, Mali, Senegal, Madagascar</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 36 Months</li>
                                <li> <b> Name of Client: </b>Swedish International Development Cooperation Agency (SIDA), Royal Danish Ministry of Foreign Affairs (RDMFA), Department for International Development (DFID) </li>
                                <li> <b> Start date: </b>01/2008  </li>
                                <li> <b> Completion date: </b>  12/2010 </li>
                            </ul>
                            
                            <p>Afrobarometer is a series of comparative surveys on the attitudes of the populations in about twenty African countries (Round 4 was in 2008). Based on samples that represent the entire national population, these surveys assess, among other things, the attitudes of citizens towards democracy, markets, and civil society. In collaboration with national partners in each country, Afrobarometer is a partnership between the Institute for Democracy in South Africa (IDASA), the Center for democratic development (CDD Ghana) and the Institute of Empirical Research in Political Economy (IERPE Benin), with technical assistance from Michigan State University (MSU) and the University of Cape Town (UCT South Africa).</p>
                            <p>As a core partner, our mission is to ensure that each partner abides by the protocol. Thus, we offer technical assistance to partners during the execution of each phase of the survey (validate the sample and collection tools, train the teams on the field, check the database, validate progress reports, coordinate the writing of technical reports and disseminate and publish the final results).</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Evaluation of the Pilot Stage of the Solar Electrification Project, KALALE 2 </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Kalale </li>
                                <li> <b> Duration of assignment: </b> 1 Months</li>
                                <li> <b> Name of Client: </b>Stanford University (USA)  </li>
                                <li> <b> Start date: </b>11/ 2007  </li>
                                <li> <b> Completion date: </b>  12/ 2007 </li>
                            </ul>
                            
                            <p>This project assessed the impact of news accessed through local radios at public facilities. Common tasks related to such study were completed.</p>
                            <p>As part of this project, we completed the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Study on Criminality in Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 3 Months</li>
                                <li> <b> Name of Client: </b>Africa Human Security Initiative Institute for Security Studies </li>
                                <li> <b> Start date: </b>10/2007  </li>
                                <li> <b> Completion date: </b>  12/2007 </li>
                            </ul>
                            
                            <p>This study’s goal is to offer to the government empirical information on the extent of criminality and its impact on the development process. It also identifies the weakness of the judicial system in matters of criminality, to encourage political dialogue and public awareness of all the stakeholders in consolidating democracy.</p>
                            <p>In the framework of this study, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Evaluation of healthcare education and/or microfinance on PADME credit associations (Malaria 2) </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Plateau department </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>Freedom from Hunger (USA) </li>
                                <li> <b> Start date: </b>09/2007 </li>
                                <li> <b> Completion date: </b> 12/2007 </li>
                            </ul>
                            
                            <p>The aim here was to assess the effects of healthcare education and/or microfinance on PADME credit association members. Usual research tasks were completed.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Classroom Dynamics </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 1 Months</li>
                                <li> <b> Name of Client: </b>World Bank Group </li>
                                <li> <b> Start date: </b>06/2007  </li>
                                <li> <b> Completion date: </b>  07/2007 </li>
                            </ul>
                            
                            <p>This study was undertaken in 36 communes in the 12 departments of Benin with the intention of reinforcing the capacities of communities to participate efficiently in the management of the education system. Its fundamental objective is to generate information on the competencies acquired by students in reading and mathematics in CM1.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Collecting data in three different health topics: Malaria, HIV/AIDS and Integrated Management of Childhood Illnesses </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Ouémé, Plateau departments </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>Freedom From Hunger</li>
                                <li> <b> Start date: </b>01/2007  </li>
                                <li> <b> Completion date: </b>  06/2007 </li>
                            </ul>
                            
                            <p>Data collection in three different health topics: Malaria, HIV/AIDS and Integrated Management of Childhood Illnesses to allow Freedom From Hunger to launch a new health facility service to be called “Microfinance and Health Protection Initiative” (MAHP) in collaboration with PADME/Benin.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Study on the Decision Making Process in Households in Benin (Malaria 1) </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Department of Plateau </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>  </li>
                                <li> <b> Start date: </b>01/2007  </li>
                                <li> <b> Completion date: </b>  06/2007 </li>
                            </ul>
                            
                            <p>This preliminary study commissioned by Freedom from Hunger (FFH) is from a sample of 6,350 households in the Department of Plateau. Its goal is to collect information on the decision making process of households.</p>
                            <p>In the framework of this study, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Collecting data in Three Different Health Topics: Malaria, HIV/AIDS and Integrated Management of Childhood Illnesses </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Ouémé, Plateau departments </li>
                                <li> <b> Duration of assignment: </b> 4 Months</li>
                                <li> <b> Name of Client: </b>Freedom From Hunger </li>
                                <li> <b> Start date: </b>01/2007  </li>
                                <li> <b> Completion date: </b>  06/2007 </li>
                            </ul>
                            
                            <p>Data collection in three different health topics: Malaria, HIV/AIDS, and Integrated Management of Childhood Illnesses in order to allow Freedom From Hunger to launch a new health facility service to be called “Microfinance and Health Protection Initiative” (MAHP) in collaboration with PADME/Benin.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Community Management and Decentralization of Primary Education </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 7 Months</li>
                                <li> <b> Name of Client: </b>World Bank, DANIDA, Minister of Maternal and Primary Education </li>
                                <li> <b> Start date: </b>08/2006  </li>
                                <li> <b> Completion date: </b>  08/2010 </li>
                            </ul>
                            
                            <p>This registered research project, a collective initiative of six countries supported by the Cooperation of Holland. It reinforces the implication of community management of primary schools and improving the impact of this implication on the access to education. It also collects the commune and national scale of primary data in the domain of health, retention and quality of education in the context of decentralization of primary education in Benin.</p>
                            <p>In the framework of this study, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Inquiry into Political Parties and Systems of Parties in Frenchspeaking Africa </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>National Coverage </li>
                                <li> <b> Duration of assignment: </b> 2 Months</li>
                                <li> <b> Name of Client: </b>German Institute of Global and Area Studies (GIGA) </li>
                                <li> <b> Start date: </b>07/2006  </li>
                                <li> <b> Completion date: </b>  09/2006 </li>
                            </ul>
                            
                            <p>This project consisted in the completion of a survey on the political parties within Benin country.</p>
                            <p>In this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing, and elaboration of technical reports for the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b> Study on the Delivery of Services in the Health Sector </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b>Departments of Littoral, Borgou, Alibori </li>
                                <li> <b> Duration of assignment: </b> 2 Months</li>
                                <li> <b> Name of Client: </b>Management Systems International (MSI/USAID) </li>
                                <li> <b> Start date: </b>05/2006  </li>
                                <li> <b> Completion date: </b>  06/2006 </li>
                            </ul>
                            
                            <p>This study furnishes information on the capacity or the competence of health centers in matters of transparency in management of accounting and financial resources. This study’s goal is to compare the results with other countries like Mozambique and Tanzania.</p>
                            <p>In the framework of this study, we completed the following tasks: elaboration of survey protocol, activity planning, sampling and development of data collection tools, administrative organization, execution of the survey, data cleaning, and elaboration of technical reports of the study.</p>
                            <hr>
                            <br><br>

                            <hr>
                            <p><b>Transparency in governance in health sector in Benin </b></p>
                             <hr>
                            <ul>
                                <li> <b>Country: </b> Benin</li>
                                <li> <b> Location within country:</b> Cotonou, Parakou </li>
                                <li> <b> Duration of assignment: </b> 2 Months</li>
                                <li> <b> Name of Client: </b>Management Systems International (MSI) </li>
                                <li> <b> Start date: </b>05/2006  </li>
                                <li> <b> Completion date: </b>  06/2006 </li>
                            </ul>
                            
                            <p>The survey consisted of face-to-face interviews with residents in Cotonou and Borgou-Alibori district in Parakou. Each interview was completed in approximately 30 to 35 minutes. The survey instruments were designed to elicit information on the use of the Centre National Hospitalier Universitaire (CNHU) in Cotonou and on the use of the Borgou-Alibori district hospital in Parakou in comparison to other health service providers (private, uncertified, traditional). The instruments were also used to find the reasons why people did not use these hospital services. The reasons included public perceptions and actual experiences of hospital efficiency in resource use, compliance with management rules, and accountability and transparency among users and non– users.</p>
                            <p>As part of this project, we achieved the following tasks: inquiry protocol elaboration, planning of activities, sampling and development of data collection tools, administrative organization, execution of the inquiry, data auditing, and elaboration of technical reports for the study.</p>
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
                          <p><span style="font-weight: 400;"></span></p><div class="imagewrapper float-left mr-3 mb-3 group overflow-hidden" itemprop="image" itemscope="" itemtype="http://schema.org/ImageObject"><picture><source srcset="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/Math_Courses-sm.jpg"><img class="group-hover:scale-110 duration-200" alt="Math class with Lucie" src="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/Math_Courses-sm.jpg"><a class="hidden" itemprop="contentUrl" href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/Math_Courses-sm.jpg"></a><div class="hidden" itemprop="description"></div></picture><div itemprop="caption" class="caption"></div></div> Female schooling in Benin remains an area of concern. Lack of access to education for girls and gender inequities in schooling potentially affect areas such as female empowerment and employment, and child health and nutrition. <span style="font-weight: 400;">Since 2010, the Beninese Ministry of Secondary Education has been addressing the issue of low female enrollment in schooling at the secondary level by fully subsidizing girls’ school fees. IERPE is evaluating the impact of the full subsidization of school fees by analyzing variation in the treatment status across birth-year cohorts. </span><i><span style="font-weight: 400;">Financed by the International Initiative for Impact Evaluation.</span></i><p></p>
                          <h6><span style="font-weight: 400;">Image (Top): ASE students and Communications Manager Wilfried Gnanvi visit a high school in Benin for Animath, a mathematics project.</span></h6>
                      `
                  }}>
                  </div>
                  
              </div>

              <div className='lg:col-span-4 space-y-12'>

                  <div className='bg-white px-5 py-8 space-y-2'>
                      
                      <p className='font-bold text-app-dark'>Research Institute</p>

                      <div className='divide-y divide-neutral-300'>
                          {research_institutes.map(({title, acronym}, index) => (
                              (<Link
                                  key={index}
                                  href={`/research/${acronym.replace(/\s/ig,'-').toLowerCase()}`}
                                  className='py-3 block text-base font-bold hover:underline hover:text-app-dark cursor-pointer'>

                                  {title}

                              </Link>)
                          ))}
                      </div>

                  </div>

                  <div className='relative isolate bg-[url(/static/img/brochure.jpg)] bg-cover h-[450px] flex flex-col items-center justify-end px-5 py-8 space-y-2'>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-dark to-transparent -z-10"></div>

                      <p className='w-full font-bold text-center text-white text-2xl'>Need a quick guide into ASE? Get our brochure</p>

                      <Link
                          href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/06/New-ASE-CI-Brochure-Final-2020.pdf"
                          target="_blank"
                          className='inline-block'>

                          <Button className="!bg-white !text-app-dark !text-xs lg:!py-2 lg:!px-4" text="Download Brochure"></Button>

                      </Link>
                  </div>
                  
              </div>
          </div>

      </section>


    <Support />

    <Footer />
  </>;
}
