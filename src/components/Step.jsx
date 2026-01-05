import React from "react";

function Step({ number, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition">
      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

export default Step;
