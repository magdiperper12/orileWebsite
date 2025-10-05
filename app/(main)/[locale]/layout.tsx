// ❌ امسح "use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  hasLocale,
} from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";
import { getMessages } from "next-intl/server";
import AosProvider from "../../../providers/AosProvider";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import WhatsApp from "@/components/layout/WhatsApp";
import "../../globals.css";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages: AbstractIntlMessages = await getMessages();

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <div>
        <ReduxProvider>
          <NextIntlClientProvider
            locale={locale}
            timeZone="Asia/Riyadh"
            messages={messages}
          >
            <Header locale={locale} />
            <AosProvider>
              <header>
                <NavBar locale={locale} />
              </header>
              <main>{children}</main>
              <Footer />
              <WhatsApp />
            </AosProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </div>
    </div>
  );
}
