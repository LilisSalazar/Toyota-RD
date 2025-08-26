import { groq } from 'next-sanity';

export const landingModelsPageQuery = groq`
  *[_type == "landingModelsPage" && slug.current == $slug][0] { 
    slug,
    heroImage {
      ...,
      asset-> {
        ...
      }
    },
    heroSlogan,
    heroModelTitle,  
    heroPrice,  
    heroDescription[] {
      _key,
      _type,
      children[] {
        _key,
        _type,
        text,
      },
    },     
    subHeaderTitle,
    subHeaderDescription,
    features[] {
      featuresTitle,
      featuresDescription,
      featuresBackgroundImg {
        ...,
        asset-> {
          ...
        }
      }
    },
    brochureImg {
      ...,
      asset-> {
        ...
      }
    },
    brochureTitle,
    "pdfFile": pdfFile.asset->url,
    colorOptions[] {
      colorName[],
      colorValue[],
      colorImage {
        ...,
        asset-> {
          ...
        }
      }
    },
    functionality[] {
      functionalityTitle,    
      functionalityImage {
        ...,
        asset-> {
          ...
        }
      },
    functionalityDescription[] {
      _key,
      _type,
      children[] {
      _key,
      _type,
      text,
      }
      }
    },
    functionalitySlogan,
    functionalitySubSlogan,
    galleryTitle,
    gallerySubTitle,
    galleryImagesInside[] {   
      ...,
      asset-> {
        ...
      }
    },
    galleryImagesOutside[] {   
      ...,
      asset-> {
        ...
      }
    },
    chooseLandCruiserTitle,
    chooseLandCruiser[] {
      landCruiserTitle,    
      landCruiserImage {
        ...,
        asset-> {
          ...
        }
      },
    landCruiserDescription[] {
      _key,
      _type,
      children[] {
      _key,
      _type,
      text,
      }
      }
    },
}`;
