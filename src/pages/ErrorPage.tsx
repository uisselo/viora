import { SVGs } from "@Assets";
import { FooterComponent, HeaderComponent } from "@GlobalComponents";

function ErrorPage() {
  return (
    <>
      <HeaderComponent />
      <div className="container h-screen md:h-[40rem]">
        <div className="relative w-full h-full overflow-hidden flex-center">
          <div className="flex-col flex-center">
            <img
              src={SVGs.error_404_text}
              alt="404"
              className="scale-75 md:scale-100"
            />
            <div className="text-center  text-primary">
              <p className="text-2xl font-bold md:text-4xl">Whoops...</p>
              <p className="font-semibold lg:text-2xl">
                We can't find the page you're looking for.
              </p>
            </div>
          </div>
          <img
            src={SVGs.error_404_lipstick}
            alt="404 Lipstick"
            className="absolute top-0 left-0 scale-75 -translate-x-24 md:-translate-x-16 md:scale-100"
          />
          <img
            src={SVGs.error_404_brush}
            alt="404 Brush"
            className="absolute bottom-0 left-0 scale-75 -translate-x-32 translate-y-16 md:translate-y-8 md:scale-100"
          />
          <img
            src={SVGs.error_404_mascara}
            alt="404 Mascarra"
            className="absolute bottom-0 left-0 scale-75 -translate-x-16 translate-y-20 md:scale-100"
          />
          <img
            src={SVGs.error_404_nail_polish}
            alt="404 Nail Polish"
            className="absolute top-0 right-0 scale-75 translate-x-16 md:scale-100"
          />
          <img
            src={SVGs.error_404_palette}
            alt="404 Palette"
            className="absolute bottom-0 right-0 scale-75 translate-x-24 translate-y-20 lg:translate-x-16 md:scale-100"
          />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ErrorPage;
