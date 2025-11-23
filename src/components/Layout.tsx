import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-sunrise">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;