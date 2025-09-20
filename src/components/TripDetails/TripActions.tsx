"use client";

import { FiHeart, FiShare2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
} from "react-share";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface TripActionsProps {
  hasStarted: boolean;
  startTrip: (id: number) => void;
  id: number;
  wishlist: boolean;
  toggleWishlist: (id: number) => void;
}

export default function TripActions({
  hasStarted,
  startTrip,
  id,
  wishlist,
  toggleWishlist,
}: TripActionsProps) {
  const { t } = useTranslation();
  const [showShare, setShowShare] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = t("shareTitle"); // Translatable share title

  return (
    <div className="flex flex-wrap gap-4 relative">
      {/* Start Trip */}
      <button
        onClick={() => startTrip(id)}
        className={`flex items-center gap-2 font-semibold py-2 px-4 rounded shadow-md transition ${
          hasStarted
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
        disabled={hasStarted}
      >
        {hasStarted ? t("tripStarted") : t("startTrip")}
      </button>

      {/* Share Button with Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowShare((prev) => !prev)}
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow-md transition"
        >
          <FiShare2 /> {t("share")}
        </button>

        {showShare && (
          <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg p-3 flex gap-3 z-50">
            <FacebookShareButton url={shareUrl} title={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl} title={title} separator=" - ">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <TelegramShareButton url={shareUrl} title={title}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <EmailShareButton url={shareUrl} subject={t("shareEmailSubject")} body={title}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        )}
      </div>

      {/* Wishlist */}
      <button
        onClick={() => toggleWishlist(id)}
        className={`flex items-center gap-2 py-2 px-4 rounded shadow-md transition ${
          wishlist
            ? "bg-red-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white"
        }`}
      >
        {wishlist ? <AiFillHeart /> : <FiHeart />} {t("wishlist")}
      </button>
    </div>
  );
}
