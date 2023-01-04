import { FunctionComponent, ReactNode } from "react";
import { styled } from "@/stitches.config";

import { Heading } from "./Heading";
import { Button } from "./Button";
import { Div } from "./utils/Div";

import NewsletterPattern from "./newsletter-pattern.png";

const NewsletterRoot = styled("section", {
  width: "100%",
  maxWidth: "1100px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacer-2",

  padding: "$spacer-5",

  background: "$accentBase",
  borderRadius: "$brSm",

  position: "relative",
  overflow: "hidden",

  "@tablet": {
    alignItems: "flex-start",
    boxShadow: "inset 0px 4px 14px rgba(0, 0, 0, 0.2)",

    "*:not(img)": {
      zIndex: "$high",
    },
  },
});

const ButtonContainer = styled("label", {
  width: "100%",
  position: "relative",

  display: "flex",
  justifyContent: "space-between",

  padding: "$spacer-1 $spacer-2",
  borderRadius: "$brSm",
  gap: "$spacer-1",

  background: "$gray100",

  input: {
    width: "100%",
    fontSize: "$xs",
  },

  "@tablet": {
    width: "360px",
  },

  "@desktop": {
    width: "410px",
  },
});

const Br = styled("br", {
  "@tablet": {
    display: "none",
  },
});

const Span = styled("span", {
  textTransform: "capitalize",

  "@tablet": {
    textTransform: "lowercase",
  },
});

const BulletPointsRoot = styled("ul", {
  paddingLeft: "$spacer-4",
});

const BackgroundImage = styled("img", {
  display: "none",

  "@tablet": {
    display: "block",

    width: "100%",
    height: "100%",
    objectFit: "cover",

    position: "absolute",
    inset: 0,
    margin: "auto",
  },
});

export const Newsletter: FunctionComponent = () => {
  const handleSubmit = () => {
    // send email
  };

  return (
    <NewsletterRoot css={{ "@tablet": { backgroundImage: `url("${""}")` } }}>
      <BackgroundImage src={NewsletterPattern.src} />

      <Heading.h1
        css={{
          textAlign: "center",
          color: "$secondaryBase",
          "@tablet": { color: "$gray900" },
        }}
        font="reading"
        weight="regular"
      >
        Inscreva-se
        <Br /> <Span css={{ color: "$gray900" }}>em nosso</Span>{" "}
        <Span css={{ fontFamily: "$display" }}>Newsletter</Span>
      </Heading.h1>

      <Div css={{ "@tablet": { display: "none" } }}>
        <Illustration accentColor="#5555E5" />
      </Div>

      <Div
        css={{ color: "$gray900", "@tablet": { p: { fontWeight: "$medium" } } }}
      >
        <Heading.p>
          Preencha o campo abaixo com o seu e-mail para receber avisos das
          reviews do site, com isso você receberá:
        </Heading.p>

        <BulletPointsRoot>
          <li>
            <Heading.p>Os alertas dos destaques do site.</Heading.p>
          </li>
          <li>
            <Heading.p>Os posts mais recentes do dia.</Heading.p>
          </li>
        </BulletPointsRoot>

        <Heading.p>
          Não se preocupe, você poderá revogar sua assinatura a qualquer momento
          nas configurações.
        </Heading.p>
      </Div>

      <ButtonContainer htmlFor="newsletter-input">
        <input id="newsletter-input" />
        <Button onClick={handleSubmit}>
          <Heading.p>Enviar</Heading.p>
        </Button>
      </ButtonContainer>
    </NewsletterRoot>
  );
};

