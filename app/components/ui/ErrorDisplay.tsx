"use client";
import React from "react";
import { useTranslations } from "next-intl";

interface ErrorDisplayProps {
  title?: string;
  message?: string;
  error?: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  title,
  message,
  error,
  onRetry,
}) => {
  const t = useTranslations("Error");
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="alert alert-danger">
              <h4>{title || t("title")}</h4>
              <p>{message || t("message")}</p>
              {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
              {onRetry && (
                <button className="btn btn-primary mt-3" onClick={onRetry}>
                  {t("retry") || "إعادة المحاولة"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
