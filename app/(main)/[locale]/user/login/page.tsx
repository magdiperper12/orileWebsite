"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const t = useTranslations("Auth");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Add register logic
  };

  return (
    <>
      <BreadCrumb title={t("Login")} breadcrumbs={[{ name: t("Login") }]} />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Login Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-semibold">{t("LoginTitle")}</h2>
                  <p className="text-gray-600">{t("LoginSubtitle")}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t("EmailPhone")}
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder={t("EnterEmailPhone")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t("Password")}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder={t("EnterPassword")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 text-green-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    {t("RememberMe")}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                  {t("LoginButton")}
                </button>

                <div className="text-sm">
                  <Link href="/user/forget-password">
                    <div className="text-green-600 hover:underline">
                      {t("ForgotPassword")}
                    </div>
                  </Link>
                </div>
              </form>
            </div>

            {/* Register Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {t("RegisterTitle")}
                  </h2>
                  <p className="text-gray-600">{t("RegisterSubtitle")}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t("Name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("EnterName")}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t("Email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("EnterEmail")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t("Phone")}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder={t("EnterPhone")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t("Nationality")}
                  </label>
                  <select
                    name="nationality"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  >
                    <option value="">{t("Choose")}</option>
                    <option value="none_saudi">{t("NonSaudi")}</option>
                    <option value="saudi">{t("Saudi")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {t("NationalID")}
                  </label>
                  <input
                    type="text"
                    name="national_id"
                    placeholder={t("EnterNationalID")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t("Password")}
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder={t("EnterPassword")}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t("ConfirmPassword")}
                    </label>
                    <input
                      type="password"
                      name="password_confirmation"
                      placeholder={t("ConfirmPassword")}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    required
                    className="h-4 w-4 text-green-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    {t("AgreeToTerms")}{" "}
                    <Link href="/singlepages/Terms_&_Conditions">
                      <div className="text-green-600 hover:underline">
                        {" "}
                        {t("TermsAndConditions")}
                      </div>
                    </Link>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                  {t("RegisterButton")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
