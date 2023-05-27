import AllProduct from "@/components/AllProduct";
import ProductBox from "@/components/ProductBox";

export default function Home() {
  return (
    <div className="relative  pb-24">
      <div className="flex items-center justify-between">
        <div className="m-6 flex h-10  w-10 items-center justify-center rounded-full bg-[#2A72FF]">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.56738 8.17242H19.1222C19.355 8.17242 19.5783 8.28141 19.7429 8.47542C19.9075 8.66942 20 8.93255 20 9.20691C20 9.48127 19.9075 9.74439 19.7429 9.9384C19.5783 10.1324 19.355 10.2414 19.1222 10.2414H1.56738C1.33459 10.2414 1.11133 10.1324 0.946721 9.9384C0.782113 9.74439 0.689636 9.48127 0.689636 9.20691C0.689636 8.93255 0.782113 8.66942 0.946721 8.47542C1.11133 8.28141 1.33459 8.17242 1.56738 8.17242Z"
              fill="white"
            />
            <path
              d="M2.11985 9.2069L9.39783 16.3543C9.56261 16.5161 9.65517 16.7356 9.65517 16.9645C9.65517 17.1934 9.56261 17.413 9.39783 17.5748C9.23306 17.7367 9.00959 17.8276 8.77656 17.8276C8.54354 17.8276 8.32007 17.7367 8.15529 17.5748L0.257798 9.81717C0.17608 9.7371 0.111245 9.64198 0.0670082 9.53726C0.0227709 9.43254 0 9.32028 0 9.2069C0 9.09352 0.0227709 8.98126 0.0670082 8.87654C0.111245 8.77182 0.17608 8.6767 0.257798 8.59663L8.15529 0.838993C8.32007 0.67714 8.54354 0.586212 8.77656 0.586212C9.00959 0.586212 9.23306 0.67714 9.39783 0.838993C9.56261 1.00085 9.65517 1.22037 9.65517 1.44926C9.65517 1.67816 9.56261 1.89768 9.39783 2.05953L2.11985 9.2069Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-1/2 rounded-full bg-[#BDBDBD] bg-opacity-20 p-2">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                d="M19.5336 18.0017L24.1735 22.6406L22.6406 24.1735L18.0018 19.5336C16.2757 20.9172 14.1289 21.6698 11.9167 21.6667C6.53469 21.6667 2.16669 17.2987 2.16669 11.9167C2.16669 6.53466 6.53469 2.16666 11.9167 2.16666C17.2987 2.16666 21.6667 6.53466 21.6667 11.9167C21.6698 14.1288 20.9173 16.2757 19.5336 18.0017ZM17.3604 17.1979C18.7353 15.784 19.5031 13.8888 19.5 11.9167C19.5 7.72741 16.1059 4.33332 11.9167 4.33332C7.72744 4.33332 4.33335 7.72741 4.33335 11.9167C4.33335 16.1059 7.72744 19.5 11.9167 19.5C13.8888 19.5031 15.7841 18.7353 17.1979 17.3604L17.3604 17.1979Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
        <div className="m-6 flex h-10  w-10 items-center justify-center rounded-full bg-[#2A72FF]">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 6.42857C0 6.08758 0.131696 5.76055 0.366116 5.51943C0.600537 5.27832 0.918479 5.14286 1.25 5.14286H14.135C14.4665 5.14286 14.7845 5.27832 15.0189 5.51943C15.2533 5.76055 15.385 6.08758 15.385 6.42857C15.385 6.76956 15.2533 7.09659 15.0189 7.33771C14.7845 7.57883 14.4665 7.71429 14.135 7.71429H1.25C0.918479 7.71429 0.600537 7.57883 0.366116 7.33771C0.131696 7.09659 0 6.76956 0 6.42857ZM0 1.28571C0 0.944722 0.131696 0.617695 0.366116 0.376577C0.600537 0.135459 0.918479 0 1.25 0H18.75C19.0815 0 19.3995 0.135459 19.6339 0.376577C19.8683 0.617695 20 0.944722 20 1.28571C20 1.62671 19.8683 1.95373 19.6339 2.19485C19.3995 2.43597 19.0815 2.57143 18.75 2.57143H1.25C0.918479 2.57143 0.600537 2.43597 0.366116 2.19485C0.131696 1.95373 0 1.62671 0 1.28571ZM0 11.5714C0 11.2304 0.131696 10.9034 0.366116 10.6623C0.600537 10.4212 0.918479 10.2857 1.25 10.2857H18.75C19.0815 10.2857 19.3995 10.4212 19.6339 10.6623C19.8683 10.9034 20 11.2304 20 11.5714C20 11.9124 19.8683 12.2394 19.6339 12.4806C19.3995 12.7217 19.0815 12.8571 18.75 12.8571H1.25C0.918479 12.8571 0.600537 12.7217 0.366116 12.4806C0.131696 12.2394 0 11.9124 0 11.5714ZM0 16.7143C0 16.3733 0.131696 16.0463 0.366116 15.8051C0.600537 15.564 0.918479 15.4286 1.25 15.4286H14.135C14.4665 15.4286 14.7845 15.564 15.0189 15.8051C15.2533 16.0463 15.385 16.3733 15.385 16.7143C15.385 17.0553 15.2533 17.3823 15.0189 17.6234C14.7845 17.8645 14.4665 18 14.135 18H1.25C0.918479 18 0.600537 17.8645 0.366116 17.6234C0.131696 17.3823 0 17.0553 0 16.7143Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col space-y-3 pl-6">
        <span className="text-xl font-bold">Sneakers</span>
        <div className="flex space-x-6">
          <span>Nike</span>
          <span>Adidas</span>
          <span>Reebok</span>
          <span>Puma</span>
          <span>Skechers</span>
        </div>
        <span className="text-xl font-bold">Hot Sales</span>
        <div className="flex space-x-4 overflow-y-scroll ">
          <ProductBox
            bg={"bg-[#67FF6E]"}
            src={"/images/shoe01.png"}
            new
            title="Air Jordan 1"
            brand="Nike"
            price={250}
          />
          <ProductBox
            bg={"bg-[#F1FF4B]"}
            src={"/images/shoe02.png"}
            title="Air Jordan 2"
            brand="Nike"
            price={199}
          />
            <ProductBox
            bg={"bg-[#67FF6E]"}
            src={"/images/shoe01.png"}
            new
            title="Air Jordan 1"
            brand="Nike"
            price={250}
          />
        </div>
      </div>
      <div className="mt-3 bg-[#BDBDBD] bg-opacity-20 p-6">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">Best For Running</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <div>
          <AllProduct
            brand="nike"
            src={"/images/shoe03.png"}
            title="Air Max Flyknit"
            price={170}
            discount={20}
          />
          <AllProduct
            brand="nike"
            src={"/images/shoe04.png"}
            title="Air Max 90"
            price={140}
            discount={15}
          />
          <AllProduct
            brand="nike"
            src={"/images/shoe03.png"}
            title="Air Max Flyknit"
            price={170}
            discount={20}
          />
          <AllProduct
            brand="nike"
            src={"/images/shoe03.png"}
            title="Air Max Flyknit"
            price={170}
            discount={20}
          />
          <AllProduct
            brand="nike"
            src={"/images/shoe04.png"}
            title="Air Max 90"
            price={140}
            discount={15}
          />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 flex h-16 justify-between rounded-t-2xl bg-[#2A72FF] p-5 px-10">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 17.7772C0 14.8544 7.05953 13.0677 10.5964 13.0677C14.1332 13.0677 21.1927 14.8544 21.1927 17.7772V21.3093H0V17.7772Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.5964 11.8903C13.8477 11.8903 16.4833 9.25475 16.4833 6.00344C16.4833 2.75213 13.8477 0.116577 10.5964 0.116577C7.34508 0.116577 4.70953 2.75213 4.70953 6.00344C4.70953 9.25475 7.34508 11.8903 10.5964 11.8903Z"
            fill="white"
          />
        </svg>

        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.2339 4.3223C21.1602 4.23414 21.0681 4.16323 20.964 4.11458C20.8599 4.06593 20.7464 4.04072 20.6315 4.04074H4.80548L4.32576 1.40567C4.26005 1.04399 4.06949 0.716847 3.7873 0.481271C3.50512 0.245695 3.1492 0.11663 2.78161 0.116577H1.01084C0.802692 0.116577 0.603068 0.199265 0.455884 0.346449C0.3087 0.493634 0.226013 0.69326 0.226013 0.90141C0.226013 1.10956 0.3087 1.30919 0.455884 1.45637C0.603068 1.60356 0.802692 1.68624 1.01084 1.68624H2.7767L5.28423 15.4493C5.35809 15.8574 5.53847 16.2389 5.80712 16.5549C5.43633 16.9012 5.16871 17.3435 5.03393 17.8326C4.89914 18.3218 4.90246 18.8387 5.04351 19.326C5.18457 19.8134 5.45784 20.2522 5.83304 20.5937C6.20824 20.9353 6.67071 21.1662 7.16915 21.261C7.66759 21.3557 8.18253 21.3106 8.65688 21.1305C9.13123 20.9505 9.54644 20.6426 9.85648 20.2409C10.1665 19.8393 10.3593 19.3597 10.4134 18.8552C10.4675 18.3507 10.3808 17.8411 10.1629 17.3829H14.6188C14.4432 17.7505 14.3523 18.1528 14.3529 18.5602C14.3529 19.1034 14.514 19.6345 14.8159 20.0863C15.1177 20.538 15.5467 20.8901 16.0486 21.098C16.5505 21.3059 17.1029 21.3603 17.6357 21.2543C18.1685 21.1483 18.658 20.8867 19.0422 20.5025C19.4263 20.1184 19.6879 19.6289 19.7939 19.0961C19.8999 18.5632 19.8455 18.0109 19.6376 17.509C19.4297 17.007 19.0776 16.578 18.6259 16.2762C18.1742 15.9743 17.6431 15.8132 17.0998 15.8132H7.60045C7.41665 15.8132 7.2387 15.7487 7.0976 15.6309C6.95651 15.5131 6.86123 15.3495 6.82838 15.1687L6.51739 13.4587H17.8974C18.4488 13.4587 18.9827 13.2651 19.4059 12.9117C19.8292 12.5583 20.1151 12.0676 20.2136 11.5251L21.4066 4.96587C21.4267 4.8525 21.4218 4.73607 21.3919 4.62485C21.3621 4.51363 21.3081 4.41034 21.2339 4.3223ZM17.0998 17.3829C17.3326 17.3829 17.5603 17.452 17.7539 17.5813C17.9474 17.7107 18.0983 17.8945 18.1874 18.1096C18.2765 18.3248 18.2999 18.5615 18.2544 18.7898C18.209 19.0182 18.0969 19.228 17.9322 19.3926C17.7676 19.5572 17.5578 19.6694 17.3295 19.7148C17.1011 19.7602 16.8644 19.7369 16.6493 19.6478C16.4342 19.5587 16.2503 19.4078 16.121 19.2142C15.9916 19.0206 15.9226 18.793 15.9226 18.5602C15.9226 18.2479 16.0466 17.9485 16.2674 17.7277C16.4882 17.5069 16.7876 17.3829 17.0998 17.3829ZM7.68188 17.3829C7.91471 17.3829 8.14232 17.452 8.33592 17.5813C8.52951 17.7107 8.6804 17.8945 8.76951 18.1096C8.85861 18.3248 8.88192 18.5615 8.8365 18.7898C8.79107 19.0182 8.67895 19.228 8.51431 19.3926C8.34967 19.5572 8.13991 19.6694 7.91155 19.7148C7.68318 19.7602 7.44648 19.7369 7.23137 19.6478C7.01625 19.5587 6.83239 19.4078 6.70304 19.2142C6.57368 19.0206 6.50464 18.793 6.50464 18.5602C6.50464 18.2479 6.62867 17.9485 6.84944 17.7277C7.07022 17.5069 7.36965 17.3829 7.68188 17.3829Z"
            fill="white"
          />
        </svg>

        <svg
          width="30"
          height="29"
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.659 22.6991V16.7256H17.4377V22.6991C17.4377 23.3561 17.9754 23.8938 18.6324 23.8938H22.2165C22.8736 23.8938 23.4112 23.3561 23.4112 22.6991V14.3363H25.4421C25.9917 14.3363 26.2545 13.6553 25.8364 13.2969L15.8488 4.30089C15.3948 3.8947 14.7019 3.8947 14.2479 4.30089L4.26035 13.2969C3.85415 13.6553 4.10504 14.3363 4.65459 14.3363H6.68556V22.6991C6.68556 23.3561 7.22317 23.8938 7.88025 23.8938H11.4643C12.1214 23.8938 12.659 23.3561 12.659 22.6991Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}