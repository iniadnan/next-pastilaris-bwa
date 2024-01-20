import type { Metadata } from "next";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Making Great Business Decision - PastiLaris",
  description: "Making Great Business Decision, Track your customers behavior to make a good decision that helps the customer use our services better way.",
};

export default function Home() {
  return (
    <>
      <Footer />
    </>
  );
}