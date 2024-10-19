import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

function SEO({title, description, image}) {

  const { pathname } = useRouter();

  return (
    <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: `https://ase.chibykes.dev${pathname}`,
          images: [
            { url: new RegExp(/^\//).test(image) ? `https://ase.chibykes.dev${image}` : image },
          ],
        }}
    />
  );
}

export default SEO;
