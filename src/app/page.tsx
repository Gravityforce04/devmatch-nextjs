import Image from "next/image";
import { ConnectButton, } from "thirdweb/react";
import {useContract, useContractRead} from "@thirdweb-dev/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import { useState } from "react";

export default function Home() {

  const { contract } = useContract("0xc3eF77D1Bd8cEa5B3A64a6d122fdcB12465B62cB");
  const [applicationId, setApplicationId] = useState(0);
  const [amount, setAmount] = useState(0);



  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={thirdwebIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        JomClaim
        {/* <span className="text-zinc-300 inline-block mx-1"> + </span>
        <span className="inline-block -skew-x-6 text-blue-500"> Next.js </span> */}
      </h1>

      <p className="text-zinc-300 text-base">
        One claim , in one click.
      </p>
    </header>
  );
}


function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
