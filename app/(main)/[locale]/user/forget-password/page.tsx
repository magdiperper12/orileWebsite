"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import { useTranslations } from "next-intl";
import React from "react";

const ForgetPassword = () => {
  const t = useTranslations("Auth");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
      <BreadCrumb
        title={t("ForgotPassword")}
        breadcrumbs={[{ name: t("ForgotPassword") }]}
      />

      <div className="all_form_reset login">
        <div className="container meet-our-team our-team">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card-body">
                <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 login_form_container">
                  <div className="login-form">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group row">
                        <label htmlFor="email">{t("Email")}</label>
                        <div>
                          <input
                            id="email"
                            type="email"
                            className="col-md-8 form-control"
                            placeholder={t("EnterEmail")}
                            name="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-0 text-center">
                        <div className="contact-form-btn">
                          <button type="submit" className="btn-default">
                            {t("SendResetLink")}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
