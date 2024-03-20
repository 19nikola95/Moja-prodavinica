export function MainLayout({children}) {
  return <>
    <header className="MainLayout__header">
      <nav className="MainLayout__navigation">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Stores</li>
       </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="MainLayout__footer"></footer>
  </>
}