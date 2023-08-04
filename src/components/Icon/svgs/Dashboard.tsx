import { ISVGProps } from "../dtos/IIconDTO";

export default function Logout({ datatestid = null, ...rest }: ISVGProps) {
  return (
    <svg
      data-testid={datatestid}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_461_379)">
        <path d="M15.2417 6.89541C16.1356 6.89541 16.8627 6.16822 16.8627 5.2744C16.8627 4.38057 16.1356 3.65338 15.2417 3.65338C14.3479 3.65338 13.6208 4.38057 13.6208 5.2744C13.6208 5.86518 13.9386 6.38299 14.4121 6.66631L13.6548 9.41151C13.6543 9.41151 13.6538 9.41147 13.6534 9.41147C13.236 9.41147 12.855 9.5701 12.5674 9.83018L10.159 8.29416C10.2058 8.14291 10.2311 7.98233 10.2311 7.81588C10.2311 6.92205 9.50388 6.1949 8.61005 6.1949C7.86501 6.1949 7.23614 6.70033 7.04731 7.38619H3.50138C3.31255 6.70033 2.68368 6.1949 1.93864 6.1949C1.04481 6.1949 0.317627 6.92209 0.317627 7.81588C0.317627 8.70971 1.04481 9.4369 1.93864 9.4369C2.68372 9.4369 3.31255 8.93147 3.50138 8.24557H7.04728C7.2361 8.93147 7.86497 9.4369 8.61001 9.4369C9.02739 9.4369 9.40841 9.27826 9.69603 9.01819L12.1044 10.5542C12.0576 10.7055 12.0323 10.8661 12.0323 11.0325C12.0323 11.9263 12.7595 12.6535 13.6533 12.6535C14.5472 12.6535 15.2743 11.9263 15.2743 11.0325C15.2743 10.4417 14.9565 9.92389 14.483 9.64057L15.2403 6.89537C15.2408 6.89537 15.2413 6.89541 15.2417 6.89541ZM1.93864 8.57752C1.51868 8.57752 1.177 8.23584 1.177 7.81588C1.177 7.39592 1.51868 7.05424 1.93864 7.05424C2.3586 7.05424 2.70024 7.39592 2.70024 7.81588C2.70024 8.23584 2.3586 8.57752 1.93864 8.57752ZM8.61005 8.57752C8.19009 8.57752 7.84845 8.23584 7.84845 7.81588C7.84845 7.39592 8.19013 7.05424 8.61005 7.05424C9.03005 7.05424 9.37169 7.39592 9.37169 7.81588C9.37169 8.23584 9.03001 8.57752 8.61005 8.57752ZM13.6533 11.7941C13.2334 11.7941 12.8917 11.4524 12.8917 11.0325C12.8917 10.6125 13.2334 10.2708 13.6533 10.2708C14.0733 10.2708 14.4149 10.6125 14.4149 11.0325C14.4149 11.4524 14.0733 11.7941 13.6533 11.7941ZM15.2417 4.51276C15.6617 4.51276 16.0034 4.8544 16.0034 5.2744C16.0034 5.6944 15.6617 6.03604 15.2417 6.03604C14.8218 6.03604 14.4801 5.6944 14.4801 5.2744C14.4801 4.8544 14.8218 4.51276 15.2417 4.51276Z" />
        <path d="M12.4224 0C8.24402 0 4.84473 3.39934 4.84473 7.57766C4.84473 8.93539 5.20398 10.2107 5.83195 11.314L4.19094 12.955L3.83098 12.5951C3.66316 12.4273 3.39109 12.4273 3.22328 12.5951C3.05551 12.7629 3.05551 13.035 3.22328 13.2028L3.58324 13.5627L0.591094 16.5549C0.209922 16.936 0 17.4428 0 17.9819C0 18.5209 0.209922 19.0277 0.591094 19.4089C0.972266 19.7901 1.47906 20 2.01813 20C2.55719 20 3.06398 19.7901 3.44516 19.4089L6.4373 16.4168L6.79727 16.7767C6.88117 16.8606 6.99113 16.9026 7.10109 16.9026C7.21105 16.9026 7.32102 16.8606 7.40492 16.7767C7.5727 16.6089 7.5727 16.3368 7.40492 16.169L7.04496 15.8091L8.68598 14.168C9.7893 14.796 11.0646 15.1553 12.4223 15.1553C16.6007 15.1553 20 11.756 20 7.57766C20 3.39934 16.6007 0 12.4224 0ZM2.83746 18.8013C2.61863 19.0201 2.32762 19.1406 2.01813 19.1406C1.70863 19.1406 1.41762 19.0201 1.19879 18.8012C0.979883 18.5824 0.859375 18.2914 0.859375 17.9819C0.859375 17.6724 0.979883 17.3814 1.19875 17.1625L4.1909 14.1704L5.82961 15.8091L2.83746 18.8013ZM6.4373 15.2014L4.79859 13.5627L6.31016 12.0511C6.76965 12.6772 7.32277 13.2304 7.94887 13.6898L6.4373 15.2014ZM12.4224 14.2959C8.71789 14.2959 5.7041 11.2821 5.7041 7.57766C5.7041 3.87316 8.71789 0.859375 12.4224 0.859375C16.1268 0.859375 19.1406 3.87316 19.1406 7.57766C19.1406 11.2821 16.1268 14.2959 12.4224 14.2959Z" />
      </g>
      <defs>
        <clipPath id="clip0_461_379">
          <rect width="20" height="20" />
        </clipPath>
      </defs>
    </svg>
  );
}
