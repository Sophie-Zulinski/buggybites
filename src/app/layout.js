import './globals.scss';
import { AuthProvider } from '@/components/authprovider/Authprovider';

export const metadata = {
  title: 'BuggyBites',
  description: 'Finding a restaurant suitable for strollers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Istok+Web&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.10.2/css/all.css"
        />
      </head>

      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
