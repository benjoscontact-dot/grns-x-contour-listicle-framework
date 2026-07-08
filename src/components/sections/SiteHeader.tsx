export default function SiteHeader() {
  return (
    <header className="w-full border-b border-border bg-background py-4 flex items-center justify-center">
      {/* PLACEHOLDER: Replace with your brand logo image or wordmark */}
      <a href="#hero" className="flex items-center gap-2">
        <img
          src="https://contourinsoles.com/cdn/shop/files/imgi_1_contour_logo_360x_8087059c-f662-45cd-840b-f594f64f01ff.png?v=1780908437&width=700"
          alt="Contour Custom Insoles"
          className="h-8 w-auto object-contain"
        />
      </a>
    </header>
  )
}
