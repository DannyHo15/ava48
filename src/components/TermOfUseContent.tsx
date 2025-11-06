"use client";
import { EMAIL_SUPPORT } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const TermOfUseContent = () => {
  const t = useTranslations("term_of_use");
  return (
    <>
      <>
        <p dangerouslySetInnerHTML={{ __html: t.raw("DFDIs4") }} />
        <br />
        <p>{t("WARPLn")}</p>
      </>
      <>
        <br />
        <h1>{t("B0MJ8Z")}</h1>
        <br />
        <p>{t("oRkimG")}</p>
        <ul>
          <li>{t("+y9dAj")}</li>
          <li>{t("sOo+A4")}</li>
          <li>{t("qjkBJv")}</li>
          <li>{t("hmLuTK")}</li>
          <li>{t("Zs/AXS")}</li>
        </ul>
        <p>{t("qbffZi")}</p>
      </>
      <>
        <br />
        <h1>{t("6RppCv")}</h1>
        <br />
        <p>{t("WtCli0")}</p>
        <ul>
          <li>{t("8vNCgl")}</li>
          <li>{t("1ulQ3v")}</li>
          <li>{t("Ah/UBb")}</li>
        </ul>
        <p>{t("IcPz5Q")}</p>
        <ul>
          <li>{t("jnnAK1")}</li>
          <li>{t("H7Ybx9")}</li>
          <li>{t("aIU3hv")}</li>
          <li>{t("uy8BU9")}</li>
        </ul>
        <p>{t("uU/k9U")}</p>
      </>
      <>
        <br />
        <h1>{t("4r5o1k")}</h1>
        <br />
        <p>{t("gLFmKi")}</p>
        <br />
        <p>{t("s1ukov")}</p>
        <ul>
          <li>{t("9Psbbm")}</li>
          <li>{t("8O1HYg")}</li>
          <li>{t("XcQoNx")}</li>
          <li>{t("QvLfa6")}</li>
        </ul>
        <p>{t("CaOzIB")}</p>
      </>
      <>
        <br />
        <h1>{t("pa4shm")}</h1>
        <br />
        <p>{t("71GZEs")}</p>
        <ul>
          <li>{t("h63LNS")}</li>
          <li>{t("Hie7ry")}</li>
          <li>{t("TGOYmE")}</li>
        </ul>
        <p>{t("oY7Xqy")}</p>
        <ul>
          <li>
            <b>{t("3DKG5+")}</b>&nbsp;{t("wnQGH2")}
          </li>
          <li>
            <b>{t("buPUXQ")}</b>&nbsp;{t("3RbACV")}
          </li>
          <li>
            <b>{t("9R3fpy")}</b>&nbsp;{t("8rLZrO")}
          </li>
          <li>
            <b>{t("f8tUpp")}</b>&nbsp;{t("cy8KUi")}
          </li>
          <li>
            <b>{t("Xz/0JK")}</b>&nbsp;{t("anHwMc")}
          </li>
        </ul>
        <p>{t("fhTSwz")}</p>
      </>
      <>
        <br />
        <h1>{t("wVmORr")}</h1>
        <br />
        <p>{t("LV4onk")}</p>
        <br />
        <b>{t("YNDFee")}</b>
        <br />
        <ul>
          <li>
            <b>{t("gpbB1h")}</b>&nbsp;{t("lkfeUT")}
          </li>
          <li>
            <b>{t("cO7bh4")}</b>&nbsp;{t("C+FAxN")}
          </li>
          <li>
            <b>{t("fzm2nq")}</b>&nbsp;{t("V0rskZ")}
          </li>
        </ul>
        <b>{t("XqeJaj")}</b>
        <ul>
          <li>{t("C7V4Y0")}</li>
          <li>{t("eYkBot")}</li>
          <li>{t("TmYmwK")}</li>
          <li>{t("P2hpuc")}</li>
          <li>{t("S98DtX")}</li>
        </ul>
        <p>{t("/vCx3X")}</p>
      </>
      <>
        <br />
        <h1>{t("ljzPXW")}</h1>
        <br />
        <p>{t("9Xm5Ra")}</p>
        <br />
        <p>{t("s1ukov")}</p>
        <ul>
          <li>{t("KcZBKI")}</li>
          <li>{t("+pSWGy")}</li>
          <li>{t("KZdvvZ")}</li>
        </ul>
        <p>{t("249KPJ")}</p>
      </>
      <>
        <br />
        <h1>{t("BUbK13")}</h1>
        <br />
        <p>
          {t.rich("wprRp+", {
            privacy: () => (
              <Link
                href={"/privacy-policy"}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                {t("vx0nkZ")}
              </Link>
            ),
          })}
        </p>
        <br />
        <p>{t("bcWKMg")}</p>
        <ul>
          <li>
            <b>{t("ZG6wMC")}</b>&nbsp;{t("mYC0Ye")}
          </li>
          <li>
            <b>{t("F0qZbb")}</b>&nbsp;{t("8IO6cA")}
          </li>
          <li>
            <b>{t("4mZ2mX")}</b>&nbsp;{t("PLUZnb")}
          </li>
          <li>
            <b>{t("y8N5kd")}</b>&nbsp;{t("jQkLo3")}
          </li>
        </ul>
        <p>
          {t.rich("C7u4iq", {
            privacy: () => (
              <Link
                href={"/privacy-policy"}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                {t("vx0nkZ")}
              </Link>
            ),
          })}
        </p>
      </>
      <>
        <br />
        <h1>{t("CdZs5M")}</h1>
        <br />
        <p>{t("y/jFxo")}</p>
        <ul>
          <li>{t("NR/VJ7")}</li>
          <li>{t("IZqNfQ")}</li>
          <li>{t("+W0SyO")}</li>
          <li>{t("iAvh8y")}</li>
        </ul>
        <b>{t("h5nYpF")}</b>
        <br />
        <br />
        <p>{t("JgoMbJ")}</p>
        <br />
        <b>{t("mhSl4+")}</b>
        <br />
        <br />
        <p>{t("cU4qm/")}</p>
        <ul>
          <li>{t("gFDorx")}</li>
          <li>{t("1MuYMr")}</li>
          <li>{t("G0EKnf")}</li>
          <li>{t("s+WJ15")}</li>
        </ul>
        <p>{t("TQwn//")}</p>
      </>
      <>
        <br />
        <h1>{t("Ezi0qh")}</h1>
        <br />
        <p>{t("n62Wph")}</p>
        <ul>
          <li>{t("VnPc2S")}</li>
          <li>{t("Fw74xw")}</li>
          <li>{t("HS7Qhj")}</li>
          <li>{t("HSSXzW")}</li>
        </ul>
        <p>{t("PeFoSG")}</p>
        <ul>
          <li>{t("sWJu/+")}</li>
          <li>{t("pFAD0k")}</li>
          <li>{t("bAvWya")}</li>
        </ul>
        <p>{t("nZC/l9")}</p>
      </>
      <>
        <br />
        <h1>{t("/yPzb8")}</h1>
        <br />
        <p>{t("RORj5E")}</p>
        <br />
        <p>{t("g9Rnxz")}</p>
        <br />
        <p>{t("5/muhQ")}</p>
      </>
      <>
        <br />
        <h1>{t("lbdMII")}</h1>
        <br />
        <h2>{t("e3xbJ5")}</h2>
        <br />
        <p>{t("CKQP4J")}</p>
        <ul>
          <li>{t("gOyvrZ")}</li>
          <li>{t("kg5azw")}</li>
          <li>{t("u6PW3Y")}</li>
        </ul>
        <p>{t("dYhoW3")}</p>
        <br />
        <h2>{t("m9wIYN")}</h2>
        <br />
        <p>{t("Wh1F98")}</p>
        <ul>
          <li>{t("tO02lq")}</li>
          <li>{t("w7BoEk")}</li>
          <li>{t("tnoRLS")}</li>
          <li>{t("FvdORy")}</li>
          <li>{t("4OcLJ5")}</li>
        </ul>
        <p>{t("CJ/22c")}</p>
      </>
      <>
        <br />
        <h1>{t("7EnbBz")}</h1>
        <br />
        <p>{t("pwDb92")}</p>
        <br />
        <b>{t("9JGwce")}</b>
        <br />
        <br />
        <p>{t("aEI9HX")}</p>
        <ul>
          <li>{t("d4lamv")}</li>
          <li>{t("zab0nc")}</li>
        </ul>
        <p>{t("nRDtAs")}</p>
        <br />
        <b>{t("aiM/+z")}</b>
        <br />
        <br />
        <p>{t("9Y0feK")}</p>
      </>
      <>
        <br />
        <h1>{t("bnuJk6")}</h1>
        <br />
        <p>{t("7mS6Ou")}</p>
        <b>
          {t("xpTPb3")}&nbsp;
          <a
            href={`mailto:${EMAIL_SUPPORT}`}
            className="text-primary hover:underline"
          >
            {EMAIL_SUPPORT}
          </a>
        </b>
      </>
    </>
  );
};
export default TermOfUseContent;
