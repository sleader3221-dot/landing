import "./globals.css";

export const metadata = {
  title: "DukaanSe",
  description: "Smart living with zero delivery fee.",
  icons: {
    icon: "/file.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
