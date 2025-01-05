import {
  ButtonComponent,
  NavItemComponent,
  TextInputComponent,
} from "../components";

function ComponentsPage() {
  return (
    <div className="flex flex-col col-span-6 gap-12">
      <ButtonComponent />
      <TextInputComponent />
      <NavItemComponent />
    </div>
  );
}

export default ComponentsPage;
