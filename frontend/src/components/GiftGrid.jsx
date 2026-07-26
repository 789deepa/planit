import React, { useState, useEffect } from "react";
import GiftCard from "./GiftCard";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function GiftGrid({ gifts }) {
  const width = useWindowWidth();
  const [numCols, setNumCols] = useState(4);

  useEffect(() => {
    if (width >= 1280) {
      setNumCols(4); // Desktop / xl
    } else if (width >= 1024) {
      setNumCols(3); // Laptop / lg
    } else if (width >= 768) {
      setNumCols(2); // Tablet / md
    } else {
      setNumCols(1); // Mobile / sm
    }
  }, [width]);

  if (!gifts || gifts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-brand-muted font-medium">No plans found. Try adjusting your parameters.</p>
      </div>
    );
  }

  // Create columns list
  const columns = Array.from({ length: numCols }, () => []);

  // Distribute gifts horizontally first (round-robin)
  gifts.forEach((gift, index) => {
    columns[index % numCols].push(gift);
  });

  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 mb-24">
      {/* Dynamic Masonry Columns Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {columns.map((colItems, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {colItems.map((gift) => (
              <GiftCard key={gift.id} gift={gift} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GiftGrid;
