import { groq } from 'next-sanity';

export const vehicleCategoryQuery = groq`
*[_type == "vehicleCategory"] | order(categoryTitle asc) {
  categoryTitle,
  categoryIcon{
    ...,
    asset->{
      ...
    }
  },
  vehicles[]->{
    title,
    slug,
    model,
    price,
    shortDescription,
    image,
    menuImage,
    brand,
    modelYear,   
    mobileImage,
    logo,
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
      audioSystem,
    }
  }
}
`;
