/** Light fade-in on every navigation. Pure CSS so server-rendered content is never hidden waiting for JS. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade">{children}</div>;
}
