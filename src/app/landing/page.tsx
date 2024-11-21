'use client';
import LandingFooter from "../../components/navigation/footer";
import React, { lazy } from "react";
import { useRouter } from "next/navigation";
const LazyLandingHeader = lazy(() => import("../../components/navigation/header"));

const LandingPage = () => {
  const router = useRouter();

  return (
    <div>
      <LazyLandingHeader />
      <div className="flex justify-center items-center h-screen">
        
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
