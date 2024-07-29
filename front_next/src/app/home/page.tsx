"use client";
import styled from "styled-components";

//icons
import { CiSquarePlus } from "react-icons/ci";

//components
import Header from "@/components/Header/Header";
import HeaderMain from "@/components/HeaderMain/HeaderMain";
import Links from "@/components/Links/Links";

const Data = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  padding: 1.5rem;

  margin-left: 1rem;

  z-index: 20;
`;

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <HeaderMain />

      <Data>
        <Links />
        <div>
          <CiSquarePlus size={45} />
        </div>
        {children}
      </Data>
    </div>
  );
}
