import { groq } from 'next-sanity';

export const vehicleQuery = groq`
*[_type == "vehicle" && slug.current == $slug][0] { 
  title,
  brand,
  model,
  price,
  modelYear,
  shortDescription,
  heroPrice,
  subHeaderTitle,
  subHeaderDescription,
  gallerySubTitle,
  
  image {
    ...,
    asset->{
      ...
    }
  },
  heroImage {
    ...,
    asset->{
      ...
    }
  },
  
  fullDescription[] {
    ...,
    children[] {
      _key,
      _type,
      text,
      marks
    }
  },

  brochureTitle,
  pdfFile {
    asset->{
      url,
      originalFilename
    }
  },
  brochureImg {
    ...,
    asset->{
      ...
    }
  },
  
  galleryImagesInside[] {
    ...,
    asset->{
      ...
    }
  },
  galleryImagesOutside[] {
    ...,
    asset->{
      ...
    }
  },
  
  functionalitySubSlogan,
  functionality[] {
    functionalityTitle,
    functionalityDescription[] {
      ...,
      children[] {
        _key,
        _type,
        text,
        marks
      }
    },
    functionalityImage {
      ...,
      asset->{
        ...
      }
    }
  },

  chooseVariantTitle,
  chooseVariant[]->,    
  
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
  
  features[] {
    featuresTitle,
    featuresDescription,
    featuresBackgroundImg {
      ...,
      asset->{
        ...
      }
    }
  },
  
  technicalDetailsSection {
    motor,
    transmission,
    frontSuspension,
    rearSuspension,
    brakes,
    tires,
    traction,
    category,
    rims,
    bluetooth,
    airbags,
    interior,
    key,
    passengers,
    audioSystem
  }
}
`;

export const vehicleListForComparatorQuery = groq`
*[_type == "vehicle"] { 
  title,
  brand,
  model,
  price,
  image {
    ...,
    asset->{
      ...
    }
  },
  technicalDetailsSection {
    motor,
    transmission,
    frontSuspension,
    rearSuspension,
    brakes,
    tires,
    traction,
    category,
    rims,
    bluetooth,
    airbags,
    interior,
    key,
    passengers,
    audioSystem
  }
}
`;
