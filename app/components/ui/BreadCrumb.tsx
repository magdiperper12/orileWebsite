import Link from 'next/link'
import React from 'react'
import { useTranslations } from "next-intl";

interface SubpageHeaderProps {
    title: string;
    breadcrumbs: { name: string; href?: string }[];
  }

const BreadCrumb = ({ title, breadcrumbs }: SubpageHeaderProps) => {

  const t = useTranslations("NavBar");
  return (
    // <<!-- Main Menu Start -->
    <div className="subpage-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Sub page Header start */}
          <div className="subpage-header-box">
            <h1 className="text-anime-style-3">{title}</h1>
            <ol className="breadcrumb wow fadeInUp">
              <li>
                <Link href="/">{t('Home')}</Link>
              </li>
              {breadcrumbs.map((breadcrumb, index) => (
                  <li key={index}>
                    {breadcrumb.href ? (
                      <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
                    ) : (
                      breadcrumb.name
                    )}
                  </li>
                ))}
            </ol>
          </div>
          {/* Sub page Header End */}
        </div>
      </div>
    </div>
  </div>
    // <!-- Main Menu End -->
  )
}

export default BreadCrumb
