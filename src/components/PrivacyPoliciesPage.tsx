import { PrivacyPoliciesProps } from '@/types';
import { PortableText } from '@portabletext/react';

const PrivacyPolicies: React.FC<{ data: PrivacyPoliciesProps | null }> = ({ data }) => {
  const { title, description } = data ?? {};

  return (
    <div className="flex flex-col bg-neutral pt-12 2xl:pb-28">
      <div className="font-bold text-left mt-12 mb-4 ml-[10%] xl:ml-[18%] 2xl:ml-[16%]">
        <h1 className="xl:pb-4">{title}</h1>
      </div>
      <div className="text-justify pb-12 ml-[11%] mr-[11%] xl:ml-[18%] 2xl:ml-[16%] 2xl:mr-[14%]">
        <PortableText
          value={description || []}
          components={{
            block: {
              normal: ({ children }) => <p className="leading-7 2xl:text-[24px]">{children}</p>,
            },
          }}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicies;
