import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { SiFacebook,  SiYoutube, SiLinkedin, SiX} from 'react-icons/si';

function Footer() {

    const locations = {
        benin: "https://maps.google.com/?q=6.47165775299072,2.35244870185852",
        cote: "https://www.google.com/maps/search/Abidjan,+Cocody+Attoban+Between+30e+Arrondissement+and+Eglise+Saint+Bernard./@25.9898303,-19.0140221,4z/data=!3m1!4b1",
        nigeria: "https://www.google.com/maps/place/1095+Oladipo+Diya+St,+Gudu+900110,+Abuja,+Federal+Capital+Territory/@8.9996918,7.4707811,17z/data=!3m1!4b1!4m5!3m4!1s0x104e0cf3e41051e3:0xf73d5d41327253fc!8m2!3d8.9996865!4d7.4729698"
    }

  return (
      <footer className='p-5 lg:p-12 text-white bg-black ' >

          <div className='grid grid-cols-1 md:col-span-4 lg:grid-cols-10 gap-8 py-12 border-b border-zinc-800'>
              <div className='col-span-1 md:col-span-1 lg:col-span-3 space-y-8'>
                  <h1 className='font-bold text-xl'
style={{ fontFamily: 'Playfair Display' }}
                  >African School of Economics</h1>

                  <Link href="mailto:info@africanschoolofeconomics.com" className='text-base block'
                  style={{ fontFamily: 'Inter' }}>
                      info@africanschoolofeconomics.com
                  </Link>

                  <div className='text-base'
                  style={{ fontFamily: 'Inter' }}>
                      <p className=''>
                          <strong>Benin</strong>: Abomey-Calavi, Arconville Route de l’hôpital de zone 02 BP 372 Cotonou, Benin.
                      </p>
                      <p className=''>
                          <strong>Tel</strong>: <a href="tel:+22994550706"> (+229)94550706</a> / <a href="+22997000552">+22997000552</a>
                      </p>
                  </div>

                  <div className='text-base' style={{ fontFamily: 'Inter' }}>
                      <p className=''>
                          <strong>Cote d’Ivoire</strong>: Abidjan, Cocody Attoban Between 30e Arrondissement and Eglise Saint Bernard. 
                      </p>
                      <p className=''>
                          <strong>Tel</strong>: <a href="tel:+22994550706">(+229)94550706</a> / <a href="tel:+22997000552">(+229)97000552</a>
                      </p>
                  </div>

                  <div className='text-base' style={{ fontFamily: 'Inter' }}>
                      <p className=''>
                          <strong>Nigeria</strong>: Plot 1095, Oladipo  Diya Street,  Gudu District, Abuja, Nigeria.
                      </p>
                      <p className=''>
                          <strong>Tel</strong>: <a href="tel:+2348129453511">+(234) 812 945 3511</a>
                      </p>
                  </div>
              </div>

              <div className='col-span-1 md:col-span-1 lg:col-span-2 space-y-8' style={{ fontFamily: 'Inter' }}>
                  <h1 className='font-bold'>Quick Links</h1>

                  <div className='space-y-4 text-base'>
                      <Link
                          href="/about"
                          className='block px-2 hover:border-l-2 border-app-main duration-200'>
                          About ASE
                      </Link>
                      <Link
                          href="/admission"
                          className='block px-2 hover:border-l-2 border-app-main duration-200'>
                          Admission
                      </Link>
                      {/* <Link href="/academics">
                          <a className='block px-2 hover:border-l-2 border-app-main duration-200'>Academics</a>
                      </Link> */}
                      <Link
                          href="/campuses"
                          className='block px-2 hover:border-l-2 border-app-main duration-200'>
                          Campuses
                      </Link>
                      <Link
                          href="/research"
                          className='block px-2 hover:border-l-2 border-app-main duration-200'>
                          Research Institutes
                      </Link>
                      <Link
                          href="/news"
                          className='block px-2 hover:border-l-2 border-app-main duration-200'>
                          ASE News
                      </Link>
                      <Link
                          href="/work-at-ase"
                          className='block px-2 hover:border-l-2 border-app-main duration-200'>
                          Work at ASE
                      </Link>
                      <Link
                          href="/support-ase"
                          className='block px-2 hover:border-l-2 border-app-main duration-200'>
                          Donate to ASE
                      </Link>
                  </div>
              </div>

              <div className='col-span-1 md:col-span-2 lg:col-span-5 relative w-full h-[300px]'>
                  {/* <Image src="/static/img/map.svg" layout='fill' objectFit='contain'/> */}

                  <svg className='cusor-pointer w-full' xmlns="http://www.w3.org/2000/svg" width="606.928" height="301.375" viewBox="0 0 606.928 301.375">
                  <g id="Group_86" data-name="Group 86" transform="translate(-875.151 -8470.485)">
                      <path className='hover:fill-app-dark' onClick={() => window.location.href = locations.benin} id="BJ" d="M147.1,96.482l-1.078,1.709-1.654,3.53-.074,2.755,3.939,5.809.455.588,1.013.906.548,1.083.474,2.858.269,3.222.316,2.166,1.9,3.044.121,1.223-1.319,4.548-.316.485-.344.122-2.044-.393-.873.494-1.115,1.541-.678,1.541-.037.644,1.812,2.858-1.143,4.118-1.171,2.568-2.1,1.466-1.877.345-1.31.691-.762.906.111,2.942-2.768,2.68-1.533,1.877-.743,1.13.316,3.455-.985,3.492-1.709,2.755-3.828.6-3.214.336-1.1,7.013.056,4.436-.3,4.529-.53,1.849.223,2.6-.242,5.874-.427,4.622.567,1.242.325,2.718-.019,2.811.818,1.952.892,1.709-.028.878-.474.551-.4.719v6.612l.167,1.98L125,219.914l-.687,1.046.27,3.343.557,2.129L125.7,228l-.539,1.307-.474,1.728-.715,4.408-.046,1.532-10.935,1.074-12.226,1.765-5.1,1.149-.3-.887,4.348-1.149-.9-3.446L96.1,231.41l-1.059-.747-.548-2.026.66-1.326-.316-.9-.223-2.745-1.338-3.035,2.443-.122v-33.46l-.474-7.592-.065-5.575-.1-7.359-.883-2.3-3.7-3.894-1.013-2.017-.176-2.68-.827-2.755-.046-4.828-.065-5.622-.335-.906-4.013-2.68-5.676-3.8-4.329-2.895-.316-.216-.437-.71.632-8.573.892-1.121L76.171,118l.669-2.858.622.009.873-.924.706-1.364.753.3,1.263.262.576-.485-.074-1.055.418-1.065.994-.485.26-.953v-1.1l.855-.29,1.468.046,1.189-.346.957-.56,1.245-2.223.7-.775.214-.551.706-.485,1.942-.225,1.57.168,1,1.289,6.717-1.13,3.2.663,6.531-5.6L113,96.61l1.979-3.959.678-1.513.613-2.727-1.291-5.033.074-.9,2.694-1.083,3.363-.841,1.3-.065.864-.429L124.5,78.97l2-.793,1.18.262.725.159,7.079,6.658,3.075,3.362.817,1.718,1.589,1.242,2.341.765,2.137,1.709Z" transform="translate(1046.825 8432.647)" fill="#fff" stroke="#000" stroke-width="1"/>
                      <path className='hover:fill-app-dark' onClick={() => window.location.href = locations.cote} id="CI" d="M127.3,90.811l1.626,1.756,2.062,1.2,3.131-.15,2.267.719,1.96,1.354,1.319,3,1.44,2.157.622,3.082,2.276,1.616,1.784.738,2.415,2.232,2.5,1.139,2.583-.262,1.208,1.167,1.932.822,1.932.056,1.7-2.577,2.248-1.018,5.676-2.054,2.239-.934,2.267-.588,5.463-.187,5.082.635,2.518.476,1.728-.355,1.635,1.223,1.691,2.568,1.384.822,1.412.887,1.05,2.026,1.226,2.008.669.887,1.524,1.98,1.31.028,1.291-.859.557-.635.251,1.307-.511,2.12.1,1.317.715.5-.39,1.69-1.5,2.876-.009,1.7,1.486.532,1.059,1.8.632,3.082.641,1.027.065.635,1.078,7.461,1.328,7.48-.845.971-1.161.29-.752.345-.214.7.492,1.018-.325.934-1.449.645-3.149,2.372-.214.943-.836,2.017-.7,1.233L195.8,163.06l-1.635,6.051-.6,5.015-.093,1.55-.632,1.074-.715,1.559L188.7,182.6l-1.746,3.5.223,1.522.084,1.531-.52,1.1.093,2.96.418,2.475.613,2.428,2.48,6.873,1.291,4.174.8,3.362.706,2.26.66.915.269.869,3.679.625.725.5,1,4.38-.186,1.98-.725.756.019,1.672-.167,2.082-.539.822-2.062.1-1.4.784-1.839-.318-.177-.514-.994-.187-2.731-1.186.446-3.8-1.264-.159-.975.5-1.942,4.557-.929.784L170.372,227.6l-2.964-1.9-3.549-.429-6.187.215-5.1.569-1.459,1.149,12.876-.673,1.384.131.65.691-16.276,1.5-6.206.9-1.839-.243-1.394-1.457-6.745-.177-1.384.476-.836,1.074,2.657-.234,4.19-.056,1.124.822L126.2,231.032l-9.1,2.055-3.855,1.522-12.69,5-7.739,2.353-2.025.869-3.521,2.447-4.524,1.541-5.072,2.876-3.094.645-.7-.915-.084-4.856-.427-6.509.158-2.494.409-2.344.009-1.942,1.542-.728.409-.813.232-2.531,1.44-2.307.028-4.016.427-.831.325-1.065-.613-2.633-.8-4.968-.39-.327-.353.215-.808.094L72.2,209.647l-2.462-.3-1.728-1.466-.121-1.672-.836-.98-.585-1.933-.864-2.213-2.425-1.345-2.276-.326-1.616.29-1.9-.084-2.174-.747-1.5-.841L52.3,196.406l-1.319-1.289-1.05.159-1.282-.308-1.263-.588-.409-.457,5.277-5.173,1.793-2.531.2-1.55.019-1.56.576-1.6.149-2.437L52.063,170.2l-.743-2.746-.78-.8-.5-.308,1.477-1.139,2.035.3,3.121.887.678-.878,2.36-4.482-.065-1.662-.232-1.149,1.384-3.072,1.1-1.186.567-1.279-.176-1.756-.827-.653-1.1.122-1.31-.429-2-1.009-1.013-.9L56.355,144l.186-1.261.706-.728,1.1-.2,3.094-.122,2.508.466,2.2.271h1.171l.948,1.2,1.263,1.233,1.115-.009.39-.915-.26-4.006-.743-2.12-1.682-2.045L64,134.026l-.1-2.437.437-2.643.938-.981,3.233-1.681-.567-.906-1.031-.962-2.053-.971.474-3.166.1-2.83-1.737.318-1.784.168-1.5-.869-1.264-1.718-.232-4.725v-5.463l-.242-2.419.483-1.289,1.533-1.186,1.672-1.541.595-.981.771-.019,2.007-.588,1.821-1.345,1.7-2.8,2.295-2.25,2.583.168.762-.411.91-.074,1.078,1.485,1.087,1.13.771.028.576,2.139,4.71.9,2.016.588,1.7,1.56.595.037.715-.327.557-.542.112-.6-.734-1.4.325-1.261.762-1.13,1.217-.074,1.83-.318h2.1l1.561.206.622-1.13L96.8,88.54l.158-1.756.251-1.475.585-.6,2.332,1.858,2.137.673,1.533.056.427-.356-.65-2.026.176-.607.567-.355,1-.206,2.722-.822.279.159.511,3.194-.232,1.046.576,2.167.706,2.008-.056.822-.585,1.242-.687,1.139.074.466,1.087.775,2.081.8,2.155.187,1.2-1.167,1.245-.953.864-.85.3-1.261,1.366-.924,3.9-1.158,3.586-.177.892.364Zm63.535,139.264-.715,1.036-3.456-.663.818-.869,3.354.5Z" transform="translate(828.87 8472.021)" fill="#fff" stroke="#000" stroke-width="1"/>
                      <path id="GH" d="M144.8,83.011l1.663,1.6.372.915-.6,3.446-1.226,2.4-.771,2.26.112,1.121.743,1.13,2.536,1.765,1.291,1.149,1.542,1.737,1.765,1.7,3.019,2.213,1.282.4-.065.616-.418.85-.279,8.237-.232,2.129-.214,1.074-.288,3.072-.316.439-.567-.037-.53.122-.13.607.214.635,1.821.439-.4.466-1.347.42-.632.924.279,1.055-.752.85.214.569.483.411.771-.15,2.127-1.419.892-.15,1.106.29,2.035,2.167.084,1.055-.827,3.614-.808,2.792-.149,3.726.855,2.082-.121,1.149-.929.99-2.1,1.438.158.98.957,1.83,1.774,2.036,3.465,2.521,1.821,3.278.046,1.335-1.059,1.336-1.254,1.158-.409,1.671.567,10.982-2.741,4.763-.028,1.363.279,1.569.725.962,1.394.262,1.143.915-.4,3.343-.6,3.4-.1,1.653-.334.785-1.087.634-.39,1.074.279,1.326-.2.981.576,1.27,1.254,1.578,2.007,3.922.762.308.353.831-.223.794.78,1.737,2.23,1.737,2.341,1.513,1.9.215.446,1.354,1.245,1.728.9.756,1.44.5,1.18.262.065,1.457-2.137.99-1.44,1.5-1.1,2.288-1.524,2.521-5.24,1.307-2.007.009-10.749.065-10.061,4.95-5.8,1.765-3.567,2.783-4.794,1.98-3.344,2.409-6.958,1.149-11.4,3.773-3.567,1.5-3.6,2.624L94.4,250.112l-2.313-.037L87.5,247.2l-3.456-1.438-8.454-2.2-6.308-.859-3.047-.943L65.4,241.6l.715-1.037,1.765-.065,1.839.308,1.4-.784,2.053-.1.539-.832.167-2.073-.019-1.681.715-.747.186-1.98-1.013-4.38-.715-.5-3.679-.616-.279-.878-.66-.915-.706-2.26-.8-3.362-1.291-4.174-2.48-6.873-.613-2.437-.418-2.475-.093-2.96.511-1.1-.074-1.532-.232-1.531,1.746-3.5,3.419-4.3.715-1.55.641-1.074.093-1.55.6-5.005,1.635-6.051,1.031-2.288.7-1.242.836-2.017.214-.943L77,164.7l1.449-.634.325-.943-.492-1.018.214-.7.752-.345,1.161-.281.845-.981-1.329-7.48-1.078-7.461-.065-.635-.632-1.027-.632-3.082-1.068-1.812-1.486-.523.009-1.7,1.5-2.885.39-1.681-.715-.5-.1-1.317.511-2.12-.251-1.307-.279-1.382-1.551-3.278-.381-2.325.8-1.354-.028-2.97-.836-4.585-.139-2.895.576-1.2-.279-1.158-1.133-1.093-.084-1.055.966-1.037-.121-.8-1.2-.588-1.068-1.419-.957-2.232.2-3.6,1.793-6.612.223-.551,2.035.037.009.281,6.327-.065,7.228-.074,8.631-.084,7.85-.074.344-.3,1.3-.364,7.924.673,4.961-.335,2.1.215,1.542.448,3.419-.271,1.83.168,1.375,1.644.557-.009.771-.7,1.366-.8,1.394-.625,1-1.3.6-.98.9.2,1.3-.056.864-.822.344-1.27Z" transform="translate(953.595 8461.535)" fill="#fff" stroke="#000" stroke-width="1"/>
                      <path className='hover:fill-app-dark' onClick={() => window.location.href = locations.nigeria} id="NG" d="M363.341,78.408l4.1,5.762,4.4,6.191,3.428,4.809,2.508,12.448.269,2.363.2,1.065.2.98.325,1.69,1.969.728,3.716.335,2.7,1.223,1.616,2.026.158.336.855,1.559.2,1.13-.232,3.25-.548,4.174-.929,2.689.52,3.661-.167,1.56-.409,1.065-1.663,1.223-2.257,1.2-5.4,3.53-1.542.523-2.258.094-1.96.878L370.81,146.8l-5.017,7.079-4.283,7.107-1.486,5.874-1.672,5.6-3.772,3.577-.53,2.008-.158,1.167-.13,2.7-.455,4.464-.585,2.148-.6.635-4.069,1.363-2.341,1.634-1.4,3.24-.511,3.5-.817,3.988-.465,3.5-.632,1.812-1.338,1.905-2.072,2.045-1.793,1.158-4.673.756L329.6,218.7l-2.035,3.614-.056,1.448-1.96,7.489-3.409,5.64-.223,1.989-.009,1.634-4.264,4.959-1.133,1.466-1.087,1.914L316.5,250.7l1.2,1.681.176.569-1.932,1.578-3.382,2.746-2.016,1.644-.446.9-.3,4.118-.585,1.111-1.347,1.513-1.979,1.662-2.007,1.289-2.276.9-2.183.336-1.226-.523-.7-1.251-1.226-5.043-.622-1.083-1.421-.98-2.806-2.764-2.843-2.792-3.428-1.961-.734.14-.567.532-.976,2.811-.957,1.027-1.8.356-3.131.018-2.285-.393-.52-.56-.465-1.214-.632-.971-2.731,1.97-4.292,3.1-1.394.5-1.068.625-1.412,2.885-1.719,3.091-2.239,1.616-2.183,1.363-1.254,1.186-1.793,1.4-3.512,3.5-4.654,4.632-1.644,2.391-1.626,3.577-.948,3.96-1.031,4.333-1.514,6.966-2.23,3.941-1.951,3.128-1.449,2.456-.762,2.027-.316-.065-.762.869-2.174-.57-.975-1.765-1.347-.29-2.323-2.587-.492.429,2.452,6.574-.91,2.568-6.9.056-5.936.859-4.078-.074-2.044-.934-.91-2.465-.353.253-.2,1.317-1.291,1.037-4.58.2-2.025-1.681-1.635-1.886-1.756-.831.269.784,2.016,1.84-.242,2.643-3.688,3.063-2.35.178-1.44-1.317-.752-2.148-.381-3.175-.966-2.073h-.52l.483,1.9.158,1.55.019,3.222,1.756,2.5-2.694.775-1.1.028-2.137.056-.409-.934-.409-2.073-.567-.541-.66,3.511-1.421.243-.985-.028-4.236.766-.948-.15-.2-.653.5-.971-.112-1.578-1.468,1.214-.232,2.437-.836.393-2.518-.345-2.759-1.251-1.682-1.279-2.806-1.784-5.5-5-.892-2.251-1.57-2.755-1.171-2.8-1.691-4.781.52-.345,1.273.411.622-.719-2.285-.523-.474-.56-.158-1.681.1-2.054,1.858-.719,1.607-.356.808-1.242.465-1.251-4.264,1.9-4-2.148-.864-1.3.437-1,1.914-.15,2.731.074,1.635-.971-1-.345-1.765.037-.65-.645.056-1.559-.576.346-.762,1.382-2.694,1.018-1.579-1.018-.158-2.26-.344-1.018-1.328-.794-4.719-5.986-5.927-5-5.267-3.446-7.962-1.644-16.666.065-.938-.476,1.022-.784,1.458-.532,5.361-2.792-.9-.374-5.574,1.746-1.9.168-2.471,3.353-14.678.56-1.719.177.037-1.532.715-4.408.474-1.737L81,263.532l-.567-1.569-.557-2.129-.269-3.343.687-1.037.232-1.261-.167-1.98V245.6l.4-.719.474-.551.028-.878-.892-1.709-.827-1.952.028-2.811-.335-2.718-.567-1.242.427-4.632.242-5.865-.223-2.605.539-1.84.288-4.529-.046-4.436,1.1-7.013,3.214-.335,3.828-.588,1.709-2.755.985-3.492-.316-3.455.743-1.139,1.533-1.877,2.768-2.68-.112-2.942.762-.906,1.31-.682,1.877-.345,2.1-1.466,1.161-2.568,1.143-4.109-1.8-2.867.028-.635.688-1.541,1.105-1.541.873-.494,2.044.392.353-.131.316-.485,1.319-4.548-.121-1.223-1.9-3.044-.316-2.167L106,151.258l-.464-2.858-.548-1.083-1.013-.906-.455-.588-3.939-5.809.065-2.755,1.654-3.521,1.078-1.709,1.505-.953.3-.813-.446-.99-.762-.747-.177-1.588.214-1.055.539-1.158-.214-2.428.046-3.726.251-5.435.074-3.324,3.2-2.465,4.654-4.081L113.92,99l1.273-3.231,1.561-10.758,1.133-.654,1.338-.5,4.673-3.922,3.6-1.457,2.75-.841,4.134-.71,2.564.29,4.673.177L145.293,77l3.121-2.138,1.412-.6,1.988-.374,9.03,2.885,9.021,2.727,1.635-.253,1.375.383,2.257,1.475,3.326,3.166,1.979,2.045.957,1.2,4.636,6.864,1.728,1.728,1.737.943,1.765.335,1.356-.131,1.282-.775,1.746-1.531,2.657-.7,2.165.14L211.7,88.214l1.087-.084,3.27.485,3.633.85,9.411,6.191,7.683,4.053,5.4,1.354,6.364.962,10.8.29,8.166-8.675,3.019-1.9,3.642-1.709,1.171-.29,6.42-1.317,12.588-1.111,11.808.485,2.323.345L313.5,89.3l7.73,2.83,3.335,2.717,5.24.448,3.753-.542,1.226-2.689,3.772-3.539,2.741-1.438,2.908-1.84,4.608-2.288,3.79-1.027,3.391-2.624,2.685-.831,4.664-.065ZM198.934,323.533l-2.518.794-1.654-.2,2.267-3.455,1.152.747,1.477.309-.725,1.8Z" transform="translate(1091.6 8397.11)" fill="#fff" stroke="#000" stroke-width="1"/>
                      <path id="TG" d="M96.7,85.055l-.669,2.858-1.384,3.53-.892,1.121-.632,8.573.437.71.316.216,4.329,2.895,5.676,3.8,4.013,2.68.335.906.065,5.622.046,4.828.827,2.755.176,2.68,1.013,2.017,3.7,3.894.883,2.3.1,7.359.065,5.575.474,7.592v33.46l-2.443.122,1.338,3.035.223,2.745.316.9-.66,1.326.548,2.026,1.059.747,2.713,4.072.9,3.446-4.348,1.149.3.887L107.4,212.7l-3.214,1.513-.065-1.457-1.18-.262-1.44-.5-.9-.756-1.245-1.727-.446-1.354-1.9-.215-2.341-1.513-2.23-1.737-.78-1.737.223-.794-.353-.831-.762-.308-2.007-3.922-1.254-1.578-.576-1.27.2-.981-.279-1.326.39-1.074,1.087-.635.334-.785.1-1.653.6-3.4.4-3.343-1.143-.915-1.394-.262-.725-.962-.279-1.569.028-1.363L89,171.229l-.567-10.982.409-1.671,1.254-1.158,1.059-1.335-.046-1.335-1.821-3.278-3.465-2.521-1.774-2.036-.957-1.83-.158-.981,2.1-1.438.929-.99.121-1.149-.855-2.082.149-3.726.808-2.792.827-3.614-.084-1.055L84.9,125.088l-1.106-.29-.892.15-2.127,1.419-.771.15-.483-.411-.214-.569.753-.85-.279-1.055.632-.924,1.347-.42.4-.466-1.821-.438-.214-.635.13-.607.53-.122.567.037.316-.439.288-3.072.214-1.074.232-2.129.279-8.236.418-.85.065-.616-1.282-.4-3.019-2.213-1.765-1.7-1.542-1.737L74.258,96.44l-2.536-1.765-.743-1.13-.112-1.121.771-2.26,1.226-2.4.6-3.446L73.1,83.4l-1.663-1.6L77.37,83.03l8.473,2.064.177.364.056.616,1.468-.019,2.443-.728Z" transform="translate(1026.962 8462.742)" fill="#fff" stroke="#000" stroke-width="1"/>
                      <g id="Group_83" data-name="Group 83" transform="translate(944.658 8626.962)">
                      <line id="Line_11" data-name="Line 11" y2="100.706" transform="translate(3.045 3.49)" fill="none" stroke="#4778c8" stroke-width="1"/>
                      <circle id="Ellipse_2" data-name="Ellipse 2" cx="3.232" cy="3.232" r="3.232" transform="translate(0 0)" fill="#4778c8"/>
                      </g>
                      <g id="Group_84" data-name="Group 84" transform="translate(1160.124 8569.677)">
                      <line id="Line_11-2" data-name="Line 11" x1="0.034" y2="137.596" transform="translate(3.193 3.228)" fill="none" stroke="#4778c8" stroke-width="1"/>
                      <circle id="Ellipse_2-2" data-name="Ellipse 2" cx="3.228" cy="3.228" r="3.228" fill="#4778c8"/>
                      </g>
                      <g id="Group_85" data-name="Group 85" transform="translate(1319.464 8581.941)">
                      <line id="Line_11-3" data-name="Line 11" x1="0.568" y2="166.646" transform="translate(2.659 3.228)" fill="none" stroke="#4778c8" stroke-width="1"/>
                      <circle id="Ellipse_2-3" data-name="Ellipse 2" cx="3.228" cy="3.228" r="3.228" transform="translate(0)" fill="#4778c8"/>
                      </g>
                      <text id="Cote_D_Ivoire" data-name="Cote d'Ivoire" transform="translate(898.085 8747.657)" fill="#fff" font-size="15" font-family="Montserrat" font-weight="700"><tspan x="0" y="0">Cote d'Ivoire</tspan></text>
                      <text id="Bènin" transform="translate(1139.816 8726.647)" fill="#fff" font-size="15" font-family="Montserrat" font-weight="700"><tspan x="0" y="0">Bènin</tspan></text>
                      <text id="Nigeria" transform="translate(1298.202 8767.86)" fill="#fff" font-size="15" font-family="Montserrat" font-weight="700"><tspan x="0" y="0">Nigeria</tspan></text>
                  </g>
                  </svg>
              </div>
          </div>

          <div className='flex lg:flex-row flex-col justify-center lg:justify-between px-5 pt-8 space-y-2' style={{ fontFamily: 'Inter' }}>
              <p className='font-bold text-base text-center lg:text-right'>© African School of Economics, 2024</p>

              <div className='flex justify-center lg:justify-between gap-5'>
                  <a href="https://www.facebook.com/AbujaCampus/">
                      <SiFacebook className="hover:text-app-main text-white w-[18px] h-[18px]"/>
                  </a>
                  
                  <a href="https://twitter.com/ase_africa">
                      <SiX className="hover:text-app-main text-white w-[18px] h-[18px]"/>
                  </a>
                  <a href="https://www.linkedin.com/school/african-school-of-economics-ase/">
                      <SiLinkedin className="hover:text-app-main text-white w-[18px] h-[18px]"/>
                  </a>
                  <a href="https://www.youtube.com/@aseafricanschoolofeconomic3095">
                      <SiYoutube className="hover:text-app-main text-white w-[18px] h-[18px]"/>
                  </a>
                  <a href="https://instagram.com">
                      <AiFillInstagram className="hover:text-app-main text-white w-[18px] h-[18px]"/>
                  </a>
              </div>
          </div>
      </footer>
  );
}

export default Footer;
