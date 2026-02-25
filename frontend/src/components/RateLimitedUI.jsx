import React from "react";
import { Zap } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-base-content/10">
        
        {/* Icon */}
        <div className="flex justify-center mb-4 text-warning">
          <Zap className="size-12" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-warning mb-2">
          Rate Limit Reached
        </h2>

        {/* Message */}
        <p className="text-base-content/70 mb-6">
          You’ve made too many requests in a short period of time.
          Please wait a moment before trying again.
        </p>

        {/* Button */}
        <button className="btn btn-warning w-full" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default RateLimitedUI;
