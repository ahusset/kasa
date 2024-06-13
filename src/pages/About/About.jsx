/** @format */

import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import aboutArray from '../../data/aboutArray.json'; // j'ai créé un fichier JSON avec les données des collapses

export default function About() {
  return (
    <>
      <Banner className='about-banner' />
      {aboutArray.map((rule, id) => (
        <Collapse
          key={id}
          aboutTitle={rule.aboutTitle}
          aboutText={rule.aboutText}
          aboutStyle='about-style'
        />
      ))}
    </>
  );
}
