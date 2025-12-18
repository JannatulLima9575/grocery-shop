"use client";

import AccountHeader from "./components/AccountHeader";
import AccountSecurity from "./components/AccountSecurity";
import MyOrders from "./components/MyOrders";
import ProfileCard from "./components/ProfileCard";
import Watchlist from "./components/Watchlist";



export default function page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <AccountHeader />
      <ProfileCard />
      <Watchlist />
      <MyOrders />
      <AccountSecurity />
    </div>
  );
}
