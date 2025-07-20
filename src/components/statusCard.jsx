"use client";
import { useState, useEffect } from "react";

export default function StatusCard({ status = [] }) {
  const [pingColor, setPingColor] = useState('gray-500')

  useEffect(() => {
    if (Array.isArray(status) && status.length) {
      setPingColor(status.every(item => item) ? 'green-500' : 'red-500');
    }
  }, [status]);

  return (
    <section className="flex flex-row items-center p-4 px-6 rounded-3xl shadow-[0_0_8px_gray] my-3">
      <div className="hidden select-none pointer-events-none bg-red-500 bg-gray-500 bg-green-500 after:bg-red-500 after:bg-gray-500 after:bg-green-500">pre-renders</div>

      <div className={`rounded-full size-12 relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:size-12 after:animate-(--animate-ping-reduced) m-4 bg-${pingColor} after:bg-${pingColor}`}></div>
      <h3 className="ml-1 text-4xl font-medium">
        {
          status?.length ? (
            status.every(item => item) ? "All systems Operational"
              : status.some(item => !item) ? "Some systems down"
              : "All systems down"
          ) : "Loading..."
        }
      </h3>
    </section>
  )
}