function Illustration({ accentColor }: { accentColor: string }) {
  return (
    <svg
      width="190"
      height="130"
      viewBox="0 0 190 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1191_3063)">
        <path
          d="M188.205 49.2065H188.153L158.712 61.6609L118.43 78.7013C118.272 78.7668 118.103 78.8011 117.933 78.8019C117.762 78.8028 117.593 78.7703 117.435 78.7063L75.8754 61.6254L45.7105 49.2269L45.6644 49.2065H45.6131C45.1371 49.2071 44.6808 49.3946 44.3443 49.728C44.0077 50.0614 43.8184 50.5135 43.8179 50.985V128.222C43.8184 128.693 44.0077 129.145 44.3443 129.479C44.6808 129.812 45.1371 130 45.6131 130H188.205C188.681 130 189.137 129.812 189.474 129.479C189.81 129.145 189.999 128.693 190 128.222V50.985C189.999 50.5135 189.81 50.0614 189.474 49.728C189.137 49.3946 188.681 49.2071 188.205 49.2065V49.2065Z"
          fill="white"
        />
        <path
          d="M188.718 49.7146C188.665 49.7147 188.614 49.6988 188.571 49.6691L117.645 0.734785C117.429 0.586562 117.173 0.507349 116.91 0.507793C116.647 0.508236 116.391 0.588315 116.176 0.737266L45.7605 49.6686C45.7329 49.6878 45.7018 49.7014 45.6689 49.7086C45.636 49.7159 45.602 49.7166 45.5689 49.7109C45.5357 49.7051 45.504 49.6929 45.4755 49.675C45.4471 49.6571 45.4225 49.6338 45.4032 49.6065C45.3839 49.5792 45.3701 49.5483 45.3628 49.5158C45.3555 49.4832 45.3547 49.4495 45.3606 49.4166C45.3664 49.3838 45.3787 49.3524 45.3967 49.3242C45.4148 49.296 45.4383 49.2717 45.4659 49.2525L115.881 0.321181C116.183 0.11268 116.541 0.000601028 116.909 2.41049e-06C117.277 -0.000596207 117.636 0.110313 117.938 0.317831L188.864 49.252C188.909 49.2829 188.943 49.3272 188.96 49.3784C188.978 49.4296 188.979 49.4851 188.962 49.5367C188.946 49.5883 188.913 49.6334 188.869 49.6654C188.825 49.6974 188.772 49.7146 188.718 49.7146L188.718 49.7146Z"
          fill="#3F3D56"
        />
        <path
          d="M49.7842 51.4494L116.979 2.11377L184.685 54.9598L120.442 92.6889L85.5631 84.8128L49.7842 51.4494Z"
          fill="#E6E6E6"
        />
        <path
          d="M88.5074 115.992H55.3112C55.1074 115.993 54.9055 115.953 54.7171 115.876C54.5287 115.799 54.3575 115.686 54.2133 115.543C54.069 115.4 53.9546 115.231 53.8765 115.044C53.7985 114.858 53.7583 114.658 53.7583 114.456C53.7583 114.254 53.7985 114.054 53.8765 113.867C53.9546 113.681 54.069 113.511 54.2133 113.369C54.3575 113.226 54.5287 113.113 54.7171 113.036C54.9055 112.959 55.1074 112.919 55.3112 112.919H88.5074C88.7113 112.919 88.9132 112.959 89.1016 113.036C89.29 113.113 89.4612 113.226 89.6054 113.369C89.7496 113.511 89.864 113.681 89.9421 113.867C90.0202 114.054 90.0603 114.254 90.0603 114.456C90.0603 114.658 90.0202 114.858 89.9421 115.044C89.864 115.231 89.7496 115.4 89.6054 115.543C89.4612 115.686 89.29 115.799 89.1016 115.876C88.9132 115.953 88.7113 115.993 88.5074 115.992V115.992Z"
          fill={accentColor}
        />
        <path
          d="M67.2213 109.386H55.3112C55.1074 109.387 54.9055 109.347 54.7171 109.27C54.5287 109.193 54.3575 109.08 54.2133 108.937C54.069 108.794 53.9546 108.625 53.8765 108.438C53.7985 108.252 53.7583 108.052 53.7583 107.85C53.7583 107.648 53.7985 107.448 53.8765 107.261C53.9546 107.075 54.069 106.905 54.2133 106.763C54.3575 106.62 54.5287 106.507 54.7171 106.43C54.9055 106.353 55.1074 106.313 55.3112 106.313H67.2213C67.4251 106.313 67.627 106.353 67.8154 106.43C68.0038 106.507 68.175 106.62 68.3192 106.763C68.4634 106.905 68.5779 107.075 68.6559 107.261C68.734 107.448 68.7742 107.648 68.7742 107.85C68.7742 108.052 68.734 108.252 68.6559 108.438C68.5779 108.625 68.4634 108.794 68.3192 108.937C68.175 109.08 68.0038 109.193 67.8154 109.27C67.627 109.347 67.4251 109.387 67.2213 109.386Z"
          fill={accentColor}
        />
        <path
          d="M117.924 78.9283C117.672 78.9286 117.422 78.8801 117.189 78.7855L75.7471 61.7506V8.42838C75.7476 7.95686 75.9369 7.50482 76.2735 7.17141C76.61 6.838 77.0663 6.65045 77.5423 6.6499H157.045C157.521 6.65045 157.977 6.838 158.314 7.17141C158.65 7.50482 158.839 7.95686 158.84 8.42838V61.7878L158.762 61.8208L118.683 78.7772C118.443 78.8771 118.185 78.9285 117.924 78.9283V78.9283Z"
          fill="white"
        />
        <path
          d="M117.924 79.0553C117.655 79.0556 117.389 79.0039 117.14 78.9032L75.6189 61.8355V8.42846C75.6195 7.92326 75.8223 7.43892 76.1829 7.08169C76.5435 6.72446 77.0324 6.52352 77.5423 6.52295H157.045C157.555 6.52352 158.044 6.72446 158.404 7.08169C158.765 7.43892 158.968 7.92326 158.968 8.42846V61.8717L118.733 78.894C118.477 79.0007 118.202 79.0555 117.924 79.0553V79.0553ZM76.1318 61.4961L117.335 78.4334C117.72 78.5879 118.15 78.5853 118.533 78.4263L158.455 61.5363V8.42846C158.455 8.05798 158.306 7.70281 158.042 7.44085C157.777 7.17889 157.419 7.03152 157.045 7.03108H77.5423C77.1684 7.03152 76.8099 7.17889 76.5454 7.44085C76.281 7.70281 76.1323 8.05799 76.1318 8.42846V61.4961Z"
          fill="#3F3D56"
        />
        <path
          d="M188.205 49.2065H188.153L158.712 61.6609L118.43 78.7013C118.272 78.7668 118.103 78.8011 117.933 78.8019C117.762 78.8028 117.593 78.7703 117.435 78.7063L75.8754 61.6254L45.7105 49.2269L45.6644 49.2065H45.6131C45.1371 49.2071 44.6808 49.3946 44.3443 49.728C44.0077 50.0614 43.8184 50.5135 43.8179 50.985V128.222C43.8184 128.693 44.0077 129.145 44.3443 129.479C44.6808 129.812 45.1371 130 45.6131 130H188.205C188.681 130 189.137 129.812 189.474 129.479C189.81 129.145 189.999 128.693 190 128.222V50.985C189.999 50.5135 189.81 50.0614 189.474 49.728C189.137 49.3946 188.681 49.2071 188.205 49.2065V49.2065ZM189.487 128.222C189.487 128.558 189.352 128.881 189.111 129.12C188.871 129.358 188.545 129.492 188.205 129.492H45.6131C45.273 129.492 44.947 129.358 44.7065 129.12C44.4661 128.881 44.3309 128.558 44.3308 128.222V50.985C44.3313 50.6565 44.4599 50.3409 44.6898 50.1041C44.9197 49.8674 45.233 49.7279 45.5644 49.7147L75.8754 62.1742L117.237 79.1764C117.685 79.3568 118.187 79.3541 118.632 79.1687L158.712 62.2123L188.256 49.7147C188.587 49.7288 188.899 49.8688 189.129 50.1054C189.358 50.342 189.486 50.657 189.487 50.985V128.222Z"
          fill="#3F3D56"
        />
        <path
          d="M111.473 26.5822H83.2621C82.718 26.5822 82.1961 26.368 81.8114 25.9869C81.4266 25.6057 81.2104 25.0887 81.2104 24.5496C81.2104 24.0106 81.4266 23.4936 81.8114 23.1124C82.1961 22.7312 82.718 22.5171 83.2621 22.5171H111.473C112.017 22.5171 112.539 22.7312 112.923 23.1124C113.308 23.4936 113.524 24.0106 113.524 24.5496C113.524 25.0887 113.308 25.6057 112.923 25.9869C112.539 26.368 112.017 26.5822 111.473 26.5822Z"
          fill={accentColor}
        />
        <path
          d="M96.8545 17.944H83.2621C82.718 17.944 82.1961 17.7298 81.8114 17.3487C81.4266 16.9675 81.2104 16.4505 81.2104 15.9114C81.2104 15.3724 81.4266 14.8554 81.8114 14.4742C82.1961 14.0931 82.718 13.8789 83.2621 13.8789H96.8545C97.3986 13.8789 97.9205 14.0931 98.3053 14.4742C98.69 14.8554 98.9062 15.3724 98.9062 15.9114C98.9062 16.4505 98.69 16.9675 98.3053 17.3487C97.9205 17.7298 97.3986 17.944 96.8545 17.944Z"
          fill={accentColor}
        />
        <path
          d="M138.393 46.9074H95.3078C94.7636 46.9074 94.2418 46.6932 93.857 46.3121C93.4723 45.9309 93.2561 45.4139 93.2561 44.8748C93.2561 44.3358 93.4723 43.8188 93.857 43.4376C94.2418 43.0564 94.7636 42.8423 95.3078 42.8423H138.393C138.937 42.8423 139.459 43.0564 139.844 43.4376C140.229 43.8188 140.445 44.3358 140.445 44.8748C140.445 45.4139 140.229 45.9309 139.844 46.3121C139.459 46.6932 138.937 46.9074 138.393 46.9074Z"
          fill="#CCCCCC"
        />
        <path
          d="M138.393 56.3082H95.3078C94.7636 56.3082 94.2418 56.0941 93.857 55.7129C93.4723 55.3318 93.2561 54.8148 93.2561 54.2757C93.2561 53.7366 93.4723 53.2197 93.857 52.8385C94.2418 52.4573 94.7636 52.2432 95.3078 52.2432H138.393C138.937 52.2432 139.459 52.4573 139.844 52.8385C140.229 53.2197 140.445 53.7366 140.445 54.2757C140.445 54.8148 140.229 55.3318 139.844 55.7129C139.459 56.0941 138.937 56.3082 138.393 56.3082Z"
          fill="#CCCCCC"
        />
        <path
          d="M10.5015 58.6842C10.2349 58.6837 9.97671 58.592 9.77056 58.4246C9.5644 58.2572 9.42297 58.0244 9.37021 57.7655L8.43703 53.157C7.94213 50.7125 8.44772 48.1733 9.84258 46.0981C11.2374 44.0229 13.4073 42.5816 15.8748 42.0913C18.3423 41.601 20.9054 42.1019 23.0001 43.4837C25.0949 44.8656 26.5497 47.0152 27.0446 49.4597L27.9776 54.0683C28.0374 54.3655 27.9758 54.6741 27.8063 54.9264C27.6367 55.1787 27.3731 55.3541 27.0732 55.414L10.7289 58.6617C10.654 58.6766 10.5778 58.6841 10.5015 58.6842Z"
          fill="#2F2E41"
        />
        <path
          d="M39.5174 127.303L36.5855 127.302L35.1914 116.099L39.5184 116.099L39.5174 127.303Z"
          fill="#A0616A"
        />
        <path
          d="M34.4913 126.473H40.1457V130H30.9312C30.9312 129.064 31.3062 128.167 31.9739 127.506C32.6415 126.844 33.5471 126.473 34.4913 126.473Z"
          fill="#2F2E41"
        />
        <path
          d="M8.96806 127.274L6.26831 126.141L9.39404 115.286L13.3784 116.958L8.96806 127.274Z"
          fill="#A0616A"
        />
        <path
          d="M4.66669 124.568L9.87331 126.753L8.48485 130L-3.76036e-05 126.44C0.182299 126.014 0.447642 125.627 0.780848 125.302C1.11405 124.977 1.50859 124.72 1.94194 124.546C2.37529 124.373 2.83895 124.285 3.30646 124.289C3.77398 124.292 4.23618 124.387 4.66669 124.568V124.568Z"
          fill="#2F2E41"
        />
        <path
          d="M18.0096 57.5292C21.4884 57.5292 24.3085 54.7353 24.3085 51.289C24.3085 47.8426 21.4884 45.0488 18.0096 45.0488C14.5308 45.0488 11.7107 47.8426 11.7107 51.289C11.7107 54.7353 14.5308 57.5292 18.0096 57.5292Z"
          fill="#A0616A"
        />
        <path
          d="M18.3076 79.6766L18.243 79.4687C16.5266 73.9416 14.7524 68.2288 12.9758 62.7954L12.9277 62.6488L13.0369 62.5388C15.7946 59.7597 20.9608 58.6512 25.0543 59.9611C29.1741 61.2786 32.0131 64.9741 31.6582 68.5573C31.4694 70.7099 32.0532 72.8596 33.3067 74.6278L33.4711 74.864L33.2141 74.997C28.612 77.3431 23.6478 78.914 18.525 79.6453L18.3076 79.6766Z"
          fill="#3F3D56"
        />
        <path
          d="M10.7109 125.261C10.4863 125.26 10.2657 125.201 10.0714 125.09L6.66889 123.143C6.38978 122.985 6.18108 122.729 6.08454 122.425C5.988 122.121 6.01074 121.793 6.14821 121.505L13.7088 103.733L19.4871 77.8115L30.0175 74.0181L30.1132 74.0617C41.403 79.1994 40.5304 116.025 40.2407 123.355C40.2277 123.663 40.1019 123.956 39.8868 124.18C39.6717 124.403 39.382 124.541 39.0717 124.568L35.9051 124.978C35.5832 125.006 35.2623 124.914 35.0056 124.719C34.7488 124.525 34.5749 124.242 34.5179 123.927L28.0533 95.3054C28.0468 95.2511 28.0227 95.2002 27.9847 95.1605C27.9467 95.1207 27.8968 95.0942 27.8424 95.0848C27.7902 95.0749 27.7362 95.0817 27.6881 95.1041C27.6401 95.1266 27.6005 95.1637 27.5751 95.2099L11.8322 124.609C11.7493 124.757 11.6374 124.887 11.503 124.991C11.3687 125.095 11.2147 125.171 11.0501 125.215C10.9396 125.245 10.8255 125.26 10.7109 125.261V125.261Z"
          fill="#2F2E41"
        />
        <path
          d="M14.4929 99.1409C14.6918 98.8537 14.8246 98.5268 14.8821 98.1832C14.9396 97.8396 14.9204 97.4877 14.8257 97.1522C14.7311 96.8168 14.5634 96.506 14.3344 96.2417C14.1054 95.9775 13.8207 95.7661 13.5003 95.6227L13.6725 90.1812L10.3601 89.271L10.2259 96.9588C10.0183 97.5079 10.0212 98.1135 10.2341 98.6606C10.447 99.2077 10.8551 99.6585 11.381 99.9275C11.907 100.196 12.5143 100.265 13.0878 100.12C13.6614 99.975 14.1613 99.6267 14.4929 99.1409H14.4929Z"
          fill="#A0616A"
        />
        <path
          d="M10.2747 93.3892L10.0803 93.3882C9.75992 93.3861 9.45206 93.2644 9.21809 93.0476C8.98411 92.8307 8.84118 92.5344 8.81776 92.2178C8.50006 88.1652 7.52443 74.3604 8.31016 66.876C8.41426 66.1775 8.65882 65.5069 9.02934 64.9038C9.39987 64.3007 9.88882 63.7774 10.4672 63.3649C11.0456 62.9525 11.7017 62.6592 12.3966 62.5026C13.0915 62.3459 13.8111 62.3291 14.5127 62.453L14.715 62.4973L14.7135 62.7026C14.6415 72.5498 14.6461 82.3395 14.6506 91.807C14.6513 92.0961 14.5524 92.3767 14.3703 92.6026C14.1882 92.8285 13.9338 92.986 13.649 93.0493C12.539 93.2768 11.4083 93.3907 10.2747 93.3892Z"
          fill={accentColor}
        />
        <path
          d="M17.8153 105.199C16.9674 105.195 16.1499 104.885 15.5162 104.327C14.8824 103.769 14.4759 103.001 14.3729 102.167L14.6518 79.4406L10.0922 68.0152C9.90037 66.5143 10.2263 64.9931 11.017 63.6988C11.8077 62.4045 13.0169 61.4129 14.4481 60.8852L15.6671 60.4323C15.8974 60.3467 16.1425 60.3071 16.3883 60.3156C16.6342 60.3241 16.8759 60.3806 17.0996 60.4819C17.3234 60.5832 17.5247 60.7273 17.6921 60.9058C17.8595 61.0844 17.9897 61.294 18.0751 61.5225L22.7767 74.0982L22.7779 74.1166C23.1039 79.1217 24.5753 104.033 21.6416 104.776C20.3986 105.064 19.1254 105.206 17.8487 105.198L17.8153 105.199Z"
          fill={accentColor}
        />
        <path
          d="M44.9018 90.5607C44.576 90.4298 44.2832 90.2297 44.0439 89.9746C43.8046 89.7194 43.6247 89.4153 43.5169 89.0839C43.409 88.7524 43.3759 88.4015 43.4197 88.0559C43.4636 87.7103 43.5834 87.3785 43.7707 87.0838L40.5972 82.6391L42.8532 80.0698L47.2459 86.4088C47.7248 86.7534 48.0595 87.26 48.1866 87.8327C48.3137 88.4055 48.2243 89.0044 47.9354 89.5162C47.6464 90.028 47.178 90.417 46.6189 90.6095C46.0598 90.802 45.4489 90.7847 44.9018 90.5607H44.9018Z"
          fill="#A0616A"
        />
        <path
          d="M41.7328 84.8488C41.567 84.8439 41.4049 84.7996 41.26 84.7197C41.1151 84.6397 40.9917 84.5265 40.9002 84.3895L40.8836 84.3645C35.6325 76.4909 30.2028 68.3493 24.6996 60.233L24.6404 60.1456L24.7161 60.0716C25.1988 59.6253 25.7676 59.2803 26.3883 59.0573C27.0091 58.8343 27.6689 58.7379 28.3282 58.774C29.0069 58.7862 29.6753 58.9402 30.2899 59.2258C30.9045 59.5114 31.4513 59.9221 31.8948 60.4313C36.7038 66.228 43.5671 78.2591 45.5561 81.8086C45.6816 82.0289 45.7188 82.2881 45.6601 82.5344C45.6015 82.7807 45.4514 82.9961 45.2396 83.1377C44.263 83.7964 43.2169 84.3477 42.1197 84.7819C41.9966 84.8298 41.865 84.8526 41.7328 84.8488Z"
          fill={accentColor}
        />
        <path
          d="M39.9698 100.134C36.8246 100.136 25.5712 78.6696 23.3473 74.3663L23.328 74.3142L20.8679 61.1463C20.8231 60.9067 20.8265 60.6607 20.878 60.4224C20.9294 60.1841 21.0279 59.9582 21.1677 59.7577C21.3075 59.5572 21.4859 59.386 21.6926 59.254C21.8994 59.122 22.1304 59.0317 22.3725 58.9884L23.6538 58.7589C25.1559 58.4861 26.707 58.7243 28.0552 59.4349C29.4035 60.1455 30.4697 61.2867 31.0808 62.6732L34.2954 76.0594L45.0444 94.1521C45.3974 94.9272 45.4493 95.8041 45.1901 96.6148C44.9309 97.4255 44.3789 98.1129 43.6398 98.5454C42.5473 99.2 41.3803 99.7242 40.1634 100.107C40.1005 100.125 40.0353 100.134 39.9698 100.134H39.9698Z"
          fill={accentColor}
        />
        <path
          d="M22.9018 51.3429H10.207V49.8185C10.2089 48.1345 10.8851 46.52 12.087 45.3293C13.289 44.1385 14.9187 43.4687 16.6185 43.4668H17.6444C19.3442 43.4687 20.9739 44.1385 22.1759 45.3293C23.3778 46.52 24.0539 48.1345 24.0559 49.8185V50.1996C24.0555 50.5027 23.9338 50.7933 23.7175 51.0077C23.5011 51.222 23.2078 51.3426 22.9018 51.3429V51.3429Z"
          fill="#2F2E41"
        />
      </g>
      <defs>
        <clipPath id="clip0_1191_3063">
          <rect width="190" height="130" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
