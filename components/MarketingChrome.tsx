import { Header } from './Header';
import { Footer } from './Footer';

export function MarketingChrome({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}
