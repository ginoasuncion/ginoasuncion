export const metadata = {
  title: 'ginoasuncion.com — Work in Progress',
  description: 'Portfolio site of Gino Asuncion. Currently under construction.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}

