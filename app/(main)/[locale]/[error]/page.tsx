"use client";

import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-3 text-danger fw-bold">OPS!</h1>
      <p className="lead text-muted">
        حدث خطأ غير متوقع. برجاء المحاولة لاحقًا.
      </p>
      <Link href="/" className="btn btn-success mt-3">
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default ErrorPage;
